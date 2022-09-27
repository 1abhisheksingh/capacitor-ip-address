import { registerPlugin } from '@capacitor/core';
const IPAddress = registerPlugin('IPAddress', {
    web: () => import('./web').then(m => new m.IPAddressWeb()),
});
export * from './definitions';
export { IPAddress };
//# sourceMappingURL=index.js.map