import * as edworker from 'monaco-editor-core/esm/vs/editor/editor.worker';
import { OpstraceModuleWorker } from './opstaceWorker';
import { ICreateData } from '../monaco-typescript-4.1.1/tsWorker';
import { worker } from '../monaco-typescript-4.1.1/fillers/monaco-editor-core';

self.onmessage = () => {
	// ignore the first message
	edworker.initialize((ctx: worker.IWorkerContext, createData: ICreateData) => {
		return new OpstraceModuleWorker(ctx, createData);
	});
};