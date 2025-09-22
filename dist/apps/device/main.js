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
        const grpcMethods = ["readAmrList", "readAmr", "createAmr", "updateAmr", "deleteAmr"];
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
exports.REDIS_ROBOT_CACHE_GRPC_SERVICE_NAME = exports.REDIS_SOCKET_CACHE_GRPC_SERVICE_NAME = exports.REDIS_PACKAGE_NAME = exports.RobotType = exports.protobufPackage = void 0;
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
const common_1 = __webpack_require__(3);
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
                    common_1.LoggerService.get('util').error(`[File] readCSV : ${(0, common_1.errorToJson)(error)}`);
                    reject(new rpc_code_exception_1.RpcCodeException('CSV 파일을 읽을 수 없습니다.', constant_1.GrpcCode.InternalError));
                })
                    .on('end', () => {
                    common_1.LoggerService.get('util').debug(`[File] readCSV : done (length : ${results.length})`);
                    resolve(results);
                });
            }
            catch (error) {
                if (error instanceof microservices_1.RpcException)
                    throw error;
                common_1.LoggerService.get('util').error(`[File] readCSV : ${(0, common_1.errorToJson)(error)}`);
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
                        res.setHeader('Content-Disposition', 'attachment; filename="cloud.csv.gz"');
                        const fileStream = fs.createReadStream(path);
                        const gzip = (0, zlib_1.createGzip)();
                        fileStream
                            .pipe(gzip)
                            .pipe(res)
                            .on('finish', () => {
                            common_1.LoggerService.get('util').debug(`[File] readCSVPipe : done`);
                            resolve();
                        })
                            .on('error', (error) => {
                            common_1.LoggerService.get('util').error(`[File] readCSVPipe : ${(0, common_1.errorToJson)(error)}`);
                            reject(new rpc_code_exception_1.RpcCodeException('CSV 파일을 읽을 수 없습니다.', constant_1.GrpcCode.InternalError));
                        });
                    }
                });
            }
            catch (error) {
                if (error instanceof microservices_1.RpcException)
                    throw error;
                common_1.LoggerService.get('util').error(`[File] readCSVPipe : ${(0, common_1.errorToJson)(error)}`);
                reject(new rpc_code_exception_1.RpcCodeException('CSV 파일을 읽을 수 없습니다.', constant_1.GrpcCode.InternalError));
            }
        });
    }
    static async saveCSV(path, data) {
        try {
            const csvData = data.map((row) => (Array.isArray(row) ? row.join(',') : row)).join('\n');
            if (data === undefined || data.length === 0) {
                common_1.LoggerService.get('util').error(`[File] saveCSV : data 값이 없습니다`);
                throw new rpc_code_exception_1.RpcCodeException('data 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            fs.writeFileSync(path, csvData);
            common_1.LoggerService.get('util').debug(`[File] saveCSV : done (path : ${path})`);
            return;
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            common_1.LoggerService.get('util').error(`[File] saveCSV : ${(0, common_1.errorToJson)(error)}`);
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
            if (error instanceof microservices_1.RpcException)
                throw error;
            common_1.LoggerService.get('util').error(`[File] readJson : ${(0, common_1.errorToJson)(error)}`);
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
            res.setHeader('Content-Disposition', 'attachment; filename="topo.json.gz"');
            const fileStream = fs.createReadStream(path);
            const gzip = (0, zlib_1.createGzip)();
            fileStream.pipe(gzip).pipe(res);
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            common_1.LoggerService.get('util').error(`[File] readJSONPipe : ${(0, common_1.errorToJson)(error)}`);
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
            if (typeof data === 'string') {
                data = JSON.parse(data);
            }
            fs.renameSync(dir, `${dir}.bak`);
            fs.writeFileSync(dir, JSON.stringify(data, null, 2));
            return;
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            common_1.LoggerService.get('util').error(`[File] saveJson : ${(0, common_1.errorToJson)(error)}`);
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControlModule = void 0;
const common_1 = __webpack_require__(54);
const control_mongo_adapter_1 = __webpack_require__(55);
const control_grpc_controller_1 = __webpack_require__(59);
const mongoose_1 = __webpack_require__(56);
const control_socket_io_adapter_1 = __webpack_require__(66);
const microservices_1 = __webpack_require__(2);
const control_mqtt_controller_1 = __webpack_require__(76);
const control_entity_1 = __webpack_require__(58);
const control_service_1 = __webpack_require__(60);
const config_1 = __webpack_require__(81);
const constant_1 = __webpack_require__(67);
const control_pending_service_1 = __webpack_require__(74);
let ControlModule = class ControlModule {
};
exports.ControlModule = ControlModule;
exports.ControlModule = ControlModule = __decorate([
    (0, common_1.Module)({
        imports: [
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
/* 54 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 55 */
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
exports.ControlMongoAdapter = void 0;
const mongoose_1 = __webpack_require__(56);
const mongoose_2 = __webpack_require__(57);
const control_entity_1 = __webpack_require__(58);
const common_1 = __webpack_require__(3);
const rpc_code_exception_1 = __webpack_require__(45);
const constant_1 = __webpack_require__(46);
let ControlMongoAdapter = class ControlMongoAdapter {
    constructor(Repository) {
        this.Repository = Repository;
        this.loggerService = common_1.LoggerService.get('device');
    }
    async getNodebyId(id) {
        try {
            return await this.Repository.findById(id);
        }
        catch (error) {
            this.loggerService.error(`[Control] DB getNodebyId : ${id} => ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 가져올 수 없습니다.', constant_1.GrpcCode.DBError);
        }
    }
    async save(model) {
        try {
            return await this.Repository.create(model);
        }
        catch (error) {
            this.loggerService.error(`[Control] DB save : ${JSON.stringify(model)} => ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 저장할 수 없습니다.', constant_1.GrpcCode.DBError);
        }
    }
    async update(model) {
        try {
            return await this.Repository.findByIdAndUpdate(model.id, model);
        }
        catch (error) {
            this.loggerService.error(`[Control] DB update : ${JSON.stringify(model)} => ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 업데이트할 수 없습니다.', constant_1.GrpcCode.DBError);
        }
    }
};
exports.ControlMongoAdapter = ControlMongoAdapter;
exports.ControlMongoAdapter = ControlMongoAdapter = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(control_entity_1.Control.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], ControlMongoAdapter);


/***/ }),
/* 56 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 57 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 58 */
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
const mongoose_1 = __webpack_require__(56);
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
    __metadata("design:type", Boolean)
], Control.prototype, "onoff", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Control.prototype, "mcuDio", void 0);
exports.Control = Control = __decorate([
    (0, mongoose_1.Schema)()
], Control);
exports.ControlSchema = mongoose_1.SchemaFactory.createForClass(Control);
exports.ControlSchema.set('timestamps', true);


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControlGrpcInputController = void 0;
const common_1 = __webpack_require__(3);
const common_2 = __webpack_require__(54);
const control_service_1 = __webpack_require__(60);
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
};
exports.ControlGrpcInputController = ControlGrpcInputController;
exports.ControlGrpcInputController = ControlGrpcInputController = __decorate([
    (0, common_2.Controller)(),
    common_1.ControlMicroservice.ControlGrpcServiceControllerMethods(),
    (0, common_2.UseInterceptors)(common_1.GrpcInterceptor),
    __metadata("design:paramtypes", [typeof (_a = typeof control_service_1.ControlService !== "undefined" && control_service_1.ControlService) === "function" ? _a : Object])
], ControlGrpcInputController);


/***/ }),
/* 60 */
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
exports.ControlService = void 0;
const microservices_1 = __webpack_require__(2);
const common_1 = __webpack_require__(54);
const control_database_output_port_1 = __webpack_require__(61);
const control_slamnav_output_port_1 = __webpack_require__(62);
const common_2 = __webpack_require__(3);
const control_domain_1 = __webpack_require__(63);
const rpc_code_exception_1 = __webpack_require__(45);
const constant_1 = __webpack_require__(46);
const control_ex_accessory_output_port_1 = __webpack_require__(65);
const control_type_1 = __webpack_require__(64);
let ControlService = class ControlService {
    constructor(databaseOutput, slamnavOutput, exAccessoryOutput) {
        this.databaseOutput = databaseOutput;
        this.slamnavOutput = slamnavOutput;
        this.exAccessoryOutput = exAccessoryOutput;
        this.slamnav_connection = false;
        this.exAccessory_connection = false;
        this.loggerService = common_2.LoggerService.get('device');
    }
    onModuleInit() {
        this.loggerService.debug(`[Control] Module Init`);
        this.slamnavOutput.checkSocketConnection();
    }
    async OnOffControl(request) {
        let command = null;
        try {
            this.loggerService.info(`[Control] OnOffControl : ${JSON.stringify(request)}`);
            command = new control_domain_1.ControlModel(request);
            const result = await this.databaseOutput.save(command);
            command.assignId(result._id.toString());
            command.checkVariables();
            if (!this.slamnav_connection) {
                throw new rpc_code_exception_1.RpcCodeException('SLAMNAV가 연결되지 않았습니다', constant_1.GrpcCode.FailedPrecondition);
            }
            const resp = await this.slamnavOutput.onoffControl(command);
            this.loggerService.info(`[Control] OnOffControl Response : ${JSON.stringify(resp)}`);
            command.statusChange('accept');
            await this.databaseOutput.update(command);
            return { ...resp, command: request.command, onoff: request.onoff };
        }
        catch (error) {
            this.loggerService.error(`[Control] OnOffControl : ${(0, common_2.errorToJson)(error)}`);
            if (command) {
                command.statusChange(control_domain_1.ControlStatus.fail);
                await this.databaseOutput.update(command);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('OnOff 명령을 수행할 수 없습니다', constant_1.GrpcCode.InternalError);
        }
    }
    async LEDControl(request) {
        let command = null;
        try {
            this.loggerService.info(`[Control] LEDControl : ${JSON.stringify(request)}`);
            command = new control_domain_1.ControlModel(request);
            const result = await this.databaseOutput.save(command);
            command.assignId(result._id.toString());
            command.checkVariables();
            if (!this.slamnav_connection) {
                throw new rpc_code_exception_1.RpcCodeException('SLAMNAV가 연결되지 않았습니다', constant_1.GrpcCode.FailedPrecondition);
            }
            const resp = await this.slamnavOutput.onoffControl(command);
            this.loggerService.info(`[Control] LEDControl Response : ${JSON.stringify(resp)}`);
            command.statusChange('accept');
            await this.databaseOutput.update(command);
            return { ...resp, command: request.command, onoff: request.onoff };
        }
        catch (error) {
            this.loggerService.error(`[Control] LEDControl : ${(0, common_2.errorToJson)(error)}`);
            if (command) {
                command.statusChange(control_domain_1.ControlStatus.fail);
                await this.databaseOutput.update(command);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('LEDControl 명령을 수행할 수 없습니다', constant_1.GrpcCode.InternalError);
        }
    }
    async WorkControl(request) {
        let command = null;
        try {
            this.loggerService.info(`[Control] WorkControl : ${JSON.stringify(request)}`);
            command = new control_domain_1.ControlModel(request);
            const result = await this.databaseOutput.save(command);
            command.assignId(result._id.toString());
            command.checkVariables();
            if (!this.slamnav_connection) {
                throw new rpc_code_exception_1.RpcCodeException('SLAMNAV가 연결되지 않았습니다', constant_1.GrpcCode.FailedPrecondition);
            }
            const resp = await this.slamnavOutput.workControl(command);
            this.loggerService.info(`[Control] WorkControl Response : ${JSON.stringify(resp)}`);
            if (resp.result === 'success' || resp.result === 'accept') {
                command.statusChange(resp.result);
                await this.databaseOutput.update(command);
            }
            else {
                throw new rpc_code_exception_1.RpcCodeException(resp.message, constant_1.GrpcCode.Aborted);
            }
            return resp;
        }
        catch (error) {
            this.loggerService.error(`[Control] WorkControl : ${(0, common_2.errorToJson)(error)}`);
            if (command) {
                command.statusChange(control_domain_1.ControlStatus.fail);
                await this.databaseOutput.update(command);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('WorkControl 명령을 수행할 수 없습니다', constant_1.GrpcCode.InternalError);
        }
    }
    async ExAccessoryControl(request) {
        let command = null;
        try {
            this.loggerService.info(`[Control] ExAccessoryControl : ${JSON.stringify(request)}`);
            command = new control_domain_1.ControlModel(request);
            const result = await this.databaseOutput.save(command);
            command.assignId(result._id.toString());
            command.checkVariables();
            if (!this.exAccessory_connection) {
                throw new rpc_code_exception_1.RpcCodeException('ExAccessory가 연결되지 않았습니다', constant_1.GrpcCode.FailedPrecondition);
            }
            const resp = await this.exAccessoryOutput.exAccessoryControl(command);
            this.loggerService.info(`[Control] ExAccessoryControl Response : ${JSON.stringify(resp)}`);
            command.statusChange('accept');
            await this.databaseOutput.update(command);
            return resp;
        }
        catch (error) {
            this.loggerService.error(`[Control] ExAccessoryControl : ${(0, common_2.errorToJson)(error)}`);
            if (command) {
                command.statusChange(control_domain_1.ControlStatus.fail);
                await this.databaseOutput.update(command);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('ExAccessoryControl 명령을 수행할 수 없습니다', constant_1.GrpcCode.InternalError);
        }
    }
    slamConnect() {
        this.slamnav_connection = true;
    }
    slamDisconnect() {
        this.slamnav_connection = false;
    }
    async updateResponse(resp) {
        this.loggerService.info(`[Control] updateResponse : ${JSON.stringify(resp)}`);
        const dbmodel = await this.databaseOutput.getNodebyId(resp.id);
        if (dbmodel) {
            const model = new control_domain_1.ControlModel(dbmodel);
            model.assignId(dbmodel._id);
            model.statusChange('accept');
            this.databaseOutput.update(model);
            this.loggerService.info(`[Control] update Response : ${model.id}, ${model.status}`);
        }
    }
    async SafetyIoControl(request) {
        let command = null;
        try {
            this.loggerService.info(`[Control] SafetyIoControl : ${JSON.stringify(request)}`);
            const req = {
                command: request.command,
                mcuDio: request.mcuDio.map((e) => e.channel),
            };
            command = new control_domain_1.ControlModel(req);
            const result = await this.databaseOutput.save(command);
            command.assignId(result._id.toString());
            command.checkVariables();
            if (!this.slamnav_connection) {
                throw new rpc_code_exception_1.RpcCodeException('SLAMNAV가 연결되지 않았습니다', constant_1.GrpcCode.FailedPrecondition);
            }
            const resp = await this.slamnavOutput.safetyIoControl(command);
            this.loggerService.info(`[Control] SafetyIoControl Response : ${JSON.stringify(resp)}`);
            command.statusChange('accept');
            await this.databaseOutput.update(command);
            return { ...resp, command: request.command, mcuDio: request.mcuDio };
        }
        catch (error) {
            this.loggerService.error(`[Control] SafetyIoControl : ${(0, common_2.errorToJson)(error)}`);
            if (command) {
                command.statusChange(control_domain_1.ControlStatus.fail);
                await this.databaseOutput.update(command);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('SafetyIoControl 명령을 수행할 수 없습니다', constant_1.GrpcCode.InternalError);
        }
    }
    async setSafetyField(request) {
        let command = null;
        try {
            this.loggerService.info(`[Control] setSafetyField : ${JSON.stringify(request)}`);
            command = new control_domain_1.ControlModel({ command: control_type_1.ControlCommand.setSafetyField, safetyField: request.safetyField });
            const result = await this.databaseOutput.save(command);
            command.assignId(result._id.toString());
            command.checkVariables();
            if (!this.slamnav_connection) {
                throw new rpc_code_exception_1.RpcCodeException('SLAMNAV가 연결되지 않았습니다', constant_1.GrpcCode.FailedPrecondition);
            }
            const resp = await this.slamnavOutput.safetyFieldControl(command);
            this.loggerService.info(`[Control] setSafetyField Response : ${JSON.stringify(resp)}`);
            command.statusChange('accept');
            await this.databaseOutput.update(command);
            return { ...resp, safetyField: request.safetyField };
        }
        catch (error) {
            this.loggerService.error(`[Control] setSafetyField : ${(0, common_2.errorToJson)(error)}`);
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('setSafetyField 명령을 수행할 수 없습니다', constant_1.GrpcCode.InternalError);
        }
    }
    async getSafetyField() {
        let command = null;
        try {
            this.loggerService.info(`[Control] getSafetyField `);
            command = new control_domain_1.ControlModel({ command: control_type_1.ControlCommand.getSafetyField });
            const result = await this.databaseOutput.save(command);
            command.assignId(result._id.toString());
            command.checkVariables();
            if (!this.slamnav_connection) {
                throw new rpc_code_exception_1.RpcCodeException('SLAMNAV가 연결되지 않았습니다', constant_1.GrpcCode.FailedPrecondition);
            }
            const resp = await this.slamnavOutput.safetyFieldControl(command);
            this.loggerService.info(`[Control] getSafetyField Response : ${JSON.stringify(resp)}`);
            command.statusChange('success');
            await this.databaseOutput.update(command);
            return { ...resp, safetyField: resp.safetyField };
        }
        catch (error) {
            this.loggerService.error(`[Control] getSafetyField : ${(0, common_2.errorToJson)(error)}`);
            if (command) {
                command.statusChange(control_domain_1.ControlStatus.fail);
                await this.databaseOutput.update(command);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            throw new rpc_code_exception_1.RpcCodeException('getSafetyField 명령을 수행할 수 없습니다', constant_1.GrpcCode.InternalError);
        }
    }
};
exports.ControlService = ControlService;
exports.ControlService = ControlService = __decorate([
    __param(0, (0, common_1.Inject)('DatabaseOutputPort')),
    __param(1, (0, common_1.Inject)('SlamnavOutputPort')),
    __param(2, (0, common_1.Inject)('ExAccessoryOutputPort')),
    __metadata("design:paramtypes", [typeof (_a = typeof control_database_output_port_1.ControlDatabaseOutputPort !== "undefined" && control_database_output_port_1.ControlDatabaseOutputPort) === "function" ? _a : Object, typeof (_b = typeof control_slamnav_output_port_1.ControlSlamnavOutputPort !== "undefined" && control_slamnav_output_port_1.ControlSlamnavOutputPort) === "function" ? _b : Object, typeof (_c = typeof control_ex_accessory_output_port_1.ControlExAccessoryOutputPort !== "undefined" && control_ex_accessory_output_port_1.ControlExAccessoryOutputPort) === "function" ? _c : Object])
], ControlService);


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControlModel = exports.ControlStatus = void 0;
const rpc_code_exception_1 = __webpack_require__(45);
const constant_1 = __webpack_require__(46);
const control_type_1 = __webpack_require__(64);
const microservices_1 = __webpack_require__(2);
var ControlStatus;
(function (ControlStatus) {
    ControlStatus["pending"] = "pending";
    ControlStatus["accepted"] = "accepted";
    ControlStatus["rejected"] = "rejected";
    ControlStatus["fail"] = "fail";
    ControlStatus["unknown"] = "unknown";
})(ControlStatus || (exports.ControlStatus = ControlStatus = {}));
class ControlModel {
    constructor(param) {
        this.status = ControlStatus.pending;
        this.command = param.command;
        this.onoff = param.onoff;
        this.frequency = param.frequency;
        this.color = this.parseColor(param.color);
        this.safetyField = param.safetyField;
        this.resetField = param.resetField;
        this.position = param.position;
        this.mcuDio = param.mcuDio;
    }
    assignId(id) {
        this.id = id;
    }
    statusChange(status) {
        if (!this.id) {
            throw new microservices_1.RpcException('ID가 없습니다');
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
                if (this.frequency === undefined || this.frequency === 0) {
                    throw new rpc_code_exception_1.RpcCodeException('frequency 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                if (this.frequency < 0 || this.frequency > 1000) {
                    throw new rpc_code_exception_1.RpcCodeException('frequency 값이 범위를 초과합니다. frequency의 단위는 Hz입니다.', constant_1.GrpcCode.InvalidArgument);
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
            case control_type_1.ControlCommand.resetSafetyField: {
                if (this.resetField === undefined) {
                    throw new rpc_code_exception_1.RpcCodeException('resetField 값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                break;
            }
            case control_type_1.ControlCommand.safetyIoControl: {
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
            default: {
                throw new rpc_code_exception_1.RpcCodeException(`지원하지 않는 command 값입니다. (${this.command})`, constant_1.GrpcCode.InvalidArgument);
                break;
            }
        }
    }
}
exports.ControlModel = ControlModel;


/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LEDColor = exports.ControlCommand = void 0;
var ControlCommand;
(function (ControlCommand) {
    ControlCommand["dockStart"] = "dock";
    ControlCommand["undockStart"] = "undock";
    ControlCommand["randomSeq"] = "randomSeq";
    ControlCommand["ledControl"] = "ledControl";
    ControlCommand["lidarOnOff"] = "lidarOnOff";
    ControlCommand["pathOnOff"] = "pathOnOff";
    ControlCommand["motorOnOff"] = "motorOnOff";
    ControlCommand["safetyFieldControl"] = "safetyFieldControl";
    ControlCommand["setSafetyField"] = "setSafetyField";
    ControlCommand["getSafetyField"] = "getSafetyField";
    ControlCommand["resetSafetyField"] = "resetSafetyField";
    ControlCommand["footMove"] = "footMove";
    ControlCommand["footStop"] = "footStop";
    ControlCommand["safetyIoControl"] = "safetyIoControl";
})(ControlCommand || (exports.ControlCommand = ControlCommand = {}));
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControlSocketIoAdapter = void 0;
const common_1 = __webpack_require__(54);
const microservices_1 = __webpack_require__(2);
const common_2 = __webpack_require__(3);
const constant_1 = __webpack_require__(67);
const control_pending_service_1 = __webpack_require__(74);
let ControlSocketIoAdapter = class ControlSocketIoAdapter {
    constructor(mqttMicroservice, pendingService) {
        this.mqttMicroservice = mqttMicroservice;
        this.pendingService = pendingService;
        this.loggerService = common_2.LoggerService.get('device');
    }
    async exAccessoryControl(data) {
        this.loggerService.debug(`[Control] Socket externalControl : ${JSON.stringify(data)}`);
        const response = this.waitForResponse(data.id);
        this.mqttMicroservice.emit('exAccessoryRequest', data);
        const resp = await response;
        this.loggerService.debug(`[Control] Socket externalControl : ${JSON.stringify(resp)}`);
        return resp;
    }
    async safetyIoControl(data) {
        this.loggerService.debug(`[Control] Socket safetyIoControl : ${JSON.stringify(data)}`);
        const response = this.waitForResponse(data.id);
        this.mqttMicroservice.emit('controlRequest', data);
        const resp = await response;
        this.loggerService.debug(`[Control] Socket safetyIoControl : ${JSON.stringify(resp)}`);
        return resp;
    }
    checkSocketConnection() {
        this.mqttMicroservice.emit('getConnection', {});
    }
    async onoffControl(data) {
        this.loggerService.debug(`[Control] Socket onoffControl : ${JSON.stringify(data)}`);
        const response = this.waitForResponse(data.id);
        this.mqttMicroservice.emit('controlRequest', data);
        const resp = await response;
        this.loggerService.debug(`[Control] Socket onoffControl : ${JSON.stringify(resp)}`);
        return resp;
    }
    async workControl(data) {
        this.loggerService.debug(`[Control] Socket workControl : ${JSON.stringify(data)}`);
        const response = this.waitForResponse(data.id);
        this.mqttMicroservice.emit('controlRequest', data);
        const resp = await response;
        this.loggerService.debug(`[Control] Socket workControl : ${JSON.stringify(resp)}`);
        return resp;
    }
    async ledControl(data) {
        this.loggerService.debug(`[Control] Socket ledControl : ${JSON.stringify(data)}`);
        const response = this.waitForResponse(data.id);
        this.mqttMicroservice.emit('controlRequest', data);
        const resp = await response;
        this.loggerService.debug(`[Control] Socket ledControl : ${JSON.stringify(resp)}`);
        return resp;
    }
    async safetyFieldControl(data) {
        this.loggerService.debug(`[Control] Socket safetyFieldControl : ${JSON.stringify(data)}`);
        const response = this.waitForResponse(data.id);
        this.mqttMicroservice.emit('controlRequest', data);
        const resp = await response;
        this.loggerService.debug(`[Control] Socket safetyFieldControl : ${JSON.stringify(resp)}`);
        return resp;
    }
    async waitForResponse(id) {
        return new Promise((resolve, reject) => {
            this.pendingService.pendingResponses.set(id, {
                resolve,
                reject,
                received: [],
            });
        });
    }
};
exports.ControlSocketIoAdapter = ControlSocketIoAdapter;
exports.ControlSocketIoAdapter = ControlSocketIoAdapter = __decorate([
    __param(0, (0, common_1.Inject)(constant_1.MQTT_BROKER)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object, typeof (_b = typeof control_pending_service_1.ControlPendingService !== "undefined" && control_pending_service_1.ControlPendingService) === "function" ? _b : Object])
], ControlSocketIoAdapter);


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
exports.TCP_SERVICE = exports.COBOT_SERVICE = exports.CODE_SERVICE = exports.TASK_SERVICE = exports.MQTT_BROKER = exports.SOUND_SERVICE = exports.EXTERNAL_ACCESSORY_SERVICE = exports.SOCKETIO_SERVICE = exports.REDIS_SERVICE = exports.HOST_SERVER = exports.UPDATE_SERVICE = exports.MAP_SERVICE = exports.LOG_SERVICE = exports.FILE_SERVICE = exports.NETWORK_SERVICE = exports.LOCALIZATION_SERVICE = exports.MOVE_SERVICE = exports.SLAMNAV_SERVICE = exports.SETTING_SERVICE = exports.CONTROL_SERVICE = exports.CONFIG_SERVICE = exports.AMR_SERVICE = exports.GROUP_SERVICE = exports.ROLE_SERVICE = exports.PERMISSION_SERVICE = exports.USER_SERVICE = exports.AUTH_SERVICE = void 0;
exports.AUTH_SERVICE = 'AUTH_SERVICE';
exports.USER_SERVICE = 'USER_SERVICE';
exports.PERMISSION_SERVICE = 'PERMISSION_SERVICE';
exports.ROLE_SERVICE = 'ROLE_SERVICE';
exports.GROUP_SERVICE = 'GROUP_SERVICE';
exports.AMR_SERVICE = 'AMR_SERVICE';
exports.CONFIG_SERVICE = 'CONFIG_SERVICE';
exports.CONTROL_SERVICE = 'CONTROL_SERVICE';
exports.SETTING_SERVICE = 'SETTING_SERVICE';
exports.SLAMNAV_SERVICE = 'SLAMNAV_SERVICE';
exports.MOVE_SERVICE = 'MOVE_SERVICE';
exports.LOCALIZATION_SERVICE = 'LOCALIZATION_SERVICE';
exports.NETWORK_SERVICE = 'NETWORK_SERVICE';
exports.FILE_SERVICE = 'FILE_SERVICE';
exports.LOG_SERVICE = 'LOG_SERVICE';
exports.MAP_SERVICE = 'MAP_SERVICE';
exports.UPDATE_SERVICE = 'UPDATE_SERVICE';
exports.HOST_SERVER = 'HOST_SERVER';
exports.REDIS_SERVICE = 'REDIS_SERVICE';
exports.SOCKETIO_SERVICE = 'SOCKETIO_SERVICE';
exports.EXTERNAL_ACCESSORY_SERVICE = 'EXTERNAL_ACCESSORY_SERVICE';
exports.SOUND_SERVICE = 'SOUND_SERVICE';
exports.MQTT_BROKER = 'MQTT_BROKER';
exports.TASK_SERVICE = 'TASK_SERVICE';
exports.CODE_SERVICE = 'CODE_SERVICE';
exports.COBOT_SERVICE = 'COBOT_SERVICE';
exports.TCP_SERVICE = 'TCP_SERVICE';


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
exports.ControlPendingService = void 0;
const pending_util_1 = __webpack_require__(75);
const common_1 = __webpack_require__(54);
let ControlPendingService = class ControlPendingService extends pending_util_1.PendingResponseUtil {
};
exports.ControlPendingService = ControlPendingService;
exports.ControlPendingService = ControlPendingService = __decorate([
    (0, common_1.Injectable)()
], ControlPendingService);


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
const common_1 = __webpack_require__(54);
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControlMqttController = void 0;
const common_1 = __webpack_require__(54);
const microservices_1 = __webpack_require__(2);
const control_service_1 = __webpack_require__(60);
const common_2 = __webpack_require__(3);
const rpc_code_exception_1 = __webpack_require__(45);
const constant_1 = __webpack_require__(46);
const control_dto_1 = __webpack_require__(77);
const control_pending_service_1 = __webpack_require__(74);
let ControlMqttController = class ControlMqttController {
    constructor(controlService, pendingService) {
        this.controlService = controlService;
        this.pendingService = pendingService;
        this.loggerService = common_2.LoggerService.get('device');
    }
    getConnect() {
        this.loggerService.info(`[Control] Slamnav Connected`);
        this.controlService.slamConnect();
    }
    getDisconnect() {
        this.loggerService.warn(`[Control] Slamnav Disconnected`);
        this.controlService.slamDisconnect();
        this.pendingService.pendingResponses.forEach((resp) => {
            resp.reject(new rpc_code_exception_1.RpcCodeException('SLAMNAV 연결이 끊어졌습니다', constant_1.GrpcCode.InternalError));
        });
        this.pendingService.pendingResponses.clear();
    }
    getMoveResponse(data) {
        try {
            const { id } = data;
            const listener = this.pendingService.pendingResponses.get(id);
            if (listener) {
                listener.received.push(data);
                if (data.result === 'accept' || data.result === 'success') {
                    listener.resolve(data);
                }
                else {
                    listener.reject(data);
                }
                this.pendingService.pendingResponses.delete(id);
            }
            {
                this.controlService.updateResponse(data);
            }
        }
        catch (error) { }
    }
};
exports.ControlMqttController = ControlMqttController;
__decorate([
    (0, microservices_1.MessagePattern)('con:slamnav'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ControlMqttController.prototype, "getConnect", null);
__decorate([
    (0, microservices_1.MessagePattern)('discon:slamnav'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ControlMqttController.prototype, "getDisconnect", null);
__decorate([
    (0, microservices_1.MessagePattern)('controlResponse'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof control_dto_1.ControlResponseSlamnav !== "undefined" && control_dto_1.ControlResponseSlamnav) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], ControlMqttController.prototype, "getMoveResponse", null);
exports.ControlMqttController = ControlMqttController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof control_service_1.ControlService !== "undefined" && control_service_1.ControlService) === "function" ? _a : Object, typeof (_b = typeof control_pending_service_1.ControlPendingService !== "undefined" && control_pending_service_1.ControlPendingService) === "function" ? _b : Object])
], ControlMqttController);


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
exports.SafetyFieldResponseDto = exports.SafetyFieldRequestDto = exports.WorkResponseDto = exports.WorkRequestDto = exports.OnOffResponseDto = exports.OnOffRequestDto = exports.LEDResponseDto = exports.LEDRequestDto = exports.ControlResponseFrs = exports.ControlResponseSlamnav = exports.ControlRequestSlamnav = exports.ControlResponseDto = exports.ControlRequestDto = void 0;
const swagger_1 = __webpack_require__(78);
const class_transformer_1 = __webpack_require__(79);
const class_validator_1 = __webpack_require__(80);
const control_type_1 = __webpack_require__(64);
const util_1 = __webpack_require__(32);
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
    (0, class_validator_1.IsBoolean)(),
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
    (0, class_validator_1.IsNumber)(),
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
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], ControlRequestDto.prototype, "mcu_dio", void 0);
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
class ControlResponseDto extends ControlRequestDto {
}
exports.ControlResponseDto = ControlResponseDto;
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
    (0, class_validator_1.IsBoolean)(),
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
    (0, class_validator_1.IsBoolean)(),
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
        description: 'OnOff 명령을 사용할 Command를 입력하세요. 현재 사용가능한 Command는 lidarOnOff, pathOnOff, motorOnOff가 있습니다.',
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
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], OnOffRequestDto.prototype, "onoff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '기능에 따라 onoff가 true일 시, 전송 주기를 입력하세요. 단위는 Hz이며 예로 lidarOnOff를 on하고 frequency를 10으로 입력하면 lidar 데이터를 10Hz로 송신합니다.',
        example: 10,
    }),
    (0, class_validator_1.IsNumber)(),
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
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], OnOffResponseDto.prototype, "onoff", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '주기(Hz). onoff가 true일 때만 의미 있음',
        example: 10,
        required: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], OnOffResponseDto.prototype, "frequency", void 0);
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


/***/ }),
/* 78 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 79 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 80 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 81 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 82 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalizationModule = void 0;
const common_1 = __webpack_require__(54);
const mongoose_1 = __webpack_require__(56);
const localization_entity_1 = __webpack_require__(83);
const localization_grpc_controller_1 = __webpack_require__(84);
const localization_service_1 = __webpack_require__(85);
const localization_mongo_adapter_1 = __webpack_require__(90);
const localization_socketio_adapter_1 = __webpack_require__(91);
const microservices_1 = __webpack_require__(2);
const localization_mqtt_controller_1 = __webpack_require__(93);
const config_1 = __webpack_require__(81);
const constant_1 = __webpack_require__(67);
const localization_pending_service_1 = __webpack_require__(92);
let LocalizationModule = class LocalizationModule {
};
exports.LocalizationModule = LocalizationModule;
exports.LocalizationModule = LocalizationModule = __decorate([
    (0, common_1.Module)({
        imports: [
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
                    name: constant_1.SOCKETIO_SERVICE,
                    inject: [config_1.ConfigService],
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.MQTT,
                        options: {
                            url: configService.get('MQTT_URL'),
                        },
                    }),
                },
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
        controllers: [localization_mqtt_controller_1.LocalizationMqttInputController, localization_socketio_adapter_1.LocalizationSocketIOAdapter, localization_grpc_controller_1.LocalizationGrpcInputController],
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
exports.LocalizationSchema = exports.Localization = void 0;
const mongoose_1 = __webpack_require__(56);
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
/* 84 */
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
const localization_service_1 = __webpack_require__(85);
const common_2 = __webpack_require__(54);
const microservices_1 = __webpack_require__(2);
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
        throw new microservices_1.RpcException('테스트입니다');
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalizationService = void 0;
const microservices_1 = __webpack_require__(2);
const common_1 = __webpack_require__(54);
const localization_database_output_port_1 = __webpack_require__(86);
const localization_slamnav_output_port_1 = __webpack_require__(87);
const common_2 = __webpack_require__(3);
const localization_domain_1 = __webpack_require__(88);
const constant_1 = __webpack_require__(67);
const microservices_2 = __webpack_require__(2);
const rpc_code_exception_1 = __webpack_require__(45);
const constant_2 = __webpack_require__(46);
let LocalizationService = class LocalizationService {
    constructor(databaseOutput, slamnavOutput, mqttMicroservice) {
        this.databaseOutput = databaseOutput;
        this.slamnavOutput = slamnavOutput;
        this.mqttMicroservice = mqttMicroservice;
        this.slamnav_connection = false;
        this.loggerService = common_2.LoggerService.get('device');
        console.log('LocalizationService Constructed');
        this.mqttMicroservice.emit('getConnection', {});
    }
    async Localization(initDto) {
        this.loggerService.info(`[Localization] Localization ================================`);
        const command = new localization_domain_1.LocalizationModel(initDto);
        this.loggerService.info(`[Localization] Localization Command :  ${JSON.stringify(command)}`);
        command.checkVariables();
        const result = await this.databaseOutput.save(command);
        this.loggerService.info(`[Localization] Localization DB Save : ${result._id.toString()}`);
        command.assignId(result._id.toString());
        if (this.slamnav_connection) {
            const resp = await this.slamnavOutput.localizationRequest(command);
            this.loggerService.info(`[Localization] Localization Response : ${JSON.stringify(resp)}`);
            if (resp.result === 'success' || resp.result === 'accept') {
                command.statusChange(resp.result);
                const result = await this.databaseOutput.update(command);
                this.loggerService.info(`[Localization] Localization DB Update : ${result?._id.toString()}, ${command.status}`);
                return resp;
            }
            else {
                throw new rpc_code_exception_1.RpcCodeException(resp.message, constant_2.GrpcCode.Aborted);
            }
        }
        else {
            throw new microservices_1.RpcException('SLAMNAV가 연결되지 않았습니다');
        }
    }
    slamConnect() {
        this.slamnav_connection = true;
    }
    slamDisconnect() {
        this.loggerService.warn(`[Localization] slam Disconnected`);
        this.slamnav_connection = false;
    }
    async updateResponse(resp) {
        this.loggerService.info(`[Localization] update Response : ${JSON.stringify(resp)}`);
        const dbmodel = await this.databaseOutput.getNodebyId(resp.id);
        if (dbmodel) {
            const model = new localization_domain_1.LocalizationModel(dbmodel);
            model.assignId(dbmodel._id);
            model.statusChange('accept');
            this.databaseOutput.update(model);
            this.loggerService.info(`[Localization] update Response : ${model.id}, ${model.status}`);
        }
    }
};
exports.LocalizationService = LocalizationService;
exports.LocalizationService = LocalizationService = __decorate([
    __param(0, (0, common_1.Inject)('DatabaseOutputPort')),
    __param(1, (0, common_1.Inject)('SlamnavOutputPort')),
    __param(2, (0, common_1.Inject)(constant_1.MQTT_BROKER)),
    __metadata("design:paramtypes", [typeof (_a = typeof localization_database_output_port_1.LocalizationDatabaseOutputPort !== "undefined" && localization_database_output_port_1.LocalizationDatabaseOutputPort) === "function" ? _a : Object, typeof (_b = typeof localization_slamnav_output_port_1.LocalizationSlamnavOutputPort !== "undefined" && localization_slamnav_output_port_1.LocalizationSlamnavOutputPort) === "function" ? _b : Object, typeof (_c = typeof microservices_2.ClientProxy !== "undefined" && microservices_2.ClientProxy) === "function" ? _c : Object])
], LocalizationService);


/***/ }),
/* 86 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 87 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 88 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalizationModel = exports.LocalizationStatus = void 0;
const localization_type_1 = __webpack_require__(89);
const util_1 = __webpack_require__(32);
const microservices_1 = __webpack_require__(2);
const uuid_1 = __webpack_require__(34);
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
        this.id = util_1.UrlUtil.generateUUID();
    }
    assignId(id) {
        this.id = id;
    }
    statusChange(status) {
        if (!this.id) {
            throw new microservices_1.RpcException('ID가 없습니다');
        }
        const parsestatus = this.parseStatus(status);
        this.status = parsestatus;
    }
    checkVariables() {
        if (this.command === localization_type_1.LocalizationCommand.setInit) {
            if (this.x === undefined || this.y === undefined || this.z === undefined || this.rz === undefined) {
                throw new microservices_1.RpcException('init 값이 비어있습니다');
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
/* 89 */
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalizationMongoAdapter = void 0;
const mongoose_1 = __webpack_require__(56);
const mongoose_2 = __webpack_require__(57);
const localization_entity_1 = __webpack_require__(83);
const common_1 = __webpack_require__(3);
const microservices_1 = __webpack_require__(2);
const util_1 = __webpack_require__(32);
let LocalizationMongoAdapter = class LocalizationMongoAdapter {
    constructor(Repository) {
        this.Repository = Repository;
        this.loggerService = common_1.LoggerService.get('device');
    }
    async getNodebyId(id) {
        try {
            return await this.Repository.findById(id).lean();
        }
        catch (error) {
            this.loggerService.error(`[Localization] DB getNodebyId: ${util_1.ParseUtil.errorToJson(error)}`);
            throw new microservices_1.RpcException('데이터를 가져올 수 없습니다.');
        }
    }
    async save(model) {
        try {
            const _id = util_1.UrlUtil.generateUUID();
            return await this.Repository.create({ ...model, _id });
        }
        catch (error) {
            console.error(error);
            this.loggerService.error(`[Localization] DB save: ${util_1.ParseUtil.errorToJson(error)}`);
            throw new microservices_1.RpcException('데이터를 저장할 수 없습니다.');
        }
    }
    async update(model) {
        return await this.Repository.findByIdAndUpdate(model.id, model).lean();
    }
};
exports.LocalizationMongoAdapter = LocalizationMongoAdapter;
exports.LocalizationMongoAdapter = LocalizationMongoAdapter = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(localization_entity_1.Localization.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], LocalizationMongoAdapter);


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalizationSocketIOAdapter = void 0;
const common_1 = __webpack_require__(54);
const common_2 = __webpack_require__(3);
const microservices_1 = __webpack_require__(2);
const constant_1 = __webpack_require__(67);
const localization_pending_service_1 = __webpack_require__(92);
let LocalizationSocketIOAdapter = class LocalizationSocketIOAdapter {
    constructor(mqttService, pendingService) {
        this.mqttService = mqttService;
        this.pendingService = pendingService;
        this.loggerService = common_2.LoggerService.get('device');
    }
    async waitForResponse(id) {
        return new Promise((resolve, reject) => {
            this.pendingService.pendingResponses.set(id, {
                resolve,
                reject,
                received: [],
            });
        });
    }
    async localizationRequest(data) {
        this.loggerService.debug(`[Localization] localizationRequest : ${JSON.stringify(data)}`);
        const response = this.waitForResponse(data.id);
        this.mqttService.emit('localizationRequest', data);
        const resp = await response;
        this.loggerService.debug(`[Localization] localizationResponse : ${JSON.stringify(resp)}`);
        return resp;
    }
};
exports.LocalizationSocketIOAdapter = LocalizationSocketIOAdapter;
exports.LocalizationSocketIOAdapter = LocalizationSocketIOAdapter = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)(constant_1.SOCKETIO_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object, typeof (_b = typeof localization_pending_service_1.LocalizationPendingResponseService !== "undefined" && localization_pending_service_1.LocalizationPendingResponseService) === "function" ? _b : Object])
], LocalizationSocketIOAdapter);


/***/ }),
/* 92 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalizationPendingResponseService = void 0;
const pending_util_1 = __webpack_require__(75);
const common_1 = __webpack_require__(54);
let LocalizationPendingResponseService = class LocalizationPendingResponseService extends pending_util_1.PendingResponseUtil {
};
exports.LocalizationPendingResponseService = LocalizationPendingResponseService;
exports.LocalizationPendingResponseService = LocalizationPendingResponseService = __decorate([
    (0, common_1.Injectable)()
], LocalizationPendingResponseService);


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalizationMqttInputController = void 0;
const common_1 = __webpack_require__(54);
const microservices_1 = __webpack_require__(2);
const localization_service_1 = __webpack_require__(85);
const localization_pending_service_1 = __webpack_require__(92);
const rpc_code_exception_1 = __webpack_require__(45);
const constant_1 = __webpack_require__(46);
const common_2 = __webpack_require__(3);
const localization_dto_1 = __webpack_require__(94);
let LocalizationMqttInputController = class LocalizationMqttInputController {
    constructor(localizationService, pendingService) {
        this.localizationService = localizationService;
        this.pendingService = pendingService;
        this.loggerService = common_2.LoggerService.get('device');
    }
    getConnect() {
        this.loggerService.info(`[Localization] slam Connected`);
        this.localizationService.slamConnect();
    }
    getDisconnect() {
        this.loggerService.warn(`[Localization] slam Disconnected`);
        this.localizationService.slamDisconnect();
        this.pendingService.pendingResponses.forEach((resp) => {
            resp.reject(new rpc_code_exception_1.RpcCodeException('SLAMNAV 연결이 끊어졌습니다', constant_1.GrpcCode.InternalError));
        });
        this.pendingService.pendingResponses.clear();
    }
    getLocalizationResponse(data) {
        const { id } = data;
        const listener = this.pendingService.pendingResponses.get(id);
        if (listener) {
            listener.received.push(data);
            listener.resolve(data);
            this.pendingService.pendingResponses.delete(id);
        }
        {
            this.localizationService.updateResponse(data);
        }
    }
};
exports.LocalizationMqttInputController = LocalizationMqttInputController;
__decorate([
    (0, microservices_1.MessagePattern)('con:slamnav'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocalizationMqttInputController.prototype, "getConnect", null);
__decorate([
    (0, microservices_1.MessagePattern)('discon:slamnav'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocalizationMqttInputController.prototype, "getDisconnect", null);
__decorate([
    (0, microservices_1.MessagePattern)('localizationResponse'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof localization_dto_1.LocalizationResponseSlamnav !== "undefined" && localization_dto_1.LocalizationResponseSlamnav) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], LocalizationMqttInputController.prototype, "getLocalizationResponse", null);
exports.LocalizationMqttInputController = LocalizationMqttInputController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof localization_service_1.LocalizationService !== "undefined" && localization_service_1.LocalizationService) === "function" ? _a : Object, typeof (_b = typeof localization_pending_service_1.LocalizationPendingResponseService !== "undefined" && localization_pending_service_1.LocalizationPendingResponseService) === "function" ? _b : Object])
], LocalizationMqttInputController);


/***/ }),
/* 94 */
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
const class_validator_1 = __webpack_require__(80);
const class_transformer_1 = __webpack_require__(79);
const swagger_1 = __webpack_require__(78);
const localization_type_1 = __webpack_require__(89);
const util_1 = __webpack_require__(32);
const description_1 = __webpack_require__(95);
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
    (0, class_validator_1.IsNumber)(),
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
    (0, class_validator_1.IsNumber)(),
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
    (0, class_validator_1.IsNumber)(),
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
    (0, class_validator_1.IsNumber)(),
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
/* 95 */
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
/* 96 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveModule = void 0;
const common_1 = __webpack_require__(54);
const move_service_1 = __webpack_require__(97);
const move_mongo_adapter_1 = __webpack_require__(102);
const move_grpc_controller_1 = __webpack_require__(104);
const mongoose_1 = __webpack_require__(56);
const move_entity_1 = __webpack_require__(103);
const move_socketio_adapter_1 = __webpack_require__(105);
const microservices_1 = __webpack_require__(2);
const move_mqtt_controller_1 = __webpack_require__(107);
const config_1 = __webpack_require__(81);
const constant_1 = __webpack_require__(67);
const move_pending_service_1 = __webpack_require__(106);
const common_2 = __webpack_require__(3);
const path_1 = __webpack_require__(39);
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
                    name: constant_1.SOCKETIO_SERVICE,
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
        controllers: [move_mqtt_controller_1.MoveMqttInputController, move_socketio_adapter_1.MoveSocketIOAdapter, move_grpc_controller_1.MoveGrpcInputController],
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
/* 97 */
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
exports.MoveService = void 0;
const microservices_1 = __webpack_require__(2);
const move_domain_1 = __webpack_require__(98);
const common_1 = __webpack_require__(54);
const move_database_output_port_1 = __webpack_require__(100);
const move_slamnav_output_port_1 = __webpack_require__(101);
const common_2 = __webpack_require__(3);
const rxjs_1 = __webpack_require__(27);
const move_type_1 = __webpack_require__(99);
const constant_1 = __webpack_require__(46);
const rpc_code_exception_1 = __webpack_require__(45);
let MoveService = class MoveService {
    constructor(databaseOutput, slamnavOutput, configMicroservice) {
        this.databaseOutput = databaseOutput;
        this.slamnavOutput = slamnavOutput;
        this.configMicroservice = configMicroservice;
        this.slamnav_connection = false;
        this.frs_connection = false;
        this.loggerService = common_2.LoggerService.get('device');
    }
    async onModuleInit() {
        this.configService = this.configMicroservice.getService('ConfigGrpcService');
    }
    async Move(moveDto) {
        this.loggerService.info(`[Move] Move ================================`);
        const command = new move_domain_1.MoveModel(moveDto);
        this.loggerService.info(`[Move] Move Command : ${JSON.stringify(command)}`);
        command.checkVariables();
        const result = await this.databaseOutput.save(command);
        this.loggerService.info(`[Move] Move DB Save : ${result._id.toString()}`);
        command.assignId(result._id.toString());
        if (this.slamnav_connection) {
            const resp = await this.slamnavOutput.moveRequest(command);
            this.loggerService.info(`[Move] Move Response : ${JSON.stringify(resp)}`);
            command.statusChange('accept');
            const result = await this.databaseOutput.update(command);
            this.loggerService.info(`[Move] Move DB Update : ${result?._id.toString()}`);
            return resp;
        }
        else {
            throw new microservices_1.RpcException('SLAMNAV가 연결되지 않았습니다');
        }
    }
    slamConnect() {
        this.slamnav_connection = true;
    }
    slamDisconnect() {
        this.loggerService.warn(`[Move] slam Disconnected`);
        this.slamnav_connection = false;
    }
    async frsConnect() {
        try {
            this.frs_connection = true;
            const useFMSMove = await (0, rxjs_1.lastValueFrom)(this.configService.getConfig({ key: 'useFMSMove' }));
            if (useFMSMove.value === 'true') {
                this.loggerService.info(`[Move] frs Connect : useFMSMove is true`);
            }
            else {
                this.loggerService.info(`[Move] frs Connect : useFMSMove is false`);
                return;
            }
            this.moveLastGoal();
        }
        catch (error) {
            this.loggerService.error(`[Move] frs Connect : ${error}`);
        }
    }
    async moveLastGoal() {
        try {
            const lastMove = await this.databaseOutput.getLast();
            if (lastMove && (lastMove.command === move_type_1.MoveCommand.moveGoal || lastMove.command === move_type_1.MoveCommand.moveTarget)) {
                this.loggerService.info(`[Move] moveLastGoal : lastMove is not null`);
                this.Move(lastMove);
                this.loggerService.info(`[Move] moveLastGoal : lastMove update`);
            }
            else {
                this.loggerService.info(`[Move] moveLastGoal : lastMove is null`);
            }
        }
        catch (error) {
            this.loggerService.error(`[Move] moveLastGoal : ${error}`);
        }
    }
    async frsDisconnect() {
        try {
            this.loggerService.warn(`[Move] frs Disconnected`);
            this.frs_connection = false;
        }
        catch (error) {
            this.loggerService.error(`[Move] frs Disconnect : ${error}`);
        }
    }
    async updateResponse(resp) {
        this.loggerService.info(`[Move] update Response : ${JSON.stringify(resp)}`);
        const dbmodel = await this.databaseOutput.getNodebyId(resp.id);
        if (dbmodel) {
            const model = new move_domain_1.MoveModel(dbmodel);
            model.assignId(dbmodel._id);
            model.statusChange(resp.result);
            this.databaseOutput.update(model);
            this.loggerService.info(`[Move] update Response : ${model.id}, ${model.status}`);
        }
    }
    MoveJog(moveDto) {
        const command = new move_domain_1.MoveModel(moveDto);
        command.checkVariables();
        if (this.slamnav_connection) {
            this.slamnavOutput.moveJogRequest(command);
        }
        else {
            throw new microservices_1.RpcException('SLAMNAV가 연결되지 않았습니다');
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
            this.loggerService.error(`[Move] moveLogLast : ${error}`);
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
            this.loggerService.error(`[Move] moveLogLast : ${error}`);
            throw new rpc_code_exception_1.RpcCodeException('moveLogLast 오류', constant_1.GrpcCode.InternalError);
        }
    }
};
exports.MoveService = MoveService;
exports.MoveService = MoveService = __decorate([
    __param(0, (0, common_1.Inject)('DatabaseOutputPort')),
    __param(1, (0, common_1.Inject)('SlamnavOutputPort')),
    __param(2, (0, common_1.Inject)('CONFIG_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof move_database_output_port_1.MoveDatabaseOutputPort !== "undefined" && move_database_output_port_1.MoveDatabaseOutputPort) === "function" ? _a : Object, typeof (_b = typeof move_slamnav_output_port_1.MoveSlamnavOutputPort !== "undefined" && move_slamnav_output_port_1.MoveSlamnavOutputPort) === "function" ? _b : Object, typeof (_c = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _c : Object])
], MoveService);


/***/ }),
/* 98 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveModel = exports.MoveMethod = exports.MoveStatus = void 0;
const move_type_1 = __webpack_require__(99);
const util_1 = __webpack_require__(32);
const microservices_1 = __webpack_require__(2);
var MoveStatus;
(function (MoveStatus) {
    MoveStatus["pending"] = "pending";
    MoveStatus["accepted"] = "accept";
    MoveStatus["rejected"] = "reject";
    MoveStatus["moving"] = "moving";
    MoveStatus["paused"] = "paused";
    MoveStatus["fail"] = "fail";
    MoveStatus["cancelled"] = "cancelled";
    MoveStatus["done"] = "done";
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
        this.preset = param.preset;
        this.goalId = param.goalId;
        this.x = param.x;
        this.y = param.y;
        this.z = param.z;
        this.rz = param.rz;
        this.vx = param.vx;
        this.vy = param.vy;
        this.wz = param.wz;
        this.id = util_1.UrlUtil.generateUUID();
    }
    assignId(id) {
        this.id = id;
    }
    statusChange(status) {
        if (!this.id) {
            throw new microservices_1.RpcException('ID가 없습니다');
        }
        const moveStatus = this.parseStatus(status);
        this.status = moveStatus;
    }
    checkVariables() {
        if (this.command === move_type_1.MoveCommand.moveGoal) {
            if (this.goalId === '') {
                throw new microservices_1.RpcException('goalID 값이 없습니다');
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
                throw new microservices_1.RpcException('target 값이 비어있습니다');
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
                throw new microservices_1.RpcException('vel 값이 비어있습니다');
            }
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
/* 99 */
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
/* 100 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 101 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveMongoAdapter = void 0;
const mongoose_1 = __webpack_require__(56);
const mongoose_2 = __webpack_require__(57);
const move_entity_1 = __webpack_require__(103);
const common_1 = __webpack_require__(3);
const microservices_1 = __webpack_require__(2);
const parse_util_1 = __webpack_require__(48);
const util_1 = __webpack_require__(32);
const rpc_code_exception_1 = __webpack_require__(45);
const constant_1 = __webpack_require__(46);
let MoveMongoAdapter = class MoveMongoAdapter {
    constructor(Repository) {
        this.Repository = Repository;
        this.loggerService = common_1.LoggerService.get('device');
    }
    async getNodebyId(id) {
        try {
            return await this.Repository.findById(id).lean();
        }
        catch (error) {
            this.loggerService.error(`[Move] DB getNodebyId: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new microservices_1.RpcException('데이터를 가져올 수 없습니다.');
        }
    }
    async getLast() {
        try {
            return await this.Repository.findOne().sort({ createdAt: -1 }).lean();
        }
        catch (error) {
            this.loggerService.error(`[Move] DB getLast: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new microservices_1.RpcException('데이터를 가져올 수 없습니다.');
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
                    list: data.map((item) => ({ id: item._id.toString(), ...item })),
                };
            }
            else {
                const data = await this.Repository.find().sort({ createdAt: -1 }).limit(request.num).lean();
                return {
                    list: data.map((item) => ({ id: item._id.toString(), ...item })),
                };
            }
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException) {
                throw error;
            }
            this.loggerService.error(`[Move] DB getLast: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new microservices_1.RpcException('데이터를 가져올 수 없습니다.');
        }
    }
    async getLog(request) {
        try {
            const query = {};
            const { pageNo = 1, pageSize = 10, searchText, searchType, sortOption = 'createdAt', sortDirection = 'desc', dateFrom, dateTo, } = request;
            this.loggerService.debug(`[Move] getLog request: ${JSON.stringify(request)}`);
            if (searchText && searchText.trim() !== '') {
                if (searchType && searchType !== '') {
                    switch (searchType) {
                        case 'command':
                            query.command = { $regex: searchText, $options: 'i' };
                            break;
                        case 'goalId':
                            query.goalID = { $regex: searchText, $options: 'i' };
                            break;
                        case 'status':
                            query.status = { $regex: searchText, $options: 'i' };
                            break;
                        case 'all':
                            query.$or = [
                                { command: { $regex: searchText, $options: 'i' } },
                                { goalID: { $regex: searchText, $options: 'i' } },
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
                        { goalID: { $regex: searchText, $options: 'i' } },
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
            const data = await this.Repository.find(query).sort(sortQuery).skip(skip).limit(pageSize).lean();
            const totalPage = Math.ceil(totalCount / pageSize);
            return {
                list: data.map((item) => ({
                    id: item._id.toString(),
                    command: item.command,
                    status: item.status,
                    goalId: item.goalID,
                    x: item.x,
                    y: item.y,
                    rz: item.rz,
                    vx: item.vx,
                    vy: item.vy,
                    wz: item.wz,
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
            this.loggerService.error(`[Move] DB getLog: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new microservices_1.RpcException('데이터를 가져올 수 없습니다.');
        }
    }
    async save(model) {
        try {
            const _id = util_1.UrlUtil.generateUUID();
            return await this.Repository.create({ ...model, _id });
        }
        catch (error) {
            this.loggerService.error(`[Move] DB save: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new microservices_1.RpcException('데이터를 저장할 수 없습니다.');
        }
    }
    async update(move) {
        try {
            return await this.Repository.findByIdAndUpdate(move.id, move).lean();
        }
        catch (error) {
            this.loggerService.error(`[Move] DB update: ${parse_util_1.ParseUtil.errorToJson(error)}`);
        }
    }
};
exports.MoveMongoAdapter = MoveMongoAdapter;
exports.MoveMongoAdapter = MoveMongoAdapter = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(move_entity_1.Move.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], MoveMongoAdapter);


/***/ }),
/* 103 */
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
exports.MoveSchema = exports.Move = void 0;
const mongoose_1 = __webpack_require__(56);
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
    __metadata("design:type", Number)
], Move.prototype, "preset", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Move.prototype, "goalID", void 0);
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
    __metadata("design:type", String)
], Move.prototype, "_id", void 0);
exports.Move = Move = __decorate([
    (0, mongoose_1.Schema)()
], Move);
exports.MoveSchema = mongoose_1.SchemaFactory.createForClass(Move);
exports.MoveSchema.set('timestamps', true);


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
exports.MoveGrpcInputController = void 0;
const common_1 = __webpack_require__(3);
const move_service_1 = __webpack_require__(97);
const common_2 = __webpack_require__(54);
const move_type_1 = __webpack_require__(99);
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
        return this.moveService.Move(request);
    }
    moveGoal(request, metadata) {
        return this.moveService.Move(request);
    }
    moveTarget(request, metadata) {
        return this.moveService.Move(request);
    }
    moveJog(request, metadata) {
        console.log('moveJog');
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
exports.MoveSocketIOAdapter = void 0;
const common_1 = __webpack_require__(54);
const microservices_1 = __webpack_require__(2);
const common_2 = __webpack_require__(3);
const constant_1 = __webpack_require__(67);
const move_pending_service_1 = __webpack_require__(106);
let MoveSocketIOAdapter = class MoveSocketIOAdapter {
    constructor(mqttService, pendingService) {
        this.mqttService = mqttService;
        this.pendingService = pendingService;
        this.loggerService = common_2.LoggerService.get('device');
    }
    async waitForResponse(id) {
        return new Promise((resolve, reject) => {
            this.pendingService.pendingResponses.set(id, {
                resolve,
                reject,
                received: [],
            });
        });
    }
    async moveRequest(data) {
        this.loggerService.debug(`[Move] moveRequest : ${JSON.stringify(data)}`);
        const response = this.waitForResponse(data.id);
        this.mqttService.emit('moveRequest', data);
        const resp = await response;
        this.loggerService.debug(`[Move] moveResponse : ${JSON.stringify(resp)}`);
        return resp;
    }
    moveJogRequest(data) {
        this.loggerService.debug(`[Move] moveJogRequest : ${JSON.stringify(data)}`);
        this.mqttService.emit('moveRequest', data);
        return;
    }
};
exports.MoveSocketIOAdapter = MoveSocketIOAdapter;
exports.MoveSocketIOAdapter = MoveSocketIOAdapter = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)(constant_1.SOCKETIO_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object, typeof (_b = typeof move_pending_service_1.MovePendingResponseService !== "undefined" && move_pending_service_1.MovePendingResponseService) === "function" ? _b : Object])
], MoveSocketIOAdapter);


/***/ }),
/* 106 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MovePendingResponseService = void 0;
const pending_util_1 = __webpack_require__(75);
const common_1 = __webpack_require__(54);
let MovePendingResponseService = class MovePendingResponseService extends pending_util_1.PendingResponseUtil {
};
exports.MovePendingResponseService = MovePendingResponseService;
exports.MovePendingResponseService = MovePendingResponseService = __decorate([
    (0, common_1.Injectable)()
], MovePendingResponseService);


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
exports.MoveMqttInputController = void 0;
const common_1 = __webpack_require__(54);
const microservices_1 = __webpack_require__(2);
const move_service_1 = __webpack_require__(97);
const move_pending_service_1 = __webpack_require__(106);
const rpc_code_exception_1 = __webpack_require__(45);
const constant_1 = __webpack_require__(46);
const common_2 = __webpack_require__(3);
const move_dto_1 = __webpack_require__(108);
let MoveMqttInputController = class MoveMqttInputController {
    constructor(moveService, pendingService) {
        this.moveService = moveService;
        this.pendingService = pendingService;
        this.loggerService = common_2.LoggerService.get('device');
    }
    getConnect() {
        this.loggerService.info(`[Move] slam Connected`);
        this.moveService.slamConnect();
    }
    getDisconnect() {
        this.loggerService.warn(`[Move] slam Disconnected`);
        this.moveService.slamDisconnect();
        this.pendingService.pendingResponses.forEach((resp) => {
            resp.reject(new rpc_code_exception_1.RpcCodeException('SLAMNAV 연결이 끊어졌습니다', constant_1.GrpcCode.InternalError));
        });
        this.pendingService.pendingResponses.clear();
    }
    getConnectFRS(data) {
        this.loggerService.info(`[Move] frs Connected`);
        this.moveService.frsConnect();
    }
    getDisconnectFRS(data) {
        this.loggerService.warn(`[Move] frs Disconnected`);
        this.moveService.frsDisconnect();
    }
    getMoveResponse(data) {
        const { id } = data;
        const listener = this.pendingService.pendingResponses.get(id);
        if (listener) {
            listener.received.push(data);
            listener.resolve(data);
            this.pendingService.pendingResponses.delete(id);
        }
        {
            this.moveService.updateResponse(data);
        }
    }
};
exports.MoveMqttInputController = MoveMqttInputController;
__decorate([
    (0, microservices_1.MessagePattern)('con:slamnav'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MoveMqttInputController.prototype, "getConnect", null);
__decorate([
    (0, microservices_1.MessagePattern)('discon:slamanv'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MoveMqttInputController.prototype, "getDisconnect", null);
__decorate([
    (0, microservices_1.MessagePattern)('con:frs'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MoveMqttInputController.prototype, "getConnectFRS", null);
__decorate([
    (0, microservices_1.MessagePattern)('discon:frs'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MoveMqttInputController.prototype, "getDisconnectFRS", null);
__decorate([
    (0, microservices_1.MessagePattern)('moveResponse'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof move_dto_1.MoveResponseSlamnav !== "undefined" && move_dto_1.MoveResponseSlamnav) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], MoveMqttInputController.prototype, "getMoveResponse", null);
exports.MoveMqttInputController = MoveMqttInputController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof move_service_1.MoveService !== "undefined" && move_service_1.MoveService) === "function" ? _a : Object, typeof (_b = typeof move_pending_service_1.MovePendingResponseService !== "undefined" && move_pending_service_1.MovePendingResponseService) === "function" ? _b : Object])
], MoveMqttInputController);


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveLogLastResponseDto = exports.MoveLogLastRequestDto = exports.MoveLogResponseDto = exports.MoveLogRequestDto = exports.MoveResponseFrs = exports.MoveResponseSlamnav = exports.MoveRequestSlamnav = exports.MoveResponseDto = exports.MoveTargetCommandDto = exports.MoveGoalCommandDto = exports.MoveRequestDto = void 0;
const class_validator_1 = __webpack_require__(80);
const class_transformer_1 = __webpack_require__(79);
const swagger_1 = __webpack_require__(78);
const move_type_1 = __webpack_require__(99);
const util_1 = __webpack_require__(32);
const search_request_1 = __webpack_require__(109);
const pagination_1 = __webpack_require__(111);
var Description;
(function (Description) {
    Description["COMMAND"] = "\uC774\uB3D9 \uBA85\uB839";
    Description["ID"] = "\uC694\uCCAD\uD55C \uBA85\uB839\uC758 ID\uAC12\uC785\uB2C8\uB2E4. request\uC2DC \uC790\uB3D9 \uC0DD\uC131\uB429\uB2C8\uB2E4.";
    Description["GOALID"] = "goal \uC774\uB3D9 \uC2DC, \uBAA9\uD45C\uC9C0\uC810\uC758 \uB178\uB4DC ID\uB97C \uC785\uB825\uD558\uC138\uC694.";
    Description["METHOD"] = "\uC8FC\uD589 \uBC29\uC2DD. \uAE30\uBCF8\uAC12\uC740 pp(point to point)\uBC29\uC2DD\uC785\uB2C8\uB2E4.";
    Description["PRESET"] = "\uC18D\uB3C4 \uD504\uB9AC\uC14B. \uAE30\uBCF8\uAC12\uC740 0\uC774\uBA70 \uD604\uC7AC \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
    Description["RESULT"] = "\uC694\uCCAD\uD55C \uBA85\uB839\uC5D0 \uB300\uD55C \uACB0\uACFC\uC785\uB2C8\uB2E4. accept, reject, success, fail \uB4F1 \uBA85\uB839\uC5D0 \uB300\uD574 \uB2E4\uC591\uD55C \uAC12\uC774 \uC874\uC7AC\uD569\uB2C8\uB2E4.";
    Description["MESSAGE"] = "result\uAC12\uC774 reject, fail \uC778 \uACBD\uC6B0 SLAMNAV\uC5D0\uC11C \uBCF4\uB0B4\uB294 \uBA54\uC2DC\uC9C0 \uC785\uB2C8\uB2E4.";
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
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "preset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.X, example: 0, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.Y, example: 0, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.Z, example: 0, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
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
    (0, class_validator_1.IsNumber)(),
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
    (0, class_validator_1.IsNumber)(),
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
    (0, class_validator_1.IsNumber)(),
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
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "wz", void 0);
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
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveGoalCommandDto.prototype, "preset", void 0);
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
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveTargetCommandDto.prototype, "preset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.X, example: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveTargetCommandDto.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.Y, example: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveTargetCommandDto.prototype, "y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.Z, example: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveTargetCommandDto.prototype, "z", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.RZ, example: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveTargetCommandDto.prototype, "rz", void 0);
class MoveResponseDto extends MoveRequestDto {
}
exports.MoveResponseDto = MoveResponseDto;
class MoveRequestSlamnav extends MoveRequestDto {
}
exports.MoveRequestSlamnav = MoveRequestSlamnav;
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
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchRequestDto = void 0;
const swagger_1 = __webpack_require__(78);
const pagination_request_1 = __webpack_require__(110);
const class_validator_1 = __webpack_require__(80);
const class_transformer_1 = __webpack_require__(79);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginationRequest = void 0;
exports.getPaginationOffset = getPaginationOffset;
exports.getPaginationLimit = getPaginationLimit;
const class_validator_1 = __webpack_require__(80);
const swagger_1 = __webpack_require__(78);
const class_transformer_1 = __webpack_require__(79);
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
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, swagger_1.ApiProperty)({
        example: '1',
        description: '페이지 번호',
        required: false,
    }),
    __metadata("design:type", Number)
], PaginationRequest.prototype, "pageNo", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
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
/* 111 */
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
__exportStar(__webpack_require__(110), exports);
__exportStar(__webpack_require__(112), exports);


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginationResponse = void 0;
const swagger_1 = __webpack_require__(78);
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
const control_module_1 = __webpack_require__(53);
const localization_module_1 = __webpack_require__(82);
const config_1 = __webpack_require__(81);
const move_module_1 = __webpack_require__(96);
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
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map