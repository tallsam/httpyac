import { completionItemProvider } from '../../io';

completionItemProvider.emptyLineProvider.push(() => [
  {
    name: 'SOCKETIO',
    description: 'Socket.IO request',
  },
]);
