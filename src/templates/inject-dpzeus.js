var _dpDpzeusWeb = require("@dp/dpzeus-web");
var _dpDpzeusWeb2 = _interopRequireDefault(_dpDpzeusWeb);
if (['127.0.0.1', 'localhost'].indexOf(location.hostname) != -1 && !/webpatch=false/i.test(location.search) || /webpatch=true/i.test(location.search)) {
    _core2['default'].patchForType(appVersion, _dpDpzeusWeb2['default'].patchWeb);
}
