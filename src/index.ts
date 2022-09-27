import { registerPlugin } from '@capacitor/core';

import type { IPAddressPlugin } from './definitions';

const IPAddress = registerPlugin<IPAddressPlugin>('IPAddress', {
  web: () => import('./web').then(m => new m.IPAddressWeb()),
});

export * from './definitions';
export { IPAddress };
