/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(5), exports);
__exportStar(__webpack_require__(26), exports);
__exportStar(__webpack_require__(29), exports);


/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(6), exports);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TcpMicroservice = exports.UpdateMicroservice = exports.LogMicroservice = exports.CobotMicroservice = exports.SoundMicroservice = exports.SettingMicroservice = exports.TaskMicroservice = exports.OnvifMicroservice = exports.MapMicroservice = exports.NetworkMicroservice = exports.LocalizationMicroservice = exports.MoveMicroservice = exports.CodeMicroservice = exports.ControlMicroservice = exports.ConfigMicroservice = exports.RedisMicroservice = exports.AmrMicroservice = exports.AuthMicroservice = exports.UserMicroservice = void 0;
exports.UserMicroservice = __webpack_require__(7);
exports.AuthMicroservice = __webpack_require__(8);
exports.AmrMicroservice = __webpack_require__(9);
exports.RedisMicroservice = __webpack_require__(10);
exports.ConfigMicroservice = __webpack_require__(11);
exports.ControlMicroservice = __webpack_require__(12);
exports.CodeMicroservice = __webpack_require__(13);
exports.MoveMicroservice = __webpack_require__(14);
exports.LocalizationMicroservice = __webpack_require__(15);
exports.NetworkMicroservice = __webpack_require__(16);
exports.MapMicroservice = __webpack_require__(17);
exports.OnvifMicroservice = __webpack_require__(18);
exports.TaskMicroservice = __webpack_require__(19);
exports.SettingMicroservice = __webpack_require__(20);
exports.SoundMicroservice = __webpack_require__(21);
exports.CobotMicroservice = __webpack_require__(22);
exports.LogMicroservice = __webpack_require__(23);
exports.UpdateMicroservice = __webpack_require__(24);
exports.TcpMicroservice = __webpack_require__(25);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.USER_GRPC_SERVICE_NAME = exports.USER_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.UserGrpcServiceControllerMethods = UserGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(3);
exports.protobufPackage = "user";
exports.USER_PACKAGE_NAME = "user";
function UserGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "readUserList",
            "readUser",
            "readUserForLogin",
            "createUser",
            "updateUser",
            "deleteUser",
            "readUserToken",
            "createUserToken",
            "updateUserToken",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("UserGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("UserGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.USER_GRPC_SERVICE_NAME = "UserGrpcService";


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AUTH_GRPC_SERVICE_NAME = exports.AUTH_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.AuthGrpcServiceControllerMethods = AuthGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(3);
exports.protobufPackage = "auth";
exports.AUTH_PACKAGE_NAME = "auth";
function AuthGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["join", "login", "refreshToken"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("AuthGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("AuthGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.AUTH_GRPC_SERVICE_NAME = "AuthGrpcService";


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AMR_GRPC_SERVICE_NAME = exports.AMR_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.AmrGrpcServiceControllerMethods = AmrGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(3);
exports.protobufPackage = "amr";
exports.AMR_PACKAGE_NAME = "amr";
function AmrGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["readAmrList", "readAmr", "existsAmr", "createAmr", "updateAmr", "deleteAmr"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("AmrGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("AmrGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.AMR_GRPC_SERVICE_NAME = "AmrGrpcService";


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.REDIS_ROBOT_CACHE_GRPC_SERVICE_NAME = exports.REDIS_SOCKET_CACHE_GRPC_SERVICE_NAME = exports.REDIS_PACKAGE_NAME = exports.SocketType = exports.RobotType = exports.protobufPackage = void 0;
exports.RedisSocketCacheGrpcServiceControllerMethods = RedisSocketCacheGrpcServiceControllerMethods;
exports.RedisRobotCacheGrpcServiceControllerMethods = RedisRobotCacheGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(3);
exports.protobufPackage = "redis";
var RobotType;
(function (RobotType) {
    RobotType[RobotType["UNKNOWN"] = 0] = "UNKNOWN";
    RobotType[RobotType["MOBILE"] = 1] = "MOBILE";
    RobotType[RobotType["MANIPULATOR"] = 2] = "MANIPULATOR";
    RobotType[RobotType["SENSOR"] = 3] = "SENSOR";
    RobotType[RobotType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RobotType || (exports.RobotType = RobotType = {}));
var SocketType;
(function (SocketType) {
    SocketType[SocketType["CLIENT"] = 0] = "CLIENT";
    SocketType[SocketType["AMR"] = 1] = "AMR";
    SocketType[SocketType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SocketType || (exports.SocketType = SocketType = {}));
exports.REDIS_PACKAGE_NAME = "redis";
function RedisSocketCacheGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "readSocketCache",
            "readSocketCacheList",
            "createSocketCache",
            "updateSocketCache",
            "deleteSocketCache",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("RedisSocketCacheGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("RedisSocketCacheGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.REDIS_SOCKET_CACHE_GRPC_SERVICE_NAME = "RedisSocketCacheGrpcService";
function RedisRobotCacheGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "readRobotCache",
            "existsRobotCache",
            "readRobotCacheList",
            "createRobotCache",
            "updateRobotCache",
            "deleteRobotCache",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("RedisRobotCacheGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("RedisRobotCacheGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.REDIS_ROBOT_CACHE_GRPC_SERVICE_NAME = "RedisRobotCacheGrpcService";


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CONFIG_GRPC_SERVICE_NAME = exports.CONFIG_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.ConfigGrpcServiceControllerMethods = ConfigGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(3);
exports.protobufPackage = "config";
exports.CONFIG_PACKAGE_NAME = "config";
function ConfigGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "getConfig",
            "setConfig",
            "getConfigAll",
            "setConfigs",
            "deleteConfig",
            "deleteConfigs",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("ConfigGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("ConfigGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.CONFIG_GRPC_SERVICE_NAME = "ConfigGrpcService";


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CONTROL_GRPC_SERVICE_NAME = exports.CONTROL_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.ControlGrpcServiceControllerMethods = ControlGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(3);
exports.protobufPackage = "control";
exports.CONTROL_PACKAGE_NAME = "control";
function ControlGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "onOffControl",
            "workControl",
            "ledControl",
            "setSafetyField",
            "getSafetyField",
            "exAccessoryControl",
            "safetyIoControl",
            "setObsBox",
            "getObsBox",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("ControlGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("ControlGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.CONTROL_GRPC_SERVICE_NAME = "ControlGrpcService";


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CODE_GRPC_SERVICE_NAME = exports.CODE_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.CodeGrpcServiceControllerMethods = CodeGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(3);
exports.protobufPackage = "code";
exports.CODE_PACKAGE_NAME = "code";
function CodeGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["readCodeList", "readCode", "createCode", "updateCode", "deleteCode"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("CodeGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("CodeGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.CODE_GRPC_SERVICE_NAME = "CodeGrpcService";


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MOVE_GRPC_SERVICE_NAME = exports.MOVE_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.MoveGrpcServiceControllerMethods = MoveGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(3);
exports.protobufPackage = "move";
exports.MOVE_PACKAGE_NAME = "move";
function MoveGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "moveCommand",
            "moveGoal",
            "moveTarget",
            "moveJog",
            "movePause",
            "moveResume",
            "moveStop",
            "moveLastGoal",
            "moveLogLast",
            "moveLog",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("MoveGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("MoveGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.MOVE_GRPC_SERVICE_NAME = "MoveGrpcService";


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LOCALIZATION_GRPC_SERVICE_NAME = exports.LOCALIZATION_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.LocalizationGrpcServiceControllerMethods = LocalizationGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(3);
exports.protobufPackage = "localization";
exports.LOCALIZATION_PACKAGE_NAME = "localization";
function LocalizationGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["init", "autoInit", "randomInit", "semiAutoInit", "start", "stop"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("LocalizationGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("LocalizationGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.LOCALIZATION_GRPC_SERVICE_NAME = "LocalizationGrpcService";


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NETWORK_GRPC_SERVICE_NAME = exports.NETWORK_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.NetworkGrpcServiceControllerMethods = NetworkGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(3);
exports.protobufPackage = "network";
exports.NETWORK_PACKAGE_NAME = "network";
function NetworkGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "getNetwork",
            "getDevice",
            "getEthernet",
            "getWifi",
            "getBluetooth",
            "setNetwork",
            "connectWifi",
            "getWifiList",
            "scanWifi",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("NetworkGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("NetworkGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.NETWORK_GRPC_SERVICE_NAME = "NetworkGrpcService";


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MAP_GRPC_SERVICE_NAME = exports.MAP_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.MapGrpcServiceControllerMethods = MapGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(3);
exports.protobufPackage = "map";
exports.MAP_PACKAGE_NAME = "map";
function MapGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "getMapList",
            "getCurrentMap",
            "getCloud",
            "saveCloud",
            "getTopology",
            "saveTopology",
            "load",
            "mapping",
            "uploadMap",
            "downloadMap",
            "publishMap",
            "getMapTileExist",
            "getMapTile",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("MapGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("MapGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.MAP_GRPC_SERVICE_NAME = "MapGrpcService";


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ONVIF_SERVICE_NAME = exports.ONVIF_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.OnvifServiceControllerMethods = OnvifServiceControllerMethods;
const microservices_1 = __webpack_require__(3);
exports.protobufPackage = 'onvif';
exports.ONVIF_PACKAGE_NAME = 'onvif';
function OnvifServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ['deviceService', 'mediaService', 'snapshot', 'ptzService', 'deviceIoService', 'eventService'];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)('OnvifService', method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)('OnvifService', method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.ONVIF_SERVICE_NAME = 'OnvifService';


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TASK_GRPC_SERVICE_NAME = exports.TASK_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.TaskGrpcServiceControllerMethods = TaskGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(3);
exports.protobufPackage = "task";
exports.TASK_PACKAGE_NAME = "task";
function TaskGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "getTaskState",
            "getTaskVariables",
            "task",
            "getList",
            "getTask",
            "saveTask",
            "deleteTask",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("TaskGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("TaskGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.TASK_GRPC_SERVICE_NAME = "TaskGrpcService";


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SETTING_GRPC_SERVICE_NAME = exports.SETTING_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.SettingGrpcServiceControllerMethods = SettingGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(3);
exports.protobufPackage = "setting";
exports.SETTING_PACKAGE_NAME = "setting";
function SettingGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "getType",
            "getSetting",
            "saveSetting",
            "saveSettingAll",
            "getPresetList",
            "getPreset",
            "createPreset",
            "deletePreset",
            "savePreset",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("SettingGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("SettingGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.SETTING_GRPC_SERVICE_NAME = "SettingGrpcService";


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SOUND_GRPC_SERVICE_NAME = exports.SOUND_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.SoundGrpcServiceControllerMethods = SoundGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(3);
exports.protobufPackage = "sound";
exports.SOUND_PACKAGE_NAME = "sound";
function SoundGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["play", "stop", "list", "delete", "getPlaying"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("SoundGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("SoundGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.SOUND_GRPC_SERVICE_NAME = "SoundGrpcService";


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.COBOT_GRPC_SERVICE_NAME = exports.COBOT_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.CobotGrpcServiceControllerMethods = CobotGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(3);
exports.protobufPackage = "cobot";
exports.COBOT_PACKAGE_NAME = "cobot";
function CobotGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "cobotConnect",
            "cobotDisconnect",
            "cobotConnectCommand",
            "cobotConnectData",
            "cobotDisConnectCommand",
            "cobotDisConnectData",
            "getConnectState",
            "cobotCommand",
            "cobotProgram",
            "getCobotData",
            "cobotModeChange",
            "cobotInit",
            "cobotMove",
            "cobotSpeed",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("CobotGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("CobotGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.COBOT_GRPC_SERVICE_NAME = "CobotGrpcService";


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SEM_LOG_GRPC_SERVICE_NAME = exports.LOG_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.SEMLogGrpcServiceControllerMethods = SEMLogGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(3);
exports.protobufPackage = "log";
exports.LOG_PACKAGE_NAME = "log";
function SEMLogGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "getSemAlarmDefine",
            "postSemAlarmDefine",
            "deleteSemAlarmDefine",
            "deleteSemAlarmDefineAll",
            "getSemAlarmActive",
            "semAlarm",
            "deleteSemAlarm",
            "deleteSemAlarmAll",
            "getSemAlarmLog",
            "postSemAlarmLog",
            "deleteSemAlarmLog",
            "getSemGeneralLog",
            "deleteSemGeneralLog",
            "postSemGeneralLog",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("SEMLogGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("SEMLogGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.SEM_LOG_GRPC_SERVICE_NAME = "SEMLogGrpcService";


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UPDATE_GRPC_SERVICE_NAME = exports.UPDATE_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.UpdateGrpcServiceControllerMethods = UpdateGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(3);
exports.protobufPackage = "update";
exports.UPDATE_PACKAGE_NAME = "update";
function UpdateGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "testPing",
            "getNewVersion",
            "getCurrentVersion",
            "getReleaseBranch",
            "getReleaseVersion",
            "addWebUi",
            "deleteWebUi",
            "updateProgram",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("UpdateGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("UpdateGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.UPDATE_GRPC_SERVICE_NAME = "UpdateGrpcService";


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TCP_GRPC_SERVICE_NAME = exports.TCP_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.TcpGrpcServiceControllerMethods = TcpGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(3);
exports.protobufPackage = "tcp";
exports.TCP_PACKAGE_NAME = "tcp";
function TcpGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["getServerState", "openServer", "closeServer"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("TcpGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("TcpGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.TCP_GRPC_SERVICE_NAME = "TcpGrpcService";


/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(27), exports);


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GrpcInterceptor = void 0;
const rxjs_1 = __webpack_require__(28);
class GrpcInterceptor {
    intercept(context, next) {
        const data = context.switchToRpc().getData();
        const ctx = context.switchToRpc().getContext();
        const meta = ctx.getMap();
        const targetClass = context.getClass().name;
        const targetHandler = context.getHandler().name;
        const traceId = meta['trace-id'];
        const clientService = meta['client-service'];
        const clientClass = meta['client-class'];
        const clientMethod = meta['client-method'];
        const from = `${clientService}/${clientClass}/${clientMethod}`;
        const to = `${targetClass}/${targetHandler}`;
        const requestTimestamp = new Date();
        const receivedRequestLog = {
            type: 'RECEIVED_REQUEST',
            traceId,
            from,
            to,
            data,
            timestamp: requestTimestamp.toUTCString(),
        };
        return next.handle().pipe((0, rxjs_1.map)((data) => {
            const responseTimestamp = new Date();
            const responseTime = `${+responseTimestamp - +requestTimestamp}ms`;
            const responseLog = {
                type: 'RETURN_RESPONSE',
                traceId,
                from,
                to,
                data,
                responseTime,
                timestamp: responseTimestamp.toUTCString(),
            };
            return data;
        }));
    }
}
exports.GrpcInterceptor = GrpcInterceptor;


/***/ }),
/* 28 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(30), exports);


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.errorToJson = errorToJson;
function errorToJson(error) {
    try {
        if (error instanceof Error) {
            const errorJson = {
                name: error.name,
                message: JSON.stringify(error.message),
            };
            if (error['error'] && error['error'].details) {
                errorJson['details'] = error['error'].details;
                errorJson['code'] = error['error'].code;
            }
            return JSON.stringify(errorJson);
        }
        else {
            const json = JSON.parse(error);
            return JSON.stringify(json);
        }
    }
    catch (err) {
        return JSON.stringify(error);
    }
}


/***/ }),
/* 31 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapModule = void 0;
const common_1 = __webpack_require__(33);
const microservices_1 = __webpack_require__(3);
const map_grpc_controller_1 = __webpack_require__(34);
const map_service_1 = __webpack_require__(57);
const map_socketio_adapter_1 = __webpack_require__(66);
const map_mqtt_controller_1 = __webpack_require__(76);
const config_1 = __webpack_require__(2);
const pg_1 = __webpack_require__(85);
const constant_1 = __webpack_require__(67);
const map_pending_service_1 = __webpack_require__(74);
const map_file_adapter_1 = __webpack_require__(86);
const log_module_1 = __webpack_require__(87);
const mongoose_1 = __webpack_require__(90);
const map_mongo_adapter_1 = __webpack_require__(91);
const map_mongo_entity_1 = __webpack_require__(93);
let MapModule = class MapModule {
};
exports.MapModule = MapModule;
exports.MapModule = MapModule = __decorate([
    (0, common_1.Module)({
        imports: [
            log_module_1.LogModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: map_mongo_entity_1.Map.name,
                    schema: map_mongo_entity_1.MapSchema,
                },
            ]),
            mongoose_1.MongooseModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    uri: configService.get('MONGO_URL'),
                }),
            }),
            microservices_1.ClientsModule.registerAsync({
                clients: [
                    {
                        inject: [config_1.ConfigService],
                        name: constant_1.MQTT_BROKER,
                        useFactory: (configService) => ({
                            transport: microservices_1.Transport.MQTT,
                            options: {
                                url: configService.get('MQTT_URL'),
                            },
                        }),
                    },
                ],
            }),
        ],
        controllers: [map_grpc_controller_1.MapGrpcInputController, map_mqtt_controller_1.MapMqttInputController],
        providers: [
            map_service_1.MapService,
            map_pending_service_1.MapPendingResponseService,
            {
                provide: 'DatabaseOutputPort',
                useClass: map_mongo_adapter_1.MapMongoAdapter,
            },
            {
                provide: 'SlamnavOutputPort',
                useClass: map_socketio_adapter_1.MapSocketIOAdapter,
            },
            {
                provide: 'MapFileOutputPort',
                useClass: map_file_adapter_1.MapFileAdapter,
            },
        ],
    })
], MapModule);
async function ensureMapDatabase() {
    const client = new pg_1.Client({
        host: process.env.POSTGRES_HOST || 'localhost',
        port: parseInt(process.env.POSTGRES_PORT || '7000'),
        user: process.env.POSTGRES_USER || 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'postgres',
        database: 'postgres',
    });
    try {
        await client.connect();
        const result = await client.query("SELECT 1 FROM pg_database WHERE datname = 'map'");
        if (result.rows.length === 0) {
            await client.query('CREATE DATABASE map');
            console.log('🎉 map 데이터베이스 생성 완료');
        }
        else {
            console.log('✅ map 데이터베이스 이미 존재');
        }
    }
    catch (error) {
        console.warn('⚠️ semlog DB 생성 실패:', error.message);
    }
    finally {
        await client.end();
    }
}


/***/ }),
/* 33 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 34 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapGrpcInputController = void 0;
const common_1 = __webpack_require__(4);
const saveLog_service_1 = __webpack_require__(35);
const rxjs_1 = __webpack_require__(28);
const common_2 = __webpack_require__(33);
const microservices_1 = __webpack_require__(3);
const map_service_1 = __webpack_require__(57);
let MapGrpcInputController = class MapGrpcInputController {
    constructor(mapService, saveLogService) {
        this.mapService = mapService;
        this.saveLogService = saveLogService;
        this.logger = this.saveLogService.get('host');
    }
    getMapTileExist(request, metadata) {
        return this.mapService.getMapTileExist(request);
    }
    getMapTile(request, metadata) {
        try {
            return (0, rxjs_1.from)(this.mapService.getMapTile(request));
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException) {
                throw error;
            }
            throw new microservices_1.RpcException(error);
        }
    }
    mapping(request) {
        return this.mapService.mappingRequest(request);
    }
    getMapList() {
        return this.mapService.getMapList();
    }
    getCloud(request) {
        return this.mapService.getCloud(request);
    }
    saveCloud(request) {
        return this.mapService.saveCloud(request);
    }
    getTopology(request) {
        return this.mapService.getTopology(request);
    }
    saveTopology(request) {
        return this.mapService.saveTopology(request);
    }
    uploadMap(request, metadata) {
        return this.mapService.uploadMap(request);
    }
    downloadMap(request, metadata) {
        return this.mapService.downloadMap(request);
    }
    publishMap(request, metadata) {
        return this.mapService.publishMap(request);
    }
    getCurrentMap() {
        return this.mapService.getCurrentMap();
    }
    load(request) {
        return this.mapService.loadRequest(request);
    }
};
exports.MapGrpcInputController = MapGrpcInputController;
exports.MapGrpcInputController = MapGrpcInputController = __decorate([
    (0, common_2.Controller)(),
    common_1.MapMicroservice.MapGrpcServiceControllerMethods(),
    (0, common_2.UseInterceptors)(common_1.GrpcInterceptor),
    __metadata("design:paramtypes", [typeof (_a = typeof map_service_1.MapService !== "undefined" && map_service_1.MapService) === "function" ? _a : Object, typeof (_b = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _b : Object])
], MapGrpcInputController);


/***/ }),
/* 35 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SaveLogService = void 0;
const common_1 = __webpack_require__(33);
const winston_1 = __webpack_require__(36);
const DailyRotateFile = __webpack_require__(37);
const util_1 = __webpack_require__(38);
const chalk_1 = __webpack_require__(56);
const fs_1 = __webpack_require__(44);
const levelColorMap = {
    error: chalk_1.default.red,
    warn: chalk_1.default.magenta,
    info: chalk_1.default.blue,
    debug: chalk_1.default.white,
};
const levelTextMap = {
    error: 'Error',
    warn: 'Warn',
    info: 'Info',
    debug: 'Debug',
};
function formatLogMessage(message) {
    try {
        if (message.includes('items:')) {
            return message;
        }
        const jsonRegex = /:\s*(\[[\s\S]*?\]|\{[\s\S]*?\})/g;
        return message.replace(jsonRegex, (match, jsonStr) => {
            try {
                const data = JSON.parse(jsonStr);
                const formatted = formatDataRecursive(data);
                return `: ${formatted}`;
            }
            catch {
                return match;
            }
        });
    }
    catch {
        return message;
    }
}
function formatDataRecursive(data) {
    if (Array.isArray(data)) {
        if (data.length <= 4) {
            const items = data.map((item) => typeof item === 'object' && item !== null ? formatDataRecursive(item) : cleanJsonString(JSON.stringify(item)));
            return `[${items.join(', ')}]`;
        }
        else {
            const items = data
                .slice(0, 4)
                .map((item) => (typeof item === 'object' && item !== null ? formatDataRecursive(item) : cleanJsonString(JSON.stringify(item))));
            return `[${data.length} items: [${items.join(', ')}]...]`;
        }
    }
    if (typeof data === 'object' && data !== null) {
        const formatted = { ...data };
        for (const [key, value] of Object.entries(formatted)) {
            if (Array.isArray(value)) {
                formatted[key] = formatDataRecursive(value);
            }
            else if (typeof value === 'object' && value !== null) {
                formatted[key] = formatDataRecursive(value);
            }
        }
        return cleanJsonString(JSON.stringify(formatted));
    }
    return cleanJsonString(JSON.stringify(data));
}
function cleanJsonString(jsonStr) {
    return jsonStr.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
}
const customFormat = winston_1.format.printf(({ timestamp, level, message }) => {
    const pid = process.pid;
    const levelColor = levelColorMap[level] || chalk_1.default.white;
    const levelText = levelTextMap[level] || level;
    if (typeof message === 'string') {
        const contextTag = message ? chalk_1.default.yellow(`[${message}]`) : '';
        const categoryMatch = message.match(/\[(?!['"])[A-Za-z0-9 _-]+\]/);
        const category = categoryMatch ? categoryMatch[0].slice(1, -1) : '';
        let logtext = categoryMatch ? message.replace(categoryMatch[0], '').trim() : message;
        logtext = formatLogMessage(logtext);
        return `${levelColor(`[${levelText}] ${pid}  -`)} ${util_1.DateUtil.formatDateKST(new Date(timestamp))}    ${levelColor(`LOG`)} ${chalk_1.default.yellow(`[${category}]`)} ${levelColor(`${logtext}`)}`;
    }
    return '';
});
const fileFormat = winston_1.format.printf(({ timestamp, level, message }) => {
    const pid = process.pid;
    const levelText = levelTextMap[level] || level;
    if (typeof message === 'string') {
        const contextTag = message ? chalk_1.default.yellow(`[${message}]`) : '';
        const categoryMatch = message.match(/\[(?!['"])[A-Za-z0-9 _-]+\]/);
        const category = categoryMatch ? categoryMatch[0].slice(1, -1) : '';
        let logtext = categoryMatch ? message.replace(categoryMatch[0], '').trim() : message;
        return `[${levelText}] ${pid}  - ${util_1.DateUtil.formatDateKST(new Date(timestamp))}   LOG [${category}] ${logtext}`;
    }
});
let SaveLogService = class SaveLogService {
    constructor() {
        this.loggers = new Map();
        this.rootPath = '/data/log';
        this.logPath = this.rootPath;
        chalk_1.default.level = 3;
    }
    get(service) {
        let logger = this.loggers.get(service);
        if (!logger) {
            logger = this.createLogger(service);
            this.loggers.set(service, logger);
        }
        return logger;
    }
    createLogger(service) {
        this.logPath = `${this.rootPath}/${service}`;
        if (!(0, fs_1.existsSync)(this.logPath)) {
            (0, fs_1.mkdirSync)(this.logPath, { recursive: true });
        }
        try {
            (0, fs_1.chownSync)(this.logPath, 1000, 1000);
        }
        catch (error) {
            console.error('LoggerService chownSync Error : ', error);
        }
        return (0, winston_1.createLogger)({
            level: 'debug',
            transports: [
                new DailyRotateFile({
                    filename: `${this.logPath}/%DATE%.log`,
                    datePattern: 'YYYY-MM-DD',
                    level: 'debug',
                    format: winston_1.format.combine(winston_1.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), fileFormat),
                    zippedArchive: true,
                    maxSize: '10m',
                    maxFiles: '14d',
                }),
                new winston_1.transports.Console({
                    level: 'debug',
                    format: winston_1.format.combine(winston_1.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), customFormat),
                }),
            ],
        });
    }
};
exports.SaveLogService = SaveLogService;
exports.SaveLogService = SaveLogService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SaveLogService);


/***/ }),
/* 36 */
/***/ ((module) => {

module.exports = require("winston");

/***/ }),
/* 37 */
/***/ ((module) => {

module.exports = require("winston-daily-rotate-file");

/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationUtil = exports.CryptoUtil = exports.ParseUtil = exports.FileUtil = exports.DateUtil = exports.UrlUtil = void 0;
var url_util_1 = __webpack_require__(39);
Object.defineProperty(exports, "UrlUtil", ({ enumerable: true, get: function () { return url_util_1.UrlUtil; } }));
var date_util_1 = __webpack_require__(41);
Object.defineProperty(exports, "DateUtil", ({ enumerable: true, get: function () { return date_util_1.DateUtil; } }));
var file_util_1 = __webpack_require__(43);
Object.defineProperty(exports, "FileUtil", ({ enumerable: true, get: function () { return file_util_1.FileUtil; } }));
var parse_util_1 = __webpack_require__(53);
Object.defineProperty(exports, "ParseUtil", ({ enumerable: true, get: function () { return parse_util_1.ParseUtil; } }));
var crypto_util_1 = __webpack_require__(54);
Object.defineProperty(exports, "CryptoUtil", ({ enumerable: true, get: function () { return crypto_util_1.CryptoUtil; } }));
var validation_util_1 = __webpack_require__(55);
Object.defineProperty(exports, "ValidationUtil", ({ enumerable: true, get: function () { return validation_util_1.ValidationUtil; } }));


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UrlUtil = void 0;
const uuid_1 = __webpack_require__(40);
class UrlUtil {
    static generateUUID() {
        return (0, uuid_1.v4)();
    }
}
exports.UrlUtil = UrlUtil;


/***/ }),
/* 40 */
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DateUtil = void 0;
const date_fns_1 = __webpack_require__(42);
class DateUtil {
    static toDatetimeString(date) {
        return (0, date_fns_1.format)(date, 'yyyy-MM-dd HH:mm:ss');
    }
    static getTimeString() {
        return new Date().getTime().toString();
    }
    static convertTargetsToDatetimeString(param, targets) {
        const sParam = { ...param };
        targets.forEach((target) => {
            if (sParam[target]) {
                sParam[target] = DateUtil.toDatetimeString(new Date(sParam[target]));
            }
        });
        return sParam;
    }
    static formatDate(date) {
        const pad = (n) => n.toString().padStart(2, '0');
        return (`${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ` +
            `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`);
    }
    static formatDateKST(date) {
        const options = {
            timeZone: 'Asia/Seoul',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };
        const parts = new Intl.DateTimeFormat('ko-KR', options).formatToParts(date);
        const obj = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
        return `${obj.year}-${obj.month}-${obj.day} ${obj.hour}:${obj.minute}:${obj.second}`;
    }
    static formatTimeKST(date) {
        const options = {
            timeZone: 'Asia/Seoul',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };
        const parts = new Intl.DateTimeFormat('ko-KR', options).formatToParts(date);
        const obj = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
        return `${obj.hour}:${obj.minute}:${obj.second}`;
    }
    static formatTimeYearKST(date) {
        const options = {
            timeZone: 'Asia/Seoul',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };
        const parts = new Intl.DateTimeFormat('ko-KR', options).formatToParts(date);
        const obj = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
        return `${obj.year}`;
    }
    static formatTimeMonthKST(date) {
        const options = {
            timeZone: 'Asia/Seoul',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };
        const parts = new Intl.DateTimeFormat('ko-KR', options).formatToParts(date);
        const obj = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
        return `${obj.month}`;
    }
    static formatTimeDayKST(date) {
        const options = {
            timeZone: 'Asia/Seoul',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };
        const parts = new Intl.DateTimeFormat('ko-KR', options).formatToParts(date);
        const obj = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
        return `${obj.day}`;
    }
    static formatTimeHourKST(date) {
        const options = {
            timeZone: 'Asia/Seoul',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };
        const parts = new Intl.DateTimeFormat('ko-KR', options).formatToParts(date);
        const obj = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
        return `${obj.hour}`;
    }
    static formatTimeMinuteKST(date) {
        const options = {
            timeZone: 'Asia/Seoul',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };
        const parts = new Intl.DateTimeFormat('ko-KR', options).formatToParts(date);
        const obj = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
        return `${obj.minute}`;
    }
    static formatTimeSecondKST(date) {
        const options = {
            timeZone: 'Asia/Seoul',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };
        const parts = new Intl.DateTimeFormat('ko-KR', options).formatToParts(date);
        const obj = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
        return `${obj.second}`;
    }
}
exports.DateUtil = DateUtil;


/***/ }),
/* 42 */
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileUtil = void 0;
const fs = __webpack_require__(44);
const path = __webpack_require__(31);
const unzipper = __webpack_require__(45);
const il = __webpack_require__(46);
const uuid_1 = __webpack_require__(40);
const archiver_1 = __webpack_require__(47);
const csv = __webpack_require__(48);
const zlib_1 = __webpack_require__(49);
const rpc_code_exception_1 = __webpack_require__(50);
const constant_1 = __webpack_require__(51);
const microservices_1 = __webpack_require__(3);
class FileUtil {
    static checkBasePath() {
        this.basePath = '';
    }
    static async getFile(filename, filePath) {
        try {
            this.checkBasePath();
            const fileFullPath = path.join(this.basePath, filePath, filename);
            if (!fs.existsSync(fileFullPath)) {
                throw new Error(`File not found: ${fileFullPath}`);
            }
            return await fs.promises.readFile(fileFullPath);
        }
        catch (error) {
            throw error;
        }
    }
    static async getFileAt(filename, filePath) {
        try {
            this.checkBasePath();
            const fileFullPath = path.join(filePath, filename);
            return fs.existsSync(fileFullPath);
        }
        catch (error) {
            throw error;
        }
    }
    static async uploadFile(fileBuffer, filename) {
        try {
            this.checkBasePath();
            const uniqueName = `${(0, uuid_1.v4)()}${path.extname(filename)}`;
            const filePath = path.join(this.basePath, uniqueName);
            fs.writeFileSync(filePath, fileBuffer);
            return { filePath: filePath, fileName: uniqueName };
        }
        catch (error) {
            throw error;
        }
    }
    static async downloadFile(filename, compress) {
        try {
            this.checkBasePath();
            const filePath = path.join(this.basePath, filename);
            const fileExtension = path.extname(filename);
            if (!fs.existsSync(filePath)) {
                throw new Error(`File not found: ${filePath}`);
            }
            if (compress && fileExtension.toUpperCase() !== '.ZIP') {
                const outputPath = path.join(this.basePath, filename.substring(0, filename.lastIndexOf(fileExtension)));
                await this.compressFile(filePath, outputPath);
                const fileContent = await fs.promises.readFile(outputPath);
                await fs.promises.unlink(outputPath);
                return fileContent;
            }
            return await fs.promises.readFile(filePath);
        }
        catch (error) {
            throw error;
        }
    }
    static async deleteFile(filename) {
        try {
            this.checkBasePath();
            const filePath = path.join(this.basePath, filename);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        }
        catch (error) {
            throw error;
        }
    }
    static async compressFile(filePath, outputPath, outputName) {
        try {
            this.checkBasePath();
            const compressPath = outputName ? path.join(this.basePath, `${outputName}.zip`) : outputPath;
            const output = fs.createWriteStream(compressPath);
            const archive = (0, archiver_1.default)('zip', {
                zlib: { level: 9 },
            });
            archive.pipe(output);
            archive.directory(filePath, false);
            await archive.finalize();
            return compressPath;
        }
        catch (error) {
            throw error;
        }
    }
    static async decompressFile(filePath, outputPath) {
        try {
            this.checkBasePath();
            if (!outputPath) {
                outputPath = filePath.substring(0, filePath.indexOf(path.extname(filePath)));
            }
            if (!fs.existsSync(outputPath)) {
                await fs.promises.mkdir(outputPath, { recursive: true });
            }
            const directory = await unzipper.Open.file(filePath);
            for (const entry of directory.files) {
                const entryPath = entry.isUnicode ? entry.path : il.decode(entry.pathBuffer, 'euc-kr');
                const fullPath = path.join(outputPath, entryPath);
                if (entry.type === 'File') {
                    await fs.promises.mkdir(path.dirname(fullPath), { recursive: true });
                    const readStream = entry.stream();
                    const writeStream = fs.createWriteStream(fullPath);
                    readStream.pipe(writeStream);
                    await new Promise((resolve, reject) => {
                        writeStream.on('finish', () => resolve);
                        writeStream.on('error', reject);
                    });
                }
                else {
                    await fs.promises.mkdir(fullPath, { recursive: true });
                }
            }
            return outputPath;
        }
        catch (error) {
            throw error;
        }
    }
    static async readCSV(path) {
        return new Promise((resolve, reject) => {
            try {
                if (!fs.existsSync(path)) {
                    reject(new rpc_code_exception_1.RpcCodeException('파일이 존재하지 않습니다', constant_1.GrpcCode.NotFound));
                }
                fs.accessSync(path, fs.constants.R_OK);
                const results = [];
                fs.createReadStream(path)
                    .pipe(csv.parse({
                    skip_empty_lines: true,
                    skip_records_with_error: true,
                }))
                    .on('data', (row) => {
                    results.push(row);
                })
                    .on('error', (error) => {
                    reject(new rpc_code_exception_1.RpcCodeException('CSV 파일을 읽을 수 없습니다.', constant_1.GrpcCode.InternalError));
                })
                    .on('end', () => {
                    resolve(results);
                });
            }
            catch (error) {
                if (error instanceof microservices_1.RpcException)
                    throw error;
                reject(new rpc_code_exception_1.RpcCodeException('CSV 파일을 읽을 수 없습니다.', constant_1.GrpcCode.InternalError));
            }
        });
    }
    static async readCSVPipe(path, res) {
        return new Promise((resolve, reject) => {
            try {
                fs.open(path, 'r', (err) => {
                    if (err) {
                        reject(new rpc_code_exception_1.RpcCodeException('파일을 찾을 수 없습니다.', constant_1.GrpcCode.NotFound));
                    }
                    else {
                        res.setHeader('Content-Type', 'text/csv');
                        res.setHeader('Content-Encoding', 'gzip');
                        res.setHeader('Content-Disposition', 'attachment; filename="cloud.csv"');
                        const fileStream = fs.createReadStream(path);
                        const gzip = (0, zlib_1.createGzip)();
                        fileStream
                            .pipe(gzip)
                            .pipe(res)
                            .on('finish', () => {
                            resolve();
                        })
                            .on('error', (error) => {
                            reject(new rpc_code_exception_1.RpcCodeException('CSV 파일을 읽을 수 없습니다.', constant_1.GrpcCode.InternalError));
                        });
                    }
                });
            }
            catch (error) {
                if (error instanceof microservices_1.RpcException)
                    throw error;
                reject(new rpc_code_exception_1.RpcCodeException('CSV 파일을 읽을 수 없습니다.', constant_1.GrpcCode.InternalError));
            }
        });
    }
    static async saveCSV(path, data) {
        try {
            const csvData = data.map((row) => (Array.isArray(row) ? row.join(',') : row)).join('\n');
            if (data === undefined || data.length === 0) {
                throw new rpc_code_exception_1.RpcCodeException('data 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            fs.writeFileSync(path, csvData);
            return;
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('CSV 파일을 저장하던 중 에러가 발생했습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    static async readJson(dir) {
        try {
            if (dir === undefined || dir === '') {
                throw new rpc_code_exception_1.RpcCodeException('dir 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            if (!fs.openSync(dir, 'r')) {
                throw new rpc_code_exception_1.RpcCodeException(`경로의 파일이 존재하지 않습니다. (${dir})`, constant_1.GrpcCode.NotFound);
            }
            const filecontent = fs.readFileSync(dir, 'utf-8');
            return JSON.parse(filecontent);
        }
        catch (error) {
            console.error(error);
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('JSON 파일을 읽던 중 에러가 발생했습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    static async readJSONPipe(path, res) {
        try {
            if (path === undefined || path === '') {
                throw new rpc_code_exception_1.RpcCodeException('path 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            if (!fs.openSync(path, 'r')) {
                throw new rpc_code_exception_1.RpcCodeException(`경로의 파일이 존재하지 않습니다. (${path})`, constant_1.GrpcCode.NotFound);
            }
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Content-Encoding', 'gzip');
            res.setHeader('Content-Disposition', 'attachment; filename="topo.json"');
            const fileStream = fs.createReadStream(path);
            const gzip = (0, zlib_1.createGzip)();
            fileStream.pipe(gzip).pipe(res);
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('JSON 파일을 읽던 중 에러가 발생했습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    static async saveJson(dir, data) {
        try {
            if (dir === undefined || dir === '') {
                throw new rpc_code_exception_1.RpcCodeException('dir 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            if (data === undefined || data === '' || JSON.stringify(data) === '') {
                throw new rpc_code_exception_1.RpcCodeException('data 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            console.log('--------------------------------------');
            console.log(dir);
            if (!fs.existsSync(path.dirname(dir))) {
                fs.mkdirSync(path.dirname(dir), { recursive: true });
            }
            if (fs.existsSync(dir)) {
                fs.renameSync(dir, `${dir}.bak`);
            }
            if (typeof data === 'string') {
                data = JSON.parse(data);
            }
            fs.writeFileSync(dir, JSON.stringify(data, null, 2));
            return;
        }
        catch (error) {
            console.error(error);
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('JSON 파일을 저장하던 중 에러가 발생했습니다.', constant_1.GrpcCode.InternalError);
        }
    }
}
exports.FileUtil = FileUtil;


/***/ }),
/* 44 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 45 */
/***/ ((module) => {

module.exports = require("unzipper");

/***/ }),
/* 46 */
/***/ ((module) => {

module.exports = require("iconv-lite");

/***/ }),
/* 47 */
/***/ ((module) => {

module.exports = require("archiver");

/***/ }),
/* 48 */
/***/ ((module) => {

module.exports = require("csv");

/***/ }),
/* 49 */
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RpcCodeException = void 0;
const microservices_1 = __webpack_require__(3);
class RpcCodeException extends microservices_1.RpcException {
    constructor(details, statusCode) {
        super({ details: details, code: statusCode });
        this.statusCode = statusCode;
    }
}
exports.RpcCodeException = RpcCodeException;


/***/ }),
/* 51 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(52), exports);


/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GrpcCode = void 0;
var GrpcCode;
(function (GrpcCode) {
    GrpcCode[GrpcCode["OK"] = 0] = "OK";
    GrpcCode[GrpcCode["Cancelled"] = 1] = "Cancelled";
    GrpcCode[GrpcCode["Unknown"] = 2] = "Unknown";
    GrpcCode[GrpcCode["InvalidArgument"] = 3] = "InvalidArgument";
    GrpcCode[GrpcCode["DeadlineExceeded"] = 4] = "DeadlineExceeded";
    GrpcCode[GrpcCode["NotFound"] = 5] = "NotFound";
    GrpcCode[GrpcCode["AlreadyExists"] = 6] = "AlreadyExists";
    GrpcCode[GrpcCode["PermissionDenied"] = 7] = "PermissionDenied";
    GrpcCode[GrpcCode["ResourceExhausted"] = 8] = "ResourceExhausted";
    GrpcCode[GrpcCode["FailedPrecondition"] = 9] = "FailedPrecondition";
    GrpcCode[GrpcCode["Aborted"] = 10] = "Aborted";
    GrpcCode[GrpcCode["OutOfRange"] = 11] = "OutOfRange";
    GrpcCode[GrpcCode["Unimplemented"] = 12] = "Unimplemented";
    GrpcCode[GrpcCode["InternalError"] = 13] = "InternalError";
    GrpcCode[GrpcCode["Unavailable"] = 14] = "Unavailable";
    GrpcCode[GrpcCode["DataLoss"] = 15] = "DataLoss";
    GrpcCode[GrpcCode["Unauthenticated"] = 16] = "Unauthenticated";
    GrpcCode[GrpcCode["DBError"] = 17] = "DBError";
})(GrpcCode || (exports.GrpcCode = GrpcCode = {}));


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParseUtil = void 0;
class ParseUtil {
    static errorToJson(error) {
        try {
            if (error instanceof Error) {
                const errorJson = {
                    name: error.name,
                    message: JSON.stringify(error.message),
                };
                if (error['error'] && error['error'].details) {
                    errorJson['details'] = error['error'].details;
                    errorJson['code'] = error['error'].code;
                }
                return JSON.stringify(errorJson);
            }
            else {
                const json = JSON.parse(error);
                return JSON.stringify(json);
            }
        }
        catch (err) {
            return JSON.stringify(err);
        }
    }
    static stringToCamelCase(str) {
        return str.toLowerCase().replace(/([-_][a-z])/gi, (group) => {
            return group.toUpperCase().replace('-', '').replace('_', '');
        });
    }
    static stringifyAllValues(obj) {
        for (const key in obj) {
            if (typeof obj[key] === 'object') {
                this.stringifyAllValues(obj[key]);
            }
            else {
                obj[key] = String(obj[key]);
            }
        }
        return obj;
    }
}
exports.ParseUtil = ParseUtil;


/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CryptoUtil = void 0;
class CryptoUtil {
}
exports.CryptoUtil = CryptoUtil;


/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationUtil = void 0;
class ValidationUtil {
    static isEmpty(param) {
        if (param === undefined || param === null) {
            return true;
        }
        switch (true) {
            case Array.isArray(param):
                return param.length === 0 || param.every((item) => this.isEmpty(item));
            case typeof param === 'object':
                return Object.keys(param).length === 0;
            case typeof param === 'string':
                return param.trim().length === 0;
            case typeof param === 'number':
                return isNaN(param);
            case typeof param === 'boolean':
                return false;
            default:
                return true;
        }
    }
    static isNotEmpty(param) {
        return !this.isEmpty(param);
    }
}
exports.ValidationUtil = ValidationUtil;


/***/ }),
/* 56 */
/***/ ((module) => {

module.exports = require("chalk");

/***/ }),
/* 57 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapService = void 0;
const common_1 = __webpack_require__(33);
const map_database_output_port_1 = __webpack_require__(58);
const map_slamnav_output_port_1 = __webpack_require__(59);
const map_command_domain_1 = __webpack_require__(60);
const microservices_1 = __webpack_require__(3);
const fs_1 = __webpack_require__(44);
const path_1 = __webpack_require__(31);
const util_1 = __webpack_require__(38);
const FormData = __webpack_require__(61);
const zip_util_1 = __webpack_require__(62);
const axios_1 = __webpack_require__(64);
const rpc_code_exception_1 = __webpack_require__(50);
const constant_1 = __webpack_require__(51);
const map_file_output_port_1 = __webpack_require__(65);
const saveLog_service_1 = __webpack_require__(35);
let MapService = class MapService {
    constructor(databaseOutput, slamnavOutput, mapFileOutput, saveLogService) {
        this.databaseOutput = databaseOutput;
        this.slamnavOutput = slamnavOutput;
        this.mapFileOutput = mapFileOutput;
        this.saveLogService = saveLogService;
        this.slamnav_connection = false;
        this.serviceName = 'MAP';
        this.currentMap = '';
        console.log(process.env.DATA_DIR);
        this.logger = this.saveLogService.get('host');
    }
    setCurrentMap(mapName) {
        this.currentMap = mapName;
    }
    async getMapList() {
        let command = null;
        try {
            this.logger?.debug(`[APP] getMapList`);
            command = new map_command_domain_1.MapCommandModel({ command: map_command_domain_1.MapCommand.getMapList });
            const result = await this.databaseOutput.save(command);
            command.assignId(result.id.toString());
            command.checkVariables();
            const entries = await this.mapFileOutput.readMapList({});
            this.logger?.debug(`[APP] getMapList : 경로 내 Map 폴더 개수 = ${entries.list.length} (${command.path})`);
            command.statusChange(map_command_domain_1.CommandStatus.success);
            await this.databaseOutput.update(command);
            return entries;
        }
        catch (error) {
            if (command) {
                command.statusChange(map_command_domain_1.CommandStatus.fail);
                await this.databaseOutput.update(command);
            }
            this.logger?.error(`[APP] getMapList : ${util_1.ParseUtil.errorToJson(error)}`);
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('파일을 읽는 도중 에러가 발생했습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async getCloud(request) {
        let command = null;
        try {
            this.logger?.debug(`[APP] getCloud : ${JSON.stringify(request)})`);
            command = new map_command_domain_1.MapCommandModel({ command: map_command_domain_1.MapCommand.getCloud, ...request });
            const result = await this.databaseOutput.save(command);
            command.assignId(result.id.toString());
            command.checkVariables();
            if (!(0, fs_1.existsSync)(command.path)) {
                throw new rpc_code_exception_1.RpcCodeException(`파일을 찾을 수 없습니다. (${command.mapName}/${command.fileName})`, constant_1.GrpcCode.NotFound);
            }
            const csvData = await util_1.FileUtil.readCSV(command.path);
            const cloud = csvData.map((e) => ({ row: e.map((e) => Number(e)) }));
            command.statusChange(map_command_domain_1.CommandStatus.success);
            await this.databaseOutput.update(command);
            return { ...request, cloud: cloud };
        }
        catch (error) {
            if (command) {
                command.statusChange(map_command_domain_1.CommandStatus.fail);
                await this.databaseOutput.update(command);
            }
            this.logger?.error(`[Map] getCloud : ${util_1.ParseUtil.errorToJson(error)}`);
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('Cloud를 읽을 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async saveCloud(request) {
        let command = null;
        try {
            this.logger?.debug(`[Map] saveCloud : ${JSON.stringify(request)})`);
            command = new map_command_domain_1.MapCommandModel({ command: map_command_domain_1.MapCommand.getCloud, ...request, cloud: request.cloud.map((row) => row.row) });
            const result = await this.databaseOutput.save(command);
            command.assignId(result.id.toString());
            command.checkVariables();
            const list = request.cloud.map((row) => row.row);
            await util_1.FileUtil.saveCSV(command.path, list.map((row) => row.map((e) => e.toString())));
            command.statusChange(map_command_domain_1.CommandStatus.success);
            await this.databaseOutput.update(command);
            return request;
        }
        catch (error) {
            if (command) {
                command.statusChange(map_command_domain_1.CommandStatus.fail);
                await this.databaseOutput.update(command);
            }
            this.logger?.error(`[Map] saveCloud : ${util_1.ParseUtil.errorToJson(error)}`);
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('Cloud를 저장할 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async saveTopology(request) {
        let command = null;
        try {
            this.logger?.debug(`[Map] saveTopology : ${JSON.stringify(request)})`);
            command = new map_command_domain_1.MapCommandModel({
                command: map_command_domain_1.MapCommand.saveTopo,
                topo: request.data,
                mapName: request.mapName,
                fileName: request.fileName,
            });
            command.setTopology({
                command: map_command_domain_1.MapCommand.saveTopo,
                topo: request.data,
                mapName: request.mapName,
                fileName: request.fileName,
            });
            const result = await this.databaseOutput.save(command);
            command.assignId(result.id.toString());
            command.checkVariables();
            const jsonData = JSON.parse(JSON.stringify(request.data));
            jsonData.forEach((node) => {
                if (node.pose.x != undefined) {
                    node.pose = node.pose.x + ',' + node.pose.y + ',' + node.pose.z + ',' + node.pose.rx + ',' + node.pose.ry + ',' + node.pose.rz;
                }
                else {
                    throw new rpc_code_exception_1.RpcCodeException('Topology 파일 형식이 올바르지 않습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                if (node.links) {
                    if (request.fileName != 'node.json') {
                        for (let i = 0; i < node.links.length; i++) {
                            if (typeof node.links[i] !== 'string') {
                                node.links[i] = node.links[i].id;
                            }
                        }
                    }
                    else {
                        node.links = node.links.map((link) => this.setLinkDto(link));
                    }
                }
                else {
                    node.links = [];
                }
            });
            await util_1.FileUtil.saveJson(command.path, jsonData);
            command.statusChange(map_command_domain_1.CommandStatus.success);
            await this.databaseOutput.update(command);
            return request;
        }
        catch (error) {
            this.logger?.error(`[Map] saveTopology : ${util_1.ParseUtil.errorToJson(error)}`);
            if (command) {
                command.statusChange(map_command_domain_1.CommandStatus.fail);
                await this.databaseOutput.update(command);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('Topology를 저장할 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    getLinkDto(link) {
        if (typeof link === 'string') {
            return {
                id: link,
            };
        }
        else {
            return {
                id: link.id,
                info: link.info,
                speed: link.speed,
                method: link.method,
                safetyField: link.safety_field,
            };
        }
    }
    setLinkDto(link) {
        return {
            id: link.id,
            info: link.info,
            speed: link.speed,
            method: link.method,
            safety_field: link.safetyField,
            safetyField: undefined,
        };
    }
    async getTopology(request) {
        let model = null;
        try {
            this.logger?.debug(`[Map] getTopology : ${JSON.stringify(request)})`);
            model = new map_command_domain_1.MapCommandModel({
                command: map_command_domain_1.MapCommand.getTopo,
                mapName: request.mapName,
                fileName: request.fileName,
            });
            model.setTopology({
                command: map_command_domain_1.MapCommand.getTopo,
                mapName: request.mapName,
                fileName: request.fileName,
            });
            const result = await this.databaseOutput.save(model);
            model.assignId(result.id.toString());
            model.checkVariables();
            if (!(0, fs_1.existsSync)(model.path)) {
                throw new rpc_code_exception_1.RpcCodeException(`파일을 찾을 수 없습니다. (${model.mapName}/${model.fileName})`, constant_1.GrpcCode.NotFound);
            }
            let data = [];
            const jsonData = await util_1.FileUtil.readJson(model.path);
            data = JSON.parse(JSON.stringify(jsonData)).map((node) => {
                console.log('node : ', node);
                return {
                    id: node.id,
                    name: node.name,
                    pose: {
                        x: node.pose.split(',')[0],
                        y: node.pose.split(',')[1],
                        z: node.pose.split(',')[2],
                        rx: node.pose.split(',')[3],
                        ry: node.pose.split(',')[4],
                        rz: node.pose.split(',')[5],
                    },
                    info: node.info,
                    links: node.links?.map((link) => this.getLinkDto(link)),
                    type: node.type,
                };
            });
            model.statusChange(map_command_domain_1.CommandStatus.success);
            await this.databaseOutput.update(model);
            return { ...request, fileName: model.fileName, data };
        }
        catch (error) {
            this.logger?.error(`[Map] getTopology : ${util_1.ParseUtil.errorToJson(error)}`);
            if (model) {
                model.statusChange(map_command_domain_1.CommandStatus.fail);
                await this.databaseOutput.update(model);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('Topology를 읽을 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async uploadMap(request) {
        let zipPath = '';
        let command = null;
        try {
            this.logger?.debug(`[Map] uploadMap : ${JSON.stringify(request)})`);
            command = new map_command_domain_1.MapCommandModel({ ...request, command: map_command_domain_1.MapCommand.uploadMap });
            const result = await this.databaseOutput.save(command);
            command.assignId(result.id.toString());
            command.checkVariables();
            const mapPath = command.path;
            const newMapPath = command.newPath;
            zipPath = `${newMapPath}.zip`;
            if (!(0, fs_1.existsSync)(mapPath)) {
                throw new rpc_code_exception_1.RpcCodeException(`${command.mapName} 이름의 맵폴더가 존재하지 않습니다. ${mapPath}`, constant_1.GrpcCode.NotFound);
            }
            await zip_util_1.ZipUtil.zipFolder(mapPath, zipPath);
            this.logger?.debug(`[Map] uploadMap : zip success (${zipPath}, ${(0, path_1.basename)(zipPath)})`);
            const zipStream = (0, fs_1.createReadStream)(zipPath);
            const formData = new FormData();
            formData.append('file', zipStream, { filename: (0, path_1.basename)(zipPath) });
            formData.append('deleteZipAt', 'Y');
            const url = process.env.FRS_URL + '/api/maps/frs-map/upload';
            this.logger?.debug(`[Map] uploadMap : POST frs (${url})`);
            const response = await axios_1.default.post(url, formData);
            this.logger?.debug(`[Map] uploadMap : Response from FRS (${JSON.stringify(response.data)})`);
            command.statusChange(map_command_domain_1.CommandStatus.success);
            await this.databaseOutput.update(command);
            return {
                mapName: command.mapName,
                newMapName: command.newMapName,
            };
        }
        catch (error) {
            if (command) {
                command.statusChange(map_command_domain_1.CommandStatus.fail);
                await this.databaseOutput.update(command);
            }
            if (error instanceof microservices_1.RpcException) {
                throw error;
            }
            if (error.response.data.message) {
                this.logger?.error(`[Map] uploadMap : ${util_1.ParseUtil.errorToJson(error.response.data)}`);
                throw new rpc_code_exception_1.RpcCodeException(error.response.data.message, constant_1.GrpcCode.InternalError);
            }
            this.logger?.error(`[Map] uploadMap : ${util_1.ParseUtil.errorToJson(error.response.data)}`);
            throw new rpc_code_exception_1.RpcCodeException('맵을 업로드할 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
        finally {
            if (zipPath !== '' && (0, fs_1.existsSync)(zipPath)) {
                (0, fs_1.unlinkSync)(zipPath);
            }
        }
    }
    async downloadMap(request) {
        return new Promise(async (resolve, reject) => {
            let zipPath = '';
            let command = null;
            try {
                this.logger?.info(`[Map] downloadMap ================================`);
                command = new map_command_domain_1.MapCommandModel({
                    mapName: request.fileName,
                    isForce: request.isForce,
                    newMapName: request.newMapName,
                    command: map_command_domain_1.MapCommand.downloadMap,
                });
                const result = await this.databaseOutput.save(command);
                console.log('result : ', result);
                command.assignId(result.id.toString());
                command.checkVariables();
                const url = process.env.FRS_URL + '/api/maps/frs-map/download';
                this.logger?.debug(`[Map] downloadMap : POST frs (${url}, ${command.mapName})`);
                const response = await axios_1.default.get(url, {
                    responseType: 'stream',
                    params: {
                        fileDetailFlNm: command.mapName,
                    },
                });
                const newMapPath = command.newPath;
                zipPath = `${newMapPath}.zip`;
                if (!command.isForce && (0, fs_1.existsSync)(newMapPath)) {
                    throw new rpc_code_exception_1.RpcCodeException('이미 동일한 이름의 맵이 존재합니다.', constant_1.GrpcCode.AlreadyExists);
                }
                this.logger?.info(`[Map] downloadMap: Download(Zip) Start ${zipPath}`);
                const fileStream = (0, fs_1.createWriteStream)(zipPath);
                response.data.pipe(fileStream);
                this.logger?.info(`[Map] downloadMap: Download(Zip) Start ${zipPath}`);
                fileStream.on('finish', async () => {
                    this.logger?.info(`[Map] downloadMap: Download(Zip) Done ${zipPath}`);
                    this.logger?.info(`[Map] downloadMap: UnZip ${zipPath} -> ${newMapPath}`);
                    await zip_util_1.ZipUtil.unzipFolder(zipPath, newMapPath);
                    this.logger?.debug(`[Map] downloadMap : Zip Done`);
                });
                command.statusChange(map_command_domain_1.CommandStatus.success);
                await this.databaseOutput.update(command);
                resolve({
                    fileName: command.mapName,
                    newMapName: command.newMapName,
                    isForce: command.isForce,
                });
            }
            catch (error) {
                if (command) {
                    command.statusChange(map_command_domain_1.CommandStatus.fail);
                    await this.databaseOutput.update(command);
                }
                if (error instanceof microservices_1.RpcException) {
                    reject(error);
                }
                if (error.response?.data?.message) {
                    this.logger?.error(`[Map] downloadMap : ${util_1.ParseUtil.errorToJson(error.response.data)}`);
                    reject(new rpc_code_exception_1.RpcCodeException(error.response.data.message, constant_1.GrpcCode.InternalError));
                }
                this.logger?.error(`[Map] downloadMap : ${util_1.ParseUtil.errorToJson(error)}`);
                reject(new rpc_code_exception_1.RpcCodeException('맵을 다운로드할 수 없습니다.', constant_1.GrpcCode.InternalError));
            }
            finally {
                if (zipPath !== '' && (0, fs_1.existsSync)(zipPath)) {
                    (0, fs_1.unlinkSync)(zipPath);
                }
            }
        });
    }
    async getMapTileExist(request) {
        return await this.mapFileOutput.getMapTileExist(request);
    }
    async getMapTile(request) {
        return new Promise(async (resolve, reject) => {
            try {
                if (request.mapName == undefined || request.mapName == null || request.mapName == '') {
                    throw new rpc_code_exception_1.RpcCodeException('맵 이름이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                if (request.z == undefined || request.z == null) {
                    throw new rpc_code_exception_1.RpcCodeException('z 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                if (request.x == undefined || request.x == null) {
                    throw new rpc_code_exception_1.RpcCodeException('x 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                if (request.y == undefined || request.y == null) {
                    throw new rpc_code_exception_1.RpcCodeException('y 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                resolve(await this.mapFileOutput.getMapTile(request));
            }
            catch (error) {
                if (error instanceof microservices_1.RpcException) {
                    reject(error);
                }
                console.error(error);
                reject(new rpc_code_exception_1.RpcCodeException('타일 읽기 실패', constant_1.GrpcCode.InternalError));
            }
        });
    }
    async getCurrentMap() {
        return new Promise(async (resolve, reject) => {
            try {
                this.logger?.info(`[Map] getCurrentMap ================================`);
                resolve({
                    mapName: this.currentMap,
                });
            }
            catch (error) {
                reject(new rpc_code_exception_1.RpcCodeException('맵을 읽을 수 없습니다.', constant_1.GrpcCode.InternalError));
            }
        });
    }
    async publishMap(request) {
        return new Promise(async (resolve, reject) => {
            let zipPath = '';
            let command = null;
            try {
                this.logger?.info(`[Map] publishMap ================================`);
                command = new map_command_domain_1.MapCommandModel({
                    mapName: request.fileName,
                    isForce: request.isForce,
                    newMapName: request.newMapName,
                    command: map_command_domain_1.MapCommand.downloadMap,
                });
                const result = await this.databaseOutput.save(command);
                command.assignId(result.id.toString());
                command.checkVariables();
                zipPath = (0, path_1.join)('/data/temp', request.fileName);
                const mapPath = command.newPath;
                if (!(0, fs_1.existsSync)(zipPath)) {
                    throw new rpc_code_exception_1.RpcCodeException(`파일을 저장하지 못했습니다. ${zipPath}`, constant_1.GrpcCode.NotFound);
                }
                if ((0, fs_1.existsSync)(mapPath) && !request.isForce) {
                    throw new rpc_code_exception_1.RpcCodeException('동일한 이름의 맵이 이미 존재합니다.', constant_1.GrpcCode.AlreadyExists);
                }
                this.logger?.info(`[Map] publishMap: UnZip ${zipPath} -> ${mapPath}`);
                await zip_util_1.ZipUtil.unzipFolder(zipPath, mapPath);
                this.logger?.debug(`[Map] publishMap : Zip Done`);
                command.statusChange(map_command_domain_1.CommandStatus.success);
                await this.databaseOutput.update(command);
                resolve({
                    fileName: command.mapName,
                    newMapName: command.newMapName,
                    isForce: command.isForce,
                });
            }
            catch (error) {
                console.error(error);
                if (command) {
                    command.statusChange(map_command_domain_1.CommandStatus.fail);
                    await this.databaseOutput.update(command);
                }
                if (error instanceof microservices_1.RpcException) {
                    reject(error);
                }
                if (error.response?.data?.message) {
                    this.logger?.error(`[Map] publishMap : ${util_1.ParseUtil.errorToJson(error.response.data)}`);
                    reject(new rpc_code_exception_1.RpcCodeException(error.response.data.message, constant_1.GrpcCode.InternalError));
                }
                this.logger?.error(`[Map] publishMap : ${util_1.ParseUtil.errorToJson(error)}`);
                reject(new rpc_code_exception_1.RpcCodeException('맵을 다운로드할 수 없습니다.', constant_1.GrpcCode.InternalError));
            }
            finally {
                if (zipPath !== '' && (0, fs_1.existsSync)(zipPath)) {
                    (0, fs_1.unlinkSync)(zipPath);
                }
            }
        });
    }
    async loadRequest(request) {
        let command = null;
        try {
            this.logger?.info(`[Map] loadRequest : ${JSON.stringify(command)}`);
            command = new map_command_domain_1.MapCommandModel({ command: map_command_domain_1.MapCommand.loadMap, mapName: request.mapName });
            const result = await this.databaseOutput.save(command);
            command.assignId(result.id.toString());
            command.checkVariables();
            if (!this.slamnav_connection) {
                throw new rpc_code_exception_1.RpcCodeException('SLAMNAV가 연결되지 않았습니다', constant_1.GrpcCode.FailedPrecondition);
            }
            const resp = await this.slamnavOutput.loadRequest(command);
            this.logger?.info(`[Map] LoadMap Response : ${JSON.stringify(resp)}`);
            if (resp.result === 'success' || resp.result === 'accept') {
                command.statusChange(map_command_domain_1.CommandStatus.success);
                await this.databaseOutput.update(command);
                this.logger?.info(`[Map] LoadMap DB Update : ${result?.id.toString()}`);
                return resp;
            }
            else {
                throw new rpc_code_exception_1.RpcCodeException(resp.message, constant_1.GrpcCode.Aborted);
            }
        }
        catch (error) {
            if (command) {
                command.statusChange(map_command_domain_1.CommandStatus.fail);
                await this.databaseOutput.update(command);
            }
            if (error instanceof microservices_1.RpcException) {
                throw error;
            }
            throw new rpc_code_exception_1.RpcCodeException('맵을 로드할 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async mappingRequest(request) {
        let command = null;
        try {
            this.logger?.info(`[Map] mappingRequest : ${JSON.stringify(command)}`);
            command = new map_command_domain_1.MapCommandModel({ command: request.command, mapName: request.mapName });
            const result = await this.databaseOutput.save(command);
            command.assignId(result.id.toString());
            command.checkVariables();
            if (!(0, fs_1.existsSync)(command.path)) {
                throw new rpc_code_exception_1.RpcCodeException(`${command.mapName} 이름의 맵폴더가 존재하지 않습니다.`, constant_1.GrpcCode.NotFound);
            }
            if (!this.slamnav_connection) {
                throw new rpc_code_exception_1.RpcCodeException('SLAMNAV가 연결되지 않았습니다', constant_1.GrpcCode.FailedPrecondition);
            }
            const resp = await this.slamnavOutput.mappingRequest(command);
            this.logger?.info(`[Map] Mapping Response : ${JSON.stringify(resp)}`);
            if (resp.result === 'success' || resp.result === 'accept') {
                command.statusChange(map_command_domain_1.CommandStatus.success);
                await this.databaseOutput.update(command);
                this.logger?.info(`[Map] Mapping DB Update : ${result?.id.toString()}`);
                return resp;
            }
            else {
                throw new rpc_code_exception_1.RpcCodeException(resp.message, constant_1.GrpcCode.Aborted);
            }
        }
        catch (error) {
            if (command) {
                command.statusChange(map_command_domain_1.CommandStatus.fail);
                await this.databaseOutput.update(command);
            }
            if (error instanceof microservices_1.RpcException) {
                throw error;
            }
            throw new rpc_code_exception_1.RpcCodeException('맵을 로드할 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async loadResponse(response) {
        this.logger?.info(`[Map] loadResponse : ${JSON.stringify(response)}`);
        const dbmodel = await this.databaseOutput.getNodebyId(response.id);
        if (dbmodel) {
            const model = new map_command_domain_1.MapCommandModel(dbmodel);
            model.assignId(dbmodel.id);
            model.statusChange(response.result);
            await this.databaseOutput.update(model);
            this.logger?.info(`[Map] loadResponse : ${model.id}, ${model.status}`);
        }
    }
    async mappingResponse(response) {
        this.logger?.info(`[Map] mappingResponse : ${JSON.stringify(response)}`);
        const dbmodel = await this.databaseOutput.getNodebyId(response.id);
        if (dbmodel) {
            const model = new map_command_domain_1.MapCommandModel(dbmodel);
            model.assignId(dbmodel.id);
            model.statusChange(response.result);
            await this.databaseOutput.update(model);
            this.logger?.info(`[Map] mappingResponse : ${model.id}, ${model.status}`);
        }
    }
    async parseMapList(path) {
        try {
            const list = [];
            const entries = (0, fs_1.readdirSync)(path, { withFileTypes: true });
            for (const entry of entries) {
                if (entry.isDirectory()) {
                    const fullPath = path + '/' + entry.name;
                    const stats = (0, fs_1.statSync)(fullPath);
                    const model = {
                        fileName: entry.name,
                        updateAt: util_1.DateUtil.formatDateKST(stats.mtime),
                        cloudFiles: [],
                        topoFiles: [],
                    };
                    const files = (0, fs_1.readdirSync)(fullPath, { withFileTypes: true });
                    for (const file of files) {
                        if (file.name.split('.')[1] === 'csv' && file.name.includes('cloud')) {
                            model.cloudFiles.push({
                                fileName: file.name,
                                createAt: util_1.DateUtil.formatDateKST(stats.mtime),
                                updateAt: util_1.DateUtil.formatDateKST(stats.mtime),
                                fileType: file.name.split('.')[1],
                            });
                        }
                        else if (file.name.split('.')[1] === 'json' && file.name.includes('topo')) {
                            model.topoFiles.push({
                                fileName: file.name,
                                createAt: util_1.DateUtil.formatDateKST(stats.mtime),
                                updateAt: util_1.DateUtil.formatDateKST(stats.mtime),
                                fileType: file.name.split('.')[1],
                            });
                        }
                    }
                    if (model.cloudFiles.length > 0 || model.topoFiles.length > 0) {
                        list.push(model);
                    }
                }
            }
            return { list: list };
        }
        catch (error) {
            this.logger?.error(`[Map] parseMapList : ${util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('맵 리스트를 읽을 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    slamConnect() {
        this.logger?.debug(`[Map] Slamnav Connected`);
        this.slamnav_connection = true;
    }
    slamDisconnect() {
        this.logger?.debug(`[Map] Slamnav Disonnected`);
        this.slamnav_connection = false;
    }
};
exports.MapService = MapService;
exports.MapService = MapService = __decorate([
    __param(0, (0, common_1.Inject)('DatabaseOutputPort')),
    __param(1, (0, common_1.Inject)('SlamnavOutputPort')),
    __param(2, (0, common_1.Inject)('MapFileOutputPort')),
    __metadata("design:paramtypes", [typeof (_a = typeof map_database_output_port_1.MapDatabaseOutputPort !== "undefined" && map_database_output_port_1.MapDatabaseOutputPort) === "function" ? _a : Object, typeof (_b = typeof map_slamnav_output_port_1.MapSlamnavOutputPort !== "undefined" && map_slamnav_output_port_1.MapSlamnavOutputPort) === "function" ? _b : Object, typeof (_c = typeof map_file_output_port_1.MapFileOutputPort !== "undefined" && map_file_output_port_1.MapFileOutputPort) === "function" ? _c : Object, typeof (_d = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _d : Object])
], MapService);


/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapCommandModel = exports.MapCommand = exports.CommandStatus = void 0;
const rpc_code_exception_1 = __webpack_require__(50);
const constant_1 = __webpack_require__(51);
const path_1 = __webpack_require__(31);
const fs_1 = __webpack_require__(44);
var CommandStatus;
(function (CommandStatus) {
    CommandStatus["pending"] = "pending";
    CommandStatus["accept"] = "accept";
    CommandStatus["reject"] = "reject";
    CommandStatus["fail"] = "fail";
    CommandStatus["success"] = "success";
    CommandStatus["canceled"] = "canceled";
    CommandStatus["unknown"] = "unknown";
})(CommandStatus || (exports.CommandStatus = CommandStatus = {}));
var MapCommand;
(function (MapCommand) {
    MapCommand["uploadMap"] = "upload";
    MapCommand["downloadMap"] = "download";
    MapCommand["publishMap"] = "publish";
    MapCommand["getMapList"] = "list";
    MapCommand["getCloud"] = "getCloud";
    MapCommand["saveCloud"] = "saveCloud";
    MapCommand["getTopo"] = "getTopo";
    MapCommand["saveTopo"] = "saveTopo";
    MapCommand["loadMap"] = "loadMap";
    MapCommand["loadTopo"] = "loadTopo";
    MapCommand["mappingStart"] = "mappingStart";
    MapCommand["mappingStop"] = "mappingStop";
    MapCommand["mappingSave"] = "mappingSave";
    MapCommand["mappingReload"] = "mappingReload";
})(MapCommand || (exports.MapCommand = MapCommand = {}));
class MapCommandModel {
    constructor(param) {
        this.command = param.command;
        this.mapName = param.mapName;
        this.fileName = param.fileName;
        this.newMapName = param.newMapName;
        this.isForce = param.isForce;
        this.status = CommandStatus.pending;
        this.path = this.getMapsDir();
        this.cloud = param.cloud;
        this.topo = param.topo;
    }
    setTopology(param) {
        this.command = param.command;
        this.mapName = param.mapName;
        this.fileName = this.getFileName(param.fileName);
        this.newMapName = param.newMapName;
        this.isForce = param.isForce;
        this.status = CommandStatus.pending;
        this.path = this.getMapsDir();
        this.cloud = param.cloud;
        this.topo = param.topo;
    }
    assignId(id) {
        this.id = id;
    }
    getFileName(fileName) {
        const paths = this.getMapsDir(this.mapName);
        if ((0, fs_1.existsSync)((0, path_1.join)(paths, 'node.json'))) {
            console.log('getFileName1 : node.json');
            return 'node.json';
        }
        else {
            console.log('getFileName2 : ', fileName);
            return fileName;
        }
    }
    getMapsDir(mapName, fileName) {
        const paths = ['/data/maps'];
        if (mapName)
            paths.push(mapName);
        if (fileName)
            paths.push(fileName);
        return (0, path_1.join)(...paths);
    }
    statusChange(status) {
        if (!this.id) {
            throw new rpc_code_exception_1.RpcCodeException('ID가 없습니다', constant_1.GrpcCode.InvalidArgument);
        }
        const parseStatus = this.parseStatus(status);
        this.status = parseStatus;
    }
    checkVariables() {
        switch (this.command) {
            case MapCommand.uploadMap:
            case MapCommand.downloadMap:
            case MapCommand.publishMap: {
                if (this.mapName === undefined || this.mapName === '') {
                    throw new rpc_code_exception_1.RpcCodeException('mapName 값이 비어있습니다', constant_1.GrpcCode.InvalidArgument);
                }
                if (this.newMapName === undefined || this.newMapName === '') {
                    this.newMapName = this.mapName;
                }
                this.path = this.getMapsDir(this.mapName);
                this.newPath = this.getMapsDir(this.newMapName);
                break;
            }
            case MapCommand.getMapList: {
                this.path = this.getMapsDir();
                break;
            }
            case MapCommand.getTopo: {
                if (this.mapName === undefined || this.mapName === '') {
                    throw new rpc_code_exception_1.RpcCodeException('mapName 값이 비어있습니다', constant_1.GrpcCode.InvalidArgument);
                }
                if (this.fileName === undefined || this.fileName === '') {
                    throw new rpc_code_exception_1.RpcCodeException('fileName 값이 비어있습니다', constant_1.GrpcCode.InvalidArgument);
                }
                if (this.fileName.split('.').length === 2) {
                    if (this.fileName.split('.')[1] !== 'json') {
                        throw new rpc_code_exception_1.RpcCodeException(`읽을 수 없는 확장자입니다. (fileName = ${this.fileName})`, constant_1.GrpcCode.InvalidArgument);
                    }
                }
                else {
                    throw new rpc_code_exception_1.RpcCodeException(`확장자를 입력해주세요. (fileName = ${this.fileName})`, constant_1.GrpcCode.InvalidArgument);
                }
                this.path = this.getMapsDir(this.mapName, this.fileName);
                break;
            }
            case MapCommand.getCloud: {
                if (this.mapName === undefined || this.mapName === '') {
                    throw new rpc_code_exception_1.RpcCodeException('mapName 값이 비어있습니다', constant_1.GrpcCode.InvalidArgument);
                }
                if (this.fileName === undefined || this.fileName === '') {
                    throw new rpc_code_exception_1.RpcCodeException('fileName 값이 비어있습니다', constant_1.GrpcCode.InvalidArgument);
                }
                if (this.fileName.split('.').length === 2) {
                    if (this.fileName.split('.')[1] !== 'csv') {
                        throw new rpc_code_exception_1.RpcCodeException(`읽을 수 없는 확장자입니다. (fileName = ${this.fileName})`, constant_1.GrpcCode.InvalidArgument);
                    }
                }
                else {
                    throw new rpc_code_exception_1.RpcCodeException(`확장자를 입력해주세요. (fileName = ${this.fileName})`, constant_1.GrpcCode.InvalidArgument);
                }
                this.path = this.getMapsDir(this.mapName, this.fileName);
                break;
            }
            case MapCommand.saveCloud: {
                if (this.mapName === undefined || this.mapName === '') {
                    throw new rpc_code_exception_1.RpcCodeException(`mapName 값이 없습니다.`, constant_1.GrpcCode.InvalidArgument);
                }
                if (this.fileName === undefined || this.fileName === '') {
                    throw new rpc_code_exception_1.RpcCodeException(`fileName 값이 없습니다.`, constant_1.GrpcCode.InvalidArgument);
                }
                if (this.fileName.split('.').length === 2) {
                    if (this.fileName.split('.')[1] !== 'csv') {
                        throw new rpc_code_exception_1.RpcCodeException(`읽을 수 없는 확장자입니다. (fileName = ${this.fileName})`, constant_1.GrpcCode.InvalidArgument);
                    }
                }
                else {
                    throw new rpc_code_exception_1.RpcCodeException(`확장자를 입력해주세요. (fileName = ${this.fileName})`, constant_1.GrpcCode.InvalidArgument);
                }
                if (!this.cloud || this.cloud.length === 0) {
                    throw new rpc_code_exception_1.RpcCodeException(`cloud 데이터가 없습니다.`, constant_1.GrpcCode.InvalidArgument);
                }
                this.path = this.getMapsDir(this.mapName, this.fileName);
                break;
            }
            case MapCommand.saveTopo: {
                if (this.mapName === undefined || this.mapName === '') {
                    throw new rpc_code_exception_1.RpcCodeException('mapName 값이 비어있습니다', constant_1.GrpcCode.InvalidArgument);
                }
                if (this.fileName === undefined || this.fileName === '') {
                    throw new rpc_code_exception_1.RpcCodeException('fileName 값이 비어있습니다', constant_1.GrpcCode.InvalidArgument);
                }
                if (this.fileName.split('.').length === 2) {
                    if (this.fileName.split('.')[1] !== 'json') {
                        throw new rpc_code_exception_1.RpcCodeException(`읽을 수 없는 확장자입니다. (fileName = ${this.fileName})`, constant_1.GrpcCode.InvalidArgument);
                    }
                }
                else {
                    throw new rpc_code_exception_1.RpcCodeException(`확장자를 입력해주세요. (fileName = ${this.fileName})`, constant_1.GrpcCode.InvalidArgument);
                }
                if (this.topo === undefined || this.topo.length === 0) {
                    throw new rpc_code_exception_1.RpcCodeException(`topo 데이터가 없습니다.`, constant_1.GrpcCode.InvalidArgument);
                }
                this.path = this.getMapsDir(this.mapName, this.fileName);
                break;
            }
            case MapCommand.loadMap: {
                if (this.mapName === undefined || this.mapName === '') {
                    throw new rpc_code_exception_1.RpcCodeException('mapName 값이 비어있습니다', constant_1.GrpcCode.InvalidArgument);
                }
                this.path = this.getMapsDir(this.mapName);
                break;
            }
            case MapCommand.loadTopo: {
                if (this.mapName === undefined || this.mapName === '') {
                    throw new rpc_code_exception_1.RpcCodeException('mapName 값이 비어있습니다', constant_1.GrpcCode.InvalidArgument);
                }
                this.path = this.getMapsDir(this.mapName, this.fileName);
                break;
            }
        }
    }
    parseStatus(value) {
        if (Object.values(CommandStatus).includes(value)) {
            return value;
        }
        return CommandStatus.unknown;
    }
}
exports.MapCommandModel = MapCommandModel;


/***/ }),
/* 61 */
/***/ ((module) => {

module.exports = require("form-data");

/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZipUtil = void 0;
const AdmZip = __webpack_require__(63);
const fs_1 = __webpack_require__(44);
const path_1 = __webpack_require__(31);
const microservices_1 = __webpack_require__(3);
const rpc_code_exception_1 = __webpack_require__(50);
const constant_1 = __webpack_require__(51);
class ZipUtil {
    static async zipFolder(sourcePath, zipPath) {
        try {
            const zip = new AdmZip();
            const addFilesRecursively = async (folderPath, zipFolderPath = '') => {
                const files = (0, fs_1.readdirSync)(folderPath);
                files.forEach((file) => {
                    const filePath = (0, path_1.join)(folderPath, file);
                    const stat = (0, fs_1.statSync)(filePath);
                    if (stat.isDirectory()) {
                        addFilesRecursively(filePath, (0, path_1.join)(zipFolderPath, file));
                    }
                    else {
                        zip.addLocalFile(filePath, zipFolderPath);
                    }
                });
            };
            addFilesRecursively(sourcePath);
            zip.writeZip(zipPath);
            return true;
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('파일을 압축할 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    static async unzipFolder(zipPath, targetPath) {
        try {
            const zip = new AdmZip(zipPath);
            if (!(0, fs_1.existsSync)(targetPath)) {
                (0, fs_1.mkdirSync)(targetPath, { recursive: true });
            }
            zip.extractAllTo(targetPath, true);
            return true;
        }
        catch (error) {
            throw new rpc_code_exception_1.RpcCodeException('파일을 압축 해제할 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
}
exports.ZipUtil = ZipUtil;


/***/ }),
/* 63 */
/***/ ((module) => {

module.exports = require("adm-zip");

/***/ }),
/* 64 */
/***/ ((module) => {

module.exports = require("axios");

/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 66 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapSocketIOAdapter = void 0;
const common_1 = __webpack_require__(33);
const microservices_1 = __webpack_require__(3);
const constant_1 = __webpack_require__(67);
const map_pending_service_1 = __webpack_require__(74);
const rpc_code_exception_1 = __webpack_require__(50);
const constant_2 = __webpack_require__(51);
const saveLog_service_1 = __webpack_require__(35);
let MapSocketIOAdapter = class MapSocketIOAdapter {
    constructor(saveLogService, mqttService, pendingService) {
        this.saveLogService = saveLogService;
        this.mqttService = mqttService;
        this.pendingService = pendingService;
        this.logger = this.saveLogService.get('host');
    }
    async mappingRequest(request) {
        this.logger?.debug(`[Map] moveRequest : ${JSON.stringify(request)}`);
        const response = this.waitForResponse(request.id, 5000);
        this.mqttService.emit('mappingRequest', request);
        const resp = await response;
        this.logger?.debug(`[Map] moveResponse : ${JSON.stringify(resp)}`);
        return resp;
    }
    async loadRequest(request) {
        this.logger?.debug(`[Map] loadRequest : ${JSON.stringify(request)}`);
        const response = this.waitForResponse(request.id, 5000);
        this.mqttService.emit('loadRequest', request);
        const resp = await response;
        this.logger?.debug(`[Map] loadResponse : ${JSON.stringify(resp)}`);
        return resp;
    }
    async waitForResponse(id, timeoutMs) {
        return new Promise((resolve, reject) => {
            let timeout;
            if (timeoutMs) {
                timeout = setTimeout(() => {
                    this.pendingService.pendingResponses.delete(id);
                    this.logger?.error(`[Map] waitForResponse Timeout : ${id} , ${timeoutMs}`);
                    reject(new rpc_code_exception_1.RpcCodeException(`데이터 수신에 실패했습니다.`, constant_2.GrpcCode.DeadlineExceeded));
                }, timeoutMs);
            }
            this.pendingService.pendingResponses.set(id, {
                resolve: (value) => {
                    if (timeoutMs) {
                        clearTimeout(timeout);
                    }
                    resolve(value);
                },
                reject: (error) => {
                    if (timeoutMs) {
                        clearTimeout(timeout);
                    }
                    reject(error);
                },
                received: [],
            });
        });
    }
};
exports.MapSocketIOAdapter = MapSocketIOAdapter;
exports.MapSocketIOAdapter = MapSocketIOAdapter = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(constant_1.MQTT_BROKER)),
    __metadata("design:paramtypes", [typeof (_a = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _b : Object, typeof (_c = typeof map_pending_service_1.MapPendingResponseService !== "undefined" && map_pending_service_1.MapPendingResponseService) === "function" ? _c : Object])
], MapSocketIOAdapter);


/***/ }),
/* 67 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.message = exports.environment = void 0;
__exportStar(__webpack_require__(68), exports);
__exportStar(__webpack_require__(69), exports);
exports.environment = __webpack_require__(70);
exports.message = __webpack_require__(72);


/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MQTT_BROKER = exports.SEMLOG_SERVICE = exports.TCP_SERVICE = exports.COBOT_SERVICE = exports.TASK_SERVICE = exports.SOUND_SERVICE = exports.UPDATE_SERVICE = exports.MAP_SERVICE = exports.NETWORK_SERVICE = exports.LOCALIZATION_SERVICE = exports.MOVE_SERVICE = exports.CONTROL_SERVICE = exports.SETTING_SERVICE = exports.CONFIG_SERVICE = exports.CODE_SERVICE = exports.REDIS_SERVICE = exports.AMR_SERVICE = exports.GROUP_SERVICE = exports.ROLE_SERVICE = exports.PERMISSION_SERVICE = exports.USER_SERVICE = exports.AUTH_SERVICE = void 0;
exports.AUTH_SERVICE = 'AUTH_SERVICE';
exports.USER_SERVICE = 'USER_SERVICE';
exports.PERMISSION_SERVICE = 'PERMISSION_SERVICE';
exports.ROLE_SERVICE = 'ROLE_SERVICE';
exports.GROUP_SERVICE = 'GROUP_SERVICE';
exports.AMR_SERVICE = 'AMR_SERVICE';
exports.REDIS_SERVICE = 'REDIS_SERVICE';
exports.CODE_SERVICE = 'CODE_SERVICE';
exports.CONFIG_SERVICE = 'CONFIG_SERVICE';
exports.SETTING_SERVICE = 'SETTING_SERVICE';
exports.CONTROL_SERVICE = 'CONTROL_SERVICE';
exports.MOVE_SERVICE = 'MOVE_SERVICE';
exports.LOCALIZATION_SERVICE = 'LOCALIZATION_SERVICE';
exports.NETWORK_SERVICE = 'NETWORK_SERVICE';
exports.MAP_SERVICE = 'MAP_SERVICE';
exports.UPDATE_SERVICE = 'UPDATE_SERVICE';
exports.SOUND_SERVICE = 'SOUND_SERVICE';
exports.TASK_SERVICE = 'TASK_SERVICE';
exports.COBOT_SERVICE = 'COBOT_SERVICE';
exports.TCP_SERVICE = 'TCP_SERVICE';
exports.SEMLOG_SERVICE = 'SEMLOG_SERVICE';
exports.MQTT_BROKER = 'MQTT_BROKER';


/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 70 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(71), exports);


/***/ }),
/* 71 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SYSTEM = void 0;
exports.SYSTEM = {
    INTERACTIVE: {
        FMS: 'FMS',
        FRS: 'FRS',
        ACS: 'ACS',
        IMS: 'IMS',
    },
    CONTROL: {
        RRS: 'RRS',
    },
    CONNECTION: {
        CLIENT: 'CLIENT',
        AMR: 'AMR',
    },
};


/***/ }),
/* 72 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(73), exports);


/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SUCCESS_MESSAGES = exports.ERROR_MESSAGE = void 0;
exports.ERROR_MESSAGE = {
    USER: {
        ID_REQUIRED: '사용자 아이디는 필수입니다.',
        NOT_FOUND: '사용자를 찾을 수 없습니다.',
        ALREADY_EXISTS: '이미 존재하는 사용자입니다.',
        INVALID_PASSWORD: '비밀번호가 올바르지 않습니다.',
    },
    ROBOT: {
        SERIAL_REQUIRED: '로봇 시리얼은 필수입니다.',
        NOT_FOUND: '로봇을 찾을 수 없습니다.',
        ALREADY_EXISTS: '이미 존재하는 로봇입니다.',
    },
    AUTH: {
        TOKEN_REQUIRED: '인증 토큰이 필요합니다.',
        TOKEN_INVALID: '유효하지 않은 토큰입니다.',
        TOKEN_EXPIRED: '토큰이 만료되었습니다.',
        UNAUTHORIZED: '인증이 필요합니다.',
        ALREADY_EXISTS: '이미 존재하는 사용자입니다.',
    },
    CODE: {
        NOT_FOUND: '코드를 찾을 수 없습니다.',
        ALREADY_EXISTS: '이미 존재하는 코드입니다.',
    },
    SOCKET: {
        NOT_FOUND: 'Socket정보를 찾을 수 없습니다.',
    },
    MAP: {
        NOT_FOUND: '맵을 찾을 수 없습니다.',
        INVALID_FORMAT: '올바르지 않은 맵 형식입니다.',
        SAVE_FAILED: '맵 저장에 실패했습니다.',
    },
    COMMON: {
        BAD_REQUEST: '잘못된 요청입니다.',
        INTERNAL_SERVER_ERROR: '서버 내부 오류가 발생했습니다.',
        VALIDATION_FAILED: '유효성 검사에 실패했습니다.',
        FORBIDDEN: '권한이 없습니다.',
    },
};
exports.SUCCESS_MESSAGES = {
    USER: {
        CREATED: '사용자가 성공적으로 생성되었습니다.',
        UPDATED: '사용자 정보가 성공적으로 업데이트되었습니다.',
        DELETED: '사용자가 성공적으로 삭제되었습니다.',
    },
    MAP: {
        SAVED: '맵이 성공적으로 저장되었습니다.',
        LOADED: '맵이 성공적으로 로드되었습니다.',
        UPDATED: '맵이 성공적으로 업데이트되었습니다.',
    },
};


/***/ }),
/* 74 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapPendingResponseService = void 0;
const pending_util_1 = __webpack_require__(75);
const common_1 = __webpack_require__(33);
let MapPendingResponseService = class MapPendingResponseService extends pending_util_1.PendingResponseUtil {
};
exports.MapPendingResponseService = MapPendingResponseService;
exports.MapPendingResponseService = MapPendingResponseService = __decorate([
    (0, common_1.Injectable)()
], MapPendingResponseService);


/***/ }),
/* 75 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PendingResponseUtil = void 0;
const common_1 = __webpack_require__(33);
let PendingResponseUtil = class PendingResponseUtil {
    constructor() {
        this.pendingResponses = new Map();
    }
};
exports.PendingResponseUtil = PendingResponseUtil;
exports.PendingResponseUtil = PendingResponseUtil = __decorate([
    (0, common_1.Injectable)()
], PendingResponseUtil);


/***/ }),
/* 76 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapMqttInputController = void 0;
const common_1 = __webpack_require__(33);
const microservices_1 = __webpack_require__(3);
const map_service_1 = __webpack_require__(57);
const map_pending_service_1 = __webpack_require__(74);
const rpc_code_exception_1 = __webpack_require__(50);
const constant_1 = __webpack_require__(51);
const saveLog_service_1 = __webpack_require__(35);
const log_1 = __webpack_require__(29);
const mapping_dto_1 = __webpack_require__(77);
const load_dto_1 = __webpack_require__(81);
const status_type_1 = __webpack_require__(83);
let MapMqttInputController = class MapMqttInputController {
    constructor(saveLogService, mapService, pendingService) {
        this.saveLogService = saveLogService;
        this.mapService = mapService;
        this.pendingService = pendingService;
        this.logger = this.saveLogService.get('host');
    }
    getConnect() {
        this.logger?.info(`[Map] slam Connected`);
        this.mapService.slamConnect();
    }
    getDisconnect() {
        this.logger?.warn(`[Map] slam Disconnected`);
        this.mapService.slamDisconnect();
        this.pendingService.pendingResponses.forEach((resp) => {
            resp.reject(new rpc_code_exception_1.RpcCodeException('SLAMNAV 연결이 끊어졌습니다', constant_1.GrpcCode.InternalError));
        });
        this.pendingService.pendingResponses.clear();
    }
    getStatus(data) {
        this.mapService.setCurrentMap(data.map.map_name);
    }
    getMoveResponse(data) {
        const { id } = data;
        const listener = this.pendingService.pendingResponses.get(id);
        if (listener) {
            listener.received.push(data);
            listener.resolve(data);
            this.pendingService.pendingResponses.delete(id);
        }
        else {
            this.mapService.mappingResponse(data);
        }
    }
    getLoadResponse(data) {
        try {
            const { id } = data;
            const listener = this.pendingService.pendingResponses.get(id);
            if (listener) {
                listener.received.push(data);
                listener.resolve(data);
                this.pendingService.pendingResponses.delete(id);
            }
            else {
                this.mapService.loadResponse(data);
            }
        }
        catch (error) {
            this.logger?.error(`[Map] getLoadResponse : ${(0, log_1.errorToJson)(error)}`);
        }
    }
};
exports.MapMqttInputController = MapMqttInputController;
__decorate([
    (0, microservices_1.EventPattern)('con:slamnav'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MapMqttInputController.prototype, "getConnect", null);
__decorate([
    (0, microservices_1.EventPattern)('discon:slamnav'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MapMqttInputController.prototype, "getDisconnect", null);
__decorate([
    (0, microservices_1.EventPattern)('status'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof status_type_1.StatusSlamnav !== "undefined" && status_type_1.StatusSlamnav) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], MapMqttInputController.prototype, "getStatus", null);
__decorate([
    (0, microservices_1.EventPattern)('mappingResponse'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof mapping_dto_1.MappingResponseSlamnav !== "undefined" && mapping_dto_1.MappingResponseSlamnav) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], MapMqttInputController.prototype, "getMoveResponse", null);
__decorate([
    (0, microservices_1.EventPattern)('loadResponse'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof load_dto_1.LoadResponseSlamnav !== "undefined" && load_dto_1.LoadResponseSlamnav) === "function" ? _f : Object]),
    __metadata("design:returntype", void 0)
], MapMqttInputController.prototype, "getLoadResponse", null);
exports.MapMqttInputController = MapMqttInputController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _a : Object, typeof (_b = typeof map_service_1.MapService !== "undefined" && map_service_1.MapService) === "function" ? _b : Object, typeof (_c = typeof map_pending_service_1.MapPendingResponseService !== "undefined" && map_pending_service_1.MapPendingResponseService) === "function" ? _c : Object])
], MapMqttInputController);


/***/ }),
/* 77 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MappingResponseFrs = exports.MappingResponseSlamnav = exports.MappingRequestSlamnav = exports.MappingResponseDto = exports.MappingRequestDto = exports.Description = void 0;
const swagger_1 = __webpack_require__(78);
const class_validator_1 = __webpack_require__(79);
const class_transformer_1 = __webpack_require__(80);
const util_1 = __webpack_require__(38);
const load_dto_1 = __webpack_require__(81);
var Description;
(function (Description) {
    Description["ID"] = "\uC694\uCCAD\uD55C \uBA85\uB839\uC758 ID\uAC12\uC785\uB2C8\uB2E4. request\uC2DC \uC790\uB3D9 \uC0DD\uC131\uB429\uB2C8\uB2E4.";
    Description["COMMAND"] = "\uC2E4\uD589\uD560 \uBA85\uB839";
    Description["MAPNAME"] = "\uB85C\uB4DC(\uC800\uC7A5)\uD560 \uB9F5 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694.";
    Description["FILE"] = "\uC800\uC7A5\uD560 \uD30C\uC77C\uC758 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694. \uD655\uC7A5\uC790\uB97C \uD3EC\uD568\uD558\uC5EC \uC785\uB825\uD558\uC138\uC694.";
    Description["EXTENSION"] = "\uB85C\uB4DC(\uC800\uC7A5)\uD560 \uD30C\uC77C\uC758 \uD655\uC7A5\uC790\uB97C \uC785\uB825\uD558\uC138\uC694. cloud\uC758 \uACBD\uC6B0 \uD604\uC7AC csv\uB9CC \uC9C0\uC6D0\uD558\uBA70 topology\uB294 \uD604\uC7AC json \uD615\uC2DD\uB9CC \uC9C0\uC6D0\uD569\uB2C8\uB2E4.";
    Description["MAPPING_NAME"] = "\uC0C8\uB85C \uC0DD\uC131\uD55C \uB9F5\uC758 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694.";
    Description["RESULT"] = "\uC694\uCCAD\uD55C \uBA85\uB839\uC5D0 \uB300\uD55C \uACB0\uACFC\uC785\uB2C8\uB2E4. accept, reject, success, fail \uB4F1 \uBA85\uB839\uC5D0 \uB300\uD574 \uB2E4\uC591\uD55C \uAC12\uC774 \uC874\uC7AC\uD569\uB2C8\uB2E4.";
    Description["MESSAGE"] = "result\uAC12\uC774 reject, fail \uC778 \uACBD\uC6B0 SLAMNAV\uC5D0\uC11C \uBCF4\uB0B4\uB294 \uBA54\uC2DC\uC9C0 \uC785\uB2C8\uB2E4.";
    Description["TIME"] = "\uBA54\uC2DC\uC9C0 \uBC1C\uC1A1 \uC2DC\uAC04. ms \uB2E8\uC704";
    Description["TOPO"] = "\uC800\uC7A5\uD560 \uD1A0\uD3F4\uB85C\uC9C0 \uD615\uC2DD\uC744 \uB9DE\uCDB0 \uC785\uB825\uD558\uC138\uC694.";
})(Description || (exports.Description = Description = {}));
class MappingRequestDto {
}
exports.MappingRequestDto = MappingRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.COMMAND,
        example: load_dto_1.MapCommand.mappingSave,
        enum: [load_dto_1.MapCommand.mappingSave, load_dto_1.MapCommand.mappingReload, load_dto_1.MapCommand.mappingStart, load_dto_1.MapCommand.mappingStop],
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MappingRequestDto.prototype, "command", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MAPNAME,
        example: 'Test',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MappingRequestDto.prototype, "mapName", void 0);
class MappingResponseDto extends MappingRequestDto {
}
exports.MappingResponseDto = MappingResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.RESULT,
        example: 'accept',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MappingResponseDto.prototype, "result", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MESSAGE,
        example: '',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MappingResponseDto.prototype, "message", void 0);
class MappingRequestSlamnav extends MappingRequestDto {
}
exports.MappingRequestSlamnav = MappingRequestSlamnav;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ID,
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MappingRequestSlamnav.prototype, "id", void 0);
class MappingResponseSlamnav extends MappingResponseDto {
}
exports.MappingResponseSlamnav = MappingResponseSlamnav;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ID,
        example: 'Test',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MappingResponseSlamnav.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.RESULT,
        example: 'accept',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MappingResponseSlamnav.prototype, "result", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MESSAGE,
        example: '',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MappingResponseSlamnav.prototype, "message", void 0);
class MappingResponseFrs {
}
exports.MappingResponseFrs = MappingResponseFrs;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'FRS 연결 시 사용하는 로봇 시리얼 번호',
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MappingResponseFrs.prototype, "robotSerial", void 0);


/***/ }),
/* 78 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 79 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 80 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 81 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoadResponseFrs = exports.LoadResponseSlamnav = exports.LoadRequestSlamnav = exports.LoadResponseDto = exports.LoadRequestDto = exports.MapCommand = void 0;
const swagger_1 = __webpack_require__(78);
const class_validator_1 = __webpack_require__(79);
const util_1 = __webpack_require__(38);
const description_1 = __webpack_require__(82);
const class_transformer_1 = __webpack_require__(80);
var Description;
(function (Description) {
    Description["ID"] = "\uC694\uCCAD\uD55C \uBA85\uB839\uC758 ID\uAC12\uC785\uB2C8\uB2E4. request\uC2DC \uC790\uB3D9 \uC0DD\uC131\uB429\uB2C8\uB2E4.";
    Description["COMMAND"] = "\uC2E4\uD589\uD560 \uBA85\uB839";
    Description["MAPNAME"] = "\uB85C\uB4DC(\uC800\uC7A5)\uD560 \uB9F5 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694.";
    Description["FILE"] = "\uC800\uC7A5\uD560 \uD30C\uC77C\uC758 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694. \uD655\uC7A5\uC790\uB97C \uD3EC\uD568\uD558\uC5EC \uC785\uB825\uD558\uC138\uC694.";
    Description["EXTENSION"] = "\uB85C\uB4DC(\uC800\uC7A5)\uD560 \uD30C\uC77C\uC758 \uD655\uC7A5\uC790\uB97C \uC785\uB825\uD558\uC138\uC694. cloud\uC758 \uACBD\uC6B0 \uD604\uC7AC csv\uB9CC \uC9C0\uC6D0\uD558\uBA70 topology\uB294 \uD604\uC7AC json \uD615\uC2DD\uB9CC \uC9C0\uC6D0\uD569\uB2C8\uB2E4.";
    Description["MAPPING_NAME"] = "\uC0C8\uB85C \uC0DD\uC131\uD55C \uB9F5\uC758 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694.";
    Description["RESULT"] = "\uC694\uCCAD\uD55C \uBA85\uB839\uC5D0 \uB300\uD55C \uACB0\uACFC\uC785\uB2C8\uB2E4. accept, reject, success, fail \uB4F1 \uBA85\uB839\uC5D0 \uB300\uD574 \uB2E4\uC591\uD55C \uAC12\uC774 \uC874\uC7AC\uD569\uB2C8\uB2E4.";
    Description["MESSAGE"] = "result\uAC12\uC774 reject, fail \uC778 \uACBD\uC6B0 SLAMNAV\uC5D0\uC11C \uBCF4\uB0B4\uB294 \uBA54\uC2DC\uC9C0 \uC785\uB2C8\uB2E4.";
    Description["TIME"] = "\uBA54\uC2DC\uC9C0 \uBC1C\uC1A1 \uC2DC\uAC04. ms \uB2E8\uC704";
    Description["TOPO"] = "\uC800\uC7A5\uD560 \uD1A0\uD3F4\uB85C\uC9C0 \uD615\uC2DD\uC744 \uB9DE\uCDB0 \uC785\uB825\uD558\uC138\uC694.";
})(Description || (Description = {}));
var MapCommand;
(function (MapCommand) {
    MapCommand["uploadMap"] = "upload";
    MapCommand["downloadMap"] = "download";
    MapCommand["publishMap"] = "publish";
    MapCommand["getMapList"] = "list";
    MapCommand["getCloud"] = "getCloud";
    MapCommand["saveCloud"] = "saveCloud";
    MapCommand["getTopo"] = "getTopo";
    MapCommand["saveTopo"] = "saveTopo";
    MapCommand["loadMap"] = "loadMap";
    MapCommand["loadTopo"] = "loadTopo";
    MapCommand["mappingStart"] = "mappingStart";
    MapCommand["mappingStop"] = "mappingStop";
    MapCommand["mappingSave"] = "mappingSave";
    MapCommand["mappingReload"] = "mappingReload";
})(MapCommand || (exports.MapCommand = MapCommand = {}));
class LoadRequestDto {
}
exports.LoadRequestDto = LoadRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.COMMAND,
        example: MapCommand.loadMap,
        enum: MapCommand,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], LoadRequestDto.prototype, "command", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MAPNAME,
        example: 'Large',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], LoadRequestDto.prototype, "mapName", void 0);
class LoadResponseDto extends LoadRequestDto {
}
exports.LoadResponseDto = LoadResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.RESULT,
        example: 'accept',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LoadResponseDto.prototype, "result", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MESSAGE,
        example: '',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LoadResponseDto.prototype, "message", void 0);
class LoadRequestSlamnav extends LoadRequestDto {
}
exports.LoadRequestSlamnav = LoadRequestSlamnav;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ID,
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LoadRequestSlamnav.prototype, "id", void 0);
class LoadResponseSlamnav extends LoadResponseDto {
}
exports.LoadResponseSlamnav = LoadResponseSlamnav;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ID,
        example: util_1.UrlUtil.generateUUID(),
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], LoadResponseSlamnav.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.RESULT,
        example: 'accept',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], LoadResponseSlamnav.prototype, "result", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MESSAGE,
        example: '',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], LoadResponseSlamnav.prototype, "message", void 0);
class LoadResponseFrs {
}
exports.LoadResponseFrs = LoadResponseFrs;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: description_1.FrsDescription.ROBOT_SERIAL,
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], LoadResponseFrs.prototype, "robotSerial", void 0);


/***/ }),
/* 82 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FrsDescription = void 0;
var FrsDescription;
(function (FrsDescription) {
    FrsDescription["COMMAND"] = "";
    FrsDescription["ROBOT_SERIAL"] = "\uB85C\uBD07\uC2DC\uB9AC\uC5BC uuid. \uB85C\uBD07\uC5D0 \uC800\uC7A5\uB41C \uACE0\uC720\uD55C \uBC88\uD638\uB85C FRS\uC5D0 \uB4F1\uB85D \uC2DC \uC0AC\uC6A9\uB428.";
    FrsDescription["ROBOT_NAME"] = "\uB85C\uBD07 \uC774\uB984. \uCD08\uAE30\uC5D0 robotSerial\uACFC \uB3D9\uC77C\uD55C \uAC12\uC73C\uB85C \uC124\uC815\uB418\uBA70 \uBCC0\uACBD \uAC00\uB2A5";
})(FrsDescription || (exports.FrsDescription = FrsDescription = {}));


/***/ }),
/* 83 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatusSlamnav = exports.StatusMapDto = exports.StatusSettingDto = exports.StatusPowerDto = exports.StatusStateDto = exports.StatusConditionDto = exports.StatuMotorDto = exports.StatusLidarDto = exports.StatusIMUDto = void 0;
const date_util_1 = __webpack_require__(41);
const swagger_1 = __webpack_require__(78);
const class_validator_1 = __webpack_require__(79);
const state_type_1 = __webpack_require__(84);
const class_transformer_1 = __webpack_require__(80);
var Description;
(function (Description) {
    Description["IMU"] = "IMU, Gyro \uC13C\uC11C \uB370\uC774\uD130";
    Description["IMU_ACC"] = "Gyro \uC18D\uB3C4";
    Description["IMU_GYR"] = "IMU \uAC00\uC18D\uB3C4";
    Description["IMU_IMU"] = "IMU \uC18D\uB3C4";
    Description["LIDAR"] = "Lidar \uC5F0\uACB0 \uC0C1\uD0DC \uBC0F \uB370\uC774\uD130";
    Description["LIDAR_CONNECTION"] = "Lidar \uC5F0\uACB0 \uC0C1\uD0DC";
    Description["LIDAR_PORT"] = "Lidar \uC5F0\uACB0 \uD3EC\uD2B8";
    Description["LIDAR_SERIAL_NUMBER"] = "Lidar \uC2DC\uB9AC\uC5BC \uB118\uBC84";
    Description["MOTOR"] = "\uBAA8\uD130 \uC5F0\uACB0 \uC0C1\uD0DC \uBC0F \uB370\uC774\uD130";
    Description["MOTOR_CONNECTION"] = "\uBAA8\uD130 \uC5F0\uACB0 \uC0C1\uD0DC";
    Description["MOTOR_CURRENT"] = "\uBAA8\uD130 \uC804\uB958";
    Description["MOTOR_STATUS"] = "\uBAA8\uD130 \uC0C1\uD0DC 8\uAC00\uC9C0\uB97C 8bit \uD615\uD0DC\uB85C \uCABC\uAC1C\uC5B4 \uAC01 \uBE44\uD2B8\uC790\uB9AC\uC218\uAC00 0 \uD639\uC740 1\uC77C\uB54C\uC5D0 \uB530\uB77C\uC11C \uC0C1\uD0DC\uAC00 \uBCC0\uD568. \uB0AE\uC740\uBE44\uD2B8 \uC21C\uC11C\uB85C (READY, MODE ERROR, JAM ERROR, CURRENT ERROR, BIG ERROR, INPUT ERROR, POSITION ERROR, COLLISTION ERROR)\uB97C \uB098\uD0C0\uB0B4\uBA70, status \uAC12\uC774 0\uC77C\uB54C\uB294 Motor Not ready, 1\uC77C\uB54C\uB294 Motor Ready, 16\uC77C\uB54C\uB294 Motor Big Error, 20\uC77C\uB54C\uB294 Motor Big Error + Motor Jam Error \uB4F1\uC73C\uB85C \uD310\uB2E8\uD55C\uB2E4.";
    Description["MOTOR_TEMP"] = "\uBAA8\uD130 \uC628\uB3C4";
    Description["CONDITION"] = "\uB85C\uBD07 \uC704\uCE58\uCD94\uC815 \uC0C1\uD0DC";
    Description["CONDITION_INLIER_ERROR"] = "\uC704\uCE58\uCD94\uC815 \uC5D0\uB7EC\uC728";
    Description["CONDITION_INLIER_RATIO"] = "\uC704\uCE58\uCD94\uC815 \uC815\uD655\uB3C4";
    Description["CONDITION_MAPPING_ERROR"] = "\uB9E4\uD551 \uC5D0\uB7EC\uC728";
    Description["CONDITION_MAPPING_RATIO"] = "\uB9E4\uD551 \uC815\uD655\uB3C4";
    Description["STATE"] = "\uB85C\uBD07 \uC0C1\uD0DC (\uCDA9\uC804, \uB3C4\uD0B9, \uC804\uC6D0, \uCD08\uAE30\uD654)";
    Description["STATE_CHARGE"] = "\uCDA9\uC804 \uC0C1\uD0DC. \uB85C\uBD07\uC774 SRV \uD0C0\uC785\uC778 \uACBD\uC6B0, none, ready(\uCDA9\uC804 \uC911) \uC0C1\uD0DC\uB9CC \uC874\uC7AC\uD568";
    Description["STATE_DOCK"] = "\uB3C4\uD0B9 \uC0C1\uD0DC";
    Description["STATE_EMO"] = "\uBE44\uC0C1\uC804\uC6D0\uC2A4\uC704\uCE58 \uC0C1\uD0DC. \uC2A4\uC704\uCE58\uAC00 \uB20C\uB9B0\uACBD\uC6B0(\uC804\uC6D0 \uCC28\uB2E8) \uAC12\uC774 true";
    Description["STATE_LOCALIZATION"] = "\uC704\uCE58\uCD08\uAE30\uD654 \uC0C1\uD0DC. \uC704\uCE58\uCD08\uAE30\uD654\uAC00 \uB418\uC9C0 \uC54A\uC740 \uC0C1\uD0DC\uC5D0\uC11C\uB294 none, \uC704\uCE58\uCD08\uAE30\uD654\uAC00 \uC131\uACF5\uC801\uC73C\uB85C \uB418\uC5C8\uC744 \uACBD\uC6B0 good, \uC704\uCE58\uCD08\uAE30\uD654\uC5D0 \uC2E4\uD328\uD558\uAC70\uB098 \uB3C4\uC911\uC5D0 \uC704\uCE58\uB97C \uC783\uC5B4\uBC84\uB838\uC744 \uACBD\uC6B0 fail \uAC12\uC744 \uAC00\uC9C4\uB2E4";
    Description["STATE_POWER"] = "\uC804\uC6D0 \uC0C1\uD0DC. \uB85C\uBD07 \uBAA8\uD130\uB2E8\uC73C\uB85C \uC804\uC6D0\uC774 \uC778\uAC00\uB418\uB294 \uC0C1\uD0DC\uC778 \uACBD\uC6B0 true";
    Description["POWER"] = "\uB85C\uBD07 \uC804\uC6D0 \uC0C1\uD0DC";
    Description["POWER_BATTERY_CURRENT"] = "\uBC30\uD130\uB9AC \uC804\uB958";
    Description["POWER_BATTERY_IN"] = "\uBC30\uD130\uB9AC \uC785\uB825\uC804\uC6D0";
    Description["POWER_BATTERY_OUT"] = "\uBC30\uD130\uB9AC \uCD9C\uB825\uC804\uC6D0";
    Description["POWER_BATTERY_PERCENT"] = "\uBC30\uD130\uB9AC \uCD9C\uB825\uC804\uC6D0(\uD37C\uC13C\uD2B8)";
    Description["POWER_CHARGE_CURRENT"] = "\uCDA9\uC804 \uC804\uB958";
    Description["POWER_CONTACT_VOLTAGE"] = "\uCDA9\uC804 \uC804\uC555";
    Description["POWER_POWER"] = "\uC804\uB825";
    Description["POWER_TOTAL_POWER"] = "\uB204\uC801 \uC804\uB825";
    Description["SETTING"] = "\uB85C\uBD07\uC758 \uC138\uD305 \uAC12";
    Description["SETTING_PLATFORM_TYPE"] = "\uB85C\uBD07 \uD0C0\uC785";
    Description["MAP"] = "\uB85C\uBD07 \uB9F5 \uC0C1\uD0DC";
    Description["MAP_NAME"] = "\uB85C\uBD07 \uB9F5 \uC774\uB984";
    Description["MAP_STATUS"] = "\uB85C\uBD07 \uB9F5 \uB85C\uB529 \uC0C1\uD0DC. \uB9F5\uC774 \uB85C\uB529\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0 none, \uB9F5\uC774 \uB85C\uB529\uC911\uC77C\uB54C(\uD30C\uC77C\uC774 \uD074 \uC218\uB85D \uAE38\uC5B4\uC9D0) loading, \uB85C\uB529\uC774 \uC644\uB8CC\uB418\uC5C8\uC744 \uB584 loaded \uAC12\uC744 \uC9C0\uB2CC\uB2E4";
    Description["MOVE"] = "\uC774\uB3D9 \uD604 \uC0C1\uD0DC";
    Description["MOVE_AUTO"] = "\uC790\uC728\uC8FC\uD589 \uC774\uB3D9 \uC0C1\uD0DC";
    Description["MOVE_DOCK"] = "\uB3C4\uD0B9 \uC774\uB3D9 \uC0C1\uD0DC(\uBBF8\uC0AC\uC6A9)";
    Description["MOVE_JOG"] = "\uC870\uC774\uC2A4\uD2F1 \uC774\uB3D9 \uC0C1\uD0DC(\uBBF8\uC0AC\uC6A9)";
    Description["MOVE_OBS"] = "\uC8FC\uD589 \uC911 \uC7A5\uC560\uBB3C \uC0C1\uD0DC";
    Description["MOVE_PATH"] = "\uC8FC\uD589 \uACBD\uB85C\uC694\uCCAD \uC0C1\uD0DC";
    Description["POSE"] = "\uB85C\uBD07 \uAE00\uB85C\uBC8C\uC88C\uD45C. \uC704\uCE58\uCD08\uAE30\uD654\uAC00 good\uC778 \uC0C1\uD0DC\uC77C\uB54C \uC720\uC758\uBBF8";
    Description["VELOCITY"] = "\uB85C\uBD07 \uC8FC\uD589 \uC18D\uB3C4";
    Description["GOAL_NODE"] = "\uC8FC\uD589 \uBAA9\uD45C\uC9C0\uC810 \uC815\uBCF4 \uBC0F \uC0C1\uD0DC";
    Description["GOAL_ID"] = "\uC8FC\uD589 \uBAA9\uD45C\uC9C0\uC810 \uB178\uB4DC ID";
    Description["GOAL_NAME"] = "\uC8FC\uD589 \uBAA9\uD45C\uC9C0\uC810 \uB178\uB4DC \uC774\uB984";
    Description["GOAL_STATE"] = "\uC8FC\uD589 \uBAA9\uD45C\uC9C0\uC810 \uC774\uB3D9 \uC0C1\uD0DC";
    Description["GOAL_XYZ"] = "\uC8FC\uD589 \uBAA9\uD45C\uC9C0\uC810 \uAE00\uB85C\uBC8C \uC88C\uD45C";
    Description["CUR_NODE"] = "\uC8FC\uD589 \uD604\uC7AC\uC9C0\uC810 \uC815\uBCF4 \uBC0F \uC0C1\uD0DC";
    Description["CUR_ID"] = "\uC8FC\uD589 \uD604\uC7AC\uC9C0\uC810 \uB178\uB4DC ID";
    Description["CUR_NAME"] = "\uC8FC\uD589 \uD604\uC7AC\uC9C0\uC810 \uB178\uB4DC \uC774\uB984";
    Description["CUR_STATE"] = "\uC8FC\uD589 \uD604\uC7AC\uC9C0\uC810 \uC774\uB3D9 \uC0C1\uD0DC";
    Description["CUR_XYZ"] = "\uC8FC\uD589 \uD604\uC7AC\uC9C0\uC810 \uAE00\uB85C\uBC8C \uC88C\uD45C";
    Description["PATH_XYZ"] = "\uC8FC\uD589 \uC911 \uC0DD\uC131\uD55C \uACBD\uB85C \uD3EC\uC778\uD2B8\uC758 \uAE00\uB85C\uBC8C\uC88C\uD45C";
    Description["TIME"] = "\uBA54\uC2DC\uC9C0 \uBC1C\uC1A1 \uC2DC\uAC04. ms \uB2E8\uC704";
    Description["POWER_TABOS_AE"] = "TABOS \uC804\uC555 \uC624\uCC28";
    Description["POWER_TABOS_CURRENT"] = "TABOS \uC804\uB958";
    Description["POWER_TABOS_RC"] = "TABOS \uC804\uC555 \uC624\uCC28";
    Description["POWER_TABOS_SOC"] = "TABOS \uCDA9\uC804 \uC0C1\uD0DC";
    Description["POWER_TABOS_SOH"] = "TABOS \uC140 \uC0C1\uD0DC";
    Description["POWER_TABOS_STATUS"] = "TABOS \uC0C1\uD0DC";
    Description["POWER_TABOS_TEMP"] = "TABOS \uC628\uB3C4";
    Description["POWER_TABOS_TTE"] = "TABOS \uC140 \uC624\uCC28";
    Description["POWER_TABOS_TTF"] = "TABOS \uC140 \uC624\uCC28";
    Description["POWER_TABOS_VOLTAGE"] = "TABOS \uC804\uC555";
})(Description || (Description = {}));
class StatusIMUDto {
}
exports.StatusIMUDto = StatusIMUDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.IMU_IMU,
        example: 0.0,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusIMUDto.prototype, "imu_rx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.IMU_IMU,
        example: 0.0,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusIMUDto.prototype, "imu_ry", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.IMU_IMU,
        example: 0.0,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusIMUDto.prototype, "imu_rz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.IMU_ACC,
        example: 0.0,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusIMUDto.prototype, "acc_x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.IMU_ACC,
        example: 0.0,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusIMUDto.prototype, "acc_y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.IMU_ACC,
        example: 0.0,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusIMUDto.prototype, "acc_z", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.IMU_GYR,
        example: 0.0,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusIMUDto.prototype, "gyr_x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.IMU_GYR,
        example: 0.0,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusIMUDto.prototype, "gyr_y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.IMU_GYR,
        example: 0.0,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusIMUDto.prototype, "gyr_z", void 0);
class StatusLidarDto {
}
exports.StatusLidarDto = StatusLidarDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.LIDAR_CONNECTION,
        example: false,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], StatusLidarDto.prototype, "connection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.LIDAR_PORT,
        example: '',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusLidarDto.prototype, "port", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.LIDAR_SERIAL_NUMBER,
        example: '',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusLidarDto.prototype, "serialnumber", void 0);
class StatuMotorDto {
}
exports.StatuMotorDto = StatuMotorDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MOTOR_CONNECTION,
        example: false,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], StatuMotorDto.prototype, "connection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MOTOR_CURRENT,
        example: 0.0,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatuMotorDto.prototype, "current", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MOTOR_STATUS,
        example: 0,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatuMotorDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MOTOR_TEMP,
        example: 0.0,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatuMotorDto.prototype, "temp", void 0);
class StatusConditionDto {
}
exports.StatusConditionDto = StatusConditionDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CONDITION_INLIER_RATIO,
        example: 0.0,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusConditionDto.prototype, "inlier_ratio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CONDITION_INLIER_ERROR,
        example: 0.0,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusConditionDto.prototype, "inlier_error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CONDITION_MAPPING_RATIO,
        example: 0.0,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusConditionDto.prototype, "mapping_ratio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CONDITION_MAPPING_ERROR,
        example: 0.0,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusConditionDto.prototype, "mapping_error", void 0);
class StatusStateDto {
}
exports.StatusStateDto = StatusStateDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.STATE_CHARGE,
        example: 'none',
        enum: state_type_1.ChargeState,
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StatusStateDto.prototype, "charge", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.STATE_DOCK,
        example: false,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], StatusStateDto.prototype, "dock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.STATE_EMO,
        example: false,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], StatusStateDto.prototype, "emo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.STATE_LOCALIZATION,
        example: 'none',
        enum: state_type_1.LocalizationState,
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StatusStateDto.prototype, "localization", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.STATE_POWER,
        example: false,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], StatusStateDto.prototype, "power", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Soft Safeguard Stop. 로봇의 안전장치(범퍼, EMO 등)가 모두 해제되어 로봇(AMR, Cobot)이 초기화 가능한 상태일때 true, 이미 로봇이 초기화 상태이거나 안전장치가 작동된 상태면 false',
        example: true,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], StatusStateDto.prototype, "sss_recovery", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Reset(원점복귀) 버튼의 눌림 상태. true일때 눌림',
        example: true,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], StatusStateDto.prototype, "sw_reset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Stop 버튼의 눌림 상태. true일때 눌림',
        example: true,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], StatusStateDto.prototype, "sw_stop", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Start 버튼의 눌림 상태. true일때 눌림',
        example: true,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], StatusStateDto.prototype, "sw_start", void 0);
class StatusPowerDto {
}
exports.StatusPowerDto = StatusPowerDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_BATTERY_CURRENT,
        example: 0.0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusPowerDto.prototype, "bat_current", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_BATTERY_IN,
        example: 0.0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusPowerDto.prototype, "bat_in", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_BATTERY_OUT,
        example: 0.0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusPowerDto.prototype, "bat_out", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_BATTERY_PERCENT,
        example: 0.0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusPowerDto.prototype, "bat_percent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_CHARGE_CURRENT,
        example: 0.0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusPowerDto.prototype, "charge_current", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_CONTACT_VOLTAGE,
        example: 0.0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusPowerDto.prototype, "contact_voltage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_POWER,
        example: 0.0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusPowerDto.prototype, "power", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_TOTAL_POWER,
        example: 0.0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusPowerDto.prototype, "total_power", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_TABOS_AE,
        example: 0.0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusPowerDto.prototype, "tabos_ae", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_TABOS_CURRENT,
        example: 0.0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusPowerDto.prototype, "tabos_current", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_TABOS_RC,
        example: 0.0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusPowerDto.prototype, "tabos_rc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_TABOS_SOC,
        example: 0.0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusPowerDto.prototype, "tabos_soc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_TABOS_SOH,
        example: 0.0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusPowerDto.prototype, "tabos_soh", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_TABOS_STATUS,
        example: 0.0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusPowerDto.prototype, "tabos_status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_TABOS_TEMP,
        example: 0.0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusPowerDto.prototype, "tabos_temp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_TABOS_TTE,
        example: 0.0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusPowerDto.prototype, "tabos_tte", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_TABOS_TTF,
        example: 0.0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusPowerDto.prototype, "tabos_ttf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_TABOS_VOLTAGE,
        example: 0.0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], StatusPowerDto.prototype, "tabos_voltage", void 0);
class StatusSettingDto {
}
exports.StatusSettingDto = StatusSettingDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.SETTING_PLATFORM_TYPE,
        example: 'SRV',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StatusSettingDto.prototype, "platform_type", void 0);
class StatusMapDto {
}
exports.StatusMapDto = StatusMapDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MAP_NAME,
        example: 'Test',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StatusMapDto.prototype, "map_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MAP_STATUS,
        example: 'none',
        enum: state_type_1.MapState,
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], StatusMapDto.prototype, "map_status", void 0);
class StatusSlamnav {
}
exports.StatusSlamnav = StatusSlamnav;
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.IMU, required: false }),
    __metadata("design:type", StatusIMUDto)
], StatusSlamnav.prototype, "imu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.LIDAR,
        example: [
            {
                connection: 'false',
                port: '/dev/ttyUSB0',
                serialnumber: 'ABC123',
            },
            {
                connection: 'true',
                port: '/dev/ttyUSB1',
                serialnumber: 'DEF456',
            },
        ],
        required: false,
    }),
    __metadata("design:type", Array)
], StatusSlamnav.prototype, "lidar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MOTOR,
        example: [
            {
                connection: false,
                current: 0.0,
                status: 0,
                temp: 0.0,
            },
            {
                connection: true,
                current: 1.54,
                status: 1,
                temp: 32.0,
            },
        ],
        required: false,
    }),
    __metadata("design:type", Array)
], StatusSlamnav.prototype, "motor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CONDITION,
        required: false,
    }),
    __metadata("design:type", StatusConditionDto)
], StatusSlamnav.prototype, "condition", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.STATE,
        required: false,
    }),
    __metadata("design:type", StatusStateDto)
], StatusSlamnav.prototype, "robot_state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER,
        required: false,
    }),
    __metadata("design:type", StatusPowerDto)
], StatusSlamnav.prototype, "power", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.SETTING,
        required: false,
    }),
    __metadata("design:type", StatusSettingDto)
], StatusSlamnav.prototype, "setting", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.MAP, required: false }),
    __metadata("design:type", StatusMapDto)
], StatusSlamnav.prototype, "map", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.TIME,
        example: date_util_1.DateUtil.getTimeString(),
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], StatusSlamnav.prototype, "time", void 0);


/***/ }),
/* 84 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChargeState = exports.LocalizationState = exports.MapState = exports.PathState = exports.ObsState = exports.MoveState = exports.GoalState = void 0;
var GoalState;
(function (GoalState) {
    GoalState["none"] = "none";
    GoalState["move"] = "move";
    GoalState["complete"] = "complete";
    GoalState["fail"] = "fail";
    GoalState["obstacle"] = "obstacle";
    GoalState["cancel"] = "cancel";
})(GoalState || (exports.GoalState = GoalState = {}));
var MoveState;
(function (MoveState) {
    MoveState["move"] = "move";
    MoveState["error"] = "error";
    MoveState["pause"] = "pause";
    MoveState["stop"] = "stop";
    MoveState["notReady"] = "not ready";
    MoveState["vir"] = "vir";
})(MoveState || (exports.MoveState = MoveState = {}));
var ObsState;
(function (ObsState) {
    ObsState["none"] = "none";
    ObsState["far"] = "far";
    ObsState["near"] = "near";
    ObsState["vir"] = "vir";
})(ObsState || (exports.ObsState = ObsState = {}));
var PathState;
(function (PathState) {
    PathState["none"] = "none";
    PathState["reqPath"] = "req_path";
    PathState["recevPath"] = "recv_path";
})(PathState || (exports.PathState = PathState = {}));
var MapState;
(function (MapState) {
    MapState["none"] = "none";
    MapState["loading"] = "loading";
    MapState["loaded"] = "loaded";
})(MapState || (exports.MapState = MapState = {}));
var LocalizationState;
(function (LocalizationState) {
    LocalizationState["none"] = "none";
    LocalizationState["good"] = "good";
    LocalizationState["fail"] = "fail";
})(LocalizationState || (exports.LocalizationState = LocalizationState = {}));
var ChargeState;
(function (ChargeState) {
    ChargeState["none"] = "none";
    ChargeState["ready"] = "ready";
    ChargeState["battery_on"] = "battery_on";
    ChargeState["charging"] = "charging";
    ChargeState["finish"] = "finish";
    ChargeState["fail"] = "fail";
})(ChargeState || (exports.ChargeState = ChargeState = {}));


/***/ }),
/* 85 */
/***/ ((module) => {

module.exports = require("pg");

/***/ }),
/* 86 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapFileAdapter = void 0;
const common_1 = __webpack_require__(33);
const microservices_1 = __webpack_require__(3);
const saveLog_service_1 = __webpack_require__(35);
const util_1 = __webpack_require__(38);
const log_1 = __webpack_require__(29);
const rpc_code_exception_1 = __webpack_require__(50);
const constant_1 = __webpack_require__(51);
const fs_1 = __webpack_require__(44);
const path_1 = __webpack_require__(31);
const fs_2 = __webpack_require__(44);
let MapFileAdapter = class MapFileAdapter {
    constructor(saveLogService) {
        this.saveLogService = saveLogService;
        console.log(saveLogService);
        this.logger = this.saveLogService.get('host');
    }
    async readMapList(request) {
        try {
            const mapList = (0, fs_1.readdirSync)(this.mapPath, { withFileTypes: true });
            const list = [];
            mapList.map((file) => {
                const mapPath = (0, path_1.join)(this.mapPath, file.name);
                const stat = (0, fs_1.statSync)(mapPath);
                if (file.isDirectory()) {
                    const fileList = (0, fs_1.readdirSync)(mapPath, { withFileTypes: true });
                    const cloudFiles = [];
                    const topoFiles = [];
                    fileList.map((file) => {
                        if (file.isFile()) {
                            const filePath = (0, path_1.join)(mapPath, file.name);
                            const fileStat = (0, fs_1.statSync)(filePath);
                            console.log(file.name, fileStat.size);
                            if (file.name.startsWith('cloud')) {
                                cloudFiles.push({
                                    fileName: file.name,
                                    fileType: file.isFile() ? 'file' : 'directory',
                                    fileSize: fileStat.size,
                                    createAt: util_1.DateUtil.formatDateKST(fileStat.birthtime),
                                    updateAt: util_1.DateUtil.formatDateKST(fileStat.mtime),
                                });
                            }
                            else if (file.name.startsWith('topo')) {
                                topoFiles.push({
                                    fileName: file.name,
                                    fileType: file.isFile() ? 'file' : 'directory',
                                    fileSize: fileStat.size,
                                    createAt: util_1.DateUtil.formatDateKST(fileStat.birthtime),
                                    updateAt: util_1.DateUtil.formatDateKST(fileStat.mtime),
                                });
                            }
                        }
                    });
                    list.push({
                        fileName: file.name,
                        fileType: file.isFile() ? 'file' : 'directory',
                        createAt: util_1.DateUtil.formatDateKST(stat.birthtime),
                        updateAt: util_1.DateUtil.formatDateKST(stat.mtime),
                        cloudFiles: cloudFiles,
                        topoFiles: topoFiles,
                    });
                }
            });
            return {
                list: list,
            };
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[File] readFileList : ${(0, log_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('리스트를 읽어올 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async getMapTileExist(request) {
        const mapPath = (0, path_1.join)(this.mapPath, request.mapName);
        const tilePath = (0, path_1.join)(mapPath, 'tiles');
        return { exist: (0, fs_1.existsSync)(tilePath) };
    }
    async getMapTile(request) {
        const mapPath = (0, path_1.join)(this.mapPath, request.mapName);
        const tilePath = (0, path_1.join)(mapPath, 'tiles');
        const tileFile = (0, path_1.join)(tilePath, request.z.toString(), request.x.toString(), request.y.toString() + '.png');
        if (!(0, fs_1.existsSync)(tileFile)) {
            throw new rpc_code_exception_1.RpcCodeException('타일을 찾을 수 없습니다.', constant_1.GrpcCode.NotFound);
        }
        const st = await fs_2.promises.lstat(tileFile);
        if (!st.isFile()) {
            throw new rpc_code_exception_1.RpcCodeException(`타겟이 파일이 아님: ${tileFile}`, constant_1.GrpcCode.InternalError);
        }
        const data = await fs_2.promises.readFile(tileFile);
        return { data: data };
    }
    onModuleInit() {
        this.mapPath = '/data/maps';
    }
};
exports.MapFileAdapter = MapFileAdapter;
exports.MapFileAdapter = MapFileAdapter = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _a : Object])
], MapFileAdapter);


/***/ }),
/* 87 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogModule = void 0;
const common_1 = __webpack_require__(33);
const saveLog_service_1 = __webpack_require__(35);
const cleanLog_service_1 = __webpack_require__(88);
let LogModule = class LogModule {
};
exports.LogModule = LogModule;
exports.LogModule = LogModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [],
        providers: [saveLog_service_1.SaveLogService, cleanLog_service_1.CleanLogService],
        exports: [saveLog_service_1.SaveLogService, cleanLog_service_1.CleanLogService],
    })
], LogModule);


/***/ }),
/* 88 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CleanLogService = void 0;
const common_1 = __webpack_require__(33);
const schedule_1 = __webpack_require__(89);
const path = __webpack_require__(31);
const fs_1 = __webpack_require__(44);
let CleanLogService = class CleanLogService {
    constructor() {
        this.LOG_ROOT = process.env.LOG_ROOT ?? '/data/log';
        this.RETAIN_DAYS = Number(process.env.LOG_RETAIN_DAYS ?? '10');
        this.runClean = false;
    }
    setLogger(logger, path, retainDays) {
        this.logger = logger;
        this.LOG_ROOT = path;
        this.RETAIN_DAYS = retainDays;
        this.runClean = true;
    }
    async handleCron() {
        if (!this.runClean)
            return;
        this.logger?.info(`[Log] 🧹 로그 정리 시작 (root=${this.LOG_ROOT}, retain=${this.RETAIN_DAYS}d)`);
        try {
            await this.cleanDir(this.LOG_ROOT);
            this.logger?.info('[Log] 🧹 로그 정리 완료');
        }
        catch (e) {
            this.logger?.error('[Log] 로그 정리 중 오류 발생', e);
        }
    }
    async cleanDir(dir) {
        let entries;
        try {
            entries = await fs_1.promises.readdir(dir, { withFileTypes: true });
        }
        catch {
            return;
        }
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                await this.cleanDir(fullPath);
                continue;
            }
            if (!entry.name.endsWith('.log') && !entry.name.endsWith('.log.gz')) {
                continue;
            }
            let stat;
            try {
                stat = await fs_1.promises.stat(fullPath);
            }
            catch {
                continue;
            }
            if (this.isOlderThan(stat.mtime, this.RETAIN_DAYS)) {
                this.logger?.info(`[Log] 🗑 delete: ${fullPath}`);
                try {
                    await fs_1.promises.unlink(fullPath);
                }
                catch (e) {
                    console.warn(`삭제 실패: ${fullPath} (${e.message})`);
                }
            }
        }
    }
    isOlderThan(mtime, days) {
        const now = Date.now();
        const diffMs = now - mtime.getTime();
        const diffDays = diffMs / (1000 * 60 * 60 * 24);
        return diffDays > days;
    }
};
exports.CleanLogService = CleanLogService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_HOUR),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CleanLogService.prototype, "handleCron", null);
exports.CleanLogService = CleanLogService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CleanLogService);


/***/ }),
/* 89 */
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),
/* 90 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 91 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapMongoAdapter = void 0;
const common_1 = __webpack_require__(33);
const config_1 = __webpack_require__(2);
const mongoose_1 = __webpack_require__(90);
const mongoose_2 = __webpack_require__(92);
const map_mongo_entity_1 = __webpack_require__(93);
const saveLog_service_1 = __webpack_require__(35);
const util_1 = __webpack_require__(38);
const error_to_json_1 = __webpack_require__(30);
const constant_1 = __webpack_require__(51);
const rpc_code_exception_1 = __webpack_require__(50);
let MapMongoAdapter = class MapMongoAdapter {
    constructor(Repository, saveLogService, configService) {
        this.Repository = Repository;
        this.saveLogService = saveLogService;
        this.configService = configService;
        this.logger = this.saveLogService.get('map');
        this.setIndex(this.configService);
    }
    async setIndex(configService) {
        try {
            await this.Repository.collection.dropIndex('createdAt_1');
        }
        catch (error) {
            this.logger?.warn(`[Map] DB dropIndex: ${util_1.ParseUtil.errorToJson(error)}`);
        }
        try {
            if (configService.get('DB_TTL_ENABLE') === 'true') {
                const TTL_DAYS = Number(configService.get('DB_TTL_DAYS') ?? '100');
                this.Repository.collection.createIndex({ createdAt: 1 }, { expireAfterSeconds: TTL_DAYS * 24 * 60 * 60 });
                this.logger?.info(`[Map] setIndex EnabledTTL_DAYS: ${TTL_DAYS}`);
            }
        }
        catch (error) {
            this.logger?.error(`[Map] DB createIndex: ${util_1.ParseUtil.errorToJson(error)}`);
        }
    }
    async getNodebyId(id) {
        try {
            return await this.Repository.findById(id);
        }
        catch (error) {
            this.logger?.error(`[Map] DB getNodebyId : ${id} => ${(0, error_to_json_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 가져올 수 없습니다.', constant_1.GrpcCode.DBError);
        }
    }
    async save(model) {
        try {
            const result = await this.Repository.create(model);
            return {
                ...result,
                id: result._id.toString(),
            };
        }
        catch (error) {
            this.logger?.error(`[Map] DB save : ${JSON.stringify(model)} => ${(0, error_to_json_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 저장할 수 없습니다.', constant_1.GrpcCode.DBError);
        }
    }
    async update(model) {
        try {
            const result = await this.Repository.findByIdAndUpdate(model.id, model);
            return {
                ...result,
                id: result._id.toString(),
            };
        }
        catch (error) {
            this.logger?.error(`[Map] DB update : ${JSON.stringify(model)} => ${(0, error_to_json_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 업데이트할 수 없습니다.', constant_1.GrpcCode.DBError);
        }
    }
};
exports.MapMongoAdapter = MapMongoAdapter;
exports.MapMongoAdapter = MapMongoAdapter = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(map_mongo_entity_1.Map.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object])
], MapMongoAdapter);


/***/ }),
/* 92 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 93 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapSchema = exports.Map = void 0;
const mongoose_1 = __webpack_require__(90);
let Map = class Map {
};
exports.Map = Map;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Map.prototype, "command", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Map.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", String)
], Map.prototype, "mapName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", String)
], Map.prototype, "newMapName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", String)
], Map.prototype, "newPath", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", String)
], Map.prototype, "path", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", String)
], Map.prototype, "fileName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", Boolean)
], Map.prototype, "isForce", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", String)
], Map.prototype, "message", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Map.prototype, "createAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Map.prototype, "updateAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", Number)
], Map.prototype, "version", void 0);
exports.Map = Map = __decorate([
    (0, mongoose_1.Schema)()
], Map);
exports.MapSchema = mongoose_1.SchemaFactory.createForClass(Map);
exports.MapSchema.set('timestamps', true);


/***/ }),
/* 94 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingModule = void 0;
const common_1 = __webpack_require__(33);
const setting_file_service_1 = __webpack_require__(95);
const config_1 = __webpack_require__(2);
const microservices_1 = __webpack_require__(3);
const setting_grpc_controller_1 = __webpack_require__(96);
const constant_1 = __webpack_require__(67);
const setting_postgres_adapter_1 = __webpack_require__(97);
const setting_socketio_adpater_1 = __webpack_require__(98);
const setting_slamnav_service_1 = __webpack_require__(99);
const log_module_1 = __webpack_require__(87);
let SettingModule = class SettingModule {
};
exports.SettingModule = SettingModule;
exports.SettingModule = SettingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            log_module_1.LogModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            microservices_1.ClientsModule.registerAsync([
                {
                    name: constant_1.MQTT_BROKER,
                    inject: [config_1.ConfigService],
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.MQTT,
                        options: {
                            url: configService.get('MQTT_URL'),
                        },
                    }),
                },
            ]),
        ],
        controllers: [setting_grpc_controller_1.SettingGrpcInputController],
        providers: [
            setting_file_service_1.SettingFileService,
            setting_slamnav_service_1.SettingSlamnavService,
            {
                provide: 'databaseOutputPort',
                useClass: setting_postgres_adapter_1.SettingPostgresAdapter,
            },
            {
                provide: 'SlamnavOutputPort',
                useClass: setting_socketio_adpater_1.SettingSocketioAdapter,
            },
        ],
    })
], SettingModule);


/***/ }),
/* 95 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingFileService = void 0;
const Path = __webpack_require__(31);
const fs = __webpack_require__(44);
const common_1 = __webpack_require__(4);
const microservices_1 = __webpack_require__(3);
const file_util_1 = __webpack_require__(43);
const rpc_code_exception_1 = __webpack_require__(50);
const constant_1 = __webpack_require__(51);
const saveLog_service_1 = __webpack_require__(35);
const common_2 = __webpack_require__(33);
let SettingFileService = class SettingFileService {
    constructor(saveLogService) {
        this.saveLogService = saveLogService;
        this.logger = this.saveLogService.get('host');
    }
    getDiretoryPath(type) {
        return Path.join(process.env.HOME, 'slamnav2', 'config', type);
    }
    getSettingPath(type) {
        return Path.join(process.env.HOME, 'slamnav2', 'config', type, 'config.json');
    }
    getPresetPath(type, name) {
        if (name.split('.').length === 1) {
            name = name + '.json';
        }
        if (!name.startsWith('preset_')) {
            name = 'preset_' + name;
        }
        return Path.join(process.env.HOME, 'slamnav2', 'config', type, name);
    }
    async getSetting(request) {
        try {
            if (request.type === undefined || request.type === '') {
                this.logger?.error(`[SETTING] getSetting : type 값이 없습니다.`);
                throw new rpc_code_exception_1.RpcCodeException('type 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            const path = this.getSettingPath(request.type);
            console.log(path);
            if (!fs.existsSync(path)) {
                this.logger?.error(`[SETTING] getSetting : ${request.type}에 해당하는 세팅파일이 없습니다.`);
                throw new rpc_code_exception_1.RpcCodeException(`${request.type}에 해당하는 세팅파일이 없습니다.`, constant_1.GrpcCode.NotFound);
            }
            const data = await file_util_1.FileUtil.readJson(path);
            const parsedData = data;
            return { ...request, data: JSON.stringify(parsedData) };
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[SETTING] getSetting : ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('세팅을 불러오던 중 에러가 발생했습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async saveSetting(request) {
        try {
            this.logger?.info(`[Setting] saveSetting : ${JSON.stringify(request)}`);
            if (request.type === undefined || request.type === '') {
                this.logger?.error(`[SETTING] saveSetting : type 값이 없습니다.`);
                throw new rpc_code_exception_1.RpcCodeException('type 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            if (request.data === undefined || request.data === '') {
                this.logger?.error(`[SETTING] saveSetting : data 값이 없습니다.`);
                throw new rpc_code_exception_1.RpcCodeException('data 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            const jsonData = JSON.parse(request.data);
            if (typeof jsonData !== 'object' || jsonData === null) {
                this.logger?.error(`[SETTING] saveSetting : ${request.data}는 JSON 형식이 아닙니다.`);
                throw new rpc_code_exception_1.RpcCodeException('data 값을 파싱할 수 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            const newData = await this.convertNumbersToStrings(jsonData);
            const path = this.getSettingPath(request.type);
            if (!fs.existsSync(Path.dirname(path))) {
                fs.mkdirSync(Path.dirname(path), { recursive: true });
            }
            const orinData = await file_util_1.FileUtil.readJson(path);
            const mergeData = await this.deepMerge(orinData, newData);
            const finalData = mergeData;
            await file_util_1.FileUtil.saveJson(path, finalData);
            return {
                type: request.type,
                data: JSON.stringify(mergeData),
            };
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[SETTING] saveSetting : ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('세팅을 저장하던 중 에러가 발생했습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async getPreset(request) {
        this.logger?.info(`[Setting] getPreset : ${JSON.stringify(request)}`);
        try {
            if (request.type === undefined || request.type === '') {
                this.logger?.error(`[SETTING] getPreset : type 값이 없습니다.`);
                throw new rpc_code_exception_1.RpcCodeException('type 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            if (request.preset === undefined || request.preset === '') {
                this.logger?.error(`[SETTING] getPreset : preset 값이 없습니다.`);
                throw new rpc_code_exception_1.RpcCodeException('preset 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            const path = this.getPresetPath(request.type, request.preset);
            if (!fs.existsSync(path)) {
                this.logger?.error(`[SETTING] getPreset : ${path} is not exists`);
                throw new rpc_code_exception_1.RpcCodeException(`${request.type}/${request.preset}에 해당하는 세팅파일이 없습니다.`, constant_1.GrpcCode.NotFound);
            }
            const data = await file_util_1.FileUtil.readJson(path);
            return { ...request, data: JSON.stringify(data) };
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[SETTING] getPreset : ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('프리셋을 읽던 중 에러가 발생했습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async deletePreset(request) {
        try {
            this.logger?.info(`[Setting] deletePreset : ${JSON.stringify(request)}`);
            if (request.type === undefined || request.type === '') {
                this.logger?.error(`[SETTING] deletePreset : type 값이 없습니다.`);
                throw new rpc_code_exception_1.RpcCodeException('type 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            if (request.preset === undefined || request.preset === '') {
                this.logger?.error(`[SETTING] deletePreset : preset 값이 없습니다.`);
                throw new rpc_code_exception_1.RpcCodeException('preset 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            const path = this.getPresetPath(request.type, request.preset);
            if (!fs.existsSync(path)) {
                this.logger?.error(`[SETTING] getPreset : ${path} is not exists`);
                throw new rpc_code_exception_1.RpcCodeException(`${request.type}/${request.preset}에 해당하는 세팅파일이 없습니다.`, constant_1.GrpcCode.NotFound);
            }
            await file_util_1.FileUtil.deleteFile(path);
            return request;
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[SETTING] getPreset : ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('프리셋을 읽던 중 에러가 발생했습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async createPreset(request) {
        try {
            this.logger?.info(`[Setting] createPreset : ${JSON.stringify(request)}`);
            if (request.type === undefined || request.type === '') {
                this.logger?.error(`[SETTING] createPreset : type 값이 없습니다.`);
                throw new rpc_code_exception_1.RpcCodeException('type 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            if (request.preset === undefined || request.preset === '') {
                this.logger?.error(`[SETTING] createPreset : preset 값이 없습니다.`);
                throw new rpc_code_exception_1.RpcCodeException('preset 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            if (isNaN(parseInt(request.preset))) {
                this.logger?.error(`[SETTING] createPreset : preset 값이 숫자가 아닙니다.`);
                throw new rpc_code_exception_1.RpcCodeException('preset 값이 숫자가 아닙니다.', constant_1.GrpcCode.InvalidArgument);
            }
            const path = this.getPresetPath(request.type, request.preset);
            if (fs.existsSync(path)) {
                this.logger?.error(`[SETTING] createPreset : ${path} 파일이 이미 존재합니다.`);
                throw new rpc_code_exception_1.RpcCodeException(`${request.type}/${request.preset}에 해당하는 세팅파일이 이미 존재합니다.`, constant_1.GrpcCode.AlreadyExists);
            }
            const tempData = {
                LIMIT_V: '1.0',
                LIMIT_W: '45.0',
                LIMIT_V_ACC: '0.3',
                LIMIT_V_DCC: '0.1',
                LIMIT_W_ACC: '180.0',
                LIMIT_PIVOT_W: '45.0',
                ST_V: '0.05',
                ED_V: '0.05',
                DRIVE_T: '0.0',
                DRIVE_H: '4.0',
                DRIVE_A: '0.8',
                DRIVE_B: '0.05',
                DRIVE_L: '0.3',
                DRIVE_K: '0.8',
                DRIVE_EPS: '0.3',
            };
            await file_util_1.FileUtil.saveJson(path, JSON.stringify(tempData));
            return { ...request, data: JSON.stringify(tempData) };
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[SETTING] getPreset : ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('프리셋을 읽던 중 에러가 발생했습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async savePreset(request) {
        try {
            this.logger?.info(`[Setting] savePreset : ${JSON.stringify(request)}`);
            if (request.type === undefined || request.type === '') {
                this.logger?.error(`[SETTING] savePreset : type 값이 없습니다.`);
                throw new rpc_code_exception_1.RpcCodeException('type 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            if (request.preset === undefined || request.preset === '') {
                this.logger?.error(`[SETTING] savePreset : preset 값이 없습니다.`);
                throw new rpc_code_exception_1.RpcCodeException('preset 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            if (request.data === undefined || request.data === '') {
                this.logger?.error(`[SETTING] savePreset : data 값이 없습니다.`);
                throw new rpc_code_exception_1.RpcCodeException('data 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            const jsonData = JSON.parse(request.data);
            if (typeof jsonData !== 'object' || jsonData === null) {
                this.logger?.error(`[SETTING] savePreset : ${request.data}는 JSON 형식이 아닙니다.`);
                throw new rpc_code_exception_1.RpcCodeException('data 값을 파싱할 수 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            const newData = await this.convertNumbersToStrings(jsonData);
            const path = this.getSettingPath(request.type);
            fs.mkdirSync(Path.dirname(path));
            const orinData = await this.transformSettingToJson(await file_util_1.FileUtil.readJson(path));
            const mergeData = await this.deepMerge(orinData, newData);
            const finalData = mergeData;
            await file_util_1.FileUtil.saveJson(path, finalData);
            return { ...request, data: JSON.stringify(mergeData) };
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[SETTING] savePreset : ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('프리셋을 저장하던 중 에러가 발생했습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async getPresetList(request) {
        try {
            if (request.type === undefined || request.type === '') {
                this.logger?.error(`[SETTING] getPresetList : type 값이 없습니다.`);
                throw new rpc_code_exception_1.RpcCodeException('type 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            const path = this.getDiretoryPath(request.type);
            if (!fs.existsSync(path)) {
                this.logger?.error(`[SETTING] getPresetList : ${path} 경로가 없습니다.`);
                throw new rpc_code_exception_1.RpcCodeException(`${request.type}에 해당하는 세팅파일이 없습니다.`, constant_1.GrpcCode.InvalidArgument);
            }
            const files = await fs.promises.readdir(path, { withFileTypes: true });
            console.debug(files);
            const list = [];
            for (const file of files) {
                if (!file.isDirectory()) {
                    if (file.name.startsWith('preset_') && file.name.split('.').length === 2) {
                        const name = parseInt(file.name.split('.')[0].split('_')[1]);
                        const newname = 'preset_' + name + '.json';
                        if (file.name == newname) {
                            list.push(name);
                        }
                    }
                }
            }
            return { ...request, list: list };
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Setting] getPresetList : ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('프리셋을 읽던 중 에러가 발생했습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async convertNumbersToStrings(obj) {
        const entries = await Promise.all(Object.entries(obj).map(async ([key, value]) => [
            key,
            typeof value === 'number'
                ? value.toString()
                : typeof value === 'object' && value !== null
                    ? await this.convertNumbersToStrings(value)
                    : value,
        ]));
        return Object.fromEntries(entries);
    }
    async transformSettingToJson(data) {
        if (data != undefined) {
            const new_default = {
                ...data.default,
                LIDAR_TF_B_X: data.default.LIDAR_TF_B ? data.default.LIDAR_TF_B.split(',')[0] : 0,
                LIDAR_TF_B_Y: data.default.LIDAR_TF_B ? data.default.LIDAR_TF_B.split(',')[1] : 0,
                LIDAR_TF_B_Z: data.default.LIDAR_TF_B ? data.default.LIDAR_TF_B.split(',')[2] : 0,
                LIDAR_TF_B_RX: data.default.LIDAR_TF_B ? data.default.LIDAR_TF_B.split(',')[3] : 0,
                LIDAR_TF_B_RY: data.default.LIDAR_TF_B ? data.default.LIDAR_TF_B.split(',')[4] : 0,
                LIDAR_TF_B_RZ: data.default.LIDAR_TF_B ? data.default.LIDAR_TF_B.split(',')[5] : 0,
                LIDAR_TF_F_X: data.default.LIDAR_TF_F ? data.default.LIDAR_TF_F.split(',')[0] : 0,
                LIDAR_TF_F_Y: data.default.LIDAR_TF_F ? data.default.LIDAR_TF_F.split(',')[1] : 0,
                LIDAR_TF_F_Z: data.default.LIDAR_TF_F ? data.default.LIDAR_TF_F.split(',')[2] : 0,
                LIDAR_TF_F_RX: data.default.LIDAR_TF_F ? data.default.LIDAR_TF_F.split(',')[3] : 0,
                LIDAR_TF_F_RY: data.default.LIDAR_TF_F ? data.default.LIDAR_TF_F.split(',')[4] : 0,
                LIDAR_TF_F_RZ: data.default.LIDAR_TF_F ? data.default.LIDAR_TF_F.split(',')[5] : 0,
            };
            const new_cam = {
                ...data.cam,
                CAM_TF_0_X: data.cam.CAM_TF_0 ? data.cam.CAM_TF_0.split(',')[0] : 0,
                CAM_TF_0_Y: data.cam.CAM_TF_0 ? data.cam.CAM_TF_0.split(',')[1] : 0,
                CAM_TF_0_Z: data.cam.CAM_TF_0 ? data.cam.CAM_TF_0.split(',')[2] : 0,
                CAM_TF_0_RX: data.cam.CAM_TF_0 ? data.cam.CAM_TF_0.split(',')[3] : 0,
                CAM_TF_0_RY: data.cam.CAM_TF_0 ? data.cam.CAM_TF_0.split(',')[4] : 0,
                CAM_TF_0_RZ: data.cam.CAM_TF_0 ? data.cam.CAM_TF_0.split(',')[5] : 0,
                CAM_TF_1_X: data.cam.CAM_TF_1 ? data.cam.CAM_TF_1.split(',')[0] : 0,
                CAM_TF_1_Y: data.cam.CAM_TF_1 ? data.cam.CAM_TF_1.split(',')[1] : 0,
                CAM_TF_1_Z: data.cam.CAM_TF_1 ? data.cam.CAM_TF_1.split(',')[2] : 0,
                CAM_TF_1_RX: data.cam.CAM_TF_1 ? data.cam.CAM_TF_1.split(',')[3] : 0,
                CAM_TF_1_RY: data.cam.CAM_TF_1 ? data.cam.CAM_TF_1.split(',')[4] : 0,
                CAM_TF_1_RZ: data.cam.CAM_TF_1 ? data.cam.CAM_TF_1.split(',')[5] : 0,
            };
            const newdata = { ...data, default: new_default, cam: new_cam };
            console.log(newdata);
            return newdata;
        }
        else {
            return {};
        }
    }
    async transformSettingToFile(data) {
        if (data != undefined) {
            if (data.default) {
                const lidar_tf_b = (data.default.LIDAR_TF_B_X ? data.default.LIDAR_TF_B_X : '0') +
                    ',' +
                    (data.default.LIDAR_TF_B_Y ? data.default.LIDAR_TF_B_Y : '0') +
                    ',' +
                    (data.default.LIDAR_TF_B_Z ? data.default.LIDAR_TF_B_Z : '0') +
                    ',' +
                    (data.default.LIDAR_TF_B_RX ? data.default.LIDAR_TF_B_RX : '0') +
                    ',' +
                    (data.default.LIDAR_TF_B_RY ? data.default.LIDAR_TF_B_RY : '0') +
                    ',' +
                    (data.default.LIDAR_TF_B_RZ ? data.default.LIDAR_TF_B_RZ : '0');
                const lidar_tf_f = (data.default.LIDAR_TF_F_X ? data.default.LIDAR_TF_F_X : '0') +
                    ',' +
                    (data.default.LIDAR_TF_F_Y ? data.default.LIDAR_TF_F_Y : '0') +
                    ',' +
                    (data.default.LIDAR_TF_F_Z ? data.default.LIDAR_TF_F_Z : '0') +
                    ',' +
                    (data.default.LIDAR_TF_F_RX ? data.default.LIDAR_TF_F_RX : '0') +
                    ',' +
                    (data.default.LIDAR_TF_F_RY ? data.default.LIDAR_TF_F_RY : '0') +
                    ',' +
                    (data.default.LIDAR_TF_F_RZ ? data.default.LIDAR_TF_F_RZ : '0');
                const newdefault = {
                    ...data.default,
                    LIDAR_TF_B: lidar_tf_b,
                    LIDAR_TF_F: lidar_tf_f,
                };
                data = await {
                    ...data,
                    default: {
                        ...data.default,
                        LIDAR_TF_B: lidar_tf_b,
                        LIDAR_TF_F: lidar_tf_f,
                    },
                };
            }
            if (data.cam) {
                const camera_tf_0 = (data.cam.CAM_TF_0_X ? data.cam.CAM_TF_0_X : '0') +
                    ',' +
                    (data.cam.CAM_TF_0_Y ? data.cam.CAM_TF_0_Y : '0') +
                    ',' +
                    (data.cam.CAM_TF_0_Z ? data.cam.CAM_TF_0_Z : '0') +
                    ',' +
                    (data.cam.CAM_TF_0_RX ? data.cam.CAM_TF_0_RX : '0') +
                    ',' +
                    (data.cam.CAM_TF_0_RY ? data.cam.CAM_TF_0_RY : '0') +
                    ',' +
                    (data.cam.CAM_TF_0_RZ ? data.cam.CAM_TF_0_RZ : '0');
                const camera_tf_1 = (data.cam.CAM_TF_1_X ? data.cam.CAM_TF_1_X : '0') +
                    ',' +
                    (data.cam.CAM_TF_1_Y ? data.cam.CAM_TF_1_Y : '0') +
                    ',' +
                    (data.cam.CAM_TF_1_Z ? data.cam.CAM_TF_1_Z : '0') +
                    ',' +
                    (data.cam.CAM_TF_1_RX ? data.cam.CAM_TF_1_RX : '0') +
                    ',' +
                    (data.cam.CAM_TF_1_RY ? data.cam.CAM_TF_1_RY : '0') +
                    ',' +
                    (data.cam.CAM_TF_1_RZ ? data.cam.CAM_TF_1_RZ : '0');
                data = {
                    ...data,
                    cam: { ...data.cam, CAM_TF_0: camera_tf_0, CAM_TF_1: camera_tf_1 },
                };
            }
            return data;
        }
        else {
            return {};
        }
    }
    async mergeArrayByKey(oldArray, newArray, key) {
        const mergedArray = [...oldArray];
        newArray.forEach((newItem) => {
            const index = mergedArray.findIndex((oldItem) => oldItem[key] === newItem[key]);
            if (index > -1) {
                mergedArray[index] = { ...mergedArray[index], ...newItem };
            }
            else {
                mergedArray.push(newItem);
            }
        });
        return mergedArray;
    }
    async deepMerge(oldData, newData) {
        const result = { ...oldData };
        for (const key in newData) {
            if (Array.isArray(newData[key])) {
                result[key] = this.mergeArrayByKey(oldData[key] || [], newData[key], 'number');
            }
            else if (typeof newData[key] === 'object' && !Array.isArray(newData[key])) {
                result[key] = await this.deepMerge(oldData[key] || {}, newData[key]);
            }
            else {
                result[key] = newData[key];
            }
        }
        return result;
    }
};
exports.SettingFileService = SettingFileService;
exports.SettingFileService = SettingFileService = __decorate([
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _a : Object])
], SettingFileService);


/***/ }),
/* 96 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingGrpcInputController = void 0;
const common_1 = __webpack_require__(4);
const common_2 = __webpack_require__(33);
const setting_file_service_1 = __webpack_require__(95);
let SettingGrpcInputController = class SettingGrpcInputController {
    constructor(settingService) {
        this.settingService = settingService;
    }
    getType(request, metadata) {
        throw new Error('Method not implemented.');
    }
    getSetting(request, metadata) {
        return this.settingService.getSetting(request);
    }
    saveSetting(request, metadata) {
        throw new Error('Method not implemented.');
    }
    saveSettingAll(request, metadata) {
        return this.settingService.saveSetting(request);
    }
    getPresetList(request, metadata) {
        return this.settingService.getPresetList(request);
    }
    createPreset(request, metadata) {
        return this.settingService.createPreset(request);
    }
    deletePreset(request, metadata) {
        return this.settingService.deletePreset(request);
    }
    getPreset(request, metadata) {
        return this.settingService.getPreset(request);
    }
    savePreset(request, metadata) {
        return this.settingService.savePreset(request);
    }
};
exports.SettingGrpcInputController = SettingGrpcInputController;
exports.SettingGrpcInputController = SettingGrpcInputController = __decorate([
    (0, common_2.Controller)(),
    common_1.SettingMicroservice.SettingGrpcServiceControllerMethods(),
    (0, common_2.UseInterceptors)(common_1.GrpcInterceptor),
    __metadata("design:paramtypes", [typeof (_a = typeof setting_file_service_1.SettingFileService !== "undefined" && setting_file_service_1.SettingFileService) === "function" ? _a : Object])
], SettingGrpcInputController);


/***/ }),
/* 97 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingPostgresAdapter = void 0;
class SettingPostgresAdapter {
    constructor(settingService) {
        this.settingService = settingService;
    }
}
exports.SettingPostgresAdapter = SettingPostgresAdapter;


/***/ }),
/* 98 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingSocketioAdapter = void 0;
class SettingSocketioAdapter {
    constructor(settingService) {
        this.settingService = settingService;
    }
}
exports.SettingSocketioAdapter = SettingSocketioAdapter;


/***/ }),
/* 99 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingSlamnavService = void 0;
class SettingSlamnavService {
}
exports.SettingSlamnavService = SettingSlamnavService;


/***/ }),
/* 100 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SoundModule = void 0;
const common_1 = __webpack_require__(33);
const config_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(101);
const pg_1 = __webpack_require__(85);
const sound_entity_1 = __webpack_require__(102);
const sound_grpc_controller_1 = __webpack_require__(104);
const sound_service_1 = __webpack_require__(105);
const sound_play_sound_adapter_1 = __webpack_require__(107);
const log_module_1 = __webpack_require__(87);
let SoundModule = class SoundModule {
};
exports.SoundModule = SoundModule;
exports.SoundModule = SoundModule = __decorate([
    (0, common_1.Module)({
        imports: [
            log_module_1.LogModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forFeature([sound_entity_1.Sound]),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: async (configService) => {
                    await ensureSoundDatabase();
                    return {
                        type: 'postgres',
                        url: configService.get('POSTGRES_URL') + '/sound',
                        autoLoadEntities: true,
                        synchronize: true,
                    };
                },
            }),
        ],
        controllers: [sound_grpc_controller_1.SoundGrpcController],
        providers: [
            sound_service_1.SoundService,
            {
                provide: 'SoundOutputPort',
                useClass: sound_play_sound_adapter_1.SoundPlaySoundAdapter,
            },
        ],
    })
], SoundModule);
async function ensureSoundDatabase() {
    const client = new pg_1.Client({
        host: process.env.POSTGRES_HOST || 'localhost',
        port: parseInt(process.env.POSTGRES_PORT || '7000'),
        user: process.env.POSTGRES_USER || 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'postgres',
        database: 'postgres',
    });
    try {
        await client.connect();
        const result = await client.query("SELECT 1 FROM pg_database WHERE datname = 'sound'");
        if (result.rows.length === 0) {
            await client.query('CREATE DATABASE sound');
            console.log('🎉 sound 데이터베이스 생성 완료');
        }
        else {
            console.log('✅ sound 데이터베이스 이미 존재');
        }
    }
    catch (error) {
        console.warn('⚠️ semlog DB 생성 실패:', error.message);
    }
    finally {
        await client.end();
    }
}


/***/ }),
/* 101 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 102 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sound = void 0;
const typeorm_1 = __webpack_require__(103);
let Sound = class Sound {
};
exports.Sound = Sound;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Sound.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Sound.prototype, "command", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Sound.prototype, "fileName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Sound.prototype, "result", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Sound.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Sound.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Sound.prototype, "updateAt", void 0);
__decorate([
    (0, typeorm_1.VersionColumn)(),
    __metadata("design:type", Number)
], Sound.prototype, "version", void 0);
exports.Sound = Sound = __decorate([
    (0, typeorm_1.Entity)()
], Sound);


/***/ }),
/* 103 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 104 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SoundGrpcController = void 0;
const common_1 = __webpack_require__(4);
const grpc_1 = __webpack_require__(5);
const common_2 = __webpack_require__(33);
const sound_service_1 = __webpack_require__(105);
let SoundGrpcController = class SoundGrpcController {
    constructor(soundService) {
        this.soundService = soundService;
    }
    getPlaying(request, metadata) {
        return this.soundService.getPlaying();
    }
    play(request, metadata) {
        return this.soundService.playSound(request);
    }
    stop(request, metadata) {
        return this.soundService.stopSound();
    }
    list(request, metadata) {
        return this.soundService.getSoundList();
    }
    delete(request, metadata) {
        return this.soundService.deleteSoundFile(request);
    }
};
exports.SoundGrpcController = SoundGrpcController;
exports.SoundGrpcController = SoundGrpcController = __decorate([
    (0, common_2.Controller)(),
    grpc_1.SoundMicroservice.SoundGrpcServiceControllerMethods(),
    (0, common_2.UseInterceptors)(common_1.GrpcInterceptor),
    __metadata("design:paramtypes", [typeof (_a = typeof sound_service_1.SoundService !== "undefined" && sound_service_1.SoundService) === "function" ? _a : Object])
], SoundGrpcController);


/***/ }),
/* 105 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SoundService = void 0;
const common_1 = __webpack_require__(4);
const common_2 = __webpack_require__(33);
const sound_output_port_1 = __webpack_require__(106);
const microservices_1 = __webpack_require__(3);
const fs_1 = __webpack_require__(44);
const path_1 = __webpack_require__(31);
const rpc_code_exception_1 = __webpack_require__(50);
const constant_1 = __webpack_require__(51);
const saveLog_service_1 = __webpack_require__(35);
let SoundService = class SoundService {
    constructor(soundOutput, saveLogService) {
        this.soundOutput = soundOutput;
        this.saveLogService = saveLogService;
        this.logger = this.saveLogService.get('host');
    }
    getPlaying() {
        return this.soundOutput.getPlaying();
    }
    async playSound(request) {
        try {
            if (process.env.HOST_OS !== 'linux') {
                throw new rpc_code_exception_1.RpcCodeException('Linux Host 환경에서만 작동합니다.', constant_1.GrpcCode.InvalidArgument);
            }
            if (request.fileName === undefined || request.fileName === '') {
                throw new rpc_code_exception_1.RpcCodeException('name 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            if (request.volume === undefined) {
                throw new rpc_code_exception_1.RpcCodeException('volume 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            if (request.volume < 0 || request.volume > 100) {
                throw new rpc_code_exception_1.RpcCodeException(`volume 값의 범위가 기준을 벗어납니다. (값 : ${request.volume}, 기준 : 0 ~ 100%)`, constant_1.GrpcCode.InvalidArgument);
            }
            if (request.repeatCount < 1) {
                request.repeatCount = 1;
            }
            const path = (0, path_1.join)(process.cwd(), 'public', 'sound', request.fileName);
            if (!(0, fs_1.existsSync)(path)) {
                this.logger?.error(`[Sound] playSound : 경로의 파일이 존재하지 않습니다. ${path}`);
                throw new rpc_code_exception_1.RpcCodeException(`경로의 파일이 존재하지 않습니다. ${request.fileName}`, constant_1.GrpcCode.NotFound);
            }
            return this.soundOutput.play(request);
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Sound] playSound : ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('파일을 플레이할 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async stopSound() {
        if (process.env.HOST_OS !== 'linux') {
            throw new rpc_code_exception_1.RpcCodeException('Linux Host 환경에서만 작동합니다.', constant_1.GrpcCode.InvalidArgument);
        }
        return this.soundOutput.stop();
    }
    async getSoundList() {
        try {
            if (process.env.HOST_OS !== 'linux') {
                throw new rpc_code_exception_1.RpcCodeException('Linux Host 환경에서만 작동합니다.', constant_1.GrpcCode.InvalidArgument);
            }
            const path = (0, path_1.join)(process.cwd(), 'public', 'sound');
            const files = (0, fs_1.readdirSync)(path, { withFileTypes: true });
            const list = [];
            files.map((file) => {
                if (file.isFile() && file.name.split('.')[1] === 'mp3') {
                    list.push(file.name);
                }
            });
            return { list };
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Sound] getSoundList : ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('리스트를 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async deleteSoundFile(request) {
        try {
            if (process.env.HOST_OS !== 'linux') {
                throw new rpc_code_exception_1.RpcCodeException('Linux Host 환경에서만 작동합니다.', constant_1.GrpcCode.InvalidArgument);
            }
            if (request.fileName === undefined || request.fileName === '') {
                throw new rpc_code_exception_1.RpcCodeException('name 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            const path = (0, path_1.join)(process.cwd(), 'public', 'sound', request.fileName);
            if (!(0, fs_1.existsSync)(path)) {
                throw new rpc_code_exception_1.RpcCodeException(`파일이 존재하지 않습니다. ( name : ${request.fileName} )`, constant_1.GrpcCode.NotFound);
            }
            (0, fs_1.unlinkSync)(path);
            return request;
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Sound] deleteSoundFile : ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('파일을 삭제할 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
};
exports.SoundService = SoundService;
exports.SoundService = SoundService = __decorate([
    __param(0, (0, common_2.Inject)('SoundOutputPort')),
    __metadata("design:paramtypes", [typeof (_a = typeof sound_output_port_1.SoundOutputPort !== "undefined" && sound_output_port_1.SoundOutputPort) === "function" ? _a : Object, typeof (_b = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _b : Object])
], SoundService);


/***/ }),
/* 106 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 107 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SoundPlaySoundAdapter = void 0;
const common_1 = __webpack_require__(4);
const fs_1 = __webpack_require__(44);
const PlaySound = __webpack_require__(108);
const microservices_1 = __webpack_require__(3);
const child_process_1 = __webpack_require__(109);
const path_1 = __webpack_require__(31);
const rpc_code_exception_1 = __webpack_require__(50);
const constant_1 = __webpack_require__(51);
const saveLog_service_1 = __webpack_require__(35);
const common_2 = __webpack_require__(33);
let SoundPlaySoundAdapter = class SoundPlaySoundAdapter {
    constructor(saveLogService) {
        this.saveLogService = saveLogService;
        this.player = PlaySound();
        this.repeatCount = 0;
        this.curPlaying = null;
        this.curPlayingInfo = null;
        this.logger = this.saveLogService.get('host');
    }
    getPlaying() {
        if (this.curPlayingInfo) {
            return this.curPlayingInfo;
        }
        return {
            fileName: '',
            volume: 0,
            repeatCount: 0,
            isWaitUntilDone: false,
        };
    }
    async play(request) {
        return new Promise(async (resolve, reject) => {
            try {
                const path = (0, path_1.join)(process.cwd(), 'public', 'sound', request.fileName);
                this.logger?.debug(`[Sound] Play: ${path}`);
                if (!(0, fs_1.existsSync)(path)) {
                    reject(new rpc_code_exception_1.RpcCodeException(`경로의 파일이 존재하지 않습니다. ${path}`, constant_1.GrpcCode.NotFound));
                }
                if (this.curPlaying) {
                    this.logger?.info(`[Sound] Play: Stop cur Playing`);
                    await this.stopPlaying();
                }
                this.curPlayingInfo = request;
                if (!request.isWaitUntilDone) {
                    this.logger?.info(`[Sound] Play: Play Start without Wait`);
                    resolve(request);
                }
                for (var i = 0; i < request.repeatCount; i++) {
                    await this.playSync(path, request.volume);
                }
                this.logger?.info(`[Sound] Play: Play Wait Done`);
                this.stopPlaying();
                resolve(request);
            }
            catch (error) {
                if (error instanceof microservices_1.RpcException)
                    reject(error);
                this.logger?.error(`[Sound] Play: ${(0, common_1.errorToJson)(error)}`);
                reject(new rpc_code_exception_1.RpcCodeException('파일을 플레이할 수 없습니다.', constant_1.GrpcCode.InternalError));
            }
        });
    }
    async stop() {
        try {
            this.logger?.info(`[Sound] Stop`);
            if (!this.curPlaying) {
                this.logger?.warn(`[Sound] Stop: curPlaying is null`);
                throw new rpc_code_exception_1.RpcCodeException('실행중인 플레이가 없습니다.', constant_1.GrpcCode.NotFound);
            }
            await this.stopPlaying();
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Sound] Stop: ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('플레이를 종료할 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async playSync(path, volume) {
        return new Promise((resolve, reject) => {
            this.logger?.debug(`[Sound] playSync: ${path}, ${volume}`);
            this.curPlaying = this.player.play(path, { mplayer: ['-ao', 'pulse', '-volume', volume] }, (err) => {
                if (err) {
                    if (typeof err === 'number' && err === 1) {
                        this.logger?.error(`[Sound] Play: Code 1`);
                        reject(new rpc_code_exception_1.RpcCodeException('플레이가 중지되었습니다.', constant_1.GrpcCode.InternalError));
                    }
                    else {
                        console.error(err);
                        this.logger?.error(`[Sound] Play: ${(0, common_1.errorToJson)(err)}`);
                        reject(new rpc_code_exception_1.RpcCodeException('파일을 플레이할 수 없습니다.', constant_1.GrpcCode.InternalError));
                    }
                }
                resolve();
            });
        });
    }
    async stopPlaying() {
        this.repeatCount = 0;
        try {
            (0, child_process_1.execSync)('pkill -x mplayer', { stdio: 'ignore' });
        }
        catch (error) {
            this.logger?.error(`[Sound] Stop: ${(0, common_1.errorToJson)(error)}`);
        }
        this.curPlaying = null;
        this.curPlayingInfo = null;
    }
};
exports.SoundPlaySoundAdapter = SoundPlaySoundAdapter;
exports.SoundPlaySoundAdapter = SoundPlaySoundAdapter = __decorate([
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _a : Object])
], SoundPlaySoundAdapter);


/***/ }),
/* 108 */
/***/ ((module) => {

module.exports = require("play-sound");

/***/ }),
/* 109 */
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),
/* 110 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateModule = void 0;
const common_1 = __webpack_require__(33);
const config_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(101);
const microservices_1 = __webpack_require__(3);
const pg_1 = __webpack_require__(85);
const update_command_entity_1 = __webpack_require__(111);
const update_grpc_controller_1 = __webpack_require__(112);
const update_service_1 = __webpack_require__(113);
const update_sh_adapter_1 = __webpack_require__(121);
const update_socketio_adapter_1 = __webpack_require__(122);
const constant_1 = __webpack_require__(67);
const update_pending_service_1 = __webpack_require__(123);
const update_database_adapter_1 = __webpack_require__(124);
const mongoose_1 = __webpack_require__(90);
const update_version_entity_1 = __webpack_require__(125);
const update_log_entity_1 = __webpack_require__(126);
const log_module_1 = __webpack_require__(87);
let UpdateModule = class UpdateModule {
};
exports.UpdateModule = UpdateModule;
exports.UpdateModule = UpdateModule = __decorate([
    (0, common_1.Module)({
        imports: [
            log_module_1.LogModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: async (configService) => {
                    await ensureHostDatabase();
                    return {
                        type: 'postgres',
                        url: configService.get('POSTGRES_URL') + '/host',
                        autoLoadEntities: true,
                        synchronize: true,
                        logging: configService.get('NODE_ENV') === 'development',
                    };
                },
            }),
            typeorm_1.TypeOrmModule.forFeature([update_version_entity_1.UpdateVersion]),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: update_command_entity_1.UpdateCommand.name,
                    schema: update_command_entity_1.UpdateCommandSchema,
                },
                {
                    name: update_log_entity_1.UpdateLog.name,
                    schema: update_log_entity_1.UpdateLogSchema,
                },
            ]),
            mongoose_1.MongooseModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    uri: configService.get('MONGO_URL'),
                }),
            }),
            microservices_1.ClientsModule.registerAsync([
                {
                    name: constant_1.MQTT_BROKER,
                    inject: [config_1.ConfigService],
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.MQTT,
                        options: {
                            url: configService.get('MQTT_URL'),
                        },
                    }),
                },
            ]),
        ],
        controllers: [update_grpc_controller_1.UpdateGrpcController],
        providers: [
            config_1.ConfigService,
            update_service_1.UpdateService,
            update_pending_service_1.UpdatePendingResponseService,
            {
                provide: 'updateDatabaseOutputPort',
                useClass: update_database_adapter_1.UpdateDatabaseAdapter,
            },
            {
                provide: 'updateShOutputPort',
                useClass: update_sh_adapter_1.UpdateShAdapter,
            },
            {
                provide: 'updateSlamnavOutputPort',
                useClass: update_socketio_adapter_1.UpdateSocketioAdapter,
            },
        ],
    })
], UpdateModule);
async function ensureHostDatabase() {
    const client = new pg_1.Client({
        host: process.env.POSTGRES_HOST || 'localhost',
        port: parseInt(process.env.POSTGRES_PORT || '7000'),
        user: process.env.POSTGRES_USER || 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'postgres',
        database: 'postgres',
    });
    try {
        await client.connect();
        const result = await client.query("SELECT 1 FROM pg_database WHERE datname = 'host'");
        if (result.rows.length === 0) {
            await client.query('CREATE DATABASE host');
            console.log('🎉 host 데이터베이스 생성 완료');
        }
        else {
            console.log('✅ host 데이터베이스 이미 존재');
        }
    }
    catch (error) {
        console.warn('⚠️ host DB 생성 실패:', error.message);
    }
    finally {
        await client.end();
    }
}


/***/ }),
/* 111 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCommandSchema = exports.UpdateCommand = void 0;
const mongoose_1 = __webpack_require__(90);
let UpdateCommand = class UpdateCommand {
};
exports.UpdateCommand = UpdateCommand;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], UpdateCommand.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], UpdateCommand.prototype, "command", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], UpdateCommand.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCommand.prototype, "software", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCommand.prototype, "branch", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCommand.prototype, "version", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", Boolean)
], UpdateCommand.prototype, "hotfix", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCommand.prototype, "token", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCommand.prototype, "message", void 0);
__decorate([
    (0, mongoose_1.Prop)({ array: true, nullable: true, required: false }),
    __metadata("design:type", Array)
], UpdateCommand.prototype, "appNames", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCommand.prototype, "fo", void 0);
exports.UpdateCommand = UpdateCommand = __decorate([
    (0, mongoose_1.Schema)()
], UpdateCommand);
exports.UpdateCommandSchema = mongoose_1.SchemaFactory.createForClass(UpdateCommand);
exports.UpdateCommandSchema.set('timestamps', true);


/***/ }),
/* 112 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateGrpcController = void 0;
const common_1 = __webpack_require__(4);
const common_2 = __webpack_require__(33);
const update_service_1 = __webpack_require__(113);
let UpdateGrpcController = class UpdateGrpcController {
    constructor(updateService) {
        this.updateService = updateService;
    }
    getCurrentVersion(request, metadata) {
        return this.updateService.getCurrentVersion(request);
    }
    testPing(request, metadata) {
        return this.updateService.testPing(request);
    }
    getNewVersion(request, metadata) {
        return this.updateService.getNewVersion(request);
    }
    getReleaseBranch(request, metadata) {
        return this.updateService.getReleaseAppsBranches(request);
    }
    getReleaseVersion(request, metadata) {
        return this.updateService.getReleaseAppsVersionList(request);
    }
    addWebUi(request, metadata) {
        throw new Error('Method not implemented.');
    }
    deleteWebUi(request, metadata) {
        throw new Error('Method not implemented.');
    }
    updateProgram(request, metadata) {
        return this.updateService.updateProgram(request);
    }
};
exports.UpdateGrpcController = UpdateGrpcController;
exports.UpdateGrpcController = UpdateGrpcController = __decorate([
    (0, common_2.Controller)(),
    common_1.UpdateMicroservice.UpdateGrpcServiceControllerMethods(),
    (0, common_2.UseInterceptors)(common_1.GrpcInterceptor),
    __metadata("design:paramtypes", [typeof (_a = typeof update_service_1.UpdateService !== "undefined" && update_service_1.UpdateService) === "function" ? _a : Object])
], UpdateGrpcController);


/***/ }),
/* 113 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateService = void 0;
const common_1 = __webpack_require__(4);
const common_2 = __webpack_require__(33);
const net = __webpack_require__(114);
const child_process_1 = __webpack_require__(109);
const common_3 = __webpack_require__(33);
const config_1 = __webpack_require__(2);
const microservices_1 = __webpack_require__(3);
const crypto = __webpack_require__(115);
const fs_1 = __webpack_require__(44);
const rpc_code_exception_1 = __webpack_require__(50);
const constant_1 = __webpack_require__(51);
const os_1 = __webpack_require__(116);
const path_1 = __webpack_require__(31);
const update_domain_1 = __webpack_require__(117);
const update_slamnav_output_port_1 = __webpack_require__(118);
const update_database_output_port_1 = __webpack_require__(119);
const map_command_domain_1 = __webpack_require__(60);
const update_sh_output_port_1 = __webpack_require__(120);
const saveLog_service_1 = __webpack_require__(35);
let UpdateService = class UpdateService {
    constructor(configService, updateShOutputPort, updateSlamnavOutputPort, updateDatabaseOutputPort, saveLogService) {
        this.configService = configService;
        this.updateShOutputPort = updateShOutputPort;
        this.updateSlamnavOutputPort = updateSlamnavOutputPort;
        this.updateDatabaseOutputPort = updateDatabaseOutputPort;
        this.saveLogService = saveLogService;
        this.logger = this.saveLogService.get('update');
        if (!this.configService) {
            throw new Error('ConfigService가 주입되지 않았습니다.');
        }
    }
    onModuleInit() {
        console.log(this.configService.get('RELEASE_REPO_URL'));
    }
    async checkRepositoryAccess() {
        try {
            console.log(this.configService.get('RELEASE_REPO_URL'));
            this.logger?.debug(`[UPDATE] checkRepositoryAccess URL : ${this.configService.get('RELEASE_REPO_URL')}`);
            const response = await fetch(this.configService.get('RELEASE_REPO_URL'));
            if (!response.ok) {
                throw new rpc_code_exception_1.RpcCodeException('외부망에 접근할 수 없습니다.', constant_1.GrpcCode.FailedPrecondition);
            }
            return response.ok;
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[UPDATE] checkRepositoryAccess : ${(0, common_1.errorToJson)(error)}}`);
            throw new rpc_code_exception_1.RpcCodeException('외부망에 접근할 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async testPing(request) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!net.isIP(request.target)) {
                    reject(new rpc_code_exception_1.RpcCodeException('올바르지 않은 ip 형식입니다.', common_3.HttpStatus.BAD_REQUEST));
                }
                const stdout = (0, child_process_1.execSync)(`ping -c 1 ${request.target}`);
                resolve({
                    target: request.target,
                    message: '요청에 성공했습니다.',
                    stdout: stdout.toString(),
                });
            }
            catch (error) {
                if (error instanceof microservices_1.RpcException)
                    reject(error);
                this.logger?.error(`[UPDATE] pingSendToTarget : ${error}`);
                reject(new rpc_code_exception_1.RpcCodeException('외부망에 접근할 수 없습니다.', constant_1.GrpcCode.InternalError));
            }
        });
    }
    async getNewVersion(request) {
        let model;
        try {
            this.logger?.info(`[UPDATE] getNewVersion : ${JSON.stringify(request)}`);
            model = new update_domain_1.UpdateModel({
                ...request,
                command: update_domain_1.UpdateCommand.GetNewVersion,
            });
            const updateCommand = await this.updateDatabaseOutputPort.save(model);
            model.assignId(updateCommand._id);
            model.checkVariables();
            await this.checkRepositoryAccess();
            const newVersionUrl = `${this.configService.get('RELEASE_REPO_RAW_URL')}/${model.branch}/${model.software}/version.json`;
            this.logger?.debug(`[UPDATE] getNewVersion URL : ${newVersionUrl}`);
            const newVersionData = await fetch(newVersionUrl);
            const newVersionDataJson = await newVersionData.json();
            model.version = newVersionDataJson.new_version;
            model.hotfix = newVersionDataJson.hotfix;
            model.statusChange(map_command_domain_1.CommandStatus.success);
            await this.updateDatabaseOutputPort.update(model);
            await this.updateDatabaseOutputPort.setNewVersion(model);
            this.logger?.debug(`[UPDATE] getNewVersion Data : ${JSON.stringify(newVersionDataJson)}`);
            return { ...model, software: model.software };
        }
        catch (error) {
            if (model) {
                model.message = error.error.details;
                model.statusChange(map_command_domain_1.CommandStatus.fail);
                await this.updateDatabaseOutputPort.update(model);
            }
            if (error instanceof rpc_code_exception_1.RpcCodeException)
                throw error;
            this.logger?.error(`[UPDATE] getNewVersion : ${error}`);
            throw new rpc_code_exception_1.RpcCodeException(`[${request.software}] ${request.branch} 브랜치의 version.json 파일을 찾을 수 없습니다.`, common_3.HttpStatus.NOT_FOUND);
        }
    }
    async getCurrentVersion(request) {
        let model;
        try {
            model = new update_domain_1.UpdateModel({
                command: update_domain_1.UpdateCommand.GetCurrentVersion,
                software: request.software,
            });
            const updateCommand = await this.updateDatabaseOutputPort.save(model);
            model.assignId(updateCommand._id);
            model.checkVariables();
            let resp;
            if (model.software === update_domain_1.SoftwareName.RRS) {
                resp = await this.getRrsCurrentVersion(model.software);
            }
            else if (model.software === update_domain_1.SoftwareName.SLAMNAV) {
                resp = await this.updateSlamnavOutputPort.getVersion(model);
            }
            else if (model.software === update_domain_1.SoftwareName.RRS_UI) {
                throw new rpc_code_exception_1.RpcCodeException(`미 구현된 기능입니다. ${request.software}`, constant_1.GrpcCode.Unimplemented);
            }
            else {
                throw new rpc_code_exception_1.RpcCodeException(`검색 불가능한 소프트웨어입니다. ${request.software}`, constant_1.GrpcCode.InvalidArgument);
            }
            model.version = resp.version;
            model.branch = resp.branch;
            model.statusChange(map_command_domain_1.CommandStatus.success);
            await this.updateDatabaseOutputPort.update(model);
            await this.updateDatabaseOutputPort.setCurrentVersion(model);
            return resp;
        }
        catch (error) {
            if (model) {
                model.message = error.error.details;
                model.statusChange(map_command_domain_1.CommandStatus.fail);
                await this.updateDatabaseOutputPort.update(model);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[UPDATE] getCurrentVersion : ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('버전을 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async getRrsCurrentVersion(software) {
        try {
            const versionPath = (0, path_1.join)((0, os_1.homedir)(), software, 'version.json');
            if (!(0, fs_1.existsSync)(versionPath)) {
                this.logger?.error(`[UPDATE] getRrsCurrentVersion : ${versionPath} 파일을 찾을 수 없습니다.`);
                throw new rpc_code_exception_1.RpcCodeException('버전을 가져올 수 없습니다.', constant_1.GrpcCode.NotFound);
            }
            const versionData = (0, fs_1.readFileSync)(versionPath, 'utf-8');
            const parsedVersionData = JSON.parse(versionData);
            const branch = await this.getRrsCurrentBranch();
            return { version: parsedVersionData.current, software: software, branch: branch };
        }
        catch (error) {
            if (error instanceof rpc_code_exception_1.RpcCodeException)
                throw error;
            this.logger?.error(`[UPDATE] getRrsCurrentVersion : ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('버전을 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async getRrsCurrentBranch() {
        try {
            const branchPath = (0, path_1.join)((0, os_1.homedir)(), 'rrs-env.conf');
            if (!(0, fs_1.existsSync)(branchPath)) {
                this.logger?.error(`[UPDATE] getRrsCurrentBranch : ${branchPath} 파일을 찾을 수 없습니다.`);
                throw new rpc_code_exception_1.RpcCodeException('브랜치를 가져올 수 없습니다.', constant_1.GrpcCode.NotFound);
            }
            const branchData = (0, fs_1.readFileSync)(branchPath, 'utf-8').split('=')[1];
            return branchData.trim().replace(/^"|"$/g, '');
        }
        catch (error) {
            if (error instanceof rpc_code_exception_1.RpcCodeException)
                throw error;
            this.logger?.error(`[UPDATE] getRrsCurrentBranch : ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('브랜치를 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async getReleaseAppsBranches(request) {
        let model;
        try {
            model = new update_domain_1.UpdateModel({
                command: update_domain_1.UpdateCommand.GetReleaseBranch,
                token: request.token,
                pageNo: request.pageNo,
                pageSize: request.pageSize,
            });
            const updateCommand = await this.updateDatabaseOutputPort.save(model);
            model.assignId(updateCommand._id);
            model.checkVariables();
            const url = `https://api.github.com/repos/rainbow-mobile/rainbow-release-apps/branches`;
            this.logger?.debug(`[UPDATE] getReleaseAppsBranches URL : ${url}`);
            await this.checkRepositoryAccess();
            const res = await fetch(url, {
                headers: {
                    Authorization: `Basic ${this.decryptToken(model.token)}`,
                },
            });
            const startIndex = (model.pageNo - 1) * model.pageSize;
            const endIndex = startIndex + model.pageSize;
            const resJson = await res.json();
            const list = resJson.slice(startIndex, endIndex);
            this.logger?.debug(`[UPDATE] getReleaseAppsBranches Data : ${JSON.stringify(list)}`);
            return { list: list, pageSize: model.pageSize, totalCount: resJson.length, totalPage: Math.ceil(resJson.length / model.pageSize) };
        }
        catch (error) {
            if (model) {
                model.message = error.error.details;
                model.statusChange(map_command_domain_1.CommandStatus.fail);
                await this.updateDatabaseOutputPort.update(model);
            }
            if (error instanceof rpc_code_exception_1.RpcCodeException)
                throw error;
            this.logger?.error(`[UPDATE] getReleaseAppsBranches : ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('브랜치를 조회할 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    decryptToken(base64Payload) {
        const keyStr = 'RAINBOW_GITHUB_API_TOKEN';
        const key = crypto.createHash('sha256').update(keyStr).digest();
        const payloadBuffer = Buffer.from(base64Payload, 'base64');
        const iv = payloadBuffer.slice(0, 16);
        const encrypted = payloadBuffer.slice(16);
        const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
        let decrypted = decipher.update(encrypted, undefined, 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
    async getReleaseAppsVersionList(request) {
        let model;
        try {
            model = new update_domain_1.UpdateModel({
                command: update_domain_1.UpdateCommand.GetReleaseVersion,
                token: request.token,
                branch: request.branch,
                software: request.software,
            });
            const updateCommand = await this.updateDatabaseOutputPort.save(model);
            model.assignId(updateCommand._id);
            model.checkVariables();
            const url = `https://api.github.com/repos/rainbow-mobile/rainbow-release-apps/contents/${model.software}?ref=${model.branch}`;
            this.logger?.debug(`[UPDATE] getReleaseAppsVersionList URL : ${url}`);
            await this.checkRepositoryAccess();
            const res = await fetch(url, {
                headers: {
                    Authorization: `Basic ${this.decryptToken(model.token)}`,
                },
                method: 'GET',
            });
            const resJson = await res.json();
            this.logger?.debug(`[UPDATE] getReleaseAppsVersionList Data Length : ${resJson.length}`);
            return { list: resJson };
        }
        catch (error) {
            if (model) {
                model.message = error.error.details;
                model.statusChange(map_command_domain_1.CommandStatus.fail);
                await this.updateDatabaseOutputPort.update(model);
            }
            if (error instanceof rpc_code_exception_1.RpcCodeException)
                throw error;
            this.logger?.error(`[UPDATE] getReleaseAppsVersionList : ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('버전을 조회할 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async updateProgram(request) {
        try {
            if (request.software === undefined || request.software === null || request.software === '') {
                throw new rpc_code_exception_1.RpcCodeException('소프트웨어 종류를 입력해주세요.', constant_1.GrpcCode.InvalidArgument);
            }
            if (request.branch === undefined || request.branch === null || request.branch === '') {
                request.branch = 'main';
            }
            const updateModel = new update_domain_1.UpdateModel({
                command: 'update',
                branch: request.branch,
                version: request.version,
            });
            if (request.software.toLowerCase().includes('rrs') || request.software.toLowerCase().includes('server')) {
                return this.updateShOutputPort.updateRRS(updateModel);
            }
            else if (request.software.toLowerCase().includes('slamnav')) {
            }
            else {
                throw new rpc_code_exception_1.RpcCodeException(`검색 불가능한 소프트웨어입니다. ${request.software}`, constant_1.GrpcCode.InvalidArgument);
            }
        }
        catch (error) {
            if (error instanceof rpc_code_exception_1.RpcCodeException)
                throw error;
            this.logger?.error(`[UPDATE] updateProgram : ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('프로그램을 업데이트할 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
};
exports.UpdateService = UpdateService;
exports.UpdateService = UpdateService = __decorate([
    (0, common_2.Injectable)(),
    __param(1, (0, common_2.Inject)('updateShOutputPort')),
    __param(2, (0, common_2.Inject)('updateSlamnavOutputPort')),
    __param(3, (0, common_2.Inject)('updateDatabaseOutputPort')),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof update_sh_output_port_1.UpdateShOutputPort !== "undefined" && update_sh_output_port_1.UpdateShOutputPort) === "function" ? _b : Object, typeof (_c = typeof update_slamnav_output_port_1.UpdateSlamnavOutputPort !== "undefined" && update_slamnav_output_port_1.UpdateSlamnavOutputPort) === "function" ? _c : Object, typeof (_d = typeof update_database_output_port_1.UpdateDatabaseOutputPort !== "undefined" && update_database_output_port_1.UpdateDatabaseOutputPort) === "function" ? _d : Object, typeof (_e = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _e : Object])
], UpdateService);


/***/ }),
/* 114 */
/***/ ((module) => {

module.exports = require("net");

/***/ }),
/* 115 */
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),
/* 116 */
/***/ ((module) => {

module.exports = require("os");

/***/ }),
/* 117 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateModel = exports.SoftwareName = exports.UpdateCommand = void 0;
const rpc_code_exception_1 = __webpack_require__(50);
const constant_1 = __webpack_require__(51);
var CommandStatus;
(function (CommandStatus) {
    CommandStatus["pending"] = "pending";
    CommandStatus["accepted"] = "accepted";
    CommandStatus["rejected"] = "rejected";
    CommandStatus["fail"] = "fail";
    CommandStatus["unknown"] = "unknown";
})(CommandStatus || (CommandStatus = {}));
var UpdateCommand;
(function (UpdateCommand) {
    UpdateCommand["Update"] = "update";
    UpdateCommand["GetCurrentVersion"] = "getCurrentVersion";
    UpdateCommand["GetNewVersion"] = "getNewVersion";
    UpdateCommand["GetReleaseVersion"] = "getReleaseVersion";
    UpdateCommand["GetReleaseBranch"] = "getReleaseBranch";
    UpdateCommand["AddWebUi"] = "addWebUi";
    UpdateCommand["DeleteWebUi"] = "deleteWebUi";
})(UpdateCommand || (exports.UpdateCommand = UpdateCommand = {}));
var SoftwareName;
(function (SoftwareName) {
    SoftwareName["RRS"] = "web_robot_server";
    SoftwareName["SLAMNAV"] = "slamnav2";
    SoftwareName["RRS_UI"] = "web-rainbow-ui";
})(SoftwareName || (exports.SoftwareName = SoftwareName = {}));
class UpdateModel {
    constructor(param) {
        this.command = param.command;
        this.status = CommandStatus.pending;
        this.software = param.software;
        this.branch = param.branch;
        this.version = param.version;
        this.token = param.token;
        this.appNames = param.appNames;
        this.fo = param.fo;
        this.pageNo = param.pageNo;
        this.pageSize = param.pageSize;
    }
    assignId(id) {
        this.id = id;
    }
    statusChange(status) {
        this.status = status;
    }
    checkVariables() {
        switch (this.command) {
            case UpdateCommand.Update: {
                this.software = this.checkSoftwareName(this.software);
                if (this.branch === undefined || this.branch === '') {
                    this.branch = 'main';
                }
                if (this.version === undefined || this.version === '') {
                    this.version = 'latest';
                }
                break;
            }
            case UpdateCommand.GetCurrentVersion: {
                this.software = this.checkSoftwareName(this.software);
                break;
            }
            case UpdateCommand.GetNewVersion: {
                this.software = this.checkSoftwareName(this.software);
                console.log('->', this.software);
                if (this.branch === undefined || this.branch === '') {
                    throw new rpc_code_exception_1.RpcCodeException('branch 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                break;
            }
            case UpdateCommand.GetReleaseVersion: {
                this.software = this.checkSoftwareName(this.software);
                if (this.token === undefined || this.token === '') {
                    throw new rpc_code_exception_1.RpcCodeException('token 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                break;
            }
            case UpdateCommand.GetReleaseBranch: {
                if (this.token === undefined || this.token === '') {
                    throw new rpc_code_exception_1.RpcCodeException('token 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                if (this.pageNo === undefined || this.pageNo === 0) {
                    this.pageNo = 1;
                }
                if (this.pageSize === undefined || this.pageSize === 0) {
                    this.pageSize = 10;
                }
                break;
            }
            case UpdateCommand.AddWebUi: {
                if (this.appNames === undefined || this.appNames.length === 0) {
                    throw new rpc_code_exception_1.RpcCodeException('appNames 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                this.appNames.map((appName) => {
                    if (appName === undefined || appName === '') {
                        throw new rpc_code_exception_1.RpcCodeException('appNames 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                    }
                });
                if (this.branch === undefined || this.branch === '') {
                    throw new rpc_code_exception_1.RpcCodeException('branch 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                if (this.fo === undefined || this.fo === '') {
                    throw new rpc_code_exception_1.RpcCodeException('fo 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                break;
            }
            case UpdateCommand.DeleteWebUi: {
                if (this.appNames === undefined || this.appNames.length === 0) {
                    throw new rpc_code_exception_1.RpcCodeException('appNames 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                this.appNames.map((appName) => {
                    if (appName === undefined || appName === '') {
                        throw new rpc_code_exception_1.RpcCodeException('appNames 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                    }
                });
                break;
            }
            default: {
                throw new rpc_code_exception_1.RpcCodeException(`알 수 없는 command(${this.command})입니다.`, constant_1.GrpcCode.InvalidArgument);
            }
        }
    }
    checkSoftwareName(software) {
        if (software === undefined || software === '') {
            throw new rpc_code_exception_1.RpcCodeException('software 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
        }
        if (software.toLowerCase().includes('rrs') || software.toLowerCase().includes('server')) {
            return SoftwareName.RRS;
        }
        if (software.toLowerCase().includes('ui')) {
            return SoftwareName.RRS_UI;
        }
        if (software.toLowerCase().includes('slam')) {
            return SoftwareName.SLAMNAV;
        }
        throw new rpc_code_exception_1.RpcCodeException(`알 수 없는 software(${software})입니다.`, constant_1.GrpcCode.InvalidArgument);
    }
}
exports.UpdateModel = UpdateModel;


/***/ }),
/* 118 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 119 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 120 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 121 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateShAdapter = void 0;
const rpc_code_exception_1 = __webpack_require__(50);
const grpc_code_constant_1 = __webpack_require__(52);
const config_1 = __webpack_require__(2);
const child_process_1 = __webpack_require__(109);
const fs_1 = __webpack_require__(44);
const os_1 = __webpack_require__(116);
const path_1 = __webpack_require__(31);
const saveLog_service_1 = __webpack_require__(35);
const common_1 = __webpack_require__(33);
let UpdateShAdapter = class UpdateShAdapter {
    constructor(configService, saveLogService) {
        this.configService = configService;
        this.saveLogService = saveLogService;
        this.deployKitDir = (0, path_1.join)((0, os_1.homedir)(), 'rainbow-deploy-kit');
        this.logger = this.saveLogService.get('update');
    }
    async updateRRS(request) {
        const updateScript = (0, path_1.join)(this.deployKitDir, 'rrs-server', 'rrs-update.sh');
        if (!(0, fs_1.existsSync)(updateScript)) {
            this.logger?.error(`[UPDATE] rrsUpdate: ${updateScript} 파일을 찾을 수 없습니다.`);
            throw new rpc_code_exception_1.RpcCodeException(`rrs-update.sh 파일을 찾을 수 없습니다.`, grpc_code_constant_1.GrpcCode.NotFound);
        }
        (0, child_process_1.execSync)('git pull', {
            cwd: this.deployKitDir,
            stdio: 'pipe',
        });
        (0, child_process_1.execSync)(`nohup bash ${updateScript} --mode=${request.branch || 'main'} --version=${request.version} > /tmp/rrs-update.log 2>&1 &`);
        return { software: 'rrs', branch: request.branch, version: request.version, result: 'true', message: '' };
    }
};
exports.UpdateShAdapter = UpdateShAdapter;
exports.UpdateShAdapter = UpdateShAdapter = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _b : Object])
], UpdateShAdapter);


/***/ }),
/* 122 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateSocketioAdapter = void 0;
const microservices_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const rpc_code_exception_1 = __webpack_require__(50);
const constant_1 = __webpack_require__(51);
const common_2 = __webpack_require__(33);
const constant_2 = __webpack_require__(67);
const update_pending_service_1 = __webpack_require__(123);
const saveLog_service_1 = __webpack_require__(35);
let UpdateSocketioAdapter = class UpdateSocketioAdapter {
    constructor(mqttService, pendingService, saveLogService) {
        this.mqttService = mqttService;
        this.pendingService = pendingService;
        this.saveLogService = saveLogService;
        this.logger = this.saveLogService.get('update');
    }
    async updateSLAMNAV(request) {
        try {
            this.logger?.debug(`[Update] updateSLAMNAV : ${JSON.stringify(request)}`);
            const response = this.waitForResponse(request.id, 5000);
            this.mqttService.emit('updateRequest', request);
            const resp = await response;
            this.logger?.debug(`[Update] updateSLAMNAV Response : ${JSON.stringify(resp)}`);
            return resp;
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[UPDATE] updateSLAMNAV : ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('SLAMNAV 업데이트 실패', constant_1.GrpcCode.InternalError);
        }
    }
    async getVersion(request) {
        try {
            this.logger?.debug(`[Update] getVersion : ${JSON.stringify(request)}`);
            const response = this.waitForResponse(request.id, 5000);
            this.mqttService.emit('swVersionInfo', request);
            const resp = await response;
            this.logger?.debug(`[Update] getVersion Response : ${JSON.stringify(resp)}`);
            return resp;
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[UPDATE] getVersion : ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('버전을 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async waitForResponse(id, timeoutMs) {
        return new Promise((resolve, reject) => {
            let timeout;
            if (timeoutMs) {
                timeout = setTimeout(() => {
                    this.pendingService.pendingResponses.delete(id);
                    this.logger?.error(`[Update] waitForResponse Timeout : ${id} , ${timeoutMs}`);
                    reject(new rpc_code_exception_1.RpcCodeException(`데이터 수신에 실패했습니다.`, constant_1.GrpcCode.DeadlineExceeded));
                }, timeoutMs);
            }
            this.pendingService.pendingResponses.set(id, {
                resolve: (value) => {
                    if (timeoutMs) {
                        clearTimeout(timeout);
                    }
                    resolve(value);
                },
                reject: (error) => {
                    if (timeoutMs) {
                        clearTimeout(timeout);
                    }
                    reject(error);
                },
                received: [],
            });
        });
    }
};
exports.UpdateSocketioAdapter = UpdateSocketioAdapter;
exports.UpdateSocketioAdapter = UpdateSocketioAdapter = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, common_2.Inject)(constant_2.MQTT_BROKER)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object, typeof (_b = typeof update_pending_service_1.UpdatePendingResponseService !== "undefined" && update_pending_service_1.UpdatePendingResponseService) === "function" ? _b : Object, typeof (_c = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _c : Object])
], UpdateSocketioAdapter);


/***/ }),
/* 123 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePendingResponseService = void 0;
const pending_util_1 = __webpack_require__(75);
const common_1 = __webpack_require__(33);
let UpdatePendingResponseService = class UpdatePendingResponseService extends pending_util_1.PendingResponseUtil {
};
exports.UpdatePendingResponseService = UpdatePendingResponseService;
exports.UpdatePendingResponseService = UpdatePendingResponseService = __decorate([
    (0, common_1.Injectable)()
], UpdatePendingResponseService);


/***/ }),
/* 124 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateDatabaseAdapter = void 0;
const mongoose_1 = __webpack_require__(90);
const mongoose_2 = __webpack_require__(92);
const typeorm_1 = __webpack_require__(101);
const parse_util_1 = __webpack_require__(53);
const typeorm_2 = __webpack_require__(103);
const util_1 = __webpack_require__(38);
const update_command_entity_1 = __webpack_require__(111);
const update_version_entity_1 = __webpack_require__(125);
const rpc_code_exception_1 = __webpack_require__(50);
const constant_1 = __webpack_require__(51);
const saveLog_service_1 = __webpack_require__(35);
const common_1 = __webpack_require__(33);
let UpdateDatabaseAdapter = class UpdateDatabaseAdapter {
    constructor(Repository, VersionRepository, saveLogService) {
        this.Repository = Repository;
        this.VersionRepository = VersionRepository;
        this.saveLogService = saveLogService;
        this.logger = this.saveLogService.get('update');
    }
    async getVersion(software, branch) {
        try {
            return await this.VersionRepository.findOne({ where: { software, branch } });
        }
        catch (error) {
            this.logger?.error(`[Move] DB getVersion: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async setCurrentVersion(model) {
        try {
            const version = await this.getVersion(model.software, model.branch);
            console.log('----------------->', version);
            if (!version) {
                console.log('-----------------> save ', model.branch);
                const created = await this.VersionRepository.save(this.VersionRepository.create({ software: model.software, branch: model.branch, currentVersion: model.version }));
                return created;
            }
            else {
                await this.VersionRepository.update(version.id, { currentVersion: model.version });
                return await this.VersionRepository.findOne({ where: { id: version.id } });
            }
        }
        catch (error) {
            this.logger?.error(`[Move] DB setCurrentVersion: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 저장할 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async setNewVersion(model) {
        try {
            const version = await this.getVersion(model.software, model.branch);
            if (!version) {
                const created = await this.VersionRepository.save(this.VersionRepository.create({ software: model.software, branch: model.branch, newVersion: model.version }));
                return created;
            }
            else {
                await this.VersionRepository.update(version.id, { newVersion: model.version });
                return await this.VersionRepository.findOne({ where: { id: version.id } });
            }
        }
        catch (error) {
            this.logger?.error(`[Move] DB setNewVersion: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 저장할 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async getNodebyId(id) {
        try {
            return await this.Repository.findById(id).lean();
        }
        catch (error) {
            this.logger?.error(`[Move] DB getNodebyId: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async save(model) {
        try {
            const _id = util_1.UrlUtil.generateUUID();
            return await this.Repository.create({ ...model, _id });
        }
        catch (error) {
            this.logger?.error(`[Move] DB save: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 저장할 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async update(model) {
        try {
            return await this.Repository.findByIdAndUpdate(model.id, model).lean();
        }
        catch (error) {
            this.logger?.error(`[Move] DB update: ${parse_util_1.ParseUtil.errorToJson(error)}`);
        }
    }
};
exports.UpdateDatabaseAdapter = UpdateDatabaseAdapter;
exports.UpdateDatabaseAdapter = UpdateDatabaseAdapter = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(update_command_entity_1.UpdateCommand.name)),
    __param(1, (0, typeorm_1.InjectRepository)(update_version_entity_1.UpdateVersion)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _c : Object])
], UpdateDatabaseAdapter);


/***/ }),
/* 125 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateVersion = void 0;
const typeorm_1 = __webpack_require__(103);
let UpdateVersion = class UpdateVersion {
};
exports.UpdateVersion = UpdateVersion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UpdateVersion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UpdateVersion.prototype, "software", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UpdateVersion.prototype, "branch", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UpdateVersion.prototype, "currentVersion", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UpdateVersion.prototype, "newVersion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UpdateVersion.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UpdateVersion.prototype, "updateAt", void 0);
exports.UpdateVersion = UpdateVersion = __decorate([
    (0, typeorm_1.Entity)()
], UpdateVersion);


/***/ }),
/* 126 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateLogSchema = exports.UpdateLog = void 0;
const mongoose_1 = __webpack_require__(90);
let UpdateLog = class UpdateLog {
};
exports.UpdateLog = UpdateLog;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], UpdateLog.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], UpdateLog.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], UpdateLog.prototype, "software", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], UpdateLog.prototype, "branch", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], UpdateLog.prototype, "version", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Boolean)
], UpdateLog.prototype, "hotfix", void 0);
exports.UpdateLog = UpdateLog = __decorate([
    (0, mongoose_1.Schema)()
], UpdateLog);
exports.UpdateLogSchema = mongoose_1.SchemaFactory.createForClass(UpdateLog);
exports.UpdateLogSchema.set('timestamps', true);


/***/ }),
/* 127 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NetworkModule = void 0;
const common_1 = __webpack_require__(33);
const network_grpc_controller_1 = __webpack_require__(128);
const network_service_1 = __webpack_require__(129);
const microservices_1 = __webpack_require__(3);
const config_1 = __webpack_require__(2);
const constant_1 = __webpack_require__(67);
const network_nmcli_adapter_1 = __webpack_require__(133);
const network_mongo_adapter_1 = __webpack_require__(135);
const network_mqtt_controller_1 = __webpack_require__(137);
const network_command_entity_1 = __webpack_require__(136);
const mongoose_1 = __webpack_require__(90);
const log_module_1 = __webpack_require__(87);
let NetworkModule = class NetworkModule {
};
exports.NetworkModule = NetworkModule;
exports.NetworkModule = NetworkModule = __decorate([
    (0, common_1.Module)({
        imports: [
            log_module_1.LogModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: network_command_entity_1.NetworkCommand.name,
                    schema: network_command_entity_1.NetworkCommandSchema,
                },
            ]),
            mongoose_1.MongooseModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    uri: configService.get('MONGO_URL'),
                }),
            }),
            microservices_1.ClientsModule.registerAsync([
                {
                    name: constant_1.MQTT_BROKER,
                    inject: [config_1.ConfigService],
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.MQTT,
                        options: {
                            url: configService.get('MQTT_URL'),
                        },
                    }),
                },
            ]),
        ],
        controllers: [network_grpc_controller_1.NetworkGrpcInputController, network_mqtt_controller_1.NetworkMqttController],
        providers: [
            network_service_1.NetworkService,
            {
                provide: 'NetworkOutputPort',
                useClass: network_nmcli_adapter_1.NetworkNmcliAdapter,
            },
            {
                provide: 'NetworkDatabaseOutputPort',
                useClass: network_mongo_adapter_1.NetworkMongoAdapter,
            },
        ],
    })
], NetworkModule);


/***/ }),
/* 128 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NetworkGrpcInputController = void 0;
const common_1 = __webpack_require__(4);
const common_2 = __webpack_require__(33);
const network_service_1 = __webpack_require__(129);
let NetworkGrpcInputController = class NetworkGrpcInputController {
    constructor(networkService) {
        this.networkService = networkService;
    }
    getEthernet(request, metadata) {
        return this.networkService.getEthernet();
    }
    getWifi(request, metadata) {
        return this.networkService.getWifi();
    }
    getDevice(request, metadata) {
        return this.networkService.getDevice(request.device);
    }
    getBluetooth(request, metadata) {
        return this.networkService.getBluetooth();
    }
    getNetwork(request, metadata) {
        return this.networkService.getNetwork();
    }
    setNetwork(request, metadata) {
        return this.networkService.setNetwork(request);
    }
    connectWifi(request, metadata) {
        return this.networkService.connectWifi(request);
    }
    getWifiList(request, metadata) {
        return this.networkService.getWifiList();
    }
    scanWifi(request, metadata) {
        return this.networkService.wifiScan();
    }
};
exports.NetworkGrpcInputController = NetworkGrpcInputController;
exports.NetworkGrpcInputController = NetworkGrpcInputController = __decorate([
    (0, common_2.Controller)(),
    common_1.NetworkMicroservice.NetworkGrpcServiceControllerMethods(),
    (0, common_2.UseInterceptors)(common_1.GrpcInterceptor),
    __metadata("design:paramtypes", [typeof (_a = typeof network_service_1.NetworkService !== "undefined" && network_service_1.NetworkService) === "function" ? _a : Object])
], NetworkGrpcInputController);


/***/ }),
/* 129 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NetworkService = void 0;
const parse_util_1 = __webpack_require__(53);
const common_1 = __webpack_require__(33);
const microservices_1 = __webpack_require__(3);
const constant_1 = __webpack_require__(67);
const network_output_port_1 = __webpack_require__(130);
const network_database_output_port_1 = __webpack_require__(131);
const network_domain_1 = __webpack_require__(132);
const rpc_code_exception_1 = __webpack_require__(50);
const constant_2 = __webpack_require__(51);
const saveLog_service_1 = __webpack_require__(35);
let NetworkService = class NetworkService {
    constructor(mqttMicroservice, networkOutput, networkDatabase, saveLogService) {
        this.mqttMicroservice = mqttMicroservice;
        this.networkOutput = networkOutput;
        this.networkDatabase = networkDatabase;
        this.saveLogService = saveLogService;
        this.logger = this.saveLogService.get('host');
    }
    onModuleInit() {
        this.ready();
    }
    ready() {
        this.mqttMicroservice.emit('ready:network', {});
    }
    async getNetwork() {
        let model;
        try {
            this.logger?.info(`[Network] getNetwork ================================`);
            model = new network_domain_1.NetworkModel({ command: network_domain_1.NetworkCommand.getNetwork });
            const db = await this.networkDatabase.save(model);
            model.assignId(db._id);
            model.checkVariables();
            const resp = await this.networkOutput.getNetwork();
            model.statusChange(network_domain_1.NetworkStatus.success);
            await this.networkDatabase.update(model);
            return resp;
        }
        catch (error) {
            if (model) {
                model.statusChange(network_domain_1.NetworkStatus.fail);
                model.message = error.error.details;
                await this.networkDatabase.update(model);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Network] getNetwork: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('네트워크 정보를 가져올 수 없습니다.', constant_2.GrpcCode.InternalError);
        }
    }
    async getEthernet() {
        let model;
        try {
            this.logger?.info(`[Network] getEthernet ================================`);
            model = new network_domain_1.NetworkModel({ command: network_domain_1.NetworkCommand.getEthernet });
            const db = await this.networkDatabase.save(model);
            model.assignId(db._id);
            model.checkVariables();
            const resp = await this.networkOutput.getEthernet();
            model.statusChange(network_domain_1.NetworkStatus.success);
            await this.networkDatabase.update(model);
            return resp;
        }
        catch (error) {
            if (model) {
                model.statusChange(network_domain_1.NetworkStatus.fail);
                model.message = error.error.details;
                await this.networkDatabase.update(model);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Network] getEthernet: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('네트워크 정보를 가져올 수 없습니다.', constant_2.GrpcCode.InternalError);
        }
    }
    async getWifi() {
        let model;
        try {
            this.logger?.info(`[Network] getWifi ================================`);
            model = new network_domain_1.NetworkModel({ command: network_domain_1.NetworkCommand.getWifi });
            const db = await this.networkDatabase.save(model);
            model.assignId(db._id);
            model.checkVariables();
            const resp = await this.networkOutput.getWifi();
            model.statusChange(network_domain_1.NetworkStatus.success);
            await this.networkDatabase.update(model);
            return resp;
        }
        catch (error) {
            if (model) {
                model.statusChange(network_domain_1.NetworkStatus.fail);
                model.message = error.error.details;
                await this.networkDatabase.update(model);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Network] getWifi: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('네트워크 정보를 가져올 수 없습니다.', constant_2.GrpcCode.InternalError);
        }
    }
    async getBluetooth() {
        let model;
        try {
            this.logger?.info(`[Network] getBluetooth ================================`);
            model = new network_domain_1.NetworkModel({ command: network_domain_1.NetworkCommand.getBluetooth });
            const db = await this.networkDatabase.save(model);
            model.assignId(db._id);
            model.checkVariables();
            const resp = await this.networkOutput.getBluetooth();
            model.statusChange(network_domain_1.NetworkStatus.success);
            await this.networkDatabase.update(model);
            return resp;
        }
        catch (error) {
            if (model) {
                model.statusChange(network_domain_1.NetworkStatus.fail);
                model.message = error.error.details;
                await this.networkDatabase.update(model);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Network] getBluetooth: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('네트워크 정보를 가져올 수 없습니다.', constant_2.GrpcCode.InternalError);
        }
    }
    async getDevice(device) {
        let model;
        try {
            this.logger?.info(`[Network] getDevice ================================`);
            model = new network_domain_1.NetworkModel({ command: network_domain_1.NetworkCommand.getDevice, device: device });
            const db = await this.networkDatabase.save(model);
            model.assignId(db._id);
            model.checkVariables();
            const resp = await this.networkOutput.getDevice(model);
            model.statusChange(network_domain_1.NetworkStatus.success);
            await this.networkDatabase.update(model);
            return resp;
        }
        catch (error) {
            if (model) {
                model.statusChange(network_domain_1.NetworkStatus.fail);
                model.message = error.error.details;
                await this.networkDatabase.update(model);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Network] getDevice: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('네트워크 정보를 가져올 수 없습니다.', constant_2.GrpcCode.InternalError);
        }
    }
    async setNetwork(request) {
        let model;
        try {
            this.logger?.info(`[Network] setNetwork ================================`);
            model = new network_domain_1.NetworkModel({ command: network_domain_1.NetworkCommand.setNetwork, ...request });
            const db = await this.networkDatabase.save(model);
            model.assignId(db._id);
            model.checkVariables();
            const resp = await this.networkOutput.setNetwork(model);
            model.statusChange(network_domain_1.NetworkStatus.success);
            await this.networkDatabase.update(model);
            return resp;
        }
        catch (error) {
            if (model) {
                model.statusChange(network_domain_1.NetworkStatus.fail);
                model.message = error.error.details;
                await this.networkDatabase.update(model);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Network] setNetwork: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('네트워크 정보를 수정할 수 없습니다.', constant_2.GrpcCode.InternalError);
        }
    }
    async connectWifi(request) {
        let model;
        try {
            this.logger?.info(`[Network] connectWifi ================================`);
            model = new network_domain_1.NetworkModel({ command: network_domain_1.NetworkCommand.connectWifi, ...request });
            const db = await this.networkDatabase.save(model);
            model.assignId(db._id);
            model.checkVariables();
            const resp = await this.networkOutput.connectWifi(model);
            model.statusChange(network_domain_1.NetworkStatus.success);
            await this.networkDatabase.update(model);
            return resp;
        }
        catch (error) {
            if (model) {
                model.statusChange(network_domain_1.NetworkStatus.fail);
                model.message = error.error.details;
                await this.networkDatabase.update(model);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Network] connectWifi: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('와이파이 연결에 실패했습니다.', constant_2.GrpcCode.InternalError);
        }
    }
    async wifiScan() {
        let model;
        try {
            this.logger?.info(`[Network] wifiScan ================================`);
            model = new network_domain_1.NetworkModel({ command: network_domain_1.NetworkCommand.wifiScan });
            const db = await this.networkDatabase.save(model);
            model.assignId(db._id);
            model.checkVariables();
            const resp = await this.networkOutput.wifiScan();
            model.statusChange(network_domain_1.NetworkStatus.success);
            await this.networkDatabase.update(model);
            return resp;
        }
        catch (error) {
            if (model) {
                model.statusChange(network_domain_1.NetworkStatus.fail);
                model.message = error.error.details;
                await this.networkDatabase.update(model);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Network] wifiScan: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('와이파이 스캔에 실패했습니다.', constant_2.GrpcCode.InternalError);
        }
    }
    async getWifiList() {
        let model;
        try {
            this.logger?.info(`[Network] getWifiList ================================`);
            model = new network_domain_1.NetworkModel({ command: network_domain_1.NetworkCommand.getWifiList });
            const db = await this.networkDatabase.save(model);
            model.assignId(db._id);
            model.checkVariables();
            const resp = await this.networkOutput.getWifiList();
            model.statusChange(network_domain_1.NetworkStatus.success);
            await this.networkDatabase.update(model);
            return resp;
        }
        catch (error) {
            if (model) {
                model.statusChange(network_domain_1.NetworkStatus.fail);
                model.message = error.error.details;
                await this.networkDatabase.update(model);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Network] getWifiList: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('와이파이 목록을 가져올 수 없습니다.', constant_2.GrpcCode.InternalError);
        }
    }
};
exports.NetworkService = NetworkService;
exports.NetworkService = NetworkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constant_1.MQTT_BROKER)),
    __param(1, (0, common_1.Inject)('NetworkOutputPort')),
    __param(2, (0, common_1.Inject)('NetworkDatabaseOutputPort')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object, typeof (_b = typeof network_output_port_1.NetworkOutputPort !== "undefined" && network_output_port_1.NetworkOutputPort) === "function" ? _b : Object, typeof (_c = typeof network_database_output_port_1.NetworkDatabaseOutputPort !== "undefined" && network_database_output_port_1.NetworkDatabaseOutputPort) === "function" ? _c : Object, typeof (_d = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _d : Object])
], NetworkService);


/***/ }),
/* 130 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 131 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 132 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NetworkModel = exports.NetworkCommand = exports.NetworkStatus = void 0;
const constant_1 = __webpack_require__(51);
const rpc_code_exception_1 = __webpack_require__(50);
var NetworkStatus;
(function (NetworkStatus) {
    NetworkStatus["pending"] = "pending";
    NetworkStatus["accepted"] = "accept";
    NetworkStatus["rejected"] = "reject";
    NetworkStatus["success"] = "success";
    NetworkStatus["fail"] = "fail";
    NetworkStatus["cancelled"] = "cancelled";
    NetworkStatus["unknown"] = "unknown";
})(NetworkStatus || (exports.NetworkStatus = NetworkStatus = {}));
var NetworkCommand;
(function (NetworkCommand) {
    NetworkCommand["getNetwork"] = "getNetwork";
    NetworkCommand["getEthernet"] = "getEthernet";
    NetworkCommand["getWifi"] = "getWifi";
    NetworkCommand["getBluetooth"] = "getBluetooth";
    NetworkCommand["getDevice"] = "getDevice";
    NetworkCommand["setNetwork"] = "setNetwork";
    NetworkCommand["connectWifi"] = "connectWifi";
    NetworkCommand["wifiScan"] = "wifiScan";
    NetworkCommand["getWifiList"] = "getWifiList";
})(NetworkCommand || (exports.NetworkCommand = NetworkCommand = {}));
class NetworkModel {
    constructor(param) {
        this.status = NetworkStatus.pending;
        this.command = param.command;
        this.device = param.device;
        this.name = param.name;
        this.dhcp = param.dhcp;
        this.address = param.address;
        this.gateway = param.gateway;
        this.mask = param.mask;
        this.dns = param.dns;
        this.ssid = param.ssid;
        this.password = param.password;
    }
    assignId(id) {
        this.id = id;
        this.message = '';
    }
    statusChange(status) {
        this.status = status;
    }
    checkVariables() {
        if (this.command === NetworkCommand.getNetwork) {
            if (this.status === undefined) {
                this.status = NetworkStatus.pending;
            }
        }
        else if (this.command === NetworkCommand.getEthernet) {
        }
        else if (this.command === NetworkCommand.getWifi) {
        }
        else if (this.command === NetworkCommand.getBluetooth) {
        }
        else if (this.command === NetworkCommand.getDevice) {
            if (this.device === undefined || this.device === null || this.device === '') {
                throw new rpc_code_exception_1.RpcCodeException('device 값이 존재하지 않습니다.', constant_1.GrpcCode.InternalError);
            }
        }
        else if (this.command === NetworkCommand.setNetwork) {
            if (this.device === undefined || this.device === null || this.device === '') {
                throw new rpc_code_exception_1.RpcCodeException('device 값이 존재하지 않습니다.', constant_1.GrpcCode.InternalError);
            }
            if (this.name === undefined || this.name === null || this.name === '') {
                throw new rpc_code_exception_1.RpcCodeException('name 값이 존재하지 않습니다.', constant_1.GrpcCode.InternalError);
            }
            if (this.dhcp === undefined || this.dhcp === null) {
                throw new rpc_code_exception_1.RpcCodeException('dhcp 값이 존재하지 않습니다.', constant_1.GrpcCode.InternalError);
            }
            if (this.dhcp === false) {
                if (this.address === undefined || this.address === null || this.address === '') {
                    throw new rpc_code_exception_1.RpcCodeException('address 값이 존재하지 않습니다.', constant_1.GrpcCode.InternalError);
                }
                if (this.gateway === undefined || this.gateway === null || this.gateway === '') {
                    throw new rpc_code_exception_1.RpcCodeException('gateway 값이 존재하지 않습니다.', constant_1.GrpcCode.InternalError);
                }
                if (this.mask === undefined || this.mask === null || this.mask === '') {
                    throw new rpc_code_exception_1.RpcCodeException('mask 값이 존재하지 않습니다.', constant_1.GrpcCode.InternalError);
                }
                if (this.dns === undefined || this.dns === null) {
                    throw new rpc_code_exception_1.RpcCodeException('dns 값이 존재하지 않습니다.', constant_1.GrpcCode.InternalError);
                }
            }
        }
        else if (this.command === NetworkCommand.connectWifi) {
            if (this.ssid === undefined || this.ssid === null || this.ssid === '') {
                throw new rpc_code_exception_1.RpcCodeException('ssid 값이 존재하지 않습니다.', constant_1.GrpcCode.InternalError);
            }
            if (this.password === undefined || this.password === null || this.password === '') {
                throw new rpc_code_exception_1.RpcCodeException('password 값이 존재하지 않습니다.', constant_1.GrpcCode.InternalError);
            }
        }
        else if (this.command === NetworkCommand.wifiScan) {
        }
        else if (this.command === NetworkCommand.getWifiList) {
        }
        else {
            throw new rpc_code_exception_1.RpcCodeException('네트워크 명령이 존재하지 않습니다.', constant_1.GrpcCode.InternalError);
        }
    }
}
exports.NetworkModel = NetworkModel;


/***/ }),
/* 133 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NetworkNmcliAdapter = void 0;
const wifi = __webpack_require__(134);
const microservices_1 = __webpack_require__(3);
const parse_util_1 = __webpack_require__(53);
const rpc_code_exception_1 = __webpack_require__(50);
const constant_1 = __webpack_require__(51);
const child_process_1 = __webpack_require__(109);
const saveLog_service_1 = __webpack_require__(35);
const common_1 = __webpack_require__(33);
let NetworkNmcliAdapter = class NetworkNmcliAdapter {
    constructor(saveLogService) {
        this.saveLogService = saveLogService;
        this.curEthernet = [];
        this.curWifi = [];
        this.curBluetooth = [];
        this.logger = this.saveLogService.get('host');
        wifi.init({
            iface: null,
        });
    }
    async getNetwork() {
        try {
            await this.nmcliDeviceShow();
            const wifi_detail = await this.getCurrentWifi();
            for (let i = 0; i < wifi_detail.length; i++) {
                if (this.curWifi.length > 0) {
                    if (wifi_detail[i].iface === this.curWifi[0].device)
                        this.curWifi[0].signalLevel = wifi_detail[i].signalLevel;
                    this.curWifi[0].quality = wifi_detail[i].quality;
                    this.curWifi[0].security = wifi_detail[i].security;
                }
            }
            return {
                Ethernet: this.curEthernet,
                Wifi: this.curWifi[0],
            };
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Network] getNetwork: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('네트워크 정보를 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async getEthernet() {
        try {
            if (this.curEthernet.length == 0) {
                await this.nmcliDeviceShow();
            }
            return {
                Ethernet: this.curEthernet,
            };
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Network] getEthernet: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('네트워크 정보를 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async getWifi() {
        try {
            if (this.curWifi.length == 0) {
                await this.nmcliConnectionShow();
            }
            const wifi_detail = await this.getCurrentWifi();
            for (let i = 0; i < wifi_detail.length; i++) {
                if (this.curWifi.length > 0) {
                    if (wifi_detail[i].iface === this.curWifi[0].device)
                        this.curWifi[0].signalLevel = wifi_detail[i].signalLevel;
                    this.curWifi[0].quality = wifi_detail[i].quality;
                    this.curWifi[0].security = wifi_detail[i].security;
                }
            }
            return this.curWifi[0];
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Network] getWifi: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('네트워크 정보를 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async getBluetooth() {
        try {
            if (this.curBluetooth.length == 0) {
                await this.nmcliDeviceShow();
            }
            return this.curBluetooth[0];
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Network] getBluetooth: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('네트워크 정보를 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async getDevice(model) {
        try {
            const data = (0, child_process_1.execSync)('nmcli device show ' + model.device).toString();
            const json = await this.parseNMCLI(data);
            if (json.type == 'wifi') {
                const wifi_detail = await this.getCurrentWifi();
                for (let i = 0; i < wifi_detail.length; i++) {
                    if (wifi_detail[i].iface === json.device)
                        json.signalLevel = wifi_detail[i].signalLevel;
                    json.quality = wifi_detail[i].quality;
                    json.security = wifi_detail[i].security;
                }
            }
            return json;
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Network] getDevice: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('네트워크 정보를 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async setNetwork(model) {
        try {
            let cmd;
            if (model.dhcp) {
                cmd = `nmcli con modify '${model.name}' ipv4.method auto`;
                this.logger?.info(`[Network] SET Network DHCP : ${model.name}`);
            }
            else {
                let dns_str = '"';
                for (let i = 0; i < model.dns.length; i++) {
                    dns_str += model.dns[i] + ' ';
                }
                dns_str += '"';
                cmd =
                    "nmcli con modify '" +
                        model.name +
                        "' ipv4.addresses " +
                        model.address +
                        '/' +
                        model.mask +
                        ' ipv4.gateway ' +
                        model.gateway +
                        ' ipv4.dns ' +
                        dns_str +
                        ' ipv4.method manual';
                this.logger?.info(`[Network] SET Network Manual : ${model.name} -> ${cmd}, ${JSON.stringify(model)}`);
            }
            (0, child_process_1.execSync)(cmd);
            (0, child_process_1.execSync)(`nmcli con up ${model.name}`);
            return {
                device: model.device,
                name: model.name,
                dhcp: model.dhcp,
                address: model.address,
                gateway: model.gateway,
                mask: model.mask,
                dns: model.dns,
            };
        }
        catch (error) {
            this.logger?.error(`[Network] setNetwork: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('네트워크 정보를 수정할 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async connectWifi(model) {
        try {
            let cmd_line;
            if (model.password == undefined || model.password == '') {
                cmd_line = 'nmcli dev wifi connect "' + model.ssid + '"';
            }
            else {
                cmd_line = 'nmcli dev wifi connect "' + model.ssid + '" password "' + model.password + '"';
            }
            this.logger?.info(`[Network] Connect Wifi : ${cmd_line}, ${JSON.stringify(model)}`);
            (0, child_process_1.execSync)('nmcli dev wifi rescan');
            await new Promise((resolve) => setTimeout(resolve, 2000));
            const data = (0, child_process_1.execSync)(cmd_line);
            this.logger?.info(`[Network] Connect Wifi Response: ${data}`);
            if (data.includes('successfully')) {
                return { ssid: model.ssid };
            }
            else if (data.includes('Secrets were required')) {
                throw new rpc_code_exception_1.RpcCodeException('비밀번호가 틀렸습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            else {
                throw new rpc_code_exception_1.RpcCodeException(data.toString(), constant_1.GrpcCode.InternalError);
            }
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException) {
                throw error;
            }
            const errorStr = parse_util_1.ParseUtil.errorToJson(error);
            this.logger?.warn(`[Network] Connect Wifi: ${errorStr}`);
            if (errorStr.includes('Secrets were required')) {
                throw new rpc_code_exception_1.RpcCodeException('비밀번호가 틀렸습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            else if (errorStr.includes('No network with SSID')) {
                throw new rpc_code_exception_1.RpcCodeException('SSID를 찾을 수 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            else if (errorStr.includes('property is invalid')) {
                throw new rpc_code_exception_1.RpcCodeException('비밀번호가 틀렸습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            throw new rpc_code_exception_1.RpcCodeException(error.message, constant_1.GrpcCode.InternalError);
        }
    }
    async wifiScan() {
        try {
            (0, child_process_1.execSync)('nmcli dev wifi rescan');
            await new Promise((resolve) => setTimeout(resolve, 2000));
            return this.getWifiList();
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException) {
                throw error;
            }
            throw new rpc_code_exception_1.RpcCodeException('와이파이 목록을 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    getWifiList() {
        return new Promise((resolve, reject) => {
            wifi.scan((error, networks) => {
                if (error) {
                    this.logger?.error(`[Network] WifiScan: ${parse_util_1.ParseUtil.errorToJson(error)}`);
                    return reject(new rpc_code_exception_1.RpcCodeException('와이파이 목록을 가져올 수 없습니다.', constant_1.GrpcCode.InternalError));
                }
                const wifiMap = new Map();
                for (const net of networks) {
                    if (!net.ssid)
                        continue;
                    const existing = wifiMap.get(net.ssid);
                    if (!existing || net.quality > existing.quality) {
                        wifiMap.set(net.ssid, { ...net });
                    }
                }
                resolve({ list: Array.from(wifiMap.values()) });
            });
        });
    }
    async getCurrentWifi() {
        return new Promise(async (resolve, reject) => {
            try {
                wifi.getCurrentConnections((error, networks) => {
                    if (error) {
                        this.logger?.error(`[Network] getCurrentWifi: ${parse_util_1.ParseUtil.errorToJson(error)}`);
                        reject();
                    }
                    else {
                        this.logger?.debug(`[Network] getCurrentWifi: ${JSON.stringify(networks)}`);
                        resolve(networks);
                    }
                });
            }
            catch (error) {
                this.logger?.error(`[Network] getCurrentWifi: ${parse_util_1.ParseUtil.errorToJson(error)}`);
                reject();
            }
        });
    }
    async nmcliDeviceShow() {
        try {
            const data = (0, child_process_1.execSync)('nmcli device show').toString();
            this.curEthernet = [];
            this.curWifi = [];
            this.curBluetooth = [];
            const networks = data.split(/\n\s*\n/);
            for (const i in networks) {
                const json = await this.parseNMCLI(networks[i]);
                if (json.type == 'ethernet') {
                    this.curEthernet.push({ ...json });
                }
                else if (json.type == 'wifi') {
                    this.curWifi.push({ ...json });
                }
                else if (json.type == 'bt') {
                    this.curBluetooth.push({ ...json });
                }
            }
        }
        catch (error) {
            this.logger?.error(`[Network] getNetwork: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('네트워크 정보를 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async nmcliConnectionShow() {
        try {
            const result = (0, child_process_1.execSync)('nmcli connection show --active').toString();
            let ActiveWifi = null;
            let ActiveEthernet = null;
            let ActiveBluetooth = null;
            result.split('\n').map((line) => {
                if (!line.startsWith('NAME ') && line != '') {
                    if (line.includes('wifi')) {
                        ActiveWifi = line.split('  ')[0];
                    }
                    else if (line.includes('ethernet')) {
                        ActiveEthernet = line.split('  ')[0];
                    }
                    else if (line.includes('bt')) {
                        ActiveBluetooth = line.split('  ')[0];
                    }
                }
            });
            if (ActiveWifi) {
                this.curWifi = [];
                this.curWifi.push(await this.getConnectionInfo(ActiveWifi));
            }
            if (ActiveEthernet) {
                this.curEthernet = [];
                this.curEthernet.push(await this.getConnectionInfo(ActiveEthernet));
            }
            if (ActiveBluetooth) {
                this.curBluetooth = [];
                this.curBluetooth.push(await this.getConnectionInfo(ActiveBluetooth));
            }
        }
        catch (error) {
            this.logger?.error(`[Network] getNetwork: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('네트워크 정보를 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async getConnectionInfo(name) {
        const data = (0, child_process_1.execSync)(`nmcli connection show '${name}'`).toString();
        const info = {
            name: name,
            type: '',
            device: '',
            mask: '',
            gateway: '',
            address: '',
            state: '',
            dhcp: false,
            hwAddr: '',
            dns: [],
        };
        data.split('\n').map((line) => {
            if (line.startsWith('IP4.GATEWAY')) {
                info.gateway = line.split(' ')[line.split(' ').length - 1];
            }
            else if (line.startsWith('IP4.ADDRESS')) {
                const address = line.split(' ')[line.split(' ').length - 1];
                info.address = address.split('/')[0];
                info.mask = address.split('/')[1];
            }
            else if (line.startsWith('ipv4.method')) {
                if (line.includes('auto')) {
                    info.dhcp = true;
                }
                else {
                    info.dhcp = false;
                }
            }
            else if (line.startsWith('IP4.DNS')) {
                info.dns.push(line.split(' ')[line.split(' ').length - 1]);
            }
            else if (line.startsWith('GENERAL.DEVICE')) {
                info.device = line.split(' ')[line.split(' ').length - 1];
            }
            else if (line.startsWith('GENERAL.TYPE')) {
                info.type = line.split(' ')[line.split(' ').length - 1];
            }
            else if (line.startsWith('GENERAL.HWADDR')) {
                info.hwAddr = line.split(' ')[line.split(' ').length - 1];
            }
            else if (line.startsWith('GENERAL.STATE')) {
                info.state = line.split(' ')[line.split(' ').length - 1];
            }
        });
        return info;
    }
    async parseNMCLI(inputString) {
        try {
            const network = {
                address: '',
                gateway: '',
                dns: [],
                mask: '',
            };
            inputString.split('\n').forEach((line) => {
                const split_str = line.split(':');
                const keyWithValue = split_str.shift()?.trim();
                let value;
                if (split_str.length > 1) {
                    let string = '';
                    while (split_str.length > 0) {
                        const st = split_str.shift()?.trim();
                        string += st + ':';
                    }
                    value = string.slice(0, -1);
                }
                else if (split_str.length == 0) {
                    value = '';
                }
                else {
                    value = split_str.shift()?.trim();
                }
                if (keyWithValue == 'GENERAL.DEVICE') {
                    network.device = value;
                }
                else if (keyWithValue == 'GENERAL.TYPE') {
                    network.type = value;
                }
                else if (keyWithValue == 'GENERAL.HWADDR') {
                    network.hwAddr = value;
                }
                else if (keyWithValue == 'GENERAL.STATE') {
                    network.state = value;
                }
                else if (keyWithValue == 'GENERAL.CONNECTION') {
                    network.name = value;
                }
                else if (keyWithValue == 'IP4.ADDRESS[1]') {
                    network.address = value.split('/')[0];
                    network.mask = value.split('/')[1];
                }
                else if (keyWithValue == 'IP4.GATEWAY') {
                    network.gateway = value;
                }
                else if (keyWithValue?.includes('IP4.DNS')) {
                    network.dns.push(value);
                }
            });
            return network;
        }
        catch (error) {
            this.logger?.error(`[Network] parseNMCLI: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('네트워크 정보를 파싱할 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
};
exports.NetworkNmcliAdapter = NetworkNmcliAdapter;
exports.NetworkNmcliAdapter = NetworkNmcliAdapter = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _a : Object])
], NetworkNmcliAdapter);


/***/ }),
/* 134 */
/***/ ((module) => {

module.exports = require("node-wifi");

/***/ }),
/* 135 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NetworkMongoAdapter = void 0;
const mongoose_1 = __webpack_require__(90);
const mongoose_2 = __webpack_require__(92);
const parse_util_1 = __webpack_require__(53);
const util_1 = __webpack_require__(38);
const network_command_entity_1 = __webpack_require__(136);
const rpc_code_exception_1 = __webpack_require__(50);
const constant_1 = __webpack_require__(51);
const saveLog_service_1 = __webpack_require__(35);
const common_1 = __webpack_require__(33);
const config_1 = __webpack_require__(2);
let NetworkMongoAdapter = class NetworkMongoAdapter {
    constructor(saveLogService, Repository, configService) {
        this.saveLogService = saveLogService;
        this.Repository = Repository;
        this.configService = configService;
        this.logger = this.saveLogService.get('host');
        this.setIndex(this.configService);
    }
    async setIndex(configService) {
        try {
            await this.Repository.collection.dropIndex('createdAt_1');
        }
        catch (error) {
            this.logger?.warn(`[Network] DB dropIndex: ${parse_util_1.ParseUtil.errorToJson(error)}`);
        }
        try {
            if (configService.get('DB_TTL_ENABLE') === 'true') {
                const TTL_DAYS = Number(configService.get('DB_TTL_DAYS') ?? '100');
                this.logger?.info(`[Network] setIndex EnabledTTL_DAYS: ${TTL_DAYS}`);
                this.Repository.collection.createIndex({ createdAt: 1 }, { expireAfterSeconds: TTL_DAYS * 24 * 60 * 60 });
            }
        }
        catch (error) {
            this.logger?.error(`[Network] DB createIndex: ${parse_util_1.ParseUtil.errorToJson(error)}`);
        }
    }
    async getNodebyId(id) {
        try {
            return await this.Repository.findById(id).lean();
        }
        catch (error) {
            this.logger?.error(`[Network] DB getNodebyId: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 가져올 수 없습니다.', constant_1.GrpcCode.DBError);
        }
    }
    async save(model) {
        try {
            const _id = util_1.UrlUtil.generateUUID();
            return await this.Repository.create({ ...model, _id });
        }
        catch (error) {
            this.logger?.error(`[Network] DB save: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 저장할 수 없습니다.', constant_1.GrpcCode.DBError);
        }
    }
    async update(move) {
        try {
            return await this.Repository.findByIdAndUpdate(move.id, move).lean();
        }
        catch (error) {
            this.logger?.error(`[Network] DB update: ${parse_util_1.ParseUtil.errorToJson(error)}`);
        }
    }
};
exports.NetworkMongoAdapter = NetworkMongoAdapter;
exports.NetworkMongoAdapter = NetworkMongoAdapter = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(network_command_entity_1.NetworkCommand.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object])
], NetworkMongoAdapter);


/***/ }),
/* 136 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NetworkCommandSchema = exports.NetworkCommand = void 0;
const mongoose_1 = __webpack_require__(90);
let NetworkCommand = class NetworkCommand {
};
exports.NetworkCommand = NetworkCommand;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], NetworkCommand.prototype, "command", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], NetworkCommand.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NetworkCommand.prototype, "_id", void 0);
exports.NetworkCommand = NetworkCommand = __decorate([
    (0, mongoose_1.Schema)()
], NetworkCommand);
exports.NetworkCommandSchema = mongoose_1.SchemaFactory.createForClass(NetworkCommand);
exports.NetworkCommandSchema.set('timestamps', true);


/***/ }),
/* 137 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NetworkMqttController = void 0;
const constant_1 = __webpack_require__(67);
const common_1 = __webpack_require__(33);
const microservices_1 = __webpack_require__(3);
const network_service_1 = __webpack_require__(129);
let NetworkMqttController = class NetworkMqttController {
    constructor(mqttMicroservice, networkService) {
        this.mqttMicroservice = mqttMicroservice;
        this.networkService = networkService;
    }
    async readyNetwork(data) {
        this.networkService.ready();
    }
};
exports.NetworkMqttController = NetworkMqttController;
__decorate([
    (0, microservices_1.EventPattern)('ready:network'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NetworkMqttController.prototype, "readyNetwork", null);
exports.NetworkMqttController = NetworkMqttController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)(constant_1.MQTT_BROKER)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object, typeof (_b = typeof network_service_1.NetworkService !== "undefined" && network_service_1.NetworkService) === "function" ? _b : Object])
], NetworkMqttController);


/***/ }),
/* 138 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OnvifModule = void 0;
const common_1 = __webpack_require__(33);
const onvif_api_controller_1 = __webpack_require__(139);
const onvif_device_service_1 = __webpack_require__(145);
const onvif_ptz_service_1 = __webpack_require__(148);
const onvif_media_service_1 = __webpack_require__(142);
const onvif_event_service_1 = __webpack_require__(151);
const onvif_deviceio_service_1 = __webpack_require__(150);
const microservices_1 = __webpack_require__(3);
const common_2 = __webpack_require__(4);
const path_1 = __webpack_require__(31);
const onvif_mqtt_controller_1 = __webpack_require__(152);
const constant_1 = __webpack_require__(67);
const config_1 = __webpack_require__(2);
const onvif_pending_service_1 = __webpack_require__(153);
const log_module_1 = __webpack_require__(87);
let OnvifModule = class OnvifModule {
};
exports.OnvifModule = OnvifModule;
exports.OnvifModule = OnvifModule = __decorate([
    (0, common_1.Module)({
        imports: [
            log_module_1.LogModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            microservices_1.ClientsModule.registerAsync({
                clients: [
                    {
                        name: constant_1.NETWORK_SERVICE,
                        inject: [config_1.ConfigService],
                        useFactory: (configService) => ({
                            transport: microservices_1.Transport.GRPC,
                            options: {
                                package: common_2.NetworkMicroservice.protobufPackage,
                                protoPath: (0, path_1.join)(process.cwd(), 'proto/network.proto'),
                                url: configService.get('NETWORK_GRPC_URL'),
                            },
                        }),
                    },
                    {
                        name: constant_1.CONFIG_SERVICE,
                        inject: [config_1.ConfigService],
                        useFactory: (configService) => ({
                            transport: microservices_1.Transport.GRPC,
                            options: {
                                package: common_2.ConfigMicroservice.protobufPackage,
                                protoPath: (0, path_1.join)(process.cwd(), 'proto/config.proto'),
                                url: configService.get('CONFIG_GRPC_URL'),
                            },
                        }),
                    },
                ],
            }),
            microservices_1.ClientsModule.registerAsync({
                clients: [
                    {
                        inject: [config_1.ConfigService],
                        name: constant_1.MQTT_BROKER,
                        useFactory: (configService) => ({
                            transport: microservices_1.Transport.MQTT,
                            options: {
                                url: configService.get('MQTT_URL'),
                            },
                        }),
                    },
                ],
            }),
        ],
        controllers: [onvif_api_controller_1.OnvifApiController, onvif_mqtt_controller_1.OnvifMqttController],
        providers: [onvif_device_service_1.OnvifDeviceService, onvif_pending_service_1.OnvifPendingService, onvif_ptz_service_1.OnvifPtzService, onvif_media_service_1.OnvifMediaService, onvif_event_service_1.OnvifEventService, onvif_deviceio_service_1.OnvifDeviceIOService],
    })
], OnvifModule);


/***/ }),
/* 139 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OnvifApiController = void 0;
const common_1 = __webpack_require__(33);
const xml2js = __webpack_require__(140);
const express_1 = __webpack_require__(141);
const onvif_media_service_1 = __webpack_require__(142);
const onvif_device_service_1 = __webpack_require__(145);
const fs_1 = __webpack_require__(44);
const onvif_ptz_service_1 = __webpack_require__(148);
const onvif_deviceio_service_1 = __webpack_require__(150);
const onvif_event_service_1 = __webpack_require__(151);
const parse_util_1 = __webpack_require__(53);
const saveLog_service_1 = __webpack_require__(35);
let OnvifApiController = class OnvifApiController {
    constructor(mediaService, deviceService, ptzService, deviceIOService, eventService, saveLogService) {
        this.mediaService = mediaService;
        this.deviceService = deviceService;
        this.ptzService = ptzService;
        this.deviceIOService = deviceIOService;
        this.eventService = eventService;
        this.saveLogService = saveLogService;
        this.isPlatformLinux = false;
        this.logger = this.saveLogService.get('onvif');
        if (process.env.HOST_OS === 'Linux') {
            this.isPlatformLinux = true;
        }
    }
    async testHello() {
        return this.deviceService.hello();
    }
    async DeviceService(body, req, res) {
        console.log('?');
        const parser = new xml2js.Parser({
            explicitArray: false,
            tagNameProcessors: [xml2js.processors.stripPrefix],
        });
        parser.parseString(body, async (err, result) => {
            if (err) {
                this.logger?.error(`[Onvif] Request Device Service : Parsing Error -> ${JSON.stringify(body)}, ${parse_util_1.ParseUtil.errorToJson(err)}`);
                res.status(common_1.HttpStatus.BAD_REQUEST).send('뭐임');
                return;
            }
            const methodName = Object.keys(result['Envelope']['Body']).find((key) => key !== '$');
            this.logger?.info(`[Onvif] Request Device Service : ${methodName}, ${JSON.stringify(result)}`);
            let responseXml;
            if (methodName == 'GetSystemDateAndTime') {
                responseXml = await this.deviceService.responseSystemDateAndTime();
            }
            else if (methodName == 'GetCapabilities') {
                responseXml = await this.deviceService.responseCapabilities(req.socket.remoteAddress);
            }
            else if (methodName == 'SetSystemDateAndTime') {
                responseXml = await this.deviceService.setSystemDateAndTime();
            }
            else if (methodName == 'GetServiceCapabilities') {
                responseXml = await this.deviceService.responseCapabilities(req.socket.remoteAddress);
            }
            else if (methodName == 'GetServices') {
                responseXml = await this.deviceService.responseServices(req.socket.remoteAddress);
            }
            else if (methodName == 'GetDeviceInformation') {
                responseXml = await this.deviceService.responseDeviceInformation();
            }
            else if (methodName == 'GetScopes') {
                responseXml = await this.deviceService.responseScopes();
            }
            else if (methodName == 'GetNetworkInterfaces') {
                responseXml = await this.deviceService.responseNetworkInterfaces(req.socket.remoteAddress);
            }
            else if (methodName == 'GetDNS') {
                responseXml = await this.deviceService.responseDNS(req.socket.remoteAddress);
            }
            else if (methodName == 'GetHostname') {
                responseXml = await this.deviceService.responseHostname();
            }
            else if (methodName == 'GetNetworkProtocols') {
                responseXml = await this.deviceService.responseNetworkProtocols();
            }
            else if (methodName == 'GetDiscoveryMode') {
                responseXml = await this.deviceService.responseDiscoveryMode();
            }
            else if (methodName == 'GetNetworkDefaultGateway') {
                responseXml = await this.deviceService.responseDefaultGateway(req.socket.remoteAddress);
            }
            else if (methodName == 'GetNTP') {
                responseXml = await this.deviceService.responseNTP();
            }
            if (responseXml) {
                res.set('Content-Type', 'application/soap+xml');
                res.send(responseXml);
            }
            else {
                this.logger?.error(`[Onvif] methodName not matching ${methodName}`);
                res.status(common_1.HttpStatus.BAD_REQUEST).send('뭐임??');
            }
        });
    }
    async MediaService(body, req, res) {
        console.error('media_service : ', JSON.stringify(body));
        const parser = new xml2js.Parser({
            explicitArray: false,
            tagNameProcessors: [xml2js.processors.stripPrefix],
        });
        parser.parseString(body, async (err, result) => {
            if (err) {
                this.logger?.error(`[Onvif] Request Media Service : Parsing Error -> ${JSON.stringify(body)}, ${parse_util_1.ParseUtil.errorToJson(err)}`);
                res.status(common_1.HttpStatus.BAD_REQUEST).send('뭐냐고??');
                return;
            }
            const methodName = Object.keys(result['Envelope']['Body']).find((key) => key !== '$');
            this.logger?.info(`[Onvif] Request Media Service : ${methodName}, ${JSON.stringify(result)}`);
            let responseXml;
            if (methodName == 'GetProfiles') {
                responseXml = await this.mediaService.responseMediaProfiles();
            }
            else if (methodName == 'GetStreamUri') {
                responseXml = await this.mediaService.responseStreamUri(req.socket.remoteAddress);
            }
            else if (methodName == 'GetVideoSources') {
                responseXml = await this.mediaService.responseVideoSources();
            }
            else if (methodName == 'GetAudioSources') {
                responseXml = await this.mediaService.responseAudioSources();
            }
            else if (methodName == 'GetSnapshotUri') {
                responseXml = await this.mediaService.responseSnapshotUri(req.socket.remoteAddress);
            }
            else if (methodName == 'GetProfile') {
                responseXml = await this.mediaService.responseMediaProfile();
            }
            else if (methodName == 'GetNodes') {
                console.log('error?!');
            }
            else if (methodName == 'GetVideoSourceConfiguration') {
                responseXml = await this.mediaService.responseVideoSourceConfiguration();
            }
            if (responseXml) {
                res.set('Content-Type', 'application/soap+xml');
                res.send(responseXml);
            }
            else {
                this.logger?.error(`[Onvif] methodName not matching ${methodName}`);
                res.status(common_1.HttpStatus.BAD_REQUEST).send('뭐임????');
            }
        });
    }
    async getSnapshot(res) {
        try {
            this.logger?.info(`[Onvif] getSnapshot`);
            const data = (0, fs_1.readFileSync)('/root/snapshot.jpg');
            this.logger?.info(`[Onvif] getSnapshot : Done`);
            res.setHeader('Content-Type', 'image/jpeg');
            res.send(data);
        }
        catch (error) {
            this.logger?.error(`[Onvif] getSnapshot : ${parse_util_1.ParseUtil.errorToJson(error)}`);
            res.status(500).send('Error reading snapshot');
            return;
        }
    }
    async PTZService(body, req, res) {
        console.error('ptz_service : ', JSON.stringify(body));
        const parser = new xml2js.Parser({
            explicitArray: false,
            tagNameProcessors: [xml2js.processors.stripPrefix],
        });
        parser.parseString(body, async (err, result) => {
            if (err) {
                this.logger?.error(`[Onvif] Request Media Service : Parsing Error -> ${JSON.stringify(body)}, ${parse_util_1.ParseUtil.errorToJson(err)}`);
                res.status(common_1.HttpStatus.BAD_REQUEST).send('뭐꼬냐고');
                return;
            }
            const methodName = Object.keys(result['Envelope']['Body']).find((key) => key !== '$');
            this.logger?.info(`[Onvif] Request PTZ Service : ${methodName}, ${JSON.stringify(result)}`);
            let responseXml;
            if (methodName == 'ContinuousMove') {
                const token = result['Envelope']['Body']['ContinuousMove']['ProfileToken'];
                if (result['Envelope']['Body']['ContinuousMove']['Velocity']['PanTilt']) {
                    const x = result['Envelope']['Body']['ContinuousMove']['Velocity']['PanTilt']['$'].x;
                    const y = result['Envelope']['Body']['ContinuousMove']['Velocity']['PanTilt']['$'].y;
                    this.logger?.info(`[Onvif] PTZ Move PanTilt : ${token}, Velocity(${x}, ${y})`);
                }
                else if (result['Envelope']['Body']['ContinuousMove']['Velocity']['Zoom']) {
                    const velocity = result['Envelope']['Body']['ContinuousMove']['Velocity']['Zoom']['$'].x;
                    this.logger?.info(`[Onvif] PTZ Move Zoom : ${token}, Velocity(${velocity})`);
                }
                responseXml = await this.ptzService.responsePtzMove('<ptz:ContinuousMoveResponse/>');
            }
            else if (methodName == 'RelativeMove') {
                const token = result['Envelope']['Body']['RelativeMove']['ProfileToken'];
                const pantilt = result['Envelope']['Body']['RelativeMove']['Translation']['PanTilt']?.['$'];
                const zoom = result['Envelope']['Body']['RelativeMove']['Translation']['Zoom']?.['$'];
                const pantilt_vel = result['Envelope']['Body']['RelativeMove']['Speed']?.['PanTilt']?.['$'];
                const zoom_vel = result['Envelope']['Body']['RelativeMove']['Speed']?.['Zoom']?.['$'];
                this.logger?.info(`[Onvif] PTZ Move RelativeMove : ${token}, PanTilt(${pantilt?.x},${pantilt?.y}), Zoom(${zoom?.x}), PanTiltSpeed(${pantilt_vel?.x},${pantilt_vel?.y}), ZoomSpeed(${zoom_vel?.x})`);
                responseXml = await this.ptzService.responsePtzMove('<ptz:RelativeMoveResponse/>');
            }
            else if (methodName == 'AbsoluteMove') {
                const token = result['Envelope']['Body']['AbsoluteMove']['ProfileToken'];
                const pantilt = result['Envelope']['Body']['AbsoluteMove']['Position']['PanTilt']['$'];
                const zoom = result['Envelope']['Body']['AbsoluteMove']['Position']['Zoom']['$'];
                const pantilt_vel = result['Envelope']['Body']['AbsoluteMove']['Speed']?.['PanTilt']?.['$'];
                const zoom_vel = result['Envelope']['Body']['AbsoluteMove']['Speed']?.['Zoom']?.['$'];
                this.logger?.info(`[Onvif] PTZ Move AbsoluteMove : ${token}, PanTilt(${pantilt.x},${pantilt.y}), Zoom(${zoom.x}), PanTiltSpeed(${pantilt_vel?.x},${pantilt_vel?.y}), ZoomSpeed(${zoom_vel?.x})`);
                responseXml = await this.ptzService.responsePtzMove('<ptz:AbsoluteMoveResponse/>');
            }
            else if (methodName == 'Stop') {
                const token = result['Envelope']['Body']['Stop']['ProfileToken'];
                const pantilt = result['Envelope']['Body']['Stop']['PanTilt'];
                const zoom = result['Envelope']['Body']['Stop']['Zoom'];
                this.logger?.info(`[Onvif] PTZ Move Stop : ${token}, PanTilt(${pantilt}), Zoom(${zoom})`);
                responseXml = await this.ptzService.responsePtzMove('<ptz:StopResponse/>');
            }
            else if (methodName == 'GotoHomePosition') {
                const token = result['Envelope']['Body']['GotoHomePosition']['ProfileToken'];
                this.logger?.info(`[Onvif] PTZ Move GotoHomePosition : ${token}`);
            }
            else if (methodName == 'SetHomePosition') {
                const token = result['Envelope']['Body']['SetHomePosition']['ProfileToken'];
                this.logger?.info(`[Onvif] PTZ Move SetHomePosition : ${token}`);
            }
            else if (methodName == 'SetPreset') {
                const token = result['Envelope']['Body']['SetPreset']['ProfileToken'];
                const name = result['Envelope']['Body']['SetPreset']['PresetName'];
                this.logger?.info(`[Onvif] PTZ Move SetPreset : ${token}, ${name}`);
            }
            if (responseXml) {
                res.set('Content-Type', 'application/soap+xml');
                res.send(responseXml);
            }
            else {
                this.logger?.error(`[Onvif] methodName not matching ${methodName}`);
                res.status(common_1.HttpStatus.BAD_REQUEST).send('머머');
            }
        });
    }
};
exports.OnvifApiController = OnvifApiController;
__decorate([
    (0, common_1.Post)('hello'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OnvifApiController.prototype, "testHello", null);
__decorate([
    (0, common_1.Post)('device_service'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: false, forbidNonWhitelisted: false })),
    __param(0, (0, common_1.RawBody)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_g = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _g : Object, typeof (_h = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], OnvifApiController.prototype, "DeviceService", null);
__decorate([
    (0, common_1.Post)('media_service'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: false, forbidNonWhitelisted: false })),
    __param(0, (0, common_1.RawBody)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_j = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _j : Object, typeof (_k = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], OnvifApiController.prototype, "MediaService", null);
__decorate([
    (0, common_1.Get)('snapshot.jpg'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _l : Object]),
    __metadata("design:returntype", Promise)
], OnvifApiController.prototype, "getSnapshot", null);
__decorate([
    (0, common_1.Post)('ptz_service'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: false, forbidNonWhitelisted: false })),
    __param(0, (0, common_1.RawBody)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_m = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _m : Object, typeof (_o = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _o : Object]),
    __metadata("design:returntype", Promise)
], OnvifApiController.prototype, "PTZService", null);
exports.OnvifApiController = OnvifApiController = __decorate([
    (0, common_1.Controller)('onvif'),
    __metadata("design:paramtypes", [typeof (_a = typeof onvif_media_service_1.OnvifMediaService !== "undefined" && onvif_media_service_1.OnvifMediaService) === "function" ? _a : Object, typeof (_b = typeof onvif_device_service_1.OnvifDeviceService !== "undefined" && onvif_device_service_1.OnvifDeviceService) === "function" ? _b : Object, typeof (_c = typeof onvif_ptz_service_1.OnvifPtzService !== "undefined" && onvif_ptz_service_1.OnvifPtzService) === "function" ? _c : Object, typeof (_d = typeof onvif_deviceio_service_1.OnvifDeviceIOService !== "undefined" && onvif_deviceio_service_1.OnvifDeviceIOService) === "function" ? _d : Object, typeof (_e = typeof onvif_event_service_1.OnvifEventService !== "undefined" && onvif_event_service_1.OnvifEventService) === "function" ? _e : Object, typeof (_f = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _f : Object])
], OnvifApiController);


/***/ }),
/* 140 */
/***/ ((module) => {

module.exports = require("xml2js");

/***/ }),
/* 141 */
/***/ ((module) => {

module.exports = require("express");

/***/ }),
/* 142 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OnvifMediaService = void 0;
const common_1 = __webpack_require__(33);
const microservices_1 = __webpack_require__(3);
const rxjs_1 = __webpack_require__(28);
const parse_util_1 = __webpack_require__(53);
const constant_1 = __webpack_require__(67);
const template_1 = __webpack_require__(143);
const wsdl_util_1 = __webpack_require__(144);
const os_1 = __webpack_require__(116);
const saveLog_service_1 = __webpack_require__(35);
let OnvifMediaService = class OnvifMediaService {
    constructor(configMicroservice, saveLogService) {
        this.configMicroservice = configMicroservice;
        this.saveLogService = saveLogService;
        this.ONVIF_PORT = 3005;
        this.CONFIG = {
            Name: '',
            Width: '0',
            Height: '0',
        };
        this.logger = this.saveLogService.get('onvif');
    }
    async onModuleInit() {
        try {
            this.configService = this.configMicroservice.getService('ConfigGrpcService');
            this.CONFIG.Name = (await (0, rxjs_1.lastValueFrom)(this.configService.getConfig({ key: 'media_name' }))).value ?? '';
            this.CONFIG.Width = (await (0, rxjs_1.lastValueFrom)(this.configService.getConfig({ key: 'media_width' }))).value ?? '';
            this.CONFIG.Height = (await (0, rxjs_1.lastValueFrom)(this.configService.getConfig({ key: 'media_height' }))).value ?? '';
            this.logger?.info(`[Media] get Config : ${JSON.stringify(this.CONFIG)}`);
        }
        catch (error) {
            this.logger?.error(`[Media] onModuleInit : ${parse_util_1.ParseUtil.errorToJson(error)}`);
        }
    }
    async responseMediaProfiles() {
        return new Promise(async (resolve, reject) => {
            try {
                let query = template_1.MediaWSDLTemplate[template_1.MediaWSDL.Profiles];
                query = query.replace(/__NAME__/g, this.CONFIG.Name);
                query = query.replace(/__WIDTH__/g, this.CONFIG.Width);
                query = query.replace(/__HEIGHT__/g, this.CONFIG.Height);
                console.log(query);
                this.logger?.debug(`[Media] GetProfilesResponse`);
                resolve(Buffer.from(query, 'utf-8'));
            }
            catch (error) {
                this.logger?.error(`[Media] GetProfilesResponse : ${parse_util_1.ParseUtil.errorToJson(error)}`);
                reject();
            }
        });
    }
    async responseMediaProfile() {
        return new Promise(async (resolve, reject) => {
            try {
                let query = template_1.MediaWSDLTemplate[template_1.MediaWSDL.Profile];
                query = query.replace(/__NAME__/g, this.CONFIG.Name);
                query = query.replace(/__WIDTH__/g, this.CONFIG.Width);
                query = query.replace(/__HEIGHT__/g, this.CONFIG.Height);
                this.logger?.debug(`[Media] GetProfileResponse`);
                console.log(query);
                resolve(Buffer.from(query, 'utf-8'));
            }
            catch (error) {
                this.logger?.error(`[Media] GetProfileResponse : ${parse_util_1.ParseUtil.errorToJson(error)}`);
                reject();
            }
        });
    }
    async responseVideoSourceConfiguration() {
        return new Promise(async (resolve, reject) => {
            try {
                let query = template_1.MediaWSDLTemplate[template_1.MediaWSDL.VideoSourceConfiguration];
                query = query.replace(/__NAME__/g, this.CONFIG.Name);
                query = query.replace(/__WIDTH__/g, this.CONFIG.Width);
                query = query.replace(/__HEIGHT__/g, this.CONFIG.Height);
                this.logger?.debug(`[Media] GetVideoSourceConfigurationResponse`);
                resolve(Buffer.from(query, 'utf-8'));
            }
            catch (error) {
                this.logger?.error(`[Media] GetVideoSourceConfigurationResponse : ${parse_util_1.ParseUtil.errorToJson(error)}`);
                reject();
            }
        });
    }
    async responseVideoSources() {
        return new Promise(async (resolve, reject) => {
            try {
                let query = template_1.MediaWSDLTemplate[template_1.MediaWSDL.VideoSources];
                query = query.replace(/__NAME__/g, this.CONFIG.Name);
                query = query.replace(/__WIDTH__/g, this.CONFIG.Width);
                query = query.replace(/__HEIGHT__/g, this.CONFIG.Height);
                this.logger?.debug(`[Media] GetVideoSourcesResponse`);
                console.log(query);
                resolve(Buffer.from(query, 'utf-8'));
            }
            catch (error) {
                this.logger?.error(`[Media] GetVideoSourcesResponse : ${parse_util_1.ParseUtil.errorToJson(error)}`);
                reject();
            }
        });
    }
    async responseAudioSources() {
        throw new Error('미구현된 기능입니다.');
    }
    async responseSnapshotUri(_ip) {
        return new Promise(async (resolve, reject) => {
            try {
                let query = template_1.MediaWSDLTemplate[template_1.MediaWSDL.SnapShotURI];
                query = query.replace('__SNAPSHOT_URI__', wsdl_util_1.WsdlUtil.getXaddrs('snapshot.jpg', (0, os_1.networkInterfaces)()));
                console.log(query);
                this.logger?.debug(`[Media] GetSnapshotUriResponse`);
                resolve(Buffer.from(query, 'utf-8'));
            }
            catch (error) {
                this.logger?.error(`[Media] GetSnapshotUriResponse : ${parse_util_1.ParseUtil.errorToJson(error)}`);
                reject();
            }
        });
    }
    async responseStreamUri(_ip) {
        return new Promise(async (resolve, reject) => {
            try {
                let query = template_1.MediaWSDLTemplate[template_1.MediaWSDL.StreamURI];
                const ip = wsdl_util_1.WsdlUtil.getLocalIp(_ip, (0, os_1.networkInterfaces)());
                query = query.replace('__RTSP_URI__', wsdl_util_1.WsdlUtil.getStream(ip, this.CONFIG.Name));
                this.logger?.debug(`[Media] GetStreamUriResponse`);
                console.log(query);
                resolve(Buffer.from(query, 'utf-8'));
            }
            catch (error) {
                this.logger?.error(`[Media] GetStreamUriResponse : ${parse_util_1.ParseUtil.errorToJson(error)}`);
                reject();
            }
        });
    }
};
exports.OnvifMediaService = OnvifMediaService;
exports.OnvifMediaService = OnvifMediaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constant_1.CONFIG_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object, typeof (_b = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _b : Object])
], OnvifMediaService);


/***/ }),
/* 143 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MediaWSDLTemplate = exports.MediaWSDL = void 0;
var MediaWSDL;
(function (MediaWSDL) {
    MediaWSDL["Profile"] = "profile";
    MediaWSDL["Profiles"] = "profiles";
    MediaWSDL["SnapShotURI"] = "snapshoturi";
    MediaWSDL["StreamURI"] = "streamuri";
    MediaWSDL["VideoSourceConfiguration"] = "videosourceconfiguration";
    MediaWSDL["VideoSources"] = "videosources";
})(MediaWSDL || (exports.MediaWSDL = MediaWSDL = {}));
exports.MediaWSDLTemplate = {
    profile: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
               xmlns:trt="http://www.onvif.org/ver10/media/wsdl"
               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:tt="http://www.onvif.org/ver10/schema"
                >
    <soap:Body>
        <trt:GetProfileResponse>
            <trt:Profile token="__NAME__">
                <tt:Name>__NAME__</tt:Name>
                <tt:VideoSourceConfiguration xsi:type="tt:VideoSourceConfiguration" token="vscfg0">
                    <tt:Name>vscfg0</tt:Name>
                    <tt:UseCount>1</tt:UseCount>
                    <tt:SourceToken>vidsrc0</tt:SourceToken>
                    <tt:Bounds height="__HEIGHT__" width="__WIDTH__" y="0" x="0"></tt:Bounds>
                </tt:VideoSourceConfiguration>
                <tt:VideoEncoderConfiguration xsi:type="tt:VideoEncoderConfiguration" token="__NAME__">
                    <tt:Name>Main stream encoder</tt:Name>
                    <tt:UseCount>1</tt:UseCount>
                    <tt:Encoding>H264</tt:Encoding>
                    <tt:Resolution>
                        <tt:Width>__WIDTH__</tt:Width>
                        <tt:Height>__HEIGHT__</tt:Height>
                    </tt:Resolution>
                    <tt:Quality>8</tt:Quality>
                    <tt:RateControl>
                        <tt:FrameRateLimit>5</tt:FrameRateLimit>
                        <tt:EncodingInterval>1</tt:EncodingInterval>
                        <tt:BitrateLimit>1000</tt:BitrateLimit>
                    </tt:RateControl>
                    <tt:H264>
                        <tt:GovLength>30</tt:GovLength>
                        <tt:H264Profile>High</tt:H264Profile>
                    </tt:H264>
                    <tt:SessionTimeout>PT60S</tt:SessionTimeout>
                </tt:VideoEncoderConfiguration>
                <tt:PTZConfiguration token="ptzcfg0">
                    <tt:Name>PTZ Config</tt:Name>
                    <tt:UseCount>1</tt:UseCount>
                    <tt:NodeToken>ptznode0</tt:NodeToken>
                    <tt:DefaultAbsolutePantTiltPositionSpace>http://www.onvif.org/ver10/tptz/PanTiltSpaces/PositionGenericSpace</tt:DefaultAbsolutePantTiltPositionSpace>
                    <tt:DefaultAbsoluteZoomPositionSpace>http://www.onvif.org/ver10/tptz/ZoomSpaces/PositionGenericSpace</tt:DefaultAbsoluteZoomPositionSpace>
                    <tt:DefaultRelativePanTiltTranslationSpace>http://www.onvif.org/ver10/tptz/PanTiltSpaces/TranslationGenericSpace</tt:DefaultRelativePanTiltTranslationSpace>
                    <tt:DefaultRelativeZoomTranslationSpace>http://www.onvif.org/ver10/tptz/ZoomSpaces/TranslationGenericSpace</tt:DefaultRelativeZoomTranslationSpace>
                    <tt:DefaultContinuousPanTiltVelocitySpace>http://www.onvif.org/ver10/tptz/PanTiltSpaces/VelocityGenericSpace</tt:DefaultContinuousPanTiltVelocitySpace>
                    <tt:DefaultContinuousZoomVelocitySpace>http://www.onvif.org/ver10/tptz/ZoomSpaces/VelocityGenericSpace</tt:DefaultContinuousZoomVelocitySpace>
                    <tt:DefaultPTZSpeed>
                        <tt:PanTilt space="http://www.onvif.org/ver10/tptz/PanTiltSpaces/GenericSpeedSpace" y="1" x="1"></tt:PanTilt>
                        <tt:Zoom space="http://www.onvif.org/ver10/tptz/ZoomSpaces/ZoomGenericSpeedSpace" x="1"></tt:Zoom>
                    </tt:DefaultPTZSpeed>
                    <tt:DefaultPTZTimeout>PT60S</tt:DefaultPTZTimeout>
                </tt:PTZConfiguration>
            </trt:Profile>
        </trt:GetProfileResponse>
    </soap:Body>
</soap:Envelope> `,
    profiles: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
               xmlns:trt="http://www.onvif.org/ver10/media/wsdl"
               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:tt="http://www.onvif.org/ver10/schema"
                >
    <soap:Body>
        <trt:GetProfilesResponse>
            <trt:Profiles token="__NAME__">
                <tt:Name>__NAME__</tt:Name>
                <tt:VideoSourceConfiguration xsi:type="tt:VideoSourceConfiguration" token="vscfg0">
                    <tt:Name>vscfg0</tt:Name>
                    <tt:UseCount>1</tt:UseCount>
                    <tt:SourceToken>vidsrc0</tt:SourceToken>
                    <tt:Bounds height="__HEIGHT__" width="__WIDTH__" y="0" x="0"></tt:Bounds>
                </tt:VideoSourceConfiguration>
                <tt:VideoEncoderConfiguration xsi:type="tt:VideoEncoderConfiguration" token="cam0">
                    <tt:Name>Main stream encoder</tt:Name>
                    <tt:UseCount>1</tt:UseCount>
                    <tt:Encoding>H264</tt:Encoding>
                    <tt:Resolution>
                        <tt:Width>__WIDTH__</tt:Width>
                        <tt:Height>__HEIGHT__</tt:Height>
                    </tt:Resolution>
                    <tt:Quality>8</tt:Quality>
                    <tt:RateControl>
                        <tt:FrameRateLimit>5</tt:FrameRateLimit>
                        <tt:EncodingInterval>1</tt:EncodingInterval>
                        <tt:BitrateLimit>1000</tt:BitrateLimit>
                    </tt:RateControl>
                    <tt:H264>
                        <tt:GovLength>30</tt:GovLength>
                        <tt:H264Profile>High</tt:H264Profile>
                    </tt:H264>
                    <tt:SessionTimeout>PT60S</tt:SessionTimeout>
                </tt:VideoEncoderConfiguration>
                <tt:PTZConfiguration token="ptzcfg0">
                    <tt:Name>PTZ Config</tt:Name>
                    <tt:UseCount>1</tt:UseCount>
                    <tt:NodeToken>ptznode0</tt:NodeToken>
                    <tt:DefaultAbsolutePantTiltPositionSpace>http://www.onvif.org/ver10/tptz/PanTiltSpaces/PositionGenericSpace</tt:DefaultAbsolutePantTiltPositionSpace>
                    <tt:DefaultAbsoluteZoomPositionSpace>http://www.onvif.org/ver10/tptz/ZoomSpaces/PositionGenericSpace</tt:DefaultAbsoluteZoomPositionSpace>
                    <tt:DefaultRelativePanTiltTranslationSpace>http://www.onvif.org/ver10/tptz/PanTiltSpaces/TranslationGenericSpace</tt:DefaultRelativePanTiltTranslationSpace>
                    <tt:DefaultRelativeZoomTranslationSpace>http://www.onvif.org/ver10/tptz/ZoomSpaces/TranslationGenericSpace</tt:DefaultRelativeZoomTranslationSpace>
                    <tt:DefaultContinuousPanTiltVelocitySpace>http://www.onvif.org/ver10/tptz/PanTiltSpaces/VelocityGenericSpace</tt:DefaultContinuousPanTiltVelocitySpace>
                    <tt:DefaultContinuousZoomVelocitySpace>http://www.onvif.org/ver10/tptz/ZoomSpaces/VelocityGenericSpace</tt:DefaultContinuousZoomVelocitySpace>
                    <tt:DefaultPTZSpeed>
                        <tt:PanTilt space="http://www.onvif.org/ver10/tptz/PanTiltSpaces/GenericSpeedSpace" y="1" x="1"></tt:PanTilt>
                        <tt:Zoom space="http://www.onvif.org/ver10/tptz/ZoomSpaces/ZoomGenericSpeedSpace" x="1"></tt:Zoom>
                    </tt:DefaultPTZSpeed>
                    <tt:DefaultPTZTimeout>PT60S</tt:DefaultPTZTimeout>
                </tt:PTZConfiguration>
            </trt:Profiles>
        </trt:GetProfilesResponse>
    </soap:Body>
</soap:Envelope> `,
    snapshoturi: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://www.w3.org/2003/05/soap-envelope"
               xmlns:tt="http://www.onvif.org/ver10/schema"
                   xmlns:tds="http://www.onvif.org/ver10/media/wsdl">
  <SOAP-ENV:Header/>
  <SOAP-ENV:Body>
    <tds:GetSnapshotUriResponse>
      <tds:MediaUri>
        <tt:Uri>
          __SNAPSHOT_URI__
        </tt:Uri>
        <tt:Timeout>PT60S</tt:Timeout>
      </tds:MediaUri>
    </tds:GetSnapshotUriResponse>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
`,
    streamuri: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
               xmlns:trt="http://www.onvif.org/ver10/media/wsdl"
               xmlns:tt="http://www.onvif.org/ver10/schema"
               >
    <soap:Body>
        <trt:GetStreamUriResponse>
            <trt:MediaUri>
                <tt:Uri>
                    __RTSP_URI__
                </tt:Uri>
                <tt:InvalidAfterConnect>false</tt:InvalidAfterConnect>
                <tt:InvalidAfterReboot>false</tt:InvalidAfterReboot>
                <tt:Timeout>PT60S</tt:Timeout>
            </trt:MediaUri>
        </trt:GetStreamUriResponse>
    </soap:Body>
</soap:Envelope>
`,
    videosourceconfiguration: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://www.w3.org/2003/05/soap-envelope"
                   xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/"
                   xmlns:trt="http://www.onvif.org/ver10/media/wsdl">
  <SOAP-ENV:Header/>
  <SOAP-ENV:Body>
  <GetVideoSourceConfigurationResponse>
  <Configuration token="vscfg0">
    <Name>Camera1</Name>
    <UseCount>1</UseCount>
    <SourceToken>__NAME__</SourceToken>
    <Bounds x="0" y="0" width="__WIDTH__" height="__HEIGHT__"/>
  </Configuration>
</GetVideoSourceConfigurationResponse>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
`,
    videosources: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
    <soap:Body>
        <GetVideoSourcesResponse xmlns="http://www.onvif.org/ver10/media/wsdl">
            <VideoSources token="vidsrc0">
                <Resolution>
                    <Width>__WIDTH__</Width>
                    <Height>__HEIGHT__</Height>
                </Resolution>
                <FrameRate>30</FrameRate>
                <Imaging>
                    <BacklightCompensation>
                        <Mode>ON</Mode>
                        <Level>2.5</Level>
                    </BacklightCompensation>
                    <Brightness>50</Brightness>
                    <Contrast>75</Contrast>
                    <Exposure>
                        <Mode>AUTO</Mode>
                        <MinExposureTime>1</MinExposureTime>
                        <MaxExposureTime>33</MaxExposureTime>
                    </Exposure>
                </Imaging>
            </VideoSources>
        </GetVideoSourcesResponse>
    </soap:Body>
</soap:Envelope>
`,
};


/***/ }),
/* 144 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WsdlUtil = void 0;
class WsdlUtil {
    static generateInstanceId() {
        return Math.floor(10000000 + Math.random() * 90000000).toString();
    }
    static getScopeQuery(scope) {
        return `<tds:Scopes>
                    <tt:ScopeItem>${scope}</tt:ScopeItem>
                </tds:Scopes>`;
    }
    static getXaddrs(url, interfaces) {
        let xaddrs = '';
        WsdlUtil.getLocalIps(interfaces).map((ip) => {
            xaddrs += WsdlUtil.getXaddr(ip, url) + ' ';
        });
        return xaddrs;
    }
    static getXaddr(ip, url) {
        if (ip.includes('::ffff:')) {
            ip = ip.split('::ffff:')[1];
        }
        return 'http://' + ip + `:3002/onvif/` + url;
    }
    static getStream(ip, url) {
        if (ip.includes('::ffff:')) {
            ip = ip.split('::ffff:')[1];
        }
        return 'rtsp://' + ip + ':8554/' + url;
    }
    static getLocalIp(clientIp, interfaces) {
        if (clientIp.includes('::ffff:')) {
            clientIp = clientIp.split('::ffff:')[1];
        }
        for (const iface of Object.values(interfaces)) {
            for (const config of iface || []) {
                if (config.family === 'IPv4' && !config.internal) {
                    if (clientIp.startsWith(config.address.substring(0, config.address.lastIndexOf('.')))) {
                        return config.address;
                    }
                }
            }
        }
        return '127.0.0.1';
    }
    static getLocalIps(interfaces) {
        const ips = [];
        for (const name of Object.keys(interfaces)) {
            for (const net of interfaces[name]) {
                if (net.family === 'IPv4' && !net.internal) {
                    if (name.includes('docker') || name.startsWith('br-') || net.address.startsWith('172.17.') || net.address.startsWith('172.18.')) {
                    }
                    else {
                        ips.push(net.address);
                    }
                }
            }
        }
        return ips;
    }
}
exports.WsdlUtil = WsdlUtil;


/***/ }),
/* 145 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OnvifDeviceService = void 0;
const dgram = __webpack_require__(146);
const xml2js = __webpack_require__(140);
const common_1 = __webpack_require__(33);
const os_1 = __webpack_require__(116);
const microservices_1 = __webpack_require__(3);
const rxjs_1 = __webpack_require__(28);
const date_util_1 = __webpack_require__(41);
const parse_util_1 = __webpack_require__(53);
const constant_1 = __webpack_require__(67);
const template_1 = __webpack_require__(147);
const wsdl_util_1 = __webpack_require__(144);
const url_util_1 = __webpack_require__(39);
const saveLog_service_1 = __webpack_require__(35);
let OnvifDeviceService = class OnvifDeviceService {
    constructor(networkMicroservice, configMicroservice, saveLogService) {
        this.networkMicroservice = networkMicroservice;
        this.configMicroservice = configMicroservice;
        this.saveLogService = saveLogService;
        this.messageNum = 0;
        this.MULTICAST_ADDRESS = '239.255.255.250';
        this.PORT = 3702;
        this.ONVIF_PORT = 3005;
        this.CONFIG = {
            Serial: '',
            Manufacturer: '',
            Model: '',
            Version: '',
            HardwareID: '',
        };
        this.logger = this.saveLogService.get('onvif');
    }
    async onModuleInit() {
        this.instanceId = wsdl_util_1.WsdlUtil.generateInstanceId();
        this.configService = this.configMicroservice.getService('ConfigGrpcService');
        this.onReady();
    }
    async waitForGrpc(clientGrpc, serviceName, timeoutMs = 3000) {
        const raw = clientGrpc.getClientByServiceName?.(serviceName) ?? clientGrpc.getClient?.();
        if (!raw)
            return false;
        return new Promise((resolve) => {
            const deadline = new Date(Date.now() + timeoutMs);
            raw.waitForReady(deadline, (err) => resolve(!err));
        });
    }
    async onReady() {
        const ok = await this.waitForGrpc(this.configMicroservice, 'ConfigGrpcService', 3000);
        if (!ok) {
            this.logger?.error('[Device] Config 연결 안됨');
            return;
        }
        const svc = this.configMicroservice.getService('ConfigGrpcService');
        try {
            const result = await (0, rxjs_1.lastValueFrom)(svc.getConfig({ key: 'media_name' }));
            this.initConfig();
        }
        catch (e) {
            this.logger?.warn(`RPC 호출 실패 ${e}`);
        }
    }
    async initConfig() {
        try {
            this.logger?.debug(`[Device] InitConfig --------------------------`);
            this.CONFIG.Serial = (await (0, rxjs_1.lastValueFrom)(this.configService.getConfig({ key: 'robot_serial' }))).value ?? '';
            this.CONFIG.Manufacturer = (await (0, rxjs_1.lastValueFrom)(this.configService.getConfig({ key: 'robot_manufacturer' }))).value ?? '';
            this.CONFIG.Model = (await (0, rxjs_1.lastValueFrom)(this.configService.getConfig({ key: 'robot_model' }))).value ?? '';
            this.CONFIG.Version = (await (0, rxjs_1.lastValueFrom)(this.configService.getConfig({ key: 'robot_version' }))).value ?? '';
            this.CONFIG.HardwareID = (await (0, rxjs_1.lastValueFrom)(this.configService.getConfig({ key: 'robot_hardware_id' }))).value ?? '';
            this.logger?.info(`[Device] initConfig : ${JSON.stringify(this.CONFIG)}`);
            this.initMulticast();
        }
        catch (error) {
            this.logger?.error(`[Device] initConfig : ${parse_util_1.ParseUtil.errorToJson(error)}`);
            this.configService = null;
        }
    }
    async initNetwork() {
        try {
            this.logger?.debug(`[Device] initNetwork --------------------------`);
            this.networkService = this.networkMicroservice.getService('NetworkGrpcService');
            this.currentWifi = await (0, rxjs_1.lastValueFrom)(this.networkService.getWifi({}));
            this.initMulticast();
        }
        catch (error) {
            this.logger?.error(`[Device] initNetwork : ${parse_util_1.ParseUtil.errorToJson(error)}`);
            this.networkService = null;
        }
    }
    async initMulticast() {
        if (this.networkService && this.configService) {
            this.logger?.debug(`[Device] initMulticast --------------------------`);
            this.server = dgram.createSocket({ type: 'udp4', reuseAddr: true });
            this.server.on('message', (msg, rinfo) => {
                try {
                    const parser = new xml2js.Parser({
                        explicitArray: false,
                        tagNameProcessors: [xml2js.processors.stripPrefix],
                    });
                    parser.parseString(msg, (err, result) => {
                        if (err) {
                            console.log('Error parsing XML:', err);
                            return;
                        }
                        if (result['Envelope'] &&
                            result['Envelope']['Body'] &&
                            result['Envelope']['Header'] &&
                            result['Envelope']['Header']['MessageID']) {
                            if (result['Envelope']['Body']['Probe'] && JSON.stringify(result['Envelope']['Body']['Probe']['Types']).includes('Device')) {
                                this.logger?.debug(`[Device] Probe Message Read : ${rinfo.address}`);
                                this.responseProbe(result, rinfo);
                            }
                        }
                    });
                }
                catch (error) {
                    console.error(error);
                }
            });
            this.server.bind(this.PORT, '0.0.0.0', () => {
                this.server.setMulticastLoopback(false);
                this.server.addMembership(this.MULTICAST_ADDRESS);
                this.logger?.info(`[Device] ONVIF listening on ${this.MULTICAST_ADDRESS}:${this.PORT}`);
                this.hello();
            });
        }
    }
    async hello() {
        let helloMsg = template_1.DeviceWSDLTemplate[template_1.DeviceWSDL.HELLO];
        const messageId = url_util_1.UrlUtil.generateUUID();
        helloMsg = helloMsg.replace('__MESSAGE_ID__', messageId);
        helloMsg = helloMsg.replace('__ADDRESS__', this.CONFIG.Serial);
        helloMsg = helloMsg.replace('__INSTANCE_ID__', this.instanceId);
        helloMsg = helloMsg.replace('__MESSAGE_NUMBER__', (++this.messageNum).toString());
        const xaddrs = wsdl_util_1.WsdlUtil.getXaddrs('device_service', (0, os_1.networkInterfaces)());
        helloMsg = helloMsg.replace('__XADDRS__', xaddrs);
        this.logger?.info(`[Device] Hello: Serial(${this.CONFIG.Serial}) MessageID(${messageId}), Xaddrs(${xaddrs})`);
        this.server.send(helloMsg, 0, helloMsg.length, this.PORT, this.MULTICAST_ADDRESS, (err) => {
            if (err) {
                this.logger?.error(`[Device] Hello: ${parse_util_1.ParseUtil.errorToJson(err)}`);
            }
        });
    }
    async responseProbe(message, rinfo) {
        let probeMatchMsg = template_1.DeviceWSDLTemplate[template_1.DeviceWSDL.ProbeMatches];
        const messageId = url_util_1.UrlUtil.generateUUID();
        probeMatchMsg = probeMatchMsg.replace('__MESSAGE_ID__', messageId);
        const relatesTo = message['Envelope']['Header']['MessageID'];
        probeMatchMsg = probeMatchMsg.replace('__RELATES_TO__', relatesTo);
        probeMatchMsg = probeMatchMsg.replace('__INSTANCE_ID__', this.instanceId);
        probeMatchMsg = probeMatchMsg.replace('__MESSAGE_NUMBER__', (++this.messageNum).toString());
        probeMatchMsg = probeMatchMsg.replace('__ADDRESS__', this.CONFIG.Serial);
        const deviceXaddrs = wsdl_util_1.WsdlUtil.getXaddrs('device_service', (0, os_1.networkInterfaces)());
        probeMatchMsg = probeMatchMsg.replace('__DEVICE_XADDRS__', deviceXaddrs);
        this.logger?.info(`[Device] ProbeMatches : Serial(${this.CONFIG.Serial}), MessageID(${messageId}), RelatesTo(${relatesTo}), Xaddrs(${deviceXaddrs})`);
        const messageBuffer = Buffer.from(probeMatchMsg, 'utf-8');
        this.server.send(messageBuffer, 0, messageBuffer.length, rinfo.port, rinfo.address, (err) => {
            if (err)
                console.log('Error sending response:', err);
        });
    }
    async responseSystemDateAndTime() {
        return new Promise(async (resolve, reject) => {
            try {
                let query = template_1.DeviceWSDLTemplate[template_1.DeviceWSDL.DateAndTime];
                const nowTime = new Date();
                query = query.replace('__YEAR_UTC__', nowTime.getUTCFullYear().toString());
                query = query.replace('__MONTH_UTC__', (nowTime.getUTCMonth() + 1).toString());
                query = query.replace('__DAY_UTC__', nowTime.getUTCDate().toString());
                query = query.replace('__HOUR_UTC__', nowTime.getUTCHours().toString());
                query = query.replace('__MINUTE_UTC__', nowTime.getUTCMinutes().toString());
                query = query.replace('__SECOND_UTC__', nowTime.getUTCSeconds().toString());
                query = query.replace('__TIMEZONE__', 'KoreaStandardTime-9');
                query = query.replace('__YEAR__', date_util_1.DateUtil.formatTimeYearKST(nowTime));
                query = query.replace('__MONTH__', date_util_1.DateUtil.formatTimeMonthKST(nowTime));
                query = query.replace('__DAY__', date_util_1.DateUtil.formatTimeDayKST(nowTime));
                query = query.replace('__HOUR__', date_util_1.DateUtil.formatTimeHourKST(nowTime));
                query = query.replace('__MINUTE__', date_util_1.DateUtil.formatTimeMinuteKST(nowTime));
                query = query.replace('__SECOND__', date_util_1.DateUtil.formatTimeSecondKST(nowTime));
                this.logger?.debug(`[Device] GetSystemDateAndTimeResponse`);
                resolve(Buffer.from(query, 'utf-8'));
            }
            catch (error) {
                this.logger?.error(`[Device] GetSystemDateAndTimeResponse : ${parse_util_1.ParseUtil.errorToJson(error)}`);
                reject();
            }
        });
    }
    async setSystemDateAndTime() {
        throw new Error('미구현된 기능입니다.');
    }
    async responseCapabilities(_ip) {
        return new Promise(async (resolve, reject) => {
            try {
                let query = template_1.DeviceWSDLTemplate[template_1.DeviceWSDL.Capabilities];
                query = query.replace('__DEVICE_SERVICE__', wsdl_util_1.WsdlUtil.getXaddrs('device_service', (0, os_1.networkInterfaces)()));
                query = query.replace('__MEDIA_SERVICE__', wsdl_util_1.WsdlUtil.getXaddrs('media_service', (0, os_1.networkInterfaces)()));
                query = query.replace('__EVENTS_SERVICE__', wsdl_util_1.WsdlUtil.getXaddrs('events_service', (0, os_1.networkInterfaces)()));
                query = query.replace('__PTZ_SERVICE__', wsdl_util_1.WsdlUtil.getXaddrs('ptz_service', (0, os_1.networkInterfaces)()));
                query = query.replace('__DEVICE_IO_SERVICE__', wsdl_util_1.WsdlUtil.getXaddrs('deviceio_service', (0, os_1.networkInterfaces)()));
                this.logger?.info(`[Device] GetCapabilitiesResponse`);
                resolve(Buffer.from(query, 'utf-8'));
            }
            catch (error) {
                this.logger?.error(`[Device] GetCapabilitiesResponse : ${parse_util_1.ParseUtil.errorToJson(error)}`);
                reject();
            }
        });
    }
    async responseDeviceInformation() {
        return new Promise(async (resolve, reject) => {
            try {
                let query = template_1.DeviceWSDLTemplate[template_1.DeviceWSDL.DeviceInformation];
                query = query.replace('__MANUFACTURER__', this.CONFIG.Manufacturer);
                query = query.replace('__MODEL__', this.CONFIG.Model);
                query = query.replace('__FIRMWARE__VERSION__', this.CONFIG.Version);
                query = query.replace('__SERIAL_NUMBER__', this.CONFIG.Serial);
                query = query.replace('__HARDWARE_ID__', this.CONFIG.HardwareID);
                this.logger?.debug(`[Device] GetDeviceInformationResponse`);
                resolve(Buffer.from(query, 'utf-8'));
            }
            catch (error) {
                this.logger?.error(`[Device] GetDeviceInformationResponse : ${parse_util_1.ParseUtil.errorToJson(error)}`);
                reject();
            }
        });
    }
    async responseScopes() {
        return new Promise(async (resolve, reject) => {
            try {
                let query = template_1.DeviceWSDLTemplate[template_1.DeviceWSDL.Scopes];
                let scopes_query = '';
                scopes_query += wsdl_util_1.WsdlUtil.getScopeQuery('onvif://www.onvif.org/type/video_encoder');
                scopes_query += wsdl_util_1.WsdlUtil.getScopeQuery('onvif://www.onvif.org/type/ptz');
                scopes_query += wsdl_util_1.WsdlUtil.getScopeQuery('onvif://www.onvif.org/type/Network_Video_Transmitter');
                scopes_query += wsdl_util_1.WsdlUtil.getScopeQuery('onvif://www.onvif.org/location/country/Korea');
                scopes_query += wsdl_util_1.WsdlUtil.getScopeQuery('onvif://www.onvif.org/name/' + this.CONFIG.Serial);
                scopes_query += wsdl_util_1.WsdlUtil.getScopeQuery('onvif://onvif://www.onvif.org/Profile/Streaming');
                query = query.replace('__SCOPES__', scopes_query);
                this.logger?.debug(`[Device] GetScopeResponse`);
                resolve(Buffer.from(query, 'utf-8'));
            }
            catch (error) {
                this.logger?.error(`[Device] GetScopeResponse : ${parse_util_1.ParseUtil.errorToJson(error)}`);
                reject();
            }
        });
    }
    async responseNetworkInterfaces(_ip) {
        return new Promise(async (resolve, reject) => {
            try {
                let query = template_1.DeviceWSDLTemplate[template_1.DeviceWSDL.NetworkInterfaces];
                if (this.currentWifi) {
                    query = query.replace('__NAME__', this.currentWifi.name);
                    query = query.replace('__HW_ADDRESS__', this.currentWifi.hwAddr);
                    query = query.replace('__IPV4__', this.currentWifi.address);
                    query = query.replace('__IPV4_DHCP__', this.currentWifi.address);
                    query = query.replace('__IS_DHCP__', this.currentWifi.dhcp ? 'true' : 'false');
                    query = query.replace(/__IPV4_SUBNET__/g, this.currentWifi.mask);
                }
                this.logger?.info(`[Device] NetworkInterfaces: ${query}`);
                resolve(Buffer.from(query, 'utf-8'));
            }
            catch (error) {
                this.logger?.error(`[Device] NetworkInterfaces : ${parse_util_1.ParseUtil.errorToJson(error)}`);
                reject();
            }
        });
    }
    async responseDNS(_ip) {
        return new Promise(async (resolve, reject) => {
            try {
                let query = template_1.DeviceWSDLTemplate[template_1.DeviceWSDL.DNS];
                if (this.currentWifi) {
                    let dns_query = '';
                    for (let i = 0; i < this.currentWifi.dns.length; i++) {
                        dns_query += `<DNS${i + 1}>${this.currentWifi.dns[i]}</DNS${i + 1}>` + '\n';
                    }
                    query = query.replace('__DNS__', dns_query);
                }
                this.logger?.debug(`[Device] GetDNSResponse`);
                resolve(Buffer.from(query, 'utf-8'));
            }
            catch (error) {
                this.logger?.error(`[Device] GetDNSResponse : ${parse_util_1.ParseUtil.errorToJson(error)}`);
                reject();
            }
        });
    }
    async responseNTP() {
        return new Promise(async (resolve, reject) => {
            try {
                const query = template_1.DeviceWSDLTemplate[template_1.DeviceWSDL.NTP];
                this.logger?.debug(`[Device] GETNTPResponse`);
                resolve(Buffer.from(query, 'utf-8'));
            }
            catch (error) {
                this.logger?.error(`[Device] GetNTPResponse : ${parse_util_1.ParseUtil.errorToJson(error)}`);
                reject();
            }
        });
    }
    async responseDefaultGateway(_ip) {
        return new Promise(async (resolve, reject) => {
            try {
                let query = template_1.DeviceWSDLTemplate[template_1.DeviceWSDL.DefaultGateway];
                if (this.currentWifi) {
                    query = query.replace('__GATEWAY__', this.currentWifi.gateway);
                }
                this.logger?.debug(`[Device] GetDefaultGatewayResponse`);
                resolve(Buffer.from(query, 'utf-8'));
            }
            catch (error) {
                this.logger?.error(`[Device] GetDefaultGatewayResponse : ${parse_util_1.ParseUtil.errorToJson(error)}`);
                reject();
            }
        });
    }
    async responseDiscoveryMode() {
        return new Promise(async (resolve, reject) => {
            try {
                const query = template_1.DeviceWSDLTemplate[template_1.DeviceWSDL.DeiscoveryMode];
                this.logger?.debug(`[Device] GetDiscoveryModeResponse`);
                resolve(Buffer.from(query, 'utf-8'));
            }
            catch (error) {
                this.logger?.error(`[Device] GetDiscoveryModeResponse : ${parse_util_1.ParseUtil.errorToJson(error)}`);
                reject();
            }
        });
    }
    async responseNetworkProtocols() {
        return new Promise(async (resolve, reject) => {
            try {
                const query = template_1.DeviceWSDLTemplate[template_1.DeviceWSDL.NetworkProtocols];
                this.logger?.debug(`[Device] GetNetworkProtocolsResponse`);
                resolve(Buffer.from(query, 'utf-8'));
            }
            catch (error) {
                this.logger?.error(`[Device] GetNetworkProtocolsResponse : ${parse_util_1.ParseUtil.errorToJson(error)}`);
                reject();
            }
        });
    }
    async responseHostname() {
        return new Promise(async (resolve, reject) => {
            try {
                let query = template_1.DeviceWSDLTemplate[template_1.DeviceWSDL.HostName];
                if (this.currentWifi) {
                    query = query.replace('__DHCP__', this.currentWifi.dhcp ? 'true' : 'false');
                    query = query.replace('__NAME__', (0, os_1.hostname)());
                }
                this.logger?.debug(`[Device] GetHostnameResponse`);
                resolve(Buffer.from(query, 'utf-8'));
            }
            catch (error) {
                this.logger?.error(`[Device] GetHostnameResponse : ${parse_util_1.ParseUtil.errorToJson(error)}`);
                reject();
            }
        });
    }
    async responseServices(_ip) {
        return new Promise(async (resolve, reject) => {
            try {
                let query = template_1.DeviceWSDLTemplate[template_1.DeviceWSDL.Services];
                query = query.replace('__DEVICE_SERVICE__', wsdl_util_1.WsdlUtil.getXaddrs('device_service', (0, os_1.networkInterfaces)()));
                query = query.replace('__MEDIA_SERVICE__', wsdl_util_1.WsdlUtil.getXaddrs('media_service', (0, os_1.networkInterfaces)()));
                query = query.replace('__PTZ_SERVICE__', wsdl_util_1.WsdlUtil.getXaddrs('ptz_service', (0, os_1.networkInterfaces)()));
                this.logger?.debug(`[Device] GetServicesResponse`);
                resolve(Buffer.from(query, 'utf-8'));
            }
            catch (error) {
                this.logger?.error(`[Device] GetServicesResponse : ${parse_util_1.ParseUtil.errorToJson(error)}`);
                reject();
            }
        });
    }
};
exports.OnvifDeviceService = OnvifDeviceService;
exports.OnvifDeviceService = OnvifDeviceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constant_1.NETWORK_SERVICE)),
    __param(1, (0, common_1.Inject)(constant_1.CONFIG_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _b : Object, typeof (_c = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _c : Object])
], OnvifDeviceService);


/***/ }),
/* 146 */
/***/ ((module) => {

module.exports = require("dgram");

/***/ }),
/* 147 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NetworkWSDLTemplate = exports.DeviceWSDLTemplate = exports.DeviceWSDL = void 0;
var DeviceWSDL;
(function (DeviceWSDL) {
    DeviceWSDL["HELLO"] = "hello";
    DeviceWSDL["ProbeMatches"] = "probematches";
    DeviceWSDL["Capabilities"] = "capabilities";
    DeviceWSDL["DateAndTime"] = "dateandtime";
    DeviceWSDL["DeviceInformation"] = "deviceinformation";
    DeviceWSDL["DeiscoveryMode"] = "discoverymode";
    DeviceWSDL["Scopes"] = "scopes";
    DeviceWSDL["Services"] = "services";
    DeviceWSDL["NetworkInterfaces"] = "networkinterfaces";
    DeviceWSDL["DefaultGateway"] = "defaultgateway";
    DeviceWSDL["DNS"] = "dns";
    DeviceWSDL["HostName"] = "hostname";
    DeviceWSDL["NetworkProtocols"] = "networkprotocols";
    DeviceWSDL["NTP"] = "ntp";
})(DeviceWSDL || (exports.DeviceWSDL = DeviceWSDL = {}));
exports.DeviceWSDLTemplate = {
    hello: `<soap:Envelope 
    xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
    xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing"
    xmlns:wsd="http://schemas.xmlsoap.org/ws/2005/04/discovery"
    xmlns:wsdp="http://schemas.xmlsoap.org/ws/2006/02/devprof"
    xmlns:tdn="http://www.onvif.org/ver10/network/wsdl"
>
    <soap:Header>
        <wsa:To>urn:schemas-xmlsoap-org:ws:2005:04:discovery</wsa:To>
        <wsa:Action>http://schemas.xmlsoap.org/ws/2005/04/discovery/Hello</wsa:Action>
        <wsa:MessageID>urn:uuid:__MESSAGE_ID__</wsa:MessageID>
        <wsa:ReplyTo>
            <wsa:Address>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:Address>
        </wsa:ReplyTo>
        <wsd:AppSequence InstanceId="__INSTANCE_ID__" MessageNumber="__MESSAGE_NUMBER__"></wsd:AppSequence>
    </soap:Header>
    <soap:Body>
        <wsd:Hello>
            <wsa:EndpointReference>
                <wsa:Address>urn:__ADDRESS__</wsa:Address>
            </wsa:EndpointReference>
            <wsd:Types>wsdp:Device tdn:NetworkVideoTransmitter</wsd:Types>
            <wsd:Scopes>onvif://www.onvif.org/name onvif://www.onvif.org/Profile/Streaming</wsd:Scopes>
            <wsd:XAddrs>__XADDRS__</wsd:XAddrs>
            <wsd:MetadataVersion>1</wsd:MetadataVersion>
        </wsd:Hello>
    </soap:Body>
</soap:Envelope>`,
    probematches: `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
    xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing"
    xmlns:d="http://schemas.xmlsoap.org/ws/2005/04/discovery"
    xmlns:tt="http://www.onvif.org/ver10/schema"
    xmlns:tds="http://www.onvif.org/ver10/device/wsdl"
    xmlns:trt="http://www.onvif.org/ver10/media/wsdl"
    xmlns:dn="http://www.onvif.org/ver10/network/wsdl">
    <soap:Header>
        <wsa:To>http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous</wsa:To>
        <wsa:Action>http://schemas.xmlsoap.org/ws/2005/04/discovery/ProbeMatches</wsa:Action>
        <wsa:MessageID>urn:uuid:__MESSAGE_ID__</wsa:MessageID>
        <wsa:RelatesTo>__RELATES_TO__</wsa:RelatesTo>
        <d:AppSequence InstanceId="__INSTANCE_ID__" MessageNumber="__MESSAGE_NUMBER__"></d:AppSequence>
    </soap:Header>
    <soap:Body>
        <d:ProbeMatches>
            <d:ProbeMatch>
                <wsa:EndpointReference>
                    <wsa:Address>urn:__ADDRESS__</wsa:Address>
                </wsa:EndpointReference>
                <d:Types>
                    tds:Device dn:NetworkVideoTransmitter
                </d:Types>
                <d:XAddrs>
                    __DEVICE_XADDRS__
                </d:XAddrs>
                <d:Scopes>onvif://www.onvif.org/type/NetworkVideoTransmitter</d:Scopes>
                <d:MetadataVersion>1</d:MetadataVersion>
            </d:ProbeMatch>
        </d:ProbeMatches>
    </soap:Body>
</soap:Envelope>`,
    capabilities: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
    xmlns:tds="http://www.onvif.org/ver10/device/wsdl"
    xmlns:tt="http://www.onvif.org/ver10/schema"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <soap:Body>
        <tds:GetCapabilitiesResponse>
            <tds:Capabilities xsi:type="tt:Capabilities">
                <tt:Analytics xsi:type="tt:AnalyticsCapabilities">
                </tt:Analytics>
                <tt:Device>
                    <tt:XAddr>__DEVICE_SERVICE__</tt:XAddr>
                </tt:Device>
                <tt:Media xsi:type="tt:MediaCapabilities">
                    <tt:XAddr>__MEDIA_SERVICE__</tt:XAddr>
                    <tt:StreamingCapabilities xsi:type="tt:RealTimeStreamingCapabilities">
                        <tt:RTPMulticast>false</tt:RTPMulticast>
                        <tt:RTP_TCP>true</tt:RTP_TCP>
                        <tt:RTP_RTSP_TCP>true</tt:RTP_RTSP_TCP>
                    </tt:StreamingCapabilities>
                </tt:Media>
                <tt:Event xsi:type="tt:EventCapabilities">
                    <tt:XAddr>__EVENTS_SERVICE__</tt:XAddr>
                </tt:Event>
                <tt:PTZ>
                    <tt:XAddr>__PTZ_SERVICE__</tt:XAddr>
                </tt:PTZ>
                <tt:DeviceIO>
                    <tt:XAddr>__DEVICE_IO_SERVICE__</tt:XAddr>
                </tt:DeviceIO>
            </tds:Capabilities>
        </tds:GetCapabilitiesResponse>
    </soap:Body>
</soap:Envelope>`,
    dateandtime: `<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope"
    xmlns:tt="http://www.onvif.org/ver10/schema"
    xmlns:tds="http://www.onvif.org/ver10/device/wsdl"
>
    <s:Body>
        <tds:GetSystemDateAndTimeResponse>
            <tds:SystemDateAndTime>
                <tt:UTCDateTime>
                    <tt:Date>
                        <tt:Year>__YEAR_UTC__</tt:Year>
                        <tt:Month>__MONTH_UTC__</tt:Month>
                        <tt:Day>__DAY_UTC__</tt:Day>
                    </tt:Date>
                    <tt:Time>
                        <tt:Hour>__HOUR_UTC__</tt:Hour>
                        <tt:Minute>__MINUTE_UTC__</tt:Minute>
                        <tt:Second>__SECOND_UTC__</tt:Second>
                    </tt:Time>
                </tt:UTCDateTime>
                <tt:LocalDateTime>
                    <tt:Date>
                        <tt:Year>__YEAR__</tt:Year>
                        <tt:Month>__MONTH__</tt:Month>
                        <tt:Day>__DAY__</tt:Day>
                    </tt:Date>
                    <tt:Time>
                        <tt:Hour>__HOUR__</tt:Hour>
                        <tt:Minute>__MINUTE__</tt:Minute>
                        <tt:Second>__SECOND__</tt:Second>
                    </tt:Time>
                </tt:LocalDateTime>
                <tt:TimeZone>
                    <tt:TZ>__TIMEZONE__</tt:TZ>
                </tt:TimeZone>
            </tds:SystemDateAndTime>
        </tds:GetSystemDateAndTimeResponse>
    </s:Body>
</s:Envelope>`,
    deviceinformation: `<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope">
    <s:Header/>
    <s:Body>
        <GetDeviceInformationResponse xmlns="http://www.onvif.org/ver10/device/wsdl">
            <Manufacturer>__MANUFACTURER__</Manufacturer>
            <Model>__MODEL__</Model>
            <FirmwareVersion>__FIRMWARE__VERSION__</FirmwareVersion>
            <SerialNumber>__SERIAL_NUMBER__</SerialNumber>
            <HardwareId>__HARDWARE_ID__</HardwareId>
        </GetDeviceInformationResponse>
    </s:Body>
</s:Envelope>`,
    discoverymode: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"  
               xmlns:tds="http://www.onvif.org/ver10/device/wsdl">
    <soap:Body>
        <tds:GetDiscoveryModeResponse>
            <tds:DiscoveryMode>Multicast</tds:DiscoveryMode>
        </tds:GetDiscoveryModeResponse>
    </soap:Body>
</soap:Envelope>`,
    scopes: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
    xmlns:tt="http://www.onvif.org/ver10/schema"
    xmlns:tds="http://www.onvif.org/ver10/device/wsdl">
  <soap:Body>
    <tds:GetScopesResponse>
      __SCOPES__
    </tds:GetScopesResponse>
  </soap:Body>
</soap:Envelope>`,
    services: `<?xml version="1.0" encoding="UTF-8"?>
<env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope"
xmlns:enc="http://www.w3.org/2003/05/soap-encoding"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xop="http://www.w3.org/2004/08/xop/include"
xmlns:tds="http://www.onvif.org/ver10/device/wsdl"
xmlns:tt="http://www.onvif.org/ver10/schema">
    <env:Header>
    </env:Header>
    <env:Body>
        <tds:GetServicesResponse>
            <tds:Service>
                <tds:Namespace>http://www.onvif.org/ver10/device/wsdl</tds:Namespace>
                <tds:XAddr>
                    __DEVICE_XADDRS__
                </tds:XAddr>
                <tds:Capabilities>
                    <tds:Capabilities>
                        <tds:Network IPFilter="false" ZeroConfiguration="true"
                        IPVersion6="false" DynDNS="false" Dot11Configuration="false"
                        HostnameFromDHCP="false" NTP="0" />
                        <tds:Security TLS1.0="false" TLS1.1="false" TLS1.2="false"
                        OnboardKeyGeneration="false" AccessPolicyConfig="false" DefaultAccessPolicy="false"
                        Dot1X="false" RemoteUserHandling="false" X.509Token="false" SAMLToken="false"
                        KerberosToken="false" UsernameToken="false" HttpDigest="false" RELToken="false" />
                        <tds:System DiscoveryResolve="true" DiscoveryBye="true"
                        RemoteDiscovery="false" SystemBackup="false" SystemLogging="false"
                        FirmwareUpgrade="true" HttpFirmwareUpgrade="false" HttpSystemBackup="false"
                        HttpSystemLogging="false" HttpSupportInformation="false" />
                        <tds:Misc AuxiliaryCommands="" />
                    </tds:Capabilities>
                </tds:Capabilities>
                <tds:Version>
                    <tt:Major>2</tt:Major>
                    <tt:Minor>20</tt:Minor>
                </tds:Version>
            </tds:Service>
            <tds:Media>
                <tds:Namespace>http://www.onvif.org/ver10/media/wsdl</tds:Namespace>
                <tds:XAddr>
                    __MEDIA_XADDRS__
                </tds:XAddr>
                <!-- <tds:Capabilities>
                    <trt:Capabilities xmlns:trt="http://www.onvif.org/ver10/media/wsdl"
                    SnapshotUri="true" Rotation="false">
                    <trt:ProfileCapabilities MaximumNumberOfProfiles="10" />
                    <trt:StreamingCapabilities RTPMulticast="true" RTP_TCP="false"
                    RTP_RTSP_TCP="true" NonAggregateControl="true" />
                    </trt:Capabilities>
                </tds:Capabilities> -->
                <tds:Version>
                    <tt:Major>2</tt:Major>
                    <tt:Minor>20</tt:Minor>
                </tds:Version>
            </tds:Media>
            <tds:PTZ>
                <tds:Namespace>http://www.onvif.org/ver20/ptz/wsdl</tds:Namespace>
                <tds:XAddr>
                    __PTZ_XADDRS__
                </tds:XAddr>
                <tds:Capabilities>
                    <tptz:Capabilities xmlns:tptz="http://www.onvif.org/ver20/ptz/wsdl"
                    EFlip="false" Reverse="false" />
                </tds:Capabilities>
                <tds:Version>
                    <tt:Major>2</tt:Major>
                    <tt:Minor>20</tt:Minor>
                </tds:Version>
            </tds:PTZ>
            <tds:Event>
                <tds:Namespace>http://www.onvif.org/ver10/events/wsdl</tds:Namespace>
                <tds:XAddr>
                    __EVENT_XADDRS__
                </tds:XAddr>
                <tds:Capabilities>
                    <tev:Capabilities xmlns:tev="http://www.onvif.org/ver10/events/wsdl"
                    WSSubscriptionPolicySupport="false" WSPullPointSupport="false"
                    WSPausableSubscription="false" />
                </tds:Capabilities>
                <tds:Version>
                    <tt:Major>2</tt:Major>
                    <tt:Minor>20</tt:Minor>
                </tds:Version>
            </tds:Event>
            <tds:Service>
                <tds:Namespace>http://www.onvif.org/ver20/imaging/wsdl</tds:Namespace>
                <tds:XAddr>
                    __IMAGING_XADDRS__
                </tds:XAddr>
                <tds:Capabilities>
                    <timg:Capabilities xmlns:timg="http://www.onvif.org/ver20/imaging/wsdl"
                    ImageStabilization="false" />
                </tds:Capabilities>
                <tds:Version>
                    <tt:Major>2</tt:Major>
                    <tt:Minor>20</tt:Minor>
                </tds:Version>
            </tds:Service>
            <tds:Service>
                <tds:Namespace>http://www.onvif.org/ver10/deviceIO/wsdl</tds:Namespace>
                <tds:XAddr>
                    __DEVICEIO_XADDRS__
                </tds:XAddr>
                <tds:Capabilities>
                    <tmd:Capabilities xmlns:tmd="http://www.onvif.org/ver10/deviceIO/wsdl"
                    VideoSources="1" VideoOutputs="0" AudioSources="1" AudioOutputs="1" RelayOutputs="0"
                    SerialPorts="0" DigitalInputs="0" />
                </tds:Capabilities>
                <tds:Version>
                    <tt:Major>2</tt:Major>
                    <tt:Minor>20</tt:Minor>
                </tds:Version>
            </tds:Service>
        </tds:GetServicesResponse>
    </env:Body>
</env:Envelope>`,
};
exports.NetworkWSDLTemplate = {
    defaultgateway: `<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope"
    xmlns:tt="http://www.onvif.org/ver10/schema"
    xmlns:tds="http://www.onvif.org/ver10/device/wsdl">
  <s:Header/>
  <s:Body>
    <tds:GetNetworkDefaultGatewayResponse >
      <tds:NetworkGateway>
        <tt:IPv4Address>__GATEWAY__</tt:IPv4Address>
      </tds:NetworkGateway>
    </tds:GetNetworkDefaultGatewayResponse>
  </s:Body>
</s:Envelope>`,
    dns: `<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope">
  <s:Header/>
  <s:Body>
    <GetDNSResponse xmlns="http://www.onvif.org/ver10/device/wsdl">
      <DNS>
        <FromDHCP>false</FromDHCP>
        <DNSManual>
          __DNS__
        </DNSManual>
      </DNS>
    </GetDNSResponse>
  </s:Body>
</s:Envelope>`,
    hostname: `<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope">
    <s:Body>
        <GetHostnameResponse xmlns="http://www.onvif.org/ver10/device/wsdl">
            <HostnameInformation>
                <FromDHCP>__DHCP__</FromDHCP>
                <Name>__NAME__</Name>
            </HostnameInformation>
        </GetHostnameResponse>
    </s:Body>
</s:Envelope>
`,
    networkinterfaces: `<soap:Envelope 
    xmlns:soap="http://www.w3.org/2003/05/soap-envelope"  
    xmlns:tt="http://www.onvif.org/ver10/schema"
    xmlns:tds="http://www.onvif.org/ver10/device/wsdl">
  <soap:Body>
    <tds:GetNetworkInterfacesResponse>
      <tds:NetworkInterfaces>
        <tt:Enabled>true</tt:Enabled>
        <tt:Info>
            <tt:Name>__NAME__</tt:Name>
            <tt:HwAddress>__HW_ADDRESS__</tt:HwAddress>
            <tt:MTU>1500</tt:MTU>
        </tt:Info>
        <tt:IPv4>
            <tt:Enabled>true</tt:Enabled>
            <tt:Config>
                <tt:Manual>
                    <tt:Address>__IPV4__</tt:Address>
                    <tt:PrefixLength>__IPV4_SUBNET__</tt:PrefixLength>
                </tt:Manual>
                <tt:FromDHCP>
                    <tt:Address>__IPV4_DHCP__</tt:Address>
                    <tt:PrefixLength>__IPV4_SUBNET__</tt:PrefixLength>
                </tt:FromDHCP>
                <tt:DHCP>__IS_DHCP__</tt:DHCP>
            </tt:Config>
        </tt:IPv4>
    </tds:NetworkInterfaces>
    </tds:GetNetworkInterfacesResponse>
  </soap:Body>
</soap:Envelope>
`,
    networkprotocols: `<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope">
  <s:Header/>
  <s:Body>
    <tds:GetNetworkProtocolsResponse xmlns:tds="http://www.onvif.org/ver10/device/wsdl">
      <tds:NetworkProtocols>
        <tds:NetworkProtocol>
          <tt:Protocol>TCP</tt:Protocol>
          <tt:Port>3005</tt:Port>
        </tds:NetworkProtocol>
    </tds:GetNetworkProtocolsResponse>
  </s:Body>
</s:Envelope>
`,
    ntp: `<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope"
    xmlns:tt="http://www.onvif.org/ver10/schema"
    xmlns:tds="http://www.onvif.org/ver10/device/wsdl">
  <s:Header/>
  <s:Body>
    <tds:GetNTPResponse >
      <tds:NTP>
        <tt:Enabled>false</tt:Enabled>
        <tt:NetworkTimeProtocol>
          <tt:Server>
            <tt:Address>time.example.com</tt:Address>
            <tt:Port>123</tt:Port>
          </tt:Server>
          <tt:UpdateInterval>3600</tt:UpdateInterval>
        </tt:NetworkTimeProtocol>
      </tds:NTP>
    </tds:GetNTPResponse>
  </s:Body>
</s:Envelope>
`,
};


/***/ }),
/* 148 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OnvifPtzService = void 0;
const parse_util_1 = __webpack_require__(53);
const template_1 = __webpack_require__(149);
const saveLog_service_1 = __webpack_require__(35);
const common_1 = __webpack_require__(33);
let OnvifPtzService = class OnvifPtzService {
    constructor(saveLogService) {
        this.saveLogService = saveLogService;
        this.logger = this.saveLogService.get('onvif');
    }
    async onModuleInit() {
        this.logger?.info(`[Ptz] OnvifPtzService initialized`);
    }
    async responsePtzMove(title) {
        return new Promise(async (resolve, reject) => {
            try {
                let query = template_1.PTZWSDLTemplate[template_1.PTZWSDL.Move];
                query = query.replace('__RESPONSE_TITLE__', title);
                resolve(Buffer.from(query, 'utf-8'));
            }
            catch (error) {
                this.logger?.error(`[Ptz] responsePTZContinousMove : ${parse_util_1.ParseUtil.errorToJson(error)}`);
                reject();
            }
        });
    }
    async responseSetPreset() {
        return new Promise(async (resolve, reject) => {
            try {
                const query = template_1.PTZWSDLTemplate[template_1.PTZWSDL.SetPreset];
                resolve(Buffer.from(query, 'utf-8'));
            }
            catch (error) {
                this.logger?.error(`[Ptz] responseSetPreset : ${parse_util_1.ParseUtil.errorToJson(error)}`);
                reject();
            }
        });
    }
};
exports.OnvifPtzService = OnvifPtzService;
exports.OnvifPtzService = OnvifPtzService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _a : Object])
], OnvifPtzService);


/***/ }),
/* 149 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PTZWSDLTemplate = exports.PTZWSDL = void 0;
var PTZWSDL;
(function (PTZWSDL) {
    PTZWSDL["Move"] = "move";
    PTZWSDL["SetPreset"] = "setpreset";
})(PTZWSDL || (exports.PTZWSDL = PTZWSDL = {}));
exports.PTZWSDLTemplate = {
    move: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://www.w3.org/2003/05/soap-envelope"
                   xmlns:ptz="http://www.onvif.org/ver20/ptz/wsdl">
  <SOAP-ENV:Header/>
  <SOAP-ENV:Body>
    __RESPONSE_TITLE__
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    setpreset: `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://www.w3.org/2003/05/soap-envelope"
                   xmlns:wsdl="http://www.onvif.org/ver20/ptz/wsdl">
  <SOAP-ENV:Header/>
  <SOAP-ENV:Body>
    <wsdl:SetPresetResponse>
      <wsdl:PresetToken>Preset_1</wsdl:PresetToken>
    </wsdl:SetPresetResponse>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
`,
};


/***/ }),
/* 150 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OnvifDeviceIOService = void 0;
class OnvifDeviceIOService {
}
exports.OnvifDeviceIOService = OnvifDeviceIOService;


/***/ }),
/* 151 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OnvifEventService = void 0;
class OnvifEventService {
}
exports.OnvifEventService = OnvifEventService;


/***/ }),
/* 152 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OnvifMqttController = void 0;
const common_1 = __webpack_require__(33);
const microservices_1 = __webpack_require__(3);
const onvif_device_service_1 = __webpack_require__(145);
const constant_1 = __webpack_require__(67);
let OnvifMqttController = class OnvifMqttController {
    constructor(mqttMicroservice, deviceService) {
        this.mqttMicroservice = mqttMicroservice;
        this.deviceService = deviceService;
        this.mqttMicroservice.emit('check-config', {});
        this.mqttMicroservice.emit('check-network', {});
    }
    async readyConfig() {
        this.deviceService.onReady();
    }
    async readyNetwork() {
        this.deviceService.initNetwork();
    }
};
exports.OnvifMqttController = OnvifMqttController;
__decorate([
    (0, microservices_1.EventPattern)('ready:config'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OnvifMqttController.prototype, "readyConfig", null);
__decorate([
    (0, microservices_1.EventPattern)('ready:network'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OnvifMqttController.prototype, "readyNetwork", null);
exports.OnvifMqttController = OnvifMqttController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)(constant_1.MQTT_BROKER)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object, typeof (_b = typeof onvif_device_service_1.OnvifDeviceService !== "undefined" && onvif_device_service_1.OnvifDeviceService) === "function" ? _b : Object])
], OnvifMqttController);


/***/ }),
/* 153 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OnvifPendingService = void 0;
const pending_util_1 = __webpack_require__(75);
const common_1 = __webpack_require__(33);
let OnvifPendingService = class OnvifPendingService extends pending_util_1.PendingResponseUtil {
};
exports.OnvifPendingService = OnvifPendingService;
exports.OnvifPendingService = OnvifPendingService = __decorate([
    (0, common_1.Injectable)()
], OnvifPendingService);


/***/ }),
/* 154 */
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),
/* 155 */
/***/ ((module) => {

module.exports = require("express-xml-bodyparser");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const config_1 = __webpack_require__(2);
const microservices_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const path_1 = __webpack_require__(31);
const map_module_1 = __webpack_require__(32);
const setting_module_1 = __webpack_require__(94);
const sound_module_1 = __webpack_require__(100);
const update_module_1 = __webpack_require__(110);
const network_module_1 = __webpack_require__(127);
const onvif_module_1 = __webpack_require__(138);
const bodyParser = __webpack_require__(154);
const xmlParser = __webpack_require__(155);
const common_2 = __webpack_require__(33);
async function bootstrap() {
    console.log('🚀 호스트 서버 시작...');
    const mapModule = await core_1.NestFactory.create(map_module_1.MapModule);
    const config = mapModule.get(config_1.ConfigService);
    mapModule.connectMicroservice({
        transport: microservices_1.Transport.GRPC,
        options: {
            package: common_1.MapMicroservice.protobufPackage,
            protoPath: (0, path_1.join)(process.cwd(), 'proto/map.proto'),
            url: config.getOrThrow('MAP_GRPC_URL'),
            maxReceiveMessageLength: 100 * 1024 * 1024,
            maxSendMessageLength: 100 * 1024 * 1024,
        },
    });
    mapModule.connectMicroservice({
        transport: microservices_1.Transport.MQTT,
        options: {
            url: config.getOrThrow('MQTT_URL'),
            clientId: 'microservice-map',
        },
    });
    await mapModule.init();
    await mapModule.startAllMicroservices();
    const settingModule = await core_1.NestFactory.create(setting_module_1.SettingModule);
    settingModule.connectMicroservice({
        transport: microservices_1.Transport.GRPC,
        options: {
            package: common_1.SettingMicroservice.protobufPackage,
            protoPath: (0, path_1.join)(process.cwd(), 'proto/setting.proto'),
            url: config.getOrThrow('SETTING_GRPC_URL'),
        },
    });
    settingModule.connectMicroservice({
        transport: microservices_1.Transport.MQTT,
        options: {
            url: config.getOrThrow('MQTT_URL'),
            clientId: 'microservice-setting',
        },
    });
    await settingModule.init();
    await settingModule.startAllMicroservices();
    const soundModule = await core_1.NestFactory.create(sound_module_1.SoundModule);
    soundModule.connectMicroservice({
        transport: microservices_1.Transport.GRPC,
        options: {
            package: common_1.SoundMicroservice.protobufPackage,
            protoPath: (0, path_1.join)(process.cwd(), 'proto/sound.proto'),
            url: config.getOrThrow('SOUND_GRPC_URL'),
        },
    });
    soundModule.connectMicroservice({
        transport: microservices_1.Transport.MQTT,
        options: {
            url: config.getOrThrow('MQTT_URL'),
            clientId: 'microservice-sound',
        },
    });
    await soundModule.init();
    await soundModule.startAllMicroservices();
    const updateModule = await core_1.NestFactory.create(update_module_1.UpdateModule);
    updateModule.connectMicroservice({
        transport: microservices_1.Transport.GRPC,
        options: {
            package: common_1.UpdateMicroservice.protobufPackage,
            protoPath: (0, path_1.join)(process.cwd(), 'proto/update.proto'),
            url: config.getOrThrow('UPDATE_GRPC_URL'),
        },
    });
    updateModule.connectMicroservice({
        transport: microservices_1.Transport.MQTT,
        options: {
            url: config.getOrThrow('MQTT_URL'),
            clientId: 'microservice-update',
        },
    });
    await updateModule.init();
    await updateModule.startAllMicroservices();
    const networkModule = await core_1.NestFactory.create(network_module_1.NetworkModule);
    networkModule.connectMicroservice({
        transport: microservices_1.Transport.GRPC,
        options: {
            package: common_1.NetworkMicroservice.protobufPackage,
            protoPath: (0, path_1.join)(process.cwd(), 'proto/network.proto'),
            url: config.getOrThrow('NETWORK_GRPC_URL'),
        },
    });
    networkModule.connectMicroservice({
        transport: microservices_1.Transport.MQTT,
        options: {
            url: config.getOrThrow('MQTT_URL'),
            clientId: 'microservice-network',
        },
    });
    await networkModule.init();
    await networkModule.startAllMicroservices();
    const onvifModule = await core_1.NestFactory.create(onvif_module_1.OnvifModule);
    onvifModule.use(bodyParser.json({ limit: '50mb' }));
    onvifModule.use(xmlParser());
    onvifModule.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    onvifModule.useGlobalPipes(new common_2.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    onvifModule.connectMicroservice({
        transport: microservices_1.Transport.MQTT,
        options: {
            url: process.env.MQTT_URL,
            clientId: 'gateway-rrs-onvif',
        },
    });
    await onvifModule.init();
    await onvifModule.startAllMicroservices();
    await onvifModule.listen(process.env.RRS_ONVIF_PORT, '0.0.0.0');
}
bootstrap().catch((error) => {
    console.error('❌ 호스트 서버 시작 실패:', error);
    process.exit(1);
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map