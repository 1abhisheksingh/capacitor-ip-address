import { WebPlugin } from '@capacitor/core';
import type { IPAddressPlugin } from './definitions';
export declare class IPAddressWeb extends WebPlugin implements IPAddressPlugin {
    getIPAddress(): Promise<{
        value: string;
    }>;
}
