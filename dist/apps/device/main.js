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

module.exports = require("@nestjs/microservices");

/***/ }),
/* 3 */
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
__exportStar(__webpack_require__(4), exports);
__exportStar(__webpack_require__(26), exports);
__exportStar(__webpack_require__(29), exports);


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


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TestMicroservice = exports.TcpMicroservice = exports.UpdateMicroservice = exports.LogMicroservice = exports.CobotMicroservice = exports.SoundMicroservice = exports.SettingMicroservice = exports.TaskMicroservice = exports.OnvifMicroservice = exports.MapMicroservice = exports.NetworkMicroservice = exports.LocalizationMicroservice = exports.MoveMicroservice = exports.CodeMicroservice = exports.ControlMicroservice = exports.ConfigMicroservice = exports.RedisMicroservice = exports.AmrMicroservice = exports.AuthMicroservice = exports.UserMicroservice = void 0;
exports.UserMicroservice = __webpack_require__(6);
exports.AuthMicroservice = __webpack_require__(7);
exports.AmrMicroservice = __webpack_require__(8);
exports.RedisMicroservice = __webpack_require__(9);
exports.ConfigMicroservice = __webpack_require__(10);
exports.ControlMicroservice = __webpack_require__(11);
exports.CodeMicroservice = __webpack_require__(12);
exports.MoveMicroservice = __webpack_require__(13);
exports.LocalizationMicroservice = __webpack_require__(14);
exports.NetworkMicroservice = __webpack_require__(15);
exports.MapMicroservice = __webpack_require__(16);
exports.OnvifMicroservice = __webpack_require__(17);
exports.TaskMicroservice = __webpack_require__(18);
exports.SettingMicroservice = __webpack_require__(19);
exports.SoundMicroservice = __webpack_require__(20);
exports.CobotMicroservice = __webpack_require__(21);
exports.LogMicroservice = __webpack_require__(22);
exports.UpdateMicroservice = __webpack_require__(23);
exports.TcpMicroservice = __webpack_require__(24);
exports.TestMicroservice = __webpack_require__(25);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.USER_GRPC_SERVICE_NAME = exports.USER_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.UserGrpcServiceControllerMethods = UserGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(2);
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
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AUTH_GRPC_SERVICE_NAME = exports.AUTH_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.AuthGrpcServiceControllerMethods = AuthGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(2);
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
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AMR_GRPC_SERVICE_NAME = exports.AMR_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.AmrGrpcServiceControllerMethods = AmrGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(2);
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
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.REDIS_ROBOT_CACHE_GRPC_SERVICE_NAME = exports.REDIS_SOCKET_CACHE_GRPC_SERVICE_NAME = exports.REDIS_PACKAGE_NAME = exports.SocketType = exports.RobotType = exports.protobufPackage = void 0;
exports.RedisSocketCacheGrpcServiceControllerMethods = RedisSocketCacheGrpcServiceControllerMethods;
exports.RedisRobotCacheGrpcServiceControllerMethods = RedisRobotCacheGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(2);
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
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CONFIG_GRPC_SERVICE_NAME = exports.CONFIG_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.ConfigGrpcServiceControllerMethods = ConfigGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(2);
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
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CONTROL_GRPC_SERVICE_NAME = exports.CONTROL_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.ControlGrpcServiceControllerMethods = ControlGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(2);
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
            "resetSafetyFlag",
            "exAccessoryControl",
            "safetyIoControl",
            "setObsBox",
            "getObsBox",
            "detect",
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
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CODE_GRPC_SERVICE_NAME = exports.CODE_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.CodeGrpcServiceControllerMethods = CodeGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(2);
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
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MOVE_GRPC_SERVICE_NAME = exports.MOVE_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.MoveGrpcServiceControllerMethods = MoveGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(2);
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
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LOCALIZATION_GRPC_SERVICE_NAME = exports.LOCALIZATION_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.LocalizationGrpcServiceControllerMethods = LocalizationGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(2);
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
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NETWORK_GRPC_SERVICE_NAME = exports.NETWORK_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.NetworkGrpcServiceControllerMethods = NetworkGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(2);
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
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MAP_GRPC_SERVICE_NAME = exports.MAP_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.MapGrpcServiceControllerMethods = MapGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(2);
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
            "deleteMap",
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
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ONVIF_SERVICE_NAME = exports.ONVIF_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.OnvifServiceControllerMethods = OnvifServiceControllerMethods;
const microservices_1 = __webpack_require__(2);
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
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TASK_GRPC_SERVICE_NAME = exports.TASK_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.TaskGrpcServiceControllerMethods = TaskGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(2);
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
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SETTING_GRPC_SERVICE_NAME = exports.SETTING_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.SettingGrpcServiceControllerMethods = SettingGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(2);
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
            "getCameraInfo",
            "setCameraOrder",
            "getPduParam",
            "setPduParam",
            "getPduDriveParam",
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
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SOUND_GRPC_SERVICE_NAME = exports.SOUND_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.SoundGrpcServiceControllerMethods = SoundGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(2);
exports.protobufPackage = "sound";
exports.SOUND_PACKAGE_NAME = "sound";
function SoundGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["play", "stop", "list", "delete", "getPlaying", "add"];
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
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.COBOT_GRPC_SERVICE_NAME = exports.COBOT_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.CobotGrpcServiceControllerMethods = CobotGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(2);
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
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SEM_LOG_GRPC_SERVICE_NAME = exports.SERVICE_LOG_GRPC_SERVICE_NAME = exports.LOG_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.ServiceLogGrpcServiceControllerMethods = ServiceLogGrpcServiceControllerMethods;
exports.SEMLogGrpcServiceControllerMethods = SEMLogGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(2);
exports.protobufPackage = "log";
exports.LOG_PACKAGE_NAME = "log";
function ServiceLogGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["getServiceLog"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("ServiceLogGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("ServiceLogGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.SERVICE_LOG_GRPC_SERVICE_NAME = "ServiceLogGrpcService";
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
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UPDATE_GRPC_SERVICE_NAME = exports.UPDATE_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.UpdateGrpcServiceControllerMethods = UpdateGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(2);
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
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TCP_GRPC_SERVICE_NAME = exports.TCP_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.TcpGrpcServiceControllerMethods = TcpGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(2);
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
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TEST_GRPC_SERVICE_NAME = exports.TEST_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.TestGrpcServiceControllerMethods = TestGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(2);
exports.protobufPackage = "test";
exports.TEST_PACKAGE_NAME = "test";
function TestGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            "getTestRecordAll",
            "getTestRecord",
            "getTestResultRecent",
            "getTestResultbySubject",
            "checkTestRunning",
            "startTest",
            "stopTest",
            "createTestRecord",
            "updateTestRecord",
            "updateTestResult",
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("TestGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("TestGrpcService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.TEST_GRPC_SERVICE_NAME = "TestGrpcService";


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
__exportStar(__webpack_require__(54), exports);


/***/ }),
/* 30 */
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
const common_1 = __webpack_require__(31);
const winston_1 = __webpack_require__(32);
const DailyRotateFile = __webpack_require__(33);
const util_1 = __webpack_require__(34);
const chalk_1 = __webpack_require__(53);
const fs_1 = __webpack_require__(40);
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
        return `${levelColor(`[${levelText}] ${pid}  -`)} ${util_1.DateUtil.formatDateTimeKST(new Date(timestamp))}    ${levelColor(`LOG`)} ${chalk_1.default.yellow(`[${category}]`)} ${levelColor(`${logtext}`)}`;
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
        return `[${levelText}] ${pid}  - ${util_1.DateUtil.formatDateTimeKST(new Date(timestamp))}   LOG [${category}] ${logtext}`;
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
/* 31 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 32 */
/***/ ((module) => {

module.exports = require("winston");

/***/ }),
/* 33 */
/***/ ((module) => {

module.exports = require("winston-daily-rotate-file");

/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationUtil = exports.CryptoUtil = exports.ParseUtil = exports.FileUtil = exports.DateUtil = exports.UrlUtil = void 0;
var url_util_1 = __webpack_require__(35);
Object.defineProperty(exports, "UrlUtil", ({ enumerable: true, get: function () { return url_util_1.UrlUtil; } }));
var date_util_1 = __webpack_require__(37);
Object.defineProperty(exports, "DateUtil", ({ enumerable: true, get: function () { return date_util_1.DateUtil; } }));
var file_util_1 = __webpack_require__(39);
Object.defineProperty(exports, "FileUtil", ({ enumerable: true, get: function () { return file_util_1.FileUtil; } }));
var parse_util_1 = __webpack_require__(50);
Object.defineProperty(exports, "ParseUtil", ({ enumerable: true, get: function () { return parse_util_1.ParseUtil; } }));
var crypto_util_1 = __webpack_require__(51);
Object.defineProperty(exports, "CryptoUtil", ({ enumerable: true, get: function () { return crypto_util_1.CryptoUtil; } }));
var validation_util_1 = __webpack_require__(52);
Object.defineProperty(exports, "ValidationUtil", ({ enumerable: true, get: function () { return validation_util_1.ValidationUtil; } }));


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UrlUtil = void 0;
const uuid_1 = __webpack_require__(36);
class UrlUtil {
    static generateUUID() {
        return (0, uuid_1.v4)();
    }
}
exports.UrlUtil = UrlUtil;


/***/ }),
/* 36 */
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DateUtil = void 0;
const date_fns_1 = __webpack_require__(38);
class DateUtil {
    static nowKST() {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-CA', {
            timeZone: 'Asia/Seoul',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        });
        const parts = formatter.formatToParts(now);
        const get = (type) => parts.find((p) => p.type === type)?.value;
        return new Date(Number(get('year')), Number(get('month')) - 1, Number(get('day')), Number(get('hour')), Number(get('minute')), Number(get('second')));
    }
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
        return `${obj.year}-${obj.month}-${obj.day}`;
    }
    static formatDateTimeKST(date) {
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
/* 38 */
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileUtil = void 0;
const fs = __webpack_require__(40);
const path = __webpack_require__(41);
const unzipper = __webpack_require__(42);
const il = __webpack_require__(43);
const uuid_1 = __webpack_require__(36);
const archiver_1 = __webpack_require__(44);
const csv = __webpack_require__(45);
const zlib_1 = __webpack_require__(46);
const common_1 = __webpack_require__(3);
const rpc_code_exception_1 = __webpack_require__(47);
const constant_1 = __webpack_require__(48);
const microservices_1 = __webpack_require__(2);
const path_1 = __webpack_require__(41);
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
            console.log('path : ', path);
            console.log('dirname(path) : ', (0, path_1.dirname)(path));
            fs.mkdirSync((0, path_1.dirname)(path), { recursive: true });
            fs.writeFileSync(path, csvData);
            return;
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            console.error(`[File] saveCSV : ${(0, common_1.errorToJson)(error)}`);
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
/* 40 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 41 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 42 */
/***/ ((module) => {

module.exports = require("unzipper");

/***/ }),
/* 43 */
/***/ ((module) => {

module.exports = require("iconv-lite");

/***/ }),
/* 44 */
/***/ ((module) => {

module.exports = require("archiver");

/***/ }),
/* 45 */
/***/ ((module) => {

module.exports = require("csv");

/***/ }),
/* 46 */
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RpcCodeException = void 0;
const microservices_1 = __webpack_require__(2);
class RpcCodeException extends microservices_1.RpcException {
    constructor(details, statusCode) {
        super({ details: details, code: statusCode });
        this.statusCode = statusCode;
    }
}
exports.RpcCodeException = RpcCodeException;


/***/ }),
/* 48 */
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
__exportStar(__webpack_require__(49), exports);


/***/ }),
/* 49 */
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
/* 50 */
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
    static chunkArray(arr, size) {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
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
/* 51 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CryptoUtil = void 0;
class CryptoUtil {
}
exports.CryptoUtil = CryptoUtil;


/***/ }),
/* 52 */
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
/* 53 */
/***/ ((module) => {

module.exports = require("chalk");

/***/ }),
/* 54 */
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
/* 55 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControlModule = void 0;
const common_1 = __webpack_require__(31);
const control_mongo_adapter_1 = __webpack_require__(56);
const control_grpc_controller_1 = __webpack_require__(61);
const mongoose_1 = __webpack_require__(57);
const control_socket_io_adapter_1 = __webpack_require__(69);
const microservices_1 = __webpack_require__(2);
const control_mqtt_controller_1 = __webpack_require__(79);
const control_entity_1 = __webpack_require__(59);
const control_service_1 = __webpack_require__(62);
const config_1 = __webpack_require__(60);
const constant_1 = __webpack_require__(70);
const control_pending_service_1 = __webpack_require__(77);
const log_module_1 = __webpack_require__(84);
let ControlModule = class ControlModule {
};
exports.ControlModule = ControlModule;
exports.ControlModule = ControlModule = __decorate([
    (0, common_1.Module)({
        imports: [
            log_module_1.LogModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: control_entity_1.Control.name,
                    schema: control_entity_1.ControlSchema,
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
        controllers: [control_mqtt_controller_1.ControlMqttController, control_grpc_controller_1.ControlGrpcInputController],
        providers: [
            control_service_1.ControlService,
            control_pending_service_1.ControlPendingService,
            {
                provide: 'DatabaseOutputPort',
                useClass: control_mongo_adapter_1.ControlMongoAdapter,
            },
            {
                provide: 'SlamnavOutputPort',
                useClass: control_socket_io_adapter_1.ControlSocketIoAdapter,
            },
            {
                provide: 'ExAccessoryOutputPort',
                useClass: control_socket_io_adapter_1.ControlSocketIoAdapter,
            },
        ],
        exports: [control_service_1.ControlService],
    })
], ControlModule);


/***/ }),
/* 56 */
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
exports.ControlMongoAdapter = void 0;
const mongoose_1 = __webpack_require__(57);
const mongoose_2 = __webpack_require__(58);
const control_entity_1 = __webpack_require__(59);
const common_1 = __webpack_require__(3);
const rpc_code_exception_1 = __webpack_require__(47);
const constant_1 = __webpack_require__(48);
const saveLog_service_1 = __webpack_require__(30);
const common_2 = __webpack_require__(31);
const config_1 = __webpack_require__(60);
const util_1 = __webpack_require__(34);
let ControlMongoAdapter = class ControlMongoAdapter {
    constructor(Repository, saveLogService, configService) {
        this.Repository = Repository;
        this.saveLogService = saveLogService;
        this.configService = configService;
        this.logger = this.saveLogService.get('control');
        this.setIndex(this.configService);
    }
    async setIndex(configService) {
        try {
            await this.Repository.collection.dropIndex('createdAt_1');
        }
        catch (error) {
            this.logger?.warn(`[Network] DB dropIndex: ${util_1.ParseUtil.errorToJson(error)}`);
        }
        try {
            if (configService.get('DB_TTL_ENABLE') === 'true') {
                const TTL_DAYS = Number(configService.get('DB_TTL_DAYS') ?? '100');
                this.Repository.collection.createIndex({ createdAt: 1 }, { expireAfterSeconds: TTL_DAYS * 24 * 60 * 60 });
                this.logger?.info(`[Control] setIndex EnabledTTL_DAYS: ${TTL_DAYS}`);
            }
        }
        catch (error) {
            this.logger?.error(`[Network] DB createIndex: ${util_1.ParseUtil.errorToJson(error)}`);
        }
    }
    async getNodebyId(id) {
        try {
            return await this.Repository.findById(id);
        }
        catch (error) {
            this.logger?.error(`[Control] DB getNodebyId : ${id} => ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 가져올 수 없습니다.', constant_1.GrpcCode.DBError);
        }
    }
    async save(model) {
        try {
            console.log('SAVE:', model);
            return await this.Repository.create(model);
        }
        catch (error) {
            this.logger?.error(`[Control] DB save : ${JSON.stringify(model)} => ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 저장할 수 없습니다.', constant_1.GrpcCode.DBError);
        }
    }
    async update(model) {
        try {
            console.log('UPDATE:', model);
            return await this.Repository.findByIdAndUpdate(model.id, model);
        }
        catch (error) {
            this.logger?.error(`[Control] DB update : ${JSON.stringify(model)} => ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 업데이트할 수 없습니다.', constant_1.GrpcCode.DBError);
        }
    }
};
exports.ControlMongoAdapter = ControlMongoAdapter;
exports.ControlMongoAdapter = ControlMongoAdapter = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(control_entity_1.Control.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object])
], ControlMongoAdapter);


/***/ }),
/* 57 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 58 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 59 */
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
exports.ControlSchema = exports.Control = void 0;
const mongoose_1 = __webpack_require__(57);
let Control = class Control {
};
exports.Control = Control;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Control.prototype, "command", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Control.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Control.prototype, "message", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Control.prototype, "result", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Control.prototype, "onoff", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Control.prototype, "mcuDio", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Control.prototype, "color", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Control.prototype, "frequency", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Control.prototype, "safetyField", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Control.prototype, "resetFlag", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Control.prototype, "position", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Control.prototype, "minX", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Control.prototype, "maxX", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Control.prototype, "minY", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Control.prototype, "maxY", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Control.prototype, "minZ", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Control.prototype, "maxZ", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Control.prototype, "mapRange", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Control.prototype, "cameraNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Control.prototype, "cameraSerial", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Control.prototype, "size", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Control.prototype, "pose", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Control.prototype, "tf", void 0);
exports.Control = Control = __decorate([
    (0, mongoose_1.Schema)()
], Control);
exports.ControlSchema = mongoose_1.SchemaFactory.createForClass(Control);
exports.ControlSchema.set('timestamps', true);


/***/ }),
/* 60 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 61 */
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
exports.ControlGrpcInputController = void 0;
const common_1 = __webpack_require__(3);
const common_2 = __webpack_require__(31);
const control_service_1 = __webpack_require__(62);
let ControlGrpcInputController = class ControlGrpcInputController {
    constructor(controlService) {
        this.controlService = controlService;
    }
    safetyIoControl(request, metadata) {
        return this.controlService.SafetyIoControl(request);
    }
    setSafetyField(request, metadata) {
        return this.controlService.setSafetyField(request);
    }
    getSafetyField(request, metadata) {
        return this.controlService.getSafetyField();
    }
    resetSafetyFlag(request, metadata) {
        return this.controlService.resetFlag(request);
    }
    workControl(request) {
        return this.controlService.WorkControl(request);
    }
    ledControl(request) {
        return this.controlService.LEDControl(request);
    }
    onOffControl(request) {
        return this.controlService.OnOffControl(request);
    }
    exAccessoryControl(request, metadata) {
        return this.controlService.ExAccessoryControl(request);
    }
    setObsBox(request, metadata) {
        return this.controlService.setObsBox(request);
    }
    getObsBox(request, metadata) {
        return this.controlService.getObsBox(request);
    }
    detect(request, metadata) {
        return this.controlService.detect(request);
    }
};
exports.ControlGrpcInputController = ControlGrpcInputController;
exports.ControlGrpcInputController = ControlGrpcInputController = __decorate([
    (0, common_2.Controller)(),
    common_1.ControlMicroservice.ControlGrpcServiceControllerMethods(),
    (0, common_2.UseInterceptors)(common_1.GrpcInterceptor),
    __metadata("design:paramtypes", [typeof (_a = typeof control_service_1.ControlService !== "undefined" && control_service_1.ControlService) === "function" ? _a : Object])
], ControlGrpcInputController);


/***/ }),
/* 62 */
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
exports.ControlService = void 0;
const microservices_1 = __webpack_require__(2);
const common_1 = __webpack_require__(31);
const control_database_output_port_1 = __webpack_require__(63);
const control_slamnav_output_port_1 = __webpack_require__(64);
const common_2 = __webpack_require__(3);
const control_domain_1 = __webpack_require__(65);
const rpc_code_exception_1 = __webpack_require__(47);
const constant_1 = __webpack_require__(48);
const control_ex_accessory_output_port_1 = __webpack_require__(67);
const saveLog_service_1 = __webpack_require__(30);
const detect_domain_1 = __webpack_require__(68);
let ControlService = class ControlService {
    constructor(databaseOutput, slamnavOutput, exAccessoryOutput, saveLogService) {
        this.databaseOutput = databaseOutput;
        this.slamnavOutput = slamnavOutput;
        this.exAccessoryOutput = exAccessoryOutput;
        this.saveLogService = saveLogService;
        this.slamnav_connection = false;
        this.exAccessory_connection = false;
        this.logger = this.saveLogService.get('control');
    }
    onModuleInit() {
        this.logger?.debug(`[Control] Module Init`);
    }
    async OnOffControl(request) {
        let command = null;
        let resp = null;
        try {
            this.logger?.info(`[Control] ================================`);
            this.logger?.info(`[Control] OnOffControl : ${JSON.stringify(request)}`);
            command = new control_domain_1.ControlModel();
            command.onOffControl(request);
            const result = await this.databaseOutput.save(command);
            command.assignId(result._id.toString());
            command.checkVariables();
            if (!this.slamnav_connection) {
                throw new rpc_code_exception_1.RpcCodeException('SLAMNAV가 연결되지 않았습니다', constant_1.GrpcCode.FailedPrecondition);
            }
            resp = await this.slamnavOutput.onoffControl(command);
            this.logger?.info(`[Control] OnOffControl Response : ${JSON.stringify(resp)}`);
            await command.checkResult(resp.result, resp.message);
            return { ...resp, command: request.command, onoff: request.onoff };
        }
        catch (error) {
            this.logger?.error(`[Control] OnOffControl : ${(0, common_2.errorToJson)(error)}`);
            if (command) {
                command.statusChange(resp?.result ?? control_domain_1.ControlStatus.fail);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('OnOff 명령을 수행할 수 없습니다', constant_1.GrpcCode.InternalError);
        }
        finally {
            if (command) {
                await this.databaseOutput.update(command);
            }
        }
    }
    async LEDControl(request) {
        let command = null;
        let resp = null;
        try {
            this.logger?.info(`[Control] ================================`);
            this.logger?.info(`[Control] LEDControl : ${JSON.stringify(request)}`);
            command = new control_domain_1.ControlModel();
            command.ledControl(request);
            const result = await this.databaseOutput.save(command);
            command.assignId(result._id.toString());
            command.checkVariables();
            if (!this.slamnav_connection) {
                throw new rpc_code_exception_1.RpcCodeException('SLAMNAV가 연결되지 않았습니다', constant_1.GrpcCode.FailedPrecondition);
            }
            resp = await this.slamnavOutput.onoffControl(command);
            this.logger?.info(`[Control] LEDControl Response : ${JSON.stringify(resp)}`);
            await command.checkResult(resp.result, resp.message);
            return { ...resp, command: request.command, onoff: request.onoff };
        }
        catch (error) {
            this.logger?.error(`[Control] LEDControl : ${(0, common_2.errorToJson)(error)}`);
            if (command) {
                command.statusChange(resp?.result ?? control_domain_1.ControlStatus.fail);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('LEDControl 명령을 수행할 수 없습니다', constant_1.GrpcCode.InternalError);
        }
        finally {
            if (command) {
                await this.databaseOutput.update(command);
            }
        }
    }
    async WorkControl(request) {
        let command = null;
        let resp = null;
        try {
            this.logger?.info(`[Control] WorkControl : ${JSON.stringify(request)}`);
            command = new control_domain_1.ControlModel();
            command.workControl(request);
            const result = await this.databaseOutput.save(command);
            command.assignId(result._id.toString());
            command.checkVariables();
            if (!this.slamnav_connection) {
                throw new rpc_code_exception_1.RpcCodeException('SLAMNAV가 연결되지 않았습니다', constant_1.GrpcCode.FailedPrecondition);
            }
            resp = await this.slamnavOutput.workControl(command);
            this.logger?.info(`[Control] WorkControl Response : ${JSON.stringify(resp)}`);
            await command.checkResult(resp.result, resp.message);
            return resp;
        }
        catch (error) {
            this.logger?.error(`[Control] WorkControl : ${(0, common_2.errorToJson)(error)}`);
            if (command) {
                command.statusChange(resp?.result ?? control_domain_1.ControlStatus.fail);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('WorkControl 명령을 수행할 수 없습니다', constant_1.GrpcCode.InternalError);
        }
        finally {
            if (command) {
                await this.databaseOutput.update(command);
            }
        }
    }
    async ExAccessoryControl(request) {
        let command = null;
        let resp = null;
        try {
            this.logger?.info(`[Control] ExAccessoryControl : ${JSON.stringify(request)}`);
            command = new control_domain_1.ControlModel();
            command.exAccessoryControl(request);
            const result = await this.databaseOutput.save(command);
            command.assignId(result._id.toString());
            command.checkVariables();
            if (!this.exAccessory_connection) {
                throw new rpc_code_exception_1.RpcCodeException('ExAccessory가 연결되지 않았습니다', constant_1.GrpcCode.FailedPrecondition);
            }
            resp = await this.exAccessoryOutput.exAccessoryControl(command);
            this.logger?.info(`[Control] ExAccessoryControl Response : ${JSON.stringify(resp)}`);
            await command.checkResult(resp.result ?? '', resp.message);
            return resp;
        }
        catch (error) {
            this.logger?.error(`[Control] ExAccessoryControl : ${(0, common_2.errorToJson)(error)}`);
            if (command) {
                command.statusChange(resp?.result ?? control_domain_1.ControlStatus.fail);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('ExAccessoryControl 명령을 수행할 수 없습니다', constant_1.GrpcCode.InternalError);
        }
        finally {
            if (command) {
                await this.databaseOutput.update(command);
            }
        }
    }
    async setObsBox(request) {
        let command = null;
        let resp = null;
        try {
            this.logger?.info(`[Control] setObsBox : ${JSON.stringify(request)}`);
            command = new control_domain_1.ControlModel();
            command.setObsBoxRequest(request);
            const result = await this.databaseOutput.save(command);
            command.assignId(result._id.toString());
            command.checkVariables();
            if (!this.slamnav_connection) {
                throw new rpc_code_exception_1.RpcCodeException('SLAMNAV가 연결되지 않았습니다', constant_1.GrpcCode.FailedPrecondition);
            }
            resp = await this.slamnavOutput.obsBoxControl(command);
            this.logger?.info(`[Control] setObsBox Response : ${JSON.stringify(resp)}`);
            await command.checkResult(resp.result, resp.message);
            return {
                ...resp,
                minX: request.minX,
                maxX: request.maxX,
                minY: request.minY,
                maxY: request.maxY,
                minZ: request.minZ,
                maxZ: request.maxZ,
                mapRange: request.mapRange,
            };
        }
        catch (error) {
            this.logger?.error(`[Control] setObsBox : ${(0, common_2.errorToJson)(error)}`);
            if (command) {
                command.statusChange(resp?.result ?? control_domain_1.ControlStatus.fail);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('setObsBox 명령을 수행할 수 없습니다', constant_1.GrpcCode.InternalError);
        }
        finally {
            if (command) {
                await this.databaseOutput.update(command);
            }
        }
    }
    async getObsBox(request) {
        let command = null;
        let resp = null;
        try {
            this.logger?.info(`[Control] getObsBox`);
            command = new control_domain_1.ControlModel();
            command.getObsBoxRequest();
            const result = await this.databaseOutput.save(command);
            command.assignId(result._id.toString());
            command.checkVariables();
            if (!this.slamnav_connection) {
                throw new rpc_code_exception_1.RpcCodeException('SLAMNAV가 연결되지 않았습니다', constant_1.GrpcCode.FailedPrecondition);
            }
            resp = await this.slamnavOutput.obsBoxControl(command);
            this.logger?.info(`[Control] getObsBox Response : ${JSON.stringify(resp)}`);
            await command.checkResult(resp.result, resp.message);
            return { ...resp };
        }
        catch (error) {
            this.logger?.error(`[Control] getObsBox : ${(0, common_2.errorToJson)(error)}`);
            if (command) {
                command.statusChange(resp?.result ?? control_domain_1.ControlStatus.fail);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('getObsBox 명령을 수행할 수 없습니다', constant_1.GrpcCode.InternalError);
        }
        finally {
            if (command) {
                await this.databaseOutput.update(command);
            }
        }
    }
    slamConnect() {
        this.slamnav_connection = true;
    }
    slamDisconnect() {
        this.slamnav_connection = false;
    }
    async detectResponse(resp) {
        try {
            this.logger?.info(`[Control] detectResponse : ${JSON.stringify(resp)}`);
            if (resp.id) {
                const dbmodel = await this.databaseOutput.getNodebyId(resp.id);
                if (dbmodel) {
                    const model = new control_domain_1.ControlModel(dbmodel);
                    model.assignId(dbmodel._id);
                    model.statusChange(resp.result);
                    model.message = resp.message;
                    model.result = resp.result;
                    await this.databaseOutput.update(model);
                    this.logger?.info(`[Control] update DB : ${model.id}, ${model.status}, ${model.result}, ${model.message}`);
                }
            }
        }
        catch (error) {
            this.logger?.error(`[Control] detectResponse : ${(0, common_2.errorToJson)(error)}`);
        }
    }
    async updateResponse(resp) {
        try {
            this.logger?.info(`[Control] update controlResponse : ${JSON.stringify(resp)}`);
            if (resp.id) {
                const dbmodel = await this.databaseOutput.getNodebyId(resp.id);
                if (dbmodel) {
                    const model = new control_domain_1.ControlModel(dbmodel);
                    model.assignId(dbmodel._id);
                    model.statusChange(resp.result);
                    model.message = resp.message;
                    model.result = resp.result;
                    await this.databaseOutput.update(model);
                    this.logger?.info(`[Control] update DB : ${model.id}, ${model.status}, ${model.result}, ${model.message}`);
                }
            }
        }
        catch (error) {
            this.logger?.error(`[Control] update controlResponse : ${(0, common_2.errorToJson)(error)}`);
        }
    }
    async SafetyIoControl(request) {
        let command = null;
        let resp = null;
        try {
            this.logger?.info(`[Control] SafetyIoControl : ${JSON.stringify(request)}`);
            command = new control_domain_1.ControlModel();
            command.safetyIoControl(request);
            const result = await this.databaseOutput.save(command);
            command.assignId(result._id.toString());
            command.checkVariables();
            if (!this.slamnav_connection) {
                throw new rpc_code_exception_1.RpcCodeException('SLAMNAV가 연결되지 않았습니다', constant_1.GrpcCode.FailedPrecondition);
            }
            resp = await this.slamnavOutput.safetyIoControl(command);
            this.logger?.info(`[Control] SafetyIoControl Response : ${JSON.stringify(resp)}`);
            await command.checkResult(resp.result, resp.message);
            return { ...resp, mcuDio: resp.mcuDio?.map((e) => ({ channel: e })), mcuDin: resp.mcuDin?.map((e) => ({ channel: e })) };
        }
        catch (error) {
            this.logger?.error(`[Control] SafetyIoControl : ${(0, common_2.errorToJson)(error)}`);
            if (command) {
                command.statusChange(resp?.result ?? control_domain_1.ControlStatus.fail);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('SafetyIoControl 명령을 수행할 수 없습니다', constant_1.GrpcCode.InternalError);
        }
        finally {
            if (command) {
                await this.databaseOutput.update(command);
            }
        }
    }
    async setSafetyField(request) {
        let command = null;
        let resp = null;
        try {
            this.logger?.info(`[Control] setSafetyField : ${JSON.stringify(request)}`);
            command = new control_domain_1.ControlModel();
            command.setSafetyFieldRequest(request);
            const result = await this.databaseOutput.save(command);
            command.assignId(result._id.toString());
            command.checkVariables();
            if (!this.slamnav_connection) {
                throw new rpc_code_exception_1.RpcCodeException('SLAMNAV가 연결되지 않았습니다', constant_1.GrpcCode.FailedPrecondition);
            }
            resp = await this.slamnavOutput.safetyFieldControl(command);
            this.logger?.info(`[Control] setSafetyField Response : ${JSON.stringify(resp)}`);
            await command.checkResult(resp.result, resp.message);
            return { ...resp, safetyField: request.safetyField };
        }
        catch (error) {
            this.logger?.error(`[Control] setSafetyField : ${(0, common_2.errorToJson)(error)}`);
            if (command) {
                command.statusChange(resp?.result ?? control_domain_1.ControlStatus.fail);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('setSafetyField 명령을 수행할 수 없습니다', constant_1.GrpcCode.InternalError);
        }
        finally {
            if (command) {
                await this.databaseOutput.update(command);
            }
        }
    }
    async getSafetyField() {
        let command = null;
        let resp = null;
        try {
            this.logger?.info(`[Control] getSafetyField `);
            command = new control_domain_1.ControlModel();
            command.getSafetyFieldRequest();
            const result = await this.databaseOutput.save(command);
            command.assignId(result._id.toString());
            command.checkVariables();
            if (!this.slamnav_connection) {
                throw new rpc_code_exception_1.RpcCodeException('SLAMNAV가 연결되지 않았습니다', constant_1.GrpcCode.FailedPrecondition);
            }
            resp = await this.slamnavOutput.safetyFieldControl(command);
            this.logger?.info(`[Control] getSafetyField Response : ${JSON.stringify(resp)}`);
            await command.checkResult(resp.result, resp.message);
            return { ...resp, safetyField: resp.safetyField };
        }
        catch (error) {
            this.logger?.error(`[Control] getSafetyField : ${(0, common_2.errorToJson)(error)}`);
            if (command) {
                command.statusChange(resp?.result ?? control_domain_1.ControlStatus.fail);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('getSafetyField 명령을 수행할 수 없습니다', constant_1.GrpcCode.InternalError);
        }
        finally {
            if (command) {
                await this.databaseOutput.update(command);
            }
        }
    }
    async resetFlag(request) {
        let command = null;
        let resp = null;
        try {
            this.logger?.info(`[Control] resetFlag`);
            command = new control_domain_1.ControlModel();
            command.resetSafetyField(request);
            const result = await this.databaseOutput.save(command);
            command.assignId(result._id.toString());
            command.checkVariables();
            if (!this.slamnav_connection) {
                throw new rpc_code_exception_1.RpcCodeException('SLAMNAV가 연결되지 않았습니다', constant_1.GrpcCode.FailedPrecondition);
            }
            resp = await this.slamnavOutput.resetFlagRequest(command);
            this.logger?.info(`[Control] resetFlag Response : ${JSON.stringify(resp)}`);
            await command.checkResult(resp.result, resp.message);
            return { ...resp, resetFlag: resp.resetFlag };
        }
        catch (error) {
            this.logger?.error(`[Control] resetFlag : ${(0, common_2.errorToJson)(error)}`);
            if (command) {
                command.statusChange(resp?.result ?? control_domain_1.ControlStatus.fail);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('resetFlag 명령을 수행할 수 없습니다', constant_1.GrpcCode.InternalError);
        }
        finally {
            if (command) {
                await this.databaseOutput.update(command);
            }
        }
    }
    async detect(request) {
        let command = null;
        let resp = null;
        try {
            this.logger?.info(`[Control] detect : ${JSON.stringify(request)}`);
            command = new detect_domain_1.DetectModel(request);
            const result = await this.databaseOutput.save(command);
            command.assignId(result._id.toString());
            command.checkVariables();
            if (!this.slamnav_connection) {
                throw new rpc_code_exception_1.RpcCodeException('SLAMNAV가 연결되지 않았습니다', constant_1.GrpcCode.FailedPrecondition);
            }
            resp = await this.slamnavOutput.detect(command);
            this.logger?.info(`[Control] detect Response : ${JSON.stringify(resp)}`);
            await command.checkResult(resp.result, resp.message);
            return {
                command: request.command,
                cameraNumber: request.cameraNumber,
                cameraSerial: request.cameraSerial ?? '',
                size: request.size,
                pose: resp.pose ?? [],
                tf: resp.tf ?? [],
                result: resp.result ?? '',
                message: resp.message ?? '',
            };
        }
        catch (error) {
            this.logger?.error(`[Control] detect : ${(0, common_2.errorToJson)(error)}`);
        }
    }
};
exports.ControlService = ControlService;
exports.ControlService = ControlService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DatabaseOutputPort')),
    __param(1, (0, common_1.Inject)('SlamnavOutputPort')),
    __param(2, (0, common_1.Inject)('ExAccessoryOutputPort')),
    __metadata("design:paramtypes", [typeof (_a = typeof control_database_output_port_1.ControlDatabaseOutputPort !== "undefined" && control_database_output_port_1.ControlDatabaseOutputPort) === "function" ? _a : Object, typeof (_b = typeof control_slamnav_output_port_1.ControlSlamnavOutputPort !== "undefined" && control_slamnav_output_port_1.ControlSlamnavOutputPort) === "function" ? _b : Object, typeof (_c = typeof control_ex_accessory_output_port_1.ControlExAccessoryOutputPort !== "undefined" && control_ex_accessory_output_port_1.ControlExAccessoryOutputPort) === "function" ? _c : Object, typeof (_d = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _d : Object])
], ControlService);


/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControlModel = exports.ControlStatus = void 0;
const rpc_code_exception_1 = __webpack_require__(47);
const constant_1 = __webpack_require__(48);
const control_type_1 = __webpack_require__(66);
var ControlStatus;
(function (ControlStatus) {
    ControlStatus["pending"] = "pending";
    ControlStatus["accept"] = "accept";
    ControlStatus["reject"] = "reject";
    ControlStatus["fail"] = "fail";
    ControlStatus["unknown"] = "unknown";
})(ControlStatus || (exports.ControlStatus = ControlStatus = {}));
class ControlModel {
    constructor(param) {
        this.status = ControlStatus.pending;
        this.command = param?.command;
        this.onoff = param?.onoff;
        this.frequency = param?.frequency;
        this.color = this.parseColor(param?.color);
        this.safetyField = param?.safetyField;
        this.resetFlag = param?.resetFlag;
        this.position = param?.position;
        this.mcuDio = param?.mcuDio;
        this.minX = param?.minX;
        this.maxX = param?.maxX;
        this.minY = param?.minY;
        this.maxY = param?.maxY;
        this.minZ = param?.minZ;
        this.maxZ = param?.maxZ;
        this.mapRange = param?.mapRange;
    }
    onOffControl(param) {
        this.status = ControlStatus.pending;
        this.command = param.command;
        this.onoff = param.onoff;
        this.frequency = param.frequency;
    }
    ledControl(param) {
        this.status = ControlStatus.pending;
        this.command = param.command;
        this.onoff = param.onoff;
        this.color = this.parseColor(param.color);
    }
    workControl(param) {
        this.status = ControlStatus.pending;
        this.command = param.command;
    }
    exAccessoryControl(param) {
        this.status = ControlStatus.pending;
        this.command = param.command;
        this.position = param.pose;
    }
    safetyIoControl(param) {
        this.status = ControlStatus.pending;
        this.command = param.command;
        this.mcuDio = param.mcuDio?.map((e) => e.channel);
    }
    setObsBoxRequest(param) {
        this.status = ControlStatus.pending;
        this.command = control_type_1.ControlCommand.setObsBox;
        this.minX = param.minX;
        this.maxX = param.maxX;
        this.minY = param.minY;
        this.maxY = param.maxY;
        this.minZ = param.minZ;
        this.maxZ = param.maxZ;
        this.mapRange = param.mapRange;
    }
    getObsBoxRequest() {
        this.status = ControlStatus.pending;
        this.command = control_type_1.ControlCommand.getObsBox;
    }
    setSafetyFieldRequest(param) {
        this.status = ControlStatus.pending;
        this.command = control_type_1.ControlCommand.setSafetyField;
        this.safetyField = param.safetyField;
    }
    getSafetyFieldRequest() {
        this.status = ControlStatus.pending;
        this.command = control_type_1.ControlCommand.getSafetyField;
    }
    resetSafetyField(param) {
        this.status = ControlStatus.pending;
        this.command = control_type_1.ControlCommand.resetSafetyFlag;
        this.resetFlag = param.resetFlag;
    }
    assignId(id) {
        this.id = id;
    }
    statusChange(status) {
        if (!this.id) {
            throw new rpc_code_exception_1.RpcCodeException('ID가 없습니다', constant_1.GrpcCode.InvalidArgument);
        }
        const moveStatus = this.parseStatus(status);
        this.status = moveStatus;
    }
    parseStatus(value) {
        if (Object.values(ControlStatus).includes(value)) {
            return value;
        }
        return ControlStatus.unknown;
    }
    async checkResult(result, message) {
        this.statusChange(result);
        this.message = message;
        this.result = result;
        if (result === 'reject' || result === 'fail') {
            throw new rpc_code_exception_1.RpcCodeException(message ?? '명령 수행 실패', constant_1.GrpcCode.Aborted);
        }
    }
    parseColor(value) {
        if (Object.values(control_type_1.LEDColor).includes(value)) {
            return value;
        }
        return control_type_1.LEDColor.unknown;
    }
    checkVariables() {
        switch (this.command) {
            case control_type_1.ControlCommand.dockStart:
            case control_type_1.ControlCommand.undockStart:
            case control_type_1.ControlCommand.chargeTrigger:
            case control_type_1.ControlCommand.randomSeq: {
                break;
            }
            case control_type_1.ControlCommand.ledControl: {
                if (this.onoff === undefined) {
                    throw new rpc_code_exception_1.RpcCodeException('onoff 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                if (this.onoff) {
                    if (this.color === undefined || this.color === control_type_1.LEDColor.unknown) {
                        throw new rpc_code_exception_1.RpcCodeException('color 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                    }
                }
                break;
            }
            case control_type_1.ControlCommand.lidarOnOff:
            case control_type_1.ControlCommand.pathOnOff: {
                if (this.onoff === undefined) {
                    throw new rpc_code_exception_1.RpcCodeException('onoff 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                if (this.onoff) {
                    if (this.frequency === undefined) {
                        throw new rpc_code_exception_1.RpcCodeException('frequency 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                    }
                    if (this.frequency < 0 || this.frequency > 1000) {
                        throw new rpc_code_exception_1.RpcCodeException('frequency 값이 범위를 초과합니다. frequency의 단위는 Hz입니다.', constant_1.GrpcCode.InvalidArgument);
                    }
                }
                break;
            }
            case control_type_1.ControlCommand.motorOnOff: {
                if (this.onoff === undefined) {
                    throw new rpc_code_exception_1.RpcCodeException('onoff 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                break;
            }
            case control_type_1.ControlCommand.footMove: {
                if (this.position === undefined) {
                    throw new rpc_code_exception_1.RpcCodeException('position 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                break;
            }
            case control_type_1.ControlCommand.footStop: {
                break;
            }
            case control_type_1.ControlCommand.getSafetyField: {
                break;
            }
            case control_type_1.ControlCommand.resetSafetyFlag: {
                if (this.resetFlag === undefined) {
                    throw new rpc_code_exception_1.RpcCodeException('resetFlag 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                break;
            }
            case control_type_1.ControlCommand.getDigitalIO: {
                break;
            }
            case control_type_1.ControlCommand.setDigitalIO: {
                if (this.mcuDio === undefined || this.mcuDio.length === 0) {
                    throw new rpc_code_exception_1.RpcCodeException('mcuDio 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                break;
            }
            case control_type_1.ControlCommand.setSafetyField: {
                if (this.safetyField === undefined) {
                    throw new rpc_code_exception_1.RpcCodeException('safetyField 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                break;
            }
            case control_type_1.ControlCommand.setObsBox: {
                if (this.minZ === undefined || this.maxZ === undefined) {
                    throw new rpc_code_exception_1.RpcCodeException('minZ, maxZ 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                if (this.minX === undefined || this.maxX === undefined) {
                    throw new rpc_code_exception_1.RpcCodeException('minX, maxX 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                if (this.minY === undefined || this.maxY === undefined) {
                    throw new rpc_code_exception_1.RpcCodeException('minY, maxY 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                if (this.mapRange === undefined) {
                    throw new rpc_code_exception_1.RpcCodeException('mapRange 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                break;
            }
            case control_type_1.ControlCommand.getObsBox: {
                break;
            }
            default: {
                throw new rpc_code_exception_1.RpcCodeException(`지원하지 않는 command 값입니다. (${this.command})`, constant_1.GrpcCode.InvalidArgument);
                break;
            }
        }
    }
}
exports.ControlModel = ControlModel;


/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LEDColor = exports.DetectCommand = exports.ControlCommand = void 0;
var ControlCommand;
(function (ControlCommand) {
    ControlCommand["dockStart"] = "dock";
    ControlCommand["undockStart"] = "undock";
    ControlCommand["chargeTrigger"] = "chargeTrigger";
    ControlCommand["randomSeq"] = "randomSeq";
    ControlCommand["ledControl"] = "ledControl";
    ControlCommand["lidarOnOff"] = "lidarOnOff";
    ControlCommand["pathOnOff"] = "pathOnOff";
    ControlCommand["motorOnOff"] = "motorOnOff";
    ControlCommand["safetyFieldControl"] = "safetyFieldControl";
    ControlCommand["setSafetyField"] = "setSafetyField";
    ControlCommand["getSafetyField"] = "getSafetyField";
    ControlCommand["resetSafetyFlag"] = "resetSafetyFlag";
    ControlCommand["footMove"] = "footMove";
    ControlCommand["footStop"] = "footStop";
    ControlCommand["getDigitalIO"] = "getDigitalIO";
    ControlCommand["setDigitalIO"] = "setDigitalIO";
    ControlCommand["setObsBox"] = "setObsBox";
    ControlCommand["getObsBox"] = "getObsBox";
})(ControlCommand || (exports.ControlCommand = ControlCommand = {}));
var DetectCommand;
(function (DetectCommand) {
    DetectCommand["aruco"] = "aruco";
})(DetectCommand || (exports.DetectCommand = DetectCommand = {}));
var LEDColor;
(function (LEDColor) {
    LEDColor["none"] = "none";
    LEDColor["red"] = "red";
    LEDColor["blue"] = "blue";
    LEDColor["white"] = "white";
    LEDColor["green"] = "green";
    LEDColor["magenta"] = "magenta";
    LEDColor["yellow"] = "yellow";
    LEDColor["red_blink"] = "red blink";
    LEDColor["blue_blink"] = "blue blink";
    LEDColor["white_blink"] = "white blink";
    LEDColor["green_blink"] = "green blink";
    LEDColor["magenta_blink"] = "magenta blink";
    LEDColor["yellow_blink"] = "yellow blink";
    LEDColor["unknown"] = "unknown";
})(LEDColor || (exports.LEDColor = LEDColor = {}));


/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DetectModel = void 0;
const rpc_code_exception_1 = __webpack_require__(47);
const constant_1 = __webpack_require__(48);
const control_type_1 = __webpack_require__(66);
const control_domain_1 = __webpack_require__(65);
class DetectModel {
    constructor(param) {
        this.status = control_domain_1.ControlStatus.pending;
        this.command = param?.command;
        this.cameraNumber = param?.cameraNumber;
        this.cameraSerial = param?.cameraSerial;
        this.size = param?.size;
    }
    assignId(id) {
        this.id = id;
    }
    statusChange(status) {
        if (!this.id) {
            throw new rpc_code_exception_1.RpcCodeException('ID가 없습니다', constant_1.GrpcCode.InvalidArgument);
        }
        const moveStatus = this.parseStatus(status);
        this.status = moveStatus;
    }
    parseStatus(value) {
        if (Object.values(control_domain_1.ControlStatus).includes(value)) {
            return value;
        }
        return control_domain_1.ControlStatus.unknown;
    }
    async checkResult(result, message) {
        this.statusChange(result);
        this.message = message;
        this.result = result;
        if (result === 'reject' || result === 'fail') {
            throw new rpc_code_exception_1.RpcCodeException(message ?? '명령 수행 실패', constant_1.GrpcCode.Aborted);
        }
    }
    checkVariables() {
        switch (this.command) {
            case control_type_1.DetectCommand.aruco: {
                if (this.size === undefined || this.size <= 0) {
                    throw new rpc_code_exception_1.RpcCodeException('size 값이 없거나 0보다 작습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                break;
            }
            default: {
                throw new rpc_code_exception_1.RpcCodeException(`지원하지 않는 command 값입니다. (${this.command})`, constant_1.GrpcCode.InvalidArgument);
                break;
            }
        }
    }
}
exports.DetectModel = DetectModel;


/***/ }),
/* 69 */
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
exports.ControlSocketIoAdapter = void 0;
const common_1 = __webpack_require__(31);
const microservices_1 = __webpack_require__(2);
const constant_1 = __webpack_require__(70);
const control_pending_service_1 = __webpack_require__(77);
const util_1 = __webpack_require__(34);
const rpc_code_exception_1 = __webpack_require__(47);
const constant_2 = __webpack_require__(48);
const saveLog_service_1 = __webpack_require__(30);
let ControlSocketIoAdapter = class ControlSocketIoAdapter {
    constructor(mqttMicroservice, pendingService, saveLogService) {
        this.mqttMicroservice = mqttMicroservice;
        this.pendingService = pendingService;
        this.saveLogService = saveLogService;
        this.logger = this.saveLogService.get('control');
    }
    async obsBoxControl(data) {
        this.logger?.debug(`[Control] Socket obsBoxControl : ${JSON.stringify(data)}`);
        const response = this.waitForResponse(data.id, 5000);
        this.mqttMicroservice.emit('controlRequest', data);
        const resp = await response;
        this.logger?.debug(`[Control] Socket obsBoxControl : ${JSON.stringify(resp)}`);
        return resp;
    }
    async exAccessoryControl(data) {
        this.logger?.debug(`[Control] Socket externalControl : ${JSON.stringify(data)}`);
        const response = this.waitForResponse(data.id, 5000);
        this.mqttMicroservice.emit('exAccessoryRequest', data);
        const resp = await response;
        this.logger?.debug(`[Control] Socket externalControl : ${JSON.stringify(resp)}`);
        return resp;
    }
    async safetyIoControl(data) {
        this.logger?.debug(`[Control] Socket safetyIoControl : ${JSON.stringify(data)}`);
        const response = this.waitForResponse(data.id, 5000);
        this.mqttMicroservice.emit('controlRequest', {
            id: data.id,
            command: data.command,
            mcuDio: data.mcuDio,
            time: util_1.DateUtil.getTimeString(),
        });
        const resp = await response;
        this.logger?.debug(`[Control] Socket safetyIoControl : ${JSON.stringify(resp)}`);
        return resp;
    }
    async onoffControl(data) {
        this.logger?.debug(`[Control] Socket onoffControl : ${JSON.stringify(data)}`);
        const response = this.waitForResponse(data.id, 5000);
        this.mqttMicroservice.emit('controlRequest', data);
        const resp = await response;
        this.logger?.debug(`[Control] Socket onoffControl : ${JSON.stringify(resp)}`);
        return resp;
    }
    async workControl(data) {
        this.logger?.debug(`[Control] Socket workControl : ${JSON.stringify(data)}`);
        const response = this.waitForResponse(data.id, 5000);
        this.mqttMicroservice.emit('controlRequest', data);
        const resp = await response;
        this.logger?.debug(`[Control] Socket workControl : ${JSON.stringify(resp)}`);
        return resp;
    }
    async ledControl(data) {
        this.logger?.debug(`[Control] Socket ledControl : ${JSON.stringify(data)}`);
        const response = this.waitForResponse(data.id, 5000);
        this.mqttMicroservice.emit('controlRequest', data);
        const resp = await response;
        this.logger?.debug(`[Control] Socket ledControl : ${JSON.stringify(resp)}`);
        return resp;
    }
    async safetyFieldControl(data) {
        this.logger?.debug(`[Control] Socket safetyFieldControl : ${JSON.stringify(data)}`);
        const response = this.waitForResponse(data.id, 5000);
        this.mqttMicroservice.emit('controlRequest', data);
        const resp = await response;
        this.logger?.debug(`[Control] Socket safetyFieldControl : ${JSON.stringify(resp)}`);
        return resp;
    }
    async resetFlagRequest(data) {
        this.logger?.debug(`[Control] Socket resetFlagRequest : ${JSON.stringify(data)}`);
        const response = this.waitForResponse(data.id, 5000);
        this.mqttMicroservice.emit('controlRequest', data);
        const resp = await response;
        this.logger?.debug(`[Control] Socket resetFlagRequest : ${JSON.stringify(resp)}`);
        return resp;
    }
    async detect(data) {
        this.logger?.debug(`[Control] Socket detect : ${JSON.stringify(data)}`);
        const response = this.waitForResponse(data.id, 50000);
        this.mqttMicroservice.emit('detectRequest', data);
        const resp = await response;
        this.logger?.debug(`[Control] Socket detectResponse : ${JSON.stringify(resp)}`);
        return resp;
    }
    async waitForResponse(id, timeoutMs) {
        return new Promise((resolve, reject) => {
            let timeout;
            if (timeoutMs) {
                timeout = setTimeout(() => {
                    this.pendingService.pendingResponses.delete(id);
                    this.logger?.error(`[Control] waitForResponse Timeout : ${id} , ${timeoutMs}`);
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
exports.ControlSocketIoAdapter = ControlSocketIoAdapter;
exports.ControlSocketIoAdapter = ControlSocketIoAdapter = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constant_1.MQTT_BROKER)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object, typeof (_b = typeof control_pending_service_1.ControlPendingService !== "undefined" && control_pending_service_1.ControlPendingService) === "function" ? _b : Object, typeof (_c = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _c : Object])
], ControlSocketIoAdapter);


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
exports.message = exports.environment = void 0;
__exportStar(__webpack_require__(71), exports);
__exportStar(__webpack_require__(72), exports);
exports.environment = __webpack_require__(73);
exports.message = __webpack_require__(75);


/***/ }),
/* 71 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MQTT_BROKER = exports.SERVICE_LOG_SERVICE = exports.SEMLOG_SERVICE = exports.TCP_SERVICE = exports.COBOT_SERVICE = exports.TASK_SERVICE = exports.SOUND_SERVICE = exports.UPDATE_SERVICE = exports.MAP_SERVICE = exports.TEST_SERVICE = exports.NETWORK_SERVICE = exports.LOCALIZATION_SERVICE = exports.MOVE_SERVICE = exports.CONTROL_SERVICE = exports.SETTING_SERVICE = exports.CONFIG_SERVICE = exports.CODE_SERVICE = exports.REDIS_SERVICE = exports.AMR_SERVICE = exports.GROUP_SERVICE = exports.ROLE_SERVICE = exports.PERMISSION_SERVICE = exports.USER_SERVICE = exports.AUTH_SERVICE = void 0;
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
exports.TEST_SERVICE = 'TEST_SERVICE';
exports.MAP_SERVICE = 'MAP_SERVICE';
exports.UPDATE_SERVICE = 'UPDATE_SERVICE';
exports.SOUND_SERVICE = 'SOUND_SERVICE';
exports.TASK_SERVICE = 'TASK_SERVICE';
exports.COBOT_SERVICE = 'COBOT_SERVICE';
exports.TCP_SERVICE = 'TCP_SERVICE';
exports.SEMLOG_SERVICE = 'SEMLOG_SERVICE';
exports.SERVICE_LOG_SERVICE = 'SERVICE_LOG_SERVICE';
exports.MQTT_BROKER = 'MQTT_BROKER';


/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 73 */
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
__exportStar(__webpack_require__(74), exports);


/***/ }),
/* 74 */
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
/* 75 */
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
__exportStar(__webpack_require__(76), exports);


/***/ }),
/* 76 */
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
/* 77 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControlPendingService = void 0;
const pending_util_1 = __webpack_require__(78);
const common_1 = __webpack_require__(31);
let ControlPendingService = class ControlPendingService extends pending_util_1.PendingResponseUtil {
};
exports.ControlPendingService = ControlPendingService;
exports.ControlPendingService = ControlPendingService = __decorate([
    (0, common_1.Injectable)()
], ControlPendingService);


/***/ }),
/* 78 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PendingResponseUtil = void 0;
const common_1 = __webpack_require__(31);
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
/* 79 */
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
exports.ControlMqttController = void 0;
const common_1 = __webpack_require__(31);
const microservices_1 = __webpack_require__(2);
const control_service_1 = __webpack_require__(62);
const common_2 = __webpack_require__(3);
const rpc_code_exception_1 = __webpack_require__(47);
const constant_1 = __webpack_require__(48);
const control_dto_1 = __webpack_require__(80);
const control_pending_service_1 = __webpack_require__(77);
const saveLog_service_1 = __webpack_require__(30);
let ControlMqttController = class ControlMqttController {
    constructor(controlService, pendingService, saveLogService) {
        this.controlService = controlService;
        this.pendingService = pendingService;
        this.saveLogService = saveLogService;
        this.logger = this.saveLogService.get('control');
    }
    getConnect() {
        this.logger?.info(`[Control] Slamnav Connected`);
        this.controlService.slamConnect();
    }
    getDisconnect() {
        this.logger?.warn(`[Control] Slamnav Disconnected`);
        this.controlService.slamDisconnect();
        this.pendingService.pendingResponses.forEach((resp) => {
            resp.reject(new rpc_code_exception_1.RpcCodeException('SLAMNAV 연결이 끊어졌습니다', constant_1.GrpcCode.InternalError));
        });
        this.pendingService.pendingResponses.clear();
    }
    getControlResponse(data) {
        try {
            const { id } = data;
            const listener = this.pendingService.pendingResponses.get(id);
            if (listener) {
                listener.received.push(data);
                listener.resolve(data);
                this.pendingService.pendingResponses.delete(id);
            }
            else {
                this.controlService.updateResponse(data);
            }
        }
        catch (error) {
            this.logger?.error(`[Control] getControlResponse : ${(0, common_2.errorToJson)(error)}`);
        }
    }
    getDetectResponse(data) {
        try {
            const { id } = data;
            const listener = this.pendingService.pendingResponses.get(id);
            if (listener) {
                if (data.result === 'accept') {
                    this.logger?.info(`[Control] getDetectResponse : Accepted`);
                    this.controlService.detectResponse(data);
                    return;
                }
                listener.received.push(data);
                listener.resolve(data);
                this.pendingService.pendingResponses.delete(id);
            }
            else {
                this.controlService.detectResponse(data);
            }
        }
        catch (error) {
            this.logger?.error(`[Control] getDetectResponse : ${(0, common_2.errorToJson)(error)}`);
        }
    }
};
exports.ControlMqttController = ControlMqttController;
__decorate([
    (0, microservices_1.EventPattern)('con:slamnav'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ControlMqttController.prototype, "getConnect", null);
__decorate([
    (0, microservices_1.EventPattern)('discon:slamnav'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ControlMqttController.prototype, "getDisconnect", null);
__decorate([
    (0, microservices_1.EventPattern)('controlResponse'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof control_dto_1.ControlResponseSlamnav !== "undefined" && control_dto_1.ControlResponseSlamnav) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], ControlMqttController.prototype, "getControlResponse", null);
__decorate([
    (0, microservices_1.EventPattern)('detectResponse'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof control_dto_1.DetectResponseSlamnav !== "undefined" && control_dto_1.DetectResponseSlamnav) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], ControlMqttController.prototype, "getDetectResponse", null);
exports.ControlMqttController = ControlMqttController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof control_service_1.ControlService !== "undefined" && control_service_1.ControlService) === "function" ? _a : Object, typeof (_b = typeof control_pending_service_1.ControlPendingService !== "undefined" && control_pending_service_1.ControlPendingService) === "function" ? _b : Object, typeof (_c = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _c : Object])
], ControlMqttController);


/***/ }),
/* 80 */
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
exports.ResetSafetyFlagResponseSlamnav = exports.ResetSafetyFlagResponseDto = exports.ResetSafetyFlagRequestSlamnav = exports.ResetSafetyFlagRequestDto = exports.SafetyFieldResponseDto = exports.SafetyFieldRequestDto = exports.WorkResponseDto = exports.WorkRequestDto = exports.OnOffResponseDto = exports.OnOffRequestDto = exports.LEDResponseDto = exports.LEDRequestDto = exports.ObsBoxResponseSlamnav = exports.ObsBoxRequestSlamnav = exports.ObsBoxResponseDto = exports.ObsBoxRequestDto = exports.DetectResponseSlamnav = exports.DetectResponseDto = exports.DetectRequestDto = exports.ControlResponseFrs = exports.ControlResponseSlamnav = exports.ControlRequestSlamnav = exports.ControlResponseDto = exports.ControlRequestDto = void 0;
const swagger_1 = __webpack_require__(81);
const class_transformer_1 = __webpack_require__(82);
const class_validator_1 = __webpack_require__(83);
const control_type_1 = __webpack_require__(66);
const util_1 = __webpack_require__(34);
var Description;
(function (Description) {
    Description["COMMAND"] = "\uC2E4\uD589\uD560 \uCEE8\uD2B8\uB864 \uBA85\uB839";
    Description["ID"] = "\uC694\uCCAD\uD55C \uBA85\uB839\uC758 ID\uAC12\uC785\uB2C8\uB2E4. request\uC2DC \uC790\uB3D9 \uC0DD\uC131\uB429\uB2C8\uB2E4.";
    Description["RESULT"] = "\uC694\uCCAD\uD55C \uBA85\uB839\uC5D0 \uB300\uD55C \uACB0\uACFC\uC785\uB2C8\uB2E4. accept, reject, success, fail \uB4F1 \uBA85\uB839\uC5D0 \uB300\uD574 \uB2E4\uC591\uD55C \uAC12\uC774 \uC874\uC7AC\uD569\uB2C8\uB2E4.";
    Description["MESSAGE"] = "result\uAC12\uC774 reject, fail \uC778 \uACBD\uC6B0 SLAMNAV\uC5D0\uC11C \uBCF4\uB0B4\uB294 \uBA54\uC2DC\uC9C0 \uC785\uB2C8\uB2E4.";
    Description["ONOFF"] = "LED \uC218\uB3D9\uC81C\uC5B4\uAE30\uB2A5\uC744 \uCF1C\uACE0 \uB04C\uC9C0\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4. \uAC12\uC774 true\uC77C \uB54C \uC694\uCCAD\uD558\uB294 color \uAC12\uC744 \uC0AC\uC6A9\uD558\uBA70, \uAC12\uC774 false\uC778 \uACBD\uC6B0\uC5D0\uB294 \uC218\uB3D9\uC81C\uC5B4\uAE30\uB2A5\uC744 \uB044\uACE0 color \uAC12\uB3C4 \uBB34\uC2DC\uD569\uB2C8\uB2E4. \uB85C\uBD07\uC758 \uC0C1\uD0DC\uC5D0 \uB530\uB77C \uC790\uB3D9\uC73C\uB85C LED \uC0C9\uC0C1\uC774 \uBCC0\uACBD\uB429\uB2C8\uB2E4.";
    Description["LED"] = "LED \uC0C9\uC0C1\uC744 \uC785\uB825\uD569\uB2C8\uB2E4. onoff\uAC00 true\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC0AC\uC6A9\uB429\uB2C8\uB2E4.";
    Description["FREQ"] = "\uAE30\uB2A5\uC5D0 \uB530\uB77C onoff\uAC00 true\uC77C \uC2DC, \uC804\uC1A1 \uC8FC\uAE30\uB97C \uC785\uB825\uD558\uC138\uC694. \uB2E8\uC704\uB294 Hz\uC774\uBA70 \uC608\uB85C lidarOnOff\uB97C on\uD558\uACE0 frequency\uB97C 10\uC73C\uB85C \uC785\uB825\uD558\uBA74 lidar \uB370\uC774\uD130\uB97C 10Hz\uB85C \uC1A1\uC2E0\uD569\uB2C8\uB2E4.";
    Description["ROBOT_SERIAL"] = "\uB85C\uBD07 \uC2DC\uB9AC\uC5BC \uBC88\uD638";
    Description["SAFETY_FIELD"] = "\uC548\uC804 \uD544\uB4DC \uC124\uC815. \uC0AC\uC804\uC5D0 \uC124\uC815\uB41C \uC548\uC804\uD544\uB4DC ID\uAC12\uC744 \uC785\uB825\uD558\uC138\uC694";
    Description["MCU_DIO"] = "MCU DIO \uC81C\uC5B4. 0\uBC88 \uD540\uBD80\uD130 7\uBC88 \uD540\uAE4C\uC9C0 \uC21C\uC11C\uB300\uB85C \uC785\uB825\uD558\uC138\uC694. \uC608\uB85C [0,0,0,0,0,1,1,1] \uC740 0\uBC88 \uD540\uBD80\uD130 7\uBC88 \uD540\uAE4C\uC9C0 \uC21C\uC11C\uB300\uB85C 0,0,0,0,0,1,1,1 \uB85C \uC81C\uC5B4\uD569\uB2C8\uB2E4.";
    Description["MCU_DIN"] = "MCU DIN \uC81C\uC5B4. 0\uBC88 \uD540\uBD80\uD130 7\uBC88 \uD540\uAE4C\uC9C0 \uC21C\uC11C\uB300\uB85C \uC785\uB825\uD558\uC138\uC694. \uC608\uB85C [0,0,0,0,0,1,1,1] \uC740 0\uBC88 \uD540\uBD80\uD130 7\uBC88 \uD540\uAE4C\uC9C0 \uC21C\uC11C\uB300\uB85C 0,0,0,0,0,1,1,1 \uB85C \uC81C\uC5B4\uD569\uB2C8\uB2E4.";
})(Description || (Description = {}));
class ControlRequestDto {
}
exports.ControlRequestDto = ControlRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.COMMAND,
        example: control_type_1.ControlCommand.dockStart,
        enum: control_type_1.ControlCommand,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ControlRequestDto.prototype, "command", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ONOFF,
        example: true,
        type: 'boolean',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], ControlRequestDto.prototype, "onoff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.LED,
        example: control_type_1.LEDColor.red,
        enum: control_type_1.LEDColor,
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], ControlRequestDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.FREQ,
        example: 10,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], ControlRequestDto.prototype, "frequency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MCU_DIO,
        example: [
            [0, 0, 0, 0, 0, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0],
        ],
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], ControlRequestDto.prototype, "mcuDio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.SAFETY_FIELD,
        example: '1',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ControlRequestDto.prototype, "safetyField", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '초기화할 세이프티 플래그'
    }),
    __metadata("design:type", String)
], ControlRequestDto.prototype, "resetFlag", void 0);
class ControlResponseDto extends ControlRequestDto {
}
exports.ControlResponseDto = ControlResponseDto;
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
], ControlResponseDto.prototype, "result", void 0);
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
], ControlResponseDto.prototype, "message", void 0);
class ControlRequestSlamnav extends ControlRequestDto {
}
exports.ControlRequestSlamnav = ControlRequestSlamnav;
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
], ControlRequestSlamnav.prototype, "id", void 0);
class ControlResponseSlamnav extends ControlResponseDto {
}
exports.ControlResponseSlamnav = ControlResponseSlamnav;
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
], ControlResponseSlamnav.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.RESULT,
        example: 'accept',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], ControlResponseSlamnav.prototype, "result", void 0);
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
], ControlResponseSlamnav.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MCU_DIN,
        example: [
            [0, 0, 0, 0, 0, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0],
        ],
        required: false,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], ControlResponseSlamnav.prototype, "mcuDin", void 0);
class ControlResponseFrs {
}
exports.ControlResponseFrs = ControlResponseFrs;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ROBOT_SERIAL,
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], ControlResponseFrs.prototype, "robotSerial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '컨트롤 명령 결과',
        type: ControlResponseDto,
        required: true,
    }),
    __metadata("design:type", ControlResponseDto)
], ControlResponseFrs.prototype, "data", void 0);
class DetectRequestDto {
}
exports.DetectRequestDto = DetectRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '감지 명령',
        example: 'aruco',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], DetectRequestDto.prototype, "command", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '카메라 번호',
        example: 0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], DetectRequestDto.prototype, "cameraNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '카메라 시리얼넘버',
        example: '1234567890',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DetectRequestDto.prototype, "cameraSerial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '아르코마커 사이즈',
        example: 0.1,
        required: true,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DetectRequestDto.prototype, "size", void 0);
class DetectResponseDto {
}
exports.DetectResponseDto = DetectResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '감지 명령',
        example: 'aruco',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], DetectResponseDto.prototype, "command", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '카메라 번호',
        example: 0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], DetectResponseDto.prototype, "cameraNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '카메라 시리얼넘버',
        example: '1234567890',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DetectResponseDto.prototype, "cameraSerial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '아르코마커 사이즈',
        example: 0.1,
        required: true,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DetectResponseDto.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '아르코마커의 pose(x,y,z,roll,pitch,yaw)',
        example: [[0.1, -2.3, 0.0, 0.0, 0.0, 0.0]],
        required: false,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], DetectResponseDto.prototype, "pose", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '아르코마커의 tf(4x4)',
        example: [[1.0, 0.0, 0.0, 0.1, 0.0, 1.0, 0.0, -2.3, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]],
        required: false,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], DetectResponseDto.prototype, "tf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '요청한 명령에 대한 결과입니다. accept, reject, success, fail 등 명령에 대해 다양한 값이 존재합니다.',
        example: 'accept',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DetectResponseDto.prototype, "result", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'result값이 reject, fail 인 경우 SLAMNAV에서 보내는 메시지 입니다.',
        example: '',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DetectResponseDto.prototype, "message", void 0);
class DetectResponseSlamnav {
}
exports.DetectResponseSlamnav = DetectResponseSlamnav;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ID,
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], DetectResponseSlamnav.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '감지 명령',
        example: 'aruco',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], DetectResponseSlamnav.prototype, "command", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '카메라 번호',
        example: 0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], DetectResponseSlamnav.prototype, "cameraNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '카메라 시리얼넘버',
        example: '1234567890',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DetectResponseSlamnav.prototype, "cameraSerial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '아르코마커 사이즈',
        example: 0.1,
        required: true,
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DetectResponseSlamnav.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '아르코마커의 pose(x,y,z,roll,pitch,yaw)',
        example: [0.1, -2.3, 0.0, 0.0, 0.0, 0.0],
        required: false,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], DetectResponseSlamnav.prototype, "pose", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '아르코마커의 tf(4x4)',
        example: [1.0, 0.0, 0.0, 0.1, 0.0, 1.0, 0.0, -2.3, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0],
        required: false,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], DetectResponseSlamnav.prototype, "tf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '요청한 명령에 대한 결과입니다. accept, reject, success, fail 등 명령에 대해 다양한 값이 존재합니다.',
        example: 'accept',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DetectResponseSlamnav.prototype, "result", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'result값이 reject, fail 인 경우 SLAMNAV에서 보내는 메시지 입니다.',
        example: '',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], DetectResponseSlamnav.prototype, "message", void 0);
class ObsBoxRequestDto {
}
exports.ObsBoxRequestDto = ObsBoxRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '장애물감지영역 최소 x값',
        example: 1.3,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ObsBoxRequestDto.prototype, "minX", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '장애물감지영역 최대 x값',
        example: 1.3,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ObsBoxRequestDto.prototype, "maxX", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '장애물감지영역 최소 y값',
        example: 1.3,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ObsBoxRequestDto.prototype, "minY", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '장애물감지영역 최대 y값',
        example: 1.3,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ObsBoxRequestDto.prototype, "maxY", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '장애물감지영역 최소 z값',
        example: 1.3,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ObsBoxRequestDto.prototype, "minZ", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '장애물감지영역 최대 z값 ',
        example: 1.3,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ObsBoxRequestDto.prototype, "maxZ", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '장애물감지영역 맵 범위',
        example: 1.3,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ObsBoxRequestDto.prototype, "mapRange", void 0);
class ObsBoxResponseDto extends ObsBoxRequestDto {
}
exports.ObsBoxResponseDto = ObsBoxResponseDto;
class ObsBoxRequestSlamnav extends ObsBoxRequestDto {
}
exports.ObsBoxRequestSlamnav = ObsBoxRequestSlamnav;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ID,
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], ObsBoxRequestSlamnav.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '장애물감지영역 설정 명령',
        example: control_type_1.ControlCommand.setObsBox,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ObsBoxRequestSlamnav.prototype, "command", void 0);
class ObsBoxResponseSlamnav extends ObsBoxRequestSlamnav {
}
exports.ObsBoxResponseSlamnav = ObsBoxResponseSlamnav;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.RESULT,
        example: 'accept',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], ObsBoxResponseSlamnav.prototype, "result", void 0);
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
], ObsBoxResponseSlamnav.prototype, "message", void 0);
class LEDRequestDto {
}
exports.LEDRequestDto = LEDRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'LED 수동제어기능을 켜고 끌지를 결정합니다. 값이 true일 때 요청하는 color 값을 사용하며, 값이 false인 경우에는 수동제어기능을 끄고 color 값도 무시합니다. 로봇의 상태에 따라 자동으로 LED 색상이 변경됩니다.',
        example: true,
        type: 'boolean',
        required: true,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], LEDRequestDto.prototype, "onoff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'LED 색상을 입력합니다. onoff가 true일 경우에만 사용됩니다.',
        example: control_type_1.LEDColor.red,
        enum: control_type_1.LEDColor,
        required: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", typeof (_a = typeof control_type_1.LEDColor !== "undefined" && control_type_1.LEDColor) === "function" ? _a : Object)
], LEDRequestDto.prototype, "color", void 0);
class LEDResponseDto {
}
exports.LEDResponseDto = LEDResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'LED를 켰는지/껐는지 여부', example: true }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], LEDResponseDto.prototype, "onoff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'LED 색상', example: control_type_1.LEDColor.red, enum: control_type_1.LEDColor, required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LEDResponseDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '실행한 명령', example: 'ledControl' }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LEDResponseDto.prototype, "command", void 0);
class OnOffRequestDto {
}
exports.OnOffRequestDto = OnOffRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `OnOff 명령을 사용할 Command를 입력하세요. `,
        example: 'lidarOnOff',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], OnOffRequestDto.prototype, "command", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '기능을 켜고 끌지를 결정합니다.',
        example: true,
        required: true,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], OnOffRequestDto.prototype, "onoff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'pathOnOff 또는 lidarOnOff 명령의 onoff가 true일 시, 전송 주기를 입력하세요. 단위는 Hz이며 예로 lidarOnOff를 on하고 frequency를 10으로 입력하면 lidar 데이터를 10Hz로 송신합니다.',
        example: 10,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], OnOffRequestDto.prototype, "frequency", void 0);
class OnOffResponseDto {
}
exports.OnOffResponseDto = OnOffResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'OnOff 명령을 실행한 Command',
        example: 'lidarOnOff',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], OnOffResponseDto.prototype, "command", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '기능을 켰는지/껐는지 여부',
        example: true,
        required: true,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], OnOffResponseDto.prototype, "onoff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '주기(Hz). onoff가 true일 때만 의미 있음',
        example: 10,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], OnOffResponseDto.prototype, "frequency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '요청한 명령에 대한 결과입니다. accept, reject, success, fail 등 명령에 대해 다양한 값이 존재합니다.',
        example: 'accept',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], OnOffResponseDto.prototype, "result", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'result값이 reject, fail 인 경우 SLAMNAV에서 보내는 메시지 입니다.',
        example: '',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], OnOffResponseDto.prototype, "message", void 0);
class WorkRequestDto {
}
exports.WorkRequestDto = WorkRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '실행할 Command를 입력하세요. 현재 사용가능한 Command는 dock, undock, randomSeq가 있습니다.',
        example: 'dock',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], WorkRequestDto.prototype, "command", void 0);
class WorkResponseDto {
}
exports.WorkResponseDto = WorkResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '실행한 명령', example: 'dock' }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], WorkResponseDto.prototype, "command", void 0);
class SafetyFieldRequestDto {
}
exports.SafetyFieldRequestDto = SafetyFieldRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '세이프티 영역', example: '1' }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], SafetyFieldRequestDto.prototype, "safetyField", void 0);
class SafetyFieldResponseDto extends SafetyFieldRequestDto {
}
exports.SafetyFieldResponseDto = SafetyFieldResponseDto;
class ResetSafetyFlagRequestDto {
}
exports.ResetSafetyFlagRequestDto = ResetSafetyFlagRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: '리셋할 플래그 이름을 입력하세요.',
        example: 'bumper',
        enum: ['bumper', 'interlock', 'obstacle', 'operationStop'],
    }),
    __metadata("design:type", String)
], ResetSafetyFlagRequestDto.prototype, "resetFlag", void 0);
class ResetSafetyFlagRequestSlamnav extends ResetSafetyFlagRequestDto {
}
exports.ResetSafetyFlagRequestSlamnav = ResetSafetyFlagRequestSlamnav;
class ResetSafetyFlagResponseDto {
}
exports.ResetSafetyFlagResponseDto = ResetSafetyFlagResponseDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: '리셋할 플래그 이름을 입력하세요.',
        example: 'bumper',
        enum: ['bumper', 'interlock', 'obstacle', 'operationStop'],
    }),
    __metadata("design:type", String)
], ResetSafetyFlagResponseDto.prototype, "resetFlag", void 0);
class ResetSafetyFlagResponseSlamnav extends ResetSafetyFlagResponseDto {
}
exports.ResetSafetyFlagResponseSlamnav = ResetSafetyFlagResponseSlamnav;


/***/ }),
/* 81 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 82 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 83 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 84 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogModule = void 0;
const common_1 = __webpack_require__(31);
const saveLog_service_1 = __webpack_require__(30);
const cleanLog_service_1 = __webpack_require__(85);
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
/* 85 */
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
const common_1 = __webpack_require__(31);
const schedule_1 = __webpack_require__(86);
const path = __webpack_require__(41);
const fs_1 = __webpack_require__(40);
const util_1 = __webpack_require__(34);
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
        const now = new Date();
        const cutoff_date = new Date(now.getTime() - this.RETAIN_DAYS * 24 * 60 * 60 * 1000);
        const cutoff_date_string = util_1.DateUtil.formatDateKST(cutoff_date);
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                await this.cleanDir(fullPath);
                continue;
            }
            if (!entry.name.endsWith('.log') && !entry.name.endsWith('.log.gz')) {
                continue;
            }
            const file_name = entry.name.split('.')[0];
            if (file_name < cutoff_date_string) {
                this.logger?.info(`[Log] 파일 비교: ${file_name} < ${cutoff_date_string}`);
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
/* 86 */
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

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
exports.LocalizationModule = void 0;
const common_1 = __webpack_require__(31);
const mongoose_1 = __webpack_require__(57);
const localization_entity_1 = __webpack_require__(88);
const localization_grpc_controller_1 = __webpack_require__(89);
const localization_service_1 = __webpack_require__(90);
const localization_mongo_adapter_1 = __webpack_require__(95);
const localization_socketio_adapter_1 = __webpack_require__(96);
const microservices_1 = __webpack_require__(2);
const localization_mqtt_controller_1 = __webpack_require__(98);
const config_1 = __webpack_require__(60);
const constant_1 = __webpack_require__(70);
const localization_pending_service_1 = __webpack_require__(97);
const log_module_1 = __webpack_require__(84);
let LocalizationModule = class LocalizationModule {
};
exports.LocalizationModule = LocalizationModule;
exports.LocalizationModule = LocalizationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            log_module_1.LogModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: localization_entity_1.Localization.name,
                    schema: localization_entity_1.LocalizationSchema,
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
        controllers: [localization_mqtt_controller_1.LocalizationMqttInputController, localization_grpc_controller_1.LocalizationGrpcInputController],
        providers: [
            localization_service_1.LocalizationService,
            localization_pending_service_1.LocalizationPendingResponseService,
            {
                provide: 'DatabaseOutputPort',
                useClass: localization_mongo_adapter_1.LocalizationMongoAdapter,
            },
            {
                provide: 'SlamnavOutputPort',
                useClass: localization_socketio_adapter_1.LocalizationSocketIOAdapter,
            },
        ],
    })
], LocalizationModule);


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
exports.LocalizationSchema = exports.Localization = void 0;
const mongoose_1 = __webpack_require__(57);
let Localization = class Localization {
};
exports.Localization = Localization;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Localization.prototype, "command", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Localization.prototype, "message", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Localization.prototype, "result", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Localization.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Localization.prototype, "x", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Localization.prototype, "y", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Localization.prototype, "z", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Localization.prototype, "rz", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Localization.prototype, "randomSeed", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Localization.prototype, "_id", void 0);
exports.Localization = Localization = __decorate([
    (0, mongoose_1.Schema)()
], Localization);
exports.LocalizationSchema = mongoose_1.SchemaFactory.createForClass(Localization);
exports.LocalizationSchema.set('timestamps', true);


/***/ }),
/* 89 */
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
exports.LocalizationGrpcInputController = void 0;
const common_1 = __webpack_require__(3);
const localization_service_1 = __webpack_require__(90);
const common_2 = __webpack_require__(31);
const rpc_code_exception_1 = __webpack_require__(47);
const constant_1 = __webpack_require__(48);
let LocalizationGrpcInputController = class LocalizationGrpcInputController {
    constructor(localizationService) {
        this.localizationService = localizationService;
    }
    init(request, metadata) {
        return this.localizationService.Localization(request);
    }
    autoInit(request, metadata) {
        return this.localizationService.Localization(request);
    }
    randomInit(request, metadata) {
        return this.localizationService.Localization(request);
    }
    semiAutoInit(request, metadata) {
        return this.localizationService.Localization(request);
    }
    start(request, metadata) {
        throw new rpc_code_exception_1.RpcCodeException('테스트입니다', constant_1.GrpcCode.Unimplemented);
        return this.localizationService.Localization(request);
    }
    stop(request, metadata) {
        return this.localizationService.Localization(request);
    }
};
exports.LocalizationGrpcInputController = LocalizationGrpcInputController;
exports.LocalizationGrpcInputController = LocalizationGrpcInputController = __decorate([
    (0, common_2.Controller)(),
    common_1.LocalizationMicroservice.LocalizationGrpcServiceControllerMethods(),
    (0, common_2.UseInterceptors)(common_1.GrpcInterceptor),
    __metadata("design:paramtypes", [typeof (_a = typeof localization_service_1.LocalizationService !== "undefined" && localization_service_1.LocalizationService) === "function" ? _a : Object])
], LocalizationGrpcInputController);


/***/ }),
/* 90 */
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
exports.LocalizationService = void 0;
const common_1 = __webpack_require__(31);
const localization_database_output_port_1 = __webpack_require__(91);
const localization_slamnav_output_port_1 = __webpack_require__(92);
const common_2 = __webpack_require__(3);
const localization_domain_1 = __webpack_require__(93);
const constant_1 = __webpack_require__(70);
const microservices_1 = __webpack_require__(2);
const rpc_code_exception_1 = __webpack_require__(47);
const constant_2 = __webpack_require__(48);
const saveLog_service_1 = __webpack_require__(30);
let LocalizationService = class LocalizationService {
    constructor(databaseOutput, slamnavOutput, mqttMicroservice, saveLogService) {
        this.databaseOutput = databaseOutput;
        this.slamnavOutput = slamnavOutput;
        this.mqttMicroservice = mqttMicroservice;
        this.saveLogService = saveLogService;
        this.slamnav_connection = false;
        this.logger = this.saveLogService.get('localization');
        console.log('LocalizationService Constructed');
    }
    async Localization(initDto) {
        let command = null;
        let resp = null;
        try {
            this.logger?.info(`[Localization] Localization ================================`);
            command = new localization_domain_1.LocalizationModel(initDto);
            this.logger?.info(`[Localization] Localization Command :  ${JSON.stringify(command)}`);
            command.checkVariables();
            const result = await this.databaseOutput.save(command);
            this.logger?.info(`[Localization] Localization DB Save : ${result._id.toString()}`);
            command.assignId(result._id.toString());
            if (!this.slamnav_connection) {
                throw new rpc_code_exception_1.RpcCodeException('SLAMNAV가 연결되지 않았습니다', constant_2.GrpcCode.FailedPrecondition);
            }
            resp = await this.slamnavOutput.localizationRequest(command);
            this.logger?.info(`[Localization] Localization Response : ${JSON.stringify(resp)}`);
            await command.checkResult(resp.result, resp.message);
            return resp;
        }
        catch (error) {
            this.logger?.error(`[Localization] Localization : ${(0, common_2.errorToJson)(error)}`);
            if (command) {
                command.statusChange(resp?.result ?? localization_domain_1.LocalizationStatus.fail);
            }
            if (error instanceof rpc_code_exception_1.RpcCodeException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('Localization 명령을 수행할 수 없습니다', constant_2.GrpcCode.InternalError);
        }
        finally {
            if (command) {
                await this.databaseOutput.update(command);
            }
        }
    }
    slamConnect() {
        this.slamnav_connection = true;
    }
    slamDisconnect() {
        this.logger?.warn(`[Localization] slam Disconnected`);
        this.slamnav_connection = false;
    }
    async updateResponse(resp) {
        this.logger?.info(`[Localization] update Response : ${JSON.stringify(resp)}`);
        if (resp.id) {
            const dbmodel = await this.databaseOutput.getNodebyId(resp.id);
            if (dbmodel) {
                const model = new localization_domain_1.LocalizationModel(dbmodel);
                model.assignId(dbmodel._id);
                model.statusChange(resp.result);
                model.message = resp.message;
                model.result = resp.result;
                await this.databaseOutput.update(model);
                this.logger?.info(`[Localization] update Response : ${model.id}, ${model.status}, ${model.result}, ${model.message}`);
            }
        }
    }
};
exports.LocalizationService = LocalizationService;
exports.LocalizationService = LocalizationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DatabaseOutputPort')),
    __param(1, (0, common_1.Inject)('SlamnavOutputPort')),
    __param(2, (0, common_1.Inject)(constant_1.MQTT_BROKER)),
    __metadata("design:paramtypes", [typeof (_a = typeof localization_database_output_port_1.LocalizationDatabaseOutputPort !== "undefined" && localization_database_output_port_1.LocalizationDatabaseOutputPort) === "function" ? _a : Object, typeof (_b = typeof localization_slamnav_output_port_1.LocalizationSlamnavOutputPort !== "undefined" && localization_slamnav_output_port_1.LocalizationSlamnavOutputPort) === "function" ? _b : Object, typeof (_c = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _c : Object, typeof (_d = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _d : Object])
], LocalizationService);


/***/ }),
/* 91 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 92 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 93 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalizationModel = exports.LocalizationStatus = void 0;
const rpc_code_exception_1 = __webpack_require__(47);
const constant_1 = __webpack_require__(48);
const localization_type_1 = __webpack_require__(94);
const util_1 = __webpack_require__(34);
const uuid_1 = __webpack_require__(36);
var LocalizationStatus;
(function (LocalizationStatus) {
    LocalizationStatus["pending"] = "pending";
    LocalizationStatus["accepted"] = "accept";
    LocalizationStatus["rejected"] = "reject";
    LocalizationStatus["good"] = "good";
    LocalizationStatus["fail"] = "fail";
    LocalizationStatus["unknown"] = "unknown";
})(LocalizationStatus || (exports.LocalizationStatus = LocalizationStatus = {}));
class LocalizationModel {
    constructor(param) {
        this.status = LocalizationStatus.pending;
        this.command = param.command;
        this.randomSeed = param.randomSeed;
        this.x = param.x;
        this.y = param.y;
        this.z = param.z;
        this.rz = param.rz;
        this.message = param.message;
        this.result = param.result;
        this.id = util_1.UrlUtil.generateUUID();
    }
    assignId(id) {
        this.id = id;
    }
    statusChange(status) {
        if (!this.id) {
            throw new rpc_code_exception_1.RpcCodeException('ID가 없습니다', constant_1.GrpcCode.InvalidArgument);
        }
        const parsestatus = this.parseStatus(status);
        this.status = parsestatus;
    }
    async checkResult(result, message) {
        this.statusChange(result);
        this.message = message;
        this.result = result;
        if (result === 'reject' || result === 'fail') {
            throw new rpc_code_exception_1.RpcCodeException(message ?? '명령 수행 실패', constant_1.GrpcCode.Aborted);
        }
    }
    checkVariables() {
        if (this.command === localization_type_1.LocalizationCommand.setInit) {
            if (this.x === undefined || this.y === undefined || this.z === undefined || this.rz === undefined) {
                throw new rpc_code_exception_1.RpcCodeException('init 값이 비어있습니다', constant_1.GrpcCode.InvalidArgument);
            }
        }
        else if (this.command === localization_type_1.LocalizationCommand.randomInit) {
            this.randomSeed = (0, uuid_1.v4)();
        }
    }
    parseStatus(value) {
        if (Object.values(LocalizationStatus).includes(value)) {
            return value;
        }
        return LocalizationStatus.unknown;
    }
}
exports.LocalizationModel = LocalizationModel;


/***/ }),
/* 94 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalizationCommand = void 0;
var LocalizationCommand;
(function (LocalizationCommand) {
    LocalizationCommand["setInit"] = "init";
    LocalizationCommand["semiAutoInit"] = "semiautoinit";
    LocalizationCommand["randomInit"] = "randominit";
    LocalizationCommand["autoInit"] = "autoinit";
    LocalizationCommand["start"] = "start";
    LocalizationCommand["stop"] = "stop";
})(LocalizationCommand || (exports.LocalizationCommand = LocalizationCommand = {}));


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalizationMongoAdapter = void 0;
const mongoose_1 = __webpack_require__(57);
const mongoose_2 = __webpack_require__(58);
const localization_entity_1 = __webpack_require__(88);
const saveLog_service_1 = __webpack_require__(30);
const util_1 = __webpack_require__(34);
const rpc_code_exception_1 = __webpack_require__(47);
const constant_1 = __webpack_require__(48);
const common_1 = __webpack_require__(31);
const config_1 = __webpack_require__(60);
let LocalizationMongoAdapter = class LocalizationMongoAdapter {
    constructor(Repository, saveLogService, configService) {
        this.Repository = Repository;
        this.saveLogService = saveLogService;
        this.configService = configService;
        this.logger = this.saveLogService.get('localization');
        this.setIndex(this.configService);
    }
    async setIndex(configService) {
        try {
            await this.Repository.collection.dropIndex('createdAt_1');
        }
        catch (error) {
            this.logger?.warn(`[Network] DB dropIndex: ${util_1.ParseUtil.errorToJson(error)}`);
        }
        try {
            if (configService.get('DB_TTL_ENABLE') === 'true') {
                const TTL_DAYS = Number(configService.get('DB_TTL_DAYS') ?? '100');
                this.Repository.collection.createIndex({ createdAt: 1 }, { expireAfterSeconds: TTL_DAYS * 24 * 60 * 60 });
                this.logger?.info(`[Localization] setIndex EnabledTTL_DAYS: ${TTL_DAYS}`);
            }
        }
        catch (error) {
            this.logger?.error(`[Network] DB createIndex: ${util_1.ParseUtil.errorToJson(error)}`);
        }
    }
    async getNodebyId(id) {
        try {
            return await this.Repository.findById(id).lean();
        }
        catch (error) {
            this.logger?.error(`[Localization] DB getNodebyId: ${util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 가져올 수 없습니다.', constant_1.GrpcCode.DBError);
        }
    }
    async save(model) {
        try {
            const _id = util_1.UrlUtil.generateUUID();
            return await this.Repository.create({ ...model, _id });
        }
        catch (error) {
            console.error(error);
            this.logger?.error(`[Localization] DB save: ${util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 저장할 수 없습니다.', constant_1.GrpcCode.DBError);
        }
    }
    async update(model) {
        return await this.Repository.findByIdAndUpdate(model.id, model).lean();
    }
};
exports.LocalizationMongoAdapter = LocalizationMongoAdapter;
exports.LocalizationMongoAdapter = LocalizationMongoAdapter = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(localization_entity_1.Localization.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object])
], LocalizationMongoAdapter);


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalizationSocketIOAdapter = void 0;
const common_1 = __webpack_require__(31);
const microservices_1 = __webpack_require__(2);
const constant_1 = __webpack_require__(70);
const localization_pending_service_1 = __webpack_require__(97);
const rpc_code_exception_1 = __webpack_require__(47);
const constant_2 = __webpack_require__(48);
const saveLog_service_1 = __webpack_require__(30);
let LocalizationSocketIOAdapter = class LocalizationSocketIOAdapter {
    constructor(mqttService, pendingService, saveLogService) {
        this.mqttService = mqttService;
        this.pendingService = pendingService;
        this.saveLogService = saveLogService;
        this.logger = this.saveLogService.get('localization');
    }
    async localizationRequest(data) {
        this.logger?.debug(`[Localization] localizationRequest : ${JSON.stringify(data)}`);
        const response = this.waitForResponse(data.id, 5000);
        this.mqttService.emit('localizationRequest', data);
        const resp = await response;
        this.logger?.debug(`[Localization] localizationResponse : ${JSON.stringify(resp)}`);
        return resp;
    }
    async waitForResponse(id, timeoutMs) {
        return new Promise((resolve, reject) => {
            let timeout;
            if (timeoutMs) {
                timeout = setTimeout(() => {
                    this.pendingService.pendingResponses.delete(id);
                    this.logger?.error(`[Localization] waitForResponse Timeout : ${id} , ${timeoutMs}`);
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
exports.LocalizationSocketIOAdapter = LocalizationSocketIOAdapter;
exports.LocalizationSocketIOAdapter = LocalizationSocketIOAdapter = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constant_1.MQTT_BROKER)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object, typeof (_b = typeof localization_pending_service_1.LocalizationPendingResponseService !== "undefined" && localization_pending_service_1.LocalizationPendingResponseService) === "function" ? _b : Object, typeof (_c = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _c : Object])
], LocalizationSocketIOAdapter);


/***/ }),
/* 97 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalizationPendingResponseService = void 0;
const pending_util_1 = __webpack_require__(78);
const common_1 = __webpack_require__(31);
let LocalizationPendingResponseService = class LocalizationPendingResponseService extends pending_util_1.PendingResponseUtil {
};
exports.LocalizationPendingResponseService = LocalizationPendingResponseService;
exports.LocalizationPendingResponseService = LocalizationPendingResponseService = __decorate([
    (0, common_1.Injectable)()
], LocalizationPendingResponseService);


/***/ }),
/* 98 */
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
exports.LocalizationMqttInputController = void 0;
const common_1 = __webpack_require__(31);
const microservices_1 = __webpack_require__(2);
const localization_service_1 = __webpack_require__(90);
const localization_pending_service_1 = __webpack_require__(97);
const rpc_code_exception_1 = __webpack_require__(47);
const constant_1 = __webpack_require__(48);
const common_2 = __webpack_require__(3);
const localization_dto_1 = __webpack_require__(99);
const saveLog_service_1 = __webpack_require__(30);
let LocalizationMqttInputController = class LocalizationMqttInputController {
    constructor(localizationService, pendingService, saveLogService) {
        this.localizationService = localizationService;
        this.pendingService = pendingService;
        this.saveLogService = saveLogService;
        this.logger = this.saveLogService.get('localization');
    }
    getConnect() {
        this.logger?.info(`[Localization] slam Connected`);
        this.localizationService.slamConnect();
    }
    getDisconnect() {
        this.logger?.warn(`[Localization] slam Disconnected`);
        this.localizationService.slamDisconnect();
        this.pendingService.pendingResponses.forEach((resp) => {
            resp.reject(new rpc_code_exception_1.RpcCodeException('SLAMNAV 연결이 끊어졌습니다', constant_1.GrpcCode.InternalError));
        });
        this.pendingService.pendingResponses.clear();
    }
    getLocalizationResponse(data) {
        try {
            const { id } = data;
            const listener = this.pendingService.pendingResponses.get(id);
            if (listener) {
                listener.received.push(data);
                listener.resolve(data);
                this.pendingService.pendingResponses.delete(id);
            }
            else {
                this.localizationService.updateResponse(data);
            }
        }
        catch (error) {
            this.logger?.error(`[Localization] getLocalizationResponse : ${(0, common_2.errorToJson)(error)}`);
        }
    }
};
exports.LocalizationMqttInputController = LocalizationMqttInputController;
__decorate([
    (0, microservices_1.EventPattern)('con:slamnav'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocalizationMqttInputController.prototype, "getConnect", null);
__decorate([
    (0, microservices_1.EventPattern)('discon:slamnav'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocalizationMqttInputController.prototype, "getDisconnect", null);
__decorate([
    (0, microservices_1.EventPattern)('localizationResponse'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof localization_dto_1.LocalizationResponseSlamnav !== "undefined" && localization_dto_1.LocalizationResponseSlamnav) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], LocalizationMqttInputController.prototype, "getLocalizationResponse", null);
exports.LocalizationMqttInputController = LocalizationMqttInputController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof localization_service_1.LocalizationService !== "undefined" && localization_service_1.LocalizationService) === "function" ? _a : Object, typeof (_b = typeof localization_pending_service_1.LocalizationPendingResponseService !== "undefined" && localization_pending_service_1.LocalizationPendingResponseService) === "function" ? _b : Object, typeof (_c = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _c : Object])
], LocalizationMqttInputController);


/***/ }),
/* 99 */
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
exports.LocalizationResponseFrs = exports.LocalizationResponseSlamnav = exports.LocalizationResponseDto = exports.LocalizationRequestSlamnav = exports.LocalizationRequestDto = void 0;
const class_validator_1 = __webpack_require__(83);
const class_transformer_1 = __webpack_require__(82);
const swagger_1 = __webpack_require__(81);
const localization_type_1 = __webpack_require__(94);
const util_1 = __webpack_require__(34);
const description_1 = __webpack_require__(100);
var Description;
(function (Description) {
    Description["COMMAND"] = "\uC704\uCE58\uCD08\uAE30\uD654 \uBA85\uB839";
    Description["RESULT"] = "\uC694\uCCAD\uD55C \uBA85\uB839\uC5D0 \uB300\uD55C \uACB0\uACFC\uC785\uB2C8\uB2E4. accept, reject, success, fail \uB4F1 \uBA85\uB839\uC5D0 \uB300\uD574 \uB2E4\uC591\uD55C \uAC12\uC774 \uC874\uC7AC\uD569\uB2C8\uB2E4.";
    Description["MESSAGE"] = "result\uAC12\uC774 reject, fail \uC778 \uACBD\uC6B0 SLAMNAV\uC5D0\uC11C \uBCF4\uB0B4\uB294 \uBA54\uC2DC\uC9C0 \uC785\uB2C8\uB2E4.";
    Description["ID"] = "\uC694\uCCAD\uD55C \uBA85\uB839\uC758 ID\uAC12\uC785\uB2C8\uB2E4. request\uC2DC \uC790\uB3D9 \uC0DD\uC131\uB429\uB2C8\uB2E4.";
    Description["X"] = "init \uBAA8\uB4DC\uB85C \uC704\uCE58\uCD08\uAE30\uD654 \uC2DC, \uC9C0\uB3C4\uC0C1 x\uC88C\uD45C\uB97C \uC785\uB825\uD558\uC138\uC694. \uB2E8\uC704\uB294 [m] \uC785\uB2C8\uB2E4.";
    Description["Y"] = "init \uBAA8\uB4DC\uB85C \uC704\uCE58\uCD08\uAE30\uD654 \uC2DC, \uC9C0\uB3C4\uC0C1 y\uC88C\uD45C\uB97C \uC785\uB825\uD558\uC138\uC694. \uB2E8\uC704\uB294 [m] \uC785\uB2C8\uB2E4.";
    Description["Z"] = "init \uBAA8\uB4DC\uB85C \uC704\uCE58\uCD08\uAE30\uD654 \uC2DC, \uC9C0\uB3C4\uC0C1 z\uC88C\uD45C\uB97C \uC785\uB825\uD558\uC138\uC694. \uD2B9\uC815 \uBAA8\uB378\uB9CC \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uAE30\uBCF8\uAC12 0\uC73C\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694. \uB2E8\uC704\uB294 [m] \uC785\uB2C8\uB2E4.";
    Description["RZ"] = "init \uBAA8\uB4DC\uB85C \uC704\uCE58\uCD08\uAE30\uD654 \uC2DC, \uB85C\uBD07\uC758 z\uCD95 \uBC29\uD5A5\uAC12\uC744 \uC785\uB825\uD558\uC138\uC694. \uB2E8\uC704\uB294 [deg] \uC785\uB2C8\uB2E4.";
})(Description || (Description = {}));
class LocalizationRequestDto {
}
exports.LocalizationRequestDto = LocalizationRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.COMMAND,
        example: localization_type_1.LocalizationCommand.setInit,
        enum: localization_type_1.LocalizationCommand,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Type)(() => String),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LocalizationRequestDto.prototype, "command", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.X,
        example: 0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], LocalizationRequestDto.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.Y,
        example: 0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], LocalizationRequestDto.prototype, "y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.Z,
        example: 0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], LocalizationRequestDto.prototype, "z", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.RZ,
        example: 0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], LocalizationRequestDto.prototype, "rz", void 0);
class LocalizationRequestSlamnav extends LocalizationRequestDto {
}
exports.LocalizationRequestSlamnav = LocalizationRequestSlamnav;
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
], LocalizationRequestSlamnav.prototype, "id", void 0);
class LocalizationResponseDto extends LocalizationRequestDto {
}
exports.LocalizationResponseDto = LocalizationResponseDto;
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
], LocalizationResponseDto.prototype, "result", void 0);
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
], LocalizationResponseDto.prototype, "message", void 0);
class LocalizationResponseSlamnav extends LocalizationResponseDto {
}
exports.LocalizationResponseSlamnav = LocalizationResponseSlamnav;
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
], LocalizationResponseSlamnav.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.RESULT,
        example: 'accept',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], LocalizationResponseSlamnav.prototype, "result", void 0);
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
], LocalizationResponseSlamnav.prototype, "message", void 0);
class LocalizationResponseFrs {
}
exports.LocalizationResponseFrs = LocalizationResponseFrs;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: description_1.FrsDescription.ROBOT_SERIAL,
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], LocalizationResponseFrs.prototype, "robotSerial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '위치초기화 명령에 대한 결과입니다.',
        type: LocalizationResponseDto,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], LocalizationResponseFrs.prototype, "result", void 0);


/***/ }),
/* 100 */
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
/* 101 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveModule = void 0;
const common_1 = __webpack_require__(31);
const move_service_1 = __webpack_require__(102);
const move_mongo_adapter_1 = __webpack_require__(107);
const move_grpc_controller_1 = __webpack_require__(109);
const mongoose_1 = __webpack_require__(57);
const move_entity_1 = __webpack_require__(108);
const move_socketio_adapter_1 = __webpack_require__(110);
const microservices_1 = __webpack_require__(2);
const move_mqtt_controller_1 = __webpack_require__(112);
const config_1 = __webpack_require__(60);
const constant_1 = __webpack_require__(70);
const move_pending_service_1 = __webpack_require__(111);
const common_2 = __webpack_require__(3);
const path_1 = __webpack_require__(41);
const log_module_1 = __webpack_require__(84);
let MoveModule = class MoveModule {
};
exports.MoveModule = MoveModule;
exports.MoveModule = MoveModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            log_module_1.LogModule,
            mongoose_1.MongooseModule.forFeature([
                {
                    name: move_entity_1.Move.name,
                    schema: move_entity_1.MoveSchema,
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
            ]),
        ],
        controllers: [move_mqtt_controller_1.MoveMqttInputController, move_grpc_controller_1.MoveGrpcInputController],
        providers: [
            move_service_1.MoveService,
            move_pending_service_1.MovePendingResponseService,
            {
                provide: 'DatabaseOutputPort',
                useClass: move_mongo_adapter_1.MoveMongoAdapter,
            },
            {
                provide: 'SlamnavOutputPort',
                useClass: move_socketio_adapter_1.MoveSocketIOAdapter,
            },
        ],
    })
], MoveModule);


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveService = void 0;
const microservices_1 = __webpack_require__(2);
const move_domain_1 = __webpack_require__(103);
const common_1 = __webpack_require__(31);
const move_database_output_port_1 = __webpack_require__(105);
const move_slamnav_output_port_1 = __webpack_require__(106);
const rxjs_1 = __webpack_require__(28);
const move_type_1 = __webpack_require__(104);
const constant_1 = __webpack_require__(48);
const rpc_code_exception_1 = __webpack_require__(47);
const saveLog_service_1 = __webpack_require__(30);
let MoveService = class MoveService {
    constructor(databaseOutput, slamnavOutput, configMicroservice, saveLogService) {
        this.databaseOutput = databaseOutput;
        this.slamnavOutput = slamnavOutput;
        this.configMicroservice = configMicroservice;
        this.saveLogService = saveLogService;
        this.slamnav_connection = false;
        this.frs_connection = false;
        this.currentMap = '';
        this.logger = this.saveLogService.get('move');
    }
    setCurrentMap(mapName) {
        this.currentMap = mapName;
    }
    async onModuleInit() {
        console.log('MoveService onModuleInit');
        this.configService = this.configMicroservice.getService('ConfigGrpcService');
    }
    async Move(moveDto) {
        let command = null;
        let resp = null;
        try {
            this.logger?.info(`[Move] Move ================================`);
            this.logger?.info(`[Move] Move Command : ${JSON.stringify(moveDto)}`);
            command = new move_domain_1.MoveModel(moveDto);
            command.mapName = this.currentMap;
            const result = await this.databaseOutput.save(command);
            command.assignId(result._id.toString());
            command.checkVariables();
            if (!this.slamnav_connection) {
                throw new rpc_code_exception_1.RpcCodeException('SLAMNAV가 연결되지 않았습니다', constant_1.GrpcCode.FailedPrecondition);
            }
            resp = await this.slamnavOutput.moveRequest(command);
            this.logger?.info(`[Move] Move Response : ${JSON.stringify(resp)}`);
            await command.checkResult(resp.result, resp.message);
            return resp;
        }
        catch (error) {
            this.logger?.error(`[Move] Move : ${error}`);
            if (command) {
                command.statusChange(resp?.result ?? move_domain_1.MoveStatus.fail);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('Move 명령을 수행할 수 없습니다', constant_1.GrpcCode.InternalError);
        }
        finally {
            if (command) {
                await this.databaseOutput.update(command);
            }
        }
    }
    MoveJog(moveDto) {
        const command = new move_domain_1.MoveModel(moveDto);
        command.mapName = this.currentMap;
        command.checkVariables();
        if (!this.slamnav_connection) {
            throw new rpc_code_exception_1.RpcCodeException('SLAMNAV가 연결되지 않았습니다', constant_1.GrpcCode.FailedPrecondition);
        }
        this.slamnavOutput.moveJogRequest(command);
    }
    slamConnect() {
        this.slamnav_connection = true;
    }
    slamDisconnect() {
        this.logger?.warn(`[Move] slam Disconnected`);
        this.slamnav_connection = false;
    }
    async frsConnect() {
        try {
            this.frs_connection = true;
            const useFMSMove = await (0, rxjs_1.lastValueFrom)(this.configService.getConfig({ key: 'useFMSMove' }));
            if (useFMSMove.value === 'true') {
                this.logger?.info(`[Move] frs Connect : useFMSMove is true`);
            }
            else {
                this.logger?.info(`[Move] frs Connect : useFMSMove is false`);
                return;
            }
            this.moveLastGoal();
        }
        catch (error) {
            this.logger?.error(`[Move] frs Connect : ${error}`);
        }
    }
    async moveLastGoal() {
        try {
            const lastMove = await this.databaseOutput.getLast();
            if (lastMove && (lastMove.command === move_type_1.MoveCommand.moveGoal || lastMove.command === move_type_1.MoveCommand.moveTarget)) {
                this.logger?.info(`[Move] moveLastGoal : lastMove is not null`);
                this.Move(lastMove);
                this.logger?.info(`[Move] moveLastGoal : lastMove update`);
            }
            else {
                this.logger?.info(`[Move] moveLastGoal : lastMove is null`);
            }
        }
        catch (error) {
            this.logger?.error(`[Move] moveLastGoal : ${error}`);
        }
    }
    async frsDisconnect() {
        try {
            this.logger?.warn(`[Move] frs Disconnected`);
            this.frs_connection = false;
            this.Move({ command: move_type_1.MoveCommand.moveStop });
        }
        catch (error) {
            this.logger?.error(`[Move] frs Disconnect : ${error}`);
        }
    }
    async updateResponse(resp) {
        this.logger?.info(`[Move] update Response : ${JSON.stringify(resp)}`);
        if (resp.id) {
            const dbmodel = await this.databaseOutput.getNodebyId(resp.id);
            if (dbmodel) {
                const model = new move_domain_1.MoveModel(dbmodel);
                model.assignId(dbmodel._id);
                model.statusChange(resp.result);
                model.goalName = resp.goalName;
                model.message = resp.message;
                model.result = resp.result;
                await this.databaseOutput.update(model);
                this.logger?.info(`[Move] update Response : ${model.id}, ${model.status},  ${model.result}, ${model.message}`);
            }
        }
    }
    async moveLogLast(request) {
        try {
            if (request.num === undefined || request.num === null || request.num === 0) {
                throw new rpc_code_exception_1.RpcCodeException('num 값이 없습니다. 가져올 로그의 개수를 입력해주세요.     ', constant_1.GrpcCode.InvalidArgument);
            }
            return this.databaseOutput.getLogLast(request);
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException) {
                throw error;
            }
            this.logger?.error(`[Move] moveLogLast : ${error}`);
            throw new rpc_code_exception_1.RpcCodeException('moveLogLast 오류', constant_1.GrpcCode.InternalError);
        }
    }
    async moveLog(request) {
        try {
            return this.databaseOutput.getLog(request);
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException) {
                throw error;
            }
            this.logger?.error(`[Move] moveLogLast : ${error}`);
            throw new rpc_code_exception_1.RpcCodeException('moveLogLast 오류', constant_1.GrpcCode.InternalError);
        }
    }
};
exports.MoveService = MoveService;
exports.MoveService = MoveService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DatabaseOutputPort')),
    __param(1, (0, common_1.Inject)('SlamnavOutputPort')),
    __param(2, (0, common_1.Inject)('CONFIG_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof move_database_output_port_1.MoveDatabaseOutputPort !== "undefined" && move_database_output_port_1.MoveDatabaseOutputPort) === "function" ? _a : Object, typeof (_b = typeof move_slamnav_output_port_1.MoveSlamnavOutputPort !== "undefined" && move_slamnav_output_port_1.MoveSlamnavOutputPort) === "function" ? _b : Object, typeof (_c = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _c : Object, typeof (_d = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _d : Object])
], MoveService);


/***/ }),
/* 103 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveModel = exports.MoveMethod = exports.MoveStatus = void 0;
const rpc_code_exception_1 = __webpack_require__(47);
const constant_1 = __webpack_require__(48);
const move_type_1 = __webpack_require__(104);
const util_1 = __webpack_require__(34);
var MoveStatus;
(function (MoveStatus) {
    MoveStatus["pending"] = "pending";
    MoveStatus["accepted"] = "accept";
    MoveStatus["rejected"] = "reject";
    MoveStatus["success"] = "success";
    MoveStatus["moving"] = "start";
    MoveStatus["paused"] = "pause";
    MoveStatus["fail"] = "fail";
    MoveStatus["cancelled"] = "cancel";
    MoveStatus["unknown"] = "unknown";
})(MoveStatus || (exports.MoveStatus = MoveStatus = {}));
var MoveMethod;
(function (MoveMethod) {
    MoveMethod["pp"] = "pp";
})(MoveMethod || (exports.MoveMethod = MoveMethod = {}));
class MoveModel {
    constructor(param) {
        this.status = MoveStatus.pending;
        this.command = param.command;
        this.method = param.method;
        this.direction = param.direction ?? 'forward';
        this.message = param.message;
        this.result = param.result;
        this.preset = param.preset;
        this.goalId = param.goalId;
        this.goalName = param.goalName;
        this.mapName = param.mapName;
        this.x = param.x;
        this.y = param.y;
        this.z = param.z;
        this.rz = param.rz;
        this.vx = param.vx;
        this.vy = param.vy;
        this.wz = param.wz;
        this.target = param.target;
        this.speed = param.speed;
        this.id = util_1.UrlUtil.generateUUID();
    }
    assignId(id) {
        this.id = id;
    }
    async checkResult(result, message) {
        this.statusChange(result);
        this.result = result;
        this.message = message;
        if (result === 'reject' || result === 'fail') {
            throw new rpc_code_exception_1.RpcCodeException(message ?? '명령 수행 실패', constant_1.GrpcCode.Aborted);
        }
    }
    statusChange(status) {
        if (!this.id) {
            throw new rpc_code_exception_1.RpcCodeException('ID가 없습니다', constant_1.GrpcCode.InvalidArgument);
        }
        const moveStatus = this.parseStatus(status);
        this.status = moveStatus;
    }
    checkVariables() {
        if (this.command === move_type_1.MoveCommand.moveGoal) {
            if (this.goalId === '') {
                throw new rpc_code_exception_1.RpcCodeException('goalId 값이 없습니다', constant_1.GrpcCode.InvalidArgument);
            }
            if (this.method === undefined) {
                this.method = MoveMethod.pp;
            }
            if (this.preset === undefined) {
                this.preset = 0;
            }
        }
        else if (this.command === move_type_1.MoveCommand.moveTarget) {
            if (this.x === undefined || this.y === undefined || this.z === undefined || this.rz === undefined) {
                throw new rpc_code_exception_1.RpcCodeException('target 값이 비어있습니다', constant_1.GrpcCode.InvalidArgument);
            }
            if (this.method === undefined) {
                this.method = MoveMethod.pp;
            }
            if (this.preset === undefined) {
                this.preset = 0;
            }
        }
        else if (this.command === move_type_1.MoveCommand.moveJog) {
            if (this.vx === undefined || this.vy === undefined || this.wz === undefined) {
                throw new rpc_code_exception_1.RpcCodeException('v값이 비어있습니다', constant_1.GrpcCode.InvalidArgument);
            }
            if (this.vx === undefined || typeof this.vx !== 'number' || this.vx < -10 || this.vx > 10) {
                throw new rpc_code_exception_1.RpcCodeException(`vx값 (${this.vx})이 범위를 벗어납니다.`, constant_1.GrpcCode.InvalidArgument);
            }
            if (this.vy === undefined || typeof this.vy !== 'number' || this.vy < -10 || this.vy > 10) {
                throw new rpc_code_exception_1.RpcCodeException(`vy값 (${this.vy})이 범위를 벗어납니다.`, constant_1.GrpcCode.InvalidArgument);
            }
            if (this.wz === undefined || typeof this.wz !== 'number' || this.wz < -100 || this.wz > 100) {
                throw new rpc_code_exception_1.RpcCodeException(`wz값 (${this.wz})이 범위를 벗어납니다.`, constant_1.GrpcCode.InvalidArgument);
            }
        }
        else if (this.command === move_type_1.MoveCommand.moveStop) {
        }
        else if (this.command === move_type_1.MoveCommand.movePause) {
        }
        else if (this.command === move_type_1.MoveCommand.moveResume) {
        }
        else if (this.command === move_type_1.MoveCommand.moveXLinear) {
            console.log('moveXLinear', this.target, this.speed, this.direction);
            if (this.target === undefined) {
                throw new rpc_code_exception_1.RpcCodeException('target 값이 비어있습니다', constant_1.GrpcCode.InvalidArgument);
            }
            if (this.speed === undefined) {
                throw new rpc_code_exception_1.RpcCodeException('speed 값이 비어있습니다', constant_1.GrpcCode.InvalidArgument);
            }
        }
        else if (this.command === move_type_1.MoveCommand.movecircular) {
            if (this.target === undefined) {
                throw new rpc_code_exception_1.RpcCodeException('target 값이 비어있습니다', constant_1.GrpcCode.InvalidArgument);
            }
            if (this.speed === undefined) {
                throw new rpc_code_exception_1.RpcCodeException('speed 값이 비어있습니다', constant_1.GrpcCode.InvalidArgument);
            }
            if (this.direction === undefined || (this.direction !== 'right' && this.direction !== 'left')) {
                throw new rpc_code_exception_1.RpcCodeException('direction 값이 없거나 올바르지 않습니다. (right, left)', constant_1.GrpcCode.InvalidArgument);
            }
        }
        else if (this.command === move_type_1.MoveCommand.moveRotate) {
            if (this.target === undefined) {
                throw new rpc_code_exception_1.RpcCodeException('target 값이 비어있습니다', constant_1.GrpcCode.InvalidArgument);
            }
            if (this.speed === undefined) {
                throw new rpc_code_exception_1.RpcCodeException('speed 값이 비어있습니다', constant_1.GrpcCode.InvalidArgument);
            }
        }
        else {
            throw new rpc_code_exception_1.RpcCodeException(`알 수 없는 command 값입니다. (${this.command})`, constant_1.GrpcCode.InvalidArgument);
        }
    }
    parseStatus(value) {
        if (Object.values(MoveStatus).includes(value)) {
            return value;
        }
        return MoveStatus.unknown;
    }
}
exports.MoveModel = MoveModel;


/***/ }),
/* 104 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveCommand = void 0;
var MoveCommand;
(function (MoveCommand) {
    MoveCommand["moveGoal"] = "goal";
    MoveCommand["moveTarget"] = "target";
    MoveCommand["moveStop"] = "stop";
    MoveCommand["moveJog"] = "jog";
    MoveCommand["movePause"] = "pause";
    MoveCommand["moveResume"] = "resume";
    MoveCommand["moveXLinear"] = "xLinear";
    MoveCommand["movecircular"] = "circular";
    MoveCommand["moveRotate"] = "rotate";
})(MoveCommand || (exports.MoveCommand = MoveCommand = {}));


/***/ }),
/* 105 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveMongoAdapter = void 0;
const mongoose_1 = __webpack_require__(57);
const mongoose_2 = __webpack_require__(58);
const move_entity_1 = __webpack_require__(108);
const parse_util_1 = __webpack_require__(50);
const util_1 = __webpack_require__(34);
const rpc_code_exception_1 = __webpack_require__(47);
const constant_1 = __webpack_require__(48);
const microservices_1 = __webpack_require__(2);
const saveLog_service_1 = __webpack_require__(30);
const common_1 = __webpack_require__(31);
const config_1 = __webpack_require__(60);
let MoveMongoAdapter = class MoveMongoAdapter {
    constructor(Repository, saveLogService, configService) {
        this.Repository = Repository;
        this.saveLogService = saveLogService;
        this.configService = configService;
        this.logger = this.saveLogService.get('move');
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
                this.logger?.info(`[Move] setIndex EnabledTTL_DAYS: ${TTL_DAYS}`);
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
            this.logger?.error(`[Move] DB getNodebyId: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 가져올 수 없습니다.', constant_1.GrpcCode.DBError);
        }
    }
    async getLast() {
        try {
            return await this.Repository.findOne().sort({ createdAt: -1 }).lean();
        }
        catch (error) {
            this.logger?.error(`[Move] DB getLast: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 가져올 수 없습니다.', constant_1.GrpcCode.DBError);
        }
    }
    async getLogLast(request) {
        try {
            if (request.command !== undefined && request.command !== null && request.command !== '') {
                const data = await this.Repository.find({ $where: `this.command === '${request.command}'` })
                    .sort({ createdAt: -1 })
                    .limit(request.num)
                    .lean();
                return {
                    list: data.map((item) => ({
                        ...item,
                        id: item._id.toString(),
                        createdAt: item.createdAt.toISOString(),
                        updatedAt: item.updatedAt.toISOString(),
                    })),
                };
            }
            else {
                const data = await this.Repository.find().sort({ createdAt: -1 }).limit(request.num).lean();
                return {
                    list: data.map((item) => ({
                        ...item,
                        id: item._id.toString(),
                        createdAt: item.createdAt.toISOString(),
                        updatedAt: item.updatedAt.toISOString(),
                    })),
                };
            }
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException) {
                throw error;
            }
            this.logger?.error(`[Move] DB getLast: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 가져올 수 없습니다.', constant_1.GrpcCode.DBError);
        }
    }
    async getLog(request) {
        try {
            const query = {};
            const { pageNo = 1, pageSize = 10, searchText, searchType, sortOption = 'createdAt', sortDirection = 'desc', dateFrom, dateTo, } = request;
            this.logger?.debug(`[Move] getLog request: ${JSON.stringify(request)}`);
            if (searchText && searchText.trim() !== '') {
                if (searchType && searchType !== '') {
                    switch (searchType) {
                        case 'command':
                            query.command = { $regex: searchText, $options: 'i' };
                            break;
                        case 'goalId':
                            query.goalId = { $regex: searchText, $options: 'i' };
                            break;
                        case 'status':
                            query.status = { $regex: searchText, $options: 'i' };
                            break;
                        case 'all':
                            query.$or = [
                                { command: { $regex: searchText, $options: 'i' } },
                                { goalId: { $regex: searchText, $options: 'i' } },
                                { status: { $regex: searchText, $options: 'i' } },
                            ];
                            break;
                        default:
                            throw new rpc_code_exception_1.RpcCodeException('searchType 형식이 올바르지 않습니다.', constant_1.GrpcCode.InvalidArgument);
                    }
                }
                else {
                    query.$or = [
                        { command: { $regex: searchText, $options: 'i' } },
                        { goalId: { $regex: searchText, $options: 'i' } },
                        { status: { $regex: searchText, $options: 'i' } },
                    ];
                }
            }
            if (dateFrom || dateTo) {
                query.createdAt = {};
                if (dateFrom) {
                    query.createdAt.$gte = new Date(dateFrom);
                }
                if (dateTo) {
                    query.createdAt.$lte = new Date(dateTo);
                }
            }
            const sortDirectionValue = sortDirection === 'asc' ? 1 : -1;
            const sortQuery = {};
            sortQuery[sortOption] = sortDirectionValue;
            const skip = (pageNo - 1) * pageSize;
            const totalCount = await this.Repository.countDocuments(query);
            const data = await this.Repository.find(query).sort(sortQuery).skip(skip).limit(pageSize);
            const totalPage = Math.ceil(totalCount / pageSize);
            return {
                list: data.map((item) => ({
                    id: item._id.toString(),
                    command: item.command,
                    status: item.status,
                    goalId: item.goalId,
                    x: item.x,
                    y: item.y,
                    rz: item.rz,
                    vx: item.vx,
                    vy: item.vy,
                    wz: item.wz,
                    createAt: item.createdAt.toISOString(),
                    updateAt: item.updatedAt.toISOString(),
                    direction: item.direction,
                    target: item.target,
                    speed: item.speed,
                })),
                pageSize,
                totalCount,
                totalPage,
            };
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException) {
                throw error;
            }
            this.logger?.error(`[Move] DB getLog: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 가져올 수 없습니다.', constant_1.GrpcCode.DBError);
        }
    }
    async save(model) {
        try {
            const _id = util_1.UrlUtil.generateUUID();
            return await this.Repository.create({ ...model, _id });
        }
        catch (error) {
            this.logger?.error(`[Move] DB save: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 저장할 수 없습니다.', constant_1.GrpcCode.DBError);
        }
    }
    async update(move) {
        try {
            return await this.Repository.findByIdAndUpdate(move.id, move).lean();
        }
        catch (error) {
            this.logger?.error(`[Move] DB update: ${parse_util_1.ParseUtil.errorToJson(error)}`);
        }
    }
};
exports.MoveMongoAdapter = MoveMongoAdapter;
exports.MoveMongoAdapter = MoveMongoAdapter = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(move_entity_1.Move.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object])
], MoveMongoAdapter);


/***/ }),
/* 108 */
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
exports.MoveSchema = exports.Move = void 0;
const mongoose_1 = __webpack_require__(57);
let Move = class Move {
};
exports.Move = Move;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Move.prototype, "command", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Move.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Move.prototype, "method", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Move.prototype, "direction", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Move.prototype, "message", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Move.prototype, "result", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Move.prototype, "preset", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Move.prototype, "goalId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Move.prototype, "goalName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Move.prototype, "mapName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Move.prototype, "x", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Move.prototype, "y", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Move.prototype, "z", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Move.prototype, "rz", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Move.prototype, "vx", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Move.prototype, "vy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Move.prototype, "wz", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Move.prototype, "target", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Move.prototype, "speed", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Move.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Move.prototype, "updatedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Move.prototype, "_id", void 0);
exports.Move = Move = __decorate([
    (0, mongoose_1.Schema)()
], Move);
exports.MoveSchema = mongoose_1.SchemaFactory.createForClass(Move);
exports.MoveSchema.set('timestamps', true);


/***/ }),
/* 109 */
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
exports.MoveGrpcInputController = void 0;
const common_1 = __webpack_require__(3);
const move_service_1 = __webpack_require__(102);
const common_2 = __webpack_require__(31);
const move_type_1 = __webpack_require__(104);
let MoveGrpcInputController = class MoveGrpcInputController {
    constructor(moveService) {
        this.moveService = moveService;
    }
    movePause(request, metadata) {
        return this.moveService.Move({ command: move_type_1.MoveCommand.movePause });
    }
    moveResume(request, metadata) {
        return this.moveService.Move({ command: move_type_1.MoveCommand.moveResume });
    }
    moveStop(request, metadata) {
        return this.moveService.Move({ command: move_type_1.MoveCommand.moveStop });
    }
    moveLastGoal(request, metadata) {
        return this.moveService.moveLastGoal();
    }
    moveCommand(request, metadata) {
        console.log('moveCommand', request);
        return this.moveService.Move(request);
    }
    moveGoal(request, metadata) {
        return this.moveService.Move(request);
    }
    moveTarget(request, metadata) {
        return this.moveService.Move(request);
    }
    moveJog(request, metadata) {
        this.moveService.MoveJog(request);
        return {};
    }
    moveLogLast(request, metadata) {
        return this.moveService.moveLogLast(request);
    }
    moveLog(request, metadata) {
        return this.moveService.moveLog(request);
    }
};
exports.MoveGrpcInputController = MoveGrpcInputController;
exports.MoveGrpcInputController = MoveGrpcInputController = __decorate([
    (0, common_2.Controller)(),
    common_1.MoveMicroservice.MoveGrpcServiceControllerMethods(),
    (0, common_2.UseInterceptors)(common_1.GrpcInterceptor),
    __metadata("design:paramtypes", [typeof (_a = typeof move_service_1.MoveService !== "undefined" && move_service_1.MoveService) === "function" ? _a : Object])
], MoveGrpcInputController);


/***/ }),
/* 110 */
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
exports.MoveSocketIOAdapter = void 0;
const common_1 = __webpack_require__(31);
const microservices_1 = __webpack_require__(2);
const constant_1 = __webpack_require__(70);
const move_pending_service_1 = __webpack_require__(111);
const rpc_code_exception_1 = __webpack_require__(47);
const constant_2 = __webpack_require__(48);
const saveLog_service_1 = __webpack_require__(30);
let MoveSocketIOAdapter = class MoveSocketIOAdapter {
    constructor(mqttService, pendingService, saveLogService) {
        this.mqttService = mqttService;
        this.pendingService = pendingService;
        this.saveLogService = saveLogService;
        this.logger = this.saveLogService.get('move');
    }
    async moveRequest(data) {
        this.logger?.debug(`[Move] moveRequest : ${JSON.stringify(data)}`);
        const response = this.waitForResponse(data.id, 5000);
        this.mqttService.emit('moveRequest', data);
        const resp = await response;
        this.logger?.debug(`[Move] moveResponse : ${JSON.stringify(resp)}`);
        return resp;
    }
    moveJogRequest(data) {
        this.logger?.debug(`[Move] moveJogRequest : ${JSON.stringify(data)}`);
        this.mqttService.emit('moveRequest', data);
        return;
    }
    async waitForResponse(id, timeoutMs) {
        return new Promise((resolve, reject) => {
            let timeout;
            if (timeoutMs) {
                timeout = setTimeout(() => {
                    this.pendingService.pendingResponses.delete(id);
                    this.logger?.error(`[Move] waitForResponse Timeout : ${id} , ${timeoutMs}`);
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
exports.MoveSocketIOAdapter = MoveSocketIOAdapter;
exports.MoveSocketIOAdapter = MoveSocketIOAdapter = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constant_1.MQTT_BROKER)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object, typeof (_b = typeof move_pending_service_1.MovePendingResponseService !== "undefined" && move_pending_service_1.MovePendingResponseService) === "function" ? _b : Object, typeof (_c = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _c : Object])
], MoveSocketIOAdapter);


/***/ }),
/* 111 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MovePendingResponseService = void 0;
const pending_util_1 = __webpack_require__(78);
const common_1 = __webpack_require__(31);
let MovePendingResponseService = class MovePendingResponseService extends pending_util_1.PendingResponseUtil {
};
exports.MovePendingResponseService = MovePendingResponseService;
exports.MovePendingResponseService = MovePendingResponseService = __decorate([
    (0, common_1.Injectable)()
], MovePendingResponseService);


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveMqttInputController = void 0;
const common_1 = __webpack_require__(31);
const microservices_1 = __webpack_require__(2);
const move_service_1 = __webpack_require__(102);
const move_pending_service_1 = __webpack_require__(111);
const rpc_code_exception_1 = __webpack_require__(47);
const constant_1 = __webpack_require__(48);
const move_dto_1 = __webpack_require__(113);
const log_1 = __webpack_require__(29);
const status_type_1 = __webpack_require__(118);
let MoveMqttInputController = class MoveMqttInputController {
    constructor(moveService, pendingService, saveLogService) {
        this.moveService = moveService;
        this.pendingService = pendingService;
        this.saveLogService = saveLogService;
        this.logger = this.saveLogService.get('move');
    }
    getConnect() {
        this.logger?.info(`[Move] Slamnav Connected`);
        this.moveService.slamConnect();
    }
    getDisconnect() {
        this.logger?.warn(`[Move] Slamnav Disconnected`);
        this.moveService.slamDisconnect();
        this.pendingService.pendingResponses.forEach((resp) => {
            resp.reject(new rpc_code_exception_1.RpcCodeException('SLAMNAV 연결이 끊어졌습니다', constant_1.GrpcCode.InternalError));
        });
        this.pendingService.pendingResponses.clear();
    }
    getConnectFRS(data) {
        this.logger?.info(`[Move] frs Connected`);
        this.moveService.frsConnect();
    }
    getDisconnectFRS(data) {
        this.logger?.warn(`[Move] frs Disconnected`);
        this.moveService.frsDisconnect();
    }
    getMoveResponse(data) {
        try {
            const { id } = data;
            const listener = this.pendingService.pendingResponses.get(id);
            if (listener) {
                listener.received.push(data);
                listener.resolve(data);
                this.pendingService.pendingResponses.delete(id);
            }
            else {
                this.moveService.updateResponse(data);
            }
        }
        catch (error) {
            this.logger?.error(`[Move] getMoveResponse : ${(0, log_1.errorToJson)(error)}`);
        }
    }
    getStatus(data) {
        this.moveService.setCurrentMap(data.map?.map_name ?? '');
    }
};
exports.MoveMqttInputController = MoveMqttInputController;
__decorate([
    (0, microservices_1.EventPattern)('con:slamnav'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MoveMqttInputController.prototype, "getConnect", null);
__decorate([
    (0, microservices_1.EventPattern)('discon:slamanv'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MoveMqttInputController.prototype, "getDisconnect", null);
__decorate([
    (0, microservices_1.EventPattern)('con:frs'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MoveMqttInputController.prototype, "getConnectFRS", null);
__decorate([
    (0, microservices_1.EventPattern)('discon:frs'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MoveMqttInputController.prototype, "getDisconnectFRS", null);
__decorate([
    (0, microservices_1.EventPattern)('moveResponse'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof move_dto_1.MoveResponseSlamnav !== "undefined" && move_dto_1.MoveResponseSlamnav) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], MoveMqttInputController.prototype, "getMoveResponse", null);
__decorate([
    (0, microservices_1.EventPattern)('status'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof status_type_1.StatusSlamnav !== "undefined" && status_type_1.StatusSlamnav) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], MoveMqttInputController.prototype, "getStatus", null);
exports.MoveMqttInputController = MoveMqttInputController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof move_service_1.MoveService !== "undefined" && move_service_1.MoveService) === "function" ? _a : Object, typeof (_b = typeof move_pending_service_1.MovePendingResponseService !== "undefined" && move_pending_service_1.MovePendingResponseService) === "function" ? _b : Object, typeof (_c = typeof log_1.SaveLogService !== "undefined" && log_1.SaveLogService) === "function" ? _c : Object])
], MoveMqttInputController);


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveLinearRequestDto = exports.MoveLogLastResponseDto = exports.MoveLogLastRequestDto = exports.MoveLogResponseDto = exports.MoveLogRequestDto = exports.MoveResponseFrs = exports.MoveResponseSlamnav = exports.MoveRequestSlamnav = exports.MoveResponseDto = exports.MoveTargetCommandDto = exports.MoveGoalCommandDto = exports.MoveRequestDto = void 0;
const class_validator_1 = __webpack_require__(83);
const class_transformer_1 = __webpack_require__(82);
const swagger_1 = __webpack_require__(81);
const move_type_1 = __webpack_require__(104);
const util_1 = __webpack_require__(34);
const search_request_1 = __webpack_require__(114);
const pagination_1 = __webpack_require__(116);
var Description;
(function (Description) {
    Description["COMMAND"] = "\uC774\uB3D9 \uBA85\uB839";
    Description["ID"] = "\uC694\uCCAD\uD55C \uBA85\uB839\uC758 ID\uAC12\uC785\uB2C8\uB2E4. request\uC2DC \uC790\uB3D9 \uC0DD\uC131\uB429\uB2C8\uB2E4.";
    Description["GOALID"] = "goal \uC774\uB3D9 \uC2DC, \uBAA9\uD45C\uC9C0\uC810\uC758 \uB178\uB4DC ID\uB97C \uC785\uB825\uD558\uC138\uC694.";
    Description["METHOD"] = "\uC8FC\uD589 \uBC29\uC2DD. \uAE30\uBCF8\uAC12\uC740 pp(point to point)\uBC29\uC2DD\uC785\uB2C8\uB2E4.";
    Description["PRESET"] = "\uC18D\uB3C4 \uD504\uB9AC\uC14B. \uAE30\uBCF8\uAC12\uC740 0\uC774\uBA70 \uD604\uC7AC \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
    Description["RESULT"] = "\uC694\uCCAD\uD55C \uBA85\uB839\uC5D0 \uB300\uD55C \uACB0\uACFC\uC785\uB2C8\uB2E4. accept, reject, success, fail \uB4F1 \uBA85\uB839\uC5D0 \uB300\uD574 \uB2E4\uC591\uD55C \uAC12\uC774 \uC874\uC7AC\uD569\uB2C8\uB2E4.";
    Description["MESSAGE"] = "result\uAC12\uC774 reject, fail \uC778 \uACBD\uC6B0 SLAMNAV\uC5D0\uC11C \uBCF4\uB0B4\uB294 \uBA54\uC2DC\uC9C0 \uC785\uB2C8\uB2E4.";
    Description["DIRECTION"] = "\uC8FC\uD589 \uBC29\uD5A5. \uAE30\uBCF8\uAC12\uC740 forward \uC785\uB2C8\uB2E4.";
    Description["X"] = "target \uC774\uB3D9 \uC2DC, \uBAA9\uD45C\uC9C0\uC810\uC758 \uC9C0\uB3C4\uC0C1 x\uC88C\uD45C\uB97C \uC785\uB825\uD558\uC138\uC694. \uB2E8\uC704\uB294 [m] \uC785\uB2C8\uB2E4.";
    Description["Y"] = "target \uC774\uB3D9 \uC2DC, \uBAA9\uD45C\uC9C0\uC810\uC758 \uC9C0\uB3C4\uC0C1 y\uC88C\uD45C\uB97C \uC785\uB825\uD558\uC138\uC694. \uB2E8\uC704\uB294 [m] \uC785\uB2C8\uB2E4.";
    Description["Z"] = "target \uC774\uB3D9 \uC2DC, \uBAA9\uD45C\uC9C0\uC810\uC758 \uC9C0\uB3C4\uC0C1 z\uC88C\uD45C\uB97C \uC785\uB825\uD558\uC138\uC694. \uD2B9\uC815 \uBAA8\uB378\uB9CC \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uAE30\uBCF8\uAC12 0\uC73C\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694. \uB2E8\uC704\uB294 [m] \uC785\uB2C8\uB2E4.";
    Description["RZ"] = "target \uC774\uB3D9 \uC2DC, \uBAA9\uD45C\uC9C0\uC810\uC5D0\uC11C \uB85C\uBD07\uC758 z\uCD95 \uBC29\uD5A5\uAC12\uC744 \uC785\uB825\uD558\uC138\uC694. \uB2E8\uC704\uB294 [deg] \uC785\uB2C8\uB2E4.";
    Description["VX"] = "jog \uC774\uB3D9 \uC2DC, \uB85C\uBD07\uC758 x\uBC29\uD5A5 \uC18D\uB3C4\uB97C \uC785\uB825\uD558\uC138\uC694. \uB2E8\uC704\uB294 [m/s] \uC785\uB2C8\uB2E4.";
    Description["VY"] = "jog \uC774\uB3D9 \uC2DC, \uB85C\uBD07\uC758 y\uBC29\uD5A5 \uC18D\uB3C4\uB97C \uC785\uB825\uD558\uC138\uC694. \uD2B9\uC815 \uBAA8\uB378\uB9CC \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uAE30\uBCF8\uAC12 0\uC73C\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694. \uB2E8\uC704\uB294 [m/s] \uC785\uB2C8\uB2E4.";
    Description["WZ"] = "jog \uC774\uB3D9 \uC2DC, \uB85C\uBD07\uC758 z\uCD95 \uD68C\uC804 \uC18D\uB3C4\uB97C \uC785\uB825\uD558\uC138\uC694. \uB2E8\uC704\uB294 [deg/s] \uC785\uB2C8\uB2E4.";
})(Description || (Description = {}));
class MoveRequestDto {
}
exports.MoveRequestDto = MoveRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.COMMAND,
        example: move_type_1.MoveCommand.moveStop,
        enum: move_type_1.MoveCommand,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MoveRequestDto.prototype, "command", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.GOALID,
        example: '',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MoveRequestDto.prototype, "goalId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.METHOD,
        example: 'pp',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MoveRequestDto.prototype, "method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.PRESET,
        example: 0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "preset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.X, example: 0, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.Y, example: 0, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.Z, example: 0, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "z", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.RZ,
        example: 0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "rz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.VX,
        example: 0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "vx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.VY,
        example: 0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "vy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.WZ,
        example: 0,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "wz", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        description: 'linearXMove 이동거리 [m] | circularMove 이동거리 [deg] | rotateMove 이동거리 [deg]',
        example: 0,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "target", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        description: 'linearXMove 이동속도 [m/s] | circularMove 이동속도 [deg/s] | rotateMove 이동속도 [deg/s]',
        example: 0,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "speed", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: 'circularMove 방향 [left, right]',
        enum: ['left', 'right'],
        example: 'left',
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MoveRequestDto.prototype, "direction", void 0);
class MoveGoalCommandDto {
}
exports.MoveGoalCommandDto = MoveGoalCommandDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.GOALID,
        example: 'goal_1',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MoveGoalCommandDto.prototype, "goalId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.METHOD, example: 'pp' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MoveGoalCommandDto.prototype, "method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.PRESET, example: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveGoalCommandDto.prototype, "preset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.DIRECTION, example: 'forward' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MoveGoalCommandDto.prototype, "direction", void 0);
class MoveTargetCommandDto {
}
exports.MoveTargetCommandDto = MoveTargetCommandDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.METHOD, example: 'pp' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MoveTargetCommandDto.prototype, "method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.PRESET, example: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveTargetCommandDto.prototype, "preset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.X, example: 0 }),
    __metadata("design:type", Number)
], MoveTargetCommandDto.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.Y, example: 0 }),
    __metadata("design:type", Number)
], MoveTargetCommandDto.prototype, "y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.Z, example: 0 }),
    __metadata("design:type", Number)
], MoveTargetCommandDto.prototype, "z", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.RZ, example: 0 }),
    __metadata("design:type", Number)
], MoveTargetCommandDto.prototype, "rz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.DIRECTION, example: 'forward' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MoveTargetCommandDto.prototype, "direction", void 0);
class MoveResponseDto extends MoveRequestDto {
}
exports.MoveResponseDto = MoveResponseDto;
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
], MoveResponseDto.prototype, "result", void 0);
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
], MoveResponseDto.prototype, "message", void 0);
class MoveRequestSlamnav extends MoveRequestDto {
}
exports.MoveRequestSlamnav = MoveRequestSlamnav;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ID,
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MoveRequestSlamnav.prototype, "id", void 0);
class MoveResponseSlamnav extends MoveResponseDto {
}
exports.MoveResponseSlamnav = MoveResponseSlamnav;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ID,
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MoveResponseSlamnav.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.RESULT,
        example: 'accept',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MoveResponseSlamnav.prototype, "result", void 0);
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
], MoveResponseSlamnav.prototype, "message", void 0);
class MoveResponseFrs {
}
exports.MoveResponseFrs = MoveResponseFrs;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '로봇의 시리얼번호',
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MoveResponseFrs.prototype, "robotSerial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '이동 명령 결과', type: MoveResponseDto, required: true }),
    __metadata("design:type", MoveResponseDto)
], MoveResponseFrs.prototype, "data", void 0);
class MoveLogRequestDto extends search_request_1.SearchRequestDto {
}
exports.MoveLogRequestDto = MoveLogRequestDto;
class MoveLogResponseDto extends pagination_1.PaginationResponse {
}
exports.MoveLogResponseDto = MoveLogResponseDto;
class MoveLogLastRequestDto {
}
exports.MoveLogLastRequestDto = MoveLogLastRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '조회할 로그 개수', example: 5 }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], MoveLogLastRequestDto.prototype, "num", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '조회할 명령', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(move_type_1.MoveCommand),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], MoveLogLastRequestDto.prototype, "command", void 0);
class MoveLogLastResponseDto {
}
exports.MoveLogLastResponseDto = MoveLogLastResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '조회된 로그 목록',
        example: [
            {
                id: '1',
                command: 'moveGoal',
                goalId: 'N_33221',
                time: '2025-01-01T00:00:00Z',
                result: 'success',
                message: 'moveGoal 명령 성공',
            },
        ],
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], MoveLogLastResponseDto.prototype, "list", void 0);
var LinearMoveCommand;
(function (LinearMoveCommand) {
    LinearMoveCommand["moveXLinear"] = "xLinear";
    LinearMoveCommand["movecircular"] = "circular";
    LinearMoveCommand["moveRotate"] = "rotate";
    LinearMoveCommand["linearStop"] = "stop";
})(LinearMoveCommand || (LinearMoveCommand = {}));
class MoveLinearRequestDto {
}
exports.MoveLinearRequestDto = MoveLinearRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Linear Move 명령구분',
        example: LinearMoveCommand.moveXLinear,
        enum: LinearMoveCommand,
    }),
    __metadata("design:type", String)
], MoveLinearRequestDto.prototype, "command", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        description: 'linearXMove 이동거리 [m] | circularMove 이동거리 [deg] | rotateMove 이동거리 [deg]',
        example: 0,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveLinearRequestDto.prototype, "target", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        description: 'linearXMove 이동속도 [m/s] | circularMove 이동속도 [deg/s] | rotateMove 이동속도 [deg/s]',
        example: 0,
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveLinearRequestDto.prototype, "speed", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, swagger_1.ApiProperty)({
        description: 'circularMove 방향 [left, right]',
        enum: ['left', 'right'],
        example: 'left',
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MoveLinearRequestDto.prototype, "direction", void 0);


/***/ }),
/* 114 */
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
exports.SearchRequestDto = void 0;
const swagger_1 = __webpack_require__(81);
const pagination_request_1 = __webpack_require__(115);
const class_validator_1 = __webpack_require__(83);
const class_transformer_1 = __webpack_require__(82);
class SearchRequestDto extends pagination_request_1.PaginationRequest {
}
exports.SearchRequestDto = SearchRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => String),
    (0, swagger_1.ApiProperty)({
        example: '',
        description: '검색컬럼명. 검색하고자 하는 컬럼명을 입력해주세요. 없다면 모든 컬럼을 기준으로 검색합니다.',
        required: false,
    }),
    __metadata("design:type", String)
], SearchRequestDto.prototype, "searchType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => String),
    (0, swagger_1.ApiProperty)({
        example: '',
        description: '검색어. 검색하고자 하는 텍스트를 입력해주세요.',
        required: false,
    }),
    __metadata("design:type", String)
], SearchRequestDto.prototype, "searchText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, swagger_1.ApiProperty)({
        example: '',
        description: '정렬 옵션. 정렬하고자 하는 컬럼명을 입력해주세요.',
        required: false,
    }),
    __metadata("design:type", String)
], SearchRequestDto.prototype, "sortOption", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, swagger_1.ApiProperty)({
        example: '',
        description: '정렬 방향. ASC 또는 DESC를 입력해주세요.',
        required: false,
    }),
    __metadata("design:type", String)
], SearchRequestDto.prototype, "sortDirection", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, swagger_1.ApiProperty)({
        example: '2025-01-01 00:00:00',
        description: '검색 시작 날짜 (YYYY-MM-DD HH:MM:SS)',
        required: false,
    }),
    __metadata("design:type", String)
], SearchRequestDto.prototype, "dateFrom", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => String),
    (0, swagger_1.ApiProperty)({
        example: '2025-12-31 23:59:59',
        description: '검색 종료 날짜 (YYYY-MM-DD HH:MM:SS)',
        required: false,
    }),
    __metadata("design:type", String)
], SearchRequestDto.prototype, "dateTo", void 0);


/***/ }),
/* 115 */
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
exports.PaginationRequest = void 0;
exports.getPaginationOffset = getPaginationOffset;
exports.getPaginationLimit = getPaginationLimit;
const class_validator_1 = __webpack_require__(83);
const swagger_1 = __webpack_require__(81);
class PaginationRequest {
    getOffset() {
        if (this.pageNo === null || this.pageNo === undefined || this.pageNo < 1) {
            this.pageNo = 1;
        }
        if (this.pageSize === null || this.pageSize === undefined || this.pageSize < 1) {
            this.pageSize = 10;
        }
        return (Number(this.pageNo) - 1) * Number(this.pageSize);
    }
    getLimit() {
        if (this.pageSize === null || this.pageSize === undefined || this.pageSize < 1) {
            this.pageSize = 10;
        }
        return Number(this.pageSize);
    }
}
exports.PaginationRequest = PaginationRequest;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        example: '1',
        description: '페이지 번호',
        required: false,
    }),
    __metadata("design:type", Number)
], PaginationRequest.prototype, "pageNo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        example: '10',
        description: '페이지당 항목 수',
        required: false,
    }),
    __metadata("design:type", Number)
], PaginationRequest.prototype, "pageSize", void 0);
function getPaginationOffset(pageNo, pageSize) {
    if (pageNo === null || pageNo === undefined || pageNo < 1) {
        pageNo = 1;
    }
    if (pageSize === null || pageSize === undefined || pageSize < 1) {
        pageSize = 10;
    }
    return (Number(pageNo) - 1) * Number(pageSize);
}
function getPaginationLimit(pageSize) {
    if (pageSize === null || pageSize === undefined || pageSize < 1) {
        pageSize = 10;
    }
    return Number(pageSize);
}


/***/ }),
/* 116 */
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
__exportStar(__webpack_require__(115), exports);
__exportStar(__webpack_require__(117), exports);


/***/ }),
/* 117 */
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
exports.PaginationResponse = void 0;
const swagger_1 = __webpack_require__(81);
class PaginationResponse {
    constructor(list, pageSize, totalCount) {
        this.pageSize = pageSize;
        this.totalCount = totalCount;
        this.totalPage = Math.ceil(totalCount / pageSize);
        this.list = list;
    }
}
exports.PaginationResponse = PaginationResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '페이지당 항목 수',
        example: 10,
        required: false,
    }),
    __metadata("design:type", Number)
], PaginationResponse.prototype, "pageSize", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '전체 항목 수',
        example: 100,
        required: false,
    }),
    __metadata("design:type", Number)
], PaginationResponse.prototype, "totalCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '전체 페이지 수',
        example: 10,
        required: false,
    }),
    __metadata("design:type", Number)
], PaginationResponse.prototype, "totalPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '현재 페이지의 항목',
        example: [],
        required: false,
        type: (Array),
    }),
    __metadata("design:type", Array)
], PaginationResponse.prototype, "list", void 0);


/***/ }),
/* 118 */
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
const date_util_1 = __webpack_require__(37);
const swagger_1 = __webpack_require__(81);
const class_validator_1 = __webpack_require__(83);
const state_type_1 = __webpack_require__(119);
const class_transformer_1 = __webpack_require__(82);
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
/* 119 */
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
const microservices_1 = __webpack_require__(2);
const common_1 = __webpack_require__(3);
const path_1 = __webpack_require__(41);
const control_module_1 = __webpack_require__(55);
const localization_module_1 = __webpack_require__(87);
const config_1 = __webpack_require__(60);
const move_module_1 = __webpack_require__(101);
const constant_1 = __webpack_require__(70);
async function bootstrap() {
    const controlModule = await core_1.NestFactory.create(control_module_1.ControlModule);
    const config = controlModule.get(config_1.ConfigService);
    console.log('----------------->', config.get('CONTROL_GRPC_URL'));
    console.log('----------------->', config.get('MQTT_URL'));
    console.log('----------------->', config.get('LOCALIZATION_GRPC_URL'));
    console.log('----------------->', config.get('MOVE_GRPC_URL'));
    console.log('----------------->', config.get('NETWORK_GRPC_URL'));
    console.log('----------------->', config.get('COBOT_GRPC_URL'));
    controlModule.connectMicroservice({
        transport: microservices_1.Transport.GRPC,
        options: {
            package: common_1.ControlMicroservice.protobufPackage,
            protoPath: (0, path_1.join)(process.cwd(), 'proto/control.proto'),
            url: config.get('CONTROL_GRPC_URL'),
        },
    });
    controlModule.connectMicroservice({
        transport: microservices_1.Transport.MQTT,
        options: {
            url: config.get('MQTT_URL'),
            clientId: 'microservice-control',
        },
    });
    await controlModule.init();
    await controlModule.startAllMicroservices();
    const localizationModule = await core_1.NestFactory.create(localization_module_1.LocalizationModule);
    localizationModule.connectMicroservice({
        transport: microservices_1.Transport.GRPC,
        options: {
            package: common_1.LocalizationMicroservice.protobufPackage,
            protoPath: (0, path_1.join)(process.cwd(), 'proto/localization.proto'),
            url: config.get('LOCALIZATION_GRPC_URL'),
        },
    });
    localizationModule.connectMicroservice({
        transport: microservices_1.Transport.MQTT,
        options: {
            url: config.get('MQTT_URL'),
            clientId: 'microservice-localization',
        },
    });
    await localizationModule.init();
    await localizationModule.startAllMicroservices();
    const moveModule = await core_1.NestFactory.create(move_module_1.MoveModule);
    moveModule.connectMicroservice({
        transport: microservices_1.Transport.GRPC,
        options: {
            package: common_1.MoveMicroservice.protobufPackage,
            protoPath: (0, path_1.join)(process.cwd(), 'proto/move.proto'),
            url: config.get('MOVE_GRPC_URL'),
            loader: {
                defaults: true,
            },
        },
    });
    moveModule.connectMicroservice({
        transport: microservices_1.Transport.MQTT,
        options: {
            url: config.get('MQTT_URL'),
            clientId: 'microservice-move',
        },
    });
    await moveModule.init();
    await moveModule.startAllMicroservices();
    const mqttClient = moveModule.get(constant_1.MQTT_BROKER);
    await mqttClient.connect();
    mqttClient.emit('get:socket:connection', {});
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map