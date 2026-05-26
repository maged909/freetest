/*
 * Copyright: (c) 2024, Alex Kaul
 * GNU General Public License v3.0 or later (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

import { readFile, writeFile } from 'node:fs/promises';
import { Controller } from '@/controllers/controller';
import {
  IpcReadProjectFileArgs, ipcReadProjectFileChannel, IpcReadProjectFileRes,
  IpcWriteProjectFileArgs, ipcWriteProjectFileChannel, IpcWriteProjectFileRes,
} from '@common/ipc/channels';

export function createProjectFileStorageControllers(): [
  Controller<IpcReadProjectFileArgs, IpcReadProjectFileRes>,
  Controller<IpcWriteProjectFileArgs, IpcWriteProjectFileRes>,
] {
  return [{
    channel: ipcReadProjectFileChannel,
    handle: async (_event, filePath) => {
      try {
        return await readFile(filePath, 'utf-8');
      } catch {
        return undefined;
      }
    }
  }, {
    channel: ipcWriteProjectFileChannel,
    handle: async (_event, filePath, content) => {
      await writeFile(filePath, content, 'utf-8');
    }
  }];
}
