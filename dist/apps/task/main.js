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
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskModule = void 0;
const common_1 = __webpack_require__(5);
const mongoose_1 = __webpack_require__(6);
const task_entity_1 = __webpack_require__(7);
const microservices_1 = __webpack_require__(2);
const task_grpc_controller_1 = __webpack_require__(8);
const task_service_1 = __webpack_require__(36);
const task_mongo_adapter_1 = __webpack_require__(66);
const task_mqtt_controller_1 = __webpack_require__(69);
const task_socket_io_adapter_1 = __webpack_require__(76);
const path_1 = __webpack_require__(3);
const task_state_entity_1 = __webpack_require__(68);
const task_parser_service_1 = __webpack_require__(65);
const config_1 = __webpack_require__(84);
const constant_1 = __webpack_require__(77);
const grpc_1 = __webpack_require__(10);
const task_pending_service_1 = __webpack_require__(70);
const log_module_1 = __webpack_require__(85);
let TaskModule = class TaskModule {
};
exports.TaskModule = TaskModule;
exports.TaskModule = TaskModule = __decorate([
    (0, common_1.Module)({
        imports: [
            log_module_1.LogModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: task_entity_1.Task.name,
                    schema: task_entity_1.TaskSchema,
                },
                {
                    name: task_state_entity_1.TaskState.name,
                    schema: task_state_entity_1.TaskStateSchema,
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
                    {
                        inject: [config_1.ConfigService],
                        name: constant_1.CONTROL_SERVICE,
                        useFactory: (configService) => ({
                            transport: microservices_1.Transport.GRPC,
                            options: {
                                package: grpc_1.ControlMicroservice.protobufPackage,
                                protoPath: (0, path_1.join)(process.cwd(), 'proto/control.proto'),
                                url: configService.get('CONTROL_GRPC_URL'),
                            },
                        }),
                    },
                    {
                        inject: [config_1.ConfigService],
                        name: constant_1.MOVE_SERVICE,
                        useFactory: (configService) => ({
                            transport: microservices_1.Transport.GRPC,
                            options: {
                                package: grpc_1.MoveMicroservice.protobufPackage,
                                protoPath: (0, path_1.join)(process.cwd(), 'proto/move.proto'),
                                url: configService.get('MOVE_GRPC_URL'),
                            },
                        }),
                    },
                ],
            }),
        ],
        controllers: [task_mqtt_controller_1.TaskMqttInputController, task_grpc_controller_1.TaskGrpcInputController],
        providers: [
            task_service_1.TaskService,
            task_parser_service_1.TaskParserService,
            task_pending_service_1.TaskPendingResponseService,
            {
                provide: 'DatabaseOutputPort',
                useClass: task_mongo_adapter_1.TaskMongoController,
            },
            {
                provide: 'TaskmanOutputPort',
                useClass: task_socket_io_adapter_1.TaskSocketioOutputController,
            },
        ],
    })
], TaskModule);


/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 7 */
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
exports.TaskSchema = exports.Task = void 0;
const mongoose_1 = __webpack_require__(6);
let Task = class Task {
};
exports.Task = Task;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Task.prototype, "command", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Task.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Task.prototype, "mapName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Task.prototype, "taskName", void 0);
exports.Task = Task = __decorate([
    (0, mongoose_1.Schema)()
], Task);
exports.TaskSchema = mongoose_1.SchemaFactory.createForClass(Task);
exports.TaskSchema.set('timestamps', true);


/***/ }),
/* 8 */
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
exports.TaskGrpcInputController = void 0;
const common_1 = __webpack_require__(9);
const common_2 = __webpack_require__(5);
const task_service_1 = __webpack_require__(36);
const task_parser_service_1 = __webpack_require__(65);
let TaskGrpcInputController = class TaskGrpcInputController {
    constructor(taskService, fileService) {
        this.taskService = taskService;
        this.fileService = fileService;
    }
    task(request, metadata) {
        return this.taskService.taskRequest(request);
    }
    getTaskState(request, metadata) {
        return this.taskService.stateRequest();
    }
    getTaskVariables(request, metadata) {
        return this.taskService.variablesRequest();
    }
    getList(request, metadata) {
        return this.fileService.getTaskList(request);
    }
    getTask(request, metadata) {
        return this.fileService.getTask(request);
    }
    saveTask(request, metadata) {
        return this.fileService.saveTask(request);
    }
    deleteTask(request, metadata) {
        return this.fileService.deleteTask(request);
    }
};
exports.TaskGrpcInputController = TaskGrpcInputController;
exports.TaskGrpcInputController = TaskGrpcInputController = __decorate([
    (0, common_2.Controller)(),
    common_1.TaskMicroservice.TaskGrpcServiceControllerMethods(),
    __metadata("design:paramtypes", [typeof (_a = typeof task_service_1.TaskService !== "undefined" && task_service_1.TaskService) === "function" ? _a : Object, typeof (_b = typeof task_parser_service_1.TaskParserService !== "undefined" && task_parser_service_1.TaskParserService) === "function" ? _b : Object])
], TaskGrpcInputController);


/***/ }),
/* 9 */
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
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(31), exports);
__exportStar(__webpack_require__(34), exports);


/***/ }),
/* 10 */
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
__exportStar(__webpack_require__(11), exports);


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TcpMicroservice = exports.UpdateMicroservice = exports.LogMicroservice = exports.CobotMicroservice = exports.SoundMicroservice = exports.SettingMicroservice = exports.TaskMicroservice = exports.OnvifMicroservice = exports.MapMicroservice = exports.NetworkMicroservice = exports.LocalizationMicroservice = exports.MoveMicroservice = exports.CodeMicroservice = exports.ControlMicroservice = exports.ConfigMicroservice = exports.RedisMicroservice = exports.AmrMicroservice = exports.AuthMicroservice = exports.UserMicroservice = void 0;
exports.UserMicroservice = __webpack_require__(12);
exports.AuthMicroservice = __webpack_require__(13);
exports.AmrMicroservice = __webpack_require__(14);
exports.RedisMicroservice = __webpack_require__(15);
exports.ConfigMicroservice = __webpack_require__(16);
exports.ControlMicroservice = __webpack_require__(17);
exports.CodeMicroservice = __webpack_require__(18);
exports.MoveMicroservice = __webpack_require__(19);
exports.LocalizationMicroservice = __webpack_require__(20);
exports.NetworkMicroservice = __webpack_require__(21);
exports.MapMicroservice = __webpack_require__(22);
exports.OnvifMicroservice = __webpack_require__(23);
exports.TaskMicroservice = __webpack_require__(24);
exports.SettingMicroservice = __webpack_require__(25);
exports.SoundMicroservice = __webpack_require__(26);
exports.CobotMicroservice = __webpack_require__(27);
exports.LogMicroservice = __webpack_require__(28);
exports.UpdateMicroservice = __webpack_require__(29);
exports.TcpMicroservice = __webpack_require__(30);


/***/ }),
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CONTROL_GRPC_SERVICE_NAME = exports.CONTROL_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.ControlGrpcServiceControllerMethods = ControlGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(2);
exports.protobufPackage = 'control';
exports.CONTROL_PACKAGE_NAME = 'control';
function ControlGrpcServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = [
            'onOffControl',
            'workControl',
            'ledControl',
            'setSafetyField',
            'getSafetyField',
            'exAccessoryControl',
            'safetyIoControl',
            'setObsBox',
            'getObsBox',
        ];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)('ControlGrpcService', method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)('ControlGrpcService', method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.CONTROL_GRPC_SERVICE_NAME = 'ControlGrpcService';


/***/ }),
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
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
/* 27 */
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
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
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
__exportStar(__webpack_require__(32), exports);


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GrpcInterceptor = void 0;
const rxjs_1 = __webpack_require__(33);
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
/* 33 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 34 */
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
__exportStar(__webpack_require__(35), exports);


/***/ }),
/* 35 */
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
/* 36 */
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
exports.TaskService = void 0;
const common_1 = __webpack_require__(9);
const common_2 = __webpack_require__(5);
const task_database_output_port_1 = __webpack_require__(37);
const task_taskman_output_port_1 = __webpack_require__(38);
const task_domain_1 = __webpack_require__(39);
const microservices_1 = __webpack_require__(2);
const rpc_code_exception_1 = __webpack_require__(43);
const constant_1 = __webpack_require__(44);
const fs_1 = __webpack_require__(46);
const path_1 = __webpack_require__(3);
const task_type_1 = __webpack_require__(40);
const saveLog_service_1 = __webpack_require__(47);
let TaskService = class TaskService {
    constructor(databaseOutput, taskmanOutput, saveLogService) {
        this.databaseOutput = databaseOutput;
        this.taskmanOutput = taskmanOutput;
        this.saveLogService = saveLogService;
        this.slamnav_connection = false;
        this.taskman_connection = false;
        this.logger = this.saveLogService.get('task');
    }
    onModuleInit() {
        this.logger?.debug(`[Task] Module Init`);
        this.taskmanOutput.checkSocketConnection();
    }
    slamConnect() {
        this.logger?.debug(`[Task] SLAMNAV Connnected`);
        this.slamnav_connection = true;
    }
    slamDisconnect() {
        this.logger?.debug(`[Task] SLAMNAV Disconnnected`);
        this.slamnav_connection = false;
    }
    taskConnect() {
        this.logger?.debug(`[Task] Taskman Connnected`);
        this.taskman_connection = true;
    }
    taskDisconnect() {
        this.logger?.debug(`[Task] Taskman Disconnnected`);
        this.taskman_connection = false;
    }
    async getState() {
        const state = await this.databaseOutput.getStateLast();
        return {
            mapName: state.mapName,
            taskName: state.taskName,
            taskId: state.taskId,
            running: state.running,
            connection: this.taskman_connection,
        };
    }
    async stateRequest() {
        try {
            if (!this.taskman_connection) {
                throw new rpc_code_exception_1.RpcCodeException('Taskman이 연결되지 않았습니다.', constant_1.GrpcCode.FailedPrecondition);
            }
            const resp = await this.taskmanOutput.stateSocketRequest();
            this.logger?.info(`[Task] State Response : ${JSON.stringify(resp)}`);
            return resp;
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Task] stateRequest : ${(0, common_1.errorToJson)(error)}`);
            return this.getState();
        }
    }
    async variablesRequest() {
        try {
            if (!this.taskman_connection) {
                throw new rpc_code_exception_1.RpcCodeException('Taskman이 연결되지 않았습니다', constant_1.GrpcCode.FailedPrecondition);
            }
            const resp = await this.taskmanOutput.variableSocketRequest();
            return resp;
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Task] variablesRequest : ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('Variables 값을 가져올 수 없습니다', constant_1.GrpcCode.InternalError);
        }
    }
    async taskRequest(request) {
        let command = null;
        try {
            this.logger?.info(`[Task] taskRequest : ${JSON.stringify(request)}`);
            command = new task_domain_1.TaskModel(request);
            command.checkVariables();
            const result = await this.databaseOutput.save(command);
            this.logger?.info(`[APP] Task DB Save : ${result._id.toString()}`);
            command.assignId(result._id.toString());
            if (command.command === task_type_1.TaskCommand.taskLoad ||
                command.command === task_type_1.TaskCommand.taskRun ||
                command.command === task_type_1.TaskCommand.taskDelete) {
                if (!(0, fs_1.existsSync)((0, path_1.join)('/data/maps', command.mapName, command.taskName))) {
                    throw new rpc_code_exception_1.RpcCodeException(`파일이 존재하지 않습니다 (${command.mapName}/${command.taskName})`, constant_1.GrpcCode.NotFound);
                }
            }
            if (this.taskman_connection) {
                const resp = await this.taskmanOutput.taskSocketRequest(command);
                this.logger?.info(`[APP] Task Response : ${JSON.stringify(resp)}`);
                command.statusChange('accept');
                const result = await this.databaseOutput.update(command);
                this.logger?.info(`[APP] Task DB Update : ${result?._id.toString()}`);
                return resp;
            }
            else {
                this.logger?.warn(`[APP] taskRequest : Taskman disconnected`);
                throw new rpc_code_exception_1.RpcCodeException('Taskman이 연결되지 않았습니다', constant_1.GrpcCode.FailedPrecondition);
            }
        }
        catch (error) {
            if (command) {
                if (error.error?.details) {
                    command.statusChange(task_domain_1.TaskStatus.fail, error.error.details);
                }
                else {
                    command.statusChange(task_domain_1.TaskStatus.fail, error.message);
                }
                await this.databaseOutput.update(command);
            }
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.warn(`[APP] taskRequest : ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('Task 명령을 수행할 수 없습니다', constant_1.GrpcCode.InternalError);
        }
    }
    async updateResponse(resp) {
        try {
            this.logger?.info(`[Task] updateResponse : ${JSON.stringify(resp)}`);
            if (resp.id) {
                const dbmodel = await this.databaseOutput.getNodebyId(resp.id);
                if (dbmodel) {
                    const model = new task_domain_1.TaskModel(dbmodel);
                    model.assignId(dbmodel.id);
                    model.statusChange('accept');
                    this.databaseOutput.update(model);
                }
            }
        }
        catch (error) {
            this.logger?.error(`[Task] updateResponse : ${(0, common_1.errorToJson)(error)}`);
        }
    }
    async stateResponse(data) {
        try {
            this.databaseOutput.saveState({ ...data });
        }
        catch (error) {
            this.logger?.error(`[Task] stateResponse : ${(0, common_1.errorToJson)(error)}`);
        }
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, common_2.Inject)('DatabaseOutputPort')),
    __param(1, (0, common_2.Inject)('TaskmanOutputPort')),
    __metadata("design:paramtypes", [typeof (_a = typeof task_database_output_port_1.TaskDatabaseOutputPort !== "undefined" && task_database_output_port_1.TaskDatabaseOutputPort) === "function" ? _a : Object, typeof (_b = typeof task_taskman_output_port_1.TaskTaskmanOutputPort !== "undefined" && task_taskman_output_port_1.TaskTaskmanOutputPort) === "function" ? _b : Object, typeof (_c = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _c : Object])
], TaskService);


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskModel = exports.TaskStatus = void 0;
const task_type_1 = __webpack_require__(40);
const rpc_code_exception_1 = __webpack_require__(43);
const constant_1 = __webpack_require__(44);
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["pending"] = "pending";
    TaskStatus["accept"] = "accept";
    TaskStatus["reject"] = "reject";
    TaskStatus["running"] = "running";
    TaskStatus["fail"] = "fail";
    TaskStatus["cancelled"] = "cancelled";
    TaskStatus["done"] = "done";
    TaskStatus["unknown"] = "unknown";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));
class TaskModel {
    constructor(param) {
        this.status = TaskStatus.pending;
        this.command = param.command;
        this.mapName = param.mapName;
        this.taskName = param.taskName;
        this.tree = param.data;
    }
    assignId(id) {
        this.id = id;
    }
    checkVariables() {
        if (this.taskName) {
            if (this.taskName.split('.').length === 1) {
                this.taskName = this.taskName + '.task';
            }
        }
        if (this.command == task_type_1.TaskCommand.taskLoad) {
            if (this.mapName === '') {
                throw new rpc_code_exception_1.RpcCodeException('mapName 값이 없습니다', constant_1.GrpcCode.InvalidArgument);
            }
            if (this.taskName === '' || this.taskName === undefined) {
                throw new rpc_code_exception_1.RpcCodeException('taskName 값이 없습니다', constant_1.GrpcCode.InvalidArgument);
            }
        }
        else if (this.command === task_type_1.TaskCommand.taskRun) {
            if (this.mapName === '') {
                throw new rpc_code_exception_1.RpcCodeException('mapName 값이 없습니다', constant_1.GrpcCode.InvalidArgument);
            }
            if (this.taskName === '' || this.taskName === undefined) {
                throw new rpc_code_exception_1.RpcCodeException('taskName 값이 없습니다', constant_1.GrpcCode.InvalidArgument);
            }
        }
        else if (this.command === task_type_1.TaskCommand.taskStop) {
        }
        else if (this.command === task_type_1.TaskCommand.taskSave) {
            if (this.mapName === '') {
                throw new rpc_code_exception_1.RpcCodeException('mapName 값이 없습니다', constant_1.GrpcCode.InvalidArgument);
            }
            if (this.taskName === '' || this.taskName === undefined) {
                throw new rpc_code_exception_1.RpcCodeException('taskName 값이 없습니다', constant_1.GrpcCode.InvalidArgument);
            }
            if (this.tree === undefined || this.tree.children.length == 0) {
                throw new rpc_code_exception_1.RpcCodeException('data 값이 없습니다', constant_1.GrpcCode.InvalidArgument);
            }
        }
        else if (this.command === task_type_1.TaskCommand.taskDelete) {
            if (this.mapName === '') {
                throw new rpc_code_exception_1.RpcCodeException('mapName 값이 없습니다', constant_1.GrpcCode.InvalidArgument);
            }
            if (this.taskName === '' || this.taskName === undefined) {
                throw new rpc_code_exception_1.RpcCodeException('taskName 값이 없습니다', constant_1.GrpcCode.InvalidArgument);
            }
        }
        else {
            throw new rpc_code_exception_1.RpcCodeException('command 값을 알 수 없습니다', constant_1.GrpcCode.InvalidArgument);
        }
    }
    statusChange(status, message) {
        if (!this.id) {
            throw new rpc_code_exception_1.RpcCodeException('ID가 없습니다', constant_1.GrpcCode.NotFound);
        }
        this.status = this.parseStatus(status);
        this.message = message;
    }
    parseStatus(value) {
        if (Object.values(TaskStatus).includes(value)) {
            return value;
        }
        return TaskStatus.unknown;
    }
}
exports.TaskModel = TaskModel;


/***/ }),
/* 40 */
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
exports.TaskFileDto = exports.TaskVariableDto = exports.TaskCommand = void 0;
const swagger_1 = __webpack_require__(41);
const class_validator_1 = __webpack_require__(42);
var Description;
(function (Description) {
    Description["MAPNAME"] = "\uB9F5 \uC774\uB984";
    Description["TASKNAME"] = "\uD0DC\uC2A4\uD06C \uC774\uB984";
    Description["VARIABLE_NAME"] = "\uBCC0\uC218 \uC774\uB984";
    Description["VARIABLE_TYPE"] = "\uBCC0\uC218 \uD0C0\uC785";
})(Description || (Description = {}));
var TaskCommand;
(function (TaskCommand) {
    TaskCommand["taskLoad"] = "taskLoad";
    TaskCommand["taskRun"] = "taskRun";
    TaskCommand["taskStop"] = "taskStop";
    TaskCommand["taskSave"] = "taskSave";
    TaskCommand["taskDelete"] = "taskDelete";
})(TaskCommand || (exports.TaskCommand = TaskCommand = {}));
class TaskVariableDto {
}
exports.TaskVariableDto = TaskVariableDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: Description.VARIABLE_NAME,
        example: 'test',
        required: false,
    }),
    __metadata("design:type", String)
], TaskVariableDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: Description.VARIABLE_TYPE,
        example: 'string',
        required: false,
    }),
    __metadata("design:type", String)
], TaskVariableDto.prototype, "type", void 0);
class TaskFileDto {
}
exports.TaskFileDto = TaskFileDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MAPNAME,
        example: 'Test',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], TaskFileDto.prototype, "mapName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.TASKNAME,
        example: 'moveTest.task',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], TaskFileDto.prototype, "taskName", void 0);


/***/ }),
/* 41 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 42 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 43 */
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
/* 44 */
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
__exportStar(__webpack_require__(45), exports);


/***/ }),
/* 45 */
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
/* 46 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 47 */
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
const common_1 = __webpack_require__(5);
const winston_1 = __webpack_require__(48);
const DailyRotateFile = __webpack_require__(49);
const util_1 = __webpack_require__(50);
const chalk_1 = __webpack_require__(64);
const fs_1 = __webpack_require__(46);
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
/* 48 */
/***/ ((module) => {

module.exports = require("winston");

/***/ }),
/* 49 */
/***/ ((module) => {

module.exports = require("winston-daily-rotate-file");

/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationUtil = exports.CryptoUtil = exports.ParseUtil = exports.FileUtil = exports.DateUtil = exports.UrlUtil = void 0;
var url_util_1 = __webpack_require__(51);
Object.defineProperty(exports, "UrlUtil", ({ enumerable: true, get: function () { return url_util_1.UrlUtil; } }));
var date_util_1 = __webpack_require__(53);
Object.defineProperty(exports, "DateUtil", ({ enumerable: true, get: function () { return date_util_1.DateUtil; } }));
var file_util_1 = __webpack_require__(55);
Object.defineProperty(exports, "FileUtil", ({ enumerable: true, get: function () { return file_util_1.FileUtil; } }));
var parse_util_1 = __webpack_require__(61);
Object.defineProperty(exports, "ParseUtil", ({ enumerable: true, get: function () { return parse_util_1.ParseUtil; } }));
var crypto_util_1 = __webpack_require__(62);
Object.defineProperty(exports, "CryptoUtil", ({ enumerable: true, get: function () { return crypto_util_1.CryptoUtil; } }));
var validation_util_1 = __webpack_require__(63);
Object.defineProperty(exports, "ValidationUtil", ({ enumerable: true, get: function () { return validation_util_1.ValidationUtil; } }));


/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UrlUtil = void 0;
const uuid_1 = __webpack_require__(52);
class UrlUtil {
    static generateUUID() {
        return (0, uuid_1.v4)();
    }
}
exports.UrlUtil = UrlUtil;


/***/ }),
/* 52 */
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DateUtil = void 0;
const date_fns_1 = __webpack_require__(54);
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
/* 54 */
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileUtil = void 0;
const fs = __webpack_require__(46);
const path = __webpack_require__(3);
const unzipper = __webpack_require__(56);
const il = __webpack_require__(57);
const uuid_1 = __webpack_require__(52);
const archiver_1 = __webpack_require__(58);
const csv = __webpack_require__(59);
const zlib_1 = __webpack_require__(60);
const rpc_code_exception_1 = __webpack_require__(43);
const constant_1 = __webpack_require__(44);
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
/* 56 */
/***/ ((module) => {

module.exports = require("unzipper");

/***/ }),
/* 57 */
/***/ ((module) => {

module.exports = require("iconv-lite");

/***/ }),
/* 58 */
/***/ ((module) => {

module.exports = require("archiver");

/***/ }),
/* 59 */
/***/ ((module) => {

module.exports = require("csv");

/***/ }),
/* 60 */
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),
/* 61 */
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
/* 62 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CryptoUtil = void 0;
class CryptoUtil {
}
exports.CryptoUtil = CryptoUtil;


/***/ }),
/* 63 */
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
/* 64 */
/***/ ((module) => {

module.exports = require("chalk");

/***/ }),
/* 65 */
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
exports.TaskParserService = void 0;
const fs = __webpack_require__(46);
const path = __webpack_require__(3);
const microservices_1 = __webpack_require__(2);
const parse_util_1 = __webpack_require__(61);
const rpc_code_exception_1 = __webpack_require__(43);
const constant_1 = __webpack_require__(44);
const saveLog_service_1 = __webpack_require__(47);
const common_1 = __webpack_require__(5);
let TaskParserService = class TaskParserService {
    constructor(saveLogService) {
        this.saveLogService = saveLogService;
        this.logger = this.saveLogService.get('task');
    }
    async getTaskList(request) {
        try {
            this.logger?.info(`[Parser] getTaskList : ${JSON.stringify(request)}`);
            if (request.mapName === undefined || request.mapName === '') {
                this.logger?.error(`[Parser] getTask: mapName undefined`);
                throw new rpc_code_exception_1.RpcCodeException('mapName 값이 없습니다', constant_1.GrpcCode.InvalidArgument);
            }
            const mapPath = this.getMapPath(request.mapName);
            if (!fs.existsSync(mapPath)) {
                this.logger?.error(`[Parser] getTask: mapPath not found (${mapPath})`);
                throw new rpc_code_exception_1.RpcCodeException(`경로의 맵 폴더가 없습니다 (${request.mapName})`, constant_1.GrpcCode.NotFound);
            }
            const files = await fs.promises.readdir(mapPath, { withFileTypes: true });
            const list = [];
            files.map((file) => {
                if (file.name.split('.').length > 1) {
                    if (file.name.split('.')[1] == 'task') {
                        list.push(file.name);
                    }
                }
            });
            return { ...request, list: list };
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Parser] getTaskList: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('리스트를 가져올 수 없습니다', constant_1.GrpcCode.InternalError);
        }
    }
    async getTask(request) {
        try {
            this.logger?.info(`[Parser] getTask : ${JSON.stringify(request)}`);
            if (request.mapName === undefined || request.mapName === '') {
                this.logger?.error(`[Parser] getTask : mapName undefined`);
                throw new rpc_code_exception_1.RpcCodeException('mapName 값이 없습니다', constant_1.GrpcCode.InvalidArgument);
            }
            if (request.taskName === undefined || request.taskName === '') {
                this.logger?.error(`[Parser] getTask : taskName undefined`);
                throw new rpc_code_exception_1.RpcCodeException('taskName 값이 없습니다', constant_1.GrpcCode.InvalidArgument);
            }
            if (request.taskName.split('.').length === 1) {
                request.taskName = request.taskName + '.task';
            }
            const taskPath = this.getTaskPath(request.mapName, request.taskName);
            if (!fs.existsSync(taskPath)) {
                this.logger?.error(`[Parser] getTask : taskPath not found (${taskPath})`);
                throw new rpc_code_exception_1.RpcCodeException('경로의 파일이 존재하지 않습니다.', constant_1.GrpcCode.NotFound);
            }
            const parseData = await this.parse(taskPath);
            return { ...request, data: parseData };
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Parser] getTask: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('파일을 읽는 도중 에러가 발생했습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async saveTask(request) {
        try {
            this.logger?.info(`[Parser] saveTask : ${JSON.stringify(request)}`);
            if (request.mapName == undefined || request.mapName == '') {
                this.logger?.error(`[Parser] saveTask: mapName undefined`);
                throw new rpc_code_exception_1.RpcCodeException('mapName 값이 존재하지 않습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            if (request.taskName == undefined || request.taskName == '') {
                this.logger?.error(`[Parser] saveTask: taskName undefined`);
                throw new rpc_code_exception_1.RpcCodeException('taskName 값이 존재하지 않습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            if (request.data == undefined || request.data.children.length == 0) {
                this.logger?.error(`[Parser] saveTask: data undefined`);
                throw new rpc_code_exception_1.RpcCodeException('저장할 데이터가 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            const taskPath = this.getTaskPath(request.mapName, request.taskName);
            const textData = await this.treeToText(request.data);
            fs.writeFileSync(taskPath, textData);
            return { ...request };
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Parser] saveTask: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('파일을 읽는 도중 에러가 발생했습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async deleteTask(request) {
        try {
            this.logger?.info(`[Parser] deleteTask : ${JSON.stringify(request)}`);
            if (request.mapName == undefined || request.mapName == '') {
                this.logger?.error(`[Parser] saveTask: mapName undefined`);
                throw new rpc_code_exception_1.RpcCodeException('mapName 값이 존재하지 않습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            if (request.taskName == undefined || request.taskName == '') {
                this.logger?.error(`[Parser] saveTask: taskName undefined`);
                throw new rpc_code_exception_1.RpcCodeException('taskName 값이 존재하지 않습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            const taskPath = this.getTaskPath(request.mapName, request.taskName);
            if (!fs.existsSync(taskPath)) {
                this.logger?.error(`[Parser] getTask: ${taskPath} not found`);
                throw new rpc_code_exception_1.RpcCodeException('경로의 파일이 존재하지 않습니다.', constant_1.GrpcCode.NotFound);
            }
            fs.unlinkSync(taskPath);
            this.logger?.info(`[Parser] deleteTask : ${taskPath} done`);
            return { ...request };
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Parser] deleteTask: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('파일을 삭제하는 도중 에러가 발생했습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async textToTreeData(text) {
        try {
            const stack = [];
            const lines = text
                .split('\n')
                .map((line) => line.trim())
                .filter((line) => line !== '');
            const root = { key: '0', label: 'root', children: [] };
            stack.push(root);
            let isStartScript = false;
            let isStartFolder = false;
            let isStartAssign = false;
            let script_value = '';
            lines.map(async (line) => {
                const keyword = this.findKeyword(line);
                const isNewTree = line.includes('{');
                const isEndTree = line.includes('}') && !line.includes('{');
                if (keyword == 'begin') {
                    const new_node = { label: 'begin', children: [] };
                    stack[stack.length - 1].children.push(new_node);
                }
                else if (keyword == 'wait') {
                    const value = this.findValue(line);
                    const new_node = {
                        label: 'wait',
                        data: value,
                        children: [],
                    };
                    stack[stack.length - 1].children.push(new_node);
                }
                else if (keyword == 'script') {
                    isStartScript = true;
                }
                else if (keyword == 'subp') {
                    const value = this.findValueSub(keyword, line);
                    const new_node = {
                        label: 'subp',
                        data: value,
                        children: [],
                    };
                    stack[stack.length - 1].children.push(new_node);
                }
                else if (keyword == 'assign') {
                    isStartAssign = true;
                }
                else if (keyword == 'folder') {
                    const value = this.findValue(line);
                    const new_node = {
                        label: 'folder',
                        data: value,
                        children: [],
                    };
                    stack[stack.length - 1].children.push(new_node);
                    stack.push(new_node);
                    isStartFolder = true;
                }
                else if (keyword == 'socket_func') {
                    const value = this.findValue(line);
                    const socket_child = this.findSocketChildren(line);
                    const new_node = {
                        label: 'socket_func_' + value,
                        data: socket_child,
                        children: [],
                    };
                    stack[stack.length - 1].children.push(new_node);
                }
                else if (keyword == 'repeat') {
                    const value = this.findValue(line);
                    const new_node = {
                        label: 'repeat',
                        data: value,
                        children: [],
                    };
                    stack[stack.length - 1].children.push(new_node);
                    stack.push(new_node);
                }
                else if (keyword == 'end') {
                    const new_node = { label: 'end', children: [] };
                    stack[stack.length - 1].children.push(new_node);
                }
                else if (keyword == 'move') {
                    const value = this.findValue(line);
                    const new_node = {
                        icon: 'pi pi-fw pi-forward',
                        label: 'move',
                        data: value,
                        children: [],
                    };
                    stack[stack.length - 1].children.push(new_node);
                }
                else if (keyword == 'halt') {
                    const new_node = { label: 'halt', children: [] };
                    stack[stack.length - 1].children.push(new_node);
                }
                else if (keyword == 'if') {
                    const value = this.findValue(line);
                    const new_node = {
                        label: 'if',
                        data: value,
                        children: [],
                    };
                    stack[stack.length - 1].children.push(new_node);
                    stack.push(new_node);
                }
                else if (keyword == 'else if') {
                    const value = this.findValue(line);
                    const new_node = {
                        label: 'else if',
                        data: value,
                        children: [],
                    };
                    stack[stack.length - 1].children.push(new_node);
                    stack.push(new_node);
                }
                else if (keyword == 'else') {
                    const new_node = { label: 'else', children: [] };
                    stack[stack.length - 1].children.push(new_node);
                    stack.push(new_node);
                }
                else if (keyword == 'break') {
                    const new_node = { label: 'break', children: [] };
                    stack[stack.length - 1].children.push(new_node);
                }
                else if (keyword == 'continue') {
                    const new_node = { label: 'continue', children: [] };
                    stack[stack.length - 1].children.push(new_node);
                }
                else if (keyword == 'general_thread') {
                    const new_node = {
                        label: 'general_thread',
                        children: [],
                    };
                    stack[stack.length - 1].children.push(new_node);
                    stack.push(new_node);
                }
                else if (keyword == 'map') {
                    const new_node = { label: 'map', children: [] };
                    stack[stack.length - 1].children.push(new_node);
                }
                else if (keyword == 'dock') {
                    const new_node = { label: 'dock', children: [] };
                    stack[stack.length - 1].children.push(new_node);
                }
                else if (keyword == 'undock') {
                    const new_node = { label: 'undock', children: [] };
                    stack[stack.length - 1].children.push(new_node);
                }
                else {
                    if (isStartScript) {
                        if (isEndTree) {
                            const new_node = {
                                label: 'script',
                                data: script_value.trimEnd(),
                                children: [],
                            };
                            stack[stack.length - 1].children.push(new_node);
                            isStartScript = false;
                            script_value = '';
                        }
                        else {
                            line.trim();
                            script_value += line + '\n';
                        }
                    }
                    else if (isStartAssign) {
                        if (isEndTree) {
                            const new_node = {
                                label: 'assign',
                                data: script_value.trimEnd(),
                                children: [],
                            };
                            stack[stack.length - 1].children.push(new_node);
                            isStartAssign = false;
                            script_value = '';
                        }
                        else {
                            line.trim();
                            script_value += line + '\n';
                        }
                    }
                    else if (isEndTree) {
                        stack.pop();
                    }
                }
            });
            return root;
        }
        catch (error) {
            this.logger?.error(`[Parser] textToTreeData: ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new Error('Task 파일을 파싱 중 에러가 발생했습니다.');
        }
    }
    async parse(dir) {
        return new Promise(async (resolve, reject) => {
            try {
                this.logger?.info(`[Parser] parse : ${dir}`);
                fs.open(dir, 'r', async (err, fd) => {
                    if (err) {
                        this.logger?.error(`[Parser] parse: ${parse_util_1.ParseUtil.errorToJson(err)}`);
                        reject(new rpc_code_exception_1.RpcCodeException('파일을 파싱할 수 없습니다', constant_1.GrpcCode.InternalError));
                    }
                    else {
                        const file = fs.readFileSync(dir, 'utf-8');
                        const result = await this.textToTreeData(file);
                        resolve(result);
                    }
                });
            }
            catch (error) {
                this.logger?.error(`[Parser] parse: ${parse_util_1.ParseUtil.errorToJson(error)}`);
                reject();
            }
        });
    }
    async treeToText(rootTree) {
        try {
            let text = '';
            const traverse = (node, indentLevel) => {
                let indent = '';
                if (indentLevel == 0) {
                }
                else {
                    indent = ' '.repeat((indentLevel - 1) * 4);
                }
                switch (node.label) {
                    case 'begin':
                        text += `${indent}begin\n`;
                        break;
                    case 'wait':
                        text += `${indent}wait (${node.data})\n`;
                        break;
                    case 'repeat':
                        text += `${indent}repeat (${node.data}){\n`;
                        break;
                    case 'folder':
                        text += `${indent}folder (${node.data}){\n`;
                        break;
                    case 'halt':
                        text += `${indent}halt\n`;
                        break;
                    case 'general_thread':
                        text += `${indent}general_thread{\n`;
                        break;
                    case 'end':
                        text += `${indent}end\n`;
                        break;
                    case 'move':
                        text += `${indent}move (${node.data})\n`;
                        break;
                    case 'subp':
                        text += `${indent}subp ${node.data}\n`;
                        break;
                    case 'if':
                        text += `${indent}if (${node.data}){\n`;
                        break;
                    case 'else if':
                        text += `${indent}else if (${node.data}){\n`;
                        break;
                    case 'else':
                        text += `${indent}else{\n`;
                        break;
                    case 'break':
                        text += `${indent}break\n`;
                        break;
                    case 'continue':
                        text += `${indent}continue\n`;
                        break;
                    case 'map':
                        text += `${indent}map\n`;
                        break;
                    case 'dock':
                        text += `${indent}dock()\n`;
                        break;
                    case 'undock':
                        text += `${indent}undock()\n`;
                        break;
                    case 'script': {
                        const lines = node.data?.split('\n');
                        if (lines) {
                            const childindent = ' '.repeat(indentLevel * 4);
                            text += `${indent}script{\n`;
                            lines.forEach((line) => {
                                text += `${childindent}${line}\n`;
                            });
                            text += `${indent}}\n`;
                        }
                        break;
                    }
                    case 'assign': {
                        const lines = node.data?.split('\n');
                        if (lines) {
                            const childindent = ' '.repeat(indentLevel * 4);
                            text += `${indent}assign{\n`;
                            lines.forEach((line) => {
                                text += `${childindent}${line}\n`;
                            });
                            text += `${indent}}\n`;
                        }
                        break;
                    }
                }
                if (node.label.includes('socket_func')) {
                    const id = node.label.split('_')[2];
                    text += `${indent}socket_func(${id}){${node.data}}\n`;
                }
                if (node.children && node.children.length > 0) {
                    node.children.forEach((child) => traverse(child, indentLevel + 1));
                    if (node.label != 'root') {
                        text += `${indent}}\n`;
                    }
                }
            };
            traverse(rootTree, 0);
            return text.trim();
        }
        catch (error) {
            this.logger?.error(`[Parser] treeToText : ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new Error('트리구조를 텍스트파일로 변환할 수 없습니다.');
        }
    }
    getMapPath(mapName) {
        return path.join('/data/maps', mapName);
    }
    getTaskPath(mapName, taskName) {
        return path.join('/data/maps', mapName, taskName);
    }
    findKeyword(line) {
        const keyword = [
            'repeat',
            'begin',
            'wait',
            'script',
            'socket_func',
            'halt',
            'end',
            'general_thread',
            'map',
            'else if',
            'if',
            'else',
            'move',
            'break',
            'continue',
            'folder',
            'assign',
            'subp',
            'undock',
            'dock',
        ];
        for (const key of keyword) {
            if (line.includes(key)) {
                return key;
            }
        }
        return '';
    }
    findValue(line) {
        try {
            return line.split('(')[1].split(')')[0];
        }
        catch (error) {
            this.logger?.error(`[Parser] findValue : ${parse_util_1.ParseUtil.errorToJson(error)}`);
            return '';
        }
    }
    findValueSub(keyword, line) {
        try {
            return line.split(keyword)[1].replace(' ', '');
        }
        catch (error) {
            this.logger?.error(`[Parser] findValueSub : ${parse_util_1.ParseUtil.errorToJson(error)}`);
            return '';
        }
    }
    findSocketChildren(line) {
        try {
            return line.split('{')[1].split('}')[0];
        }
        catch (error) {
            this.logger?.error(`[Parser] findSocketChildren : ${parse_util_1.ParseUtil.errorToJson(error)}`);
            return '';
        }
    }
    async getTaskFileList(dir) {
        try {
            const files = await fs.promises.readdir(dir, { withFileTypes: true });
            const list = [];
            files.map((file) => {
                if (file.name.split('.').length > 1) {
                    if (file.name.split('.')[1] == 'task') {
                        list.push(file.name);
                    }
                }
            });
            return list;
        }
        catch (e) {
            this.logger?.error(`[TASK] list: ${dir}, ${parse_util_1.ParseUtil.errorToJson(e)}`);
            throw new rpc_code_exception_1.RpcCodeException('Task 파일 리스트를 가져오던 중 에러가 발생했습니다.', constant_1.GrpcCode.InternalError);
        }
    }
};
exports.TaskParserService = TaskParserService;
exports.TaskParserService = TaskParserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _a : Object])
], TaskParserService);


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
exports.TaskMongoController = void 0;
const mongoose_1 = __webpack_require__(6);
const mongoose_2 = __webpack_require__(67);
const task_entity_1 = __webpack_require__(7);
const task_state_entity_1 = __webpack_require__(68);
const microservices_1 = __webpack_require__(2);
const common_1 = __webpack_require__(9);
const util_1 = __webpack_require__(50);
const constant_1 = __webpack_require__(44);
const rpc_code_exception_1 = __webpack_require__(43);
const saveLog_service_1 = __webpack_require__(47);
const common_2 = __webpack_require__(5);
let TaskMongoController = class TaskMongoController {
    constructor(Repository, StateRepository, saveLogService) {
        this.Repository = Repository;
        this.StateRepository = StateRepository;
        this.saveLogService = saveLogService;
        this.logger = this.saveLogService.get('task');
    }
    saveState(state) {
        this.StateRepository.create(state);
    }
    async getStateLast() {
        try {
            const state = await this.StateRepository.findOne().sort({ createdAt: -1 });
            if (state) {
                return state;
            }
            else {
                throw new rpc_code_exception_1.RpcCodeException('TaskState 값이 없습니다.', constant_1.GrpcCode.NotFound);
            }
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.logger?.error(`[Task] getStateLast : ${(0, common_1.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('TaskState를 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async getNodebyId(id) {
        try {
            return await this.Repository.findById(id);
        }
        catch (error) {
            this.logger?.error(`[Task] DB getNodebyId: ${util_1.ParseUtil.errorToJson(error)}`);
            throw new microservices_1.RpcException('데이터를 가져올 수 없습니다.');
        }
    }
    async save(move) {
        try {
            return await this.Repository.create(move);
        }
        catch (error) {
            this.logger?.error(`[Task] DB save: ${util_1.ParseUtil.errorToJson(error)}`);
            throw new microservices_1.RpcException('데이터를 저장할 수 없습니다.');
        }
    }
    async update(move) {
        return await this.Repository.findByIdAndUpdate(move.id, move);
    }
};
exports.TaskMongoController = TaskMongoController;
exports.TaskMongoController = TaskMongoController = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(task_entity_1.Task.name)),
    __param(1, (0, mongoose_1.InjectModel)(task_state_entity_1.TaskState.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _c : Object])
], TaskMongoController);


/***/ }),
/* 67 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 68 */
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
exports.TaskStateSchema = exports.TaskState = void 0;
const mongoose_1 = __webpack_require__(6);
let TaskState = class TaskState {
};
exports.TaskState = TaskState;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TaskState.prototype, "mapName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TaskState.prototype, "taskName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Number)
], TaskState.prototype, "taskId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Boolean)
], TaskState.prototype, "running", void 0);
exports.TaskState = TaskState = __decorate([
    (0, mongoose_1.Schema)()
], TaskState);
exports.TaskStateSchema = mongoose_1.SchemaFactory.createForClass(TaskState);
exports.TaskStateSchema.set('timestamps', true);


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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskMqttInputController = void 0;
const common_1 = __webpack_require__(5);
const microservices_1 = __webpack_require__(2);
const task_service_1 = __webpack_require__(36);
const rpc_code_exception_1 = __webpack_require__(43);
const constant_1 = __webpack_require__(44);
const task_pending_service_1 = __webpack_require__(70);
const state_dto_1 = __webpack_require__(72);
const task_dto_1 = __webpack_require__(73);
const variables_dto_1 = __webpack_require__(75);
let TaskMqttInputController = class TaskMqttInputController {
    constructor(taskService, pendingService) {
        this.taskService = taskService;
        this.pendingService = pendingService;
    }
    getTaskConnect() {
        console.log('taskconnect');
        this.taskService.taskConnect();
    }
    getTaskDisconnect() {
        this.taskService.taskDisconnect();
        this.pendingService.pendingResponses.forEach((resp) => {
            resp.reject(new rpc_code_exception_1.RpcCodeException('TASKMAN 연결이 끊어졌습니다', constant_1.GrpcCode.InternalError));
        });
        this.pendingService.pendingResponses.clear();
    }
    getStateResponse(data) {
        console.log('stateResponse');
        const listener = this.pendingService.pendingResponses.get(data.id);
        if (listener) {
            listener.received.push(data);
            listener.resolve(data);
            this.pendingService.pendingResponses.delete(data.id);
        }
        this.taskService.stateResponse(data);
    }
    getTaskResponse(data) {
        const listener = this.pendingService.pendingResponses.get(data.id);
        if (listener) {
            listener.received.push(data);
            listener.resolve(data);
            this.pendingService.pendingResponses.delete(data.id);
        }
        this.taskService.updateResponse(data);
    }
    getVariablesResponse(data) {
        console.log('variablesResponse Mqtt In : ', data.variables[0]);
        const listener = this.pendingService.pendingResponses.get(data.id);
        if (listener) {
            listener.received.push(data);
            listener.resolve(data);
            this.pendingService.pendingResponses.delete(data.id);
        }
    }
};
exports.TaskMqttInputController = TaskMqttInputController;
__decorate([
    (0, microservices_1.EventPattern)('con:taskman'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaskMqttInputController.prototype, "getTaskConnect", null);
__decorate([
    (0, microservices_1.EventPattern)('discon:taskman'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaskMqttInputController.prototype, "getTaskDisconnect", null);
__decorate([
    (0, microservices_1.EventPattern)('stateResponse'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof state_dto_1.TaskStateResponseTaskman !== "undefined" && state_dto_1.TaskStateResponseTaskman) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], TaskMqttInputController.prototype, "getStateResponse", null);
__decorate([
    (0, microservices_1.EventPattern)('taskResponse'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof task_dto_1.TaskResponseTaskman !== "undefined" && task_dto_1.TaskResponseTaskman) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], TaskMqttInputController.prototype, "getTaskResponse", null);
__decorate([
    (0, microservices_1.EventPattern)('variablesResponse'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof variables_dto_1.TaskVariablesResponseTaskman !== "undefined" && variables_dto_1.TaskVariablesResponseTaskman) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], TaskMqttInputController.prototype, "getVariablesResponse", null);
exports.TaskMqttInputController = TaskMqttInputController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof task_service_1.TaskService !== "undefined" && task_service_1.TaskService) === "function" ? _a : Object, typeof (_b = typeof task_pending_service_1.TaskPendingResponseService !== "undefined" && task_pending_service_1.TaskPendingResponseService) === "function" ? _b : Object])
], TaskMqttInputController);


/***/ }),
/* 70 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskPendingResponseService = void 0;
const pending_util_1 = __webpack_require__(71);
const common_1 = __webpack_require__(5);
let TaskPendingResponseService = class TaskPendingResponseService extends pending_util_1.PendingResponseUtil {
};
exports.TaskPendingResponseService = TaskPendingResponseService;
exports.TaskPendingResponseService = TaskPendingResponseService = __decorate([
    (0, common_1.Injectable)()
], TaskPendingResponseService);


/***/ }),
/* 71 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PendingResponseUtil = void 0;
const common_1 = __webpack_require__(5);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskStateResponseTaskman = exports.TaskStateRequestTaskman = exports.TaskStateResponseDto = void 0;
const class_validator_1 = __webpack_require__(42);
const swagger_1 = __webpack_require__(41);
const common_1 = __webpack_require__(5);
var Description;
(function (Description) {
    Description["MAPNAME"] = "\uB9F5 \uC774\uB984";
    Description["TASKNAME"] = "\uD0DC\uC2A4\uD06C \uC774\uB984";
    Description["RUNNING"] = "\uD0DC\uC2A4\uD06C \uC2E4\uD589 \uC0C1\uD0DC";
    Description["TASKID"] = "\uD0DC\uC2A4\uD06C ID";
    Description["RESULT"] = "\uACB0\uACFC";
    Description["MESSAGE"] = "\uBA54\uC2DC\uC9C0";
})(Description || (Description = {}));
class TaskStateResponseDto {
}
exports.TaskStateResponseDto = TaskStateResponseDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], TaskStateResponseDto.prototype, "connection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.MAPNAME, example: 'Test' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], TaskStateResponseDto.prototype, "mapName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.TASKNAME,
        example: 'moveTest.task',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], TaskStateResponseDto.prototype, "taskName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.RUNNING, example: true }),
    __metadata("design:type", Boolean)
], TaskStateResponseDto.prototype, "running", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.TASKID, example: 1 }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], TaskStateResponseDto.prototype, "taskId", void 0);
class TaskStateRequestTaskman {
}
exports.TaskStateRequestTaskman = TaskStateRequestTaskman;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TaskStateRequestTaskman.prototype, "id", void 0);
class TaskStateResponseTaskman extends TaskStateResponseDto {
}
exports.TaskStateResponseTaskman = TaskStateResponseTaskman;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, common_1.Optional)(),
    __metadata("design:type", String)
], TaskStateResponseTaskman.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.RESULT, example: 'accept' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], TaskStateResponseTaskman.prototype, "result", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.MESSAGE, example: '태스크 완료' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], TaskStateResponseTaskman.prototype, "message", void 0);


/***/ }),
/* 73 */
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
exports.TaskResponseTaskman = exports.TaskRequestTaskman = exports.TaskResponseDto = exports.TaskRequestDto = void 0;
const url_util_1 = __webpack_require__(51);
const swagger_1 = __webpack_require__(41);
const class_transformer_1 = __webpack_require__(74);
const class_validator_1 = __webpack_require__(42);
const task_type_1 = __webpack_require__(40);
var Description;
(function (Description) {
    Description["COMMAND"] = "\uD0DC\uC2A4\uD06C \uBA85\uB839. \uC218\uD589\uD560 \uD0DC\uC2A4\uD06C \uBA85\uB839\uC744 \uC785\uB825\uD558\uC138\uC694.";
    Description["MAPNAME"] = "\uB9F5 \uC774\uB984. \uD0DC\uC2A4\uD06C \uC791\uC5C5\uC744 \uC9C4\uD589\uD560 \uACBD\uC6B0, \uD574\uB2F9 \uD0DC\uC2A4\uD06C \uD30C\uC77C\uC774 \uC788\uB294 \uB9F5 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694. \uD0DC\uC2A4\uD06C \uD30C\uC77C\uC740 \uB9F5 \uD3F4\uB354\uC5D0 \uC885\uC18D\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.";
    Description["TASKNAME"] = "\uD0DC\uC2A4\uD06C \uC774\uB984. \uD0DC\uC2A4\uD06C \uD30C\uC77C\uC758 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694.";
    Description["ID"] = "\uC694\uCCAD\uC758 ID\uAC12. \uC694\uCCAD\uC5D0 \uB300\uD55C \uC751\uB2F5\uC744 \uBC1B\uAE30 \uC704\uD574 \uD544\uC694\uD569\uB2C8\uB2E4. \uC11C\uBC84\uC5D0\uC11C \uC694\uCCAD\uC744 \uBCF4\uB0BC \uB54C \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uB429\uB2C8\uB2E4.";
    Description["RESULT"] = "\uC694\uCCAD\uC5D0 \uB300\uD55C \uACB0\uACFC. \uC694\uCCAD\uC5D0 \uB300\uD55C \uACB0\uACFC\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4.";
    Description["MESSAGE"] = "\uC694\uCCAD\uC5D0 \uB300\uD55C \uBA54\uC2DC\uC9C0. \uC694\uCCAD\uC5D0 \uB300\uD55C \uBA54\uC2DC\uC9C0\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4.";
})(Description || (Description = {}));
class TaskRequestDto {
}
exports.TaskRequestDto = TaskRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.COMMAND,
        example: task_type_1.TaskCommand.taskRun,
        enum: task_type_1.TaskCommand,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], TaskRequestDto.prototype, "command", void 0);
class TaskResponseDto extends TaskRequestDto {
}
exports.TaskResponseDto = TaskResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '태스크 이름', example: 'task_001', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TaskResponseDto.prototype, "taskName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '태스크 상태', example: 'RUNNING', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TaskResponseDto.prototype, "taskState", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '태스크 목록',
        example: ['task_001', 'task_002'],
        required: false,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], TaskResponseDto.prototype, "taskList", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '태스크 데이터', example: {}, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], TaskResponseDto.prototype, "taskData", void 0);
class TaskRequestTaskman extends TaskRequestDto {
}
exports.TaskRequestTaskman = TaskRequestTaskman;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ID,
        example: url_util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TaskRequestTaskman.prototype, "id", void 0);
class TaskResponseTaskman extends TaskResponseDto {
}
exports.TaskResponseTaskman = TaskResponseTaskman;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ID,
        example: url_util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TaskResponseTaskman.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.RESULT, example: 'accept', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TaskResponseTaskman.prototype, "result", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.MESSAGE, example: '', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TaskResponseTaskman.prototype, "message", void 0);


/***/ }),
/* 74 */
/***/ ((module) => {

module.exports = require("class-transformer");

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskVariablesResponseTaskman = exports.TaskVariablesRequestTaskman = exports.TaskVariablesResponseDto = void 0;
const swagger_1 = __webpack_require__(41);
const class_validator_1 = __webpack_require__(42);
const task_type_1 = __webpack_require__(40);
const util_1 = __webpack_require__(50);
const class_transformer_1 = __webpack_require__(74);
class TaskVariablesResponseDto {
}
exports.TaskVariablesResponseDto = TaskVariablesResponseDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({
        description: '태스크 변수 리스트',
        type: [task_type_1.TaskVariableDto],
    }),
    __metadata("design:type", Array)
], TaskVariablesResponseDto.prototype, "variables", void 0);
class TaskVariablesRequestTaskman {
}
exports.TaskVariablesRequestTaskman = TaskVariablesRequestTaskman;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'ID',
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TaskVariablesRequestTaskman.prototype, "id", void 0);
class TaskVariablesResponseTaskman extends TaskVariablesResponseDto {
}
exports.TaskVariablesResponseTaskman = TaskVariablesResponseTaskman;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: 'ID',
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TaskVariablesResponseTaskman.prototype, "id", void 0);


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
exports.TaskSocketioOutputController = void 0;
const common_1 = __webpack_require__(5);
const common_2 = __webpack_require__(9);
const microservices_1 = __webpack_require__(2);
const util_1 = __webpack_require__(50);
const constant_1 = __webpack_require__(77);
const task_pending_service_1 = __webpack_require__(70);
const rpc_code_exception_1 = __webpack_require__(43);
const constant_2 = __webpack_require__(44);
const saveLog_service_1 = __webpack_require__(47);
let TaskSocketioOutputController = class TaskSocketioOutputController {
    constructor(mqttMicroservice, pendingService, saveLogService) {
        this.mqttMicroservice = mqttMicroservice;
        this.pendingService = pendingService;
        this.saveLogService = saveLogService;
        this.logger = this.saveLogService.get('task');
    }
    checkSocketConnection() {
        this.mqttMicroservice.emit('get:socket:connection', {});
    }
    async taskSocketRequest(data) {
        try {
            this.logger?.debug(`[Task] taskSocketRequest : ${JSON.stringify(data)}`);
            const response = this.waitForResponse(data.id, 5000);
            this.mqttMicroservice.emit('taskman:taskRequest', data);
            const resp = await response;
            this.logger?.debug(`[Task] taskSocketRequest Response : ${JSON.stringify(resp)}`);
            return resp;
        }
        catch (error) {
            this.logger?.error(`[Task] taskSocketRequest : ${(0, common_2.errorToJson)(error)}`);
            throw error;
        }
    }
    async stateSocketRequest() {
        try {
            const id = util_1.UrlUtil.generateUUID();
            this.logger?.debug(`[Task] stateSocketRequest : ${id}`);
            const response = this.waitForResponse(id, 5000);
            this.mqttMicroservice.emit('taskman:stateRequest', { id: id });
            const resp = await response;
            this.logger?.debug(`[Task] stateSocketRequest Response : ${JSON.stringify(resp)}`);
            return resp;
        }
        catch (error) {
            this.logger?.error(`[Task] stateSocketRequest : ${(0, common_2.errorToJson)(error)}`);
            throw error;
        }
    }
    async variableSocketRequest() {
        try {
            const id = util_1.UrlUtil.generateUUID();
            this.logger?.debug(`[Task] variableSocketRequest : ${id}`);
            const response = this.waitForResponse(id, 5000);
            this.mqttMicroservice.emit('taskman:variableRequest', { id: id });
            const resp = await response;
            this.logger?.debug(`[Task] variableSocketRequest Response : ${JSON.stringify(resp)}`);
            return resp;
        }
        catch (error) {
            this.logger?.error(`[Task] variableSocketRequest : ${(0, common_2.errorToJson)(error)}`);
            throw error;
        }
    }
    async waitForResponse(id, timeoutMs) {
        return new Promise((resolve, reject) => {
            let timeout;
            if (timeoutMs) {
                timeout = setTimeout(() => {
                    this.pendingService.pendingResponses.delete(id);
                    this.logger?.error(`[Task] waitForResponse Timeout : ${id} , ${timeoutMs}`);
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
exports.TaskSocketioOutputController = TaskSocketioOutputController;
exports.TaskSocketioOutputController = TaskSocketioOutputController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)(constant_1.MQTT_BROKER)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientMqtt !== "undefined" && microservices_1.ClientMqtt) === "function" ? _a : Object, typeof (_b = typeof task_pending_service_1.TaskPendingResponseService !== "undefined" && task_pending_service_1.TaskPendingResponseService) === "function" ? _b : Object, typeof (_c = typeof saveLog_service_1.SaveLogService !== "undefined" && saveLog_service_1.SaveLogService) === "function" ? _c : Object])
], TaskSocketioOutputController);


/***/ }),
/* 77 */
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
__exportStar(__webpack_require__(78), exports);
__exportStar(__webpack_require__(79), exports);
exports.environment = __webpack_require__(80);
exports.message = __webpack_require__(82);


/***/ }),
/* 78 */
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
/* 79 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 80 */
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
__exportStar(__webpack_require__(81), exports);


/***/ }),
/* 81 */
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
/* 82 */
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
__exportStar(__webpack_require__(83), exports);


/***/ }),
/* 83 */
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
/* 84 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 85 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogModule = void 0;
const common_1 = __webpack_require__(5);
const saveLog_service_1 = __webpack_require__(47);
const cleanLog_service_1 = __webpack_require__(86);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CleanLogService = void 0;
const common_1 = __webpack_require__(5);
const schedule_1 = __webpack_require__(87);
const path = __webpack_require__(3);
const fs_1 = __webpack_require__(46);
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
/* 87 */
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

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
const path_1 = __webpack_require__(3);
const task_module_1 = __webpack_require__(4);
const common_1 = __webpack_require__(9);
const config_1 = __webpack_require__(84);
async function bootstrap() {
    const taskModule = await core_1.NestFactory.create(task_module_1.TaskModule);
    const config = taskModule.get(config_1.ConfigService);
    taskModule.connectMicroservice({
        transport: microservices_1.Transport.GRPC,
        options: {
            package: common_1.TaskMicroservice.protobufPackage,
            protoPath: (0, path_1.join)(process.cwd(), 'proto/task.proto'),
            url: config.get('TASK_GRPC_URL'),
        },
    });
    taskModule.connectMicroservice({
        transport: microservices_1.Transport.MQTT,
        options: {
            url: config.get('MQTT_URL'),
            clientId: 'microservice-task',
        },
    });
    await taskModule.init();
    await taskModule.startAllMicroservices();
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map