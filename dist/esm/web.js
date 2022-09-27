import { WebPlugin } from '@capacitor/core';
export class IPAddressWeb extends WebPlugin {
    getIPAddress() {
        return Promise.resolve({ value: '' });
    }
}
//# sourceMappingURL=web.js.map