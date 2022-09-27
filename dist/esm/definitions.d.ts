export interface IPAddressPlugin {
    getIPAddress(): Promise<{
        value: string;
    }>;
}
