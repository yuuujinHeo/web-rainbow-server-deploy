"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWSDLPath = getWSDLPath;
const path_1 = require("path");
function getWSDLPath(category, filename) {
    return (0, path_1.join)(process.cwd(), 'libs/common/src/wsdl', category, filename);
}
