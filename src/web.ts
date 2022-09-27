import { WebPlugin } from '@capacitor/core';

import type { IPAddressPlugin } from './definitions';

export class IPAddressWeb extends WebPlugin implements IPAddressPlugin {
  getIPAddress(): Promise<{ value: string }> {
    return Promise.resolve({value:''});
  }
}
