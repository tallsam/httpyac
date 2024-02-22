import * as models from '../../models';
import * as utils from '../../utils';
import { isSocketIoRequest } from './socketIoRequest';

export async function setSocketIoEnvRejectUnauthorized(
  request: models.Request,
  { variables }: models.ProcessorContext
): Promise<void> {
  if (isWebsocketRequest(request) && variables) {
    if (typeof variables.request_rejectUnauthorized !== 'undefined') {
      const rejectUnauthorized = utils.toBoolean(variables.request_rejectUnauthorized);
      request.options = Object.assign({}, request.options, { rejectUnauthorized });
    }
  }
}
