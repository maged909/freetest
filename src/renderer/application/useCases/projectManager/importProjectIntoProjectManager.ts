/*
 * Copyright: (c) 2024, Alex Kaul
 * GNU General Public License v3.0 or later (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

import { IdGenerator } from '@/application/interfaces/idGenerator';
import { AppStore } from '@/application/interfaces/store';
import { DialogProvider } from '@/application/interfaces/dialogProvider';
import { Project } from '@/base/project';
import { Workflow } from '@/base/workflow';
import { Widget } from '@/base/widget';
import { addManyToEntityCollection, addOneToEntityCollection } from '@/base/entityCollection';
import { modalScreensStateActions } from '@/base/state/actions';
import { ReadProjectFileUseCase } from '@/application/useCases/projectManager/readProjectFile';

interface FreeterProjectExport {
  version: number;
  project: Project;
  workflows: Workflow[];
  widgets: Widget[];
}

type Deps = {
  appStore: AppStore;
  idGenerator: IdGenerator;
  dialogProvider: DialogProvider;
  readProjectFileUseCase: ReadProjectFileUseCase;
}

export function createImportProjectIntoProjectManagerUseCase({
  appStore,
  idGenerator,
  dialogProvider,
  readProjectFileUseCase,
}: Deps) {
  const useCase = async () => {
    const result = await dialogProvider.showOpenFileDialog({
      title: 'Import Project',
      filters: [{ name: 'Freeter Project', extensions: ['freeter'] }],
    });

    if (result.canceled || !result.filePaths[0]) return;

    const content = await readProjectFileUseCase(result.filePaths[0]);
    if (!content) return;

    let exportData: FreeterProjectExport;
    try {
      exportData = JSON.parse(content) as FreeterProjectExport;
      if (exportData.version !== 1 || !exportData.project) return;
    } catch {
      return;
    }

    // Remap all IDs to fresh ones
    const idMap: Record<string, string> = {};

    const newWidgets: Widget[] = (exportData.widgets || []).map(wgt => {
      const newId = idGenerator();
      idMap[wgt.id] = newId;
      const { exposedApi: _drop, ...rest } = wgt as Widget & { exposedApi?: unknown };
      return { ...rest, id: newId };
    });

    const newWorkflows: Workflow[] = (exportData.workflows || []).map(wfl => {
      const newWflId = idGenerator();
      idMap[wfl.id] = newWflId;
      return {
        ...wfl,
        id: newWflId,
        layout: wfl.layout.map(item => ({
          ...item,
          id: idGenerator(),
          widgetId: idMap[item.widgetId] ?? item.widgetId,
        })),
      };
    });

    const newProjectId = idGenerator();
    const newProject: Project = {
      ...exportData.project,
      id: newProjectId,
      workflowIds: exportData.project.workflowIds.map(id => idMap[id]).filter(Boolean),
      currentWorkflowId: idMap[exportData.project.currentWorkflowId] ?? '',
    };

    let state = appStore.get();

    state = {
      ...state,
      entities: {
        ...state.entities,
        projects: addOneToEntityCollection(state.entities.projects, newProject),
        workflows: addManyToEntityCollection(state.entities.workflows, newWorkflows),
        widgets: addManyToEntityCollection(state.entities.widgets, newWidgets),
      },
      ui: {
        ...state.ui,
        projectSwitcher: {
          ...state.ui.projectSwitcher,
          projectIds: [...state.ui.projectSwitcher.projectIds, newProjectId],
        },
      },
    };

    // Keep modal in sync if it's open
    const { projectManager } = state.ui.modalScreens.data;
    if (
      projectManager.projects !== null &&
      projectManager.projectIds !== null &&
      projectManager.deleteProjectIds !== null
    ) {
      state = modalScreensStateActions.updateModalScreen(state, 'projectManager', {
        projects: addOneToEntityCollection(projectManager.projects, newProject),
        projectIds: [...projectManager.projectIds, newProjectId],
        deleteProjectIds: { ...projectManager.deleteProjectIds, [newProjectId]: false },
      });
    }

    appStore.set(state);
  };

  return useCase;
}

export type ImportProjectIntoProjectManagerUseCase = ReturnType<typeof createImportProjectIntoProjectManagerUseCase>;
