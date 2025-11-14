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
__exportStar(__webpack_require__(25), exports);
__exportStar(__webpack_require__(28), exports);


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
exports.TcpMicroservice = exports.UpdateMicroservice = exports.LogMicroservice = exports.CobotMicroservice = exports.SoundMicroservice = exports.SettingMicroservice = exports.TaskMicroservice = exports.OnvifMicroservice = exports.MapMicroservice = exports.NetworkMicroservice = exports.LocalizationMicroservice = exports.MoveMicroservice = exports.CodeMicroservice = exports.ControlMicroservice = exports.ConfigMicroservice = exports.RedisMicroservice = exports.AmrMicroservice = exports.AuthMicroservice = exports.UserMicroservice = void 0;
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
            "getTopologyNew",
            "saveTopologyNew",
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
exports.SEM_LOG_GRPC_SERVICE_NAME = exports.LOG_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.SEMLogGrpcServiceControllerMethods = SEMLogGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(2);
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
__exportStar(__webpack_require__(26), exports);


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GrpcInterceptor = void 0;
const rxjs_1 = __webpack_require__(27);
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
/* 27 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 28 */
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
__exportStar(__webpack_require__(29), exports);
__exportStar(__webpack_require__(52), exports);


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerService = void 0;
const winston_1 = __webpack_require__(30);
const DailyRotateFile = __webpack_require__(31);
const util_1 = __webpack_require__(32);
const chalk_1 = __webpack_require__(51);
const fs_1 = __webpack_require__(38);
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
        const jsonRegex = /:\s*(\[.*?\]|\{.*?\})/g;
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
            const items = data.map((item) => {
                if (typeof item === 'object' && item !== null) {
                    return formatDataRecursive(item);
                }
                return cleanJsonString(JSON.stringify(item));
            });
            return `[${items.join(', ')}]`;
        }
        else {
            const items = data.slice(0, 4).map((item) => {
                if (typeof item === 'object' && item !== null) {
                    return formatDataRecursive(item);
                }
                return cleanJsonString(JSON.stringify(item));
            });
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
        const categoryMatches = message.match(/\[(?!['"])[A-Za-z0-9 _-]+\]/g);
        const category = categoryMatches ? categoryMatches.map((match) => match.slice(1, -1)) : [];
        let logtext = message.replace(/\[(?!['"])[A-Za-z0-9 _-]+\]/g, '').trim();
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
        const categoryMatches = message.match(/\[([^\]]+)\]/g);
        const category = categoryMatches ? categoryMatches.map((match) => match.slice(1, -1)) : [];
        const logtext = message.replace(/\[[^\]]+\]/g, '').trim();
        return `[${levelText}] ${pid}  - ${util_1.DateUtil.formatDateKST(new Date(timestamp))}   LOG [${category}] ${logtext}`;
    }
});
const loggers = new Map();
class LoggerService {
    constructor(service) {
        const logPath = '/data/log/' + service;
        if (!(0, fs_1.existsSync)(logPath)) {
            (0, fs_1.mkdirSync)(logPath, { recursive: true });
        }
        chalk_1.default.level = 3;
        this.logger = (0, winston_1.createLogger)({
            level: 'debug',
            transports: [
                new DailyRotateFile({
                    filename: logPath + '/%DATE%.log',
                    datePattern: 'YYYY-MM-DD',
                    level: 'debug',
                    format: winston_1.format.combine(winston_1.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), fileFormat),
                }),
                new winston_1.transports.Console({
                    level: 'debug',
                    format: winston_1.format.combine(winston_1.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), customFormat),
                }),
            ],
        });
    }
    static get(service) {
        if (!loggers.has(service)) {
            loggers.set(service, new LoggerService(service));
        }
        return loggers.get(service);
    }
    error(str) {
        this.logger.error(str);
    }
    warn(str) {
        this.logger.warn(str);
    }
    info(str) {
        this.logger.info(str);
    }
    debug(str) {
        this.logger.debug(str);
    }
}
exports.LoggerService = LoggerService;


/***/ }),
/* 30 */
/***/ ((module) => {

module.exports = require("winston");

/***/ }),
/* 31 */
/***/ ((module) => {

module.exports = require("winston-daily-rotate-file");

/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationUtil = exports.CryptoUtil = exports.ParseUtil = exports.FileUtil = exports.DateUtil = exports.UrlUtil = void 0;
var url_util_1 = __webpack_require__(33);
Object.defineProperty(exports, "UrlUtil", ({ enumerable: true, get: function () { return url_util_1.UrlUtil; } }));
var date_util_1 = __webpack_require__(35);
Object.defineProperty(exports, "DateUtil", ({ enumerable: true, get: function () { return date_util_1.DateUtil; } }));
var file_util_1 = __webpack_require__(37);
Object.defineProperty(exports, "FileUtil", ({ enumerable: true, get: function () { return file_util_1.FileUtil; } }));
var parse_util_1 = __webpack_require__(48);
Object.defineProperty(exports, "ParseUtil", ({ enumerable: true, get: function () { return parse_util_1.ParseUtil; } }));
var crypto_util_1 = __webpack_require__(49);
Object.defineProperty(exports, "CryptoUtil", ({ enumerable: true, get: function () { return crypto_util_1.CryptoUtil; } }));
var validation_util_1 = __webpack_require__(50);
Object.defineProperty(exports, "ValidationUtil", ({ enumerable: true, get: function () { return validation_util_1.ValidationUtil; } }));


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UrlUtil = void 0;
const uuid_1 = __webpack_require__(34);
class UrlUtil {
    static generateUUID() {
        return (0, uuid_1.v4)();
    }
}
exports.UrlUtil = UrlUtil;


/***/ }),
/* 34 */
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DateUtil = void 0;
const date_fns_1 = __webpack_require__(36);
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
/* 36 */
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileUtil = void 0;
const fs = __webpack_require__(38);
const path = __webpack_require__(39);
const unzipper = __webpack_require__(40);
const il = __webpack_require__(41);
const uuid_1 = __webpack_require__(34);
const archiver_1 = __webpack_require__(42);
const csv = __webpack_require__(43);
const zlib_1 = __webpack_require__(44);
const rpc_code_exception_1 = __webpack_require__(45);
const constant_1 = __webpack_require__(46);
const microservices_1 = __webpack_require__(2);
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
/* 38 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 39 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 40 */
/***/ ((module) => {

module.exports = require("unzipper");

/***/ }),
/* 41 */
/***/ ((module) => {

module.exports = require("iconv-lite");

/***/ }),
/* 42 */
/***/ ((module) => {

module.exports = require("archiver");

/***/ }),
/* 43 */
/***/ ((module) => {

module.exports = require("csv");

/***/ }),
/* 44 */
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),
/* 45 */
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
/* 46 */
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
__exportStar(__webpack_require__(47), exports);


/***/ }),
/* 47 */
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
/* 48 */
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
/* 49 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CryptoUtil = void 0;
class CryptoUtil {
}
exports.CryptoUtil = CryptoUtil;


/***/ }),
/* 50 */
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
/* 51 */
/***/ ((module) => {

module.exports = require("chalk");

/***/ }),
/* 52 */
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
/* 53 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 54 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(55);
const config_1 = __webpack_require__(53);
const Joi = __webpack_require__(56);
const typeorm_1 = __webpack_require__(57);
const microservices_1 = __webpack_require__(2);
const constant_1 = __webpack_require__(58);
const path_1 = __webpack_require__(39);
const code_module_1 = __webpack_require__(65);
const common_2 = __webpack_require__(3);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                validationSchema: Joi.object({
                    CODE_GRPC_URL: Joi.string().required(),
                    POSTGRES_URL: Joi.string().required(),
                }),
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: (configService) => ({
                    type: 'postgres',
                    url: configService.getOrThrow('POSTGRES_URL'),
                    autoLoadEntities: true,
                    synchronize: true,
                }),
                inject: [config_1.ConfigService],
            }),
            microservices_1.ClientsModule.registerAsync({
                clients: [
                    {
                        name: constant_1.CODE_SERVICE,
                        useFactory: (configService) => ({
                            transport: microservices_1.Transport.GRPC,
                            options: {
                                package: common_2.CodeMicroservice.protobufPackage,
                                protoPath: (0, path_1.join)(process.cwd(), 'proto', 'code.proto'),
                                url: configService.get('CODE_GRPC_URL'),
                            },
                        }),
                        inject: [config_1.ConfigService],
                    },
                ],
                isGlobal: true,
            }),
            code_module_1.CodeModule,
        ],
    })
], AppModule);


/***/ }),
/* 55 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 56 */
/***/ ((module) => {

module.exports = require("joi");

/***/ }),
/* 57 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 58 */
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
__exportStar(__webpack_require__(59), exports);
__exportStar(__webpack_require__(60), exports);
exports.environment = __webpack_require__(61);
exports.message = __webpack_require__(63);


/***/ }),
/* 59 */
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
/* 60 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 61 */
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
__exportStar(__webpack_require__(62), exports);


/***/ }),
/* 62 */
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
/* 63 */
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
__exportStar(__webpack_require__(64), exports);


/***/ }),
/* 64 */
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
/* 65 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CodeModule = void 0;
const common_1 = __webpack_require__(55);
const code_service_1 = __webpack_require__(66);
const code_controller_1 = __webpack_require__(69);
const typeorm_1 = __webpack_require__(57);
const code_entity_1 = __webpack_require__(70);
const typeorm_adapter_1 = __webpack_require__(72);
let CodeModule = class CodeModule {
};
exports.CodeModule = CodeModule;
exports.CodeModule = CodeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([code_entity_1.CodeEntity])],
        controllers: [code_controller_1.CodeController],
        providers: [
            code_service_1.CodeService,
            {
                provide: 'DatabaseOutputPort',
                useClass: typeorm_adapter_1.TypeOrmAdapter,
            },
        ],
        exports: [code_service_1.CodeService],
    })
], CodeModule);


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CodeService = void 0;
const common_1 = __webpack_require__(55);
const code_model_1 = __webpack_require__(67);
const database_output_port_1 = __webpack_require__(68);
let CodeService = class CodeService {
    constructor(databaseOutputPort) {
        this.databaseOutputPort = databaseOutputPort;
    }
    async getCodeList(param) {
        const criteria = code_model_1.CodeSearchCriteria.create({
            codeId: param.codeId,
            code: param.code,
            codeName: param.codeName,
            codeDesc: param.codeDesc,
            parentCode: param.parentCode,
            sortOrder: param.sortOrder,
            useYn: param.useYn,
            createdAt: param.createdAt,
            createdAtStart: param.createdAtStart,
            createdAtEnd: param.createdAtEnd,
            updatedAt: param.updatedAt,
            updatedAtStart: param.updatedAtStart,
            updatedAtEnd: param.updatedAtEnd,
            createdBy: param.createdBy,
            updatedBy: param.updatedBy,
            searchType: param.searchType,
            searchText: param.searchText,
        });
        const pageInfo = new code_model_1.PageInfo(param.pageNo, param.pageSize);
        const result = await this.databaseOutputPort.findCodeByCriteria(criteria, pageInfo);
        return {
            pageNo: pageInfo.pageNo,
            pageSize: pageInfo.pageSize,
            totalCount: result.totalCount,
            totalPage: result.totalPage,
            data: result.code.map((code) => this.mapCodeToResponse(code)),
        };
    }
    mapCodeToResponse(code) {
        return {
            codeId: code.codeId,
            code: code.code,
            codeName: code.codeName,
            codeDesc: code.codeDesc,
            parentCode: code.parentCode,
            sortOrder: code.sortOrder,
            useYn: code.useYn,
            createdAt: code.createdAt?.toISOString(),
            updatedAt: code.updatedAt?.toISOString(),
            createdBy: code.createdBy,
            updatedBy: code.updatedBy,
        };
    }
    async getCode(param) {
        if (!param.codeId) {
            throw new Error('코드 ID는 필수입니다.');
        }
        const code = await this.databaseOutputPort.findCodeById(param.codeId);
        if (!code) {
            throw new Error('코드를 찾을 수 없습니다.');
        }
        return this.mapCodeToResponse(code);
    }
    async addCode(param) {
        const exists = await this.databaseOutputPort.existsCode(param.codeId);
        if (exists) {
            throw new Error('이미 존재하는 코드 ID 입니다.');
        }
        const code = code_model_1.Code.create({
            codeId: param.codeId,
            code: param.code,
            codeName: param.codeName,
            codeDesc: param.codeDesc,
            parentCode: param.parentCode,
            sortOrder: param.sortOrder,
            useYn: param.useYn,
            createdBy: param.createdBy,
        });
        const savedCode = await this.databaseOutputPort.saveCode(code);
        return this.mapCodeToResponse(savedCode);
    }
    async modifyCode(param) {
        const code = await this.databaseOutputPort.findCodeById(param.codeId);
        if (!code) {
            throw new Error('코드를 찾을 수 없습니다.');
        }
        if (param.data) {
            code.update({
                code: param.data.code,
                codeName: param.data.codeName,
                codeDesc: param.data.codeDesc,
                parentCode: param.data.parentCode,
                sortOrder: param.data.sortOrder,
                updatedBy: param.data.updatedBy,
            });
        }
        if (param.data.useYn && param.data.useYn !== code.useYn) {
            code.setUse({
                useYn: param.data.useYn,
                updatedBy: param.data.updatedBy,
            });
        }
        const updatedCode = await this.databaseOutputPort.updateCode(param.codeId, code);
        return this.mapCodeToResponse(updatedCode);
    }
    async removeCode(codeId) {
        const code = await this.databaseOutputPort.findCodeById(codeId);
        if (!code) {
            throw new Error('코드를 찾을 수 없습니다.');
        }
        await this.databaseOutputPort.deleteCode(codeId);
        return this.mapCodeToResponse(code);
    }
};
exports.CodeService = CodeService;
exports.CodeService = CodeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DatabaseOutputPort')),
    __metadata("design:paramtypes", [typeof (_a = typeof database_output_port_1.DatabaseOutputPort !== "undefined" && database_output_port_1.DatabaseOutputPort) === "function" ? _a : Object])
], CodeService);


/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CodePageResult = exports.PageInfo = exports.CodeSearchCriteria = exports.Code = void 0;
class Code {
    constructor(_codeId, _code, _codeName, _codeDesc, _useYn, _parentCode, _sortOrder, _createdAt, _createdBy, _updatedAt, _updatedBy) {
        this._codeId = _codeId;
        this._code = _code;
        this._codeName = _codeName;
        this._codeDesc = _codeDesc;
        this._useYn = _useYn;
        this._parentCode = _parentCode;
        this._sortOrder = _sortOrder;
        this._createdAt = _createdAt;
        this._createdBy = _createdBy;
        this._updatedAt = _updatedAt;
        this._updatedBy = _updatedBy;
    }
    static create(param) {
        if (!param.codeId?.trim()) {
            throw new Error('코드 ID는 필수입니다.');
        }
        return new Code(param.codeId, param.code, param.codeName, param.codeDesc, param.useYn, param.parentCode, param.sortOrder, new Date());
    }
    static reconstitute(param) {
        return new Code(param.codeId, param.code, param.codeName, param.codeDesc, param.useYn, param.parentCode, param.sortOrder, param.createdAt, param.createdBy, param.updatedAt, param.updatedBy);
    }
    update(param) {
        this._code = param.code;
        this._codeName = param.codeName;
        this._codeDesc = param.codeDesc;
        this._parentCode = param.parentCode;
        this._sortOrder = param.sortOrder;
        this._updatedAt = new Date();
        this._updatedBy = param.updatedBy;
    }
    setUse(param) {
        this._useYn = param.useYn;
        this._updatedAt = new Date();
        this._updatedBy = param.updatedBy;
    }
    get codeId() {
        return this._codeId;
    }
    get code() {
        return this._code;
    }
    get codeName() {
        return this._codeName;
    }
    get codeDesc() {
        return this._codeDesc;
    }
    get parentCode() {
        return this._parentCode;
    }
    get sortOrder() {
        return this._sortOrder;
    }
    get useYn() {
        return this._useYn;
    }
    get createdAt() {
        return this._createdAt;
    }
    get createdBy() {
        return this._createdBy;
    }
    get updatedAt() {
        return this._updatedAt;
    }
    get updatedBy() {
        return this._updatedBy;
    }
}
exports.Code = Code;
class CodeSearchCriteria {
    constructor(codeId, code, codeName, codeDesc, parentCode, sortOrder, useYn, createdAt, createdAtStart, createdAtEnd, updatedAt, updatedAtStart, updatedAtEnd, createdBy, updatedBy, searchType, searchText) {
        this.codeId = codeId;
        this.code = code;
        this.codeName = codeName;
        this.codeDesc = codeDesc;
        this.parentCode = parentCode;
        this.sortOrder = sortOrder;
        this.useYn = useYn;
        this.createdAt = createdAt;
        this.createdAtStart = createdAtStart;
        this.createdAtEnd = createdAtEnd;
        this.updatedAt = updatedAt;
        this.updatedAtStart = updatedAtStart;
        this.updatedAtEnd = updatedAtEnd;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
        this.searchType = searchType;
        this.searchText = searchText;
    }
    static create(param) {
        return new CodeSearchCriteria(param.codeId, param.code, param.codeName, param.codeDesc, param.parentCode, param.sortOrder, param.useYn, param.createdAt ? new Date(param.createdAt) : undefined, param.createdAtStart ? new Date(param.createdAtStart) : undefined, param.createdAtEnd ? new Date(param.createdAtEnd) : undefined, param.updatedAt ? new Date(param.updatedAt) : undefined, param.updatedAtStart ? new Date(param.updatedAtStart) : undefined, param.updatedAtEnd ? new Date(param.updatedAtEnd) : undefined, param.createdBy, param.updatedBy, param.searchType, param.searchText);
    }
}
exports.CodeSearchCriteria = CodeSearchCriteria;
class PageInfo {
    constructor(pageNo, pageSize) {
        this.pageNo = pageNo;
        this.pageSize = pageSize;
        if (pageNo < 1)
            throw new Error('페이지 번호는 1 이상이어야 합니다.');
        if (pageSize < 1)
            throw new Error('페이지 크기는 1 이상이어야 합니다.');
        if (pageSize > 1000000)
            throw new Error('페이지 크기가 너무 큽니다.');
    }
    get offset() {
        const result = (this.pageNo - 1) * this.pageSize;
        if (result > Number.MAX_SAFE_INTEGER) {
            throw new Error('Offset 값이 너무 큽니다.');
        }
        return result;
    }
}
exports.PageInfo = PageInfo;
class CodePageResult {
    constructor(code, totalCount, pageInfo) {
        this.code = code;
        this.totalCount = totalCount;
        this.pageInfo = pageInfo;
    }
    get totalPage() {
        return Math.ceil(this.totalCount / this.pageInfo.pageSize);
    }
    get hasNext() {
        return this.pageInfo.pageNo < this.totalPage;
    }
    get hasPrevious() {
        return this.pageInfo.pageNo > 1;
    }
}
exports.CodePageResult = CodePageResult;


/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CodeController = void 0;
const common_1 = __webpack_require__(55);
const code_service_1 = __webpack_require__(66);
const common_2 = __webpack_require__(3);
let CodeController = class CodeController {
    constructor(codeService) {
        this.codeService = codeService;
    }
    async readCodeList(param) {
        const serviceRequest = {
            pageNo: param.pageNo || 1,
            pageSize: param.pageSize || 10,
            searchType: param.searchType,
            searchText: param.searchText,
            codeId: param.codeId,
            code: param.code,
            codeName: param.codeName,
            codeDesc: param.codeDesc,
            parentCode: param.parentCode,
            sortOrder: param.sortOrder,
            useYn: param.useYn,
            createdAt: param.createdAt,
            updatedAt: param.updatedAt,
            createdAtStart: param.createdAtStart,
            createdAtEnd: param.createdAtEnd,
            updatedAtStart: param.updatedAtStart,
            updatedAtEnd: param.updatedAtEnd,
            createdBy: param.createdBy,
            updatedBy: param.updatedBy,
        };
        const serviceResponse = await this.codeService.getCodeList(serviceRequest);
        return {
            pageNo: serviceResponse.pageNo,
            pageSize: serviceResponse.pageSize,
            totalCount: serviceResponse.totalCount,
            totalPage: serviceResponse.totalPage,
            data: serviceResponse.data.map((code) => ({
                codeId: code.codeId,
                code: code.code,
                codeName: code.codeName,
                codeDesc: code.codeDesc,
                parentCode: code.parentCode,
                sortOrder: code.sortOrder,
                useYn: code.useYn,
                createdAt: code.createdAt,
                updatedAt: code.updatedAt,
                createdBy: code.createdBy,
                updatedBy: code.updatedBy,
            })),
        };
    }
    async readCode(param) {
        const serviceRequest = {
            codeId: param.codeId,
            code: param.code,
            codeName: param.codeName,
            codeDesc: param.codeDesc,
            parentCode: param.parentCode,
            sortOrder: param.sortOrder,
            useYn: param.useYn,
            createdAt: param.createdAt,
            updatedAt: param.updatedAt,
            createdBy: param.createdBy,
            updatedBy: param.updatedBy,
        };
        const serviceResponse = await this.codeService.getCode(serviceRequest);
        return {
            codeId: serviceResponse.codeId,
            code: serviceResponse.code,
            codeName: serviceResponse.codeName,
            codeDesc: serviceResponse.codeDesc,
            parentCode: serviceResponse.parentCode,
            sortOrder: serviceResponse.sortOrder,
            useYn: serviceResponse.useYn,
            createdAt: serviceResponse.createdAt,
            updatedAt: serviceResponse.updatedAt,
        };
    }
    async createCode(param) {
        const serviceRequest = {
            codeId: param.codeId,
            code: param.code,
            codeName: param.codeName,
            codeDesc: param.codeDesc,
            parentCode: param.parentCode,
            sortOrder: param.sortOrder,
            useYn: param.useYn,
            createdBy: param.createdBy,
        };
        const serviceResponse = await this.codeService.addCode(serviceRequest);
        return {
            codeId: serviceResponse.codeId,
            code: serviceResponse.code,
            codeName: serviceResponse.codeName,
            codeDesc: serviceResponse.codeDesc,
            parentCode: serviceResponse.parentCode,
            sortOrder: serviceResponse.sortOrder,
            useYn: serviceResponse.useYn,
            createdAt: serviceResponse.createdAt,
            createdBy: serviceResponse.createdBy,
        };
    }
    async updateCode(param) {
        const serviceRequest = {
            codeId: param.codeId,
            data: param.data
                ? {
                    code: param.data.code,
                    codeName: param.data.codeName,
                    codeDesc: param.data.codeDesc,
                    parentCode: param.data.parentCode,
                    sortOrder: param.data.sortOrder,
                    useYn: param.data.useYn,
                    updatedBy: param.data.updatedBy,
                }
                : undefined,
        };
        const serviceResponse = await this.codeService.modifyCode(serviceRequest);
        return {
            codeId: serviceResponse.codeId,
            code: serviceResponse.code,
            codeName: serviceResponse.codeName,
            codeDesc: serviceResponse.codeDesc,
            parentCode: serviceResponse.parentCode,
            sortOrder: serviceResponse.sortOrder,
            useYn: serviceResponse.useYn,
            updatedAt: serviceResponse.updatedAt,
            updatedBy: serviceResponse.updatedBy,
        };
    }
    async deleteCode(param) {
        const serviceResponse = await this.codeService.removeCode(param.codeId);
        return {
            codeId: serviceResponse.codeId,
            code: serviceResponse.code,
            codeName: serviceResponse.codeName,
            codeDesc: serviceResponse.codeDesc,
            parentCode: serviceResponse.parentCode,
            sortOrder: serviceResponse.sortOrder,
            useYn: serviceResponse.useYn,
            createdAt: serviceResponse.createdAt,
            updatedAt: serviceResponse.updatedAt,
            createdBy: serviceResponse.createdBy,
            updatedBy: serviceResponse.updatedBy,
        };
    }
};
exports.CodeController = CodeController;
exports.CodeController = CodeController = __decorate([
    (0, common_1.Controller)(),
    common_2.CodeMicroservice.CodeGrpcServiceControllerMethods(),
    __metadata("design:paramtypes", [typeof (_a = typeof code_service_1.CodeService !== "undefined" && code_service_1.CodeService) === "function" ? _a : Object])
], CodeController);


/***/ }),
/* 70 */
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
exports.CodeEntity = void 0;
const typeorm_1 = __webpack_require__(71);
let CodeEntity = class CodeEntity {
    setUpdateDt() {
        this.updatedAt = new Date();
    }
};
exports.CodeEntity = CodeEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid', {
        name: 'code_id',
    }),
    __metadata("design:type", String)
], CodeEntity.prototype, "codeId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'code', type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], CodeEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'code_name', type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], CodeEntity.prototype, "codeName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'code_desc', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CodeEntity.prototype, "codeDesc", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'parent_code', type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], CodeEntity.prototype, "parentCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sort_order', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], CodeEntity.prototype, "sortOrder", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'use_yn',
        type: 'varchar',
        length: 5,
        default: 'Y',
        nullable: true,
    }),
    __metadata("design:type", String)
], CodeEntity.prototype, "useYn", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        comment: '생성일자',
    }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CodeEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_by',
        type: 'varchar',
        length: 50,
        comment: '생성자 아이디',
        nullable: true,
    }),
    __metadata("design:type", String)
], CodeEntity.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'updated_at',
        type: 'timestamp',
        comment: '수정일자',
        nullable: true,
    }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CodeEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'updated_by',
        type: 'varchar',
        length: 50,
        comment: '수정자 아이디',
        nullable: true,
    }),
    __metadata("design:type", String)
], CodeEntity.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CodeEntity.prototype, "setUpdateDt", null);
exports.CodeEntity = CodeEntity = __decorate([
    (0, typeorm_1.Entity)('code', {
        orderBy: {
            createdAt: 'DESC',
        },
    })
], CodeEntity);


/***/ }),
/* 71 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 72 */
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TypeOrmAdapter = void 0;
const code_model_1 = __webpack_require__(67);
const common_1 = __webpack_require__(55);
const typeorm_1 = __webpack_require__(71);
const code_entity_1 = __webpack_require__(70);
const code_entity_mapper_1 = __webpack_require__(73);
const typeorm_2 = __webpack_require__(57);
let TypeOrmAdapter = class TypeOrmAdapter {
    constructor(codeRepository) {
        this.codeRepository = codeRepository;
    }
    async findCodeById(codeId) {
        const entity = await this.codeRepository.findOne({
            where: { codeId: codeId },
        });
        return entity ? code_entity_mapper_1.CodeEntityMapper.toDomain(entity) : null;
    }
    async findCodeByCriteria(criteria, pageInfo) {
        const queryBuilder = this.codeRepository.createQueryBuilder('code');
        this.applyCriteria(queryBuilder, criteria);
        const totalCount = await queryBuilder.getCount();
        queryBuilder.orderBy('code.createdAt', 'DESC').skip(pageInfo.offset).take(pageInfo.pageSize);
        const entity = await queryBuilder.getMany();
        const code = entity.map((code) => code_entity_mapper_1.CodeEntityMapper.toDomain(code));
        return new code_model_1.CodePageResult(code, totalCount, pageInfo);
    }
    async saveCode(code) {
        const entity = code_entity_mapper_1.CodeEntityMapper.fromDomain(code);
        const savedEntity = await this.codeRepository.save(entity);
        return code_entity_mapper_1.CodeEntityMapper.toDomain(savedEntity);
    }
    async updateCode(codeId, code) {
        const entity = code_entity_mapper_1.CodeEntityMapper.fromDomain(code);
        await this.codeRepository.update({ codeId: codeId }, entity);
        const updatedEntity = await this.codeRepository.findOne({
            where: { codeId: codeId },
        });
        if (!updatedEntity) {
            throw new Error('업데이트된 코드를 찾을 수 없습니다.');
        }
        return code_entity_mapper_1.CodeEntityMapper.toDomain(updatedEntity);
    }
    async deleteCode(codeId) {
        await this.codeRepository.delete({ codeId: codeId });
    }
    async existsCode(codeId) {
        const count = await this.codeRepository.count({
            where: { codeId: codeId },
        });
        return count > 0;
    }
    applyCriteria(queryBuilder, criteria) {
        if (criteria.codeId) {
            queryBuilder.andWhere('code.codeId = :codeId', {
                codeId: criteria.codeId,
            });
        }
        if (criteria.code) {
            queryBuilder.andWhere('code.code = :code', { code: criteria.code });
        }
        if (criteria.codeName) {
            queryBuilder.andWhere('code.codeName = :codeName', {
                codeName: criteria.codeName,
            });
        }
        if (criteria.codeDesc) {
            queryBuilder.andWhere('code.codeDesc = :codeDesc', {
                codeDesc: criteria.codeDesc,
            });
        }
        if (criteria.parentCode) {
            queryBuilder.andWhere('code.parentCode = :parentCode', {
                parentCode: criteria.parentCode,
            });
        }
        if (criteria.sortOrder) {
            queryBuilder.andWhere('code.sortOrder = :sortOrder', {
                sortOrder: criteria.sortOrder,
            });
        }
        if (criteria.useYn) {
            queryBuilder.andWhere('code.useYn = :useYn', { useYn: criteria.useYn });
        }
        if (criteria.createdAtStart) {
            queryBuilder.andWhere('amr.createdAt >= :createdAtStart', {
                createdAtStart: criteria.createdAtStart,
            });
        }
        if (criteria.createdAtEnd) {
            queryBuilder.andWhere('amr.createdAt <= :createdAtEnd', {
                createdAtEnd: criteria.createdAtEnd,
            });
        }
        if (criteria.createdAt) {
            queryBuilder.andWhere('amr.createdAt = :createdAt', {
                createdAt: criteria.createdAt,
            });
        }
        if (criteria.updatedAtStart) {
            queryBuilder.andWhere('amr.updatedAt >= :updatedAtStart', {
                updatedAtStart: criteria.updatedAtStart,
            });
        }
        if (criteria.updatedAtEnd) {
            queryBuilder.andWhere('amr.updatedAt <= :updatedAtEnd', {
                updatedAtEnd: criteria.updatedAtEnd,
            });
        }
        if (criteria.updatedAt) {
            queryBuilder.andWhere('amr.updatedAt = :updatedAt', {
                updatedAt: criteria.updatedAt,
            });
        }
        if (criteria.createdBy) {
            queryBuilder.andWhere('amr.createdBy = :createdBy', {
                createdBy: criteria.createdBy,
            });
        }
        if (criteria.updatedBy) {
            queryBuilder.andWhere('amr.updatedBy = :updatedBy', {
                updatedBy: criteria.updatedBy,
            });
        }
        if (criteria.searchType && criteria.searchText) {
            switch (criteria.searchType) {
                case 'code':
                    queryBuilder.andWhere('code.code LIKE :searchText', {
                        searchText: `%${criteria.searchText}%`,
                    });
                    break;
            }
        }
    }
};
exports.TypeOrmAdapter = TypeOrmAdapter;
exports.TypeOrmAdapter = TypeOrmAdapter = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(code_entity_1.CodeEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], TypeOrmAdapter);


/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CodeEntityMapper = void 0;
const code_model_1 = __webpack_require__(67);
class CodeEntityMapper {
    static fromDomain(code) {
        return {
            codeId: code.codeId,
            code: code.code,
            codeName: code.codeName,
            codeDesc: code.codeDesc,
            parentCode: code.parentCode,
            sortOrder: code.sortOrder,
            useYn: code.useYn,
            createdAt: code.createdAt,
            updatedAt: code.updatedAt,
            createdBy: code.createdBy,
            updatedBy: code.updatedBy,
        };
    }
    static toDomain(entity) {
        return code_model_1.Code.reconstitute({
            codeId: entity.codeId,
            code: entity.code,
            codeName: entity.codeName,
            codeDesc: entity.codeDesc,
            parentCode: entity.parentCode,
            sortOrder: entity.sortOrder,
            useYn: entity.useYn,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
            createdBy: entity.createdBy,
            updatedBy: entity.updatedBy,
        });
    }
}
exports.CodeEntityMapper = CodeEntityMapper;


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
exports.ConfigDBModule = void 0;
const common_1 = __webpack_require__(55);
const typeorm_1 = __webpack_require__(57);
const config_service_1 = __webpack_require__(75);
const db_grpc_controller_1 = __webpack_require__(77);
const db_api_controller_1 = __webpack_require__(78);
const config_entity_1 = __webpack_require__(76);
const pg_1 = __webpack_require__(84);
const config_1 = __webpack_require__(53);
const microservices_1 = __webpack_require__(2);
const constant_1 = __webpack_require__(58);
let ConfigDBModule = class ConfigDBModule {
};
exports.ConfigDBModule = ConfigDBModule;
exports.ConfigDBModule = ConfigDBModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: async (configService) => {
                    await ensureConfigDatabase();
                    return {
                        type: 'postgres',
                        url: configService.get('POSTGRES_URL') + '/config',
                        autoLoadEntities: true,
                        synchronize: true,
                    };
                },
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
            typeorm_1.TypeOrmModule.forFeature([config_entity_1.Config]),
        ],
        controllers: [db_grpc_controller_1.DBGrpcController, db_api_controller_1.DBConfigAPIController],
        providers: [config_service_1.ConfigDBService],
        exports: [config_service_1.ConfigDBService],
    })
], ConfigDBModule);
async function ensureConfigDatabase() {
    const client = new pg_1.Client({
        host: process.env.POSTGRES_HOST || 'localhost',
        port: parseInt(process.env.POSTGRES_PORT || '7000'),
        user: process.env.POSTGRES_USER || 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'postgres',
        database: 'postgres',
    });
    try {
        await client.connect();
        const result = await client.query("SELECT 1 FROM pg_database WHERE datname = 'config'");
        if (result.rows.length === 0) {
            await client.query('CREATE DATABASE config');
            console.log('🎉 config 데이터베이스 생성 완료');
        }
        else {
            console.log('✅ config 데이터베이스 이미 존재');
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
/* 75 */
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
exports.ConfigDBService = void 0;
const common_1 = __webpack_require__(55);
const typeorm_1 = __webpack_require__(71);
const typeorm_2 = __webpack_require__(57);
const common_2 = __webpack_require__(3);
const config_entity_1 = __webpack_require__(76);
const rpc_code_exception_1 = __webpack_require__(45);
const constant_1 = __webpack_require__(46);
const microservices_1 = __webpack_require__(2);
const constant_2 = __webpack_require__(58);
let ConfigDBService = class ConfigDBService {
    constructor(configRepository, mqttMicroservice) {
        this.configRepository = configRepository;
        this.mqttMicroservice = mqttMicroservice;
        this.loggerService = common_2.LoggerService.get('config');
        this.fired = false;
    }
    async onApplicationBootstrap() {
        this.mqttMicroservice.emit('ready:config', {});
    }
    async getConfig(request) {
        try {
            if (request.key === undefined || request.key === '') {
                throw new rpc_code_exception_1.RpcCodeException('key값이 없습니다', constant_1.GrpcCode.InvalidArgument);
            }
            const resp = await this.configRepository.findOneBy({ key: request.key });
            return { key: request.key, value: resp ? resp.value : null };
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.loggerService.error(`[DB] getConfig : ${JSON.stringify(request)} -> ${(0, common_2.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException(`DB 값을 조회할 수 없습니다`, constant_1.GrpcCode.InternalError);
        }
    }
    async getConfigAll() {
        try {
            const resp = await this.configRepository.find();
            return { configs: resp };
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.loggerService.error(`[DB] getConfigAll : ${(0, common_2.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException(`DB 값을 조회할 수 없습니다`, constant_1.GrpcCode.InternalError);
        }
    }
    async setConfigs(dto) {
        try {
            if (dto.configs === undefined || dto.configs.length === 0) {
                throw new rpc_code_exception_1.RpcCodeException(`configs 값이 없습니다`, constant_1.GrpcCode.InvalidArgument);
            }
            for (const config of dto.configs) {
                await this.setConfig(config);
            }
            return { ...dto, result: 'success' };
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.loggerService.error(`[DB] setConfigs : ${JSON.stringify(dto)} -> ${(0, common_2.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException(`DB 값을 저장할 수 없습니다`, constant_1.GrpcCode.InternalError);
        }
    }
    async setConfig(request) {
        try {
            this.loggerService.debug(`[DB] setConfig : ${JSON.stringify(request)}`);
            if (request.key === undefined || request.key === '') {
                throw new rpc_code_exception_1.RpcCodeException(`key 값이 없습니다`, constant_1.GrpcCode.InvalidArgument);
            }
            if (request.value === undefined || request.value === '') {
                throw new rpc_code_exception_1.RpcCodeException(`value 값이 없습니다`, constant_1.GrpcCode.InvalidArgument);
            }
            const resp = await this.configRepository.save(request);
            this.loggerService.info(`[DB] setConfig : ${JSON.stringify(resp)} done`);
            return { ...request, result: resp ? 'success' : 'fail' };
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.loggerService.error(`[DB] setConfig : ${JSON.stringify(request)} -> ${(0, common_2.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException(`DB 값을 저장할 수 없습니다`, constant_1.GrpcCode.InternalError);
        }
    }
    async deleteConfig(key) {
        try {
            this.loggerService.debug(`[DB] deleteConfig : ${key}`);
            if (key === undefined || key === '') {
                throw new rpc_code_exception_1.RpcCodeException(`key 값이 없습니다`, constant_1.GrpcCode.InvalidArgument);
            }
            const resp = await this.configRepository.delete({ key: key });
            if (!resp.affected || resp.affected == 0) {
                throw new rpc_code_exception_1.RpcCodeException(`key 값에 해당하는 객체가 없습니다 (${key})`, constant_1.GrpcCode.NotFound);
            }
            return { key: key, result: 'success' };
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.loggerService.error(`[DB] deleteConfig : ${key} -> ${(0, common_2.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException(`DB 값을 삭제할 수 없습니다`, constant_1.GrpcCode.InternalError);
        }
    }
    async deleteConfigs(dto) {
        try {
            if (dto.configs === undefined || dto.configs.length === 0) {
                throw new rpc_code_exception_1.RpcCodeException(`configs 값이 없습니다`, constant_1.GrpcCode.InvalidArgument);
            }
            for (const config of dto.configs) {
                await this.deleteConfig(config.key);
            }
            return { ...dto, result: 'success' };
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.loggerService.error(`[DB] deleteConfigs : ${JSON.stringify(dto)} -> ${(0, common_2.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException(`DB 값을 삭제할 수 없습니다`, constant_1.GrpcCode.InternalError);
        }
    }
};
exports.ConfigDBService = ConfigDBService;
exports.ConfigDBService = ConfigDBService = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, typeorm_2.InjectRepository)(config_entity_1.Config)),
    __param(1, (0, common_1.Inject)(constant_2.MQTT_BROKER)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _b : Object])
], ConfigDBService);


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Config = void 0;
const typeorm_1 = __webpack_require__(71);
let Config = class Config {
};
exports.Config = Config;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        unique: true,
    }),
    __metadata("design:type", String)
], Config.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Config.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Config.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Config.prototype, "updateAt", void 0);
__decorate([
    (0, typeorm_1.VersionColumn)(),
    __metadata("design:type", Number)
], Config.prototype, "version", void 0);
exports.Config = Config = __decorate([
    (0, typeorm_1.Entity)()
], Config);


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DBGrpcController = void 0;
const common_1 = __webpack_require__(55);
const src_1 = __webpack_require__(3);
const common_2 = __webpack_require__(3);
const config_service_1 = __webpack_require__(75);
let DBGrpcController = class DBGrpcController {
    constructor(configService) {
        this.configService = configService;
    }
    getConfigAll(request) {
        return this.configService.getConfigAll();
    }
    setConfigs(request) {
        return this.configService.setConfigs(request);
    }
    deleteConfig(request) {
        return this.configService.deleteConfig(request.key);
    }
    deleteConfigs(request) {
        return this.configService.deleteConfigs(request);
    }
    getConfig(request) {
        return this.configService.getConfig(request);
    }
    setConfig(request) {
        return this.configService.setConfig(request);
    }
};
exports.DBGrpcController = DBGrpcController;
exports.DBGrpcController = DBGrpcController = __decorate([
    (0, common_1.Controller)(),
    src_1.ConfigMicroservice.ConfigGrpcServiceControllerMethods(),
    (0, common_1.UseInterceptors)(common_2.GrpcInterceptor),
    __metadata("design:paramtypes", [typeof (_a = typeof config_service_1.ConfigDBService !== "undefined" && config_service_1.ConfigDBService) === "function" ? _a : Object])
], DBGrpcController);


/***/ }),
/* 78 */
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
exports.DBConfigAPIController = void 0;
const common_1 = __webpack_require__(55);
const swagger_1 = __webpack_require__(79);
const config_service_1 = __webpack_require__(75);
const set_dto_1 = __webpack_require__(80);
const set_dto_2 = __webpack_require__(80);
const delete_dto_1 = __webpack_require__(82);
const get_dto_1 = __webpack_require__(83);
let DBConfigAPIController = class DBConfigAPIController {
    constructor(configService) {
        this.configService = configService;
    }
    async getConfigAll() {
        return this.configService.getConfigAll();
    }
    async getConfig(dto) {
        return this.configService.getConfig(dto);
    }
    async setConfigs(dto) {
        return this.configService.setConfigs(dto);
    }
    async setConfig(dto) {
        return this.configService.setConfig(dto);
    }
    async deleteConfig(key) {
        return await this.configService.deleteConfig(key);
    }
    async deleteConfigs(dto) {
        return await this.configService.deleteConfigs(dto);
    }
};
exports.DBConfigAPIController = DBConfigAPIController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: '저장된 Config 전체 데이터 요청',
        description: 'Config 전체 데이터를 요청합니다.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DBConfigAPIController.prototype, "getConfigAll", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: '저장된 Config 키값 검색',
        description: 'Config 데이터에서 Key값으로 일치하는 데이터를 반환합니다. 해당 Key값을 찾을 수 없으면 value가 undefined로 반환됩니다.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof get_dto_1.GetConfigResponseDto !== "undefined" && get_dto_1.GetConfigResponseDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], DBConfigAPIController.prototype, "getConfig", null);
__decorate([
    (0, common_1.Post)('list'),
    (0, swagger_1.ApiOperation)({
        summary: 'Config DB 업데이트(여러개)',
        description: 'Config DB에 key-value 쌍을 여러개 한꺼번에 입력합니다.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof set_dto_1.SetConfigsRequestDto !== "undefined" && set_dto_1.SetConfigsRequestDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], DBConfigAPIController.prototype, "setConfigs", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Config DB 업데이트',
        description: 'Config DB에 key-value 쌍을 입력합니다.',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof set_dto_2.SetConfigRequestDto !== "undefined" && set_dto_2.SetConfigRequestDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], DBConfigAPIController.prototype, "setConfig", null);
__decorate([
    (0, common_1.Delete)(':key'),
    (0, swagger_1.ApiOperation)({
        summary: 'Config DB Key 삭제',
        description: 'Config DB에 key값이 일치하는 데이터를 삭제합니다.',
    }),
    __param(0, (0, common_1.Param)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DBConfigAPIController.prototype, "deleteConfig", null);
__decorate([
    (0, common_1.Delete)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Config DB Key 삭제(여러개)',
        description: 'Config DB에 key값이 일치하는 데이터를 삭제합니다.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof delete_dto_1.DeleteConfigsRequestDto !== "undefined" && delete_dto_1.DeleteConfigsRequestDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], DBConfigAPIController.prototype, "deleteConfigs", null);
exports.DBConfigAPIController = DBConfigAPIController = __decorate([
    (0, swagger_1.ApiTags)('Config DB API'),
    (0, common_1.Controller)('config'),
    __metadata("design:paramtypes", [typeof (_a = typeof config_service_1.ConfigDBService !== "undefined" && config_service_1.ConfigDBService) === "function" ? _a : Object])
], DBConfigAPIController);


/***/ }),
/* 79 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SetConfigsResponseDto = exports.SetConfigResponseDto = exports.SetConfigsRequestDto = exports.SetConfigRequestDto = void 0;
const swagger_1 = __webpack_require__(79);
const class_validator_1 = __webpack_require__(81);
class SetConfigRequestDto {
}
exports.SetConfigRequestDto = SetConfigRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: '설정 키', example: 'config_key' }),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], SetConfigRequestDto.prototype, "key", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: '설정 값', example: 'config_value' }),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], SetConfigRequestDto.prototype, "value", void 0);
class SetConfigsRequestDto {
}
exports.SetConfigsRequestDto = SetConfigsRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '설정 목록', example: [{ key: 'config_key', value: 'config_value' }] }),
    __metadata("design:type", Array)
], SetConfigsRequestDto.prototype, "configs", void 0);
class SetConfigResponseDto extends SetConfigRequestDto {
}
exports.SetConfigResponseDto = SetConfigResponseDto;
class SetConfigsResponseDto extends SetConfigsRequestDto {
}
exports.SetConfigsResponseDto = SetConfigsResponseDto;


/***/ }),
/* 81 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 82 */
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
exports.DeleteConfigsResponseDto = exports.DeleteConfigResponseDto = exports.DeleteConfigsRequestDto = exports.DeleteConfigRequestDto = void 0;
const swagger_1 = __webpack_require__(79);
const class_validator_1 = __webpack_require__(81);
class DeleteConfigRequestDto {
}
exports.DeleteConfigRequestDto = DeleteConfigRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: '설정 키', example: 'config_key' }),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], DeleteConfigRequestDto.prototype, "key", void 0);
class DeleteConfigsRequestDto {
}
exports.DeleteConfigsRequestDto = DeleteConfigsRequestDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ description: '설정 목록', example: [{ key: 'config_key' }] }),
    __metadata("design:type", Array)
], DeleteConfigsRequestDto.prototype, "configs", void 0);
class DeleteConfigResponseDto extends DeleteConfigRequestDto {
}
exports.DeleteConfigResponseDto = DeleteConfigResponseDto;
class DeleteConfigsResponseDto extends DeleteConfigsRequestDto {
}
exports.DeleteConfigsResponseDto = DeleteConfigsResponseDto;


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
exports.GetConfigsResponseDto = exports.GetConfigResponseDto = exports.GetConfigRequestDto = void 0;
const swagger_1 = __webpack_require__(79);
const class_validator_1 = __webpack_require__(81);
class GetConfigRequestDto {
}
exports.GetConfigRequestDto = GetConfigRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: '설정 키', example: 'config_key', required: false }),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], GetConfigRequestDto.prototype, "key", void 0);
class GetConfigResponseDto {
}
exports.GetConfigResponseDto = GetConfigResponseDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: '설정 키', example: 'config_key', required: false }),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], GetConfigResponseDto.prototype, "key", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: '설정 값', example: 'config_value', required: false }),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], GetConfigResponseDto.prototype, "value", void 0);
class GetConfigsResponseDto {
}
exports.GetConfigsResponseDto = GetConfigsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '설정 목록', example: [{ key: 'config_key', value: 'config_value' }], required: false }),
    __metadata("design:type", Array)
], GetConfigsResponseDto.prototype, "configs", void 0);


/***/ }),
/* 84 */
/***/ ((module) => {

module.exports = require("pg");

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
const path_1 = __webpack_require__(39);
const config_1 = __webpack_require__(53);
const app_module_1 = __webpack_require__(54);
const config_module_1 = __webpack_require__(74);
const common_2 = __webpack_require__(55);
const swagger_1 = __webpack_require__(79);
async function bootstrap() {
    const configModule = await core_1.NestFactory.create(config_module_1.ConfigDBModule);
    const config = configModule.get(config_1.ConfigService);
    configModule.connectMicroservice({
        transport: microservices_1.Transport.GRPC,
        options: {
            package: common_1.ConfigMicroservice.protobufPackage,
            protoPath: (0, path_1.join)(process.cwd(), 'proto/config.proto'),
            url: config.get('CONFIG_GRPC_URL'),
        },
    });
    configModule.useGlobalPipes(new common_2.ValidationPipe({ transform: true }));
    const swaggerConfig = new swagger_1.DocumentBuilder().setTitle('Config API').setDescription('WEB (RRS) Config APIs').setVersion('1.0').build();
    const document = swagger_1.SwaggerModule.createDocument(configModule, swaggerConfig);
    swagger_1.SwaggerModule.setup('docs/api', configModule, document);
    await configModule.init();
    await configModule.startAllMicroservices();
    await configModule.listen(config.get('CONFIG_API_PORT'));
    const codeModule = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = codeModule.get(config_1.ConfigService);
    codeModule.connectMicroservice({
        transport: microservices_1.Transport.GRPC,
        options: {
            package: [common_1.CodeMicroservice.protobufPackage],
            protoPath: [(0, path_1.join)(process.cwd(), 'proto', 'code.proto')],
            url: configService.get('CODE_GRPC_URL'),
        },
    });
    await codeModule.init();
    await codeModule.startAllMicroservices();
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map