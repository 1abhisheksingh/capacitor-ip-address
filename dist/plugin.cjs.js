'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

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
//# sourceMappingURL=plugin.cjs.js.map
