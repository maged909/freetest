/*
 * Copyright: (c) 2024, Alex Kaul
 * GNU General Public License v3.0 or later (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

import { AppStore } from '@/application/interfaces/store';
import { DialogProvider } from '@/application/interfaces/dialogProvider';
import { EntityId } from '@/base/entity';
import { getOneFromEntityCollection } from '@/base/entityCollection';
import { WriteProjectFileUseCase } from '@/application/useCases/projectManager/writeProjectFile';

type Deps = {
  appStore: AppStore;
  dialogProvider: DialogProvider;
  writeProjectFileUseCase: WriteProjectFileUseCase;
}

export function createExportProjectFromProjectManagerUseCase({
  appStore,
  dialogProvider,
  writeProjectFileUseCase,
}: Deps) {
  const useCase = async (projectId: EntityId) => {
    const state = appStore.get();

    const project = getOneFromEntityCollection(state.entities.projects, projectId);
    if (!project) return;

    const workflows = project.workflowIds
      .map(id => state.entities.workflows[id])
      .filter(Boolean);

    const widgetIds = new Set<string>();
    for (const wfl of workflows) {
      for (const item of wfl.layout) {
        widgetIds.add(item.widgetId);
      }
    }

    const widgets = Array.from(widgetIds)
      .map(id => state.entities.widgets[id])
      .filter(Boolean);

    const exportData = { version: 1, project, workflows, widgets };
    const json = JSON.stringify(exportData, null, 2);

    const result = await dialogProvider.showSaveFileDialog({
      title: 'Export Project',
      defaultPath: `${project.settings.name}.freeter`,
      filters: [{ name: 'Freeter Project', extensions: ['freeter'] }],
    });

    if (result.canceled || !result.filePath) return;

    await writeProjectFileUseCase(result.filePath, json);
  };

  return useCase;
}

export type ExportProjectFromProjectManagerUseCase = ReturnType<typeof createExportProjectFromProjectManagerUseCase>;
