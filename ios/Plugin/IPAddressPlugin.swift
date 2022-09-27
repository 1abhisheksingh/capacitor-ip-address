import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(IPAddressPlugin)
public class IPAddressPlugin: CAPPlugin {
    private let implementation = IPAddress()

    @objc func getIPAddress(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.getIPAddress()
        ])
    }
}
