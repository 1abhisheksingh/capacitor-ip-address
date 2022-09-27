var capacitorIPAddress = (function (exports, core) {
    'use strict';

    const IPAddress = core.registerPlugin('IPAddress', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.IPAddressWeb()),
    });

    class IPAddressWeb extends core.WebPlugin {
        getIPAddress() {
            return Promise.resolve({ value: '' });
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        IPAddressWeb: IPAddressWeb
    });

    exports.IPAddress = IPAddress;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
