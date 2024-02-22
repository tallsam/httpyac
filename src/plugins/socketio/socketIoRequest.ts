import { ClientOptions } from 'ws';

import { Request } from '../../models';
import { isString } from '../../utils';

export interface SocketIoRequest extends Request<'WS'> {
  options?: ClientOptions;
  body?: string | Buffer;
  headers?: Record<string, string>;
}

export function isSocketIoRequest(request: Request | undefined): request is SocketIoRequest {
  const hasValidBody = !request?.body || isString(request.body) || Buffer.isBuffer(request.body);
  return request?.protocol === 'SOCKETIO' && hasValidBody;
}
