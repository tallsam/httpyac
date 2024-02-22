import * as utils from '../../utils';
import { SocketIoRequestClient } from './socketIoRequestClient';
import { userSessionStore } from '../../store';

export const parseWebsocketLine = utils.parseRequestLineFactory({
  protocol: 'WS',
  methodRegex: /^\s*(SOCKETIO)\s+(?<url>.+?)\s*$/u,
  protocolRegex: /^\s*(?<url>ws(s)?:\/\/.+?)\s*$/iu,
  requestClientFactory(request, context) {
    return new SocketIoRequestClient(request, context);
  },
  modifyRequest(request) {
    request.supportsStreaming = true;
  },
  sessionStore: userSessionStore,
});
