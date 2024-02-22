import './completionItemProvider';

import * as ws from 'ws';

import { javascriptProvider } from '../../io';
import * as models from '../../models';
import { setSocketIoEnvRejectUnauthorized } from './setSocketIoEnvRejectUnauthorized';
import { parseSocketIoLine } from './socketIoHttpRegionParser';
import { parseSocketIoResponse } from './socketIoResponseHttpRegionParser';

export function registerSocketIoPlugin(api: models.HttpyacHooksApi) {
  api.hooks.onRequest.addHook('setSocketIoEnvRejectUnauthorized', setSocketIoEnvRejectUnauthorized);
  api.hooks.parse.addHook('socketio', parseSocketIoLine, { before: ['request'] });
  api.hooks.parse.addHook('socketioResponse', parseSocketIoResponse, { before: ['requestBody'] });
  javascriptProvider.require.ws = ws;
}
