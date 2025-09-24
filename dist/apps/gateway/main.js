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

module.exports = require("nestjs-asyncapi");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

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
exports.RRSApiModule = void 0;
const common_1 = __webpack_require__(5);
const control_api_module_1 = __webpack_require__(6);
const localization_api_module_1 = __webpack_require__(75);
const network_api_module_1 = __webpack_require__(81);
const config_api_module_1 = __webpack_require__(85);
const setting_api_module_1 = __webpack_require__(91);
const move_api_module_1 = __webpack_require__(95);
const task_api_module_1 = __webpack_require__(106);
const map_api_module_1 = __webpack_require__(111);
const sound_api_module_1 = __webpack_require__(124);
const log_api_module_1 = __webpack_require__(128);
const update_api_module_1 = __webpack_require__(132);
const cobot_api_module_1 = __webpack_require__(140);
const tcp_api_module_1 = __webpack_require__(144);
let RRSApiModule = class RRSApiModule {
};
exports.RRSApiModule = RRSApiModule;
exports.RRSApiModule = RRSApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            control_api_module_1.ControlApiModule,
            setting_api_module_1.SettingApiModule,
            localization_api_module_1.LocalizationApiModule,
            config_api_module_1.ConfigApiModule,
            network_api_module_1.NetworkApiModule,
            move_api_module_1.MoveApiModule,
            task_api_module_1.TaskApiModule,
            map_api_module_1.MapApiModule,
            cobot_api_module_1.CobotApiModule,
            sound_api_module_1.SoundApiModule,
            log_api_module_1.LogApiModule,
            update_api_module_1.UpdateApiModule,
            tcp_api_module_1.TcpApiModule,
        ],
        controllers: [],
        providers: [],
    })
], RRSApiModule);


/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControlApiModule = void 0;
const common_1 = __webpack_require__(5);
const control_api_controller_1 = __webpack_require__(7);
const config_1 = __webpack_require__(74);
const microservices_1 = __webpack_require__(3);
const common_2 = __webpack_require__(8);
const path_1 = __webpack_require__(44);
const constant_1 = __webpack_require__(65);
const control_api_service_1 = __webpack_require__(64);
let ControlApiModule = class ControlApiModule {
};
exports.ControlApiModule = ControlApiModule;
exports.ControlApiModule = ControlApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            microservices_1.ClientsModule.registerAsync([
                {
                    name: constant_1.CONTROL_SERVICE,
                    inject: [config_1.ConfigService],
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.GRPC,
                        options: {
                            package: common_2.ControlMicroservice.protobufPackage,
                            protoPath: (0, path_1.join)(process.cwd(), 'proto/control.proto'),
                            url: configService.get('CONTROL_GRPC_URL'),
                        },
                    }),
                },
                {
                    name: constant_1.COBOT_SERVICE,
                    inject: [config_1.ConfigService],
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.GRPC,
                        options: {
                            package: common_2.CobotMicroservice.protobufPackage,
                            protoPath: (0, path_1.join)(process.cwd(), 'proto/cobot.proto'),
                            url: configService.get('COBOT_GRPC_URL'),
                        },
                    }),
                },
            ]),
        ],
        controllers: [control_api_controller_1.ControlApiController],
        providers: [control_api_service_1.ControlApiService],
    })
], ControlApiModule);


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControlApiController = void 0;
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(5);
const swagger_1 = __webpack_require__(58);
const control_dto_1 = __webpack_require__(59);
const error_response_dto_1 = __webpack_require__(63);
const control_api_service_1 = __webpack_require__(64);
const safety_io_dto_1 = __webpack_require__(72);
let ControlApiController = class ControlApiController {
    constructor(controlService) {
        this.controlService = controlService;
        this.loggerService = common_1.LoggerService.get('gateway');
    }
    async OnOff(dto) {
        return this.controlService.OnOff(dto);
    }
    async Work(dto) {
        return this.controlService.Work(dto);
    }
    async WorkDock() {
        return this.controlService.Work({ command: 'dock' });
    }
    async WorkUnDock() {
        return this.controlService.Work({ command: 'undock' });
    }
    async GetSafetyField() {
        return this.controlService.GetSafetyField();
    }
    async SetSafetyField(dto) {
        return this.controlService.SetSafetyField(dto);
    }
    async Led(dto) {
        return this.controlService.LED(dto);
    }
    async SafetyIo(dto) {
        return this.controlService.SafetyIo(dto);
    }
};
exports.ControlApiController = ControlApiController;
__decorate([
    (0, common_2.Post)('onoff'),
    (0, swagger_1.ApiOperation)({
        summary: '기능 OnOff 요청',
        description: '특정 기능을 켜고 끄는 요청을 합니다. 일부 기능에 따라 전송주기를 입력합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '기능 OnOff 요청 성공',
        type: control_dto_1.OnOffResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof control_dto_1.OnOffRequestDto !== "undefined" && control_dto_1.OnOffRequestDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ControlApiController.prototype, "OnOff", null);
__decorate([
    (0, common_2.Post)('work'),
    (0, swagger_1.ApiOperation)({
        summary: '특정 기능 실행 요청',
        description: '특정 기능을 실행 합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '특정 기능 실행 요청 성공',
        type: control_dto_1.WorkResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof control_dto_1.WorkRequestDto !== "undefined" && control_dto_1.WorkRequestDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ControlApiController.prototype, "Work", null);
__decorate([
    (0, common_2.Post)('work/dock'),
    (0, swagger_1.ApiOperation)({
        summary: '도킹 실행 요청',
        description: '도킹 명령을 요청합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '도킹 실행 요청 성공',
        type: control_dto_1.WorkResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], ControlApiController.prototype, "WorkDock", null);
__decorate([
    (0, common_2.Post)('work/undock'),
    (0, swagger_1.ApiOperation)({
        summary: '언도킹 실행 요청',
        description: '언도킹 명령을 요청합니다. 도킹 명령 후 언도킹 명령을 요청해야 합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '도킹 실행 요청 성공',
        type: control_dto_1.WorkResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ControlApiController.prototype, "WorkUnDock", null);
__decorate([
    (0, common_2.Get)('safetyField'),
    (0, swagger_1.ApiOperation)({
        summary: '세이프티영역 조회',
        description: '현재 설정된 세이프티 영역을 조회합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '조회 요청 성공',
        type: control_dto_1.SafetyFieldResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], ControlApiController.prototype, "GetSafetyField", null);
__decorate([
    (0, common_2.Post)('safetyField'),
    (0, swagger_1.ApiOperation)({
        summary: '세이프티영역 설정',
        description: '세이프티 영역을 설정합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '설정 요청 성공',
        type: control_dto_1.SafetyFieldResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof control_dto_1.SafetyFieldRequestDto !== "undefined" && control_dto_1.SafetyFieldRequestDto) === "function" ? _j : Object]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], ControlApiController.prototype, "SetSafetyField", null);
__decorate([
    (0, common_2.Post)('led'),
    (0, swagger_1.ApiOperation)({
        summary: 'LED 제어 요청',
        description: 'LED의 수동 제어를 요청합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'LED 제어 요청 성공',
        type: control_dto_1.LEDResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof control_dto_1.LEDRequestDto !== "undefined" && control_dto_1.LEDRequestDto) === "function" ? _l : Object]),
    __metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], ControlApiController.prototype, "Led", null);
__decorate([
    (0, common_2.Post)('safetyIo'),
    (0, swagger_1.ApiOperation)({
        summary: '세이프티 IO 제어 요청',
        description: '세이프티 IO를 제어합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '세이프티 IO 제어 요청 성공',
        type: safety_io_dto_1.SafetyIoResponseDto,
    }),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_o = typeof safety_io_dto_1.SafetyIoRequestDto !== "undefined" && safety_io_dto_1.SafetyIoRequestDto) === "function" ? _o : Object]),
    __metadata("design:returntype", typeof (_p = typeof Promise !== "undefined" && Promise) === "function" ? _p : Object)
], ControlApiController.prototype, "SafetyIo", null);
exports.ControlApiController = ControlApiController = __decorate([
    (0, swagger_1.ApiTags)('SLAMNAV 컨트롤 API'),
    (0, common_2.Controller)('control'),
    __metadata("design:paramtypes", [typeof (_a = typeof control_api_service_1.ControlApiService !== "undefined" && control_api_service_1.ControlApiService) === "function" ? _a : Object])
], ControlApiController);


/***/ }),
/* 8 */
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
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(30), exports);
__exportStar(__webpack_require__(33), exports);


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


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TcpMicroservice = exports.UpdateMicroservice = exports.LogMicroservice = exports.CobotMicroservice = exports.SoundMicroservice = exports.SettingMicroservice = exports.TaskMicroservice = exports.OnvifMicroservice = exports.MapMicroservice = exports.NetworkMicroservice = exports.LocalizationMicroservice = exports.MoveMicroservice = exports.CodeMicroservice = exports.ControlMicroservice = exports.ConfigMicroservice = exports.RedisMicroservice = exports.AmrMicroservice = exports.AuthMicroservice = exports.UserMicroservice = void 0;
exports.UserMicroservice = __webpack_require__(11);
exports.AuthMicroservice = __webpack_require__(12);
exports.AmrMicroservice = __webpack_require__(13);
exports.RedisMicroservice = __webpack_require__(14);
exports.ConfigMicroservice = __webpack_require__(15);
exports.ControlMicroservice = __webpack_require__(16);
exports.CodeMicroservice = __webpack_require__(17);
exports.MoveMicroservice = __webpack_require__(18);
exports.LocalizationMicroservice = __webpack_require__(19);
exports.NetworkMicroservice = __webpack_require__(20);
exports.MapMicroservice = __webpack_require__(21);
exports.OnvifMicroservice = __webpack_require__(22);
exports.TaskMicroservice = __webpack_require__(23);
exports.SettingMicroservice = __webpack_require__(24);
exports.SoundMicroservice = __webpack_require__(25);
exports.CobotMicroservice = __webpack_require__(26);
exports.LogMicroservice = __webpack_require__(27);
exports.UpdateMicroservice = __webpack_require__(28);
exports.TcpMicroservice = __webpack_require__(29);


/***/ }),
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AMR_GRPC_SERVICE_NAME = exports.AMR_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.AmrGrpcServiceControllerMethods = AmrGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(3);
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
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.REDIS_ROBOT_CACHE_GRPC_SERVICE_NAME = exports.REDIS_SOCKET_CACHE_GRPC_SERVICE_NAME = exports.REDIS_PACKAGE_NAME = exports.RobotType = exports.protobufPackage = void 0;
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
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
/* 27 */
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
/* 28 */
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
/* 29 */
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
/* 30 */
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
__exportStar(__webpack_require__(31), exports);


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GrpcInterceptor = void 0;
const rxjs_1 = __webpack_require__(32);
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
/* 32 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 33 */
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
__exportStar(__webpack_require__(34), exports);
__exportStar(__webpack_require__(57), exports);


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerService = void 0;
const winston_1 = __webpack_require__(35);
const DailyRotateFile = __webpack_require__(36);
const util_1 = __webpack_require__(37);
const chalk_1 = __webpack_require__(56);
const fs_1 = __webpack_require__(43);
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
/* 35 */
/***/ ((module) => {

module.exports = require("winston");

/***/ }),
/* 36 */
/***/ ((module) => {

module.exports = require("winston-daily-rotate-file");

/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationUtil = exports.CryptoUtil = exports.ParseUtil = exports.FileUtil = exports.DateUtil = exports.UrlUtil = void 0;
var url_util_1 = __webpack_require__(38);
Object.defineProperty(exports, "UrlUtil", ({ enumerable: true, get: function () { return url_util_1.UrlUtil; } }));
var date_util_1 = __webpack_require__(40);
Object.defineProperty(exports, "DateUtil", ({ enumerable: true, get: function () { return date_util_1.DateUtil; } }));
var file_util_1 = __webpack_require__(42);
Object.defineProperty(exports, "FileUtil", ({ enumerable: true, get: function () { return file_util_1.FileUtil; } }));
var parse_util_1 = __webpack_require__(53);
Object.defineProperty(exports, "ParseUtil", ({ enumerable: true, get: function () { return parse_util_1.ParseUtil; } }));
var crypto_util_1 = __webpack_require__(54);
Object.defineProperty(exports, "CryptoUtil", ({ enumerable: true, get: function () { return crypto_util_1.CryptoUtil; } }));
var validation_util_1 = __webpack_require__(55);
Object.defineProperty(exports, "ValidationUtil", ({ enumerable: true, get: function () { return validation_util_1.ValidationUtil; } }));


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UrlUtil = void 0;
const uuid_1 = __webpack_require__(39);
class UrlUtil {
    static generateUUID() {
        return (0, uuid_1.v4)();
    }
}
exports.UrlUtil = UrlUtil;


/***/ }),
/* 39 */
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DateUtil = void 0;
const date_fns_1 = __webpack_require__(41);
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
/* 41 */
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileUtil = void 0;
const fs = __webpack_require__(43);
const path = __webpack_require__(44);
const unzipper = __webpack_require__(45);
const il = __webpack_require__(46);
const uuid_1 = __webpack_require__(39);
const archiver_1 = __webpack_require__(47);
const csv = __webpack_require__(48);
const zlib_1 = __webpack_require__(49);
const common_1 = __webpack_require__(8);
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
/* 43 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 44 */
/***/ ((module) => {

module.exports = require("path");

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
/* 58 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

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
exports.SafetyFieldResponseDto = exports.SafetyFieldRequestDto = exports.WorkResponseDto = exports.WorkRequestDto = exports.OnOffResponseDto = exports.OnOffRequestDto = exports.LEDResponseDto = exports.LEDRequestDto = exports.ObsBoxResponseSlamnav = exports.ObsBoxRequestSlamnav = exports.ObsBoxResponseDto = exports.ObsBoxRequestDto = exports.ControlResponseFrs = exports.ControlResponseSlamnav = exports.ControlRequestSlamnav = exports.ControlResponseDto = exports.ControlRequestDto = void 0;
const swagger_1 = __webpack_require__(58);
const class_transformer_1 = __webpack_require__(60);
const class_validator_1 = __webpack_require__(61);
const control_type_1 = __webpack_require__(62);
const util_1 = __webpack_require__(37);
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
class ObsBoxRequestDto {
}
exports.ObsBoxRequestDto = ObsBoxRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '장애물감지영역 최소 z값 (0~5m)',
        example: '1.3',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ObsBoxRequestDto.prototype, "minZ", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '장애물감지영역 최대 z값 (0~5m)',
        example: '1.3',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ObsBoxRequestDto.prototype, "maxZ", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '장애물감지영역 맵 범위 (0~5m)',
        example: '1.3',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
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
/* 60 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 61 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 62 */
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
    ControlCommand["setObsBox"] = "setObsBox";
    ControlCommand["getObsBox"] = "getObsBox";
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
/* 63 */
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
exports.ErrorResponseDto = void 0;
const swagger_1 = __webpack_require__(58);
class ErrorResponseDto {
}
exports.ErrorResponseDto = ErrorResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'HTTP 상태 코드',
        example: 500,
    }),
    __metadata("design:type", Number)
], ErrorResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '에러 메시지',
        example: '서버에 에러가 발생했습니다.',
    }),
    __metadata("design:type", String)
], ErrorResponseDto.prototype, "message", void 0);


/***/ }),
/* 64 */
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
exports.ControlApiService = void 0;
const constant_1 = __webpack_require__(65);
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(5);
const microservices_1 = __webpack_require__(3);
const rxjs_1 = __webpack_require__(32);
const control_type_1 = __webpack_require__(62);
let ControlApiService = class ControlApiService {
    constructor(controlMicroservice, cobotMicroservice) {
        this.controlMicroservice = controlMicroservice;
        this.cobotMicroservice = cobotMicroservice;
        this.loggerService = common_1.LoggerService.get('gateway');
    }
    onModuleInit() {
        this.controlService = this.controlMicroservice.getService('ControlGrpcService');
        this.cobotService = this.cobotMicroservice.getService('CobotGrpcService');
    }
    async OnOff(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.controlService.onOffControl(dto));
    }
    async LED(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.controlService.ledControl({ ...dto, command: control_type_1.ControlCommand.ledControl }));
    }
    async Work(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.controlService.workControl(dto));
    }
    async GetSafetyField() {
        return await (0, rxjs_1.lastValueFrom)(this.controlService.getSafetyField({}));
    }
    async SetSafetyField(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.controlService.setSafetyField(dto));
    }
    async SafetyIo(dto) {
        const request = {
            command: control_type_1.ControlCommand.safetyIoControl,
            mcuDio: dto.mcuDio.map((e) => ({ channel: e })),
        };
        const response = await (0, rxjs_1.lastValueFrom)(this.controlService.safetyIoControl(request));
        return {
            command: control_type_1.ControlCommand.safetyIoControl,
            mcuDio: response.mcuDio?.map((dio) => dio.channel) ?? [],
            result: response.result,
            message: response.message,
        };
    }
};
exports.ControlApiService = ControlApiService;
exports.ControlApiService = ControlApiService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, common_2.Inject)(constant_1.CONTROL_SERVICE)),
    __param(1, (0, common_2.Inject)(constant_1.COBOT_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _b : Object])
], ControlApiService);


/***/ }),
/* 65 */
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
__exportStar(__webpack_require__(66), exports);
__exportStar(__webpack_require__(67), exports);
exports.environment = __webpack_require__(68);
exports.message = __webpack_require__(70);


/***/ }),
/* 66 */
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
/* 67 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 68 */
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
__exportStar(__webpack_require__(69), exports);


/***/ }),
/* 69 */
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
exports.SafetyIoResponseSlamnav = exports.SafetyIoRequestSlamnav = exports.SafetyIoResponseDto = exports.SafetyIoRequestDto = void 0;
const swagger_1 = __webpack_require__(58);
const control_type_1 = __webpack_require__(62);
const config_dto_1 = __webpack_require__(73);
const class_validator_1 = __webpack_require__(61);
class SafetyIoRequestDto {
}
exports.SafetyIoRequestDto = SafetyIoRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'MCU DIO 명령',
        example: control_type_1.ControlCommand.safetyIoControl,
        required: true,
    }),
    __metadata("design:type", String)
], SafetyIoRequestDto.prototype, "command", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'MCU DIO 명령 파라미터 (채널당 8bit 값)',
        example: [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        required: true,
    }),
    __metadata("design:type", Array)
], SafetyIoRequestDto.prototype, "mcuDio", void 0);
class SafetyIoResponseDto extends SafetyIoRequestDto {
}
exports.SafetyIoResponseDto = SafetyIoResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '결과 상태',
        example: config_dto_1.Result.accept,
        enum: config_dto_1.Result,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SafetyIoResponseDto.prototype, "result", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '결과 메시지. result값이 reject, fail일 경우 메시지 내용을 확인하세요.',
        example: '파라미터의 값이 범위를 벗어났습니다.',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SafetyIoResponseDto.prototype, "message", void 0);
class SafetyIoRequestSlamnav extends SafetyIoRequestDto {
}
exports.SafetyIoRequestSlamnav = SafetyIoRequestSlamnav;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '명령 ID',
        example: '550e8400-e29b-41d4-a716-446655440000',
        required: true,
    }),
    __metadata("design:type", String)
], SafetyIoRequestSlamnav.prototype, "id", void 0);
class SafetyIoResponseSlamnav extends SafetyIoResponseDto {
}
exports.SafetyIoResponseSlamnav = SafetyIoResponseSlamnav;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '명령 ID',
        example: '550e8400-e29b-41d4-a716-446655440000',
        required: true,
    }),
    __metadata("design:type", String)
], SafetyIoResponseSlamnav.prototype, "id", void 0);


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
exports.ConfigResponseDto = exports.ConfigRequestDto = exports.ConfigParameterDto = exports.Result = void 0;
const swagger_1 = __webpack_require__(58);
const class_transformer_1 = __webpack_require__(60);
const class_validator_1 = __webpack_require__(61);
var ConfigCommand;
(function (ConfigCommand) {
    ConfigCommand["getDriveParam"] = "getDriveParam";
    ConfigCommand["getParam"] = "getParam";
    ConfigCommand["setParam"] = "setParam";
})(ConfigCommand || (ConfigCommand = {}));
var ConfigParameterType;
(function (ConfigParameterType) {
    ConfigParameterType["float"] = "float";
    ConfigParameterType["string"] = "string";
    ConfigParameterType["boolean"] = "boolean";
    ConfigParameterType["int"] = "int";
})(ConfigParameterType || (ConfigParameterType = {}));
var Result;
(function (Result) {
    Result["accept"] = "accept";
    Result["reject"] = "reject";
    Result["fail"] = "fail";
    Result["success"] = "success";
})(Result || (exports.Result = Result = {}));
class ConfigParameterDto {
}
exports.ConfigParameterDto = ConfigParameterDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '파라미터 이름',
        example: 'param1',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ConfigParameterDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '파라미터 타입',
        example: ConfigParameterType.float,
        required: true,
        enum: ConfigParameterType,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ConfigParameterDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '파라미터 값. string으로 변환하여 입력하세요.',
        example: '15.0',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ConfigParameterDto.prototype, "value", void 0);
class ConfigRequestDto {
}
exports.ConfigRequestDto = ConfigRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '명령을 보낼 협동로봇이 연결된 TCP 포트번호',
        example: ConfigCommand.setParam,
        enum: ConfigCommand,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ConfigRequestDto.prototype, "command", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '파라미터 목록',
        example: [
            {
                name: 'v_limit_jog',
                value: '0.1',
                type: ConfigParameterType.float,
            },
        ],
        required: false,
    }),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ConfigParameterDto),
    __metadata("design:type", Array)
], ConfigRequestDto.prototype, "parameters", void 0);
class ConfigResponseDto extends ConfigRequestDto {
}
exports.ConfigResponseDto = ConfigResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '결과 상태',
        example: Result.accept,
        enum: Result,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigResponseDto.prototype, "result", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '결과 메시지. result값이 reject, fail일 경우 메시지 내용을 확인하세요.',
        example: '파라미터의 값이 범위를 벗어났습니다.',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfigResponseDto.prototype, "message", void 0);


/***/ }),
/* 74 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

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
exports.LocalizationApiModule = void 0;
const common_1 = __webpack_require__(5);
const config_1 = __webpack_require__(74);
const microservices_1 = __webpack_require__(3);
const common_2 = __webpack_require__(8);
const path_1 = __webpack_require__(44);
const localization_api_controller_1 = __webpack_require__(76);
const localization_api_service_1 = __webpack_require__(77);
const constant_1 = __webpack_require__(65);
let LocalizationApiModule = class LocalizationApiModule {
};
exports.LocalizationApiModule = LocalizationApiModule;
exports.LocalizationApiModule = LocalizationApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            microservices_1.ClientsModule.registerAsync([
                {
                    name: constant_1.LOCALIZATION_SERVICE,
                    inject: [config_1.ConfigService],
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.GRPC,
                        options: {
                            package: common_2.LocalizationMicroservice.protobufPackage,
                            protoPath: (0, path_1.join)(process.cwd(), 'proto/localization.proto'),
                            url: configService.get('LOCALIZATION_GRPC_URL'),
                        },
                    }),
                },
            ]),
        ],
        controllers: [localization_api_controller_1.LocalizationApiController],
        providers: [localization_api_service_1.LocalizationApiService],
    })
], LocalizationApiModule);


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
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalizationApiController = void 0;
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(58);
const localization_api_service_1 = __webpack_require__(77);
const common_2 = __webpack_require__(8);
const localization_dto_1 = __webpack_require__(78);
const localization_dto_2 = __webpack_require__(78);
const error_response_dto_1 = __webpack_require__(63);
const localization_type_1 = __webpack_require__(79);
let LocalizationApiController = class LocalizationApiController {
    constructor(localizationService) {
        this.localizationService = localizationService;
        this.loggerService = common_2.LoggerService.get('gateway');
    }
    async Init(initDto) {
        this.loggerService.debug(`[Localization] Init : ${JSON.stringify(initDto)}`);
        return this.localizationService.sendInit(initDto);
    }
    async RandomInit() {
        this.loggerService.debug(`[Localization] RandomInit`);
        return this.localizationService.sendInit({
            command: localization_type_1.LocalizationCommand.randomInit,
        });
    }
    async AutoInit() {
        this.loggerService.debug(`[Localization] AutoInit`);
        return this.localizationService.sendInit({
            command: localization_type_1.LocalizationCommand.autoInit,
        });
    }
    async SemiAutoInit() {
        this.loggerService.debug(`[Localization] SemiAutoInit`);
        return this.localizationService.sendInit({
            command: localization_type_1.LocalizationCommand.semiAutoInit,
        });
    }
    async LocStart() {
        this.loggerService.debug(`[Localization] LocStart`);
        return this.localizationService.sendInit({
            command: localization_type_1.LocalizationCommand.start,
        });
    }
    async LocStop() {
        this.loggerService.debug(`[Localization] LocStop`);
        return this.localizationService.sendInit({
            command: localization_type_1.LocalizationCommand.stop,
        });
    }
};
exports.LocalizationApiController = LocalizationApiController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: '위치초기화 명령',
        description: `위치초기화 명령을 전달합니다.
        command는 init,semiautoinit,randominit,autoinit,start,stop을 지원합니다.
        init은 지도 상의 특정위치(x,y,z,rz) 값을 입력으로 받습니다.
        semiautoinit은 init속성이 있는 node를 후보군으로 위치를 추정합니다.
        randominit은 시뮬레이션모드에서 사용되며 랜덤한 node로 위치를 추정합니다.
        autoinit은 지도상의 모든 위치를 후보군으로 위치를 추정하며 시간이 오래 걸릴 수 있습니다.
        start와 stop으로 slam을 실행하고 끕니다. init후에 반드시 start를 실행시켜주어야 slam이 동작합니다.
        `,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '위치초기화 명령 성공',
        type: localization_dto_2.LocalizationResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof localization_dto_1.LocalizationRequestDto !== "undefined" && localization_dto_1.LocalizationRequestDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], LocalizationApiController.prototype, "Init", null);
__decorate([
    (0, common_1.Post)('randominit'),
    (0, swagger_1.ApiOperation)({
        summary: '랜덤위치초기화 명령',
        description: `랜덤위치초기화 명령을 전달합니다. 지도상의 노드 중 랜덤한 위치로 초기화됩니다.`,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '랜덤위치초기화 명령 성공',
        type: localization_dto_2.LocalizationResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], LocalizationApiController.prototype, "RandomInit", null);
__decorate([
    (0, common_1.Post)('autoinit'),
    (0, swagger_1.ApiOperation)({
        summary: '자동 위치초기화 명령',
        description: `자동 위치초기화 명령을 전달합니다. 지도상의 모든 위치를 후보군으로 위치초기화를 진행합니다. 다소 시간이 걸리거나 실패할 수 있습니다.`,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '자동 위치초기화 명령 성공',
        type: localization_dto_2.LocalizationResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], LocalizationApiController.prototype, "AutoInit", null);
__decorate([
    (0, common_1.Post)('semiautoinit'),
    (0, swagger_1.ApiOperation)({
        summary: '자동 위치초기화(INIT노드기반) 명령',
        description: `자동 위치초기화 명령을 전달합니다. INIT노드로 지정된 노드들을 후보군으로 위치초기화를 진행합니다. autoinit보다 빠르며 로봇이 해당 노드의 위에 위치해야합니다.`,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '자동 위치초기화(INIT노드기반) 명령 성공',
        type: localization_dto_2.LocalizationResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], LocalizationApiController.prototype, "SemiAutoInit", null);
__decorate([
    (0, common_1.Post)('start'),
    (0, swagger_1.ApiOperation)({
        summary: '위치추정 시작 명령',
        description: `위치추정 시작 명령을 전달합니다. 로봇이 초기화된 위치로부터 위치추정을 시작합니다. 위치추정이 실행되지 않으면 주행할 수 없습니다.`,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '위치추정 시작 명령 성공',
        type: localization_dto_2.LocalizationResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], LocalizationApiController.prototype, "LocStart", null);
__decorate([
    (0, common_1.Post)('stop'),
    (0, swagger_1.ApiOperation)({
        summary: '위치추정 종료 명령',
        description: `위치추정 종료 명령을 전달합니다. `,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '위치추정 종료 명령 성공',
        type: localization_dto_2.LocalizationResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], LocalizationApiController.prototype, "LocStop", null);
exports.LocalizationApiController = LocalizationApiController = __decorate([
    (0, swagger_1.ApiTags)('위치초기화 API'),
    (0, common_1.Controller)('localization'),
    __metadata("design:paramtypes", [typeof (_a = typeof localization_api_service_1.LocalizationApiService !== "undefined" && localization_api_service_1.LocalizationApiService) === "function" ? _a : Object])
], LocalizationApiController);


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalizationApiService = void 0;
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(5);
const microservices_1 = __webpack_require__(3);
const rxjs_1 = __webpack_require__(32);
const constant_1 = __webpack_require__(65);
let LocalizationApiService = class LocalizationApiService {
    constructor(localizationMicroservice) {
        this.localizationMicroservice = localizationMicroservice;
        this.loggerService = common_1.LoggerService.get('gateway');
    }
    onModuleInit() {
        this.localizationService =
            this.localizationMicroservice.getService('LocalizationGrpcService');
    }
    async sendInit(initDto) {
        return await (0, rxjs_1.lastValueFrom)(this.localizationService.init(initDto));
    }
};
exports.LocalizationApiService = LocalizationApiService;
exports.LocalizationApiService = LocalizationApiService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, common_2.Inject)(constant_1.LOCALIZATION_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object])
], LocalizationApiService);


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalizationResponseFrs = exports.LocalizationResponseSlamnav = exports.LocalizationResponseDto = exports.LocalizationRequestSlamnav = exports.LocalizationRequestDto = void 0;
const class_validator_1 = __webpack_require__(61);
const class_transformer_1 = __webpack_require__(60);
const swagger_1 = __webpack_require__(58);
const localization_type_1 = __webpack_require__(79);
const util_1 = __webpack_require__(37);
const description_1 = __webpack_require__(80);
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
/* 79 */
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
/* 80 */
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
/* 81 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NetworkApiModule = void 0;
const common_1 = __webpack_require__(5);
const network_api_service_1 = __webpack_require__(82);
const network_api_controller_1 = __webpack_require__(83);
const microservices_1 = __webpack_require__(3);
const common_2 = __webpack_require__(8);
const config_1 = __webpack_require__(74);
const path_1 = __webpack_require__(44);
const constant_1 = __webpack_require__(65);
let NetworkApiModule = class NetworkApiModule {
};
exports.NetworkApiModule = NetworkApiModule;
exports.NetworkApiModule = NetworkApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            microservices_1.ClientsModule.registerAsync([
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
            ]),
        ],
        controllers: [network_api_controller_1.NetworkApiController],
        providers: [network_api_service_1.NetworkApiService],
    })
], NetworkApiModule);


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NetworkApiService = void 0;
const constant_1 = __webpack_require__(65);
const logger_1 = __webpack_require__(33);
const common_1 = __webpack_require__(5);
const microservices_1 = __webpack_require__(3);
const rxjs_1 = __webpack_require__(32);
let NetworkApiService = class NetworkApiService {
    constructor(networkMicroservice) {
        this.networkMicroservice = networkMicroservice;
        this.loggerService = logger_1.LoggerService.get('gateway');
    }
    onModuleInit() {
        this.networkService = this.networkMicroservice.getService('NetworkGrpcService');
    }
    async getNetwork() {
        return await (0, rxjs_1.lastValueFrom)(this.networkService.getNetwork({}));
    }
    async getEthernet() {
        return await (0, rxjs_1.lastValueFrom)(this.networkService.getEthernet({}));
    }
    async getWifi() {
        return await (0, rxjs_1.lastValueFrom)(this.networkService.getWifi({}));
    }
    async getBluetooth() {
        return await (0, rxjs_1.lastValueFrom)(this.networkService.getBluetooth({}));
    }
    async getDevice(data) {
        return await (0, rxjs_1.lastValueFrom)(this.networkService.getDevice(data));
    }
    async getWifiList() {
        return await (0, rxjs_1.lastValueFrom)(this.networkService.getWifiList({}));
    }
    async scanWifi() {
        return await (0, rxjs_1.lastValueFrom)(this.networkService.scanWifi({}));
    }
    async setNetwork(data) {
        return await (0, rxjs_1.lastValueFrom)(this.networkService.setNetwork({
            ...data,
            dns: data.dns ?? [],
        }));
    }
    async connectWifi(data) {
        return await (0, rxjs_1.lastValueFrom)(this.networkService.connectWifi(data));
    }
};
exports.NetworkApiService = NetworkApiService;
exports.NetworkApiService = NetworkApiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constant_1.NETWORK_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object])
], NetworkApiService);


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NetworkApiController = void 0;
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(5);
const swagger_1 = __webpack_require__(58);
const network_api_service_1 = __webpack_require__(82);
const network_dto_1 = __webpack_require__(84);
const error_response_dto_1 = __webpack_require__(63);
let NetworkApiController = class NetworkApiController {
    constructor(networkService) {
        this.networkService = networkService;
        this.loggerService = common_1.LoggerService.get('gateway');
        console.log(':-->', process.env.NETWORK_SERVICE_URL);
    }
    async getNetwork() {
        this.loggerService.debug(`[Network] getNetwork`);
        return this.networkService.getNetwork();
    }
    async getEthernetNetwork() {
        this.loggerService.debug(`[Network] getEthernetNetwork`);
        return await this.networkService.getEthernet();
    }
    async getWifiNetwork() {
        this.loggerService.debug(`[Network] getWifiNetwork`);
        return await this.networkService.getWifi();
    }
    async getBluetoothNetwork() {
        this.loggerService.debug(`[Network] getBluetoothNetwork`);
        return await this.networkService.getBluetooth();
    }
    async getDeviceNetwork(device) {
        this.loggerService.debug(`[Network] getDeviceNetwork : ${device}`);
        return await this.networkService.getDevice({ device: device });
    }
    async getWifiList() {
        this.loggerService.debug(`[Network] getWifiList`);
        return await this.networkService.getWifiList();
    }
    async getWifiScanList() {
        this.loggerService.debug(`[Network] getWifiList`);
        return await this.networkService.scanWifi();
    }
    async updateNetwork(networkDto) {
        this.loggerService.debug(`[Network] updateNetwork : ${networkDto.device} -> ${networkDto.dhcp}`);
        return await this.networkService.setNetwork(networkDto);
    }
    async connectWifi(dto) {
        this.loggerService.debug(`[Network] connectWifi : ${dto.ssid} -> ${dto.password}`);
        return await this.networkService.connectWifi(dto);
    }
};
exports.NetworkApiController = NetworkApiController;
__decorate([
    (0, common_2.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: '현재 연결된 네트워크 정보 요청',
        description: '연결된 네트워크 (Ethernet, Wifi) 정보를 요청합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '네트워크 정보 조회 성공',
        type: network_dto_1.NetworkResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NetworkApiController.prototype, "getNetwork", null);
__decorate([
    (0, common_2.Get)('ethernet'),
    (0, swagger_1.ApiOperation)({
        summary: '현재 연결된 이더넷 네트워크 정보 요청',
        description: '연결된 이더넷 네트워크 정보를 요청합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '이더넷 네트워크 정보 조회 성공',
        type: network_dto_1.NetworkResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NetworkApiController.prototype, "getEthernetNetwork", null);
__decorate([
    (0, common_2.Get)('wifi'),
    (0, swagger_1.ApiOperation)({
        summary: '현재 연결된 와이파이 네트워크 정보 요청',
        description: '연결된 와이파이 네트워크 정보를 요청합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '와이파이 네트워크 정보 조회 성공',
        type: network_dto_1.NetworkResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NetworkApiController.prototype, "getWifiNetwork", null);
__decorate([
    (0, common_2.Get)('bluetooth'),
    (0, swagger_1.ApiOperation)({
        summary: '현재 연결된 블루투스 네트워크 정보 요청',
        description: '연결된 블루투스 네트워크 정보를 요청합니다.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NetworkApiController.prototype, "getBluetoothNetwork", null);
__decorate([
    (0, common_2.Get)(':device'),
    (0, swagger_1.ApiOperation)({
        summary: '특정 네트워크 디바이스 정보 요청',
        description: '특정 네트워크 디바이스 정보를 요청합니다.',
    }),
    __param(0, (0, common_2.Param)('device')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NetworkApiController.prototype, "getDeviceNetwork", null);
__decorate([
    (0, common_2.Get)('wifi/list'),
    (0, swagger_1.ApiOperation)({
        summary: '주변 와이파이 목록 요청',
        description: '주변의 와이파이 리스트를 요청합니다.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NetworkApiController.prototype, "getWifiList", null);
__decorate([
    (0, common_2.Get)('wifi/scan'),
    (0, swagger_1.ApiOperation)({
        summary: '주변 와이파이 목록 요청(재스캔)',
        description: '주변의 와이파이 리스트를 요청합니다. 스캔을 다시하므로 시간이 조금더 소요됩니다.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NetworkApiController.prototype, "getWifiScanList", null);
__decorate([
    (0, common_2.Put)(),
    (0, swagger_1.ApiOperation)({
        summary: '연결된 네트워크 정보 수정',
        description: '연결된 네트워크 정보를 업데이트합니다.',
    }),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof network_dto_1.SetNetworkRequestDto !== "undefined" && network_dto_1.SetNetworkRequestDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], NetworkApiController.prototype, "updateNetwork", null);
__decorate([
    (0, common_2.Post)('wifi/connect'),
    (0, swagger_1.ApiOperation)({
        summary: '와이파이 연결 요청',
        description: '와이파이 연결을 요청합니다.',
    }),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof network_dto_1.ConnectWifiDto !== "undefined" && network_dto_1.ConnectWifiDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], NetworkApiController.prototype, "connectWifi", null);
exports.NetworkApiController = NetworkApiController = __decorate([
    (0, swagger_1.ApiTags)('네트워크 API'),
    (0, common_2.Controller)('network'),
    __metadata("design:paramtypes", [typeof (_a = typeof network_api_service_1.NetworkApiService !== "undefined" && network_api_service_1.NetworkApiService) === "function" ? _a : Object])
], NetworkApiController);


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConnectWifiDto = exports.NetworkResponseDto = exports.SetNetworkResponseDto = exports.SetNetworkRequestDto = void 0;
const swagger_1 = __webpack_require__(58);
const class_validator_1 = __webpack_require__(61);
const class_transformer_1 = __webpack_require__(60);
var Description;
(function (Description) {
    Description["DEVICE"] = "\uBCC0\uACBD\uD560 \uB124\uD2B8\uC6CC\uD06C \uB514\uBC14\uC774\uC2A4\uB97C \uC785\uB825\uD558\uC138\uC694.";
    Description["NAME"] = "\uBCC0\uACBD\uD560 \uB124\uD2B8\uC6CC\uD06C\uC758 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694.";
    Description["DHCP"] = "\uB124\uD2B8\uC6CC\uD06C\uC758 DHCP(\uB3D9\uC801\uD560\uB2F9) \uC0AC\uC6A9\uC5EC\uBD80\uB97C \uC785\uB825\uD558\uC138\uC694. true\uC778 \uACBD\uC6B0 \uC785\uB825\uB41C address \uAC12\uC744 \uBB34\uC2DC\uD558\uACE0 DHCP\uB97C \uCF1C IP\uB97C \uC790\uB3D9\uC73C\uB85C \uD560\uB2F9\uBC1B\uC2B5\uB2C8\uB2E4. false\uC778 \uACBD\uC6B0 address,gateway,mask,dns\uB97C \uC785\uB825\uD558\uC138\uC694.";
    Description["ADDRESS"] = "\uBCC0\uACBD\uD560 IP ADDRESS \uB97C \uC785\uB825\uD558\uC138\uC694. IPv4\uBC84\uC804\uB9CC \uC801\uC6A9\uB429\uB2C8\uB2E4.";
    Description["GATEWAY"] = "\uBCC0\uACBD\uD560 GATEWAY\uB97C \uC785\uB825\uD558\uC138\uC694.";
    Description["MASK"] = "\uBCC0\uACBD\uD560 \uC11C\uBE0C\uB137\uB9C8\uC2A4\uD06C\uB97C \uC785\uB825\uD558\uC138\uC694.";
    Description["DNS"] = "\uBCC0\uACBD\uD560 DNS\uB97C \uC785\uB825\uD558\uC138\uC694. DNS\uB294 \uBC30\uC5F4\uB85C \uC5EC\uB7EC\uAC1C \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.";
})(Description || (Description = {}));
class SetNetworkRequestDto {
}
exports.SetNetworkRequestDto = SetNetworkRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.DEVICE,
        example: 'wlp3s0',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SetNetworkRequestDto.prototype, "device", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.NAME,
        example: 'mobile_team',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SetNetworkRequestDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.DHCP,
        example: false,
        required: true,
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], SetNetworkRequestDto.prototype, "dhcp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ADDRESS,
        example: '10.108.1.120',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SetNetworkRequestDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.GATEWAY,
        example: '10.108.1.1',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SetNetworkRequestDto.prototype, "gateway", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.MASK, example: '24' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SetNetworkRequestDto.prototype, "mask", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.DNS,
        example: ['10.108.1.1'],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], SetNetworkRequestDto.prototype, "dns", void 0);
class SetNetworkResponseDto extends SetNetworkRequestDto {
}
exports.SetNetworkResponseDto = SetNetworkResponseDto;
class NetworkResponseDto {
}
exports.NetworkResponseDto = NetworkResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '네트워크 정보', example: 'wifi', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], NetworkResponseDto.prototype, "networkType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '연결 상태', example: true, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Boolean)
], NetworkResponseDto.prototype, "connected", void 0);
class ConnectWifiDto {
}
exports.ConnectWifiDto = ConnectWifiDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '연결할 WIFI의 SSID',
        example: 'mobile_team_5G',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ConnectWifiDto.prototype, "ssid", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: '연결할 WIFI의 비밀번호(필요시)',
        example: 'testPassword',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ConnectWifiDto.prototype, "password", void 0);


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
exports.ConfigApiModule = void 0;
const common_1 = __webpack_require__(5);
const config_api_controller_1 = __webpack_require__(86);
const microservices_1 = __webpack_require__(3);
const common_2 = __webpack_require__(8);
const config_1 = __webpack_require__(74);
const path_1 = __webpack_require__(44);
const config_api_service_1 = __webpack_require__(87);
const constant_1 = __webpack_require__(65);
let ConfigApiModule = class ConfigApiModule {
};
exports.ConfigApiModule = ConfigApiModule;
exports.ConfigApiModule = ConfigApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            microservices_1.ClientsModule.registerAsync([
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
                {
                    name: constant_1.CODE_SERVICE,
                    inject: [config_1.ConfigService],
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.GRPC,
                        options: {
                            package: common_2.CodeMicroservice.protobufPackage,
                            protoPath: (0, path_1.join)(process.cwd(), 'proto/code.proto'),
                            url: configService.get('CODE_GRPC_URL'),
                        },
                    }),
                },
            ]),
        ],
        controllers: [config_api_controller_1.ConfigApiController],
        providers: [config_api_service_1.ConfigApiService],
    })
], ConfigApiModule);


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigApiController = void 0;
const common_1 = __webpack_require__(5);
const common_2 = __webpack_require__(8);
const swagger_1 = __webpack_require__(58);
const config_api_service_1 = __webpack_require__(87);
const set_dto_1 = __webpack_require__(88);
const error_response_dto_1 = __webpack_require__(63);
const get_dto_1 = __webpack_require__(89);
const delete_dto_1 = __webpack_require__(90);
let ConfigApiController = class ConfigApiController {
    constructor(configService) {
        this.configService = configService;
        this.loggerService = common_2.LoggerService.get('gateway');
    }
    async getConfigAll() {
        return this.configService.getConfigAll();
    }
    async getConfig(dto) {
        return this.configService.getConfig(dto);
    }
    async setConfigs(dto) {
        console.log('dtos', dto.configs);
        return this.configService.setConfigs(dto);
    }
    async setConfig(dto) {
        this.loggerService.info(`[API] setConfig : ${dto.key} -> ${dto.value}`);
        return this.configService.setConfig(dto);
    }
    async deleteConfig(dto) {
        return await this.configService.deleteConfig(dto);
    }
    async deleteConfigs(dto) {
        return await this.configService.deleteConfigs(dto);
    }
};
exports.ConfigApiController = ConfigApiController;
__decorate([
    (0, common_1.Get)('all'),
    (0, swagger_1.ApiOperation)({
        summary: '저장된 Config 전체 데이터 요청',
        description: 'Config 전체 데이터를 요청합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Config 전체 데이터 조회 성공',
        type: [get_dto_1.GetConfigsResponseDto],
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ConfigApiController.prototype, "getConfigAll", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: '저장된 Config 키값 검색',
        description: 'Config 데이터에서 Key값으로 일치하는 데이터를 반환합니다. 해당 Key값을 찾을 수 없으면 value가 undefined로 반환됩니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Config 키값 검색 성공',
        type: get_dto_1.GetConfigResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof get_dto_1.GetConfigRequestDto !== "undefined" && get_dto_1.GetConfigRequestDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ConfigApiController.prototype, "getConfig", null);
__decorate([
    (0, common_1.Post)('list'),
    (0, swagger_1.ApiOperation)({
        summary: 'Config DB 업데이트(여러개)',
        description: 'Config DB에 key-value 쌍을 여러개 한꺼번에 입력합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Config DB 업데이트(여러개) 성공',
        type: set_dto_1.SetConfigsRequestDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof set_dto_1.SetConfigsRequestDto !== "undefined" && set_dto_1.SetConfigsRequestDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ConfigApiController.prototype, "setConfigs", null);
__decorate([
    (0, common_1.Post)(''),
    (0, swagger_1.ApiOperation)({
        summary: 'Config DB 업데이트',
        description: 'Config DB에 key-value 쌍을 입력합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Config DB 업데이트 성공',
        type: set_dto_1.SetConfigResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof set_dto_1.SetConfigRequestDto !== "undefined" && set_dto_1.SetConfigRequestDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ConfigApiController.prototype, "setConfig", null);
__decorate([
    (0, common_1.Delete)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Config DB Key 삭제',
        description: 'Config DB에 key값이 일치하는 데이터를 삭제합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Config DB Key 삭제 성공',
        type: delete_dto_1.DeleteConfigResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof delete_dto_1.DeleteConfigRequestDto !== "undefined" && delete_dto_1.DeleteConfigRequestDto) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], ConfigApiController.prototype, "deleteConfig", null);
__decorate([
    (0, common_1.Delete)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Config DB Key 삭제(여러개)',
        description: 'Config DB에 key값이 일치하는 데이터를 삭제합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Config DB Key 삭제(여러개) 성공',
        type: delete_dto_1.DeleteConfigsResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof delete_dto_1.DeleteConfigsRequestDto !== "undefined" && delete_dto_1.DeleteConfigsRequestDto) === "function" ? _j : Object]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], ConfigApiController.prototype, "deleteConfigs", null);
exports.ConfigApiController = ConfigApiController = __decorate([
    (0, swagger_1.ApiTags)('변수 설정 API'),
    (0, common_1.Controller)('config'),
    __metadata("design:paramtypes", [typeof (_a = typeof config_api_service_1.ConfigApiService !== "undefined" && config_api_service_1.ConfigApiService) === "function" ? _a : Object])
], ConfigApiController);


/***/ }),
/* 87 */
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
exports.ConfigApiService = void 0;
const common_1 = __webpack_require__(5);
const microservices_1 = __webpack_require__(3);
const rxjs_1 = __webpack_require__(32);
const constant_1 = __webpack_require__(65);
let ConfigApiService = class ConfigApiService {
    constructor(configMicroservice, codeMicroservice) {
        this.configMicroservice = configMicroservice;
        this.codeMicroservice = codeMicroservice;
    }
    async onModuleInit() {
        this.configService = this.configMicroservice.getService('ConfigGrpcService');
        this.codeService = this.codeMicroservice.getService('CodeGrpcService');
    }
    async getConfig(request) {
        return await (0, rxjs_1.lastValueFrom)(this.configService.getConfig(request));
    }
    async getConfigAll() {
        return await (0, rxjs_1.lastValueFrom)(this.configService.getConfigAll({}));
    }
    async setConfigs(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.configService.setConfigs(dto));
    }
    async setConfig(request) {
        return await (0, rxjs_1.lastValueFrom)(this.configService.setConfig(request));
    }
    async deleteConfig(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.configService.deleteConfig(dto));
    }
    async deleteConfigs(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.configService.deleteConfigs(dto));
    }
    async getCode(data) {
        return (0, rxjs_1.lastValueFrom)(this.codeService.readCode(data));
    }
    async getCodeList(data) {
        return (0, rxjs_1.lastValueFrom)(this.codeService.readCodeList(data));
    }
    async addCode(data) {
        return (0, rxjs_1.lastValueFrom)(this.codeService.createCode(data));
    }
    async modifyCode(data) {
        return (0, rxjs_1.lastValueFrom)(this.codeService.updateCode(data));
    }
    async removeCode(data) {
        return (0, rxjs_1.lastValueFrom)(this.codeService.deleteCode(data));
    }
};
exports.ConfigApiService = ConfigApiService;
exports.ConfigApiService = ConfigApiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constant_1.CONFIG_SERVICE)),
    __param(1, (0, common_1.Inject)(constant_1.CODE_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _b : Object])
], ConfigApiService);


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
exports.SetConfigsResponseDto = exports.SetConfigResponseDto = exports.SetConfigsRequestDto = exports.SetConfigRequestDto = void 0;
const swagger_1 = __webpack_require__(58);
const class_validator_1 = __webpack_require__(61);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetConfigsResponseDto = exports.GetConfigResponseDto = exports.GetConfigRequestDto = void 0;
const swagger_1 = __webpack_require__(58);
const class_validator_1 = __webpack_require__(61);
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteConfigsResponseDto = exports.DeleteConfigResponseDto = exports.DeleteConfigsRequestDto = exports.DeleteConfigRequestDto = void 0;
const swagger_1 = __webpack_require__(58);
const class_validator_1 = __webpack_require__(61);
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
/* 91 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingApiModule = void 0;
const common_1 = __webpack_require__(5);
const config_1 = __webpack_require__(74);
const microservices_1 = __webpack_require__(3);
const common_2 = __webpack_require__(8);
const setting_api_controller_1 = __webpack_require__(92);
const setting_api_service_1 = __webpack_require__(93);
const path_1 = __webpack_require__(44);
const constant_1 = __webpack_require__(65);
let SettingApiModule = class SettingApiModule {
};
exports.SettingApiModule = SettingApiModule;
exports.SettingApiModule = SettingApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            microservices_1.ClientsModule.registerAsync([
                {
                    name: constant_1.SETTING_SERVICE,
                    inject: [config_1.ConfigService],
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.GRPC,
                        options: {
                            package: common_2.SettingMicroservice.protobufPackage,
                            protoPath: (0, path_1.join)(process.cwd(), 'proto/setting.proto'),
                            url: configService.get('SETTING_GRPC_URL'),
                        },
                    }),
                },
            ]),
        ],
        controllers: [setting_api_controller_1.SettingApiController],
        providers: [setting_api_service_1.SettingApiService],
    })
], SettingApiModule);


/***/ }),
/* 92 */
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingApiController = void 0;
const common_1 = __webpack_require__(5);
const setting_api_service_1 = __webpack_require__(93);
const swagger_1 = __webpack_require__(58);
const error_response_dto_1 = __webpack_require__(63);
const setting_dto_1 = __webpack_require__(94);
let SettingApiController = class SettingApiController {
    constructor() { }
    async getType() {
        return this.settingService.getType();
    }
    async getSetting(dto) {
        return this.settingService.getSetting(dto);
    }
    async saveSetting(dto) {
        return this.settingService.saveSetting(dto);
    }
    async saveSettingAll(dto) {
        return this.settingService.saveSettingAll(dto);
    }
    async getPresetList(dto) {
        return this.settingService.getPresetList(dto);
    }
    async getPreset(dto) {
        return this.settingService.getPreset(dto);
    }
    async savePreset(dto) {
        return this.settingService.savePreset(dto);
    }
    async deletePreset(dto) {
        return this.settingService.deletePreset(dto);
    }
    async createPreset(dto) {
        return this.settingService.createPreset(dto);
    }
};
exports.SettingApiController = SettingApiController;
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", typeof (_a = typeof setting_api_service_1.SettingApiService !== "undefined" && setting_api_service_1.SettingApiService) === "function" ? _a : Object)
], SettingApiController.prototype, "settingService", void 0);
__decorate([
    (0, common_1.Get)('type'),
    (0, swagger_1.ApiOperation)({
        summary: '로봇 타입 요청',
        description: '로봇 타입을 요청합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '로봇 타입 요청 성공',
        type: setting_dto_1.SettingGetTypeResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SettingApiController.prototype, "getType", null);
__decorate([
    (0, common_1.Get)('config'),
    (0, swagger_1.ApiOperation)({
        summary: '세팅 파일 요청',
        description: '타입에 해당하는 세팅 파일을 요청합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '세팅 파일 요청 성공',
        type: setting_dto_1.SettingGetSettingResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof setting_dto_1.SettingGetSettingRequestDto !== "undefined" && setting_dto_1.SettingGetSettingRequestDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], SettingApiController.prototype, "getSetting", null);
__decorate([
    (0, common_1.Post)('config'),
    (0, swagger_1.ApiOperation)({
        summary: '세팅 파일 저장',
        description: '타입에 해당하는 세팅 파일을 저장합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '세팅 파일 저장 성공',
        type: setting_dto_1.SettingSaveSettingResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof setting_dto_1.SettingSaveSettingRequestDto !== "undefined" && setting_dto_1.SettingSaveSettingRequestDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], SettingApiController.prototype, "saveSetting", null);
__decorate([
    (0, common_1.Post)('config/all'),
    (0, swagger_1.ApiOperation)({
        summary: '세팅 파일 전체 저장',
        description: '타입에 해당하는 세팅 파일을 전체 저장합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '세팅 파일 전체 저장 성공',
        type: setting_dto_1.SettingSaveSettingAllResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof setting_dto_1.SettingSaveSettingAllRequestDto !== "undefined" && setting_dto_1.SettingSaveSettingAllRequestDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], SettingApiController.prototype, "saveSettingAll", null);
__decorate([
    (0, common_1.Get)('preset/list'),
    (0, swagger_1.ApiOperation)({
        summary: '세팅 프리셋 리스트 요청',
        description: '타입에 해당하는 세팅 프리셋 리스트를 요청합니다. 반환되는 프리셋 파일의 형식은 반드시 preset_{number}.json 형식입니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '세팅 프리셋 리스트 요청 성공',
        type: setting_dto_1.SettingGetPresetListResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof setting_dto_1.SettingGetPresetListRequestDto !== "undefined" && setting_dto_1.SettingGetPresetListRequestDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], SettingApiController.prototype, "getPresetList", null);
__decorate([
    (0, common_1.Get)('preset'),
    (0, swagger_1.ApiOperation)({
        summary: '세팅 프리셋 요청',
        description: '타입에 해당하는 세팅 프리셋을 요청합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '세팅 프리셋 요청 성공',
        type: setting_dto_1.SettingGetPresetResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof setting_dto_1.SettingGetPresetRequestDto !== "undefined" && setting_dto_1.SettingGetPresetRequestDto) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], SettingApiController.prototype, "getPreset", null);
__decorate([
    (0, common_1.Post)('preset'),
    (0, swagger_1.ApiOperation)({
        summary: '세팅 프리셋 저장',
        description: '타입에 해당하는 세팅 프리셋을 저장합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '세팅 프리셋 저장 성공',
        type: setting_dto_1.SettingSavePresetResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof setting_dto_1.SettingSavePresetRequestDto !== "undefined" && setting_dto_1.SettingSavePresetRequestDto) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], SettingApiController.prototype, "savePreset", null);
__decorate([
    (0, common_1.Delete)('preset'),
    (0, swagger_1.ApiOperation)({
        summary: '세팅 프리셋 삭제',
        description: '타입에 해당하는 세팅 프리셋을 삭제합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '세팅 프리셋 삭제 성공',
        type: setting_dto_1.SettingDeletePresetResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof setting_dto_1.SettingDeletePresetRequestDto !== "undefined" && setting_dto_1.SettingDeletePresetRequestDto) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], SettingApiController.prototype, "deletePreset", null);
__decorate([
    (0, common_1.Post)('preset/new'),
    (0, swagger_1.ApiOperation)({
        summary: '세팅 프리셋 파일 생성',
        description: '타입에 해당하는 세팅 프리셋을 생성합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '세팅 프리셋 파일 생성 성공',
        type: setting_dto_1.SettingCreatePresetResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof setting_dto_1.SettingCreatePresetRequestDto !== "undefined" && setting_dto_1.SettingCreatePresetRequestDto) === "function" ? _j : Object]),
    __metadata("design:returntype", Promise)
], SettingApiController.prototype, "createPreset", null);
exports.SettingApiController = SettingApiController = __decorate([
    (0, swagger_1.ApiTags)('세팅 관련 API (setting)'),
    (0, common_1.Controller)('setting'),
    __metadata("design:paramtypes", [])
], SettingApiController);


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingApiService = void 0;
const common_1 = __webpack_require__(5);
const microservices_1 = __webpack_require__(3);
const rxjs_1 = __webpack_require__(32);
const constant_1 = __webpack_require__(65);
const logger_1 = __webpack_require__(33);
let SettingApiService = class SettingApiService {
    constructor(settingMicroservice) {
        this.settingMicroservice = settingMicroservice;
        this.loggerService = logger_1.LoggerService.get('gateway');
    }
    async onModuleInit() {
        this.settingService = this.settingMicroservice.getService('SettingGrpcService');
    }
    async getType() {
        const resp = await (0, rxjs_1.lastValueFrom)(this.settingService.getType({}));
        return { type: resp.type };
    }
    async getSetting(dto) {
        const resp = await (0, rxjs_1.lastValueFrom)(this.settingService.getSetting({ type: dto.type }));
        return { ...resp, data: JSON.parse(resp.data) };
    }
    async saveSetting(dto) {
        const resp = await (0, rxjs_1.lastValueFrom)(this.settingService.saveSetting({ type: dto.type, key: dto.key, value: dto.value }));
        return { ...resp };
    }
    async saveSettingAll(dto) {
        const resp = await (0, rxjs_1.lastValueFrom)(this.settingService.saveSettingAll({ type: dto.type, data: JSON.stringify(dto.data) }));
        return { ...resp, data: JSON.parse(resp.data) };
    }
    async getPresetList(dto) {
        const resp = await (0, rxjs_1.lastValueFrom)(this.settingService.getPresetList({ type: dto.type }));
        return { ...resp };
    }
    async getPreset(dto) {
        const resp = await (0, rxjs_1.lastValueFrom)(this.settingService.getPreset({ type: dto.type, preset: dto.preset }));
        return { ...resp, data: JSON.parse(resp.data), preset: dto.preset };
    }
    async createPreset(dto) {
        const resp = await (0, rxjs_1.lastValueFrom)(this.settingService.createPreset({ type: dto.type, preset: dto.preset }));
        return { ...resp, data: JSON.parse(resp.data), preset: dto.preset };
    }
    async deletePreset(dto) {
        const resp = await (0, rxjs_1.lastValueFrom)(this.settingService.deletePreset({ type: dto.type, preset: dto.preset }));
        return { ...resp, preset: dto.preset };
    }
    async savePreset(dto) {
        const resp = await (0, rxjs_1.lastValueFrom)(this.settingService.savePreset({ type: dto.type, preset: dto.preset, data: JSON.stringify(dto.data) }));
        return { ...resp, data: JSON.parse(resp.data), preset: dto.preset };
    }
};
exports.SettingApiService = SettingApiService;
exports.SettingApiService = SettingApiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constant_1.SETTING_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object])
], SettingApiService);


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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingSavePresetResponseDto = exports.SettingSavePresetRequestDto = exports.SettingDeletePresetResponseDto = exports.SettingDeletePresetRequestDto = exports.SettingCreatePresetResponseDto = exports.SettingCreatePresetRequestDto = exports.SettingGetPresetResponseDto = exports.SettingGetPresetRequestDto = exports.SettingGetPresetListResponseDto = exports.SettingGetPresetListRequestDto = exports.SettingSaveSettingAllResponseDto = exports.SettingSaveSettingAllRequestDto = exports.SettingSaveSettingResponseDto = exports.SettingSaveSettingRequestDto = exports.SettingGetSettingResponseDto = exports.SettingGetSettingRequestDto = exports.SettingGetTypeResponseDto = exports.SettingResponseSlamnav = exports.SettingRequestSlamnav = exports.SettingResponseDto = exports.SettingRequestDto = exports.SettingCommand = void 0;
const swagger_1 = __webpack_require__(58);
const class_validator_1 = __webpack_require__(61);
var Description;
(function (Description) {
    Description["ID"] = "\uC694\uCCAD \uACE0\uC720 \uC544\uC774\uB514. \uC11C\uBC84\uC5D0\uC11C \uC790\uB3D9\uC0DD\uC131\uB418\uBA70 \uADF8\uB300\uB85C \uBC18\uD658.";
    Description["COMMAND"] = "\uC138\uD305 \uBA85\uB839\uC5B4.";
    Description["TYPE"] = "\uB85C\uBD07 \uD0C0\uC785. \uD0C0\uC785\uBCC4\uB85C \uC138\uD305 \uD30C\uC77C \uB0B4\uC6A9\uC774 \uB2E4\uB984";
    Description["DATA"] = "\uC138\uD305 \uD30C\uC77C \uB0B4\uC6A9. json \uD615\uC2DD\uC73C\uB85C \uC800\uC7A5\uB418\uC5B4 \uC788\uC74C";
    Description["KEY"] = "\uC138\uD305 \uD0A4. \uD30C\uC77C \uB0B4\uC6A9\uC744 \uC218\uC815\uD560 \uB54C \uC138\uD305 \uBCC0\uC218\uC758 \uC774\uB984";
    Description["VALUE"] = "\uC138\uD305 \uAC12. \uD30C\uC77C \uB0B4\uC6A9\uC744 \uC218\uC815\uD560 \uB54C \uC138\uD305 \uBCC0\uC218\uC758 \uAC12. \uBAA8\uB4E0 \uAC12\uC740 string \uD615\uC2DD\uC73C\uB85C \uC9C0\uC815\uD558\uC5EC \uC1A1\uC2E0";
    Description["RESULT"] = "\uC138\uD305 \uACB0\uACFC. success, fail";
    Description["MESSAGE"] = "\uC138\uD305 \uACB0\uACFC \uBA54\uC2DC\uC9C0";
    Description["PRESET"] = "\uD504\uB9AC\uC14B \uC774\uB984. \uD504\uB9AC\uC14B \uD30C\uC77C\uC774\uB984\uC774 preset_1.json \uC774\uB77C\uBA74 1\uB85C \uBCF4\uB0B4\uC8FC\uC138\uC694.";
    Description["PRESET_LIST"] = "\uD504\uB9AC\uC14B \uB9AC\uC2A4\uD2B8. \uD504\uB9AC\uC14B \uD30C\uC77C\uC774\uB984\uC774 preset_1.json \uC774\uB77C\uBA74 1\uB85C \uBCF4\uB0B4\uC8FC\uC138\uC694.";
})(Description || (Description = {}));
var SettingCommand;
(function (SettingCommand) {
    SettingCommand["getType"] = "getType";
    SettingCommand["getSetting"] = "getSetting";
    SettingCommand["saveSetting"] = "saveSetting";
    SettingCommand["saveSettingAll"] = "saveSettingAll";
    SettingCommand["getPresetList"] = "getPresetList";
    SettingCommand["getPreset"] = "getPreset";
    SettingCommand["deletePreset"] = "deletePreset";
    SettingCommand["createPreset"] = "createPreset";
    SettingCommand["savePreset"] = "savePreset";
})(SettingCommand || (exports.SettingCommand = SettingCommand = {}));
class SettingRequestDto {
}
exports.SettingRequestDto = SettingRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.TYPE,
        example: 'SRV',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SettingRequestDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.PRESET,
        example: '1',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SettingRequestDto.prototype, "preset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.KEY,
        example: 'USE_RRS',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SettingRequestDto.prototype, "key", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.VALUE,
        example: 'true',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SettingRequestDto.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.DATA,
        example: '{"USE_RRS": "true"}',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SettingRequestDto.prototype, "data", void 0);
class SettingResponseDto extends SettingRequestDto {
}
exports.SettingResponseDto = SettingResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.PRESET_LIST,
        example: ['0', '1'],
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Array)
], SettingResponseDto.prototype, "list", void 0);
class SettingRequestSlamnav extends SettingRequestDto {
}
exports.SettingRequestSlamnav = SettingRequestSlamnav;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ID,
        example: '1234567890',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SettingRequestSlamnav.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.COMMAND,
        example: SettingCommand.getSetting,
        enum: SettingCommand,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SettingRequestSlamnav.prototype, "command", void 0);
class SettingResponseSlamnav extends SettingResponseDto {
}
exports.SettingResponseSlamnav = SettingResponseSlamnav;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ID,
        example: '1234567890',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SettingResponseSlamnav.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.COMMAND,
        example: SettingCommand.getSetting,
        enum: SettingCommand,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SettingResponseSlamnav.prototype, "command", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.RESULT,
        example: 'success',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SettingResponseSlamnav.prototype, "result", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MESSAGE,
        example: '세팅 완료',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SettingResponseSlamnav.prototype, "message", void 0);
class SettingGetTypeResponseDto {
}
exports.SettingGetTypeResponseDto = SettingGetTypeResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.TYPE,
        example: 'SRV',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SettingGetTypeResponseDto.prototype, "type", void 0);
class SettingGetSettingRequestDto {
}
exports.SettingGetSettingRequestDto = SettingGetSettingRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.TYPE,
        example: 'SRV',
        required: true,
    }),
    (0, class_validator_1.Length)(1, 20),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SettingGetSettingRequestDto.prototype, "type", void 0);
class SettingGetSettingResponseDto extends SettingGetSettingRequestDto {
}
exports.SettingGetSettingResponseDto = SettingGetSettingResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.DATA,
        example: '{"USE_RRS": "true"}',
    }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", typeof (_a = typeof JSON !== "undefined" && JSON) === "function" ? _a : Object)
], SettingGetSettingResponseDto.prototype, "data", void 0);
class SettingSaveSettingRequestDto extends SettingGetSettingRequestDto {
}
exports.SettingSaveSettingRequestDto = SettingSaveSettingRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.KEY,
        example: 'USE_RRS',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SettingSaveSettingRequestDto.prototype, "key", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.VALUE,
        example: 'true',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SettingSaveSettingRequestDto.prototype, "value", void 0);
class SettingSaveSettingResponseDto extends SettingSaveSettingRequestDto {
}
exports.SettingSaveSettingResponseDto = SettingSaveSettingResponseDto;
class SettingSaveSettingAllRequestDto extends SettingGetSettingRequestDto {
}
exports.SettingSaveSettingAllRequestDto = SettingSaveSettingAllRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.DATA,
        example: '{"USE_RRS": "true"}',
    }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", typeof (_b = typeof JSON !== "undefined" && JSON) === "function" ? _b : Object)
], SettingSaveSettingAllRequestDto.prototype, "data", void 0);
class SettingSaveSettingAllResponseDto extends SettingSaveSettingAllRequestDto {
}
exports.SettingSaveSettingAllResponseDto = SettingSaveSettingAllResponseDto;
class SettingGetPresetListRequestDto extends SettingGetSettingRequestDto {
}
exports.SettingGetPresetListRequestDto = SettingGetPresetListRequestDto;
class SettingGetPresetListResponseDto extends SettingGetPresetListRequestDto {
}
exports.SettingGetPresetListResponseDto = SettingGetPresetListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.PRESET_LIST,
        example: ['0', '1'],
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Array)
], SettingGetPresetListResponseDto.prototype, "list", void 0);
class SettingGetPresetRequestDto extends SettingGetSettingRequestDto {
}
exports.SettingGetPresetRequestDto = SettingGetPresetRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.PRESET,
        example: '1',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SettingGetPresetRequestDto.prototype, "preset", void 0);
class SettingGetPresetResponseDto extends SettingGetPresetRequestDto {
}
exports.SettingGetPresetResponseDto = SettingGetPresetResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.DATA,
        example: { LIMIT_V: 1.2 },
    }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", typeof (_c = typeof JSON !== "undefined" && JSON) === "function" ? _c : Object)
], SettingGetPresetResponseDto.prototype, "data", void 0);
class SettingCreatePresetRequestDto extends SettingGetPresetRequestDto {
}
exports.SettingCreatePresetRequestDto = SettingCreatePresetRequestDto;
class SettingCreatePresetResponseDto extends SettingCreatePresetRequestDto {
}
exports.SettingCreatePresetResponseDto = SettingCreatePresetResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.DATA,
        example: { LIMIT_V: 1.2 },
    }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", typeof (_d = typeof JSON !== "undefined" && JSON) === "function" ? _d : Object)
], SettingCreatePresetResponseDto.prototype, "data", void 0);
class SettingDeletePresetRequestDto extends SettingGetPresetRequestDto {
}
exports.SettingDeletePresetRequestDto = SettingDeletePresetRequestDto;
class SettingDeletePresetResponseDto extends SettingDeletePresetRequestDto {
}
exports.SettingDeletePresetResponseDto = SettingDeletePresetResponseDto;
class SettingSavePresetRequestDto extends SettingGetPresetRequestDto {
}
exports.SettingSavePresetRequestDto = SettingSavePresetRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.DATA,
        example: { LIMIT_V: 1.2 },
    }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", typeof (_e = typeof JSON !== "undefined" && JSON) === "function" ? _e : Object)
], SettingSavePresetRequestDto.prototype, "data", void 0);
class SettingSavePresetResponseDto extends SettingSavePresetRequestDto {
}
exports.SettingSavePresetResponseDto = SettingSavePresetResponseDto;


/***/ }),
/* 95 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveApiModule = void 0;
const common_1 = __webpack_require__(5);
const config_1 = __webpack_require__(74);
const microservices_1 = __webpack_require__(3);
const path_1 = __webpack_require__(44);
const move_api_service_1 = __webpack_require__(96);
const move_api_controller_1 = __webpack_require__(100);
const common_2 = __webpack_require__(8);
const constant_1 = __webpack_require__(65);
let MoveApiModule = class MoveApiModule {
};
exports.MoveApiModule = MoveApiModule;
exports.MoveApiModule = MoveApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            microservices_1.ClientsModule.registerAsync([
                {
                    name: constant_1.MOVE_SERVICE,
                    inject: [config_1.ConfigService],
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.GRPC,
                        options: {
                            package: common_2.MoveMicroservice.protobufPackage,
                            protoPath: (0, path_1.join)(process.cwd(), 'proto/move.proto'),
                            url: configService.get('MOVE_GRPC_URL'),
                        },
                    }),
                },
            ]),
        ],
        controllers: [move_api_controller_1.MoveApiController],
        providers: [move_api_service_1.MoveApiService],
    })
], MoveApiModule);


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveApiService = void 0;
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(5);
const microservices_1 = __webpack_require__(3);
const rxjs_1 = __webpack_require__(32);
const move_mapper_1 = __webpack_require__(97);
const util_1 = __webpack_require__(37);
const constant_1 = __webpack_require__(65);
let MoveApiService = class MoveApiService {
    constructor(moveMicroservice) {
        this.moveMicroservice = moveMicroservice;
        this.loggerService = common_1.LoggerService.get('gateway');
    }
    onModuleInit() {
        this.moveService = this.moveMicroservice.getService('MoveGrpcService');
    }
    async sendMoveCommand(moveDto) {
        const resp = move_mapper_1.MoveMapper.fromResttoGRPC(moveDto);
        return await (0, rxjs_1.lastValueFrom)(this.moveService.moveCommand(resp));
    }
    sendMoveJogCommand(moveDto) {
        const resp = move_mapper_1.MoveMapper.fromResttoGRPC(moveDto);
        this.moveService.moveJog(resp).subscribe({
            error: (err) => this.loggerService.error(`[MOVE] sendMoveGoalCommand : ${util_1.ParseUtil.errorToJson(err)}`),
        });
    }
    async getMoveLogLast(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.moveService.moveLogLast(dto));
    }
    async getMoveLog(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.moveService.moveLog(dto));
    }
};
exports.MoveApiService = MoveApiService;
exports.MoveApiService = MoveApiService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, common_2.Inject)(constant_1.MOVE_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object])
], MoveApiService);


/***/ }),
/* 97 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveMapper = void 0;
const move_domain_1 = __webpack_require__(98);
class MoveMapper {
    static fromRest(rest) {
        return new move_domain_1.MoveModel(rest);
    }
    static toGRPC(model) {
        return model;
    }
    static fromResttoGRPC(rest) {
        return new move_domain_1.MoveModel(rest);
    }
}
exports.MoveMapper = MoveMapper;


/***/ }),
/* 98 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveModel = exports.MoveMethod = exports.MoveStatus = void 0;
const move_type_1 = __webpack_require__(99);
const util_1 = __webpack_require__(37);
const microservices_1 = __webpack_require__(3);
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveApiController = void 0;
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(58);
const common_2 = __webpack_require__(8);
const move_dto_1 = __webpack_require__(101);
const move_dto_2 = __webpack_require__(101);
const move_dto_3 = __webpack_require__(101);
const error_response_dto_1 = __webpack_require__(63);
const move_api_service_1 = __webpack_require__(96);
let MoveApiController = class MoveApiController {
    constructor(moveService) {
        this.moveService = moveService;
        this.loggerService = common_2.LoggerService.get('gateway');
    }
    async sendMove(moveDto) {
        this.loggerService.debug(`[Move] Move : ${JSON.stringify(moveDto)}`);
        return this.moveService.sendMoveCommand(moveDto);
    }
    async sendMoveTarget(moveDto) {
        this.loggerService.debug(`[Move] MoveTarget : ${JSON.stringify(moveDto)}`);
        return this.moveService.sendMoveCommand(moveDto);
    }
    async sendMoveGoal(moveDto) {
        this.loggerService.debug(`[Move] MoveGoal : ${JSON.stringify(moveDto)}`);
        return this.moveService.sendMoveCommand({ ...moveDto, command: 'goal' });
    }
    async sendMoveJog(moveDto) {
        this.loggerService.debug(`[Move] MoveJog : ${JSON.stringify(moveDto)}`);
        return this.moveService.sendMoveJogCommand(moveDto);
    }
    async sendMoveStop() {
        this.loggerService.debug(`[Move] MoveStop`);
        return this.moveService.sendMoveCommand({ command: 'stop' });
    }
    async sendMovePause() {
        this.loggerService.debug(`[Move] MovePause`);
        return this.moveService.sendMoveCommand({ command: 'pause' });
    }
    async sendMoveResume() {
        this.loggerService.debug(`[Move] MoveResume`);
        return this.moveService.sendMoveCommand({ command: 'resume' });
    }
    async getMoveLogLast(dto) {
        return this.moveService.getMoveLogLast(dto);
    }
    async getMoveLog(dto) {
        return this.moveService.getMoveLog(dto);
    }
};
exports.MoveApiController = MoveApiController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: '이동 명령',
        description: `이동 명령을 요청합니다.
       command의 값에는 goal, target, jog, stop, pause, resume 이 존재합니다.
       command가 goal인 경우, id, method, preset을 파라메터로 인식합니다.
       command가 target인 경우, x,y,z,rz,method,preset을 파라메터로 인식합니다.
       command가 jog인 경우, vx, vy, wz를 파라메터로 인식합니다.
       그 외의 command는 파라메터를 입력받지 않습니다.
       method는 주행방식을 선언합니다. 기본 pp (point to point) 방식으로 주행하며 그 외 주행방식은 아직 미지원합니다.
       preset은 지정된 속도프리셋을 설정합니다. 아직 미지원합니다.`,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '이동 명령 성공',
        type: move_dto_3.MoveResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof move_dto_1.MoveRequestDto !== "undefined" && move_dto_1.MoveRequestDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], MoveApiController.prototype, "sendMove", null);
__decorate([
    (0, common_1.Post)('target'),
    (0, swagger_1.ApiOperation)({
        summary: '이동 명령 (타켓위치 지정)',
        description: `이동 명령을 요청합니다. 타겟은 지도 상의 특정 x,y,z,rz 값으로 지정합니다.
       method는 주행방식을 선언합니다. 기본 pp (point to point) 방식으로 주행하며 그 외 주행방식은 아직 미지원합니다.
       preset은 지정된 속도프리셋을 설정합니다. 아직 미지원합니다.`,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '이동 명령 성공',
        type: move_dto_3.MoveResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof move_dto_1.MoveRequestDto !== "undefined" && move_dto_1.MoveRequestDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], MoveApiController.prototype, "sendMoveTarget", null);
__decorate([
    (0, common_1.Post)('goal'),
    (0, swagger_1.ApiOperation)({
        summary: '이동 명령 (타켓위치 지정)',
        description: `이동 명령을 요청합니다. 타겟은 지도 상에 선언된 goal노드의 id값으로(goalId) 지정합니다.
       method는 주행방식을 선언합니다. 기본 pp (point to point) 방식으로 주행하며 그 외 주행방식은 아직 미지원합니다.
       preset은 지정된 속도프리셋을 설정합니다. 아직 미지원합니다.`,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '이동 명령 성공',
        type: move_dto_3.MoveResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof move_dto_2.MoveGoalCommandDto !== "undefined" && move_dto_2.MoveGoalCommandDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], MoveApiController.prototype, "sendMoveGoal", null);
__decorate([
    (0, common_1.Post)('jog'),
    (0, swagger_1.ApiOperation)({
        summary: '조이스틱 이동 명령',
        description: `이동 명령을 요청합니다. 속도값으로 vx, vy, wz를 입력으로 받습니다.`,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '조이스틱 이동 명령 성공',
        type: move_dto_3.MoveResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof move_dto_1.MoveRequestDto !== "undefined" && move_dto_1.MoveRequestDto) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], MoveApiController.prototype, "sendMoveJog", null);
__decorate([
    (0, common_1.Post)('stop'),
    (0, swagger_1.ApiOperation)({
        summary: '이동 정지 명령',
        description: `이동 정지 명령을 요청합니다. body값은 필요하지 않습니다.`,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '이동 정지 명령 성공',
        type: move_dto_3.MoveResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], MoveApiController.prototype, "sendMoveStop", null);
__decorate([
    (0, common_1.Post)('pause'),
    (0, swagger_1.ApiOperation)({
        summary: '이동 일시정지 명령',
        description: `이동 일시정지 명령을 요청합니다. body값은 필요하지 않습니다.`,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '이동 일시정지 명령 성공',
        type: move_dto_3.MoveResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], MoveApiController.prototype, "sendMovePause", null);
__decorate([
    (0, common_1.Post)('resume'),
    (0, swagger_1.ApiOperation)({
        summary: '이동 일시재개 명령',
        description: `이동 일시재개 명령을 요청합니다. body값은 필요하지 않습니다.`,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '이동 일시재개 명령 성공',
        type: move_dto_3.MoveResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], MoveApiController.prototype, "sendMoveResume", null);
__decorate([
    (0, common_1.Get)('log/last'),
    (0, swagger_1.ApiOperation)({
        summary: '이동 로그 조회 (최근 로그)',
        description: `이동 로그를 조회합니다. 최근에 실행된 로그를 num개 만큼 조회합니다. command값이 있는 경우 해당 command와 일치하는 로그만 조회합니다.`,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '이동 로그 조회 성공',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof move_dto_1.MoveLogLastRequestDto !== "undefined" && move_dto_1.MoveLogLastRequestDto) === "function" ? _m : Object]),
    __metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], MoveApiController.prototype, "getMoveLogLast", null);
__decorate([
    (0, common_1.Get)('log'),
    (0, swagger_1.ApiOperation)({
        summary: '이동 로그 조회',
        description: `이동 로그를 조회합니다.`,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '이동 로그 조회 성공',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_p = typeof move_dto_1.MoveLogRequestDto !== "undefined" && move_dto_1.MoveLogRequestDto) === "function" ? _p : Object]),
    __metadata("design:returntype", typeof (_q = typeof Promise !== "undefined" && Promise) === "function" ? _q : Object)
], MoveApiController.prototype, "getMoveLog", null);
exports.MoveApiController = MoveApiController = __decorate([
    (0, swagger_1.ApiTags)('주행 API'),
    (0, common_1.Controller)('move'),
    __metadata("design:paramtypes", [typeof (_a = typeof move_api_service_1.MoveApiService !== "undefined" && move_api_service_1.MoveApiService) === "function" ? _a : Object])
], MoveApiController);


/***/ }),
/* 101 */
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
const class_validator_1 = __webpack_require__(61);
const class_transformer_1 = __webpack_require__(60);
const swagger_1 = __webpack_require__(58);
const move_type_1 = __webpack_require__(99);
const util_1 = __webpack_require__(37);
const search_request_1 = __webpack_require__(102);
const pagination_1 = __webpack_require__(104);
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
    (0, class_transformer_1.Type)(() => Number),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "preset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.X, example: 0, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.Y, example: 0, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveRequestDto.prototype, "y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.Z, example: 0, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
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
    (0, class_transformer_1.Type)(() => Number),
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
    (0, class_transformer_1.Type)(() => Number),
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
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
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
    (0, class_transformer_1.Type)(() => Number),
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
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoveTargetCommandDto.prototype, "preset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.X, example: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], MoveTargetCommandDto.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.Y, example: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], MoveTargetCommandDto.prototype, "y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.Z, example: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], MoveTargetCommandDto.prototype, "z", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.RZ, example: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchRequestDto = void 0;
const swagger_1 = __webpack_require__(58);
const pagination_request_1 = __webpack_require__(103);
const class_validator_1 = __webpack_require__(61);
const class_transformer_1 = __webpack_require__(60);
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
exports.PaginationRequest = void 0;
exports.getPaginationOffset = getPaginationOffset;
exports.getPaginationLimit = getPaginationLimit;
const class_validator_1 = __webpack_require__(61);
const swagger_1 = __webpack_require__(58);
const class_transformer_1 = __webpack_require__(60);
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
/* 104 */
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
__exportStar(__webpack_require__(103), exports);
__exportStar(__webpack_require__(105), exports);


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginationResponse = void 0;
const swagger_1 = __webpack_require__(58);
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
/* 106 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskApiModule = void 0;
const common_1 = __webpack_require__(5);
const task_api_controller_1 = __webpack_require__(107);
const task_api_service_1 = __webpack_require__(108);
const config_1 = __webpack_require__(74);
const microservices_1 = __webpack_require__(3);
const common_2 = __webpack_require__(8);
const path_1 = __webpack_require__(44);
const constant_1 = __webpack_require__(65);
let TaskApiModule = class TaskApiModule {
};
exports.TaskApiModule = TaskApiModule;
exports.TaskApiModule = TaskApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            microservices_1.ClientsModule.registerAsync([
                {
                    name: constant_1.TASK_SERVICE,
                    inject: [config_1.ConfigService],
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.GRPC,
                        options: {
                            package: common_2.TaskMicroservice.protobufPackage,
                            protoPath: (0, path_1.join)(process.cwd(), 'proto/task.proto'),
                            url: configService.get('TASK_GRPC_URL'),
                        },
                    }),
                },
            ]),
        ],
        controllers: [task_api_controller_1.TaskApiController],
        providers: [task_api_service_1.TaskApiService],
    })
], TaskApiModule);


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
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskApiController = void 0;
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(5);
const swagger_1 = __webpack_require__(58);
const task_api_service_1 = __webpack_require__(108);
const task_dto_1 = __webpack_require__(109);
const task_type_1 = __webpack_require__(110);
const task_dto_2 = __webpack_require__(109);
const error_response_dto_1 = __webpack_require__(63);
const task_type_2 = __webpack_require__(110);
let TaskApiController = class TaskApiController {
    constructor(taskService) {
        this.taskService = taskService;
        this.loggerService = common_1.LoggerService.get('gateway');
    }
    async getTaskState() {
        return this.taskService.getTaskState();
    }
    async getVariables() {
        return this.taskService.getTaskVariable();
    }
    async taskRequest(payload) {
        return this.taskService.taskRequest(payload);
    }
    async runTask(payload) {
        return this.taskService.taskRequest({ command: task_type_2.TaskCommand.taskRun, ...payload });
    }
    async loadTaskPost() {
        return this.taskService.taskRequest({ command: task_type_2.TaskCommand.taskStop });
    }
    async getTaskList(mapName) {
        console.log('mapName : ', mapName);
        const data = this.taskService.getTaskList({ mapName });
        console.log(data);
        return data;
    }
    async getTask(mapName, taskName) {
        return this.taskService.getTask({ mapName, taskName });
    }
    async saveTask(mapName, taskName, data) {
        return this.taskService.saveTask({ mapName, taskName, data });
    }
    async deleteTask(mapName, taskName) {
        return this.taskService.deleteTask({ mapName, taskName });
    }
};
exports.TaskApiController = TaskApiController;
__decorate([
    (0, common_2.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: '태스크 상태 요청',
        description: '태스크 상태를 요청합니다. DB에 마지막으로 저장된 Task 상태와 현재 Taskman 연결(connection)을 반환합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '태스크 상태 요청 성공',
        type: task_dto_2.TaskResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskApiController.prototype, "getTaskState", null);
__decorate([
    (0, common_2.Get)('variables'),
    (0, swagger_1.ApiOperation)({
        summary: '태스크 변수 요청',
        description: '태스크 프로그램에서 선언된 상태변수 리스트를 요청합니다',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '태스크 변수 요청 성공',
        type: task_dto_2.TaskResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskApiController.prototype, "getVariables", null);
__decorate([
    (0, common_2.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: '태스크 요청',
        description: '태스크 로드, 실행, 중지를 요청합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '태스크 요청 성공',
        type: task_dto_2.TaskResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof task_dto_1.TaskRequestDto !== "undefined" && task_dto_1.TaskRequestDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], TaskApiController.prototype, "taskRequest", null);
__decorate([
    (0, common_2.Post)('run'),
    (0, swagger_1.ApiOperation)({
        summary: '태스크 실행 요청',
        description: '태스크 실행을 요청합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '태스크 실행 요청 성공',
        type: task_dto_2.TaskResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof task_dto_1.TaskRequestDto !== "undefined" && task_dto_1.TaskRequestDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], TaskApiController.prototype, "runTask", null);
__decorate([
    (0, common_2.Post)('stop'),
    (0, swagger_1.ApiOperation)({
        summary: '태스크 중지 요청',
        description: '태스크 중지를 요청합니다. 태스크가 로드된 상태가 아니면 아무 기능도 하지 않습니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '태스크 중지 요청 성공',
        type: task_dto_2.TaskResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], TaskApiController.prototype, "loadTaskPost", null);
__decorate([
    (0, common_2.Get)('list/:mapName'),
    (0, swagger_1.ApiOperation)({
        summary: '태스크 리스트 요청',
        description: '저장된 태스크 리스트를 요청합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '태스크 리스트 요청 성공',
        type: [task_dto_2.TaskResponseDto],
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_2.Param)('mapName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskApiController.prototype, "getTaskList", null);
__decorate([
    (0, common_2.Get)(':mapName/:taskName'),
    (0, swagger_1.ApiOperation)({
        summary: '태스크 트리 요청',
        description: '저장된 태스크 트리를 요청합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '태스크 트리 요청 성공',
        type: task_dto_2.TaskResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_2.Param)('mapName')),
    __param(1, (0, common_2.Param)('taskName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TaskApiController.prototype, "getTask", null);
__decorate([
    (0, common_2.Post)(':mapName/:taskName'),
    (0, swagger_1.ApiOperation)({
        summary: '태스크 파일 저장',
        description: '태스크 파일을 저장합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '태스크 파일 저장 성공',
        type: task_dto_2.TaskResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_2.Param)('mapName')),
    __param(1, (0, common_2.Param)('taskName')),
    __param(2, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_g = typeof task_type_1.TaskTreeNode !== "undefined" && task_type_1.TaskTreeNode) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], TaskApiController.prototype, "saveTask", null);
__decorate([
    (0, common_2.Delete)(':mapName/:taskName'),
    (0, swagger_1.ApiOperation)({
        summary: '태스크 파일 삭제',
        description: '태스크 파일을 삭제합니다. 복구가 불가능합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '태스크 파일 삭제 성공',
        type: task_dto_2.TaskResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_2.Param)('mapName')),
    __param(1, (0, common_2.Param)('taskName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TaskApiController.prototype, "deleteTask", null);
exports.TaskApiController = TaskApiController = __decorate([
    (0, swagger_1.ApiTags)('태스크 API'),
    (0, common_2.Controller)('task'),
    __metadata("design:paramtypes", [typeof (_a = typeof task_api_service_1.TaskApiService !== "undefined" && task_api_service_1.TaskApiService) === "function" ? _a : Object])
], TaskApiController);


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskApiService = void 0;
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(5);
const microservices_1 = __webpack_require__(3);
const rxjs_1 = __webpack_require__(32);
const constant_1 = __webpack_require__(65);
let TaskApiService = class TaskApiService {
    constructor(taskMicroservice) {
        this.taskMicroservice = taskMicroservice;
        this.loggerService = common_1.LoggerService.get('gateway');
    }
    onModuleInit() {
        this.taskService = this.taskMicroservice.getService('TaskGrpcService');
    }
    async taskRequest(request) {
        return await (0, rxjs_1.lastValueFrom)(this.taskService.task(request));
    }
    async getTaskState() {
        return await (0, rxjs_1.lastValueFrom)(this.taskService.getTaskState({}));
    }
    async getTaskVariable() {
        return await (0, rxjs_1.lastValueFrom)(this.taskService.getTaskVariables({}));
    }
    async getTaskList(request) {
        const data = await (0, rxjs_1.lastValueFrom)(this.taskService.getList(request));
        console.log(data);
        return { ...data, list: data.list ?? [] };
    }
    async getTask(request) {
        return await (0, rxjs_1.lastValueFrom)(this.taskService.getTask(request));
    }
    async saveTask(request) {
        return await (0, rxjs_1.lastValueFrom)(this.taskService.saveTask(request));
    }
    async deleteTask(request) {
        return await (0, rxjs_1.lastValueFrom)(this.taskService.deleteTask(request));
    }
};
exports.TaskApiService = TaskApiService;
exports.TaskApiService = TaskApiService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, common_2.Inject)(constant_1.TASK_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object])
], TaskApiService);


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
exports.TaskResponseTaskman = exports.TaskRequestTaskman = exports.TaskResponseDto = exports.TaskRequestDto = void 0;
const url_util_1 = __webpack_require__(38);
const swagger_1 = __webpack_require__(58);
const class_transformer_1 = __webpack_require__(60);
const class_validator_1 = __webpack_require__(61);
const task_type_1 = __webpack_require__(110);
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
exports.TaskFileDto = exports.TaskVariableDto = exports.TaskCommand = void 0;
const swagger_1 = __webpack_require__(58);
const class_validator_1 = __webpack_require__(61);
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
/* 111 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapApiModule = void 0;
const common_1 = __webpack_require__(5);
const map_api_controller_1 = __webpack_require__(112);
const map_api_service_1 = __webpack_require__(113);
const config_1 = __webpack_require__(74);
const microservices_1 = __webpack_require__(3);
const path_1 = __webpack_require__(44);
const constant_1 = __webpack_require__(65);
const grpc_1 = __webpack_require__(9);
let MapApiModule = class MapApiModule {
};
exports.MapApiModule = MapApiModule;
exports.MapApiModule = MapApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            microservices_1.ClientsModule.registerAsync([
                {
                    name: constant_1.MAP_SERVICE,
                    inject: [config_1.ConfigService],
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.GRPC,
                        options: {
                            package: grpc_1.MapMicroservice.protobufPackage,
                            protoPath: (0, path_1.join)(process.cwd(), 'proto/map.proto'),
                            url: configService.get('MAP_GRPC_URL'),
                            maxReceiveMessageLength: 10 * 1024 * 1024,
                            maxSendMessageLength: 10 * 1024 * 1024,
                        },
                    }),
                },
            ]),
        ],
        controllers: [map_api_controller_1.MapApiController],
        providers: [map_api_service_1.MapApiService],
    })
], MapApiModule);


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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapApiController = void 0;
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(5);
const swagger_1 = __webpack_require__(58);
const map_api_service_1 = __webpack_require__(113);
const path_1 = __webpack_require__(44);
const zlib_1 = __webpack_require__(49);
const stream_1 = __webpack_require__(115);
const express_1 = __webpack_require__(116);
const mapping_dto_1 = __webpack_require__(117);
const util_1 = __webpack_require__(37);
const platform_express_1 = __webpack_require__(119);
const multer_1 = __webpack_require__(120);
const fs_1 = __webpack_require__(43);
const error_response_dto_1 = __webpack_require__(63);
const map_dto_1 = __webpack_require__(121);
const load_dto_1 = __webpack_require__(118);
const map_dto_2 = __webpack_require__(121);
const map_dto_3 = __webpack_require__(121);
const zlib = __webpack_require__(49);
const fs = __webpack_require__(43);
let MapApiController = class MapApiController {
    constructor(mapService) {
        this.mapService = mapService;
        this.loggerService = common_1.LoggerService.get('gateway');
    }
    async MapList() {
        return this.mapService.getMapList();
    }
    async CurrentMap() {
        return this.mapService.getCurrentMap();
    }
    async loadMap(name) {
        if (name == '' || name == undefined) {
            throw new common_2.HttpException('로드할 map 이름을 입력하세요.', common_2.HttpStatus.BAD_REQUEST);
        }
        return this.mapService.loadMap(name);
    }
    async getCloud(dto, res) {
        const data = await this.mapService.getCloud(dto);
        const gzip = (0, zlib_1.createGzip)();
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-Encoding', 'gzip');
        stream_1.Readable.from([JSON.stringify(data)])
            .pipe(gzip)
            .on('end', () => this.loggerService.info(`[Map] getCloud : gzip end`))
            .pipe(res)
            .on('finish', () => this.loggerService.info(`[Map] getCloud : send finish`));
    }
    async getCloudPipe(dto, res) {
        try {
            this.loggerService.debug(`[Map] getCloudPipe : ${(0, path_1.join)('/data/maps', dto.mapName, dto.fileName)}`);
            await util_1.FileUtil.readCSVPipe((0, path_1.join)('/data/maps', dto.mapName, dto.fileName), res);
        }
        catch (error) {
            console.error(error);
            this.loggerService.error(`[Map] getCloudPipe: ${util_1.ParseUtil.errorToJson(error)}`);
            throw new common_2.HttpException(error, common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async saveCloud(req, dto) {
        if (req.headers['content-encoding'] === 'gzip') {
        }
        else {
            return this.mapService.saveCloud(dto);
        }
    }
    async uploadCloudGzip(dto, file) {
        try {
            const decompressedData = zlib.gunzipSync(file.buffer);
            const cloudDataString = decompressedData.toString('utf-8');
            const cloudData = cloudDataString
                .split('\n')
                .filter((line) => line.trim())
                .map((line) => line.split(',').map((val) => val.trim()));
            await this.mapService.saveCloud({ ...dto, cloud: cloudData });
            const filePath = `/uploads/${dto.mapName}_${dto.fileName}`;
            fs.writeFileSync(filePath, JSON.stringify(cloudData), 'utf-8');
            return {
                mapName: dto.mapName,
                fileName: dto.fileName,
                success: true,
                filePath: filePath,
            };
        }
        catch (error) {
            this.loggerService.error(`[Map] uploadCloudGzip: ${util_1.ParseUtil.errorToJson(error)}`);
            throw new common_2.HttpException('gzip 파일 처리 중 오류가 발생했습니다.', common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getTilesExists(mapName) {
        return this.mapService.getTilesExists(mapName);
    }
    async getTiles(mapName, z, x, y) {
        const buf = await this.mapService.getTiles(mapName, z, x, y);
        return new common_2.StreamableFile(buf.data, { type: 'image/png' });
    }
    async getTopology(dto) {
        return this.mapService.getTopology(dto.mapName, dto.fileName);
    }
    async getTopologyPagination(dto) {
        if (dto.pageNo === undefined) {
            dto.pageNo = 1;
        }
        if (dto.pageSize === undefined) {
            dto.pageSize = 10;
        }
        return this.mapService.getTopologyPagination(dto);
    }
    async getTopologyPipe(mapName, fileName, res) {
        throw new common_2.HttpException('아직 미구현된 기능입니다.', common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        await util_1.FileUtil.readJSONPipe((0, path_1.join)('/data/maps', mapName, fileName), res);
    }
    async saveTopology(dto) {
        return this.mapService.saveTopology(dto);
    }
    async mappingStart() {
        return this.mapService.mappingStart();
    }
    async mappingStop() {
        return this.mapService.mappingStop();
    }
    async mappingSave(dto) {
        return this.mapService.mappingSave(dto);
    }
    async mappingReload() {
        return this.mapService.mappingReload();
    }
    async uploadMap(dto) {
        return this.mapService.uploadMap(dto);
    }
    async downloadMap(dto) {
        return this.mapService.downloadMap(dto);
    }
    async pulishMap(file, req, name, isForce) {
        try {
            if (name === undefined || name === '') {
                name = file.originalname;
            }
            return this.mapService.publishMap({ newMapName: name, fileName: file.filename, isForce: isForce });
            const newMapname = `${name.split('.')[0]}`;
            const newPath = (0, path_1.join)('/data/maps', newMapname);
            if ((0, fs_1.existsSync)(newPath)) {
                (0, fs_1.unlinkSync)(file.path);
                throw new common_2.HttpException('동일한 이름의 맵이 이미 존재합니다', common_2.HttpStatus.BAD_REQUEST);
            }
            this.loggerService.info(`[Map] pulishMap : ${newMapname}, ${file.filename}`);
            (0, fs_1.renameSync)(file.path, newPath);
            return {
                originalName: file.originalname,
                mapName: newMapname,
                path: file.path,
            };
        }
        catch (error) {
            if (error instanceof TypeError) {
                console.error(error);
                if (file) {
                    throw new common_2.HttpException('맵을 저장할 수 없습니다.', common_2.HttpStatus.BAD_REQUEST);
                }
                else {
                    throw new common_2.HttpException('맵을 저장할 수 없습니다. (빈 파일)', common_2.HttpStatus.BAD_REQUEST);
                }
            }
            else if (error instanceof common_2.HttpException) {
                throw error;
            }
            this.loggerService.error(`[Map] pulishMap : ${(0, common_1.errorToJson)(error)}`);
            throw new common_2.HttpException('맵을 저장하던 중 에러가 발생했습니다.', common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.MapApiController = MapApiController;
__decorate([
    (0, common_2.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: '맵 리스트 요청',
        description: '저장된 맵 리스트를 요청합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '맵 리스트 요청 성공',
        type: map_dto_1.GetMapListResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MapApiController.prototype, "MapList", null);
__decorate([
    (0, common_2.Get)('current'),
    (0, swagger_1.ApiOperation)({
        summary: 'SLAMNAV 로드된 맵 정보 요청',
        description: 'SLAMNAV에 로드된 맵 정보를 요청합니다.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MapApiController.prototype, "CurrentMap", null);
__decorate([
    (0, common_2.Post)('load/:name'),
    (0, swagger_1.ApiOperation)({
        summary: '맵 로드 요청',
        description: 'SLAMNAV로 맵 로드를 요청합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '맵 로드 요청 성공',
        type: load_dto_1.LoadResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_2.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], MapApiController.prototype, "loadMap", null);
__decorate([
    (0, common_2.Get)('cloud'),
    (0, swagger_1.ApiOperation)({
        summary: '맵 클라우드 데이터 요청',
        description: '맵 클라우드 데이터를 요청합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '맵 클라우드 데이터 요청 성공',
        type: map_dto_1.GetCloudResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_2.Query)()),
    __param(1, (0, common_2.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof map_dto_1.GetCloudRequestDto !== "undefined" && map_dto_1.GetCloudRequestDto) === "function" ? _c : Object, typeof (_d = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], MapApiController.prototype, "getCloud", null);
__decorate([
    (0, common_2.Get)('cloudpipe'),
    (0, swagger_1.ApiOperation)({
        summary: '맵 클라우드 데이터 요청',
        description: '로봇에 저장된 맵 클라우드 데이터를 gzip 압축된 형태로 요청합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '맵 클라우드 데이터 요청 성공 (CSV 파일)',
        type: map_dto_1.GetCloudResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_2.Query)()),
    __param(1, (0, common_2.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof map_dto_1.GetCloudRequestDto !== "undefined" && map_dto_1.GetCloudRequestDto) === "function" ? _e : Object, typeof (_f = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], MapApiController.prototype, "getCloudPipe", null);
__decorate([
    (0, common_2.Post)('cloud'),
    (0, swagger_1.ApiOperation)({
        summary: '클라우드 저장 요청',
        description: '클라우드파일을 저장합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '클라우드 저장 성공',
        type: map_dto_1.SaveCloudResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_2.Req)()),
    __param(1, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _g : Object, typeof (_h = typeof map_dto_1.SaveCloudRequestDto !== "undefined" && map_dto_1.SaveCloudRequestDto) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], MapApiController.prototype, "saveCloud", null);
__decorate([
    (0, common_2.Post)('cloudpipe'),
    (0, swagger_1.ApiOperation)({
        summary: '클라우드 저장 요청',
        description: '클라우드파일을 저장합니다. 파일을 gzip으로 압축하여 전송하세요.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '클라우드 저장 성공',
        type: map_dto_1.SaveCloudPipeResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    (0, common_2.UseInterceptors)((0, platform_express_1.FileInterceptor)('cloudFile')),
    __param(0, (0, common_2.Body)()),
    __param(1, (0, common_2.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof map_dto_1.SaveCloudPipeRequestDto !== "undefined" && map_dto_1.SaveCloudPipeRequestDto) === "function" ? _j : Object, typeof (_l = typeof Express !== "undefined" && (_k = Express.Multer) !== void 0 && _k.File) === "function" ? _l : Object]),
    __metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], MapApiController.prototype, "uploadCloudGzip", null);
__decorate([
    (0, common_2.Get)('tiles/:mapName'),
    (0, swagger_1.ApiOperation)({
        summary: '타일 요청',
        description: '타일 데이터를 요청합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '타일 요청 성공',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_2.Param)('mapName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MapApiController.prototype, "getTilesExists", null);
__decorate([
    (0, common_2.Get)('tiles/:mapName/:z/:x/:y'),
    (0, swagger_1.ApiOperation)({
        summary: '타일 요청',
        description: '타일 데이터를 요청합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '타일 요청 성공',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_2.Param)('mapName')),
    __param(1, (0, common_2.Param)('z')),
    __param(2, (0, common_2.Param)('x')),
    __param(3, (0, common_2.Param)('y')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], MapApiController.prototype, "getTiles", null);
__decorate([
    (0, common_2.Get)('topo'),
    (0, swagger_1.ApiOperation)({
        summary: '토폴로지 파일 요청',
        description: '맵의 토폴로지 데이터를 요청합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '토폴로지 파일 요청 성공',
        type: map_dto_1.GetTopologyResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_o = typeof map_dto_2.GetTopologyRequestDto !== "undefined" && map_dto_2.GetTopologyRequestDto) === "function" ? _o : Object]),
    __metadata("design:returntype", typeof (_p = typeof Promise !== "undefined" && Promise) === "function" ? _p : Object)
], MapApiController.prototype, "getTopology", null);
__decorate([
    (0, common_2.Get)('topology'),
    (0, swagger_1.ApiOperation)({
        summary: '토폴로지 파일 요청(페이지네이션)',
        description: '맵의 토폴로지 데이터를 요청합니다. 검색을 포함한 페이지네이션 기능을 제공합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '토폴로지 파일 요청 성공 (페이지네이션)',
        type: map_dto_1.GetTopologyResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_q = typeof map_dto_2.GetTopologyRequestDto !== "undefined" && map_dto_2.GetTopologyRequestDto) === "function" ? _q : Object]),
    __metadata("design:returntype", Promise)
], MapApiController.prototype, "getTopologyPagination", null);
__decorate([
    (0, common_2.Get)('topopipe/:mapName/:fileName'),
    (0, swagger_1.ApiOperation)({
        summary: '토폴로지 파일 요청(압축파일)',
        description: '맵의 토폴로지 데이터를 요청합니다. gzip형식으로 압축된 데이터를 파일로 전송합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '토폴로지 파일 요청 성공 (gzip 압축)',
        type: map_dto_1.GetTopologyResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_2.Param)('mapName')),
    __param(1, (0, common_2.Param)('fileName')),
    __param(2, (0, common_2.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_r = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _r : Object]),
    __metadata("design:returntype", Promise)
], MapApiController.prototype, "getTopologyPipe", null);
__decorate([
    (0, common_2.Post)('topology'),
    (0, swagger_1.ApiOperation)({
        summary: '토폴로지 저장 요청',
        description: '토폴로지 파일을 저장합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '토폴로지 저장 성공',
        type: map_dto_1.SaveTopologyRequestDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_s = typeof map_dto_1.SaveTopologyRequestDto !== "undefined" && map_dto_1.SaveTopologyRequestDto) === "function" ? _s : Object]),
    __metadata("design:returntype", Promise)
], MapApiController.prototype, "saveTopology", null);
__decorate([
    (0, common_2.Post)('mapping/start'),
    (0, swagger_1.ApiOperation)({
        summary: '맵 생성 시작',
        description: '맵 생성을 시작합니다. SLAMNAV가 연결되어 있어야 하며 save 요청을 하지 않으면 저장되지 않습니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '맵 생성 시작 성공',
        type: mapping_dto_1.MappingResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MapApiController.prototype, "mappingStart", null);
__decorate([
    (0, common_2.Post)('mapping/stop'),
    (0, swagger_1.ApiOperation)({
        summary: '맵 생성 취소(저장x)',
        description: '맵 생성을 취소합니다. 생성 중이던 맵은 저장되지 않고 삭제됩니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '맵 생성 취소 성공',
        type: mapping_dto_1.MappingResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MapApiController.prototype, "mappingStop", null);
__decorate([
    (0, common_2.Post)('mapping/save'),
    (0, swagger_1.ApiOperation)({
        summary: '맵 생성 종료(저장)',
        description: '맵 생성을 종료하고 저장합니다. 맵은 저장된 후 자동으로 SLAMNAV로 로드됩니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '맵 생성 종료 및 저장 성공',
        type: mapping_dto_1.MappingResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_t = typeof mapping_dto_1.MappingRequestDto !== "undefined" && mapping_dto_1.MappingRequestDto) === "function" ? _t : Object]),
    __metadata("design:returntype", Promise)
], MapApiController.prototype, "mappingSave", null);
__decorate([
    (0, common_2.Get)('mapping/reload'),
    (0, swagger_1.ApiOperation)({
        summary: '매핑 클라우드 재요청',
        description: '매핑 중인 데이터를 일괄로 재요청합니다. 매핑클라우드는 기본적으로 mappingStart 이후에 추가되는 포인트만 소켓으로 송신되며 브라우저 새로고침, 신규 브라우저 연결 등의 이유로 매핑 클라우드를 받고 싶으면 reload를 통하여 기존에 쌓인 매핑클라우드를 일괄로 소켓을 통해 받아볼 수 있습니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '매핑 클라우드 재요청 성공',
        type: mapping_dto_1.MappingResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MapApiController.prototype, "mappingReload", null);
__decorate([
    (0, common_2.Post)('upload'),
    (0, swagger_1.ApiOperation)({
        summary: '맵 FRS 업로드',
        description: '맵을 압축하여 FRS로 업로드 합니다. 디렉토리 내 존재하는 map의 이름을 mapName으로 입력하고 FRS상에 저장되길 원하는 이름을 newMapName에 입력하세요. newMapName값이 없음연 본래 mapName으로 저장됩니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '맵 FRS 업로드 성공',
        type: map_dto_2.UploadMapRequestDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_u = typeof map_dto_2.UploadMapRequestDto !== "undefined" && map_dto_2.UploadMapRequestDto) === "function" ? _u : Object]),
    __metadata("design:returntype", Promise)
], MapApiController.prototype, "uploadMap", null);
__decorate([
    (0, common_2.Post)('download'),
    (0, swagger_1.ApiOperation)({
        summary: '맵 FRS 다운로드',
        description: 'FRS로부터 맵을 다운로드 요청합니다. 다운로드는 RRS에서 FRS로 요청하여 받아오는 방식입니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '맵 FRS 다운로드 성공',
        type: map_dto_3.DownloadMapRequestDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_2.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_v = typeof map_dto_3.DownloadMapRequestDto !== "undefined" && map_dto_3.DownloadMapRequestDto) === "function" ? _v : Object]),
    __metadata("design:returntype", Promise)
], MapApiController.prototype, "downloadMap", null);
__decorate([
    (0, common_2.Post)('publish'),
    (0, swagger_1.ApiOperation)({
        summary: '맵 수동 발행',
        description: '맵을 직접 파일을 업로드하여 로봇에 저장합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '맵 수동 발행 성공',
        schema: {
            type: 'object',
            properties: {
                originalName: { type: 'string' },
                mapName: { type: 'string' },
                path: { type: 'string' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
                name: {
                    type: 'string',
                },
                isForce: {
                    type: 'boolean',
                },
            },
        },
    }),
    (0, common_2.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: '/data/temp',
            filename: (req, file, callback) => {
                console.log('[UPLOAD]', file);
                const ext = (0, path_1.extname)(file.originalname);
                const filename = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}${ext}`;
                callback(null, filename);
            },
        }),
    })),
    __param(0, (0, common_2.UploadedFile)()),
    __param(1, (0, common_2.Req)()),
    __param(2, (0, common_2.Body)('name')),
    __param(3, (0, common_2.Body)('isForce')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_x = typeof Express !== "undefined" && (_w = Express.Multer) !== void 0 && _w.File) === "function" ? _x : Object, typeof (_y = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _y : Object, String, Boolean]),
    __metadata("design:returntype", Promise)
], MapApiController.prototype, "pulishMap", null);
exports.MapApiController = MapApiController = __decorate([
    (0, swagger_1.ApiTags)('맵 API'),
    (0, common_2.Controller)('map'),
    __metadata("design:paramtypes", [typeof (_a = typeof map_api_service_1.MapApiService !== "undefined" && map_api_service_1.MapApiService) === "function" ? _a : Object])
], MapApiController);


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapApiService = void 0;
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(5);
const microservices_1 = __webpack_require__(3);
const rxjs_1 = __webpack_require__(32);
const pagination_1 = __webpack_require__(104);
const constant_1 = __webpack_require__(65);
const map_command_domain_1 = __webpack_require__(114);
let MapApiService = class MapApiService {
    constructor(mapMicroservice) {
        this.mapMicroservice = mapMicroservice;
        this.loggerService = common_1.LoggerService.get('gateway');
    }
    onModuleInit() {
        this.mapService = this.mapMicroservice.getService('MapGrpcService');
    }
    async loadMap(mapName) {
        return await (0, rxjs_1.lastValueFrom)(this.mapService.load({ command: map_command_domain_1.MapCommand.loadMap, mapName }));
    }
    async getCloud(dto) {
        const resp = await (0, rxjs_1.lastValueFrom)(this.mapService.getCloud(dto));
        const cloud = resp.cloud.map((p) => p.row);
        return {
            mapName: resp.mapName,
            fileName: resp.fileName,
            cloud: cloud,
        };
    }
    async saveCloud(dto) {
        const cloud = dto.cloud.map((e) => ({ row: e }));
        return await (0, rxjs_1.lastValueFrom)(this.mapService.saveCloud({ ...dto, cloud: cloud }));
    }
    async getMapList() {
        return await (0, rxjs_1.lastValueFrom)(this.mapService.getMapList({}));
    }
    async getCurrentMap() {
        return await (0, rxjs_1.lastValueFrom)(this.mapService.getCurrentMap({}));
    }
    async getTilesExists(mapName) {
        return await (0, rxjs_1.lastValueFrom)(this.mapService.getMapTileExist({ mapName }));
    }
    async getTiles(mapName, z, x, y) {
        return await (0, rxjs_1.lastValueFrom)(this.mapService.getMapTile({ mapName, z: Number(z), x: Number(x), y: Number(y) }));
    }
    async getTopologyPagination(dto) {
        const resp = await (0, rxjs_1.lastValueFrom)(this.mapService.getTopology({
            mapName: dto.mapName,
            fileName: dto.fileName,
        }));
        const data = resp.data;
        const nodes = [];
        if (Array.isArray(data)) {
            data.map((node) => {
                if (!dto.nodeType || node.type == dto.nodeType) {
                    if (dto.searchText != '' && dto.searchText != undefined) {
                        if (node.id.toLowerCase().includes(dto.searchText.toLowerCase()) ||
                            node.name.toLowerCase().includes(dto.searchText.toLowerCase())) {
                            nodes.push(node);
                        }
                    }
                    else {
                        nodes.push(node);
                    }
                }
            });
        }
        const totalItems = nodes.length;
        let startIndex = (Number(dto.pageNo) - 1) * Number(dto.pageSize);
        let endIndex = startIndex + Number(dto.pageSize);
        if (dto.sortOption == 'name') {
            nodes.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
        }
        else {
            nodes.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
        }
        while (startIndex >= totalItems) {
            dto.pageNo--;
            startIndex = (Number(dto.pageNo) - 1) * Number(dto.pageSize);
            endIndex = startIndex + Number(dto.pageSize);
        }
        const items = nodes.slice(startIndex, endIndex);
        return new pagination_1.PaginationResponse(items, nodes.length, Number(dto.pageSize));
    }
    async getTopology(mapName, fileName) {
        return await (0, rxjs_1.lastValueFrom)(this.mapService.getTopology({ mapName, fileName }));
    }
    async saveTopology(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.mapService.saveTopology(dto));
    }
    async mappingStart() {
        return await (0, rxjs_1.lastValueFrom)(this.mapService.mapping({ command: map_command_domain_1.MapCommand.mappingStart }));
    }
    async mappingStop() {
        return await (0, rxjs_1.lastValueFrom)(this.mapService.mapping({ command: map_command_domain_1.MapCommand.mappingStop }));
    }
    async mappingSave(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.mapService.mapping({ ...dto, command: map_command_domain_1.MapCommand.mappingSave }));
    }
    async mappingReload() {
        return await (0, rxjs_1.lastValueFrom)(this.mapService.mapping({ command: map_command_domain_1.MapCommand.mappingReload }));
    }
    async uploadMap(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.mapService.uploadMap(dto));
    }
    async downloadMap(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.mapService.downloadMap(dto));
    }
    async publishMap(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.mapService.publishMap(dto));
    }
};
exports.MapApiService = MapApiService;
exports.MapApiService = MapApiService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, common_2.Inject)(constant_1.MAP_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object])
], MapApiService);


/***/ }),
/* 114 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapCommandModel = exports.MapCommand = exports.CommandStatus = void 0;
const rpc_code_exception_1 = __webpack_require__(50);
const constant_1 = __webpack_require__(51);
const microservices_1 = __webpack_require__(3);
const path_1 = __webpack_require__(44);
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
    assignId(id) {
        this.id = id;
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
            throw new microservices_1.RpcException('ID가 없습니다');
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
/* 115 */
/***/ ((module) => {

module.exports = require("stream");

/***/ }),
/* 116 */
/***/ ((module) => {

module.exports = require("express");

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
exports.MappingResponseFrs = exports.MappingResponseSlamnav = exports.MappingRequestSlamnav = exports.MappingResponseDto = exports.MappingRequestDto = exports.Description = void 0;
const swagger_1 = __webpack_require__(58);
const class_validator_1 = __webpack_require__(61);
const class_transformer_1 = __webpack_require__(60);
const util_1 = __webpack_require__(37);
const load_dto_1 = __webpack_require__(118);
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
exports.LoadResponseFrs = exports.LoadResponseSlamnav = exports.LoadRequestSlamnav = exports.LoadResponseDto = exports.LoadRequestDto = exports.MapCommand = void 0;
const swagger_1 = __webpack_require__(58);
const class_validator_1 = __webpack_require__(61);
const util_1 = __webpack_require__(37);
const description_1 = __webpack_require__(80);
const class_transformer_1 = __webpack_require__(60);
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
/* 119 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),
/* 120 */
/***/ ((module) => {

module.exports = require("multer");

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
exports.UploadMapRequestDto = exports.DownloadMapRequestDto = exports.SaveTopologyResponseDto = exports.SaveTopologyRequestDto = exports.GetTopologyResponseDto = exports.GetTopologyRequestDto = exports.SaveCloudPipeResponseDto = exports.SaveCloudPipeRequestDto = exports.SaveCloudResponseDto = exports.SaveCloudRequestDto = exports.GetCloudResponseDto = exports.GetCloudRequestDto = exports.FileDto = exports.GetMapListResponseDto = void 0;
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(58);
const class_transformer_1 = __webpack_require__(60);
const class_validator_1 = __webpack_require__(61);
const map_type_1 = __webpack_require__(122);
const pagination_1 = __webpack_require__(104);
const topo_type_1 = __webpack_require__(123);
var Description;
(function (Description) {
    Description["MAPNAME"] = "\uB9F5 \uC774\uB984";
    Description["UPDATE_DT"] = "\uB9F5 \uC5C5\uB370\uC774\uD130 \uC2DC\uAC04";
    Description["CLOUD"] = "\uB9F5 \uD074\uB77C\uC6B0\uB4DC \uB370\uC774\uD130. \uAC01 \uC904\uC5D0\uB294 4\uAC1C\uC758 \uAC12\uC774 \uC874\uC7AC\uD558\uBA70 \uC21C\uC11C\uB300\uB85C x, y, z, intensity \uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.\n  x, y, z \uB294 \uB178\uB4DC\uC758 \uC704\uCE58\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4. intensity \uB294 \uB178\uB4DC\uC758 \uBC00\uB3C4\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4.";
    Description["TOPOLOGY"] = "\uB9F5 \uD1A0\uD3F4\uB85C\uC9C0 \uB370\uC774\uD130";
    Description["FILE"] = "\uD30C\uC77C \uC774\uB984";
    Description["TOPO"] = "\uD1A0\uD3F4\uB85C\uC9C0 \uB370\uC774\uD130";
    Description["DOWNLOAD_FILE"] = "\uB2E4\uC6B4\uB85C\uB4DC\uD560 \uB9F5\uC758 \uC774\uB984\uC744 FRS\uC5D0 \uC800\uC7A5\uB41C fileDetailFlNm \uD615\uD0DC\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.";
    Description["DOWNLOAD_NEW_FILE"] = "FRS\uB85C\uBD80\uD130 \uB2E4\uC6B4\uB85C\uB4DC\uD55C \uB9F5\uC758 \uC774\uB984\uC744 \uBCC0\uACBD\uD574\uC11C \uC800\uC7A5\uD558\uB824\uBA74 \uC785\uB825\uD558\uC138\uC694.";
    Description["IS_FORCE"] = "\uD30C\uC77C\uC744 \uAC15\uC81C\uB85C \uB36E\uC5B4\uC50C\uC6B8 \uC9C0 \uC5EC\uBD80. \uAE30\uC874 \uB3D9\uC77C\uD55C \uB9F5\uC774 \uC874\uC7AC\uD558\uBA74 \uB36E\uC5B4\uC50C\uC6B0\uAC70\uB098 \uC5D0\uB7EC\uB97C \uBC1C\uC0DD\uC2DC\uD0B5\uB2C8\uB2E4.";
    Description["UPLOAD_FILE"] = "\uC5C5\uB85C\uB4DC\uD560 \uD30C\uC77C \uC774\uB984";
    Description["UPLOAD_NEW_FILE"] = "\uC5C5\uB85C\uB4DC\uD560 \uB9F5\uC758 \uC774\uB984\uC744 \uBCC0\uACBD\uD574\uC11C \uC800\uC7A5\uD558\uB824\uBA74 \uC785\uB825\uD558\uC138\uC694.";
})(Description || (Description = {}));
class GetMapListResponseDto {
}
exports.GetMapListResponseDto = GetMapListResponseDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ description: '맵 목록', type: [map_type_1.MapDto] }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], GetMapListResponseDto.prototype, "list", void 0);
class FileDto {
}
exports.FileDto = FileDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MAPNAME,
        example: 'Test',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], FileDto.prototype, "mapName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.FILE,
        example: 'cloud.csv',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], FileDto.prototype, "fileName", void 0);
class GetCloudRequestDto extends FileDto {
}
exports.GetCloudRequestDto = GetCloudRequestDto;
class GetCloudResponseDto extends GetCloudRequestDto {
}
exports.GetCloudResponseDto = GetCloudResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CLOUD,
        example: [
            ['1.394410', '1.240310', '0.000000', '44.000000'],
            ['1.407336', '1.244450', '0.000000', '48.000000'],
            ['3.278415', '2.045071', '0.000000', '30.000000'],
            ['3.263314', '1.578665', '0.000000', '54.000000'],
        ],
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], GetCloudResponseDto.prototype, "cloud", void 0);
class SaveCloudRequestDto extends FileDto {
}
exports.SaveCloudRequestDto = SaveCloudRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CLOUD,
        example: [
            ['1.394410', '1.240310', '0.000000', '44.000000'],
            ['1.407336', '1.244450', '0.000000', '48.000000'],
            ['3.278415', '2.045071', '0.000000', '30.000000'],
            ['3.263314', '1.578665', '0.000000', '54.000000'],
        ],
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], SaveCloudRequestDto.prototype, "cloud", void 0);
class SaveCloudResponseDto extends SaveCloudRequestDto {
}
exports.SaveCloudResponseDto = SaveCloudResponseDto;
class SaveCloudPipeRequestDto extends FileDto {
}
exports.SaveCloudPipeRequestDto = SaveCloudPipeRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'gzip 압축된 클라우드 데이터 파일 (.gz)',
        type: 'string',
        format: 'binary',
        example: 'cloud_data.gz',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SaveCloudPipeRequestDto.prototype, "cloudFile", void 0);
class SaveCloudPipeResponseDto extends FileDto {
}
exports.SaveCloudPipeResponseDto = SaveCloudPipeResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '파일 저장 성공 여부', example: true }),
    __metadata("design:type", Boolean)
], SaveCloudPipeResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '저장된 파일 경로', example: '/uploads/cloud_data.gz' }),
    __metadata("design:type", String)
], SaveCloudPipeResponseDto.prototype, "filePath", void 0);
class GetTopologyRequestDto extends pagination_1.PaginationRequest {
}
exports.GetTopologyRequestDto = GetTopologyRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.MAPNAME, example: 'Small' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], GetTopologyRequestDto.prototype, "mapName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.FILE, example: 'topo.json' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], GetTopologyRequestDto.prototype, "fileName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: '',
        required: false,
        description: '노드 타입. 사전에 지정된 타입만 조회가능하며 해당 타입값을 입력한 경우, 해당 타입만 조회합니다.',
        enum: ['GOAL', 'ROUTE', 'INIT'],
    }),
    __metadata("design:type", String)
], GetTopologyRequestDto.prototype, "nodeType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: '',
        required: false,
        description: '검색단어',
    }),
    __metadata("design:type", String)
], GetTopologyRequestDto.prototype, "searchText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'id',
        required: false,
        enum: ['id', 'name'],
        description: '정렬옵션. id 또는 name 값을 기준으로 정렬합니다.',
    }),
    __metadata("design:type", String)
], GetTopologyRequestDto.prototype, "sortOption", void 0);
class GetTopologyResponseDto extends FileDto {
}
exports.GetTopologyResponseDto = GetTopologyResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.TOPO, type: [topo_type_1.NodeDto], required: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], GetTopologyResponseDto.prototype, "data", void 0);
class SaveTopologyRequestDto extends FileDto {
}
exports.SaveTopologyRequestDto = SaveTopologyRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.TOPO, type: [topo_type_1.NodeDto], required: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], SaveTopologyRequestDto.prototype, "data", void 0);
class SaveTopologyResponseDto extends SaveTopologyRequestDto {
}
exports.SaveTopologyResponseDto = SaveTopologyResponseDto;
class DownloadMapRequestDto {
}
exports.DownloadMapRequestDto = DownloadMapRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.DOWNLOAD_FILE, example: 'Small.zip' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], DownloadMapRequestDto.prototype, "fileName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.DOWNLOAD_NEW_FILE, example: 'Small' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, common_1.Optional)(),
    __metadata("design:type", String)
], DownloadMapRequestDto.prototype, "newMapName", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value === 'true' || value === true),
    (0, swagger_1.ApiProperty)({
        description: Description.IS_FORCE,
        example: false,
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], DownloadMapRequestDto.prototype, "isForce", void 0);
class UploadMapRequestDto {
}
exports.UploadMapRequestDto = UploadMapRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.UPLOAD_FILE, example: 'Small' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], UploadMapRequestDto.prototype, "mapName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.UPLOAD_NEW_FILE, example: 'Small' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, common_1.Optional)(),
    __metadata("design:type", String)
], UploadMapRequestDto.prototype, "newMapName", void 0);


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapDto = void 0;
const swagger_1 = __webpack_require__(58);
const class_transformer_1 = __webpack_require__(60);
const class_validator_1 = __webpack_require__(61);
class MapDto {
}
exports.MapDto = MapDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '맵 이름', example: 'map_001', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MapDto.prototype, "mapName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '맵 업데이트 시간', example: '2021-01-01 12:00:00', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MapDto.prototype, "updateDt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '맵 클라우드 데이터', example: ['cloud.csv'], required: false }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], MapDto.prototype, "cloud", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '맵 토폴로지 데이터', example: ['topology.json', 'topology(copy).json'], required: false }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], MapDto.prototype, "topology", void 0);


/***/ }),
/* 123 */
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
exports.NodeDto = exports.PoseDto = exports.NodeType = void 0;
const swagger_1 = __webpack_require__(58);
const class_validator_1 = __webpack_require__(61);
const class_transformer_1 = __webpack_require__(60);
const util_1 = __webpack_require__(37);
var Description;
(function (Description) {
    Description["ID"] = "\uB178\uB4DC\uC758 \uACE0\uC720 ID\uAC12\uC785\uB2C8\uB2E4. \uC790\uB3D9\uC0DD\uC131\uB418\uBA70 \uBCC0\uACBD\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
    Description["NAME"] = "\uB178\uB4DC\uC758 \uC774\uB984 \uAC12\uC785\uB2C8\uB2E4. \uAE30\uBCF8 \uC790\uB3D9\uC0DD\uC131\uB418\uBA70 \uBCC0\uACBD \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC911\uBCF5 \uAC80\uC0AC\uB97C \uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
    Description["POSE"] = "\uB178\uB4DC\uC758 \uB9F5 \uC0C1 \uAE00\uB85C\uBC8C \uC88C\uD45C\uAC12\uC785\uB2C8\uB2E4.";
    Description["INFO"] = "\uB178\uB4DC\uC758 \uC815\uBCF4\uAC12 \uB098\uD0C0\uB0C5\uB2C8\uB2E4. \uD604\uC7AC \uAD6C\uD604\uB41C \uAE30\uB2A5\uC740 \uC5C6\uC2B5\uB2C8\uB2E4.";
    Description["LINKS"] = "\uB178\uB4DC\uAC00 \uC5F0\uACB0\uB41C \uB2E4\uB978 \uB178\uB4DC\uC758 id\uAC12 \uBC30\uC5F4\uC785\uB2C8\uB2E4. \uD3EC\uD568\uB41C \uB178\uB4DC\uB294 \uD604 \uB178\uB4DC\uC5D0\uC11C \uCD9C\uBC1C\uD558\uB294 \uB2E8\uBC29\uD5A5 \uB9C1\uD06C\uB85C \uC5F0\uACB0\uB418\uC5B4 \uC788\uC73C\uBA70, \uD574\uB2F9 \uB178\uB4DC\uC758 links\uC5D0 \uD604 \uB178\uB4DC\uC758 id\uAC12\uC774 \uD3EC\uD568\uB418\uC5C8\uB2E4\uBA74 \uC591\uBC29\uD5A5 \uB9C1\uD06C\uB85C \uC5F0\uACB0\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.";
    Description["TYPE"] = "\uB178\uB4DC\uC758 \uD0C0\uC785\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.";
})(Description || (Description = {}));
var NodeType;
(function (NodeType) {
    NodeType["route"] = "ROUTE";
    NodeType["goal"] = "GOAL";
    NodeType["init"] = "INIT";
})(NodeType || (exports.NodeType = NodeType = {}));
class PoseDto {
}
exports.PoseDto = PoseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POSE,
        example: 0,
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PoseDto.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POSE,
        example: 0,
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PoseDto.prototype, "y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POSE,
        example: 0,
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PoseDto.prototype, "z", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POSE,
        example: 0,
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PoseDto.prototype, "rx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POSE,
        example: 0,
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PoseDto.prototype, "ry", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POSE,
        example: 0,
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PoseDto.prototype, "rz", void 0);
class NodeDto {
}
exports.NodeDto = NodeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ID,
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], NodeDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.NAME,
        example: 'N_15553',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], NodeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.POSE, required: true }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", PoseDto)
], NodeDto.prototype, "pose", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.INFO,
        example: '',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NodeDto.prototype, "info", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.LINKS,
        example: ['N_56593', 'N_11448'],
        required: true,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], NodeDto.prototype, "links", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.TYPE,
        example: NodeType.goal,
        enum: NodeType,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], NodeDto.prototype, "type", void 0);


/***/ }),
/* 124 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SoundApiModule = void 0;
const common_1 = __webpack_require__(8);
const constant_1 = __webpack_require__(65);
const common_2 = __webpack_require__(5);
const config_1 = __webpack_require__(74);
const microservices_1 = __webpack_require__(3);
const path_1 = __webpack_require__(44);
const sound_api_controller_1 = __webpack_require__(125);
const sound_api_service_1 = __webpack_require__(126);
let SoundApiModule = class SoundApiModule {
};
exports.SoundApiModule = SoundApiModule;
exports.SoundApiModule = SoundApiModule = __decorate([
    (0, common_2.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            microservices_1.ClientsModule.registerAsync([
                {
                    name: constant_1.SOUND_SERVICE,
                    inject: [config_1.ConfigService],
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.GRPC,
                        options: {
                            package: common_1.SoundMicroservice.protobufPackage,
                            protoPath: (0, path_1.join)(process.cwd(), 'proto/sound.proto'),
                            url: configService.get('SOUND_GRPC_URL'),
                        },
                    }),
                },
            ]),
        ],
        controllers: [sound_api_controller_1.SoundApiController],
        providers: [sound_api_service_1.SoundApiService],
    })
], SoundApiModule);


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SoundApiController = void 0;
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(58);
const sound_api_service_1 = __webpack_require__(126);
const common_2 = __webpack_require__(8);
const platform_express_1 = __webpack_require__(119);
const express_1 = __webpack_require__(116);
const multer_1 = __webpack_require__(120);
const path_1 = __webpack_require__(44);
const fs_1 = __webpack_require__(43);
const config_1 = __webpack_require__(74);
const error_response_dto_1 = __webpack_require__(63);
const sound_dto_1 = __webpack_require__(127);
const sound_dto_2 = __webpack_require__(127);
let SoundApiController = class SoundApiController {
    constructor(configService) {
        this.configService = configService;
        this.loggerService = common_2.LoggerService.get('gateway');
    }
    async getPlayingStatus(req) {
        this.loggerService.debug(`[SOUND] getPlayingStatus (${req.socket.remoteAddress})`);
        return this.soundService.getPlayingStatus();
    }
    async playSound(req, dto) {
        this.loggerService.debug(`[SOUND] playSound : ${JSON.stringify(dto)} (${req.socket.remoteAddress})`);
        return this.soundService.playSound(dto);
    }
    async stopSound(req) {
        this.loggerService.debug(`[SOUND] stopSound (${req.socket.remoteAddress})`);
        return this.soundService.stopSound();
    }
    async getList(req) {
        this.loggerService.debug(`[SOUND] getList (${req.socket.remoteAddress})`);
        return this.soundService.getSoundList();
    }
    async deleteSound(req, dto) {
        this.loggerService.debug(`[SOUND] deleteSound : ${JSON.stringify(dto)} (${req.socket.remoteAddress})`);
        return this.soundService.deleteSound(dto);
    }
    async addSoundFile(file, req, name) {
        try {
            if (name === undefined || name === '') {
                name = file.originalname;
            }
            const newFilename = `${name.split('.')[0]}${(0, path_1.extname)(file.originalname)}`;
            const newPath = (0, path_1.join)(process.env.SOUND_DIR, newFilename);
            if ((0, fs_1.existsSync)(newPath)) {
                (0, fs_1.unlinkSync)(file.path);
                throw new common_1.HttpException('동일한 이름의 파일이 이미 존재합니다', common_1.HttpStatus.BAD_REQUEST);
            }
            this.loggerService.info(`[SOUND] addSoundFile : ${newFilename}`);
            (0, fs_1.renameSync)(file.path, newPath);
            return {
                originalName: file.originalname,
                savedName: newFilename,
                path: file.path,
            };
        }
        catch (error) {
            if (error instanceof TypeError) {
                if (file) {
                    throw new common_1.HttpException('파일을 저장할 수 없습니다.', common_1.HttpStatus.BAD_REQUEST);
                }
                else {
                    throw new common_1.HttpException('파일을 저장할 수 없습니다. (빈 파일)', common_1.HttpStatus.BAD_REQUEST);
                }
            }
            else if (error instanceof common_1.HttpException) {
                throw error;
            }
            this.loggerService.error(`[SOUND] addSoundFile : ${(0, common_2.errorToJson)(error)}`);
            (0, fs_1.unlinkSync)(file.path);
            throw new common_1.HttpException('파일을 저장하던 중 에러가 발생했습니다.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.SoundApiController = SoundApiController;
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", typeof (_b = typeof sound_api_service_1.SoundApiService !== "undefined" && sound_api_service_1.SoundApiService) === "function" ? _b : Object)
], SoundApiController.prototype, "soundService", void 0);
__decorate([
    (0, common_1.Get)('Play'),
    (0, swagger_1.ApiOperation)({
        summary: '상태 요청',
        description: '현재 사운드 플레이 상태를 요청합니다. 플레이 중이 아니면 result 값이 idle 이며 플레이 중일때는 working으로 바뀝니다. 플레이 중일때는 현재 플레이중인 fileName, volume 등이 포함됩니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '사운드 플레이 상태 요청 성공',
        type: sound_dto_1.PlaySoundResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], SoundApiController.prototype, "getPlayingStatus", null);
__decorate([
    (0, common_1.Post)('play'),
    (0, swagger_1.ApiOperation)({
        summary: '사운드 플레이',
        description: 'mp3 파일을 플레이 합니다. 파일의 경로는 실행경로의 sound 폴더 내부입니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '사운드 플레이 성공',
        type: sound_dto_1.PlaySoundResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _e : Object, typeof (_f = typeof sound_dto_1.PlaySoundRequestDto !== "undefined" && sound_dto_1.PlaySoundRequestDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], SoundApiController.prototype, "playSound", null);
__decorate([
    (0, common_1.Post)('stop'),
    (0, swagger_1.ApiOperation)({
        summary: '사운드 플레이 종료',
        description: '플레이를 종료합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '사운드 플레이 종료 성공',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], SoundApiController.prototype, "stopSound", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: '사운드 리스트 요청',
        description: '경로 내 플레이가능한 사운드 목록을 반환합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '사운드 리스트 요청 성공',
        type: sound_dto_1.SoundListResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _k : Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], SoundApiController.prototype, "getList", null);
__decorate([
    (0, common_1.Delete)(),
    (0, swagger_1.ApiOperation)({
        summary: '사운드 파일 삭제 요청',
        description: '경로 내 사운드 파일을 삭제합니다. 삭제된 파일은 복구가 안되므로 주의하시기 바랍니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '사운드 파일 삭제 성공',
        type: sound_dto_2.DeleteSoundResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: '서버 에러',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _m : Object, typeof (_o = typeof sound_dto_2.DeleteSoundRequestDto !== "undefined" && sound_dto_2.DeleteSoundRequestDto) === "function" ? _o : Object]),
    __metadata("design:returntype", typeof (_p = typeof Promise !== "undefined" && Promise) === "function" ? _p : Object)
], SoundApiController.prototype, "deleteSound", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: '사운드 파일 추가 요청',
        description: '경로 내 첨부된 사운드 파일을 추가합니다. mp3 파일만 인식합니다. name값이 비어있는 경우 본래 파일이름으로, name값이 있으면 name값으로 파일을 저장합니다.',
    }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
                name: {
                    type: 'string',
                },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: process.env.SOUND_DIR,
            filename: (req, file, callback) => {
                console.log('[UPLOAD]', file);
                const ext = (0, path_1.extname)(file.originalname);
                const filename = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}${ext}`;
                callback(null, filename);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_r = typeof Express !== "undefined" && (_q = Express.Multer) !== void 0 && _q.File) === "function" ? _r : Object, typeof (_s = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _s : Object, String]),
    __metadata("design:returntype", Promise)
], SoundApiController.prototype, "addSoundFile", null);
exports.SoundApiController = SoundApiController = __decorate([
    (0, swagger_1.ApiTags)('사운드 재생 관련 API (sound)'),
    (0, common_1.Controller)('sound'),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], SoundApiController);


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SoundApiService = void 0;
const common_1 = __webpack_require__(8);
const constant_1 = __webpack_require__(65);
const common_2 = __webpack_require__(5);
const microservices_1 = __webpack_require__(3);
const rxjs_1 = __webpack_require__(32);
let SoundApiService = class SoundApiService {
    constructor(settingMicroservice) {
        this.settingMicroservice = settingMicroservice;
        this.loggerService = common_1.LoggerService.get('gateway');
    }
    onModuleInit() {
        this.soundService = this.settingMicroservice.getService('SoundGrpcService');
    }
    async getPlayingStatus() {
        return await (0, rxjs_1.lastValueFrom)(this.soundService.getPlaying({}));
    }
    async playSound(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.soundService.play(dto));
    }
    async stopSound() {
        return await (0, rxjs_1.lastValueFrom)(this.soundService.stop({}));
    }
    async getSoundList() {
        return await (0, rxjs_1.lastValueFrom)(this.soundService.list({}));
    }
    async deleteSound(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.soundService.delete(dto));
    }
};
exports.SoundApiService = SoundApiService;
exports.SoundApiService = SoundApiService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, common_2.Inject)(constant_1.SOUND_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object])
], SoundApiService);


/***/ }),
/* 127 */
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
exports.SoundListResponseDto = exports.DeleteSoundResponseDto = exports.DeleteSoundRequestDto = exports.StopSoundResponseDto = exports.PlaySoundResponseDto = exports.PlaySoundRequestDto = exports.SoundDto = void 0;
const swagger_1 = __webpack_require__(58);
const class_transformer_1 = __webpack_require__(60);
const class_validator_1 = __webpack_require__(61);
var Description;
(function (Description) {
    Description["FILENAME"] = "\uC2E4\uD589/\uC0AD\uC81C\uD560 \uD30C\uC77C\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694. \uD30C\uC77C\uC740 \uC11C\uBC84 \uC2E4\uD589\uACBD\uB85C\uC758 sound \uD3F4\uB354 \uB0B4\uBD80\uC5D0 \uC874\uC7AC\uD574\uC57C\uD569\uB2C8\uB2E4.";
    Description["VOLUME"] = "\uD50C\uB808\uC774 \uC0AC\uC6B4\uB4DC\uC758 \uBCFC\uB968\uC744 \uC785\uB825\uD558\uC138\uC694. \uAC12\uC740 0 ~ 100 (%) \uAC12\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.";
    Description["IS_REPEAT"] = "\uD50C\uB808\uC774\uBC18\uBCF5\uD560 \uD69F\uC218\uB97C \uC785\uB825\uD558\uC138\uC694. 0 \uD639\uC740 1\uC758 \uAC12\uC758 \uACBD\uC6B0 \uBC18\uBCF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
    Description["IS_WAITUNTILDONE"] = "\uC694\uCCAD\uC5D0 \uB300\uD55C \uC751\uB2F5\uC744 \uC5B8\uC81C \uBC1B\uC744 \uAC83\uC778\uC9C0 \uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4. \uAC12\uC774 true\uBA74 \uD50C\uB808\uC774\uAC00 \uC885\uB8CC\uB41C \uD6C4\uC5D0 \uC751\uB2F5\uC744 \uBC1B\uACE0 \uAC12\uC774 false\uBA74 \uD50C\uB808\uC774\uB97C \uAE30\uB2E4\uB9AC\uC9C0 \uC54A\uACE0 \uC2E4\uD589\uACFC \uB3D9\uC2DC\uC5D0 \uBC14\uB85C \uC751\uB2F5\uC744 \uBC1B\uC2B5\uB2C8\uB2E4.";
    Description["RESULT"] = "";
    Description["LIST"] = "\uD30C\uC77C \uC2E4\uD589\uACBD\uB85C\uC758 sound \uD3F4\uB354 \uB0B4\uBD80\uC5D0 \uC874\uC7AC\uD558\uB294 \uBAA8\uB4E0 mp3 \uD30C\uC77C \uB9AC\uC2A4\uD2B8\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4.";
})(Description || (Description = {}));
class SoundDto {
}
exports.SoundDto = SoundDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: Description.FILENAME,
        example: 'test.mp3',
        required: true,
    }),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], SoundDto.prototype, "fileName", void 0);
class PlaySoundRequestDto extends SoundDto {
}
exports.PlaySoundRequestDto = PlaySoundRequestDto;
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        description: Description.VOLUME,
        example: 100,
    }),
    __metadata("design:type", Number)
], PlaySoundRequestDto.prototype, "volume", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        description: Description.IS_REPEAT,
        example: 0,
    }),
    __metadata("design:type", Number)
], PlaySoundRequestDto.prototype, "repeatCount", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value === 'true' || value === true),
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({
        description: Description.IS_WAITUNTILDONE,
        example: true,
    }),
    __metadata("design:type", Boolean)
], PlaySoundRequestDto.prototype, "isWaitUntilDone", void 0);
class PlaySoundResponseDto extends PlaySoundRequestDto {
}
exports.PlaySoundResponseDto = PlaySoundResponseDto;
class StopSoundResponseDto extends PlaySoundRequestDto {
}
exports.StopSoundResponseDto = StopSoundResponseDto;
class DeleteSoundRequestDto extends SoundDto {
}
exports.DeleteSoundRequestDto = DeleteSoundRequestDto;
class DeleteSoundResponseDto extends DeleteSoundRequestDto {
}
exports.DeleteSoundResponseDto = DeleteSoundResponseDto;
class SoundListResponseDto {
}
exports.SoundListResponseDto = SoundListResponseDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({
        description: Description.LIST,
        example: ['test.mp3', 'temp.mp3'],
    }),
    __metadata("design:type", Array)
], SoundListResponseDto.prototype, "list", void 0);


/***/ }),
/* 128 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogApiModule = void 0;
const common_1 = __webpack_require__(5);
const log_api_service_1 = __webpack_require__(129);
const log_api_controller_1 = __webpack_require__(130);
const microservices_1 = __webpack_require__(3);
const path_1 = __webpack_require__(44);
const config_1 = __webpack_require__(74);
const constant_1 = __webpack_require__(65);
let LogApiModule = class LogApiModule {
};
exports.LogApiModule = LogApiModule;
exports.LogApiModule = LogApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.registerAsync([
                {
                    name: constant_1.LOG_SERVICE,
                    inject: [config_1.ConfigService],
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.GRPC,
                        options: {
                            package: 'log',
                            protoPath: (0, path_1.join)(process.cwd(), 'proto', 'log.proto'),
                            url: configService.get('LOG_URL'),
                        },
                    }),
                },
            ]),
        ],
        controllers: [log_api_controller_1.LogApiController],
        providers: [log_api_service_1.LogApiService],
        exports: [],
    })
], LogApiModule);


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogApiService = void 0;
const common_1 = __webpack_require__(8);
const constant_1 = __webpack_require__(65);
const common_2 = __webpack_require__(5);
const microservices_1 = __webpack_require__(3);
const rxjs_1 = __webpack_require__(32);
let LogApiService = class LogApiService {
    constructor(logMicroservice) {
        this.logMicroservice = logMicroservice;
        this.loggerService = common_1.LoggerService.get('gateway');
    }
    onModuleInit() {
        this.logService = this.logMicroservice.getService('SEMLogGrpcService');
    }
    async getAlarmDefinedList(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.logService.getSemAlarmDefine(dto));
    }
    async postAlarmDefine(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.logService.postSemAlarmDefine(dto));
    }
    async deleteAlarmDefine(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.logService.deleteSemAlarmDefine(dto));
    }
    async deleteAlarmDefineAll() {
        await (0, rxjs_1.lastValueFrom)(this.logService.deleteSemAlarmDefineAll({}));
        return;
    }
    async getActiveAlarmList() {
        return await (0, rxjs_1.lastValueFrom)(this.logService.getSemAlarmActive({}));
    }
    async postActiveAlarm(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.logService.semAlarm(dto));
    }
    async deleteActiveAlarm(dto) {
        const resp = await (0, rxjs_1.lastValueFrom)(this.logService.deleteSemAlarm(dto));
        return;
    }
    async deleteActiveAlarmAll() {
        await (0, rxjs_1.lastValueFrom)(this.logService.deleteSemAlarmAll({}));
        return;
    }
    async getAlarmLogList(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.logService.getSemAlarmLog(dto));
    }
    async postAlarmLog(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.logService.postSemAlarmLog(dto));
    }
    async deleteAlarmLog(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.logService.deleteSemAlarmLog(dto));
    }
};
exports.LogApiService = LogApiService;
exports.LogApiService = LogApiService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, common_2.Inject)(constant_1.LOG_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object])
], LogApiService);


/***/ }),
/* 130 */
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogApiController = void 0;
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(58);
const log_api_service_1 = __webpack_require__(129);
const logger_1 = __webpack_require__(33);
const semlog_dto_1 = __webpack_require__(131);
const search_request_1 = __webpack_require__(102);
let LogApiController = class LogApiController {
    constructor(logService) {
        this.logService = logService;
        this.loggerService = logger_1.LoggerService.get('gateway');
    }
    async getAlarmList(dto) {
        return this.logService.getAlarmDefinedList(dto);
    }
    async postAlarmDefine(dto) {
        console.log('postAlarmDefine', dto);
        return this.logService.postAlarmDefine(dto);
    }
    async deleteAlarmDefine(dto) {
        return this.logService.deleteAlarmDefine(dto);
    }
    async deleteAlarmDefineAll() {
        return this.logService.deleteAlarmDefineAll();
    }
    async getActiveAlarmList() {
        return this.logService.getActiveAlarmList();
    }
    async postActiveAlarm(dto) {
        return this.logService.postActiveAlarm(dto);
    }
    async deleteActiveAlarm(dto) {
        return this.logService.deleteActiveAlarm(dto);
    }
    async deleteActiveAlarmAll() {
        return this.logService.deleteActiveAlarmAll();
    }
    async getAlarmLogList(dto) {
        return this.logService.getAlarmLogList(dto);
    }
    async postAlarmLog(dto) {
        return this.logService.postAlarmLog(dto);
    }
    async deleteAlarmLog(dto) {
        return this.logService.deleteAlarmLog(dto);
    }
};
exports.LogApiController = LogApiController;
__decorate([
    (0, common_1.Get)('sem/alarm-define'),
    (0, swagger_1.ApiOperation)({
        summary: '정의된 알람 리스트 요청',
        description: 'SEM프로젝트 전용. 정의되어 있는 알람 리스트를 요청합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '알람 리스트 요청 성공',
        type: semlog_dto_1.SEMAlarmListResponseDto,
        example: {
            list: [
                {
                    code: '2000',
                    detail: '',
                    operationName: 'PROGRAM_START_FAIL',
                    description: '프로그램 시작을 실패했습니다.',
                },
            ],
            totalCount: 1,
            pageSize: 10,
            totalPage: 1,
        },
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof search_request_1.SearchRequestDto !== "undefined" && search_request_1.SearchRequestDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], LogApiController.prototype, "getAlarmList", null);
__decorate([
    (0, common_1.Post)('sem/alarm-define'),
    (0, swagger_1.ApiOperation)({
        summary: '정의된 알람 추가(테스트)',
        description: 'SEM프로젝트 전용. 정의되어 있는 알람을 추가합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '알람 추가 요청 성공',
        type: semlog_dto_1.SEMAlarm,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof semlog_dto_1.SEMAlarm !== "undefined" && semlog_dto_1.SEMAlarm) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], LogApiController.prototype, "postAlarmDefine", null);
__decorate([
    (0, common_1.Delete)('sem/alarm-define'),
    (0, swagger_1.ApiOperation)({
        summary: '정의된 알람 삭제',
        description: 'SEM프로젝트 전용. 정의되어 있는 알람을 삭제합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '알람 삭제 요청 성공',
        type: semlog_dto_1.SEMAlarm,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof semlog_dto_1.DeleteAlarmDefineRequestDto !== "undefined" && semlog_dto_1.DeleteAlarmDefineRequestDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], LogApiController.prototype, "deleteAlarmDefine", null);
__decorate([
    (0, common_1.Delete)('sem/alarm-define/all'),
    (0, swagger_1.ApiOperation)({
        summary: '정의된 알람 전부 삭제',
        description: 'SEM프로젝트 전용. 정의되어 있는 알람을 전부 삭제합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '알람 전부 삭제 요청 성공',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], LogApiController.prototype, "deleteAlarmDefineAll", null);
__decorate([
    (0, common_1.Get)('sem/alarm-active'),
    (0, swagger_1.ApiOperation)({
        summary: '활성화된 알람 리스트 요청',
        description: 'SEM프로젝트 전용. 활성화된 알람 리스트를 요청합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '활성화된 알람 리스트 요청 성공',
        type: semlog_dto_1.SEMAlarmActiveResponseDto,
        example: {
            list: [
                {
                    code: '2000',
                    detail: '',
                    operationName: 'PROGRAM_START_FAIL',
                    description: '프로그램 시작을 실패했습니다.',
                },
            ],
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], LogApiController.prototype, "getActiveAlarmList", null);
__decorate([
    (0, common_1.Post)('sem/alarm-active'),
    (0, swagger_1.ApiOperation)({
        summary: '활성화된 알람 추가',
        description: 'SEM프로젝트 전용. 활성화된 알람을 추가합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '활성화된 알람 추가 성공',
        type: semlog_dto_1.SEMAlarm,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof semlog_dto_1.PostSEMAlarmRequestDto !== "undefined" && semlog_dto_1.PostSEMAlarmRequestDto) === "function" ? _k : Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], LogApiController.prototype, "postActiveAlarm", null);
__decorate([
    (0, common_1.Delete)('sem/alarm-active'),
    (0, swagger_1.ApiOperation)({
        summary: '활성화된 알람 삭제',
        description: 'SEM프로젝트 전용. 활성화된 알람을 삭제합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '활성화된 알람 삭제 성공',
        example: {},
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof semlog_dto_1.DeleteSEMAlarmRequestDto !== "undefined" && semlog_dto_1.DeleteSEMAlarmRequestDto) === "function" ? _m : Object]),
    __metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], LogApiController.prototype, "deleteActiveAlarm", null);
__decorate([
    (0, common_1.Delete)('sem/alarm-active/all'),
    (0, swagger_1.ApiOperation)({
        summary: '활성화된 알람 전부 삭제',
        description: 'SEM프로젝트 전용. 활성화된 알람을 전부 삭제합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '활성화된 알람 전부 삭제 성공',
        example: {},
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_p = typeof Promise !== "undefined" && Promise) === "function" ? _p : Object)
], LogApiController.prototype, "deleteActiveAlarmAll", null);
__decorate([
    (0, common_1.Get)('sem/alarm'),
    (0, swagger_1.ApiOperation)({
        summary: '알람 로그 리스트 요청',
        description: 'SEM프로젝트 전용. 알람 로그 리스트를 요청합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '알람 로그 리스트 요청 성공',
        type: semlog_dto_1.SEMAlarmLogResponseDto,
        example: {
            list: [
                {
                    code: '2000',
                    detail: '',
                    operationName: 'PROGRAM_START_FAIL',
                    description: '프로그램 시작을 실패했습니다.',
                    state: 'START',
                    createAt: '2025-01-01 00:00:00',
                },
                {
                    code: '2000',
                    detail: '',
                    operationName: 'PROGRAM_START_FAIL',
                    description: '프로그램 시작을 실패했습니다.',
                    state: 'END',
                    createAt: '2025-01-01 00:00:10',
                },
            ],
            totalCount: 1,
            pageSize: 10,
            totalPage: 1,
        },
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_q = typeof search_request_1.SearchRequestDto !== "undefined" && search_request_1.SearchRequestDto) === "function" ? _q : Object]),
    __metadata("design:returntype", typeof (_r = typeof Promise !== "undefined" && Promise) === "function" ? _r : Object)
], LogApiController.prototype, "getAlarmLogList", null);
__decorate([
    (0, common_1.Post)('sem/alarm'),
    (0, swagger_1.ApiOperation)({
        summary: '알람 로그 저장',
        description: 'SEM프로젝트 전용. 알람 로그를 저장합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '알람 로그 저장 성공',
        type: semlog_dto_1.SaveSEMAlarmLogResponseDto,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_s = typeof semlog_dto_1.SaveSEMAlarmLogRequestDto !== "undefined" && semlog_dto_1.SaveSEMAlarmLogRequestDto) === "function" ? _s : Object]),
    __metadata("design:returntype", typeof (_t = typeof Promise !== "undefined" && Promise) === "function" ? _t : Object)
], LogApiController.prototype, "postAlarmLog", null);
__decorate([
    (0, common_1.Delete)('sem/alarm'),
    (0, swagger_1.ApiOperation)({
        summary: '알람 로그 삭제',
        description: 'SEM프로젝트 전용. 알람 로그를 삭제합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '알람 로그 삭제 성공',
        example: {},
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_u = typeof semlog_dto_1.DeleteSEMAlarmRequestDto !== "undefined" && semlog_dto_1.DeleteSEMAlarmRequestDto) === "function" ? _u : Object]),
    __metadata("design:returntype", typeof (_v = typeof Promise !== "undefined" && Promise) === "function" ? _v : Object)
], LogApiController.prototype, "deleteAlarmLog", null);
exports.LogApiController = LogApiController = __decorate([
    (0, swagger_1.ApiTags)('로그 API'),
    (0, common_1.Controller)('log'),
    __metadata("design:paramtypes", [typeof (_a = typeof log_api_service_1.LogApiService !== "undefined" && log_api_service_1.LogApiService) === "function" ? _a : Object])
], LogApiController);


/***/ }),
/* 131 */
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
exports.SEMGeneralLogRequestDto = exports.SaveSEMAlarmLogResponseDto = exports.SaveSEMAlarmLogRequestDto = exports.DeleteSEMAlarmRequestDto = exports.SEMAlarmActiveResponseDto = exports.SEMAlarmLogResponseDto = exports.SEMAlarmLogListRequestDto = exports.PostSEMAlarmRequestDto = exports.DeleteAlarmDefineRequestDto = exports.SEMAlarmListResponseDto = exports.SEMAlamrListRequestDto = exports.SEMAlarmLog = exports.SEMAlarm = exports.SEMAlarmActive = void 0;
const pagination_1 = __webpack_require__(104);
const swagger_1 = __webpack_require__(58);
const class_validator_1 = __webpack_require__(61);
const class_validator_2 = __webpack_require__(61);
const class_transformer_1 = __webpack_require__(60);
var Description;
(function (Description) {
    Description["ALARM_CODE"] = "\uC54C\uB78C \uCF54\uB4DC";
    Description["ALARM_DETAIL"] = "\uC54C\uB78C \uC0C1\uC138";
    Description["OPERATION_NAME"] = "\uC791\uC5C5 \uC774\uB984";
    Description["DESCRIPTION"] = "\uC124\uBA85";
    Description["LIST"] = "\uC54C\uB78C \uB9AC\uC2A4\uD2B8";
    Description["ALARM_STATE"] = "\uC54C\uB78C \uC0C1\uD0DC. \uB2E8\uBC1C\uC801\uC778 \uC54C\uB78C\uC758 \uACBD\uC6B0 SET \uAC12\uC744, \uC54C\uB78C \uBC1C\uC0DD/\uD574\uC81C\uAC00 \uC874\uC7AC\uD558\uB294 \uACBD\uC6B0 START/END \uAC12\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.";
    Description["ALARM_TIME"] = "\uC54C\uB78C \uBC1C\uC0DD \uC2DC\uAC04";
    Description["DATE_FROM"] = "\uC54C\uB78C \uC2DC\uC791 \uB0A0\uC9DC. \uD615\uC2DD\uC740 yyyy-mm-dd hh:mm:ss\uD615\uC2DD\uC73C\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.";
    Description["DATE_TO"] = "\uC54C\uB78C \uC885\uB8CC \uB0A0\uC9DC. \uD615\uC2DD\uC740 yyyy-mm-dd hh:mm:ss\uD615\uC2DD\uC73C\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.";
})(Description || (Description = {}));
class SEMAlarmActive {
}
exports.SEMAlarmActive = SEMAlarmActive;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_CODE,
        example: 2000,
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SEMAlarmActive.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_STATE,
        example: 'SET',
        required: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.Length)(1, 50),
    __metadata("design:type", String)
], SEMAlarmActive.prototype, "state", void 0);
class SEMAlarm {
}
exports.SEMAlarm = SEMAlarm;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_CODE,
        example: 2000,
        required: true,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], SEMAlarm.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_DETAIL,
        example: '',
        required: false,
    }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SEMAlarm.prototype, "detail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.OPERATION_NAME,
        example: 'PROGRAM_START_FAIL',
        required: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.Length)(1, 50),
    __metadata("design:type", String)
], SEMAlarm.prototype, "operationName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.DESCRIPTION,
        example: '프로그램 시작을 실패했습니다.',
        required: false,
    }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SEMAlarm.prototype, "description", void 0);
class SEMAlarmLog extends SEMAlarm {
}
exports.SEMAlarmLog = SEMAlarmLog;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_STATE,
        example: 'SET',
        required: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SEMAlarmLog.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_TIME,
        example: '2021-01-01 00:00:00',
        required: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_2.Length)(1, 50),
    __metadata("design:type", String)
], SEMAlarmLog.prototype, "createAt", void 0);
class SEMAlamrListRequestDto extends pagination_1.PaginationRequest {
}
exports.SEMAlamrListRequestDto = SEMAlamrListRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_CODE,
        example: 2000,
        required: true,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], SEMAlamrListRequestDto.prototype, "code", void 0);
class SEMAlarmListResponseDto extends pagination_1.PaginationResponse {
}
exports.SEMAlarmListResponseDto = SEMAlarmListResponseDto;
class DeleteAlarmDefineRequestDto {
}
exports.DeleteAlarmDefineRequestDto = DeleteAlarmDefineRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_CODE,
        example: 2000,
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DeleteAlarmDefineRequestDto.prototype, "code", void 0);
class PostSEMAlarmRequestDto {
}
exports.PostSEMAlarmRequestDto = PostSEMAlarmRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_CODE,
        example: 2000,
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PostSEMAlarmRequestDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_STATE,
        example: 'START',
        required: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.Length)(1, 50),
    __metadata("design:type", String)
], PostSEMAlarmRequestDto.prototype, "state", void 0);
class SEMAlarmLogListRequestDto extends pagination_1.PaginationRequest {
}
exports.SEMAlarmLogListRequestDto = SEMAlarmLogListRequestDto;
class SEMAlarmLogResponseDto extends pagination_1.PaginationResponse {
}
exports.SEMAlarmLogResponseDto = SEMAlarmLogResponseDto;
class SEMAlarmActiveResponseDto {
}
exports.SEMAlarmActiveResponseDto = SEMAlarmActiveResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.LIST,
        example: [
            {
                code: '2000',
                state: 'START',
            },
        ],
        required: true,
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], SEMAlarmActiveResponseDto.prototype, "list", void 0);
class DeleteSEMAlarmRequestDto {
}
exports.DeleteSEMAlarmRequestDto = DeleteSEMAlarmRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_CODE,
        example: 2000,
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], DeleteSEMAlarmRequestDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.DATE_FROM,
        example: '2025-01-01 00:00:00',
        required: false,
    }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_2.Length)(1, 50),
    __metadata("design:type", String)
], DeleteSEMAlarmRequestDto.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.DATE_TO,
        example: '2025-12-31 23:59:59',
        required: false,
    }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_2.Length)(1, 50),
    __metadata("design:type", String)
], DeleteSEMAlarmRequestDto.prototype, "dateTo", void 0);
class SaveSEMAlarmLogRequestDto {
}
exports.SaveSEMAlarmLogRequestDto = SaveSEMAlarmLogRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_CODE,
        example: 2000,
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SaveSEMAlarmLogRequestDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ALARM_STATE,
        example: 'SET',
        required: true,
    }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.Length)(1, 50),
    __metadata("design:type", String)
], SaveSEMAlarmLogRequestDto.prototype, "state", void 0);
class SaveSEMAlarmLogResponseDto extends SaveSEMAlarmLogRequestDto {
}
exports.SaveSEMAlarmLogResponseDto = SaveSEMAlarmLogResponseDto;
class SEMGeneralLogRequestDto {
}
exports.SEMGeneralLogRequestDto = SEMGeneralLogRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '일반LOG를 읽어올 시작 날짜를 입력해주세요. 날짜의 형식은 yyyy-mm-dd hh:mm:ss형식으로 입력해주세요.',
        example: '2025-01-01 00:00:00',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.Length)(1, 50),
    __metadata("design:type", String)
], SEMGeneralLogRequestDto.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '일반LOG를 읽어올 종료 날짜를 입력해주세요. 날짜의 형식은 yyyy-mm-dd hh:mm:ss형식으로 입력해주세요.',
        example: '2025-12-31 23:59:59',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.Length)(1, 50),
    __metadata("design:type", String)
], SEMGeneralLogRequestDto.prototype, "dateFrom", void 0);


/***/ }),
/* 132 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateApiModule = void 0;
const common_1 = __webpack_require__(5);
const update_api_service_1 = __webpack_require__(133);
const update_api_controller_1 = __webpack_require__(136);
const config_1 = __webpack_require__(74);
const microservices_1 = __webpack_require__(3);
const common_2 = __webpack_require__(8);
const path_1 = __webpack_require__(44);
const constant_1 = __webpack_require__(65);
let UpdateApiModule = class UpdateApiModule {
};
exports.UpdateApiModule = UpdateApiModule;
exports.UpdateApiModule = UpdateApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            microservices_1.ClientsModule.registerAsync([
                {
                    name: constant_1.UPDATE_SERVICE,
                    inject: [config_1.ConfigService],
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.GRPC,
                        options: {
                            package: common_2.UpdateMicroservice.protobufPackage,
                            protoPath: (0, path_1.join)(process.cwd(), 'proto/update.proto'),
                            url: configService.get('UPDATE_GRPC_URL'),
                        },
                    }),
                },
            ]),
        ],
        controllers: [update_api_controller_1.UpdateApiController],
        providers: [update_api_service_1.UpdateApiService],
    })
], UpdateApiModule);


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateApiService = void 0;
const common_1 = __webpack_require__(5);
const path = __webpack_require__(44);
const os_1 = __webpack_require__(134);
const fs = __webpack_require__(43);
const child_process_1 = __webpack_require__(135);
const config_1 = __webpack_require__(74);
const common_2 = __webpack_require__(8);
const microservices_1 = __webpack_require__(3);
const constant_1 = __webpack_require__(65);
const rxjs_1 = __webpack_require__(32);
let UpdateApiService = class UpdateApiService {
    constructor(configService, updateMicroservice) {
        this.configService = configService;
        this.updateMicroservice = updateMicroservice;
        this.loggerService = common_2.LoggerService.get('file');
    }
    onModuleInit() {
        console.log(this.configService.get('RELEASE_REPO_URL'));
        this.updateService = this.updateMicroservice.getService('UpdateGrpcService');
    }
    async pingSendToTarget(target) {
        const data = await (0, rxjs_1.lastValueFrom)(this.updateService.testPing({ target }));
        console.log(data);
        return data;
    }
    async getNewVersion(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.updateService.getNewVersion(dto));
    }
    async getCurrentVersion(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.updateService.getCurrentVersion(dto));
    }
    async getReleaseAppsBranches(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.updateService.getReleaseBranch({ token: dto.token, pageNo: dto.pageNo, pageSize: dto.pageSize }));
    }
    async getReleaseAppsVersionList(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.updateService.getReleaseVersion({ software: dto.software, token: dto.token, branch: dto.branch }));
    }
    async updateSoftware(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.updateService.updateProgram(dto));
    }
    rrsUpdate({ branch, version } = {}) {
        const updateScript = path.join((0, os_1.homedir)(), `rainbow-deploy-kit/rrs-server`, 'rrs-update.sh');
        const rainbowDeployKitDir = path.join((0, os_1.homedir)(), 'rainbow-deploy-kit');
        if (!fs.existsSync(updateScript)) {
            this.loggerService.error(`[UPDATE] rrsUpdate: ${updateScript} 파일을 찾을 수 없습니다.`);
            throw new common_1.NotFoundException({
                message: `~/rainbow-deploy-kit/rrs-server/rrs-update.sh 파일을 찾을 수 없습니다.`,
            });
        }
        (0, child_process_1.execSync)('git pull', {
            cwd: rainbowDeployKitDir,
            stdio: 'pipe',
        });
        (0, child_process_1.exec)(`nohup bash ${updateScript} --mode=${branch || 'main'} --version=${version} > /tmp/rrs-update.log 2>&1 &`);
        return { applyReqUpdate: true, version: version || '', rejectReason: '' };
    }
    otherSwUpdate({ branch, version } = {}) {
        return new Promise((resolve, reject) => {
            reject(new common_1.GatewayTimeoutException('프로그램이 연결되지 않았습니다'));
        });
    }
    async webUIAppAdd({ appNames, branch, fo }) {
        const appAddScript = path.join((0, os_1.homedir)(), `rainbow-deploy-kit/web-ui`, 'fe-add-app.sh');
        const rainbowDeployKitDir = path.join((0, os_1.homedir)(), 'rainbow-deploy-kit');
        if (!fs.existsSync(appAddScript)) {
            throw new common_1.NotFoundException({
                message: `~/rainbow-deploy-kit/web-ui/fe-add-app.sh 파일을 찾을 수 없습니다.`,
            });
        }
        try {
            (0, child_process_1.execSync)('git pull', {
                cwd: rainbowDeployKitDir,
                stdio: 'pipe',
            });
            (0, child_process_1.execSync)(`bash ${appAddScript}${branch ? ` --mode=${branch}` : ''}${fo ? ` --fo=${fo}` : ''} ${appNames.join(' ')}`);
            return { appNames, branch, fo };
        }
        catch (error) {
            throw new common_1.BadRequestException({
                message: error.message,
            });
        }
    }
    async webUIAppDelete({ appNames }) {
        const appDeleteScript = path.join((0, os_1.homedir)(), `rainbow-deploy-kit/web-ui`, 'fe-delete-app.sh');
        const rainbowDeployKitDir = path.join((0, os_1.homedir)(), 'rainbow-deploy-kit');
        if (!fs.existsSync(appDeleteScript)) {
            throw new common_1.NotFoundException({
                message: `~/rainbow-deploy-kit/web-ui/fe-delete-app.sh 파일을 찾을 수 없습니다.`,
            });
        }
        try {
            (0, child_process_1.execSync)('git pull', {
                cwd: rainbowDeployKitDir,
                stdio: 'pipe',
            });
            (0, child_process_1.execSync)(`bash ${appDeleteScript} ${appNames.join(' ')}`);
            return { appNames };
        }
        catch (error) {
            throw new common_1.BadRequestException({
                message: error.message,
            });
        }
    }
};
exports.UpdateApiService = UpdateApiService;
exports.UpdateApiService = UpdateApiService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(constant_1.UPDATE_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _b : Object])
], UpdateApiService);


/***/ }),
/* 134 */
/***/ ((module) => {

module.exports = require("os");

/***/ }),
/* 135 */
/***/ ((module) => {

module.exports = require("child_process");

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateApiController = void 0;
const common_1 = __webpack_require__(5);
const update_api_service_1 = __webpack_require__(133);
const swagger_1 = __webpack_require__(58);
const update_dto_1 = __webpack_require__(137);
const etc_dto_1 = __webpack_require__(138);
const version_dto_1 = __webpack_require__(139);
const pagination_response_1 = __webpack_require__(105);
const version_dto_2 = __webpack_require__(139);
let UpdateApiController = class UpdateApiController {
    constructor(updateService) {
        this.updateService = updateService;
    }
    pingSendToTarget({ target }) {
        return this.updateService.pingSendToTarget(target);
    }
    getNewVersion(dto) {
        return this.updateService.getNewVersion(dto);
    }
    getCurrentVersion(dto) {
        return this.updateService.getCurrentVersion(dto);
    }
    getReleaseAppsBranches(params) {
        return this.updateService.getReleaseAppsBranches(params);
    }
    getReleaseAppsVersionList(dto) {
        return this.updateService.getReleaseAppsVersionList(dto);
    }
    webUIAppAdd(webUIAppAddDto) {
        return this.updateService.webUIAppAdd(webUIAppAddDto);
    }
    updateSoftware(reqUpdateSoftwareDto) {
        return this.updateService.updateSoftware(reqUpdateSoftwareDto);
    }
    webUIAppDelete(webUIAppDeleteDto) {
        return this.updateService.webUIAppDelete(webUIAppDeleteDto);
    }
};
exports.UpdateApiController = UpdateApiController;
__decorate([
    (0, common_1.Get)('ping'),
    (0, swagger_1.ApiOperation)({
        summary: '핑 테스트',
        description: '핑 테스트를 요청합니다. 타겟 호스트에 ping을 1회 전송합니다. ',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '핑 테스트 성공',
        type: etc_dto_1.PingSendToTargetResponseDto,
    }),
    (0, swagger_1.ApiBadGatewayResponse)({
        description: '외부망에 접근할 수 없습니다.',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof etc_dto_1.PingSendToTargetDto !== "undefined" && etc_dto_1.PingSendToTargetDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UpdateApiController.prototype, "pingSendToTarget", null);
__decorate([
    (0, common_1.Get)('new-version'),
    (0, swagger_1.ApiOperation)({
        summary: '소프트웨어 새로운 버전 조회',
        description: '소프트웨어 새로운 버전을 조회합니다. 위부망 접속이 안될 환경시 400 에러가 발생합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '소프트웨어 새로운 버전 조회 성공',
        type: version_dto_1.GetNewVersionResponseDto,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: '입력한 소프트웨어 또는 브랜치가 존재하지 않습니다.',
    }),
    (0, swagger_1.ApiBadGatewayResponse)({
        description: '외부망에 접근할 수 없습니다.',
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: '소프트웨어 또는 브랜치 값이 입력되지 않았습니다.',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof version_dto_2.GetNewVersionRequestDto !== "undefined" && version_dto_2.GetNewVersionRequestDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], UpdateApiController.prototype, "getNewVersion", null);
__decorate([
    (0, common_1.Get)('current-version'),
    (0, swagger_1.ApiOperation)({
        summary: '소프트웨어 현재 버전 조회',
        description: '소프트웨어 현재 버전을 조회합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '소프트웨어 현재 버전 조회 성공',
        type: version_dto_1.GetCurrentVersionResponseDto,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof version_dto_1.GetCurrentVersionRequestDto !== "undefined" && version_dto_1.GetCurrentVersionRequestDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], UpdateApiController.prototype, "getCurrentVersion", null);
__decorate([
    (0, common_1.Get)('release-apps/branches'),
    (0, swagger_1.ApiOperation)({
        summary: 'rainbow-release-apps 레포지토리의 브랜치 조회',
        description: 'rainbow-release-apps 레포지토리의 브랜치를 조회합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'rainbow-release-apps 레포지토리의 브랜치 조회 성공',
        type: (pagination_response_1.PaginationResponse),
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof update_dto_1.GetReleaseAppsBranchesRequestDto !== "undefined" && update_dto_1.GetReleaseAppsBranchesRequestDto) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], UpdateApiController.prototype, "getReleaseAppsBranches", null);
__decorate([
    (0, common_1.Get)('release-apps/version-list'),
    (0, swagger_1.ApiOperation)({
        summary: 'rainbow-release-apps 레포지토리의 버전 조회',
        description: 'rainbow-release-apps 레포지토리의 버전을 조회합니다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'rainbow-release-apps 레포지토리의 버전 조회 성공',
        type: [update_dto_1.ResponseReleaseVersionInfoDto],
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof update_dto_1.GetReleaseAppsVersionListRequestDto !== "undefined" && update_dto_1.GetReleaseAppsVersionListRequestDto) === "function" ? _k : Object]),
    __metadata("design:returntype", void 0)
], UpdateApiController.prototype, "getReleaseAppsVersionList", null);
__decorate([
    (0, common_1.Post)('web-ui/app/add'),
    (0, swagger_1.ApiOperation)({
        summary: '웹 UI 앱 추가',
        description: '웹 UI 앱을 추가합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '웹 UI 앱 추가 성공',
        type: update_dto_1.ResponseWebUIAppAddDto,
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: '웹 UI 앱 추가 실패',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: '웹 UI 앱 추가 스크립트 파일을 찾을 수 없습니다.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof update_dto_1.WebUIAppAddDto !== "undefined" && update_dto_1.WebUIAppAddDto) === "function" ? _l : Object]),
    __metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], UpdateApiController.prototype, "webUIAppAdd", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: '소프트웨어 업데이트',
        description: '소프트웨어 업데이트를 요청합니다.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_o = typeof update_dto_1.UpdateRequestDto !== "undefined" && update_dto_1.UpdateRequestDto) === "function" ? _o : Object]),
    __metadata("design:returntype", void 0)
], UpdateApiController.prototype, "updateSoftware", null);
__decorate([
    (0, common_1.Delete)('web-ui/app/delete'),
    (0, swagger_1.ApiOperation)({
        summary: '웹 UI 앱 삭제',
        description: '웹 UI 앱을 삭제합니다.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '웹 UI 앱 삭제 성공',
        type: update_dto_1.ResponseWebUIAppDeleteDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: '웹 UI 앱 삭제 실패',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: '웹 UI 앱 삭제 스크립트 파일을 찾을 수 없습니다.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_p = typeof update_dto_1.WebUIAppDeleteDto !== "undefined" && update_dto_1.WebUIAppDeleteDto) === "function" ? _p : Object]),
    __metadata("design:returntype", void 0)
], UpdateApiController.prototype, "webUIAppDelete", null);
exports.UpdateApiController = UpdateApiController = __decorate([
    (0, swagger_1.ApiTags)('업데이트 관련 API (update)'),
    (0, common_1.Controller)('update'),
    __metadata("design:paramtypes", [typeof (_a = typeof update_api_service_1.UpdateApiService !== "undefined" && update_api_service_1.UpdateApiService) === "function" ? _a : Object])
], UpdateApiController);


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResponseWebUIAppDeleteDto = exports.ResponseWebUIAppAddDto = exports.WebUIAppDeleteDto = exports.WebUIAppAddDto = exports.UpdateResponseSocketDto = exports.UpdateRequestSocketDto = exports.UpdateRequestDto = exports.ResponseReleaseVersionInfoDto = exports.GetReleaseAppsVersionListRequestDto = exports.GetReleaseAppBranchesResponseDto = exports.ResponseReleaseAppsBranches = exports.GetReleaseAppsBranchesRequestDto = exports.CommitDto = exports.GetSoftwareParamDto = void 0;
const pagination_1 = __webpack_require__(104);
const util_1 = __webpack_require__(37);
const swagger_1 = __webpack_require__(58);
const class_transformer_1 = __webpack_require__(60);
const class_validator_1 = __webpack_require__(61);
var Description;
(function (Description) {
    Description["SOFTWARE"] = "\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC885\uB958 (\uC608: rrs, slamnav2)";
    Description["BRANCH"] = "\uBE0C\uB79C\uCE58 \uC774\uB984";
    Description["TOKEN"] = "\uC554\uD638\uD654\uB41C token";
    Description["ID"] = "\uC694\uCCAD\uC5D0 \uB300\uD55C ID \uAC12. \uC11C\uBC84\uC5D0\uC11C \uC790\uB3D9\uC0DD\uC131\uB418\uBA70 \uC751\uB2F5\uC5D0 \uB3D9\uC77C\uD55C ID \uAC12 \uBC18\uD658 \uD544\uC694.";
    Description["VERSION"] = "version \uC815\uBCF4";
    Description["RESULT"] = "\uC5C5\uB370\uC774\uD2B8 \uACB0\uACFC";
    Description["MESSAGE"] = "\uC5C5\uB370\uC774\uD2B8 \uBA54\uC2DC\uC9C0";
})(Description || (Description = {}));
class GetSoftwareParamDto {
}
exports.GetSoftwareParamDto = GetSoftwareParamDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        description: '소프트웨어 종류 (예: rrs, slamnav2)',
        example: 'slamnav2',
    }),
    __metadata("design:type", String)
], GetSoftwareParamDto.prototype, "software", void 0);
class CommitDto {
}
exports.CommitDto = CommitDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'commit sha',
        example: 'ae601391564b381ee8d2271e9b4b79a632894016',
    }),
    __metadata("design:type", String)
], CommitDto.prototype, "sha", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'commit url',
        example: 'https://github.com/rainbow-mobile/rainbow-release-apps/commit/ae601391564b381ee8d2271e9b4b79a632894016',
    }),
    __metadata("design:type", String)
], CommitDto.prototype, "url", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'commit name',
    }),
    __metadata("design:type", String)
], CommitDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'commit protected',
    }),
    __metadata("design:type", Boolean)
], CommitDto.prototype, "protected", void 0);
class GetReleaseAppsBranchesRequestDto extends pagination_1.PaginationRequest {
}
exports.GetReleaseAppsBranchesRequestDto = GetReleaseAppsBranchesRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.TOKEN,
        default: '3bJyXEJA/FvAYWnbAIsj6T96+217WeqR4HpdmuNTGcG/dzYaOLjjWkz3bjR1NGYQqj8nMS8A6N91bnaCTveF0Q==',
    }),
    __metadata("design:type", String)
], GetReleaseAppsBranchesRequestDto.prototype, "token", void 0);
class ResponseReleaseAppsBranches {
}
exports.ResponseReleaseAppsBranches = ResponseReleaseAppsBranches;
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'commit',
        type: CommitDto,
    }),
    __metadata("design:type", CommitDto)
], ResponseReleaseAppsBranches.prototype, "commit", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.BRANCH,
    }),
    __metadata("design:type", String)
], ResponseReleaseAppsBranches.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.BRANCH,
    }),
    __metadata("design:type", Boolean)
], ResponseReleaseAppsBranches.prototype, "protected", void 0);
class GetReleaseAppBranchesResponseDto extends pagination_1.PaginationResponse {
}
exports.GetReleaseAppBranchesResponseDto = GetReleaseAppBranchesResponseDto;
class GetReleaseAppsVersionListRequestDto {
}
exports.GetReleaseAppsVersionListRequestDto = GetReleaseAppsVersionListRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.TOKEN,
        default: '3bJyXEJA/FvAYWnbAIsj6T96+217WeqR4HpdmuNTGcG/dzYaOLjjWkz3bjR1NGYQqj8nMS8A6N91bnaCTveF0Q==',
    }),
    __metadata("design:type", String)
], GetReleaseAppsVersionListRequestDto.prototype, "token", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.BRANCH,
        example: 'main',
    }),
    __metadata("design:type", String)
], GetReleaseAppsVersionListRequestDto.prototype, "branch", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.SOFTWARE,
        example: 'slamnav2',
    }),
    __metadata("design:type", String)
], GetReleaseAppsVersionListRequestDto.prototype, "software", void 0);
class ResponseReleaseVersionInfoDto {
}
exports.ResponseReleaseVersionInfoDto = ResponseReleaseVersionInfoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.BRANCH,
    }),
    __metadata("design:type", String)
], ResponseReleaseVersionInfoDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'version path',
    }),
    __metadata("design:type", String)
], ResponseReleaseVersionInfoDto.prototype, "path", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'version sha',
    }),
    __metadata("design:type", String)
], ResponseReleaseVersionInfoDto.prototype, "sha", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'version size',
    }),
    __metadata("design:type", Number)
], ResponseReleaseVersionInfoDto.prototype, "size", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'version url',
    }),
    __metadata("design:type", String)
], ResponseReleaseVersionInfoDto.prototype, "url", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'version download url',
    }),
    __metadata("design:type", String)
], ResponseReleaseVersionInfoDto.prototype, "download_url", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'version links',
    }),
    __metadata("design:type", Object)
], ResponseReleaseVersionInfoDto.prototype, "_links", void 0);
class UpdateRequestDto {
}
exports.UpdateRequestDto = UpdateRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.SOFTWARE,
        example: 'slamnav2',
    }),
    __metadata("design:type", String)
], UpdateRequestDto.prototype, "software", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.BRANCH,
        example: 'main',
    }),
    __metadata("design:type", String)
], UpdateRequestDto.prototype, "branch", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.VERSION,
        example: '1.0.0',
    }),
    __metadata("design:type", String)
], UpdateRequestDto.prototype, "version", void 0);
class UpdateRequestSocketDto extends UpdateRequestDto {
}
exports.UpdateRequestSocketDto = UpdateRequestSocketDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.ID,
        example: util_1.UrlUtil.generateUUID(),
    }),
    __metadata("design:type", String)
], UpdateRequestSocketDto.prototype, "id", void 0);
class UpdateResponseSocketDto extends UpdateRequestSocketDto {
}
exports.UpdateResponseSocketDto = UpdateResponseSocketDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.RESULT,
        example: 'true',
    }),
    __metadata("design:type", String)
], UpdateResponseSocketDto.prototype, "result", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.MESSAGE,
        example: '업데이트 완료',
    }),
    __metadata("design:type", String)
], UpdateResponseSocketDto.prototype, "message", void 0);
class WebUIAppAddDto {
}
exports.WebUIAppAddDto = WebUIAppAddDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '앱 이름 배열',
        example: ['app1', 'app2'],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], WebUIAppAddDto.prototype, "appNames", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '브랜치 이름',
        example: 'main',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], WebUIAppAddDto.prototype, "branch", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '로봇 UI에 노출할 첫페이지 URL',
        example: '/S100',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], WebUIAppAddDto.prototype, "fo", void 0);
class WebUIAppDeleteDto {
}
exports.WebUIAppDeleteDto = WebUIAppDeleteDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '앱 이름 배열',
        example: ['app1', 'app2'],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], WebUIAppDeleteDto.prototype, "appNames", void 0);
class ResponseWebUIAppAddDto {
}
exports.ResponseWebUIAppAddDto = ResponseWebUIAppAddDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '추가한 앱 이름 배열',
        example: ['app1', 'app2'],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], ResponseWebUIAppAddDto.prototype, "appNames", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '브랜치 이름',
        example: 'main',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ResponseWebUIAppAddDto.prototype, "branch", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '로봇 UI에 노출할 첫페이지 URL',
        example: '/S100',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ResponseWebUIAppAddDto.prototype, "fo", void 0);
class ResponseWebUIAppDeleteDto {
}
exports.ResponseWebUIAppDeleteDto = ResponseWebUIAppDeleteDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '삭제한 앱 이름 배열',
        example: ['app1', 'app2'],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], ResponseWebUIAppDeleteDto.prototype, "appNames", void 0);


/***/ }),
/* 138 */
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
exports.CurVersionDto = exports.NewVersionGitDto = exports.PingSendToTargetResponseDto = exports.PingSendToTargetDto = void 0;
const class_validator_1 = __webpack_require__(61);
const swagger_1 = __webpack_require__(58);
var Description;
(function (Description) {
    Description["SOFTWARE"] = "\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC885\uB958 (\uC608: rrs, slamnav2)";
})(Description || (Description = {}));
class PingSendToTargetDto {
}
exports.PingSendToTargetDto = PingSendToTargetDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: '타겟 호스트',
        default: '192.168.1.1',
    }),
    __metadata("design:type", String)
], PingSendToTargetDto.prototype, "target", void 0);
class PingSendToTargetResponseDto extends PingSendToTargetDto {
}
exports.PingSendToTargetResponseDto = PingSendToTargetResponseDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: '타겟 호스트에 5번 ping 전송 결과',
        default: '요청에 성공했습니다.',
    }),
    __metadata("design:type", String)
], PingSendToTargetResponseDto.prototype, "message", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'ping 결과 stdout',
        default: 'PING 192.168.1.1 (192.168.1.1) 56(84) bytes of data.\n64 bytes from 192.168.1.1: icmp_seq=1 ttl=254 time=1.87 ms\n\n--- 192.168.1.1 ping statistics ---\n1 packets transmitted, 1 received, 0% packet loss, time 0ms\nrtt min/avg/max/mdev = 1.874/1.874/1.874/0.000 ms\n',
    }),
    __metadata("design:type", String)
], PingSendToTargetResponseDto.prototype, "stdout", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: 'ping 결과 stderr',
        default: '',
    }),
    __metadata("design:type", String)
], PingSendToTargetResponseDto.prototype, "stderr", void 0);
class NewVersionGitDto {
}
exports.NewVersionGitDto = NewVersionGitDto;
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: '핫픽스 여부',
        default: false,
    }),
    __metadata("design:type", Boolean)
], NewVersionGitDto.prototype, "hotfix", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: '최신 버전',
        default: 'rrs-20250812125004',
    }),
    __metadata("design:type", String)
], NewVersionGitDto.prototype, "new_version", void 0);
class CurVersionDto {
}
exports.CurVersionDto = CurVersionDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: '현재 버전',
        default: 'rrs-20250812125004',
    }),
    __metadata("design:type", String)
], CurVersionDto.prototype, "current", void 0);


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetCurrentVersionResponseSocketDto = exports.GetCurrentVersionRequestSocketDto = exports.GetCurrentVersionResponseDto = exports.GetCurrentVersionRequestDto = exports.GetNewVersionResponseDto = exports.GetNewVersionRequestDto = void 0;
const class_validator_1 = __webpack_require__(61);
const swagger_1 = __webpack_require__(58);
const url_util_1 = __webpack_require__(38);
var Description;
(function (Description) {
    Description["BRANCH"] = "\uBE0C\uB79C\uCE58 \uC774\uB984";
    Description["SOFTWARE"] = "\uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC885\uB958 (\uC608: rrs, slamnav2)";
    Description["VERSION"] = "version \uC815\uBCF4";
    Description["HOTFIX"] = "hotfix \uC5EC\uBD80. hotfix\uAC00 true\uC778 \uACBD\uC6B0, \uC790\uB3D9 \uC5C5\uB370\uC774\uD2B8\uAC00 \uC694\uAD6C\uB429\uB2C8\uB2E4.";
    Description["ID"] = "\uC694\uCCAD\uC5D0 \uB300\uD55C ID \uAC12. \uC11C\uBC84\uC5D0\uC11C \uC790\uB3D9\uC0DD\uC131\uB418\uBA70 \uC751\uB2F5\uC5D0 \uB3D9\uC77C\uD55C ID \uAC12 \uBC18\uD658 \uD544\uC694.";
    Description["RESULT"] = "\uC5C5\uB370\uC774\uD2B8 \uACB0\uACFC";
    Description["MESSAGE"] = "\uC5C5\uB370\uC774\uD2B8 \uBA54\uC2DC\uC9C0";
})(Description || (Description = {}));
class GetNewVersionRequestDto {
}
exports.GetNewVersionRequestDto = GetNewVersionRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: Description.SOFTWARE,
        example: 'slamnav2',
    }),
    __metadata("design:type", String)
], GetNewVersionRequestDto.prototype, "software", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.BRANCH,
        default: 'main',
    }),
    __metadata("design:type", String)
], GetNewVersionRequestDto.prototype, "branch", void 0);
class GetNewVersionResponseDto extends GetNewVersionRequestDto {
}
exports.GetNewVersionResponseDto = GetNewVersionResponseDto;
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.VERSION,
        example: '1.0.0',
    }),
    __metadata("design:type", String)
], GetNewVersionResponseDto.prototype, "version", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.HOTFIX,
        example: true,
    }),
    __metadata("design:type", Boolean)
], GetNewVersionResponseDto.prototype, "hotfix", void 0);
class GetCurrentVersionRequestDto {
}
exports.GetCurrentVersionRequestDto = GetCurrentVersionRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: Description.SOFTWARE,
        example: 'slamnav2',
    }),
    __metadata("design:type", String)
], GetCurrentVersionRequestDto.prototype, "software", void 0);
class GetCurrentVersionResponseDto extends GetCurrentVersionRequestDto {
}
exports.GetCurrentVersionResponseDto = GetCurrentVersionResponseDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.VERSION,
        example: '1.0.0',
    }),
    __metadata("design:type", String)
], GetCurrentVersionResponseDto.prototype, "version", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.BRANCH,
        default: 'main',
    }),
    __metadata("design:type", String)
], GetCurrentVersionResponseDto.prototype, "branch", void 0);
class GetCurrentVersionRequestSocketDto {
}
exports.GetCurrentVersionRequestSocketDto = GetCurrentVersionRequestSocketDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.ID,
        example: url_util_1.UrlUtil.generateUUID(),
    }),
    __metadata("design:type", String)
], GetCurrentVersionRequestSocketDto.prototype, "id", void 0);
class GetCurrentVersionResponseSocketDto extends GetCurrentVersionRequestSocketDto {
}
exports.GetCurrentVersionResponseSocketDto = GetCurrentVersionResponseSocketDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.VERSION,
        example: '1.0.0',
    }),
    __metadata("design:type", String)
], GetCurrentVersionResponseSocketDto.prototype, "version", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)({
        description: Description.BRANCH,
        default: 'main',
    }),
    __metadata("design:type", String)
], GetCurrentVersionResponseSocketDto.prototype, "branch", void 0);


/***/ }),
/* 140 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CobotApiModule = void 0;
const common_1 = __webpack_require__(5);
const cobot_api_service_1 = __webpack_require__(141);
const cobot_api_controller_1 = __webpack_require__(142);
const constant_1 = __webpack_require__(65);
const microservices_1 = __webpack_require__(3);
const config_1 = __webpack_require__(74);
const path_1 = __webpack_require__(44);
const grpc_1 = __webpack_require__(9);
let CobotApiModule = class CobotApiModule {
};
exports.CobotApiModule = CobotApiModule;
exports.CobotApiModule = CobotApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.registerAsync([
                {
                    name: constant_1.COBOT_SERVICE,
                    inject: [config_1.ConfigService],
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.GRPC,
                        options: {
                            package: grpc_1.CobotMicroservice.protobufPackage,
                            protoPath: (0, path_1.join)(process.cwd(), 'proto/cobot.proto'),
                            url: configService.get('COBOT_GRPC_URL'),
                        },
                    }),
                },
            ]),
        ],
        controllers: [cobot_api_controller_1.CobotApiController],
        providers: [cobot_api_service_1.CobotApiService],
    })
], CobotApiModule);


/***/ }),
/* 141 */
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
exports.CobotApiService = void 0;
const constant_1 = __webpack_require__(65);
const common_1 = __webpack_require__(8);
const microservices_1 = __webpack_require__(3);
const common_2 = __webpack_require__(5);
const rxjs_1 = __webpack_require__(32);
let CobotApiService = class CobotApiService {
    constructor(cobotMicroservice) {
        this.cobotMicroservice = cobotMicroservice;
        this.loggerService = common_1.LoggerService.get('gateway');
    }
    onModuleInit() {
        this.cobotService = this.cobotMicroservice.getService('CobotGrpcService');
    }
    async CobotProgram(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.cobotService.cobotProgram(dto));
    }
    async CobotModeChange(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.cobotService.cobotModeChange(dto));
    }
    async CobotInit(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.cobotService.cobotInit(dto));
    }
    async CobotMove(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.cobotService.cobotMove(dto));
    }
    async CobotSpeed(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.cobotService.cobotSpeed(dto));
    }
    async CobotCommand(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.cobotService.cobotCommand(dto));
    }
    async CobotData(dto) {
        const resp = await (0, rxjs_1.lastValueFrom)(this.cobotService.getCobotData(dto));
        return {
            cobotId: resp.cobotId,
            data: resp.data ? JSON.parse(resp.data) : undefined,
        };
    }
    async CobotConnect(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.cobotService.cobotConnect(dto));
    }
    async CobotDisconnect(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.cobotService.cobotDisconnect(dto));
    }
    async CobotConnectCommand(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.cobotService.cobotConnectCommand(dto));
    }
    async CobotConnectData(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.cobotService.cobotConnectData(dto));
    }
    async CobotDisconnectCommand(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.cobotService.cobotDisConnectCommand(dto));
    }
    async CobotDisconnectData(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.cobotService.cobotDisConnectData(dto));
    }
    async GetCobotConnectState(dto) {
        return await (0, rxjs_1.lastValueFrom)(this.cobotService.getConnectState(dto));
    }
};
exports.CobotApiService = CobotApiService;
exports.CobotApiService = CobotApiService = __decorate([
    __param(0, (0, common_2.Inject)(constant_1.COBOT_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object])
], CobotApiService);


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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CobotApiController = void 0;
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(58);
const swagger_2 = __webpack_require__(58);
const cobot_api_service_1 = __webpack_require__(141);
const cobot_dto_1 = __webpack_require__(143);
const cobot_dto_2 = __webpack_require__(143);
const cobot_dto_3 = __webpack_require__(143);
const cobot_dto_4 = __webpack_require__(143);
let CobotApiController = class CobotApiController {
    constructor(cobotApiService) {
        this.cobotApiService = cobotApiService;
    }
    async CobotProgramLoad(dto) {
        return this.cobotApiService.CobotProgram({ ...dto, command: cobot_dto_1.CobotCommand.taskLoad });
    }
    async CobotProgramRun(dto) {
        return this.cobotApiService.CobotCommand({ ...dto, command: cobot_dto_1.CobotCommand.taskPlayOnce });
    }
    async CobotProgramLoadandRun(dto) {
        return this.cobotApiService.CobotProgram({ ...dto, command: cobot_dto_1.CobotCommand.programLoadandRun });
    }
    async CobotProgramPause(dto) {
        return this.cobotApiService.CobotCommand({ ...dto, command: cobot_dto_1.CobotCommand.taskPause });
    }
    async CobotProgramResumeA(dto) {
        return this.cobotApiService.CobotCommand({ ...dto, command: cobot_dto_1.CobotCommand.taskResumeA });
    }
    async CobotProgramResumeB(dto) {
        return this.cobotApiService.CobotCommand({ ...dto, command: cobot_dto_1.CobotCommand.taskResumeB });
    }
    async CobotProgramStop(dto) {
        return this.cobotApiService.CobotCommand({ ...dto, command: cobot_dto_1.CobotCommand.taskStop });
    }
    async CobotMode(dto) {
        return this.cobotApiService.CobotModeChange(dto);
    }
    async CobotInit(dto) {
        return this.cobotApiService.CobotInit(dto);
    }
    async CobotCommand(dto) {
        return this.cobotApiService.CobotCommand(dto);
    }
    async CobotData(dto) {
        return this.cobotApiService.CobotData(dto);
    }
    async CobotMove(dto) {
        return this.cobotApiService.CobotMove(dto);
    }
    async CobotSpeed(dto) {
        return this.cobotApiService.CobotSpeed(dto);
    }
    async CobotConnect(dto) {
        return this.cobotApiService.CobotConnect(dto);
    }
    async CobotConnectCommand(dto) {
        return this.cobotApiService.CobotConnectCommand(dto);
    }
    async CobotConnectData(dto) {
        return this.cobotApiService.CobotConnectData(dto);
    }
    async CobotDisconnectCommand(dto) {
        return this.cobotApiService.CobotDisconnectCommand(dto);
    }
    async CobotDisconnectData(dto) {
        return this.cobotApiService.CobotDisconnectData(dto);
    }
    async GetCobotConnectState(dto) {
        return this.cobotApiService.GetCobotConnectState(dto);
    }
};
exports.CobotApiController = CobotApiController;
__decorate([
    (0, common_1.Post)('task/load'),
    (0, swagger_1.ApiOperation)({
        summary: 'Cobot 프로그램 로드 요청',
        description: 'Cobot 프로그램을 로드합니다.',
    }),
    (0, swagger_2.ApiOkResponse)({
        description: 'Cobot 프로그램 로드 요청 성공',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof cobot_dto_1.CobotProgramRequestDto !== "undefined" && cobot_dto_1.CobotProgramRequestDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], CobotApiController.prototype, "CobotProgramLoad", null);
__decorate([
    (0, common_1.Post)('task/run'),
    (0, swagger_1.ApiOperation)({
        summary: 'Cobot 프로그램 실행 요청',
        description: 'Cobot 프로그램을 실행합니다. 현재 로드되어 있는 프로그램을 실행합니다.',
    }),
    (0, swagger_2.ApiOkResponse)({
        description: 'Cobot 프로그램 실행 요청 성공',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof cobot_dto_1.CobotRequestDto !== "undefined" && cobot_dto_1.CobotRequestDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], CobotApiController.prototype, "CobotProgramRun", null);
__decorate([
    (0, common_1.Post)('task/play'),
    (0, swagger_1.ApiOperation)({
        summary: 'Cobot 프로그램 로드 & 실행 요청',
        description: 'Cobot 프로그램을 로드하고 실행합니다.',
    }),
    (0, swagger_2.ApiOkResponse)({
        description: 'Cobot 프로그램 로드 & 실행 요청 성공',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof cobot_dto_1.CobotProgramRequestDto !== "undefined" && cobot_dto_1.CobotProgramRequestDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], CobotApiController.prototype, "CobotProgramLoadandRun", null);
__decorate([
    (0, common_1.Post)('task/pause'),
    (0, swagger_1.ApiOperation)({
        summary: 'Cobot 프로그램 일시정지 요청',
        description: 'Cobot 프로그램을 일시정지합니다.',
    }),
    (0, swagger_2.ApiOkResponse)({
        description: 'Cobot 프로그램 일시정지 요청 성공',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof cobot_dto_1.CobotRequestDto !== "undefined" && cobot_dto_1.CobotRequestDto) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], CobotApiController.prototype, "CobotProgramPause", null);
__decorate([
    (0, common_1.Post)('task/resume/a'),
    (0, swagger_1.ApiOperation)({
        summary: 'Cobot 프로그램 재실행 요청 (기본)',
        description: 'Cobot 프로그램을 재실행합니다. 일반적인 일시정지 상태에서 재실행됩니다.',
    }),
    (0, swagger_2.ApiOkResponse)({
        description: 'Cobot 프로그램 재실행 요청 성공',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof cobot_dto_1.CobotRequestDto !== "undefined" && cobot_dto_1.CobotRequestDto) === "function" ? _k : Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], CobotApiController.prototype, "CobotProgramResumeA", null);
__decorate([
    (0, common_1.Post)('task/resume/b'),
    (0, swagger_1.ApiOperation)({
        summary: 'Cobot 프로그램 재실행 요청 (충돌감지)',
        description: 'Cobot 프로그램을 재실행합니다. 충돌 감지된 재실행됩니다.',
    }),
    (0, swagger_2.ApiOkResponse)({
        description: 'Cobot 프로그램 재실행 요청 성공',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof cobot_dto_1.CobotRequestDto !== "undefined" && cobot_dto_1.CobotRequestDto) === "function" ? _m : Object]),
    __metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], CobotApiController.prototype, "CobotProgramResumeB", null);
__decorate([
    (0, common_1.Post)('task/stop'),
    (0, swagger_1.ApiOperation)({
        summary: 'Cobot 프로그램 중지 요청',
        description: 'Cobot 프로그램을 중지합니다.',
    }),
    (0, swagger_2.ApiOkResponse)({
        description: 'Cobot 프로그램 중지 요청 성공',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_p = typeof cobot_dto_1.CobotRequestDto !== "undefined" && cobot_dto_1.CobotRequestDto) === "function" ? _p : Object]),
    __metadata("design:returntype", typeof (_q = typeof Promise !== "undefined" && Promise) === "function" ? _q : Object)
], CobotApiController.prototype, "CobotProgramStop", null);
__decorate([
    (0, common_1.Post)('mode'),
    (0, swagger_1.ApiOperation)({
        summary: 'Cobot 모드 변경 요청',
        description: 'Cobot 모드를 변경합니다.',
    }),
    (0, swagger_2.ApiOkResponse)({
        description: 'Cobot 모드 변경 요청 성공',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_r = typeof cobot_dto_1.CobotModeRequestDto !== "undefined" && cobot_dto_1.CobotModeRequestDto) === "function" ? _r : Object]),
    __metadata("design:returntype", typeof (_s = typeof Promise !== "undefined" && Promise) === "function" ? _s : Object)
], CobotApiController.prototype, "CobotMode", null);
__decorate([
    (0, common_1.Post)('init'),
    (0, swagger_1.ApiOperation)({
        summary: 'Cobot 초기화 요청',
        description: 'Cobot 초기화를 요청합니다.',
    }),
    (0, swagger_2.ApiOkResponse)({
        description: 'Cobot 초기화 요청 성공',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_t = typeof cobot_dto_1.CobotRequestDto !== "undefined" && cobot_dto_1.CobotRequestDto) === "function" ? _t : Object]),
    __metadata("design:returntype", typeof (_u = typeof Promise !== "undefined" && Promise) === "function" ? _u : Object)
], CobotApiController.prototype, "CobotInit", null);
__decorate([
    (0, common_1.Post)('command'),
    (0, swagger_1.ApiOperation)({
        summary: 'Cobot 명령 요청',
        description: 'Cobot 명령을 요청합니다. 명령은 코봇아이디와 명령어로 구성됩니다.',
    }),
    (0, swagger_2.ApiOkResponse)({
        description: 'Cobot 명령 요청 성공',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_v = typeof cobot_dto_1.CobotCommandRequestDto !== "undefined" && cobot_dto_1.CobotCommandRequestDto) === "function" ? _v : Object]),
    __metadata("design:returntype", typeof (_w = typeof Promise !== "undefined" && Promise) === "function" ? _w : Object)
], CobotApiController.prototype, "CobotCommand", null);
__decorate([
    (0, common_1.Get)('data'),
    (0, swagger_1.ApiOperation)({
        summary: 'Cobot Data 조회',
        description: 'Cobot Data를 조회합니다.',
    }),
    (0, swagger_2.ApiOkResponse)({
        description: 'Cobot Data 조회 성공',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_x = typeof cobot_dto_1.CobotRequestDto !== "undefined" && cobot_dto_1.CobotRequestDto) === "function" ? _x : Object]),
    __metadata("design:returntype", typeof (_y = typeof Promise !== "undefined" && Promise) === "function" ? _y : Object)
], CobotApiController.prototype, "CobotData", null);
__decorate([
    (0, common_1.Post)('move'),
    (0, swagger_1.ApiOperation)({
        summary: 'Cobot Move 요청',
        description: 'Cobot Move를 요청합니다.',
    }),
    (0, swagger_2.ApiOkResponse)({
        description: 'Cobot Move 요청 성공',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_z = typeof cobot_dto_1.CobotMoveRequestDto !== "undefined" && cobot_dto_1.CobotMoveRequestDto) === "function" ? _z : Object]),
    __metadata("design:returntype", typeof (_0 = typeof Promise !== "undefined" && Promise) === "function" ? _0 : Object)
], CobotApiController.prototype, "CobotMove", null);
__decorate([
    (0, common_1.Post)('speed'),
    (0, swagger_1.ApiOperation)({
        summary: 'Cobot Speed 요청',
        description: 'Cobot Speed를 요청합니다.',
    }),
    (0, swagger_2.ApiOkResponse)({
        description: 'Cobot Speed 요청 성공',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_1 = typeof cobot_dto_1.CobotSpeedRequestDto !== "undefined" && cobot_dto_1.CobotSpeedRequestDto) === "function" ? _1 : Object]),
    __metadata("design:returntype", typeof (_2 = typeof Promise !== "undefined" && Promise) === "function" ? _2 : Object)
], CobotApiController.prototype, "CobotSpeed", null);
__decorate([
    (0, common_1.Post)('connect'),
    (0, swagger_1.ApiOperation)({
        summary: 'Cobot TCP 연결 요청',
        description: 'Cobot TCP 연결을 요청합니다.',
    }),
    (0, swagger_2.ApiOkResponse)({
        description: 'Cobot TCP 연결 요청 성공',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_3 = typeof cobot_dto_2.CobotConnectRequestDto !== "undefined" && cobot_dto_2.CobotConnectRequestDto) === "function" ? _3 : Object]),
    __metadata("design:returntype", typeof (_4 = typeof Promise !== "undefined" && Promise) === "function" ? _4 : Object)
], CobotApiController.prototype, "CobotConnect", null);
__decorate([
    (0, common_1.Post)('connect/command'),
    (0, swagger_1.ApiOperation)({
        summary: 'Cobot Command 연결 요청',
        description: 'Cobot Command 연결을 요청합니다.',
    }),
    (0, swagger_2.ApiOkResponse)({
        description: 'Cobot Command 연결 요청 성공',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_5 = typeof cobot_dto_3.CobotConnectServerRequestDto !== "undefined" && cobot_dto_3.CobotConnectServerRequestDto) === "function" ? _5 : Object]),
    __metadata("design:returntype", typeof (_6 = typeof Promise !== "undefined" && Promise) === "function" ? _6 : Object)
], CobotApiController.prototype, "CobotConnectCommand", null);
__decorate([
    (0, common_1.Post)('connect/data'),
    (0, swagger_1.ApiOperation)({
        summary: 'Cobot Data 연결 요청',
        description: 'Cobot Data 연결을 요청합니다.',
    }),
    (0, swagger_2.ApiOkResponse)({
        description: 'Cobot Data 연결 요청 성공',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_7 = typeof cobot_dto_3.CobotConnectServerRequestDto !== "undefined" && cobot_dto_3.CobotConnectServerRequestDto) === "function" ? _7 : Object]),
    __metadata("design:returntype", typeof (_8 = typeof Promise !== "undefined" && Promise) === "function" ? _8 : Object)
], CobotApiController.prototype, "CobotConnectData", null);
__decorate([
    (0, common_1.Post)('disconnect/command'),
    (0, swagger_1.ApiOperation)({
        summary: 'Cobot Command 연결 요청',
        description: 'Cobot Command 연결을 요청합니다.',
    }),
    (0, swagger_2.ApiOkResponse)({
        description: 'Cobot Command 연결 요청 성공',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_9 = typeof cobot_dto_3.CobotConnectServerRequestDto !== "undefined" && cobot_dto_3.CobotConnectServerRequestDto) === "function" ? _9 : Object]),
    __metadata("design:returntype", typeof (_10 = typeof Promise !== "undefined" && Promise) === "function" ? _10 : Object)
], CobotApiController.prototype, "CobotDisconnectCommand", null);
__decorate([
    (0, common_1.Post)('disconnect/data'),
    (0, swagger_1.ApiOperation)({
        summary: 'Cobot Data 연결 요청',
        description: 'Cobot Data 연결을 요청합니다.',
    }),
    (0, swagger_2.ApiOkResponse)({
        description: 'Cobot Data 연결 요청 성공',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_11 = typeof cobot_dto_3.CobotConnectServerRequestDto !== "undefined" && cobot_dto_3.CobotConnectServerRequestDto) === "function" ? _11 : Object]),
    __metadata("design:returntype", typeof (_12 = typeof Promise !== "undefined" && Promise) === "function" ? _12 : Object)
], CobotApiController.prototype, "CobotDisconnectData", null);
__decorate([
    (0, common_1.Get)('connect'),
    (0, swagger_1.ApiOperation)({
        summary: 'Cobot 연결 상태 조회',
        description: 'Cobot 연결 상태를 조회합니다.',
    }),
    (0, swagger_2.ApiOkResponse)({
        description: 'Cobot 연결 상태 조회 성공',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_13 = typeof cobot_dto_4.GetConnectStateRequestDto !== "undefined" && cobot_dto_4.GetConnectStateRequestDto) === "function" ? _13 : Object]),
    __metadata("design:returntype", typeof (_14 = typeof Promise !== "undefined" && Promise) === "function" ? _14 : Object)
], CobotApiController.prototype, "GetCobotConnectState", null);
exports.CobotApiController = CobotApiController = __decorate([
    (0, swagger_1.ApiTags)('Cobot 컨트롤 API'),
    (0, common_1.Controller)('cobot'),
    __metadata("design:paramtypes", [typeof (_a = typeof cobot_api_service_1.CobotApiService !== "undefined" && cobot_api_service_1.CobotApiService) === "function" ? _a : Object])
], CobotApiController);


/***/ }),
/* 143 */
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
exports.CloseTcpServerResponseDto = exports.CloseTcpServerRequestDto = exports.CreateTcpServerResponseDto = exports.CreateTcpServerRequestDto = exports.GetCobotTcpServerResponseDto = exports.TcpServerInfoDto = exports.GetCobotTcpServerRequestDto = exports.GetConnectStateResponseDto = exports.GetConnectStateRequestDto = exports.CobotConnectServerResponseDto = exports.CobotConnectServerRequestDto = exports.CobotConnectResponseDto = exports.CobotConnectRequestDto = exports.CobotSpeedResponseDto = exports.CobotSpeedRequestDto = exports.CobotMoveResponseDto = exports.CobotMoveRequestDto = exports.CobotCoordinate = exports.CobotMoveMethod = exports.CobotResponseDto = exports.CobotRequestDto = exports.CobotModeResponseDto = exports.CobotModeRequestDto = exports.CobotProgramResponseDto = exports.CobotProgramRequestDto = exports.CobotCommandResponseDto = exports.CobotCommandRequestDto = exports.CobotCommand = exports.CobotDataRequestCommand = void 0;
const swagger_1 = __webpack_require__(58);
const class_validator_1 = __webpack_require__(61);
const class_transformer_1 = __webpack_require__(60);
exports.CobotDataRequestCommand = 'reqdata';
var CobotCommand;
(function (CobotCommand) {
    CobotCommand["halt"] = "halt";
    CobotCommand["taskStop"] = "task stop";
    CobotCommand["mcJallInit"] = "mc jall init";
    CobotCommand["programModeReal"] = "pgmode real";
    CobotCommand["programModeSimulation"] = "pgmode simulation";
    CobotCommand["programLoadandRun"] = "program_load_and_run";
    CobotCommand["taskLoad"] = "task load";
    CobotCommand["taskPlayOnce"] = "task play once";
    CobotCommand["taskPause"] = "task pause";
    CobotCommand["taskResumeA"] = "task resume_a";
    CobotCommand["taskResumeB"] = "task resume_b";
})(CobotCommand || (exports.CobotCommand = CobotCommand = {}));
class CobotCommandRequestDto {
}
exports.CobotCommandRequestDto = CobotCommandRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '명령을 보낼 협동로봇의 ID',
        example: 'cobot1',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CobotCommandRequestDto.prototype, "cobotId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '협동로봇으로 보낼 string형태의 명령어. 추후 세분화하여 개편 예정. 현재는 command값을 그대로 협동로봇으로 송신',
        example: 'halt',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CobotCommandRequestDto.prototype, "command", void 0);
class CobotCommandResponseDto extends CobotCommandRequestDto {
}
exports.CobotCommandResponseDto = CobotCommandResponseDto;
class CobotProgramRequestDto {
}
exports.CobotProgramRequestDto = CobotProgramRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '명령을 보낼 협동로봇의 ID',
        example: 'cobot1',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CobotProgramRequestDto.prototype, "cobotId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '프로그램 명',
        example: 'program1',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CobotProgramRequestDto.prototype, "programName", void 0);
class CobotProgramResponseDto extends CobotProgramRequestDto {
}
exports.CobotProgramResponseDto = CobotProgramResponseDto;
class CobotModeRequestDto {
}
exports.CobotModeRequestDto = CobotModeRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '모드를 보낼 협동로봇의 ID',
        example: 'cobot1',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CobotModeRequestDto.prototype, "cobotId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '모드',
        example: 'real',
        enum: ['real', 'simulation'],
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CobotModeRequestDto.prototype, "mode", void 0);
class CobotModeResponseDto extends CobotModeRequestDto {
}
exports.CobotModeResponseDto = CobotModeResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '협동로봇으로 보낼 string형태의 명령어. 추후 세분화하여 개편 예정. 현재는 command값을 그대로 협동로봇으로 송신',
        example: 'halt',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CobotModeResponseDto.prototype, "command", void 0);
class CobotRequestDto {
}
exports.CobotRequestDto = CobotRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '협동로봇 아이디',
        example: 'cobot1',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CobotRequestDto.prototype, "cobotId", void 0);
class CobotResponseDto extends CobotRequestDto {
}
exports.CobotResponseDto = CobotResponseDto;
var CobotMoveMethod;
(function (CobotMoveMethod) {
    CobotMoveMethod["moveJ"] = "moveJ";
    CobotMoveMethod["moveL"] = "moveL";
    CobotMoveMethod["moveJRelative"] = "moveJRelative";
    CobotMoveMethod["moveLRelative"] = "moveLRelative";
})(CobotMoveMethod || (exports.CobotMoveMethod = CobotMoveMethod = {}));
var CobotCoordinate;
(function (CobotCoordinate) {
    CobotCoordinate["Global"] = "Global";
    CobotCoordinate["Local"] = "Local";
    CobotCoordinate["UserCoordinate0"] = "UserCoordinate0";
    CobotCoordinate["UserCoordinate1"] = "UserCoordinate1";
    CobotCoordinate["UserCoordinate2"] = "UserCoordinate2";
})(CobotCoordinate || (exports.CobotCoordinate = CobotCoordinate = {}));
class CobotMoveRequestDto {
}
exports.CobotMoveRequestDto = CobotMoveRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '협동로봇 아이디',
        example: 'cobot1',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CobotMoveRequestDto.prototype, "cobotId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '협동로봇 이동 방법',
        example: 'moveJ',
        enum: CobotMoveMethod,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CobotMoveRequestDto.prototype, "method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '협동로봇 이동 위치. ',
        example: [0, 0, 0, 0, 0, 0],
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], CobotMoveRequestDto.prototype, "pose", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '협동로봇 이동 속도. moveJ, moveJRelative 방법일 때는 deg/s, moveL, moveLRelative 방법일 때는 mm/s',
        example: 20,
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CobotMoveRequestDto.prototype, "speed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '협동로봇 이동 가속도. moveJ, moveJRelative 방법일 때는 deg/s^2, moveL, moveLRelative 방법일 때는 mm/s^2',
        example: 5,
        required: true,
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CobotMoveRequestDto.prototype, "acceleration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '협동로봇 이동 좌표계 (moveLRelative 일때만 사용)',
        example: 'Global',
        enum: CobotCoordinate,
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CobotMoveRequestDto.prototype, "coordinate", void 0);
class CobotMoveResponseDto extends CobotMoveRequestDto {
}
exports.CobotMoveResponseDto = CobotMoveResponseDto;
class CobotSpeedRequestDto {
}
exports.CobotSpeedRequestDto = CobotSpeedRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '협동로봇 아이디',
        example: 'cobot1',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CobotSpeedRequestDto.prototype, "cobotId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '협동로봇 속도. 0 ~ 100(%) 사이의 값을 입력해야 합니다.',
        example: 50,
        required: true,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CobotSpeedRequestDto.prototype, "speed", void 0);
class CobotSpeedResponseDto extends CobotSpeedRequestDto {
}
exports.CobotSpeedResponseDto = CobotSpeedResponseDto;
class CobotConnectRequestDto {
}
exports.CobotConnectRequestDto = CobotConnectRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '협동로봇 아이디. 아이디는 중복되지 않아야 하며 협동로봇을 구분하는 값으로 사용됩니다.',
        example: 'cobot1',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CobotConnectRequestDto.prototype, "cobotId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '협동로봇 IP 주소',
        example: '127.0.0.1',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CobotConnectRequestDto.prototype, "ipAddress", void 0);
class CobotConnectResponseDto extends CobotConnectRequestDto {
}
exports.CobotConnectResponseDto = CobotConnectResponseDto;
class CobotConnectServerRequestDto {
}
exports.CobotConnectServerRequestDto = CobotConnectServerRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '협동로봇 아이디. 아이디는 중복되지 않아야 하며 협동로봇을 구분하는 값으로 사용됩니다.',
        example: 'cobot1',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CobotConnectServerRequestDto.prototype, "cobotId", void 0);
class CobotConnectServerResponseDto extends CobotConnectServerRequestDto {
}
exports.CobotConnectServerResponseDto = CobotConnectServerResponseDto;
class GetConnectStateRequestDto {
}
exports.GetConnectStateRequestDto = GetConnectStateRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '협동로봇 아이디. 아이디는 중복되지 않아야 하며 협동로봇을 구분하는 값으로 사용됩니다.',
        example: 'cobot1',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GetConnectStateRequestDto.prototype, "cobotId", void 0);
class GetConnectStateResponseDto extends GetConnectStateRequestDto {
}
exports.GetConnectStateResponseDto = GetConnectStateResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Command Server 연결 상태',
        example: true,
        required: true,
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Type)(() => Boolean),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], GetConnectStateResponseDto.prototype, "commandConnected", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Data Server 연결 상태',
        example: true,
        required: true,
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Type)(() => Boolean),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], GetConnectStateResponseDto.prototype, "dataConnected", void 0);
class GetCobotTcpServerRequestDto {
}
exports.GetCobotTcpServerRequestDto = GetCobotTcpServerRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'TCP 서버 포트',
        example: 18000,
        required: true,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], GetCobotTcpServerRequestDto.prototype, "port", void 0);
class TcpServerInfoDto {
}
exports.TcpServerInfoDto = TcpServerInfoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'TCP 서버 포트',
        example: 18000,
        required: true,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], TcpServerInfoDto.prototype, "port", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'TCP 서버 생성된 시기',
        example: '2025-01-01 12:00:00',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], TcpServerInfoDto.prototype, "createAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'TCP 서버 연결된 클라이언트 수',
        example: 1,
        required: true,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], TcpServerInfoDto.prototype, "clients", void 0);
class GetCobotTcpServerResponseDto {
}
exports.GetCobotTcpServerResponseDto = GetCobotTcpServerResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'TCP 서버 정보 목록',
        example: [
            {
                port: 18000,
                createAt: '2025-01-01 12:00:00',
                clients: 1,
            },
        ],
        required: true,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => TcpServerInfoDto),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], GetCobotTcpServerResponseDto.prototype, "servers", void 0);
class CreateTcpServerRequestDto {
}
exports.CreateTcpServerRequestDto = CreateTcpServerRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'TCP 서버 포트',
        example: 18000,
        required: true,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateTcpServerRequestDto.prototype, "port", void 0);
class CreateTcpServerResponseDto extends CreateTcpServerRequestDto {
}
exports.CreateTcpServerResponseDto = CreateTcpServerResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'TCP 서버 생성된 시기',
        example: '2025-01-01 12:00:00',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTcpServerResponseDto.prototype, "createAt", void 0);
class CloseTcpServerRequestDto {
}
exports.CloseTcpServerRequestDto = CloseTcpServerRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'TCP 서버 포트',
        example: 18000,
        required: true,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CloseTcpServerRequestDto.prototype, "port", void 0);
class CloseTcpServerResponseDto extends CloseTcpServerRequestDto {
}
exports.CloseTcpServerResponseDto = CloseTcpServerResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'TCP 서버 연결된 클라이언트 수',
        example: 0,
        required: true,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CloseTcpServerResponseDto.prototype, "clients", void 0);


/***/ }),
/* 144 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TcpApiModule = void 0;
const common_1 = __webpack_require__(5);
const tcp_api_service_1 = __webpack_require__(145);
const tcp_api_controller_1 = __webpack_require__(146);
const constant_1 = __webpack_require__(65);
const microservices_1 = __webpack_require__(3);
const config_1 = __webpack_require__(74);
const path_1 = __webpack_require__(44);
const grpc_1 = __webpack_require__(9);
let TcpApiModule = class TcpApiModule {
};
exports.TcpApiModule = TcpApiModule;
exports.TcpApiModule = TcpApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.registerAsync([
                {
                    name: constant_1.TCP_SERVICE,
                    inject: [config_1.ConfigService],
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.GRPC,
                        options: {
                            package: grpc_1.TcpMicroservice.protobufPackage,
                            protoPath: (0, path_1.join)(process.cwd(), 'proto/tcp.proto'),
                            url: configService.get('TCP_GRPC_URL'),
                        },
                    }),
                },
            ]),
        ],
        controllers: [tcp_api_controller_1.TcpApiController],
        providers: [tcp_api_service_1.TcpApiService],
    })
], TcpApiModule);


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TcpApiService = void 0;
const common_1 = __webpack_require__(5);
const common_2 = __webpack_require__(8);
const constant_1 = __webpack_require__(65);
const microservices_1 = __webpack_require__(3);
const rxjs_1 = __webpack_require__(32);
let TcpApiService = class TcpApiService {
    constructor(tcpMicroservice) {
        this.tcpMicroservice = tcpMicroservice;
        this.loggerService = common_2.LoggerService.get('gateway');
    }
    onModuleInit() {
        this.tcpService = this.tcpMicroservice.getService('TcpGrpcService');
    }
    async GetCobotTcpServer() {
        return await (0, rxjs_1.lastValueFrom)(this.tcpService.getServerState({}));
    }
    async createTcpServer(request) {
        return await (0, rxjs_1.lastValueFrom)(this.tcpService.openServer({ port: request.port }));
    }
    async closeTcpServer(request) {
        return await (0, rxjs_1.lastValueFrom)(this.tcpService.closeServer({ port: request.port }));
    }
};
exports.TcpApiService = TcpApiService;
exports.TcpApiService = TcpApiService = __decorate([
    __param(0, (0, common_1.Inject)(constant_1.TCP_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object])
], TcpApiService);


/***/ }),
/* 146 */
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
exports.TcpApiController = void 0;
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(58);
const tcp_api_service_1 = __webpack_require__(145);
const cobot_dto_1 = __webpack_require__(143);
let TcpApiController = class TcpApiController {
    constructor(tcpApiService) {
        this.tcpApiService = tcpApiService;
    }
    async GetCobotTcpServer() {
        return this.tcpApiService.GetCobotTcpServer();
    }
    async createTcpServer(body) {
        console.log(body);
        return this.tcpApiService.createTcpServer(body);
    }
    async closeTcpServer(body) {
        return this.tcpApiService.closeTcpServer(body);
    }
};
exports.TcpApiController = TcpApiController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'TCP 서버 상태 조회',
        description: 'TCP 서버 상태를 조회합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'TCP 서버 상태 조회 성공',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], TcpApiController.prototype, "GetCobotTcpServer", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'TCP 서버 생성',
        description: 'TCP 서버를 생성합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'TCP 서버 생성 성공',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof cobot_dto_1.CreateTcpServerRequestDto !== "undefined" && cobot_dto_1.CreateTcpServerRequestDto) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], TcpApiController.prototype, "createTcpServer", null);
__decorate([
    (0, common_1.Delete)(),
    (0, swagger_1.ApiOperation)({
        summary: 'TCP 서버 삭제',
        description: 'TCP 서버를 삭제합니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'TCP 서버 삭제 성공',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof cobot_dto_1.CloseTcpServerRequestDto !== "undefined" && cobot_dto_1.CloseTcpServerRequestDto) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], TcpApiController.prototype, "closeTcpServer", null);
exports.TcpApiController = TcpApiController = __decorate([
    (0, swagger_1.ApiTags)('TCP 서버 API'),
    (0, common_1.Controller)('tcp'),
    __metadata("design:paramtypes", [typeof (_a = typeof tcp_api_service_1.TcpApiService !== "undefined" && tcp_api_service_1.TcpApiService) === "function" ? _a : Object])
], TcpApiController);


/***/ }),
/* 147 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GrpcToHttpFilter = void 0;
const common_1 = __webpack_require__(5);
const logger_1 = __webpack_require__(33);
const constant_1 = __webpack_require__(51);
let GrpcToHttpFilter = class GrpcToHttpFilter {
    constructor() {
        this.loggerService = logger_1.LoggerService.get('filter');
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        try {
            if (exception instanceof Error) {
                if ('code' in exception && 'details' in exception) {
                    const statusCode = mapGrpcToHttpStatus(exception.code);
                    this.loggerService.info(`[Grpc] RpcException : ${exception.details} ${statusCode}(${exception.code})`);
                    return response.status(statusCode).json({
                        statusCode,
                        message: exception.details,
                    });
                }
                else if (exception instanceof common_1.HttpException) {
                    const statusCode = exception.getStatus();
                    const message = exception.message;
                    this.loggerService.info(`[Grpc] caught HttpException : ${statusCode}, ${message}`);
                    return response.status(statusCode).json({ statusCode, message });
                }
                else {
                    this.loggerService.info(`[Grpc] caught Error : ${exception.message}`);
                    return response.status(500).json({
                        statusCode: 500,
                        message: exception.message,
                    });
                }
            }
            else {
                this.loggerService.info(`[Grpc] caught unknown Error : ${(0, logger_1.errorToJson)(exception)}`);
                return response.status(500).json({
                    statusCode: 500,
                    message: 'Internal server error',
                });
            }
        }
        catch (error) {
            this.loggerService.info(`[Grpc] caught unknown Error : ${(0, logger_1.errorToJson)(exception)}`);
            return response.status(500).json({
                statusCode: 500,
                message: 'Internal server error',
            });
        }
    }
};
exports.GrpcToHttpFilter = GrpcToHttpFilter;
exports.GrpcToHttpFilter = GrpcToHttpFilter = __decorate([
    (0, common_1.Catch)()
], GrpcToHttpFilter);
function mapGrpcToHttpStatus(code) {
    switch (code) {
        case constant_1.GrpcCode.OK:
            return common_1.HttpStatus.OK;
        case constant_1.GrpcCode.Cancelled:
            return 499;
        case constant_1.GrpcCode.Unknown:
            return common_1.HttpStatus.BAD_REQUEST;
        case constant_1.GrpcCode.InvalidArgument:
            return common_1.HttpStatus.BAD_REQUEST;
        case constant_1.GrpcCode.DeadlineExceeded:
            return common_1.HttpStatus.GATEWAY_TIMEOUT;
        case constant_1.GrpcCode.NotFound:
            return common_1.HttpStatus.NOT_FOUND;
        case constant_1.GrpcCode.AlreadyExists:
            return common_1.HttpStatus.CONFLICT;
        case constant_1.GrpcCode.PermissionDenied:
            return common_1.HttpStatus.FORBIDDEN;
        case constant_1.GrpcCode.ResourceExhausted:
            return common_1.HttpStatus.TOO_MANY_REQUESTS;
        case constant_1.GrpcCode.FailedPrecondition:
            return common_1.HttpStatus.BAD_REQUEST;
        case constant_1.GrpcCode.Aborted:
            return common_1.HttpStatus.CONFLICT;
        case constant_1.GrpcCode.OutOfRange:
            return common_1.HttpStatus.BAD_REQUEST;
        case constant_1.GrpcCode.Unimplemented:
            return common_1.HttpStatus.NOT_IMPLEMENTED;
        case constant_1.GrpcCode.InternalError:
            return common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        case constant_1.GrpcCode.Unavailable:
            return common_1.HttpStatus.SERVICE_UNAVAILABLE;
        case constant_1.GrpcCode.DataLoss:
            return common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        case constant_1.GrpcCode.Unauthenticated:
            return common_1.HttpStatus.UNAUTHORIZED;
        default:
            return common_1.HttpStatus.INTERNAL_SERVER_ERROR;
    }
}


/***/ }),
/* 148 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientSocketModule = void 0;
const common_1 = __webpack_require__(5);
const client_socket_service_1 = __webpack_require__(149);
const client_socket_gateway_1 = __webpack_require__(151);
const microservices_1 = __webpack_require__(3);
const client_socket_mqtt_controller_1 = __webpack_require__(155);
const constant_1 = __webpack_require__(65);
const config_1 = __webpack_require__(74);
const nestjs_asyncapi_1 = __webpack_require__(2);
let ClientSocketModule = class ClientSocketModule {
};
exports.ClientSocketModule = ClientSocketModule;
exports.ClientSocketModule = ClientSocketModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
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
            nestjs_asyncapi_1.AsyncApiModule,
        ],
        controllers: [client_socket_mqtt_controller_1.ClientSocketMqttController],
        providers: [client_socket_gateway_1.ClientSocketGateway, client_socket_service_1.ClientSocketService],
    })
], ClientSocketModule);


/***/ }),
/* 149 */
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
exports.ClientSocketService = void 0;
const common_1 = __webpack_require__(5);
const microservices_1 = __webpack_require__(3);
const common_2 = __webpack_require__(8);
const websockets_1 = __webpack_require__(150);
const constant_1 = __webpack_require__(65);
const move_type_1 = __webpack_require__(99);
let ClientSocketService = class ClientSocketService {
    constructor(mqttMicroservice) {
        this.mqttMicroservice = mqttMicroservice;
        this.loggerService = common_2.LoggerService.get('gateway-client');
    }
    setServer(server) {
        this.server = server;
    }
    async subscribe(dto, client) {
        try {
            if (dto.topic === undefined || dto.topic === '') {
                throw new websockets_1.WsException('topic값이 없습니다.');
            }
            client.join(dto.topic);
            this.loggerService.info(`[Client] ${client.id} : ${dto.topic} (room count = ${client.rooms.size - 1})`);
            return;
        }
        catch (error) {
            this.loggerService.error(`[Client] ${(0, common_2.errorToJson)(error)}`);
            if (error instanceof websockets_1.WsException)
                throw error;
            throw new websockets_1.WsException('구독요청을 처리하던 중 에러가 발생했습니다.');
        }
    }
    async unSubscribe(dto, client) {
        try {
            if (dto.topic === undefined || dto.topic === '') {
                throw new websockets_1.WsException('topic값이 없습니다.');
            }
            if (dto.topic == 'all') {
                for (const room of client.rooms) {
                    if (room !== client.id) {
                        client.leave(room);
                        this.loggerService.info(`[Client] ${client.id} : ${room} (room count = ${client.rooms.size - 1})`);
                    }
                }
            }
            else {
                client.leave(dto.topic);
                this.loggerService.info(`[Client] ${client.id} : ${dto.topic} (room count = ${client.rooms.size - 1})`);
            }
            return;
        }
        catch (error) {
            this.loggerService.error(`[Client] ${(0, common_2.errorToJson)(error)}`);
            if (error instanceof websockets_1.WsException)
                throw error;
            throw new websockets_1.WsException('구독요청을 처리하던 중 에러가 발생했습니다.');
        }
    }
    moveJog(dto) {
        try {
            if (dto.command === undefined || dto.command !== move_type_1.MoveCommand.moveJog) {
                throw new websockets_1.WsException(`command값이 잘못되었습니다. ${dto.command}`);
            }
            if (dto.vx === undefined || typeof dto.vx !== 'number' || dto.vx < 0 || dto.vx > 10) {
                throw new websockets_1.WsException('vx값이 범위를 벗어납니다.');
            }
            if (dto.vy === undefined || typeof dto.vy !== 'number' || dto.vy < 0 || dto.vy > 10) {
                throw new websockets_1.WsException('vy값이 범위를 벗어납니다.');
            }
            if (dto.wz === undefined || typeof dto.wz !== 'number' || dto.wz < 0 || dto.wz > 10) {
                throw new websockets_1.WsException('wz값이 범위를 벗어납니다.');
            }
            this.mqttMicroservice.emit('moveJog', dto);
        }
        catch (error) {
            this.loggerService.error(`[Client] ${(0, common_2.errorToJson)(error)}`);
            if (error instanceof websockets_1.WsException)
                throw error;
            throw new websockets_1.WsException('Move명령을 처리하던 중 에러가 발생했습니다.');
        }
    }
    moveResponse(dto) {
        this.server.to(['moveResponse', 'move', 'all']).emit('moveResponse', dto);
    }
    localizationResponse(dto) {
        this.server.to(['localizationResponse', 'localization', 'all']).emit('localizationResponse', dto);
    }
    loadResponse(dto) {
        this.server.to(['loadResponse', 'load', 'all']).emit('loadResponse', dto);
    }
    mappingResponse(dto) {
        this.server.to(['mappingResponse', 'mapping', 'all']).emit('mappingResponse', dto);
    }
    controlResponse(dto) {
        this.server.to(['controlResponse', 'control', 'all']).emit('controlResponse', dto);
    }
    status(dto) {
        this.server.to(['status', 'all']).emit('status', dto);
    }
    moveStatus(dto) {
        this.server.to(['moveStatus', 'status', 'all']).emit('moveStatus', dto);
    }
    localPath(dto) {
        this.server.to(['localPath', 'path', 'all']).emit('localPath', dto);
    }
    globalPath(dto) {
        this.server.to(['globalPath', 'path', 'all']).emit('globalPath', dto);
    }
    lidarCloud(dto) {
        this.server.to(['lidarCloud', 'all']).emit('lidarCloud', dto);
    }
    mappingCloud(dto) {
        this.server.to(['mappingCloud', 'mapping', 'all']).emit('mappingCloud', dto);
    }
    cobotResponse(dto) {
        this.server.to(['cobotResponse', 'cobot', 'all']).emit('cobotResponse', dto);
    }
    exAccessoryResponse(dto) {
        this.server.to(['exAccessoryResponse', 'exAccessory', 'all']).emit('exAccessoryResponse', dto);
    }
    exAccessoryStatus(dto) {
        this.server.to(['exAccessoryStatus', 'exAccessory', 'status', 'all']).emit('exAccessoryStatus', dto);
    }
};
exports.ClientSocketService = ClientSocketService;
exports.ClientSocketService = ClientSocketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constant_1.MQTT_BROKER)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientMqtt !== "undefined" && microservices_1.ClientMqtt) === "function" ? _a : Object])
], ClientSocketService);


/***/ }),
/* 150 */
/***/ ((module) => {

module.exports = require("@nestjs/websockets");

/***/ }),
/* 151 */
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientSocketGateway = void 0;
const websockets_1 = __webpack_require__(150);
const client_socket_service_1 = __webpack_require__(149);
const socket_io_1 = __webpack_require__(152);
const common_1 = __webpack_require__(8);
const nestjs_asyncapi_1 = __webpack_require__(2);
const subscribe_dto_1 = __webpack_require__(153);
const move_dto_1 = __webpack_require__(101);
let ClientSocketGateway = class ClientSocketGateway {
    constructor(clientService) {
        this.clientService = clientService;
        this.loggerService = common_1.LoggerService.get('gateway');
    }
    afterInit(server) {
        this.clientService.setServer(server);
    }
    handleConnection(client) {
        this.loggerService.info(`[ClientGateway] Connect Client : ${client.id}`);
    }
    handleDisconnect(client) {
        this.loggerService.info(`[ClientGateway] Disconnect Client : ${client.id}`);
    }
    async handelSubscribe(dto, client) {
        return this.clientService.subscribe(dto, client);
    }
    async handelUnsubscribe(dto, client) {
        return this.clientService.unSubscribe(dto, client);
    }
    async handleMoveJogMessage(data) {
        console.log(data);
        this.clientService.moveJog(data);
    }
};
exports.ClientSocketGateway = ClientSocketGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_b = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _b : Object)
], ClientSocketGateway.prototype, "server", void 0);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], ClientSocketGateway.prototype, "handleConnection", null);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], ClientSocketGateway.prototype, "handleDisconnect", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('subscribe'),
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'subscribe',
        message: {
            payload: subscribe_dto_1.SubscribeDto,
        },
        description: '토픽 구독요청. 구독한 토픽 이벤트만 받을 수 있습니다.',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof subscribe_dto_1.SubscribeDto !== "undefined" && subscribe_dto_1.SubscribeDto) === "function" ? _e : Object, typeof (_f = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], ClientSocketGateway.prototype, "handelSubscribe", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('unsubscribe'),
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'unsubscribe',
        message: {
            payload: subscribe_dto_1.SubscribeDto,
        },
        description: '토픽 구독해제요청. 구독한 토픽 이벤트만 받을 수 있습니다.',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof subscribe_dto_1.SubscribeDto !== "undefined" && subscribe_dto_1.SubscribeDto) === "function" ? _g : Object, typeof (_h = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], ClientSocketGateway.prototype, "handelUnsubscribe", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('moveJog'),
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'moveJog',
        message: {
            payload: move_dto_1.MoveRequestDto,
        },
        description: 'Joystick 이동이벤트',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof move_dto_1.MoveRequestDto !== "undefined" && move_dto_1.MoveRequestDto) === "function" ? _j : Object]),
    __metadata("design:returntype", Promise)
], ClientSocketGateway.prototype, "handleMoveJogMessage", null);
exports.ClientSocketGateway = ClientSocketGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        namespace: '/',
        cors: {
            origin: ['*', 'https://admin.socket.io'],
            credentials: true,
        },
        host: '0.0.0.0',
        transports: ['websocket', 'polling'],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof client_socket_service_1.ClientSocketService !== "undefined" && client_socket_service_1.ClientSocketService) === "function" ? _a : Object])
], ClientSocketGateway);


/***/ }),
/* 152 */
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),
/* 153 */
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
exports.SubscribeDto = void 0;
const swagger_1 = __webpack_require__(58);
const class_validator_1 = __webpack_require__(61);
const description_1 = __webpack_require__(154);
class SubscribeDto {
}
exports.SubscribeDto = SubscribeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: description_1.client_description.TOPIC,
        example: 'status',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], SubscribeDto.prototype, "topic", void 0);


/***/ }),
/* 154 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.client_description = void 0;
var client_description;
(function (client_description) {
    client_description["TOPIC"] = "\uAD6C\uB3C5/\uAD6C\uB3C5\uD574\uC81C \uD560 \uD1A0\uD53D\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694.";
})(client_description || (exports.client_description = client_description = {}));


/***/ }),
/* 155 */
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientSocketMqttController = void 0;
const common_1 = __webpack_require__(5);
const microservices_1 = __webpack_require__(3);
const nestjs_asyncapi_1 = __webpack_require__(2);
const websockets_1 = __webpack_require__(150);
const common_2 = __webpack_require__(8);
const client_socket_service_1 = __webpack_require__(149);
const move_dto_1 = __webpack_require__(101);
const localization_dto_1 = __webpack_require__(78);
const load_dto_1 = __webpack_require__(118);
const mapping_dto_1 = __webpack_require__(117);
const control_dto_1 = __webpack_require__(59);
const status_type_1 = __webpack_require__(156);
const movestatus_type_1 = __webpack_require__(158);
const path_type_1 = __webpack_require__(159);
const cloud_type_1 = __webpack_require__(160);
const cobot_dto_1 = __webpack_require__(143);
const exAccessory_dto_1 = __webpack_require__(161);
let ClientSocketMqttController = class ClientSocketMqttController {
    constructor(clientService) {
        this.clientService = clientService;
        this.loggerService = common_2.LoggerService.get('gateway');
    }
    getMoveResponse(data) {
        this.clientService.moveResponse(data);
    }
    async handleLocalizationResponse(data) {
        return this.clientService.localizationResponse(data);
    }
    async handleLoadResponse(data) {
        return this.clientService.loadResponse(data);
    }
    async handleMappingResponse(data) {
        return this.clientService.mappingResponse(data);
    }
    async handleControlResponse(data) {
        return this.clientService.controlResponse(data);
    }
    async handleStatus(data) {
        return this.clientService.status(data);
    }
    async handleMoveStatus(data) {
        return this.clientService.moveStatus(data);
    }
    async handleLocalPath(data) {
        return this.clientService.localPath(data);
    }
    async handleGlobalPath(data) {
        return this.clientService.globalPath(data);
    }
    async handleLidarCloud(data) {
        return this.clientService.lidarCloud(data);
    }
    async handleMappingCloud(data) {
        return this.clientService.mappingCloud(data);
    }
    async handleCobotResponse(data) {
        return this.clientService.cobotResponse(data);
    }
    async handleExAccessoryResponse(data) {
        return this.clientService.exAccessoryResponse(data);
    }
    async handleExAccessoryStatus(data) {
        return this.clientService.exAccessoryStatus(data);
    }
};
exports.ClientSocketMqttController = ClientSocketMqttController;
__decorate([
    (0, microservices_1.MessagePattern)('moveResponse'),
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'moveResponse',
        message: {
            payload: move_dto_1.MoveResponseDto,
        },
        description: 'Move 요청에 따른 응답. 이동 상태에 따라 여러번 호출될 수 있음',
    }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof move_dto_1.MoveResponseDto !== "undefined" && move_dto_1.MoveResponseDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], ClientSocketMqttController.prototype, "getMoveResponse", null);
__decorate([
    (0, microservices_1.MessagePattern)('localizationResponse'),
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'localizationResponse',
        message: {
            payload: localization_dto_1.LocalizationResponseDto,
        },
        description: 'Localization 요청에 따른 응답',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof localization_dto_1.LocalizationResponseDto !== "undefined" && localization_dto_1.LocalizationResponseDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ClientSocketMqttController.prototype, "handleLocalizationResponse", null);
__decorate([
    (0, microservices_1.MessagePattern)('loadResponse'),
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'loadResponse',
        message: {
            payload: load_dto_1.LoadResponseDto,
        },
        description: 'Load 요청에 따른 응답',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof load_dto_1.LoadResponseDto !== "undefined" && load_dto_1.LoadResponseDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], ClientSocketMqttController.prototype, "handleLoadResponse", null);
__decorate([
    (0, microservices_1.MessagePattern)('mappingResponse'),
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'mappingResponse',
        message: {
            payload: mapping_dto_1.MappingResponseDto,
        },
        description: 'Mapping 요청에 따른 응답',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof mapping_dto_1.MappingResponseDto !== "undefined" && mapping_dto_1.MappingResponseDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], ClientSocketMqttController.prototype, "handleMappingResponse", null);
__decorate([
    (0, microservices_1.MessagePattern)('controlResponse'),
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'controlResponse',
        message: {
            payload: control_dto_1.ControlResponseDto,
        },
        description: 'Control 요청에 따른 응답',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof control_dto_1.ControlResponseDto !== "undefined" && control_dto_1.ControlResponseDto) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], ClientSocketMqttController.prototype, "handleControlResponse", null);
__decorate([
    (0, microservices_1.MessagePattern)('status'),
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'status',
        message: {
            payload: status_type_1.StatusSlamnav,
        },
        description: 'SLAMNAV에서 주기적 송신하는 상태정보. 2Hz',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof status_type_1.StatusSlamnav !== "undefined" && status_type_1.StatusSlamnav) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], ClientSocketMqttController.prototype, "handleStatus", null);
__decorate([
    (0, microservices_1.MessagePattern)('moveStatus'),
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'moveStatus',
        message: {
            payload: movestatus_type_1.MoveStatusSlamnav,
        },
        description: 'SLAMNAV에서 주기적 송신하는 상태정보. 10Hz',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof movestatus_type_1.MoveStatusSlamnav !== "undefined" && movestatus_type_1.MoveStatusSlamnav) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], ClientSocketMqttController.prototype, "handleMoveStatus", null);
__decorate([
    (0, microservices_1.MessagePattern)('localPath'),
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'localPath',
        message: {
            payload: path_type_1.PathDto,
        },
        description: 'SLAMNAV에서 주행하며 계산한 local 경로 배열. 변경될때마다 전송',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof path_type_1.PathDto !== "undefined" && path_type_1.PathDto) === "function" ? _j : Object]),
    __metadata("design:returntype", Promise)
], ClientSocketMqttController.prototype, "handleLocalPath", null);
__decorate([
    (0, microservices_1.MessagePattern)('globalPath'),
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'globalPath',
        message: {
            payload: path_type_1.PathDto,
        },
        description: 'SLAMNAV에서 주행하며 계산한 globalPath 경로 배열. 변경될때마다 전송',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof path_type_1.PathDto !== "undefined" && path_type_1.PathDto) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], ClientSocketMqttController.prototype, "handleGlobalPath", null);
__decorate([
    (0, microservices_1.MessagePattern)('lidarCloud'),
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'lidarCloud',
        message: {
            payload: cloud_type_1.LidarCloudDto,
        },
        description: 'Lidar 클라우드 데이터',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof cloud_type_1.LidarCloudDto !== "undefined" && cloud_type_1.LidarCloudDto) === "function" ? _l : Object]),
    __metadata("design:returntype", Promise)
], ClientSocketMqttController.prototype, "handleLidarCloud", null);
__decorate([
    (0, microservices_1.MessagePattern)('mappingCloud'),
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'mappingCloud',
        message: {
            payload: cloud_type_1.LidarCloudDto,
        },
        description: 'Mapping 클라우드 데이터',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof cloud_type_1.LidarCloudDto !== "undefined" && cloud_type_1.LidarCloudDto) === "function" ? _m : Object]),
    __metadata("design:returntype", Promise)
], ClientSocketMqttController.prototype, "handleMappingCloud", null);
__decorate([
    (0, microservices_1.MessagePattern)('cobotResponse'),
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'cobotResponse',
        message: {
            payload: cobot_dto_1.CobotCommandResponseDto,
        },
        description: '협동로봇 응답. 협동로봇이 전송하는 응답',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_o = typeof common_2.CobotMicroservice !== "undefined" && common_2.CobotMicroservice.CobotCommandResponse) === "function" ? _o : Object]),
    __metadata("design:returntype", Promise)
], ClientSocketMqttController.prototype, "handleCobotResponse", null);
__decorate([
    (0, microservices_1.MessagePattern)('exAccessoryResponse'),
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'exAccessoryResponse',
        message: {
            payload: exAccessory_dto_1.ExAccessoryResponseDto,
        },
        description: 'External Accessory 응답',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_p = typeof exAccessory_dto_1.ExAccessoryResponseDto !== "undefined" && exAccessory_dto_1.ExAccessoryResponseDto) === "function" ? _p : Object]),
    __metadata("design:returntype", Promise)
], ClientSocketMqttController.prototype, "handleExAccessoryResponse", null);
__decorate([
    (0, microservices_1.MessagePattern)('exAccessoryStatus'),
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'exAccessoryStatus',
        message: {
            payload: exAccessory_dto_1.ExAccessoryStatusDto,
        },
        description: 'External Accessory 상태',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_q = typeof exAccessory_dto_1.ExAccessoryStatusDto !== "undefined" && exAccessory_dto_1.ExAccessoryStatusDto) === "function" ? _q : Object]),
    __metadata("design:returntype", Promise)
], ClientSocketMqttController.prototype, "handleExAccessoryStatus", null);
exports.ClientSocketMqttController = ClientSocketMqttController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof client_socket_service_1.ClientSocketService !== "undefined" && client_socket_service_1.ClientSocketService) === "function" ? _a : Object])
], ClientSocketMqttController);


/***/ }),
/* 156 */
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
const date_util_1 = __webpack_require__(40);
const swagger_1 = __webpack_require__(58);
const class_validator_1 = __webpack_require__(61);
const state_type_1 = __webpack_require__(157);
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
})(Description || (Description = {}));
class StatusIMUDto {
}
exports.StatusIMUDto = StatusIMUDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.IMU_IMU,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusIMUDto.prototype, "imu_rx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.IMU_IMU,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusIMUDto.prototype, "imu_ry", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.IMU_IMU,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusIMUDto.prototype, "imu_rz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.IMU_ACC,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusIMUDto.prototype, "acc_x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.IMU_ACC,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusIMUDto.prototype, "acc_y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.IMU_ACC,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusIMUDto.prototype, "acc_z", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.IMU_GYR,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusIMUDto.prototype, "gyr_x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.IMU_GYR,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusIMUDto.prototype, "gyr_y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.IMU_GYR,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusIMUDto.prototype, "gyr_z", void 0);
class StatusLidarDto {
}
exports.StatusLidarDto = StatusLidarDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.LIDAR_CONNECTION,
        example: 'false',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
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
        example: 'false',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatuMotorDto.prototype, "connection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MOTOR_CURRENT,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatuMotorDto.prototype, "current", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MOTOR_STATUS,
        example: '0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatuMotorDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MOTOR_TEMP,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatuMotorDto.prototype, "temp", void 0);
class StatusConditionDto {
}
exports.StatusConditionDto = StatusConditionDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CONDITION_INLIER_RATIO,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusConditionDto.prototype, "inlier_ratio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CONDITION_INLIER_ERROR,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusConditionDto.prototype, "inlier_error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CONDITION_MAPPING_RATIO,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusConditionDto.prototype, "mapping_ratio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CONDITION_MAPPING_ERROR,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
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
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusStateDto.prototype, "charge", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.STATE_DOCK,
        example: 'false',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusStateDto.prototype, "dock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.STATE_EMO,
        example: 'false',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusStateDto.prototype, "emo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.STATE_LOCALIZATION,
        example: 'none',
        enum: state_type_1.LocalizationState,
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusStateDto.prototype, "localization", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.STATE_POWER,
        example: 'false',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusStateDto.prototype, "power", void 0);
class StatusPowerDto {
}
exports.StatusPowerDto = StatusPowerDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_BATTERY_CURRENT,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusPowerDto.prototype, "bat_current", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_BATTERY_IN,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusPowerDto.prototype, "bat_in", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_BATTERY_OUT,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusPowerDto.prototype, "bat_out", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_BATTERY_PERCENT,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusPowerDto.prototype, "bat_percent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_CHARGE_CURRENT,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusPowerDto.prototype, "charge_current", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_CONTACT_VOLTAGE,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusPowerDto.prototype, "contact_voltage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_POWER,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusPowerDto.prototype, "power", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POWER_TOTAL_POWER,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], StatusPowerDto.prototype, "total_power", void 0);
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
    (0, class_validator_1.Length)(1, 50),
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
    (0, class_validator_1.Length)(1, 50),
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
    (0, class_validator_1.Length)(1, 50),
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
                connection: 'false',
                current: '0.0',
                status: '0',
                temp: '0.0',
            },
            {
                connection: 'true',
                current: '1.54',
                status: '1',
                temp: '32.0',
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
/* 157 */
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
/* 158 */
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
exports.MoveStatusSlamnav = exports.CurNodeDto = exports.GoalNodeDto = exports.VelocityStatusDto = exports.PoseStatusDto = exports.MoveStateDto = void 0;
const swagger_1 = __webpack_require__(58);
const class_validator_1 = __webpack_require__(61);
const util_1 = __webpack_require__(37);
const state_type_1 = __webpack_require__(157);
const state_type_2 = __webpack_require__(157);
var Description;
(function (Description) {
    Description["MOVE_AUTO"] = "\uC790\uC728\uC8FC\uD589 \uC774\uB3D9 \uC0C1\uD0DC";
    Description["MOVE_DOCK"] = "\uB3C4\uD0B9 \uC774\uB3D9 \uC0C1\uD0DC";
    Description["MOVE_JOG"] = "\uC870\uC774\uC2A4\uD2F1 \uC774\uB3D9 \uC0C1\uD0DC";
    Description["MOVE_OBS"] = "\uC8FC\uD589 \uC911 \uC7A5\uC560\uBB3C \uC0C1\uD0DC";
    Description["MOVE_PATH"] = "\uC8FC\uD589 \uACBD\uB85C\uC694\uCCAD \uC0C1\uD0DC";
    Description["POSE"] = "\uB85C\uBD07 \uAE00\uB85C\uBC8C\uC88C\uD45C. \uC704\uCE58\uCD08\uAE30\uD654\uAC00 good\uC778 \uC0C1\uD0DC\uC77C\uB54C \uC720\uC758\uBBF8 \uD569\uB2C8\uB2E4.";
    Description["VELOCITY"] = "\uB85C\uBD07 \uC8FC\uD589 \uC18D\uB3C4";
    Description["GOAL_NODE"] = "\uC8FC\uD589 \uBAA9\uD45C\uC9C0\uC810 \uC815\uBCF4 \uBC0F \uC0C1\uD0DC";
    Description["GOAL_NODE_ID"] = "\uC8FC\uD589 \uBAA9\uD45C\uC9C0\uC810 \uB178\uB4DC ID";
    Description["GOAL_NODE_NAME"] = "\uC8FC\uD589 \uBAA9\uD45C\uC9C0\uC810 \uB178\uB4DC \uC774\uB984";
    Description["GOAL_NODE_STATE"] = "\uC8FC\uD589 \uBAA9\uD45C\uC9C0\uC810 \uC774\uB3D9 \uC0C1\uD0DC";
    Description["GOAL_NODE_XYZ"] = "\uC8FC\uD589 \uBAA9\uD45C\uC9C0\uC810 \uAE00\uB85C\uBC8C \uC88C\uD45C";
    Description["CUR_NODE"] = "\uC8FC\uD589 \uD604\uC7AC\uC9C0\uC810 \uC815\uBCF4 \uBC0F \uC0C1\uD0DC";
    Description["CUR_NODE_ID"] = "\uC8FC\uD589 \uD604\uC7AC\uC9C0\uC810 \uB178\uB4DC ID";
    Description["CUR_NODE_NAME"] = "\uC8FC\uD589 \uD604\uC7AC\uC9C0\uC810 \uB178\uB4DC \uC774\uB984";
    Description["CUR_NODE_XYZ"] = "\uC8FC\uD589 \uD604\uC7AC\uC9C0\uC810 \uAE00\uB85C\uBC8C \uC88C\uD45C";
    Description["MOVE_STATE"] = "\uC774\uB3D9 \uC0C1\uD0DC \uAD00\uB828 \uC815\uBCF4";
    Description["TIME"] = "\uBA54\uC2DC\uC9C0 \uBC1C\uC1A1 \uC2DC\uAC04. ms \uB2E8\uC704";
})(Description || (Description = {}));
class MoveStateDto {
}
exports.MoveStateDto = MoveStateDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MOVE_AUTO,
        example: state_type_1.MoveState.notReady,
        enum: state_type_1.MoveState,
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MoveStateDto.prototype, "auto_move", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MOVE_DOCK,
        example: 'none',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MoveStateDto.prototype, "dock_move", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MOVE_JOG,
        example: 'none',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MoveStateDto.prototype, "jog_move", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MOVE_OBS,
        example: state_type_1.ObsState.none,
        enum: state_type_1.ObsState,
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MoveStateDto.prototype, "obs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MOVE_PATH,
        example: state_type_1.PathState.none,
        enum: state_type_1.PathState,
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MoveStateDto.prototype, "path", void 0);
class PoseStatusDto {
}
exports.PoseStatusDto = PoseStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POSE,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], PoseStatusDto.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POSE,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], PoseStatusDto.prototype, "y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POSE,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], PoseStatusDto.prototype, "rz", void 0);
class VelocityStatusDto {
}
exports.VelocityStatusDto = VelocityStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.VELOCITY,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], VelocityStatusDto.prototype, "vx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.VELOCITY,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], VelocityStatusDto.prototype, "vy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.VELOCITY,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], VelocityStatusDto.prototype, "wz", void 0);
class GoalNodeDto {
}
exports.GoalNodeDto = GoalNodeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.GOAL_NODE_ID,
        example: 'goal_1',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], GoalNodeDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.GOAL_NODE_NAME,
        example: 'goal_1',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], GoalNodeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.GOAL_NODE_STATE,
        example: state_type_2.GoalState.none,
        enum: state_type_2.GoalState,
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], GoalNodeDto.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.GOAL_NODE_XYZ,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], GoalNodeDto.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.GOAL_NODE_XYZ,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], GoalNodeDto.prototype, "y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.GOAL_NODE_XYZ,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], GoalNodeDto.prototype, "rz", void 0);
class CurNodeDto {
}
exports.CurNodeDto = CurNodeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CUR_NODE_ID,
        example: 'goal_1',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CurNodeDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CUR_NODE_NAME,
        example: 'goal_1',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CurNodeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CUR_NODE_XYZ,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CurNodeDto.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CUR_NODE_XYZ,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CurNodeDto.prototype, "y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CUR_NODE_XYZ,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CurNodeDto.prototype, "rz", void 0);
class MoveStatusSlamnav {
}
exports.MoveStatusSlamnav = MoveStatusSlamnav;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.MOVE_STATE,
        required: false,
    }),
    __metadata("design:type", MoveStateDto)
], MoveStatusSlamnav.prototype, "move_state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.POSE,
        required: false,
    }),
    __metadata("design:type", PoseStatusDto)
], MoveStatusSlamnav.prototype, "pose", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.VELOCITY,
        required: false,
    }),
    __metadata("design:type", VelocityStatusDto)
], MoveStatusSlamnav.prototype, "vel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.GOAL_NODE,
        required: false,
    }),
    __metadata("design:type", GoalNodeDto)
], MoveStatusSlamnav.prototype, "goal_node", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CUR_NODE,
        required: false,
    }),
    __metadata("design:type", CurNodeDto)
], MoveStatusSlamnav.prototype, "cur_node", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.TIME,
        example: util_1.DateUtil.getTimeString(),
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MoveStatusSlamnav.prototype, "time", void 0);


/***/ }),
/* 159 */
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
exports.PathResponseSlamnav = exports.PathDto = exports.Path = void 0;
const swagger_1 = __webpack_require__(58);
const class_validator_1 = __webpack_require__(61);
class Path {
}
exports.Path = Path;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Path 단위노드의 X값',
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], Path.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Path 단위노드의 Y값',
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], Path.prototype, "y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Path 단위노드의 RZ값',
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], Path.prototype, "rz", void 0);
class PathDto {
}
exports.PathDto = PathDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Path 단위노드의 X값',
        example: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        required: false,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], PathDto.prototype, "path", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Path 단위노드의 시간값',
        example: '21352345124124',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], PathDto.prototype, "time", void 0);
class PathResponseSlamnav {
}
exports.PathResponseSlamnav = PathResponseSlamnav;


/***/ }),
/* 160 */
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MappingCloudDto = exports.LidarCloudDto = exports.CloudDto = void 0;
const swagger_1 = __webpack_require__(58);
const class_validator_1 = __webpack_require__(61);
const movestatus_type_1 = __webpack_require__(158);
const util_1 = __webpack_require__(37);
var Description;
(function (Description) {
    Description["CLOUD_XYZ"] = "\uB77C\uC774\uB2E4 \uD074\uB77C\uC6B0\uB4DC\uC758 \uB85C\uBD07\uAE30\uC900 \uC88C\uD45C";
    Description["CLOUD_LIDAR"] = "\uD604\uC7AC \uB77C\uC774\uB2E4 \uB370\uC774\uD130 \uBC30\uC5F4";
    Description["STATUS_POSE"] = "\uB85C\uBD07 \uAE00\uB85C\uBC8C\uC88C\uD45C. \uC704\uCE58\uCD08\uAE30\uD654\uAC00 good\uC778 \uC0C1\uD0DC\uC77C\uB54C \uC720\uC758\uBBF8";
    Description["TIME"] = "\uBA54\uC2DC\uC9C0 \uBC1C\uC1A1 \uC2DC\uAC04. ms \uB2E8\uC704";
    Description["CLOUD_MAPPING"] = "\uB9F5 \uC0DD\uC131 \uC911 \uB204\uC801\uB418\uB294 \uB77C\uC774\uB2E4 \uB370\uC774\uD130 \uBC30\uC5F4(\uB204\uC801\uB41C \uC804\uCCB4 \uBC30\uC5F4\uC774 \uC544\uB2D8)";
})(Description || (Description = {}));
class CloudDto {
}
exports.CloudDto = CloudDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CLOUD_XYZ,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CloudDto.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CLOUD_XYZ,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CloudDto.prototype, "y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CLOUD_XYZ,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CloudDto.prototype, "z", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CLOUD_XYZ,
        example: '0.0',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CloudDto.prototype, "intensity", void 0);
class LidarCloudDto {
}
exports.LidarCloudDto = LidarCloudDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CLOUD_LIDAR,
        example: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ],
        required: false,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], LidarCloudDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: Description.STATUS_POSE, required: true }),
    __metadata("design:type", typeof (_b = typeof movestatus_type_1.PoseStatusDto !== "undefined" && movestatus_type_1.PoseStatusDto) === "function" ? _b : Object)
], LidarCloudDto.prototype, "pose", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.TIME,
        example: util_1.DateUtil.getTimeString(),
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], LidarCloudDto.prototype, "time", void 0);
class MappingCloudDto {
}
exports.MappingCloudDto = MappingCloudDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.CLOUD_MAPPING,
        example: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        required: false,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", typeof (_c = typeof Array !== "undefined" && Array) === "function" ? _c : Object)
], MappingCloudDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.TIME,
        example: util_1.DateUtil.getTimeString(),
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], MappingCloudDto.prototype, "time", void 0);


/***/ }),
/* 161 */
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
exports.ExAccessoryStatusDto = exports.TemperatureSensorStatusDto = exports.FootStatusDto = exports.ExAccessoryResponseExAccessory = exports.ExAccessoryRequestExAccessory = exports.ExAccessoryResponseDto = exports.ExAccessoryRequestDto = void 0;
const swagger_1 = __webpack_require__(58);
const control_type_1 = __webpack_require__(62);
const class_transformer_1 = __webpack_require__(60);
var FootStatus;
(function (FootStatus) {
    FootStatus[FootStatus["idle"] = 0] = "idle";
    FootStatus[FootStatus["init"] = 1] = "init";
    FootStatus[FootStatus["moving"] = 2] = "moving";
    FootStatus[FootStatus["emoStop"] = 3] = "emoStop";
    FootStatus[FootStatus["upDone"] = 4] = "upDone";
    FootStatus[FootStatus["downDone"] = 5] = "downDone";
})(FootStatus || (FootStatus = {}));
class ExAccessoryRequestDto {
}
exports.ExAccessoryRequestDto = ExAccessoryRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '외부 악세사리 명령',
        example: control_type_1.ControlCommand.footMove,
        required: true,
    }),
    __metadata("design:type", String)
], ExAccessoryRequestDto.prototype, "command", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Foot 명령 파라미터 (Foot 위치 값)',
        example: 100,
        required: false,
    }),
    __metadata("design:type", Number)
], ExAccessoryRequestDto.prototype, "position", void 0);
class ExAccessoryResponseDto extends ExAccessoryRequestDto {
}
exports.ExAccessoryResponseDto = ExAccessoryResponseDto;
class ExAccessoryRequestExAccessory extends ExAccessoryRequestDto {
}
exports.ExAccessoryRequestExAccessory = ExAccessoryRequestExAccessory;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '명령의 id값. 서버에서 자동 생성됩니다.',
        example: '550e8400-e29b-41d4-a716-446655440000',
        required: true,
    }),
    __metadata("design:type", String)
], ExAccessoryRequestExAccessory.prototype, "id", void 0);
class ExAccessoryResponseExAccessory extends ExAccessoryRequestExAccessory {
}
exports.ExAccessoryResponseExAccessory = ExAccessoryResponseExAccessory;
class FootStatusDto {
}
exports.FootStatusDto = FootStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Foot 연결 상태',
        example: true,
    }),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], FootStatusDto.prototype, "connection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Foot 위치 값',
        example: 100,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], FootStatusDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Foot이 바닥을 지지하고 있는 상태 여부',
        example: false,
    }),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], FootStatusDto.prototype, "is_down", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Foot 상태',
        example: FootStatus.moving,
        enum: FootStatus,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], FootStatusDto.prototype, "foot_status", void 0);
class TemperatureSensorStatusDto {
}
exports.TemperatureSensorStatusDto = TemperatureSensorStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '온도센서 연결 상태',
        example: true,
    }),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], TemperatureSensorStatusDto.prototype, "connection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '온도센서 측정값',
        example: 25,
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], TemperatureSensorStatusDto.prototype, "temperature_value", void 0);
class ExAccessoryStatusDto {
}
exports.ExAccessoryStatusDto = ExAccessoryStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Foot 상태',
        type: FootStatusDto,
    }),
    __metadata("design:type", FootStatusDto)
], ExAccessoryStatusDto.prototype, "foot", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '온도센서 상태',
        type: TemperatureSensorStatusDto,
    }),
    __metadata("design:type", TemperatureSensorStatusDto)
], ExAccessoryStatusDto.prototype, "temperature_sensor", void 0);


/***/ }),
/* 162 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RobotSocketModule = void 0;
const common_1 = __webpack_require__(5);
const slamnav_socket_service_1 = __webpack_require__(163);
const microservices_1 = __webpack_require__(3);
const common_2 = __webpack_require__(8);
const path_1 = __webpack_require__(44);
const taskman_socket_service_1 = __webpack_require__(165);
const constant_1 = __webpack_require__(65);
const config_1 = __webpack_require__(74);
const robot_socket_mqtt_controller_1 = __webpack_require__(166);
const slamnav_socket_gateway_1 = __webpack_require__(170);
const taskman_socket_gateway_1 = __webpack_require__(171);
const ex_accessory_socket_gateway_1 = __webpack_require__(174);
const ex_accessory_socket_service_1 = __webpack_require__(169);
let RobotSocketModule = class RobotSocketModule {
};
exports.RobotSocketModule = RobotSocketModule;
exports.RobotSocketModule = RobotSocketModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
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
                                package: common_2.ControlMicroservice.protobufPackage,
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
                                package: common_2.MoveMicroservice.protobufPackage,
                                protoPath: (0, path_1.join)(process.cwd(), 'proto/move.proto'),
                                url: configService.get('MOVE_GRPC_URL'),
                            },
                        }),
                    },
                ],
            }),
        ],
        controllers: [robot_socket_mqtt_controller_1.RobotSocketMqttController],
        providers: [
            ex_accessory_socket_gateway_1.ExAccessorySocketGateway,
            slamnav_socket_gateway_1.SlamnavSocketGateway,
            taskman_socket_gateway_1.TaskmanSocketGateway,
            ex_accessory_socket_service_1.ExAccessorySocketService,
            taskman_socket_service_1.TaskmanService,
            slamnav_socket_service_1.SlamnavService,
        ],
    })
], RobotSocketModule);


/***/ }),
/* 163 */
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
exports.SlamnavService = void 0;
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(5);
const microservices_1 = __webpack_require__(3);
const lodash_1 = __webpack_require__(164);
const constant_1 = __webpack_require__(65);
let SlamnavService = class SlamnavService {
    constructor(mqttMicroservice) {
        this.mqttMicroservice = mqttMicroservice;
        this.loggerService = common_1.LoggerService.get('gateway-robot');
        this.warningTime = 1000;
    }
    setServer(server) {
        this.server = server;
    }
    setSlamnav(slamnav) {
        this.slamnav = slamnav;
    }
    getConnection() {
        console.log('getConnection');
        if (this.slamnav) {
            this.mqttMicroservice.emit('con:slamnav', {});
        }
        else {
            this.mqttMicroservice.emit('discon:slamnav', {});
        }
    }
    moveRequest(data) {
        this.loggerService.debug(`[SLAMNAV] moveRequest : ${JSON.stringify(data)}`);
        console.log(this.slamnav ? 'slamnav connected' : 'slamnav disconnected');
        this.slamnav?.emit('moveRequest', data);
    }
    localizationRequest(data) {
        this.slamnav?.emit('localizationRequest', data);
    }
    mappingRequest(data) {
        this.slamnav?.emit('mappingRequest', data);
    }
    controlRequest(data) {
        this.slamnav?.emit('controlRequest', data);
    }
    loadRequest(data) {
        this.slamnav?.emit('loadRequest', data);
    }
    settingRequest(data) {
        this.slamnav?.emit('settingRequest', data);
    }
    swVersionInfo(data) {
        this.slamnav?.emit('swVersionInfo', data);
    }
    moveResponse(data) {
        const json = JSON.parse(JSON.stringify(data));
        console.log(json.result, json.id);
        console.log('moveResponse : ', data, data.result, data.id, JSON.parse(JSON.stringify(data)));
        if (data.id == undefined) {
            this.loggerService.warn(`[SLAMNAV] moveResponse : id undefined`);
        }
        this.mqttMicroservice.emit('moveResponse', data);
    }
    loadResponse(data) {
        if (data.id == undefined) {
            this.loggerService.warn(`[SLAMNAV] loadResponse : id undefined`);
        }
        this.mqttMicroservice.emit('loadResponse', data);
    }
    localizationResponse(data) {
        if (data.id == undefined) {
            this.loggerService.warn(`[SLAMNAV] localizationResponse : id undefined`);
        }
        this.mqttMicroservice.emit('localizationResponse', data);
    }
    mappingResponse(data) {
        if (data.id == undefined) {
            this.loggerService.warn(`[SLAMNAV] mappingResponse : id undefined`);
        }
        this.mqttMicroservice.emit('mappingResponse', data);
    }
    controlResponse(data) {
        if (data.id == undefined) {
            this.loggerService.warn(`[SLAMNAV] controlResponse : id undefined`);
        }
        this.mqttMicroservice.emit('controlResponse', data);
    }
    settingResponse(data) {
        if (data.id == undefined) {
            this.loggerService.warn(`[SLAMNAV] settingResponse : id undefined`);
        }
        this.mqttMicroservice.emit('settingResponse', data);
    }
    swVersionInfoResponse(data) {
        if (data.id == undefined) {
            this.loggerService.warn(`[SLAMNAV] swVersionInfoResponse : id undefined`);
        }
        console.log('swVersionInfoResponse emit', data);
        this.mqttMicroservice.emit('swVersionInfoResponse', data);
    }
    status(data) {
        try {
            if (data == null || data == undefined) {
                this.loggerService.warn(`[SLAMNAV] status: NULL`);
                return;
            }
            const time = data.time;
            if (data.time) {
                const delayTime = Date.now() - parseInt(data.time);
                if (delayTime > this.warningTime) {
                }
            }
            if ((0, lodash_1.isEqual)(data, this.lastStatus)) {
                return;
            }
            this.lastStatus = data;
            this.mqttMicroservice.emit('status', { ...data, time });
        }
        catch (error) {
            this.loggerService.error(`[SLAMNAV] status: ${(0, common_1.errorToJson)(error)}`);
            throw error();
        }
    }
    moveStatus(data) {
        try {
            if (data == null || data == undefined) {
                this.loggerService.warn(`[SLAMNAV] moveStatus: NULL`);
                return;
            }
            const time = data.time;
            if (data.time) {
                const delayTime = Date.now() - parseInt(data.time);
                if (delayTime > this.warningTime) {
                }
            }
            if ((0, lodash_1.isEqual)(data, this.lastMoveStatus)) {
                return;
            }
            this.lastMoveStatus = data;
            this.mqttMicroservice.emit('moveStatus', { ...data, time });
        }
        catch (error) {
            this.loggerService.error(`[SLAMNAV] moveStatus: ${(0, common_1.errorToJson)(error)}`);
            throw error();
        }
    }
    localPath(data) {
        try {
            if (data === undefined || data === null) {
                this.loggerService.warn(`[SLAMNAV] localPath : data undefined`);
                return;
            }
            if (data.path === undefined || data.path === null || data.path.length === 0) {
                this.loggerService.warn(`[SLAMNAV] localPath : data.path empty`);
                return;
            }
            const time = data.time;
            if (data.time) {
                const delayTime = Date.now() - parseInt(data.time);
                if (delayTime > this.warningTime) {
                    this.loggerService.warn(`[SLAMNAV] localPath: ${delayTime}ms`);
                }
            }
            if ((0, lodash_1.isEqual)(data, this.lastLocalPath)) {
                return;
            }
            this.lastLocalPath = data;
            this.mqttMicroservice.emit('localPath', { ...data, time });
        }
        catch (error) {
            this.loggerService.error(`[SLAMNAV] localPath: ${(0, common_1.errorToJson)(error)}`);
            throw error();
        }
    }
    globalPath(data) {
        try {
            if (data === undefined || data === null) {
                this.loggerService.warn(`[SLAMNAV] globalPath : data undefined`);
                return;
            }
            if (data.path === undefined || data.path === null || data.path.length === 0) {
                this.loggerService.warn(`[SLAMNAV] globalPath : data.path empty`);
                return;
            }
            const time = data.time;
            if (data.time) {
                const delayTime = Date.now() - parseInt(data.time);
                if (delayTime > this.warningTime) {
                    this.loggerService.warn(`[SLAMNAV] globalPath: ${delayTime}ms`);
                }
            }
            if ((0, lodash_1.isEqual)(data, this.lastGlobalPath)) {
                return;
            }
            this.lastGlobalPath = data;
            this.mqttMicroservice.emit('globalPath', { ...data, time });
        }
        catch (error) {
            this.loggerService.error(`[SLAMNAV] globalPath: ${(0, common_1.errorToJson)(error)}`);
            throw error();
        }
    }
    lidarCloud(data) {
        try {
            if (data.data == null || data.data == undefined || data.data.length == 0) {
                this.loggerService.warn(`[SLAMNAV] lidarCloud: NULL`);
                return;
            }
            if (data.time) {
                const delayTime = Date.now() - parseInt(data.time);
                if (delayTime > this.warningTime) {
                }
            }
            if ((0, lodash_1.isEqual)(data.data, this.lastLidarCloud)) {
                return;
            }
            this.lastLidarCloud = data;
            this.mqttMicroservice.emit('lidarCloud', data);
        }
        catch (error) {
            this.loggerService.error(`[SLAMNAV] lidarCloud: ${(0, common_1.errorToJson)(error)}`);
            throw error();
        }
    }
    mappingCloud(data) {
        try {
            if (data.data == null || data.data == undefined || data.data.length == 0) {
                this.loggerService.warn(`[SLAMNAV] mappingCloud: NULL`);
                return;
            }
            const time = data.time;
            if (data.time) {
                const delayTime = Date.now() - parseInt(data.time);
                if (delayTime > this.warningTime) {
                    this.loggerService.warn(`[SLAMNAV] mappingCloud: ${delayTime}ms`);
                }
                delete data.time;
            }
            this.mqttMicroservice.emit('mappingCloud', { ...data, time });
        }
        catch (error) {
            this.loggerService.error(`[SLAMNAV] mappingCloud: ${(0, common_1.errorToJson)(error)}`);
            throw error();
        }
    }
};
exports.SlamnavService = SlamnavService;
exports.SlamnavService = SlamnavService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, common_2.Inject)(constant_1.MQTT_BROKER)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientMqtt !== "undefined" && microservices_1.ClientMqtt) === "function" ? _a : Object])
], SlamnavService);


/***/ }),
/* 164 */
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),
/* 165 */
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
exports.TaskmanService = void 0;
const common_1 = __webpack_require__(5);
const microservices_1 = __webpack_require__(3);
const constant_1 = __webpack_require__(65);
let TaskmanService = class TaskmanService {
    constructor(mqttMicroservice) {
        this.mqttMicroservice = mqttMicroservice;
    }
    setServer(server) {
        this.server = server;
    }
    setTaskman(taskman) {
        this.taskman = taskman;
    }
    getConnection() {
        if (this.taskman) {
            this.mqttMicroservice.emit('con:taskman', {});
        }
        else {
            this.mqttMicroservice.emit('discon:taskman', {});
        }
    }
    taskResponse(dto) {
        this.mqttMicroservice.emit('taskResponse', dto);
    }
    variablesResponse(dto) {
        this.mqttMicroservice.emit('variablesResponse', dto);
    }
    stateResponse(dto) {
        this.mqttMicroservice.emit('stateResponse', dto);
    }
    moveResponse(dto) {
        this.taskman?.emit('moveResponse', dto);
    }
    dockResponse(dto) {
        this.taskman?.emit('dockResponse', dto);
    }
    status(dto) {
        this.taskman?.emit('status', dto);
    }
    moveStatus(dto) {
        this.taskman?.emit('moveStatus', dto);
    }
    taskRequest(dto) {
        this.taskman?.emit('taskRequest', dto);
        console.log('taskRequest : ', dto);
    }
    stateRequest(dto) {
        this.taskman?.emit('stateRequest', dto);
    }
    variableRequest(dto) {
        this.taskman?.emit('variableRequest', dto);
    }
};
exports.TaskmanService = TaskmanService;
exports.TaskmanService = TaskmanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constant_1.MQTT_BROKER)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientMqtt !== "undefined" && microservices_1.ClientMqtt) === "function" ? _a : Object])
], TaskmanService);


/***/ }),
/* 166 */
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RobotSocketMqttController = void 0;
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(5);
const slamnav_socket_service_1 = __webpack_require__(163);
const microservices_1 = __webpack_require__(3);
const nestjs_asyncapi_1 = __webpack_require__(2);
const taskman_socket_service_1 = __webpack_require__(165);
const move_dto_1 = __webpack_require__(101);
const move_domain_1 = __webpack_require__(98);
const localization_domain_1 = __webpack_require__(167);
const control_domain_1 = __webpack_require__(168);
const move_dto_2 = __webpack_require__(101);
const control_dto_1 = __webpack_require__(59);
const status_type_1 = __webpack_require__(156);
const movestatus_type_1 = __webpack_require__(158);
const map_command_domain_1 = __webpack_require__(114);
const task_dto_1 = __webpack_require__(109);
const ex_accessory_socket_service_1 = __webpack_require__(169);
const exAccessory_dto_1 = __webpack_require__(161);
const version_dto_1 = __webpack_require__(139);
const setting_dto_1 = __webpack_require__(94);
let RobotSocketMqttController = class RobotSocketMqttController {
    constructor(slamnavService, exAccessoryService, taskmanService) {
        this.slamnavService = slamnavService;
        this.exAccessoryService = exAccessoryService;
        this.taskmanService = taskmanService;
        this.loggerService = common_1.LoggerService.get('gateway-robot');
    }
    getConnection() {
        this.slamnavService.getConnection();
        this.taskmanService.getConnection();
    }
    moveJog(data) {
        this.slamnavService.moveRequest(data);
    }
    MoveRequest(data) {
        console.log('moveRequest', data);
        this.slamnavService.moveRequest(data);
    }
    LocalizationRequest(data) {
        this.slamnavService.localizationRequest(data);
    }
    swVersionInfo(data) {
        this.slamnavService.swVersionInfo(data);
    }
    MappingRequest(data) {
        this.slamnavService.mappingRequest(data);
    }
    ControlRequest(data) {
        this.slamnavService.controlRequest(data);
    }
    LoadRequest(data) {
        this.slamnavService.loadRequest(data);
    }
    SettingRequest(data) {
        this.slamnavService.settingRequest(data);
    }
    getMoveResponse(data) {
        this.taskmanService.moveResponse(data);
    }
    getDockResponse(data) {
        this.taskmanService.dockResponse(data);
    }
    getStatus(data) {
        this.taskmanService.status(data);
    }
    getMoveStatus(data) {
        this.taskmanService.moveStatus(data);
    }
    exAccessoryRequest(data) {
        this.exAccessoryService.exAccessoryRequest(data);
    }
    taskRequest(data) {
        console.log('taskman:taskReqeust');
        this.taskmanService.taskRequest(data);
    }
    stateRequest(data) {
        console.log('taskman:stateRequest', data);
        this.taskmanService.stateRequest(data);
    }
    variableRequest(data) {
        console.log('taskman:variableRequest');
        this.taskmanService.variableRequest(data);
    }
};
exports.RobotSocketMqttController = RobotSocketMqttController;
__decorate([
    (0, microservices_1.MessagePattern)('getConnection'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RobotSocketMqttController.prototype, "getConnection", null);
__decorate([
    (0, microservices_1.MessagePattern)('moveJog'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof move_dto_1.MoveRequestSlamnav !== "undefined" && move_dto_1.MoveRequestSlamnav) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], RobotSocketMqttController.prototype, "moveJog", null);
__decorate([
    (0, microservices_1.MessagePattern)('moveRequest'),
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'moveRequest',
        message: {
            payload: move_dto_1.MoveRequestDto,
        },
        description: 'Move 요청',
    }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof move_domain_1.MoveModel !== "undefined" && move_domain_1.MoveModel) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], RobotSocketMqttController.prototype, "MoveRequest", null);
__decorate([
    (0, microservices_1.MessagePattern)('localizationRequest'),
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'localizationRequest',
        message: {
            payload: localization_domain_1.LocalizationModel,
        },
        description: 'Localization 요청',
    }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof localization_domain_1.LocalizationModel !== "undefined" && localization_domain_1.LocalizationModel) === "function" ? _f : Object]),
    __metadata("design:returntype", void 0)
], RobotSocketMqttController.prototype, "LocalizationRequest", null);
__decorate([
    (0, microservices_1.MessagePattern)('swVersionInfo'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof version_dto_1.GetCurrentVersionRequestSocketDto !== "undefined" && version_dto_1.GetCurrentVersionRequestSocketDto) === "function" ? _g : Object]),
    __metadata("design:returntype", void 0)
], RobotSocketMqttController.prototype, "swVersionInfo", null);
__decorate([
    (0, microservices_1.MessagePattern)('mappingRequest'),
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'mappingRequest',
        message: {
            payload: map_command_domain_1.MapCommandModel,
        },
        description: 'Mapping 요청',
    }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof map_command_domain_1.MapCommandModel !== "undefined" && map_command_domain_1.MapCommandModel) === "function" ? _h : Object]),
    __metadata("design:returntype", void 0)
], RobotSocketMqttController.prototype, "MappingRequest", null);
__decorate([
    (0, microservices_1.MessagePattern)('controlRequest'),
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'controlRequest',
        message: {
            payload: control_domain_1.ControlModel,
        },
        description: 'Control 요청',
    }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof control_domain_1.ControlModel !== "undefined" && control_domain_1.ControlModel) === "function" ? _j : Object]),
    __metadata("design:returntype", void 0)
], RobotSocketMqttController.prototype, "ControlRequest", null);
__decorate([
    (0, microservices_1.MessagePattern)('loadRequest'),
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'loadRequest',
        message: {
            payload: map_command_domain_1.MapCommandModel,
        },
        description: 'Load 요청',
    }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof map_command_domain_1.MapCommandModel !== "undefined" && map_command_domain_1.MapCommandModel) === "function" ? _k : Object]),
    __metadata("design:returntype", void 0)
], RobotSocketMqttController.prototype, "LoadRequest", null);
__decorate([
    (0, microservices_1.MessagePattern)('settingRequest'),
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'settingRequest',
        message: {
            payload: setting_dto_1.SettingRequestSlamnav,
        },
        description: 'Setting 요청',
    }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof setting_dto_1.SettingRequestSlamnav !== "undefined" && setting_dto_1.SettingRequestSlamnav) === "function" ? _l : Object]),
    __metadata("design:returntype", void 0)
], RobotSocketMqttController.prototype, "SettingRequest", null);
__decorate([
    (0, microservices_1.MessagePattern)('moveResponse'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof move_dto_2.MoveResponseSlamnav !== "undefined" && move_dto_2.MoveResponseSlamnav) === "function" ? _m : Object]),
    __metadata("design:returntype", void 0)
], RobotSocketMqttController.prototype, "getMoveResponse", null);
__decorate([
    (0, microservices_1.MessagePattern)('dockResponse'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_o = typeof control_dto_1.ControlResponseSlamnav !== "undefined" && control_dto_1.ControlResponseSlamnav) === "function" ? _o : Object]),
    __metadata("design:returntype", void 0)
], RobotSocketMqttController.prototype, "getDockResponse", null);
__decorate([
    (0, microservices_1.MessagePattern)('status'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_p = typeof status_type_1.StatusSlamnav !== "undefined" && status_type_1.StatusSlamnav) === "function" ? _p : Object]),
    __metadata("design:returntype", void 0)
], RobotSocketMqttController.prototype, "getStatus", null);
__decorate([
    (0, microservices_1.MessagePattern)('moveStatus'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_q = typeof movestatus_type_1.MoveStatusSlamnav !== "undefined" && movestatus_type_1.MoveStatusSlamnav) === "function" ? _q : Object]),
    __metadata("design:returntype", void 0)
], RobotSocketMqttController.prototype, "getMoveStatus", null);
__decorate([
    (0, microservices_1.MessagePattern)('exAccessoryRequest'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_r = typeof exAccessory_dto_1.ExAccessoryRequestExAccessory !== "undefined" && exAccessory_dto_1.ExAccessoryRequestExAccessory) === "function" ? _r : Object]),
    __metadata("design:returntype", void 0)
], RobotSocketMqttController.prototype, "exAccessoryRequest", null);
__decorate([
    (0, microservices_1.MessagePattern)('taskman:taskRequest'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_s = typeof task_dto_1.TaskRequestDto !== "undefined" && task_dto_1.TaskRequestDto) === "function" ? _s : Object]),
    __metadata("design:returntype", void 0)
], RobotSocketMqttController.prototype, "taskRequest", null);
__decorate([
    (0, microservices_1.MessagePattern)('taskman:stateRequest'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RobotSocketMqttController.prototype, "stateRequest", null);
__decorate([
    (0, microservices_1.MessagePattern)('taskman:variableRequest'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RobotSocketMqttController.prototype, "variableRequest", null);
exports.RobotSocketMqttController = RobotSocketMqttController = __decorate([
    (0, common_2.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof slamnav_socket_service_1.SlamnavService !== "undefined" && slamnav_socket_service_1.SlamnavService) === "function" ? _a : Object, typeof (_b = typeof ex_accessory_socket_service_1.ExAccessorySocketService !== "undefined" && ex_accessory_socket_service_1.ExAccessorySocketService) === "function" ? _b : Object, typeof (_c = typeof taskman_socket_service_1.TaskmanService !== "undefined" && taskman_socket_service_1.TaskmanService) === "function" ? _c : Object])
], RobotSocketMqttController);


/***/ }),
/* 167 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalizationModel = exports.LocalizationStatus = void 0;
const localization_type_1 = __webpack_require__(79);
const util_1 = __webpack_require__(37);
const microservices_1 = __webpack_require__(3);
const uuid_1 = __webpack_require__(39);
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
/* 168 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControlModel = exports.ControlStatus = void 0;
const rpc_code_exception_1 = __webpack_require__(50);
const constant_1 = __webpack_require__(51);
const control_type_1 = __webpack_require__(62);
const microservices_1 = __webpack_require__(3);
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
/* 169 */
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
exports.ExAccessorySocketService = void 0;
const common_1 = __webpack_require__(5);
const microservices_1 = __webpack_require__(3);
const constant_1 = __webpack_require__(65);
let ExAccessorySocketService = class ExAccessorySocketService {
    constructor(mqttMicroservice) {
        this.mqttMicroservice = mqttMicroservice;
    }
    setExAccessory(exAccessory) {
        this.exAccessory = exAccessory;
    }
    getConnection() {
        if (this.exAccessory) {
            this.mqttMicroservice.emit('con:exAccessory', {});
        }
        else {
            this.mqttMicroservice.emit('discon:exAccessory', {});
        }
    }
    exAccessoryRequest(dto) {
        this.exAccessory?.emit('exAccessoryRequest', dto);
    }
    exAccessoryResponse(dto) {
        this.mqttMicroservice.emit('exAccessoryResponse', dto);
    }
    exAccessoryStatus(dto) {
        this.mqttMicroservice.emit('exAccessoryStatus', dto);
    }
};
exports.ExAccessorySocketService = ExAccessorySocketService;
exports.ExAccessorySocketService = ExAccessorySocketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constant_1.MQTT_BROKER)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientMqtt !== "undefined" && microservices_1.ClientMqtt) === "function" ? _a : Object])
], ExAccessorySocketService);


/***/ }),
/* 170 */
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SlamnavSocketGateway = void 0;
const websockets_1 = __webpack_require__(150);
const socket_io_1 = __webpack_require__(152);
const slamnav_socket_service_1 = __webpack_require__(163);
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(5);
const microservices_1 = __webpack_require__(3);
const nestjs_asyncapi_1 = __webpack_require__(2);
const constant_1 = __webpack_require__(65);
const move_dto_1 = __webpack_require__(101);
const localization_dto_1 = __webpack_require__(78);
const control_dto_1 = __webpack_require__(59);
const status_type_1 = __webpack_require__(156);
const movestatus_type_1 = __webpack_require__(158);
const path_type_1 = __webpack_require__(159);
const cloud_type_1 = __webpack_require__(160);
const load_dto_1 = __webpack_require__(118);
const mapping_dto_1 = __webpack_require__(117);
const version_dto_1 = __webpack_require__(139);
const setting_dto_1 = __webpack_require__(94);
let SlamnavSocketGateway = class SlamnavSocketGateway {
    constructor(slamnavService, mqttMicroservice) {
        this.slamnavService = slamnavService;
        this.mqttMicroservice = mqttMicroservice;
        this.loggerService = common_1.LoggerService.get('gateway-robot');
        this.slamnav = null;
    }
    afterInit(server) {
        this.slamnavService.setServer(server);
        this.slamnavService.setSlamnav(this.slamnav);
    }
    onModuleDestroy() {
        console.log('socket Gateway Destroy');
        this.slamnav?.disconnect();
        this.slamnav = null;
        this.mqttMicroservice.emit('discon:slamnav', {});
    }
    handleConnection(client) {
        this.loggerService.info(`[SLAMNAV] Connect Slamnav : ${client.id}`);
        if (this.slamnav) {
            this.loggerService.warn(`[SLAMNAV] Slamnav already connected : slamnav(${this.slamnav.id}), new(${client.id})`);
        }
        else {
            this.slamnav = client;
            this.slamnavService.setSlamnav(this.slamnav);
            this.mqttMicroservice.emit('con:slamnav', {});
        }
    }
    handleDisconnect(client) {
        if (this.slamnav?.id == client.id) {
            this.loggerService.info(`[SLAMNAV] Disconnect Slamnav : ${client.id}`);
            this.slamnav.disconnect();
            this.slamnav = null;
            this.mqttMicroservice.emit('discon:slamnav', {});
        }
        else {
            this.loggerService.warn(`[SLAMNAV] Disconnect unknown client : slamnav(${this.slamnav?.id}), client(${client.id})`);
        }
    }
    async handleMoveResponse(data, client) {
        console.log(data, data.result, data.id);
        console.log(data, JSON.parse(JSON.stringify(data)));
        if (client.id == this.slamnav?.id) {
            this.slamnavService.moveResponse(data);
        }
        else {
            this.loggerService.warn(`[SLAMNAV] handleMoveResponse : client id not match (${client.id} !== ${this.slamnav?.id})`);
        }
    }
    async handleLocalizationResponse(data, client) {
        if (client.id == this.slamnav?.id) {
            this.slamnavService.localizationResponse(data);
        }
        else {
            this.loggerService.warn(`[SLAMNAV] handleLocalizationResponse : client id not match (${client.id} !== ${this.slamnav?.id})`);
        }
    }
    async handleLoadResponse(data, client) {
        if (client.id == this.slamnav?.id) {
            this.slamnavService.loadResponse(data);
        }
        else {
            this.loggerService.warn(`[SLAMNAV] handleLoadResponse : client id not match (${client.id} !== ${this.slamnav?.id})`);
        }
    }
    async handleMappingResponse(data, client) {
        if (client.id == this.slamnav?.id) {
            this.slamnavService.mappingResponse(data);
        }
        else {
            this.loggerService.warn(`[SLAMNAV] handleMappingResponse : client id not match (${client.id} !== ${this.slamnav?.id})`);
        }
    }
    async handleControlResponse(data, client) {
        if (client.id == this.slamnav?.id) {
            this.slamnavService.controlResponse(data);
        }
        else {
            this.loggerService.warn(`[SLAMNAV] handleControlResponse : client id not match (${client.id} !== ${this.slamnav?.id})`);
        }
    }
    async handleSettingResponse(data, client) {
        if (client.id == this.slamnav?.id) {
            this.slamnavService.settingResponse(data);
        }
        else {
            this.loggerService.warn(`[SLAMNAV] handleSettingResponse : client id not match (${client.id} !== ${this.slamnav?.id})`);
        }
    }
    async handleVersionResponse(data, client) {
        if (client.id == this.slamnav?.id) {
            this.slamnavService.swVersionInfoResponse(data);
        }
        else {
            this.loggerService.warn(`[SLAMNAV] handleVersionResponse : client id not match (${client.id} !== ${this.slamnav?.id})`);
        }
    }
    async handleStatus(data, client) {
        if (client.id == this.slamnav?.id) {
            this.slamnavService.status(data);
        }
    }
    async handleMoveStatus(data, client) {
        if (client.id == this.slamnav?.id) {
            this.slamnavService.moveStatus(data);
        }
    }
    async handleLocalPath(data, client) {
        if (client.id == this.slamnav?.id) {
            this.slamnavService.localPath(data);
        }
    }
    async handleGlobalPath(data, client) {
        if (client.id == this.slamnav?.id) {
            this.slamnavService.globalPath(data);
        }
    }
    async handleLidarCloud(data, client) {
        if (client.id == this.slamnav?.id) {
            this.slamnavService.lidarCloud(data);
        }
    }
    async handleMappingCloud(data, client) {
        if (client.id == this.slamnav?.id) {
            this.slamnavService.mappingCloud(data);
        }
    }
};
exports.SlamnavSocketGateway = SlamnavSocketGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_c = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _c : Object)
], SlamnavSocketGateway.prototype, "server", void 0);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], SlamnavSocketGateway.prototype, "handleConnection", null);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], SlamnavSocketGateway.prototype, "handleDisconnect", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('moveResponse'),
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'moveResponse',
        message: {
            payload: move_dto_1.MoveResponseSlamnav,
        },
        description: 'Move 요청에 따른 응답. 이동 상태에 따라 여러번 호출될 수 있음',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_f = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], SlamnavSocketGateway.prototype, "handleMoveResponse", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('localizationResponse'),
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'localizationResponse',
        message: {
            payload: localization_dto_1.LocalizationResponseSlamnav,
        },
        description: 'Localization 요청에 따른 응답.',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof localization_dto_1.LocalizationResponseSlamnav !== "undefined" && localization_dto_1.LocalizationResponseSlamnav) === "function" ? _g : Object, typeof (_h = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], SlamnavSocketGateway.prototype, "handleLocalizationResponse", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('loadResponse'),
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'loadResponse',
        message: {
            payload: load_dto_1.LoadResponseSlamnav,
        },
        description: 'Load 요청에 따른 응답',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof load_dto_1.LoadResponseSlamnav !== "undefined" && load_dto_1.LoadResponseSlamnav) === "function" ? _j : Object, typeof (_k = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], SlamnavSocketGateway.prototype, "handleLoadResponse", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('mappingResponse'),
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'mappingResponse',
        message: {
            payload: mapping_dto_1.MappingResponseSlamnav,
        },
        description: 'Mapping 요청에 따른 응답',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof mapping_dto_1.MappingResponseSlamnav !== "undefined" && mapping_dto_1.MappingResponseSlamnav) === "function" ? _l : Object, typeof (_m = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _m : Object]),
    __metadata("design:returntype", Promise)
], SlamnavSocketGateway.prototype, "handleMappingResponse", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('controlResponse'),
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'controlResponse',
        message: {
            payload: control_dto_1.ControlResponseSlamnav,
        },
        description: 'Control 요청에 따른 응답',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_o = typeof control_dto_1.ControlResponseSlamnav !== "undefined" && control_dto_1.ControlResponseSlamnav) === "function" ? _o : Object, typeof (_p = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _p : Object]),
    __metadata("design:returntype", Promise)
], SlamnavSocketGateway.prototype, "handleControlResponse", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('settingResponse'),
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'settingResponse',
        message: {
            payload: setting_dto_1.SettingResponseSlamnav,
        },
        description: 'Control 요청에 따른 응답',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_q = typeof setting_dto_1.SettingResponseSlamnav !== "undefined" && setting_dto_1.SettingResponseSlamnav) === "function" ? _q : Object, typeof (_r = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _r : Object]),
    __metadata("design:returntype", Promise)
], SlamnavSocketGateway.prototype, "handleSettingResponse", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('swVersionInfoResponse'),
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'swVersionInfoResponse',
        message: {
            payload: version_dto_1.GetCurrentVersionResponseSocketDto,
        },
        description: 'Update 요청에 따른 응답',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_s = typeof version_dto_1.GetCurrentVersionResponseSocketDto !== "undefined" && version_dto_1.GetCurrentVersionResponseSocketDto) === "function" ? _s : Object, typeof (_t = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _t : Object]),
    __metadata("design:returntype", Promise)
], SlamnavSocketGateway.prototype, "handleVersionResponse", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('status'),
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'status',
        message: {
            payload: status_type_1.StatusSlamnav,
        },
        description: 'SLAMNAV에서 주기적 송신하는 상태정보. 2Hz',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_u = typeof status_type_1.StatusSlamnav !== "undefined" && status_type_1.StatusSlamnav) === "function" ? _u : Object, typeof (_v = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _v : Object]),
    __metadata("design:returntype", Promise)
], SlamnavSocketGateway.prototype, "handleStatus", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('moveStatus'),
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'moveStatus',
        message: {
            payload: movestatus_type_1.MoveStatusSlamnav,
        },
        description: 'SLAMNAV에서 주기적 송신하는 상태정보. 10Hz',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_w = typeof movestatus_type_1.MoveStatusSlamnav !== "undefined" && movestatus_type_1.MoveStatusSlamnav) === "function" ? _w : Object, typeof (_x = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _x : Object]),
    __metadata("design:returntype", Promise)
], SlamnavSocketGateway.prototype, "handleMoveStatus", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('localPath'),
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'localPath',
        message: {
            payload: path_type_1.PathDto,
        },
        description: 'SLAMNAV에서 주행하며 계산한 local 경로 배열. 변경될때마다 전송',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_y = typeof path_type_1.PathDto !== "undefined" && path_type_1.PathDto) === "function" ? _y : Object, typeof (_z = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _z : Object]),
    __metadata("design:returntype", Promise)
], SlamnavSocketGateway.prototype, "handleLocalPath", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('globalPath'),
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'globalPath',
        message: {
            payload: path_type_1.PathDto,
        },
        description: 'SLAMNAV에서 주행하며 계산한 globalPath 경로 배열. 변경될때마다 전송',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_0 = typeof path_type_1.PathDto !== "undefined" && path_type_1.PathDto) === "function" ? _0 : Object, typeof (_1 = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _1 : Object]),
    __metadata("design:returntype", Promise)
], SlamnavSocketGateway.prototype, "handleGlobalPath", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('lidarCloud'),
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'lidarCloud',
        message: {
            payload: cloud_type_1.LidarCloudDto,
        },
        description: 'SLAMNAV에서 주행하며 계산한 lidarCloud 경로 배열. 변경될때마다 전송',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_2 = typeof cloud_type_1.LidarCloudDto !== "undefined" && cloud_type_1.LidarCloudDto) === "function" ? _2 : Object, typeof (_3 = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _3 : Object]),
    __metadata("design:returntype", Promise)
], SlamnavSocketGateway.prototype, "handleLidarCloud", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('mappingCloud'),
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'mappingCloud',
        message: {
            payload: cloud_type_1.MappingCloudDto,
        },
        description: '맵 생성 중 누적되는 mappingCloud',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_4 = typeof cloud_type_1.MappingCloudDto !== "undefined" && cloud_type_1.MappingCloudDto) === "function" ? _4 : Object, typeof (_5 = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _5 : Object]),
    __metadata("design:returntype", Promise)
], SlamnavSocketGateway.prototype, "handleMappingCloud", null);
exports.SlamnavSocketGateway = SlamnavSocketGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        namespace: '/slamnav',
        cors: { origin: '*' },
        transports: ['websocket', 'polling'],
    }),
    __param(1, (0, common_2.Inject)(constant_1.MQTT_BROKER)),
    __metadata("design:paramtypes", [typeof (_a = typeof slamnav_socket_service_1.SlamnavService !== "undefined" && slamnav_socket_service_1.SlamnavService) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientMqtt !== "undefined" && microservices_1.ClientMqtt) === "function" ? _b : Object])
], SlamnavSocketGateway);


/***/ }),
/* 171 */
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskmanSocketGateway = void 0;
const websockets_1 = __webpack_require__(150);
const socket_io_1 = __webpack_require__(152);
const taskman_socket_service_1 = __webpack_require__(165);
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(5);
const microservices_1 = __webpack_require__(3);
const constant_1 = __webpack_require__(65);
const move_dto_1 = __webpack_require__(101);
const control_dto_1 = __webpack_require__(59);
const task_dto_1 = __webpack_require__(109);
const variables_dto_1 = __webpack_require__(172);
const state_dto_1 = __webpack_require__(173);
let TaskmanSocketGateway = class TaskmanSocketGateway {
    constructor(taskmanService, mqttMicroservice, moveMicroservice, controlMicroservice) {
        this.taskmanService = taskmanService;
        this.mqttMicroservice = mqttMicroservice;
        this.moveMicroservice = moveMicroservice;
        this.controlMicroservice = controlMicroservice;
        this.loggerService = common_1.LoggerService.get('gateway-robot');
        this.taskman = null;
    }
    afterInit(server) {
        this.taskmanService.setServer(server);
        this.taskmanService.setTaskman(this.taskman);
        this.controlService = this.controlMicroservice.getService('ControlGrpcService');
        this.moveService = this.moveMicroservice.getService('MoveGrpcService');
        this.taskmanService.setServer(server);
        this.taskmanService.setTaskman(this.taskman);
    }
    onModuleDestroy() {
        this.taskman?.disconnect();
        this.taskman = null;
        this.mqttMicroservice.emit('discon:taskman', {});
    }
    handleConnection(client) {
        this.loggerService.info(`[Gateway] Connect taskman : ${client.id}`);
        if (this.taskman) {
            this.loggerService.warn(`[Gateway] taskman already connected : taskman(${this.taskman.id}), new(${client.id})`);
        }
        else {
            this.taskman = client;
            this.taskmanService.setTaskman(this.taskman);
            this.mqttMicroservice.emit('con:taskman', {});
        }
    }
    handleDisconnect(client) {
        if (this.taskman?.id == client.id) {
            this.loggerService.info(`[Gateway] Disconnect taskman : ${client.id}`);
            this.taskman.disconnect();
            this.taskman = null;
            this.mqttMicroservice.emit('discon:taskman', {});
        }
        else {
            this.loggerService.warn(`[Gateway] Disconnect unknown client : taskman(${this.taskman?.id}), client(${client.id})`);
        }
    }
    async handleTaskResponse(data) {
        this.taskmanService.taskResponse(data);
    }
    async handleVariablesResponse(data) {
        this.taskmanService.variablesResponse(data);
    }
    async handelStateResponse(data) {
        console.log('stateResponse in');
        this.taskmanService.stateResponse(data);
    }
    async handleTaskMove(data) {
        this.moveService.moveCommand(data);
    }
    async handleTaskDock(data) {
        this.controlService.workControl(data);
    }
};
exports.TaskmanSocketGateway = TaskmanSocketGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_e = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _e : Object)
], TaskmanSocketGateway.prototype, "server", void 0);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _f : Object]),
    __metadata("design:returntype", void 0)
], TaskmanSocketGateway.prototype, "handleConnection", null);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _g : Object]),
    __metadata("design:returntype", void 0)
], TaskmanSocketGateway.prototype, "handleDisconnect", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('taskResponse'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof task_dto_1.TaskResponseDto !== "undefined" && task_dto_1.TaskResponseDto) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], TaskmanSocketGateway.prototype, "handleTaskResponse", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('variablesResponse'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof variables_dto_1.TaskVariablesResponseTaskman !== "undefined" && variables_dto_1.TaskVariablesResponseTaskman) === "function" ? _j : Object]),
    __metadata("design:returntype", Promise)
], TaskmanSocketGateway.prototype, "handleVariablesResponse", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('stateResponse'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof state_dto_1.TaskStateResponseTaskman !== "undefined" && state_dto_1.TaskStateResponseTaskman) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], TaskmanSocketGateway.prototype, "handelStateResponse", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('moveRequest'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof move_dto_1.MoveRequestDto !== "undefined" && move_dto_1.MoveRequestDto) === "function" ? _l : Object]),
    __metadata("design:returntype", Promise)
], TaskmanSocketGateway.prototype, "handleTaskMove", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('dock'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof control_dto_1.WorkRequestDto !== "undefined" && control_dto_1.WorkRequestDto) === "function" ? _m : Object]),
    __metadata("design:returntype", Promise)
], TaskmanSocketGateway.prototype, "handleTaskDock", null);
exports.TaskmanSocketGateway = TaskmanSocketGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        namespace: '/taskman',
        cors: { origin: '*' },
        transports: ['websocket', 'polling'],
    }),
    __param(1, (0, common_2.Inject)(constant_1.MQTT_BROKER)),
    __param(2, (0, common_2.Inject)(constant_1.MOVE_SERVICE)),
    __param(3, (0, common_2.Inject)(constant_1.CONTROL_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof taskman_socket_service_1.TaskmanService !== "undefined" && taskman_socket_service_1.TaskmanService) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientMqtt !== "undefined" && microservices_1.ClientMqtt) === "function" ? _b : Object, typeof (_c = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _c : Object, typeof (_d = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _d : Object])
], TaskmanSocketGateway);


/***/ }),
/* 172 */
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
const swagger_1 = __webpack_require__(58);
const class_validator_1 = __webpack_require__(61);
const task_type_1 = __webpack_require__(110);
const util_1 = __webpack_require__(37);
const class_transformer_1 = __webpack_require__(60);
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
/* 173 */
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
const class_validator_1 = __webpack_require__(61);
const swagger_1 = __webpack_require__(58);
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
    (0, class_validator_1.IsBoolean)(),
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
    (0, class_validator_1.IsBoolean)(),
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
/* 174 */
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExAccessorySocketGateway = void 0;
const websockets_1 = __webpack_require__(150);
const common_1 = __webpack_require__(5);
const socket_io_1 = __webpack_require__(152);
const ex_accessory_socket_service_1 = __webpack_require__(169);
const common_2 = __webpack_require__(8);
const constant_1 = __webpack_require__(65);
const microservices_1 = __webpack_require__(3);
const exAccessory_dto_1 = __webpack_require__(161);
const nestjs_asyncapi_1 = __webpack_require__(2);
let ExAccessorySocketGateway = class ExAccessorySocketGateway {
    constructor(exAccessoryService, mqttMicroservice, controlMicroservice) {
        this.exAccessoryService = exAccessoryService;
        this.mqttMicroservice = mqttMicroservice;
        this.controlMicroservice = controlMicroservice;
        this.loggerService = common_2.LoggerService.get('gateway-robot');
        this.exAccessory = null;
    }
    afterInit(server) {
        this.exAccessoryService.setExAccessory(this.exAccessory);
        this.controlService = this.controlMicroservice.getService('ControlGrpcService');
    }
    handleConnection(client) {
        this.loggerService.info(`[Gateway] Connect exAccessory : ${client.id}`);
        if (this.exAccessory) {
            this.loggerService.warn(`[Gateway] exAccessory already connected : exAccessory(${this.exAccessory.id}), new(${client.id})`);
        }
        else {
            this.exAccessory = client;
            this.exAccessoryService.setExAccessory(this.exAccessory);
            this.mqttMicroservice.emit('con:exAccessory', {});
        }
    }
    handleDisconnect(client) {
        this.loggerService.info(`[Gateway] Disconnected exAccessory : ${client.id}`);
        if (this.exAccessory?.id == client.id) {
            this.exAccessory.disconnect();
            this.exAccessory = null;
            this.mqttMicroservice.emit('discon:exAccessory', {});
        }
        else {
            this.loggerService.warn(`[Gateway] Disconnect unknown client : exAccessory(${this.exAccessory?.id}), client(${client.id})`);
        }
    }
    onModuleDestroy() {
        this.loggerService.info(`[Gateway] Destroyed exAccessory`);
    }
    async footStatus(data, client) {
        if (client.id == this.exAccessory?.id) {
            this.exAccessoryService.exAccessoryStatus(data);
        }
    }
    async footResponse(data, client) {
        if (client.id == this.exAccessory?.id) {
            this.loggerService.debug(`[Gateway] exAccessoryResponse : ${JSON.stringify(data)}`);
            this.exAccessoryService.exAccessoryResponse(data);
        }
    }
    async test(data, client) {
        console.log(`test: ${JSON.stringify(data)}`);
    }
};
exports.ExAccessorySocketGateway = ExAccessorySocketGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_d = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _d : Object)
], ExAccessorySocketGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('exAccessoryStatus'),
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'exAccessoryStatus',
        message: {
            payload: exAccessory_dto_1.ExAccessoryStatusDto,
        },
        description: 'External Accessory 상태',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof exAccessory_dto_1.ExAccessoryStatusDto !== "undefined" && exAccessory_dto_1.ExAccessoryStatusDto) === "function" ? _e : Object, typeof (_f = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], ExAccessorySocketGateway.prototype, "footStatus", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('exAccessoryResponse'),
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'exAccessoryResponse',
        message: {
            payload: exAccessory_dto_1.ExAccessoryResponseExAccessory,
        },
        description: 'External Accessory 응답',
    }),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof exAccessory_dto_1.ExAccessoryResponseExAccessory !== "undefined" && exAccessory_dto_1.ExAccessoryResponseExAccessory) === "function" ? _g : Object, typeof (_h = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], ExAccessorySocketGateway.prototype, "footResponse", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('status'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_j = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _j : Object]),
    __metadata("design:returntype", Promise)
], ExAccessorySocketGateway.prototype, "test", null);
exports.ExAccessorySocketGateway = ExAccessorySocketGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        namespace: '/externalAccessory',
        cors: { origin: '*' },
        transports: ['websocket', 'polling'],
    }),
    __param(1, (0, common_1.Inject)(constant_1.MQTT_BROKER)),
    __param(2, (0, common_1.Inject)(constant_1.CONTROL_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof ex_accessory_socket_service_1.ExAccessorySocketService !== "undefined" && ex_accessory_socket_service_1.ExAccessorySocketService) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientMqtt !== "undefined" && microservices_1.ClientMqtt) === "function" ? _b : Object, typeof (_c = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _c : Object])
], ExAccessorySocketGateway);


/***/ }),
/* 175 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FrsSocketModule = void 0;
const common_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(176);
const frs_socket_client_1 = __webpack_require__(177);
const microservices_1 = __webpack_require__(3);
const common_2 = __webpack_require__(8);
const path_1 = __webpack_require__(44);
const config_entity_1 = __webpack_require__(180);
const constant_1 = __webpack_require__(65);
const config_1 = __webpack_require__(74);
const frs_sub_docs_1 = __webpack_require__(182);
const frs_socket_service_1 = __webpack_require__(179);
let FrsSocketModule = class FrsSocketModule {
};
exports.FrsSocketModule = FrsSocketModule;
exports.FrsSocketModule = FrsSocketModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'postgres',
                    url: configService.get('POSTGRES_URL') + '/config',
                    autoLoadEntities: true,
                    synchronize: true,
                }),
            }),
            typeorm_1.TypeOrmModule.forFeature([config_entity_1.Config]),
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
            microservices_1.ClientsModule.registerAsync({
                clients: [
                    {
                        inject: [config_1.ConfigService],
                        name: constant_1.USER_SERVICE,
                        useFactory: (configService) => ({
                            transport: microservices_1.Transport.GRPC,
                            options: {
                                package: common_2.UserMicroservice.protobufPackage,
                                protoPath: (0, path_1.join)(process.cwd(), 'proto/user.proto'),
                                url: configService.get('USER_GRPC_URL'),
                            },
                        }),
                    },
                    {
                        inject: [config_1.ConfigService],
                        name: constant_1.MOVE_SERVICE,
                        useFactory: (configService) => ({
                            transport: microservices_1.Transport.GRPC,
                            options: {
                                package: common_2.MoveMicroservice.protobufPackage,
                                protoPath: (0, path_1.join)(process.cwd(), 'proto/move.proto'),
                                url: configService.get('MOVE_GRPC_URL'),
                            },
                        }),
                    },
                    {
                        inject: [config_1.ConfigService],
                        name: constant_1.LOCALIZATION_SERVICE,
                        useFactory: (configService) => ({
                            transport: microservices_1.Transport.GRPC,
                            options: {
                                package: common_2.LocalizationMicroservice.protobufPackage,
                                protoPath: (0, path_1.join)(process.cwd(), 'proto/localization.proto'),
                                url: configService.get('LOCALIZATION_GRPC_URL'),
                            },
                        }),
                    },
                    {
                        inject: [config_1.ConfigService],
                        name: constant_1.NETWORK_SERVICE,
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
                        inject: [config_1.ConfigService],
                        name: constant_1.MAP_SERVICE,
                        useFactory: (configService) => ({
                            transport: microservices_1.Transport.GRPC,
                            options: {
                                package: common_2.MapMicroservice.protobufPackage,
                                protoPath: (0, path_1.join)(process.cwd(), 'proto/map.proto'),
                                url: configService.get('MAP_GRPC_URL'),
                                maxReceiveMessageLength: 100 * 1024 * 1024,
                                maxSendMessageLength: 100 * 1024 * 1024,
                            },
                        }),
                    },
                    {
                        inject: [config_1.ConfigService],
                        name: constant_1.CONFIG_SERVICE,
                        useFactory: (configService) => ({
                            transport: microservices_1.Transport.GRPC,
                            options: {
                                package: common_2.ConfigMicroservice.protobufPackage,
                                protoPath: (0, path_1.join)(process.cwd(), 'proto/config.proto'),
                                url: configService.get('CONFIG_GRPC_URL'),
                            },
                        }),
                    },
                    {
                        inject: [config_1.ConfigService],
                        name: constant_1.CONTROL_SERVICE,
                        useFactory: (configService) => ({
                            transport: microservices_1.Transport.GRPC,
                            options: {
                                package: common_2.ControlMicroservice.protobufPackage,
                                protoPath: (0, path_1.join)(process.cwd(), 'proto/control.proto'),
                                url: configService.get('CONTROL_GRPC_URL'),
                            },
                        }),
                    },
                ],
                isGlobal: true,
            }),
        ],
        controllers: [frs_sub_docs_1.FRSAsyncSub],
        providers: [frs_socket_service_1.FRSSocketService, frs_socket_client_1.FRSSocketClient],
    })
], FrsSocketModule);


/***/ }),
/* 176 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 177 */
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
exports.FRSSocketClient = void 0;
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(5);
const socket_io_client_1 = __webpack_require__(178);
const frs_socket_service_1 = __webpack_require__(179);
const lodash_1 = __webpack_require__(164);
const microservices_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(61);
const parse_util_1 = __webpack_require__(53);
const constant_1 = __webpack_require__(65);
const rpc_code_exception_1 = __webpack_require__(50);
const constant_2 = __webpack_require__(51);
let FRSSocketClient = class FRSSocketClient {
    constructor(frsService, mqttMicroservice) {
        this.frsService = frsService;
        this.mqttMicroservice = mqttMicroservice;
        this.loggerService = common_1.LoggerService.get('gateway-frs');
        this.socket = null;
        this.robotSerial = '';
        this.frsSocketUrl = '';
    }
    onModuleInit() {
        this.loggerService.info(`[FRS] onModuleInit`);
        this.connectFRSWithRetry();
    }
    async connectFRSWithRetry(retryCount = 0) {
        try {
            await this.setRobotSerial();
            if (this.robotSerial) {
                this.loggerService.info(`[FRS] Initialization successful with robotSerial: ${this.robotSerial}`);
                await this.connectFRS();
            }
            else {
                throw new Error('robotSerial is empty');
            }
        }
        catch (error) {
            const maxRetries = 3;
            const retryDelay = 10000;
            if (retryCount < maxRetries) {
                this.loggerService.warn(`[FRS] Initialization failed (attempt ${retryCount + 1}/${maxRetries}): ${parse_util_1.ParseUtil.errorToJson(error)}. Retrying in ${retryDelay / 1000}s...`);
                setTimeout(() => {
                    this.connectFRSWithRetry(retryCount + 1);
                }, retryDelay);
            }
            else {
                this.loggerService.error(`[FRS] Initialization failed after ${maxRetries} attempts. Giving up.`);
            }
        }
    }
    async setRobotSerial() {
        try {
            const robotSerial = await this.frsService.getConfig('robotSerial');
            if (robotSerial !== undefined && robotSerial !== '') {
                this.robotSerial = robotSerial;
            }
        }
        catch (error) {
            this.loggerService.error(`[FRS] setRobotSerial : ${parse_util_1.ParseUtil.errorToJson(error)}`);
        }
    }
    sendFRSData(key, data = '') {
        if (this.robotSerial) {
            const sendData = {
                robotSerial: this.robotSerial,
                data: data,
            };
            this.loggerService.debug(`[FRS] sendFRSData : ${key}, ${JSON.stringify(sendData)}`);
            this.socket?.emit(key, JSON.stringify(sendData));
        }
        else {
            throw new rpc_code_exception_1.RpcCodeException('robotSerial이 설정되지 않았습니다.', constant_2.GrpcCode.FailedPrecondition);
        }
    }
    connectSlamanv() {
        this.loggerService.info('[FRS] Connect Slamnav');
        this.sendFRSData('slamRegist');
    }
    disconnectSlamanv() {
        this.loggerService.info('[FRS] Disconnect Slamnav');
        this.sendFRSData('slamUnregist');
    }
    sendStatus(data) {
        this.sendFRSData('status', JSON.stringify(data));
    }
    sendMoveStatus(data) {
        this.sendFRSData('moveStatus', JSON.stringify(data));
    }
    sendMoveResponse(data) {
        this.sendFRSData('moveResponse', JSON.stringify(data));
    }
    sendLoadResponse(data) {
        this.sendFRSData('loadResponse', JSON.stringify(data));
    }
    sendMappingResponse(data) {
        this.sendFRSData('mappingResponse', JSON.stringify(data));
    }
    sendControlResponse(data) {
        this.sendFRSData('controlResponse', JSON.stringify(data));
    }
    sendLocalizationResponse(data) {
        this.sendFRSData('localizationResponse', JSON.stringify(data));
    }
    sendPathResponse(data) {
        this.sendFRSData('pathResponse', JSON.stringify(data));
    }
    async connectFRS() {
        this.cleanup();
        this.frsSocketUrl = await this.frsService.getConfig('frsSocketUrl');
        this.robotSerial = await this.frsService.getConfig('robotSerial');
        this.loggerService.debug(`[Frs] connectFRS : ${this.frsSocketUrl}, ${this.robotSerial}`);
        if (this.frsSocketUrl === undefined || this.frsSocketUrl === '' || this.robotSerial === undefined || this.robotSerial === '') {
            throw new rpc_code_exception_1.RpcCodeException(`url(${this.frsSocketUrl}) or robotSerial(${this.robotSerial}) is undefined`, constant_2.GrpcCode.FailedPrecondition);
        }
        this.socket = this.createSocket(this.frsSocketUrl, this.robotSerial);
        this.registerEventHandlers();
    }
    cleanup() {
        if (this.socket) {
            this.loggerService.info(`[FRS] cleanup`);
            this.socket.off();
            this.socket.close();
            this.socket = null;
        }
    }
    createSocket(url, robotSerial) {
        return (0, socket_io_client_1.io)(url, {
            transports: ['websocket'],
            query: { name: 'rrs', robotSerial },
        });
    }
    registerEventHandlers() {
        if (!this.socket) {
            this.loggerService.error(`[Frs] registerEventHandlers : socket is null`);
            return;
        }
        this.socket.on('connect', async () => {
            try {
                const sendData = { robotSerial: this.robotSerial };
                this.mqttMicroservice.emit('con:frs', sendData);
                this.loggerService.info(`[Frs] FRS Connect and init : ${JSON.stringify(sendData)}`);
                this.socket.emit('initRequest', sendData);
            }
            catch (error) {
                this.loggerService.error(`[Frs] FRS connect : ${parse_util_1.ParseUtil.errorToJson(error)}`);
            }
        });
        this.socket.on('disconnect', (reason) => {
            this.loggerService.error(`[Frs] FRS Disconnected : ${parse_util_1.ParseUtil.errorToJson(reason)}`);
            this.mqttMicroservice.emit('discon:frs', reason);
        });
        this.socket.on('error', (error) => {
            this.loggerService.error(`[Frs] FRS Socket Error ${parse_util_1.ParseUtil.errorToJson(error)}`);
        });
        this.socket.on('initResponse', (data) => {
            this.frsService.parseInit(data);
        });
        this.socket.on('connectInfo', (data) => {
            this.frsService.parseInit(data);
        });
        this.socket.on('moveRequest', (data) => {
            this.frsService.moveRequest(data);
        });
        this.socket.on('loadRequest', (data) => {
            this.frsService.loadRequest(data);
        });
        this.socket.on('localizationRequest', (data) => {
            this.frsService.localizationRequest(data);
        });
        this.socket.on('mappingRequest', (data) => {
            this.frsService.mappingRequest(data);
        });
        this.socket.on('pathResponse', (data) => {
            try {
                if (data == null || data == undefined || data == '') {
                    this.loggerService.warn(`[Frs] pathResponse : data null`);
                    return;
                }
                const json = JSON.parse(data);
                if (!(0, class_validator_1.IsArray)(json)) {
                    this.loggerService.warn(`[Frs] pathResponse : data not array`);
                    return;
                }
                if (json.length == 0) {
                    this.loggerService.warn(`[Frs] pathResponse : data array size 0`);
                    return;
                }
                if ((0, lodash_1.isEqual)(json, this.lastPath)) {
                    this.loggerService.warn(`[Frs] pathResponse : data equal last in`);
                    return;
                }
                this.lastPath = json;
                this.mqttMicroservice.emit('pathResponse', json);
            }
            catch (error) {
                this.loggerService.error(`[Frs] pathResponse : ${parse_util_1.ParseUtil.errorToJson(error)}`);
            }
        });
        this.socket.on('vobsRobots', (data) => {
            try {
                if (data == null || data == undefined || data == '') {
                    this.loggerService.warn(`[Frs] vobsRobots : data null`);
                    return;
                }
                const json = JSON.parse(data);
                if (!(0, class_validator_1.IsArray)(json)) {
                    this.loggerService.warn(`[Frs] vobsRobots : data not array`);
                    return;
                }
                if (json.length == 0) {
                    this.loggerService.warn(`[Frs] vobsRobots : data array size 0`);
                    return;
                }
                if ((0, lodash_1.isEqual)(json, this.lastVobsRobots)) {
                    this.loggerService.warn(`[Frs] vobsRobots : data equal last in`);
                    return;
                }
                this.lastVobsRobots = json;
                this.mqttMicroservice.emit('vobsRobots', json);
            }
            catch (error) {
                this.loggerService.error(`[Frs] vobsRobots : ${parse_util_1.ParseUtil.errorToJson(error)}`);
            }
        });
        this.socket.on('vobsClosures', (data) => {
            try {
                if (data == null || data == undefined || data == '') {
                    this.loggerService.warn(`[Frs] vobsClosures : data null`);
                    return;
                }
                const json = JSON.parse(data);
                if (!(0, class_validator_1.IsArray)(json)) {
                    this.loggerService.warn(`[Frs] vobsClosures : data not array`);
                    return;
                }
                if (json.length == 0) {
                    this.loggerService.warn(`[Frs] vobsClosures : data array size 0`);
                    return;
                }
                if ((0, lodash_1.isEqual)(json, this.lastVobsClosures)) {
                    this.loggerService.warn(`[Frs] vobsClosures : data equal last in`);
                    return;
                }
                this.lastVobsClosures = json;
                this.mqttMicroservice.emit('vobsClosures', json);
            }
            catch (error) {
                this.loggerService.error(`[Frs] vobsClosures : ${parse_util_1.ParseUtil.errorToJson(error)}`);
            }
        });
        this.socket.on('workRequest', (data) => {
        });
        this.socket.on('controlRequest', (data) => {
        });
    }
};
exports.FRSSocketClient = FRSSocketClient;
exports.FRSSocketClient = FRSSocketClient = __decorate([
    (0, common_2.Injectable)(),
    __param(1, (0, common_2.Inject)(constant_1.MQTT_BROKER)),
    __metadata("design:paramtypes", [typeof (_a = typeof frs_socket_service_1.FRSSocketService !== "undefined" && frs_socket_service_1.FRSSocketService) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _b : Object])
], FRSSocketClient);


/***/ }),
/* 178 */
/***/ ((module) => {

module.exports = require("socket.io-client");

/***/ }),
/* 179 */
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
exports.FRSSocketService = void 0;
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(5);
const microservices_1 = __webpack_require__(3);
const rxjs_1 = __webpack_require__(32);
const parse_util_1 = __webpack_require__(53);
const constant_1 = __webpack_require__(65);
const constant_2 = __webpack_require__(51);
const rpc_code_exception_1 = __webpack_require__(50);
let FRSSocketService = class FRSSocketService {
    constructor(networkMicroservice, configMicroservice, moveMicroservice, controlMicroservice, mapMicroservice, localizationMicroservice) {
        this.networkMicroservice = networkMicroservice;
        this.configMicroservice = configMicroservice;
        this.moveMicroservice = moveMicroservice;
        this.controlMicroservice = controlMicroservice;
        this.mapMicroservice = mapMicroservice;
        this.localizationMicroservice = localizationMicroservice;
        this.loggerService = common_1.LoggerService.get('frs');
    }
    onModuleInit() {
        this.moveService = this.moveMicroservice.getService('MoveGrpcService');
        this.configService = this.configMicroservice.getService('ConfigGrpcService');
        this.networkService = this.networkMicroservice.getService('NetworkGrpcService');
        this.controlService = this.controlMicroservice.getService('ControlGrpcService');
        this.localizationService =
            this.localizationMicroservice.getService('LocalizationGrpcService');
        this.mapService = this.mapMicroservice.getService('MapGrpcService');
    }
    async moveRequest(data) {
        try {
            if (data == null || data == undefined) {
                this.loggerService.warn(`[GATEWAY] moveRequest : data null`);
                return;
            }
            if (data.command == null || data.command == undefined || data.command == '') {
                this.loggerService.warn(`[GATEWAY] moveRequest : command null`);
                return;
            }
            this.moveService.moveCommand(data);
        }
        catch (error) {
            this.loggerService.error(`[GATEWAY] moveRequest : ${parse_util_1.ParseUtil.errorToJson(error)}`);
        }
    }
    async movePauseRequest() {
        try {
            this.moveService.movePause({});
        }
        catch (error) {
            this.loggerService.error(`[Frs] movePauseRequest : ${parse_util_1.ParseUtil.errorToJson(error)}`);
        }
    }
    async moveResumeRequest() {
        try {
            this.moveService.moveLastGoal({});
        }
        catch (error) {
            this.loggerService.error(`[Frs] moveResumeRequest : ${parse_util_1.ParseUtil.errorToJson(error)}`);
        }
    }
    async loadRequest(data) {
        try {
            if (data == null || data == undefined) {
                this.loggerService.warn(`[GATEWAY] loadRequest : data null`);
                return;
            }
            if (data.command == null || data.command == undefined || data.command == '') {
                this.loggerService.warn(`[GATEWAY] loadRequest : command null`);
                return;
            }
            this.mapService.load(data);
        }
        catch (error) {
            this.loggerService.error(`[GATEWAY] loadRequest : ${parse_util_1.ParseUtil.errorToJson(error)}`);
        }
    }
    async localizationRequest(data) {
        try {
            if (data == null || data == undefined) {
                this.loggerService.warn(`[GATEWAY] localizationRequest : data null`);
                return;
            }
            if (data.command == null || data.command == undefined || data.command == '') {
                this.loggerService.warn(`[GATEWAY] localizationRequest : command null`);
                return;
            }
            this.localizationService.init(data);
        }
        catch (error) {
            this.loggerService.error(`[GATEWAY] localizationRequest : ${parse_util_1.ParseUtil.errorToJson(error)}`);
        }
    }
    async mappingRequest(data) {
        try {
            if (data == null || data == undefined) {
                this.loggerService.warn(`[GATEWAY] mappingRequest : data null`);
                return;
            }
            if (data.command == null || data.command == undefined || data.command == '') {
                this.loggerService.warn(`[GATEWAY] mappingRequest : command null`);
                return;
            }
            this.mapService.mapping(data);
        }
        catch (error) {
            this.loggerService.error(`[GATEWAY] mappingRequest : ${parse_util_1.ParseUtil.errorToJson(error)}`);
        }
    }
    async parseInit(data) {
        try {
            if (data == null || data == undefined) {
                this.loggerService.warn(`[GATEWAY] FRS Init : data null`);
                return;
            }
            const robotSerial = await (0, rxjs_1.lastValueFrom)(this.configService.getConfig({ key: 'robot_serial' }));
            if (!robotSerial.value || robotSerial.value == '') {
                this.loggerService.warn(`[GATEWAY] FRS Init : Config robotSerial null`);
                return;
            }
            if (robotSerial.value === data.robotSerial) {
                this.loggerService.info(`[GATEWAY] FRS Init : ${data}`);
                (0, rxjs_1.lastValueFrom)(this.configService.setConfig({
                    key: 'robot_name',
                    value: data.robotName,
                }));
            }
        }
        catch (error) {
            this.loggerService.error(`[GATEWAY] FRS Init : ${parse_util_1.ParseUtil.errorToJson(error)}`);
        }
    }
    async getConfig(key) {
        if (this.configService) {
            return (await (0, rxjs_1.lastValueFrom)(this.configService.getConfig({ key: key })))?.value;
        }
        else {
            throw new rpc_code_exception_1.RpcCodeException('config 서비스가 연결되지 않았습니다.', constant_2.GrpcCode.FailedPrecondition);
        }
    }
    async InitFRS() {
        try {
            this.loggerService.info(`[SERVICE] InitFRS`);
            const robotSerial = this.getConfig('robot_serial');
            if (robotSerial == null || robotSerial == undefined) {
                const sendData = {
                    robotSerial: robotSerial ?? '',
                };
                return sendData;
            }
            else {
                this.loggerService.warn(`[SERVICE] InitFRS : robot_serial null`);
                throw new rpc_code_exception_1.RpcCodeException('robot_serial null', constant_2.GrpcCode.FailedPrecondition);
            }
        }
        catch (error) {
            this.loggerService.error(`[SERVICE] InitFRS : ${parse_util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException(error.message, constant_2.GrpcCode.FailedPrecondition);
        }
    }
};
exports.FRSSocketService = FRSSocketService;
exports.FRSSocketService = FRSSocketService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, common_2.Inject)(constant_1.NETWORK_SERVICE)),
    __param(1, (0, common_2.Inject)(constant_1.CONFIG_SERVICE)),
    __param(2, (0, common_2.Inject)(constant_1.MOVE_SERVICE)),
    __param(3, (0, common_2.Inject)(constant_1.CONTROL_SERVICE)),
    __param(4, (0, common_2.Inject)(constant_1.MAP_SERVICE)),
    __param(5, (0, common_2.Inject)(constant_1.LOCALIZATION_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _b : Object, typeof (_c = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _c : Object, typeof (_d = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _d : Object, typeof (_e = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _e : Object, typeof (_f = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _f : Object])
], FRSSocketService);


/***/ }),
/* 180 */
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
const typeorm_1 = __webpack_require__(181);
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
/* 181 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 182 */
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
exports.FRSAsyncSub = exports.DummyDto = void 0;
const common_1 = __webpack_require__(5);
const nestjs_asyncapi_1 = __webpack_require__(2);
const move_dto_1 = __webpack_require__(101);
const load_dto_1 = __webpack_require__(118);
const localization_dto_1 = __webpack_require__(78);
const control_dto_1 = __webpack_require__(59);
const init_dto_1 = __webpack_require__(183);
const swagger_1 = __webpack_require__(58);
const class_validator_1 = __webpack_require__(61);
const move_dto_2 = __webpack_require__(101);
const localization_dto_2 = __webpack_require__(78);
const control_dto_2 = __webpack_require__(59);
const mapping_dto_1 = __webpack_require__(117);
class DummyDto {
}
exports.DummyDto = DummyDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], DummyDto.prototype, "robotSerial", void 0);
let FRSAsyncSub = class FRSAsyncSub {
    handleInit() {
    }
    handleInitResponse() {
    }
    handleConnectInfo() {
    }
    handleMoveRequest() {
    }
    handleMoveResponse() {
    }
    handleLoadRequest() {
    }
    handleLoadResponse() {
    }
    handleLocalizationRequest() {
    }
    handleLocalizationResponse() {
    }
    handleControlRequest() {
    }
    handleControlResponse() {
    }
    handleMappingRequest() {
    }
    handleMappingResponse() {
    }
    handleWorkRequest() {
    }
    handleWorkResponse() {
    }
    handlePathResponse() {
    }
    handleVobsRobots() {
    }
    handleVobsClosures() {
    }
};
exports.FRSAsyncSub = FRSAsyncSub;
__decorate([
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'init',
        message: {
            payload: init_dto_1.InitRequestDto,
        },
        description: 'FRS 연결 후 로봇 등록을 위한 init 메시지 (추후 삭제 예정)',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FRSAsyncSub.prototype, "handleInit", null);
__decorate([
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'initResponse',
        message: {
            payload: init_dto_1.InitResponseDto,
        },
        description: 'FRS 연결 후 init 요청에 따른 응답 (추후 삭제 예정)',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FRSAsyncSub.prototype, "handleInitResponse", null);
__decorate([
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'connectInfo',
        message: {
            payload: init_dto_1.InitResponseDto,
        },
        description: 'FRS 연결 후 connectInfo 요청에 따른 응답',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FRSAsyncSub.prototype, "handleConnectInfo", null);
__decorate([
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'moveRequest',
        message: {
            payload: move_dto_1.MoveRequestDto,
        },
        description: 'Move 명령. SLAMNAV로 전달됩니다.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FRSAsyncSub.prototype, "handleMoveRequest", null);
__decorate([
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'moveResponse',
        message: {
            payload: move_dto_2.MoveResponseFrs,
        },
        description: 'SLAMNAV로 부터 받은 Move에 대한 응답.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FRSAsyncSub.prototype, "handleMoveResponse", null);
__decorate([
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'loadRequest',
        message: {
            payload: load_dto_1.LoadRequestDto,
        },
        description: 'Load 명령. SLAMNAV로 전달됩니다.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FRSAsyncSub.prototype, "handleLoadRequest", null);
__decorate([
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'loadResponse',
        message: {
            payload: load_dto_1.LoadResponseFrs,
        },
        description: 'SLAMNAV로 부터 받은 Load에 대한 응답.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FRSAsyncSub.prototype, "handleLoadResponse", null);
__decorate([
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'localizationRequest',
        message: {
            payload: localization_dto_1.LocalizationRequestDto,
        },
        description: '위치초기화 명령. SLAMNAV로 전달됩니다.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FRSAsyncSub.prototype, "handleLocalizationRequest", null);
__decorate([
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'localizationResponse',
        message: {
            payload: localization_dto_2.LocalizationResponseFrs,
        },
        description: 'SLAMNAV로 부터 받은 위치초기화에 대한 응답.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FRSAsyncSub.prototype, "handleLocalizationResponse", null);
__decorate([
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'controlRequest',
        message: {
            payload: control_dto_1.ControlRequestDto,
        },
        description: 'Control 명령. SLAMNAV로 전달됩니다.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FRSAsyncSub.prototype, "handleControlRequest", null);
__decorate([
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'controlResponse',
        message: {
            payload: control_dto_2.ControlResponseFrs,
        },
        description: 'SLAMNAV로 부터 받은 Control에 대한 응답.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FRSAsyncSub.prototype, "handleControlResponse", null);
__decorate([
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'mappingRequest',
        message: {
            payload: mapping_dto_1.MappingRequestDto,
        },
        description: '맵 생성 명령. SLAMNAV로 전달됩니다.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FRSAsyncSub.prototype, "handleMappingRequest", null);
__decorate([
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'mappingResponse',
        message: {
            payload: mapping_dto_1.MappingResponseFrs,
        },
        description: 'SLAMNAV로 부터 받은 맵 생성에 대한 응답.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FRSAsyncSub.prototype, "handleMappingResponse", null);
__decorate([
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'workRequest',
        message: {
            payload: DummyDto,
        },
        description: '미구현. 시퀀스 수행 명령. SLAMNAV로 전달됩니다.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FRSAsyncSub.prototype, "handleWorkRequest", null);
__decorate([
    (0, nestjs_asyncapi_1.AsyncApiPub)({
        channel: 'workResponse',
        message: {
            payload: DummyDto,
        },
        description: '미구현. SLAMNAV로 부터 받은 시퀀스 수행에 대한 응답.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FRSAsyncSub.prototype, "handleWorkResponse", null);
__decorate([
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'pathResponse',
        message: {
            payload: DummyDto,
        },
        description: 'SLAMNAV의 요청에 따라 FMS가 생성한 path 배열. SLAMNAV로 전달됩니다.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FRSAsyncSub.prototype, "handlePathResponse", null);
__decorate([
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'vobsRobots',
        message: {
            payload: DummyDto,
        },
        description: '멀티로봇 주행 시, FMS가 송신하는 가상장애물 정보',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FRSAsyncSub.prototype, "handleVobsRobots", null);
__decorate([
    (0, nestjs_asyncapi_1.AsyncApiSub)({
        channel: 'vobsClosures',
        message: {
            payload: DummyDto,
        },
        description: '멀티로봇 주행 시, FMS가 송신하는 가상장애물 정보',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FRSAsyncSub.prototype, "handleVobsClosures", null);
exports.FRSAsyncSub = FRSAsyncSub = __decorate([
    (0, common_1.Controller)()
], FRSAsyncSub);


/***/ }),
/* 183 */
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
exports.InitResponseDto = exports.InitRequestDto = void 0;
const swagger_1 = __webpack_require__(58);
const class_validator_1 = __webpack_require__(61);
const util_1 = __webpack_require__(37);
var Description;
(function (Description) {
    Description["ROBOT_SERIAL"] = "\uB85C\uBD07 \uC2DC\uB9AC\uC5BC \uBC88\uD638";
    Description["ROBOT_NAME"] = "\uB85C\uBD07 \uC774\uB984. \uB85C\uBD07 \uC774\uB984\uC740 FRS\uC5D0\uC11C \uC0DD\uC131\uD558\uC5EC \uBC18\uD658\uD569\uB2C8\uB2E4.";
})(Description || (Description = {}));
class InitRequestDto {
}
exports.InitRequestDto = InitRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ROBOT_SERIAL,
        example: util_1.UrlUtil.generateUUID(),
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], InitRequestDto.prototype, "robotSerial", void 0);
class InitResponseDto extends InitRequestDto {
}
exports.InitResponseDto = InitResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: Description.ROBOT_NAME,
        example: 'TESTBOT',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], InitResponseDto.prototype, "robotName", void 0);


/***/ }),
/* 184 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.APILogInterceptor = void 0;
const common_1 = __webpack_require__(5);
const rxjs_1 = __webpack_require__(32);
const logger_1 = __webpack_require__(33);
let APILogInterceptor = class APILogInterceptor {
    constructor() {
        this.loggerService = logger_1.LoggerService.get('gateway');
    }
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const { method, url, body, socket } = request;
        const ip = socket?.remoteAddress || 'unknown';
        const requestTimestamp = new Date();
        if (body) {
            this.loggerService.debug(`[${method}] ${url} (${ip}) : ${JSON.stringify(body).substring(0, 100)}`);
        }
        else {
            this.loggerService.debug(`[${method}] ${url} (${ip})`);
        }
        return next.handle().pipe((0, rxjs_1.tap)((data) => {
            const responseTimestamp = new Date();
            const responseTime = `${+responseTimestamp - +requestTimestamp}ms`;
            if (data) {
                this.loggerService.debug(`[${method} RESPONSE] ${url} (${ip}) : ${JSON.stringify(data).substring(0, 100)} -> ${responseTime}`);
            }
            else {
                this.loggerService.debug(`[${method} RESPONSE] ${url} (${ip}) -> ${responseTime}`);
            }
        }));
    }
};
exports.APILogInterceptor = APILogInterceptor;
exports.APILogInterceptor = APILogInterceptor = __decorate([
    (0, common_1.Injectable)()
], APILogInterceptor);


/***/ }),
/* 185 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TCPModule = void 0;
const common_1 = __webpack_require__(5);
const microservices_1 = __webpack_require__(3);
const constant_1 = __webpack_require__(65);
const config_1 = __webpack_require__(74);
const tcp_service_1 = __webpack_require__(186);
const tcp_gateway_1 = __webpack_require__(189);
const tcp_mqtt_controller_1 = __webpack_require__(191);
const cobot_tcp_client_adapter_1 = __webpack_require__(192);
const tcp_grpc_controller_1 = __webpack_require__(193);
const tcp_custom_server_gateway_1 = __webpack_require__(187);
const tcp_control_service_1 = __webpack_require__(190);
let TCPModule = class TCPModule {
};
exports.TCPModule = TCPModule;
exports.TCPModule = TCPModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
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
        controllers: [tcp_mqtt_controller_1.TcpMqttController, tcp_grpc_controller_1.TcpGrpcController],
        providers: [
            tcp_service_1.TcpService,
            tcp_gateway_1.TcpGateway,
            tcp_custom_server_gateway_1.TcpCustomServerGateway,
            tcp_control_service_1.TcpControlService,
            {
                provide: 'TcpClientPort',
                useClass: cobot_tcp_client_adapter_1.CobotTcpClientAdapter,
            },
        ],
    })
], TCPModule);


/***/ }),
/* 186 */
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
exports.TcpService = void 0;
const common_1 = __webpack_require__(8);
const rpc_code_exception_1 = __webpack_require__(50);
const constant_1 = __webpack_require__(51);
const util_1 = __webpack_require__(37);
const common_2 = __webpack_require__(5);
const config_1 = __webpack_require__(74);
const microservices_1 = __webpack_require__(3);
const tcp_custom_server_gateway_1 = __webpack_require__(187);
const tcp_gateway_1 = __webpack_require__(189);
let TcpService = class TcpService {
    constructor(configService, tcpMainServer, tcpCustomServerGateway) {
        this.configService = configService;
        this.tcpMainServer = tcpMainServer;
        this.tcpCustomServerGateway = tcpCustomServerGateway;
        this.loggerService = common_1.LoggerService.get('tcp');
    }
    onModuleInit() {
        this.tcpMainServer.startMainServer();
    }
    async getServerState() {
        try {
            const serverList = [];
            const mainServer = {
                createAt: this.tcpMainServer.getCreateAt(),
                port: this.tcpMainServer.getPort(),
                clients: this.tcpMainServer.getClientsSize(),
            };
            serverList.push(mainServer);
            const customServers = this.tcpCustomServerGateway.getServers();
            console.log(customServers);
            for (const server of customServers) {
                serverList.push({
                    createAt: util_1.DateUtil.formatDateKST(server.createAt),
                    port: server.port,
                    clients: server.clients.size,
                });
            }
            return { servers: serverList };
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            this.loggerService.error(`[TCP] getServerState error: ${error.message}`);
            throw new rpc_code_exception_1.RpcCodeException('서버 상태를 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async openServer(request) {
        return this.tcpCustomServerGateway.startServer(request.port, '0.0.0.0');
    }
    async closeServer(request) {
        return this.tcpCustomServerGateway.stopServer(request.port);
    }
    status(dto) { }
    moveStatus(dto) { }
    moveResponse(dto) {
        this.tcpMainServer.broadcastMsg(`responseMove ${dto.command} ${dto.result}`);
    }
    controlResponse(dto) {
        this.tcpMainServer.broadcastMsg(`responseControl ${dto.command} ${dto.result}`);
    }
    localizationResponse(dto) {
        this.tcpMainServer.broadcastMsg(`responseLocalization ${dto.command} ${dto.result}`);
    }
    loadResponse(dto) {
        this.tcpMainServer.broadcastMsg(`responseLoad ${dto.command} ${dto.result}`);
    }
};
exports.TcpService = TcpService;
exports.TcpService = TcpService = __decorate([
    (0, common_2.Injectable)(),
    __param(1, (0, common_2.Inject)()),
    __param(2, (0, common_2.Inject)()),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof tcp_gateway_1.TcpGateway !== "undefined" && tcp_gateway_1.TcpGateway) === "function" ? _b : Object, typeof (_c = typeof tcp_custom_server_gateway_1.TcpCustomServerGateway !== "undefined" && tcp_custom_server_gateway_1.TcpCustomServerGateway) === "function" ? _c : Object])
], TcpService);


/***/ }),
/* 187 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TcpCustomServerGateway = void 0;
const common_1 = __webpack_require__(5);
const net_1 = __webpack_require__(188);
const common_2 = __webpack_require__(8);
const util_1 = __webpack_require__(37);
const rpc_code_exception_1 = __webpack_require__(50);
const constant_1 = __webpack_require__(51);
let TcpCustomServerGateway = class TcpCustomServerGateway {
    constructor() {
        this.loggerService = common_2.LoggerService.get('tcp');
        this.servers = [];
    }
    async startServer(port, host) {
        return new Promise((resolve, reject) => {
            try {
                const server = {
                    port: port,
                    host: host,
                    createAt: new Date(),
                    server: (0, net_1.createServer)((socket) => this.handleConnection(server, socket)),
                    clients: new Map(),
                    buffers: new Map(),
                };
                console.log(`[TCP] Init : ${server.port} ${server.host}`);
                server.server.listen(server.port, server.host, () => {
                    this.loggerService.info(`[TCP] Gateway listening on ${server.host}:${server.port}`);
                    this.servers.push(server);
                    resolve({
                        port: server.port,
                        createAt: util_1.DateUtil.formatDateKST(server.createAt),
                    });
                });
                server.server.on('error', (err) => {
                    this.loggerService.error(`[TCP] Server error: ${err.message}`);
                    if (err.message.includes('EADDRINUSE')) {
                        reject(new rpc_code_exception_1.RpcCodeException('중복된 포트 번호입니다.', constant_1.GrpcCode.AlreadyExists));
                    }
                    else {
                        reject(new rpc_code_exception_1.RpcCodeException('서버 초기화 중 오류가 발생했습니다.', constant_1.GrpcCode.Unknown));
                    }
                });
            }
            catch (error) {
                this.loggerService.error(`[TCP] Init Error : ${(0, common_2.errorToJson)(error)}`);
            }
        });
    }
    async stopServer(port) {
        const server = this.servers.find((server) => server.port === port);
        if (server) {
            server.server?.close();
            this.servers = this.servers.filter((server) => server.port !== port);
            return {
                port: port,
                clients: 0,
            };
        }
        else {
            throw new rpc_code_exception_1.RpcCodeException(`${port} 포트를 사용하는 서버를 찾을 수 없습니다.`, constant_1.GrpcCode.NotFound);
        }
    }
    getServers() {
        return this.servers;
    }
    onModuleDestroy() {
        this.loggerService.info('[TCP] Shutting down TCP Gateway...');
        for (const server of this.servers) {
            server.server?.close();
            for (const [id, sock] of server.clients) {
                try {
                    sock.destroy();
                }
                catch { }
                server.clients.delete(id);
            }
        }
    }
    handleConnection(server, socket) {
        const id = `${socket.remoteAddress}:${socket.remotePort}`;
        server.clients.set(id, socket);
        server.buffers.set(id, '');
        this.loggerService.info(`[TCP] Client connected: ${id}`);
        socket.setKeepAlive(true, 20_000);
        socket.on('data', (chunk) => this.handleData(server, id, chunk));
        socket.on('error', (err) => {
            this.loggerService.warn(`[TCP] Client ${id} error: ${err.message}`);
        });
        socket.on('close', () => {
            this.loggerService.info(`[TCP] Client disconnected: ${id}`);
            server.clients.delete(id);
            server.buffers.delete(id);
        });
    }
    handleData(server, id, chunk) {
        try {
            if (server.clients.get(id) === undefined) {
                return;
            }
            this.loggerService.debug(`[TCP] Message In (${server.port},${id}) : ${chunk.toString('utf8')}`);
            this.broadcastMsg(server, chunk, id);
        }
        catch (error) {
            this.loggerService.error(`[TCP] Client ${id} error: ${(0, common_2.errorToJson)(error)}`);
        }
    }
    broadcastMsg(server, message, excludeId) {
        for (const [id, sock] of server.clients) {
            if (excludeId && id === excludeId)
                continue;
            if (!sock.destroyed)
                sock.write(message);
        }
    }
};
exports.TcpCustomServerGateway = TcpCustomServerGateway;
exports.TcpCustomServerGateway = TcpCustomServerGateway = __decorate([
    (0, common_1.Injectable)()
], TcpCustomServerGateway);


/***/ }),
/* 188 */
/***/ ((module) => {

module.exports = require("net");

/***/ }),
/* 189 */
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
exports.TcpGateway = void 0;
const common_1 = __webpack_require__(5);
const net_1 = __webpack_require__(188);
const rxjs_1 = __webpack_require__(32);
const common_2 = __webpack_require__(8);
const config_1 = __webpack_require__(74);
const move_type_1 = __webpack_require__(99);
const control_type_1 = __webpack_require__(62);
const localization_type_1 = __webpack_require__(79);
const load_dto_1 = __webpack_require__(118);
const util_1 = __webpack_require__(37);
const tcp_control_service_1 = __webpack_require__(190);
let TcpGateway = class TcpGateway {
    constructor(configService, tcpControlService) {
        this.configService = configService;
        this.tcpControlService = tcpControlService;
        this.loggerService = common_2.LoggerService.get('tcp');
        this.clients = new Map();
        this.buffers = new Map();
        this.messages$ = new rxjs_1.Subject();
        console.log('TcpGateway');
    }
    getCreateAt() {
        return util_1.DateUtil.formatDateKST(this.createAt);
    }
    getClientsSize() {
        return this.clients.size;
    }
    getClient(id) {
        return this.clients.get(id);
    }
    getPort() {
        return this.port;
    }
    startMainServer() {
        try {
            console.log('startServer');
            this.createAt = new Date();
            this.port = this.configService.getOrThrow('TCP_PORT');
            this.host = this.configService.getOrThrow('TCP_HOST');
            console.log(`[TCP] Init : ${this.port} ${this.host}`);
            this.server = (0, net_1.createServer)((socket) => this.handleConnection(socket));
            this.server.listen(this.port, this.host, () => {
                this.loggerService.info(`[TCP] Gateway listening on ${this.host}:${this.port}`);
            });
            this.server.on('error', (err) => {
                this.loggerService.error(`[TCP] Server error: ${err.message}`);
            });
        }
        catch (error) {
            this.loggerService.error(`[TCP] Init Error : ${(0, common_2.errorToJson)(error)}`);
            this.server?.close();
        }
    }
    onModuleDestroy() {
        this.loggerService.info('[TCP] Shutting down TCP Gateway...');
        for (const [id, sock] of this.clients) {
            try {
                sock.socket.destroy();
            }
            catch { }
            this.clients.delete(id);
        }
        this.server?.close();
        this.messages$.complete();
    }
    handleConnection(socket) {
        const id = `${socket.remoteAddress}:${socket.remotePort}`;
        this.clients.set(id, { id, socket, createAt: new Date() });
        this.buffers.set(id, '');
        this.loggerService.info(`[TCP] Client connected: ${id}`);
        socket.setKeepAlive(true, 20_000);
        socket.on('data', (chunk) => this.handleData(id, chunk));
        socket.on('error', (err) => {
            this.loggerService.warn(`[TCP] Client ${id} error: ${err.message}`);
        });
        socket.on('close', () => {
            this.loggerService.info(`[TCP] Client disconnected: ${id}`);
            this.clients.delete(id);
            this.buffers.delete(id);
        });
    }
    handleData(id, chunk) {
        try {
            if (this.clients.get(id) === undefined) {
                return;
            }
            const message = chunk.toString('utf8');
            console.log(`[TCP] Message In (${id}) : ${message}`);
            this.buffers.set(id, message);
            const parts = message.split(' ');
            const command = parts[0];
            switch (command) {
                case 'requestStatus':
                    this.sendStatusTo(id);
                    break;
                case 'requestParam': {
                    if (parts.length > 1) {
                        const param = parts[1];
                        this.sendParamTo(id, param);
                    }
                    else {
                        this.sendMsgTo(id, 'Invalid Command');
                    }
                    break;
                }
                case 'requestMove': {
                    if (parts.length > 1) {
                        this.handleMove(id, parts);
                    }
                    else {
                        this.sendMsgTo(id, 'Invalid Command');
                    }
                    break;
                }
                case 'requestControl': {
                    if (parts.length > 1) {
                        this.handleControl(id, parts);
                    }
                    else {
                        this.sendMsgTo(id, 'Invalid Command');
                    }
                    break;
                }
                case 'requestLocalization': {
                    if (parts.length > 1) {
                        this.handleLocalization(id, parts);
                    }
                    else {
                        this.sendMsgTo(id, 'Invalid Command');
                    }
                    break;
                }
                case 'requestLoad': {
                    if (parts.length > 1) {
                        this.handleLoad(id, parts);
                    }
                    else {
                        this.sendMsgTo(id, 'Invalid Command');
                    }
                    break;
                }
                default:
                    this.sendMsgTo(id, 'Invalid Command');
                    break;
            }
        }
        catch (error) {
            this.loggerService.error(`[TCP] Client ${id} error: ${(0, common_2.errorToJson)(error)}`);
        }
    }
    sendStatusTo(id) {
        this.sendMsgTo(id, 'Status');
    }
    sendParamTo(id, param) {
        this.sendMsgTo(id, 'Param');
    }
    handleMove(id, parts) {
        try {
            const param = parts[1];
            if (param === 'stop') {
                this.tcpControlService.moveRequest({ command: move_type_1.MoveCommand.moveStop });
            }
            else if (param === 'pause') {
                this.tcpControlService.moveRequest({ command: move_type_1.MoveCommand.movePause });
            }
            else if (param === 'resume') {
                this.tcpControlService.moveRequest({ command: move_type_1.MoveCommand.moveResume });
            }
            else if (param === 'goal') {
                const goalId = parts[2];
                this.tcpControlService.moveRequest({ command: move_type_1.MoveCommand.moveGoal, goalId: goalId, method: 'pp', preset: 0 });
            }
            else if (param === 'target') {
                const targets = parts[2];
                const targetList = targets.split(',');
                this.tcpControlService.moveRequest({
                    command: move_type_1.MoveCommand.moveTarget,
                    x: Number(targetList[0]),
                    y: Number(targetList[1]),
                    rz: Number(targetList[2]),
                });
            }
            else {
                this.loggerService.error(`[TCP] Invalid Move Parameter: ${param}`);
                this.sendMsgTo(id, 'Invalid Move Parameter');
            }
        }
        catch (error) {
            this.loggerService.error(`[TCP] Move Error: ${(0, common_2.errorToJson)(error)}`);
            this.sendMsgTo(id, 'Invalid Move Parameter');
        }
    }
    handleControl(id, parts) {
        try {
            const param = parts[1];
            if (param === 'dock') {
                this.tcpControlService.controlRequest({ command: control_type_1.ControlCommand.dockStart });
            }
            else if (param === 'undock') {
                this.tcpControlService.controlRequest({ command: control_type_1.ControlCommand.undockStart });
            }
            else {
                this.loggerService.error(`[TCP] Invalid Control Parameter: ${param}`);
                this.sendMsgTo(id, 'Invalid Control Parameter');
            }
        }
        catch (error) {
            this.loggerService.error(`[TCP] Control Error: ${(0, common_2.errorToJson)(error)}`);
            this.sendMsgTo(id, 'Invalid Control Parameter');
        }
    }
    handleLocalization(id, parts) {
        try {
            const param = parts[1];
            if (param === 'semiautoinit') {
                this.tcpControlService.localizationRequest({ command: localization_type_1.LocalizationCommand.semiAutoInit });
            }
            else if (param === 'autoinit') {
                this.tcpControlService.localizationRequest({ command: localization_type_1.LocalizationCommand.autoInit });
            }
            else if (param === 'start') {
                this.tcpControlService.localizationRequest({ command: localization_type_1.LocalizationCommand.start });
            }
            else if (param === 'stop') {
                this.tcpControlService.localizationRequest({ command: localization_type_1.LocalizationCommand.stop });
            }
            else if (param === 'setinit') {
                const coords = parts[2];
                const coordList = coords.split(',');
                this.tcpControlService.localizationRequest({
                    command: localization_type_1.LocalizationCommand.setInit,
                    x: Number(coordList[0]),
                    y: Number(coordList[1]),
                    rz: Number(coordList[2]),
                });
            }
            else {
                this.loggerService.error(`[TCP] Invalid Localization Parameter: ${param}`);
                this.sendMsgTo(id, 'Invalid Localization Parameter');
            }
        }
        catch (error) {
            this.loggerService.error(`[TCP] Localization Error: ${(0, common_2.errorToJson)(error)}`);
            this.sendMsgTo(id, 'Invalid Localization Parameter');
        }
    }
    handleLoad(id, parts) {
        try {
            const param = parts[1];
            if (param === 'mapload') {
                const mapName = parts[2];
                this.tcpControlService.loadRequest({ command: load_dto_1.MapCommand.loadMap, mapName: mapName });
            }
            else {
                this.loggerService.error(`[TCP] Invalid Load Parameter: ${param}`);
                this.sendMsgTo(id, 'Invalid Load Parameter');
            }
        }
        catch (error) {
            this.loggerService.error(`[TCP] Load Error: ${(0, common_2.errorToJson)(error)}`);
            this.sendMsgTo(id, 'Invalid Load Parameter');
        }
    }
    sendMsgTo(id, message) {
        const sock = this.clients.get(id);
        if (!sock || sock.socket.destroyed)
            return false;
        console.log(`[TCP] Message Out (${id}) : ${message}`);
        sock.socket.write(message);
        return true;
    }
    broadcastMsg(message, excludeId) {
        for (const [id, sock] of this.clients) {
            if (excludeId && id === excludeId)
                continue;
            if (!sock.socket.destroyed)
                sock.socket.write(message);
        }
    }
    count() {
        return this.clients.size;
    }
    listClients() {
        return Array.from(this.clients.keys());
    }
};
exports.TcpGateway = TcpGateway;
exports.TcpGateway = TcpGateway = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof tcp_control_service_1.TcpControlService !== "undefined" && tcp_control_service_1.TcpControlService) === "function" ? _b : Object])
], TcpGateway);


/***/ }),
/* 190 */
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
exports.TcpControlService = void 0;
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(5);
const constant_1 = __webpack_require__(65);
const microservices_1 = __webpack_require__(3);
const util_1 = __webpack_require__(37);
let TcpControlService = class TcpControlService {
    constructor(mqttMicroservice) {
        this.mqttMicroservice = mqttMicroservice;
        this.loggerService = common_1.LoggerService.get('tcp');
    }
    async moveRequest(dto) {
        this.mqttMicroservice.send('moveRequest', { ...dto, id: util_1.UrlUtil.generateUUID() });
    }
    async controlRequest(dto) {
        this.mqttMicroservice.send('controlRequest', { ...dto, id: util_1.UrlUtil.generateUUID() });
    }
    async localizationRequest(dto) {
        this.mqttMicroservice.send('localizationRequest', { ...dto, id: util_1.UrlUtil.generateUUID() });
    }
    async loadRequest(dto) {
        this.mqttMicroservice.send('loadRequest', { ...dto, id: util_1.UrlUtil.generateUUID() });
    }
};
exports.TcpControlService = TcpControlService;
exports.TcpControlService = TcpControlService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, common_2.Inject)(constant_1.MQTT_BROKER)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientMqtt !== "undefined" && microservices_1.ClientMqtt) === "function" ? _a : Object])
], TcpControlService);


/***/ }),
/* 191 */
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
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TcpMqttController = void 0;
const common_1 = __webpack_require__(5);
const common_2 = __webpack_require__(8);
const tcp_service_1 = __webpack_require__(186);
const microservices_1 = __webpack_require__(3);
const move_dto_1 = __webpack_require__(101);
const control_dto_1 = __webpack_require__(59);
const localization_dto_1 = __webpack_require__(78);
const load_dto_1 = __webpack_require__(118);
const status_type_1 = __webpack_require__(156);
const movestatus_type_1 = __webpack_require__(158);
let TcpMqttController = class TcpMqttController {
    constructor(tcpService) {
        this.tcpService = tcpService;
        this.loggerService = common_2.LoggerService.get('tcp');
    }
    getMoveResponse(data) {
        this.tcpService.moveResponse(data);
    }
    getControlResponse(data) {
        this.tcpService.controlResponse(data);
    }
    getLocalizationResponse(data) {
        this.tcpService.localizationResponse(data);
    }
    getLoadResponse(data) {
        this.tcpService.loadResponse(data);
    }
    getStatus(data) {
        this.tcpService.status(data);
    }
    getMoveStatus(data) {
        this.tcpService.moveStatus(data);
    }
};
exports.TcpMqttController = TcpMqttController;
__decorate([
    (0, microservices_1.MessagePattern)('moveResponse'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof move_dto_1.MoveResponseSlamnav !== "undefined" && move_dto_1.MoveResponseSlamnav) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], TcpMqttController.prototype, "getMoveResponse", null);
__decorate([
    (0, microservices_1.MessagePattern)('controlResponse'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof control_dto_1.ControlResponseSlamnav !== "undefined" && control_dto_1.ControlResponseSlamnav) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], TcpMqttController.prototype, "getControlResponse", null);
__decorate([
    (0, microservices_1.MessagePattern)('localizationResponse'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof localization_dto_1.LocalizationResponseSlamnav !== "undefined" && localization_dto_1.LocalizationResponseSlamnav) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], TcpMqttController.prototype, "getLocalizationResponse", null);
__decorate([
    (0, microservices_1.MessagePattern)('loadResponse'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof load_dto_1.LoadResponseSlamnav !== "undefined" && load_dto_1.LoadResponseSlamnav) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], TcpMqttController.prototype, "getLoadResponse", null);
__decorate([
    (0, microservices_1.MessagePattern)('status'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof status_type_1.StatusSlamnav !== "undefined" && status_type_1.StatusSlamnav) === "function" ? _f : Object]),
    __metadata("design:returntype", void 0)
], TcpMqttController.prototype, "getStatus", null);
__decorate([
    (0, microservices_1.MessagePattern)('moveStatus'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof movestatus_type_1.MoveStatusSlamnav !== "undefined" && movestatus_type_1.MoveStatusSlamnav) === "function" ? _g : Object]),
    __metadata("design:returntype", void 0)
], TcpMqttController.prototype, "getMoveStatus", null);
exports.TcpMqttController = TcpMqttController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof tcp_service_1.TcpService !== "undefined" && tcp_service_1.TcpService) === "function" ? _a : Object])
], TcpMqttController);


/***/ }),
/* 192 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CobotTcpClientAdapter = void 0;
const net_1 = __webpack_require__(188);
class CobotTcpClientAdapter {
    constructor() {
        this.commandSocket = new Map();
        this.dataSocket = new Map();
    }
    sendCommand(model, data) {
        this.commandSocket.get(model.id).write(data);
    }
    sendData(model, data) {
        this.dataSocket.get(model.id).write(data);
    }
    disconnect(model) {
        this.disconnectCommand(model);
        this.disconnectData(model);
    }
    disconnectCommand(model) {
        if (this.commandSocket.get(model.id)) {
            this.commandSocket.get(model.id).end();
            this.commandSocket.get(model.id).destroy();
            this.commandSocket.delete(model.id);
        }
    }
    disconnectData(model) {
        if (this.dataSocket.get(model.id)) {
            this.dataSocket.get(model.id).end();
            this.dataSocket.get(model.id).destroy();
            this.dataSocket.delete(model.id);
        }
    }
    async connectCommand(model) {
        return new Promise(async (resolve, reject) => {
            this.disconnectCommand(model);
            const socket = new net_1.Socket();
            socket.setNoDelay(true);
            socket.setKeepAlive(true, 15_000);
            socket.connect(model.commandPort, model.ipAddress);
            this.commandSocket.set(model.id, socket);
            socket.on('connect', () => {
                clearTimeout(timeout);
                resolve(true);
                model.commandHandler.onClientConnect();
            });
            socket.on('data', (buf) => {
                model.commandHandler.onDataReceived(buf);
            });
            socket.on('end', () => {
                clearTimeout(timeout);
                resolve(false);
                model.commandHandler.onDataEnd();
            });
            socket.on('close', (hadErr) => {
                clearTimeout(timeout);
                resolve(false);
                model.commandHandler.onClose();
            });
            socket.on('error', (e) => {
                clearTimeout(timeout);
                resolve(false);
                model.commandHandler.onError(e);
            });
            const timeout = setTimeout(() => {
                resolve(false);
                clearTimeout(timeout);
            }, 10000);
        });
    }
    async connectData(model) {
        return new Promise(async (resolve, reject) => {
            const socket = new net_1.Socket();
            socket.setNoDelay(true);
            socket.setKeepAlive(true, 15_000);
            socket.connect(model.dataPort, model.ipAddress);
            this.dataSocket.set(model.id, socket);
            socket.on('connect', () => {
                clearTimeout(timeout);
                resolve(true);
                this.sendData(model, 'reqdata');
                model.dataHandler.onClientConnect();
            });
            socket.on('data', (buf) => {
                model.dataHandler.onDataReceived(buf);
            });
            socket.on('end', () => {
                clearTimeout(timeout);
                resolve(false);
                model.dataHandler.onDataEnd();
            });
            socket.on('close', (hadErr) => {
                clearTimeout(timeout);
                resolve(false);
                model.dataHandler.onClose();
            });
            socket.on('error', (e) => {
                clearTimeout(timeout);
                resolve(false);
                model.dataHandler.onError(e);
            });
            const timeout = setTimeout(() => {
                resolve(false);
                clearTimeout(timeout);
            }, 10000);
        });
    }
}
exports.CobotTcpClientAdapter = CobotTcpClientAdapter;


/***/ }),
/* 193 */
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
exports.TcpGrpcController = void 0;
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(5);
const tcp_service_1 = __webpack_require__(186);
let TcpGrpcController = class TcpGrpcController {
    constructor(tcpService) {
        this.tcpService = tcpService;
    }
    getServerState() {
        console.log('getServerState');
        return this.tcpService.getServerState();
    }
    openServer(request) {
        return this.tcpService.openServer(request);
    }
    closeServer(request) {
        return this.tcpService.closeServer(request);
    }
};
exports.TcpGrpcController = TcpGrpcController;
exports.TcpGrpcController = TcpGrpcController = __decorate([
    (0, common_2.Controller)(),
    common_1.TcpMicroservice.TcpGrpcServiceControllerMethods(),
    (0, common_2.UseInterceptors)(common_1.GrpcInterceptor),
    __metadata("design:paramtypes", [typeof (_a = typeof tcp_service_1.TcpService !== "undefined" && tcp_service_1.TcpService) === "function" ? _a : Object])
], TcpGrpcController);


/***/ }),
/* 194 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CobotSocketModule = void 0;
const common_1 = __webpack_require__(5);
const microservices_1 = __webpack_require__(3);
const constant_1 = __webpack_require__(65);
const config_1 = __webpack_require__(74);
const cobot_service_1 = __webpack_require__(195);
const cobot_tcp_client_adapter_1 = __webpack_require__(192);
const cobot_grpc_controller_1 = __webpack_require__(201);
let CobotSocketModule = class CobotSocketModule {
};
exports.CobotSocketModule = CobotSocketModule;
exports.CobotSocketModule = CobotSocketModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
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
        controllers: [cobot_grpc_controller_1.CobotGrpcController],
        providers: [
            cobot_service_1.CobotService,
            {
                provide: 'TcpClientPort',
                useClass: cobot_tcp_client_adapter_1.CobotTcpClientAdapter,
            },
        ],
    })
], CobotSocketModule);


/***/ }),
/* 195 */
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
exports.CobotService = void 0;
const common_1 = __webpack_require__(5);
const common_2 = __webpack_require__(8);
const constant_1 = __webpack_require__(65);
const microservices_1 = __webpack_require__(3);
const cobot_socket_domain_1 = __webpack_require__(196);
const cobot_client_output_port_1 = __webpack_require__(197);
const cobot_command_handler_1 = __webpack_require__(198);
const rpc_code_exception_1 = __webpack_require__(50);
const constant_2 = __webpack_require__(51);
const net_1 = __webpack_require__(188);
const cobot_dto_1 = __webpack_require__(143);
const cobot_data_handler_1 = __webpack_require__(199);
let CobotService = class CobotService {
    constructor(tcpClientPort, mqttMicroservice) {
        this.tcpClientPort = tcpClientPort;
        this.mqttMicroservice = mqttMicroservice;
        this.cobotModels = new Map();
        this.loggerService = common_2.LoggerService.get('cobot');
    }
    handleCobotEvent(event) {
        console.log('==================>', event.cobotId, event.data.toString('utf-8'));
    }
    handleCobotSystemStat(cobotId, stat) {
        this.cobotModels.get(cobotId).systemStat = stat;
        this.mqttMicroservice.emit('cobot.system.stat', {
            cobotId: cobotId,
            stat: stat,
        });
    }
    async cobotModeChange(request) {
        return new Promise(async (resolve, reject) => {
            try {
                if (request.cobotId == undefined || request.cobotId == '') {
                    this.loggerService.error(`[Cobot] cobotModeChange : cobotId 값이 없습니다.`);
                    throw new rpc_code_exception_1.RpcCodeException(`cobotId 값이 없습니다.`, constant_2.GrpcCode.InvalidArgument);
                }
                if (request.mode == undefined || request.mode == '') {
                    this.loggerService.error(`[Cobot] cobotModeChange : mode 값이 없습니다.`);
                    throw new rpc_code_exception_1.RpcCodeException(`mode 값이 없습니다.`, constant_2.GrpcCode.InvalidArgument);
                }
                const cobotModel = this.cobotModels.get(request.cobotId);
                if (!cobotModel) {
                    this.loggerService.error(`[Cobot] connectCobotCommand : ${request.cobotId}값을 가진 모델을 찾을 수 없습니다.`);
                    throw new rpc_code_exception_1.RpcCodeException(`${request.cobotId}값을 가진 모델을 찾을 수 없습니다.`, constant_2.GrpcCode.NotFound);
                }
                let command = '';
                if (request.mode === 'real') {
                    command = cobot_dto_1.CobotCommand.programModeReal;
                }
                else if (request.mode === 'simulation') {
                    command = cobot_dto_1.CobotCommand.programModeSimulation;
                }
                else {
                    this.loggerService.error(`[Cobot] cobotModeChange : mode 값이 올바르지 않습니다. real 또는 simulation 중 하나를 입력해주세요. (${request.mode})`);
                    throw new rpc_code_exception_1.RpcCodeException(`mode 값이 올바르지 않습니다. real 또는 simulation 중 하나를 입력해주세요. (${request.mode})`, constant_2.GrpcCode.InvalidArgument);
                }
                this.loggerService.info(`[Cobot] cobotModeChange : ${command}`);
                this.tcpClientPort.sendCommand(cobotModel, command);
                resolve({ ...request, mode: request.mode, command: command });
            }
            catch (error) {
                if (error instanceof microservices_1.RpcException) {
                    reject(error);
                }
                this.loggerService.error(`[Cobot] cobotModeChange : ${(0, common_2.errorToJson)(error)}`);
                reject(new rpc_code_exception_1.RpcCodeException(`Cobot 모드 변경에 실패했습니다.`, constant_2.GrpcCode.InternalError));
            }
        });
    }
    async cobotMove(request) {
        return new Promise(async (resolve, reject) => {
            try {
                if (request.cobotId == undefined || request.cobotId == '') {
                    throw new rpc_code_exception_1.RpcCodeException(`cobotId 값이 없습니다.`, constant_2.GrpcCode.InvalidArgument);
                }
                if (request.pose == undefined) {
                    throw new rpc_code_exception_1.RpcCodeException(`pose 값이 없습니다.`, constant_2.GrpcCode.InvalidArgument);
                }
                if (request.pose.length != 6) {
                    throw new rpc_code_exception_1.RpcCodeException(`pose 값이 올바르지 않습니다. 6개의 값을 입력해주세요. (${request.pose.length})`, constant_2.GrpcCode.InvalidArgument);
                }
                if (request.method == undefined) {
                    throw new rpc_code_exception_1.RpcCodeException(`method 값이 없습니다.`, constant_2.GrpcCode.InvalidArgument);
                }
                if (request.method != cobot_dto_1.CobotMoveMethod.moveJ &&
                    request.method != cobot_dto_1.CobotMoveMethod.moveL &&
                    request.method != cobot_dto_1.CobotMoveMethod.moveJRelative &&
                    request.method != cobot_dto_1.CobotMoveMethod.moveLRelative) {
                    throw new rpc_code_exception_1.RpcCodeException(`method 값이 올바르지 않습니다. moveJ, moveL, moveJRelative, moveLRelative 중 하나를 입력해주세요. (${request.method})`, constant_2.GrpcCode.InvalidArgument);
                }
                if (request.speed == undefined) {
                    throw new rpc_code_exception_1.RpcCodeException(`speed 값이 없습니다.`, constant_2.GrpcCode.InvalidArgument);
                }
                if (request.acceleration == undefined) {
                    throw new rpc_code_exception_1.RpcCodeException(`acceleration 값이 없습니다.`, constant_2.GrpcCode.InvalidArgument);
                }
                if (request.method == cobot_dto_1.CobotMoveMethod.moveLRelative) {
                    if (request.coordinate == undefined) {
                        throw new rpc_code_exception_1.RpcCodeException(`coordinate 값이 없습니다.`, constant_2.GrpcCode.InvalidArgument);
                    }
                    if (request.coordinate != cobot_dto_1.CobotCoordinate.Global &&
                        request.coordinate != cobot_dto_1.CobotCoordinate.Local &&
                        request.coordinate != cobot_dto_1.CobotCoordinate.UserCoordinate0 &&
                        request.coordinate != cobot_dto_1.CobotCoordinate.UserCoordinate1 &&
                        request.coordinate != cobot_dto_1.CobotCoordinate.UserCoordinate2) {
                        throw new rpc_code_exception_1.RpcCodeException(`coordinate 값이 올바르지 않습니다. Global, Local, UserCoordinate0, UserCoordinate1, UserCoordinate2 중 하나를 입력해주세요. (${request.coordinate})`, constant_2.GrpcCode.InvalidArgument);
                    }
                }
                const cobotModel = this.cobotModels.get(request.cobotId);
                if (!cobotModel) {
                    throw new rpc_code_exception_1.RpcCodeException(`${request.cobotId}값을 가진 모델을 찾을 수 없습니다.`, constant_2.GrpcCode.NotFound);
                }
                let command = '';
                if (request.method == cobot_dto_1.CobotMoveMethod.moveJ) {
                    command = `move_j (jnt[${request.pose.join(',')}], ${request.speed}, ${request.acceleration})`;
                }
                else if (request.method == cobot_dto_1.CobotMoveMethod.moveL) {
                    command = `move_l (pnt[${request.pose.join(',')}], ${request.speed}, ${request.acceleration})`;
                }
                else if (request.method == cobot_dto_1.CobotMoveMethod.moveJRelative) {
                    command = `move_j_rel (jnt[${request.pose.join(',')}], ${request.speed}, ${request.acceleration})`;
                }
                else if (request.method == cobot_dto_1.CobotMoveMethod.moveLRelative) {
                    if (request.coordinate == cobot_dto_1.CobotCoordinate.Global) {
                        command = `move_l_rel (pnt[${request.pose.join(',')}], ${request.speed}, ${request.acceleration}, 0)`;
                    }
                    else if (request.coordinate == cobot_dto_1.CobotCoordinate.Local) {
                        command = `move_l_rel (pnt[${request.pose.join(',')}], ${request.speed}, ${request.acceleration}, 1)`;
                    }
                    else if (request.coordinate == cobot_dto_1.CobotCoordinate.UserCoordinate0) {
                        command = `move_l_rel (pnt[${request.pose.join(',')}], ${request.speed}, ${request.acceleration}, 2)`;
                    }
                    else if (request.coordinate == cobot_dto_1.CobotCoordinate.UserCoordinate1) {
                        command = `move_l_rel (pnt[${request.pose.join(',')}], ${request.speed}, ${request.acceleration}, 3)`;
                    }
                    else if (request.coordinate == cobot_dto_1.CobotCoordinate.UserCoordinate2) {
                        command = `move_l_rel (pnt[${request.pose.join(',')}], ${request.speed}, ${request.acceleration}, 4)`;
                    }
                }
                this.loggerService.info(`[Cobot] cobotMove : ${command}`);
                this.tcpClientPort.sendCommand(cobotModel, command);
                resolve(request);
            }
            catch (error) {
                if (error instanceof microservices_1.RpcException) {
                    reject(error);
                }
                this.loggerService.error(`[Cobot] cobotMove : ${(0, common_2.errorToJson)(error)}`);
                reject(new rpc_code_exception_1.RpcCodeException(`Cobot 이동에 실패했습니다.`, constant_2.GrpcCode.InternalError));
            }
        });
    }
    async cobotSpeed(request) {
        return new Promise(async (resolve, reject) => {
            try {
                if (request.cobotId == undefined || request.cobotId == '') {
                    throw new rpc_code_exception_1.RpcCodeException(`cobotId 값이 없습니다.`, constant_2.GrpcCode.InvalidArgument);
                }
                if (request.speed == undefined) {
                    throw new rpc_code_exception_1.RpcCodeException(`speed 값이 없습니다.`, constant_2.GrpcCode.InvalidArgument);
                }
                if (request.speed < 0 || request.speed > 100) {
                    throw new rpc_code_exception_1.RpcCodeException(`speed 값이 올바르지 않습니다. 0 ~ 100 사이의 값을 입력해주세요. (${request.speed})`, constant_2.GrpcCode.InvalidArgument);
                }
                const cobotModel = this.cobotModels.get(request.cobotId);
                if (!cobotModel) {
                    throw new rpc_code_exception_1.RpcCodeException(`${request.cobotId}값을 가진 모델을 찾을 수 없습니다.`, constant_2.GrpcCode.NotFound);
                }
                const command = `set_speed_bar(${request.speed / 100})`;
                this.loggerService.info(`[Cobot] cobotSpeed : ${command}`);
                this.tcpClientPort.sendCommand(cobotModel, command);
                resolve(request);
            }
            catch (error) {
                if (error instanceof microservices_1.RpcException) {
                    reject(error);
                }
                this.loggerService.error(`[Cobot] cobotSpeed : ${(0, common_2.errorToJson)(error)}`);
                reject(new rpc_code_exception_1.RpcCodeException(`Cobot 속도 변경에 실패했습니다.`, constant_2.GrpcCode.InternalError));
            }
        });
    }
    async cobotInit(request) {
        return new Promise(async (resolve, reject) => {
            try {
                const cobotModel = this.cobotModels.get(request.cobotId);
                if (!cobotModel) {
                    throw new rpc_code_exception_1.RpcCodeException(`${request.cobotId}값을 가진 모델을 찾을 수 없습니다.`, constant_2.GrpcCode.NotFound);
                }
                this.loggerService.info(`[Cobot] cobotInit : ${cobot_dto_1.CobotCommand.mcJallInit}`);
                this.tcpClientPort.sendCommand(cobotModel, cobot_dto_1.CobotCommand.mcJallInit);
                resolve(request);
            }
            catch (error) {
                if (error instanceof microservices_1.RpcException) {
                    reject(error);
                }
                this.loggerService.error(`[Cobot] cobotInit : ${(0, common_2.errorToJson)(error)}`);
                reject(new rpc_code_exception_1.RpcCodeException(`Cobot 초기화에 실패했습니다.`, constant_2.GrpcCode.InternalError));
            }
        });
    }
    async cobotConnect(request) {
        return new Promise(async (resolve, reject) => {
            try {
                if (request.ipAddress == undefined || request.ipAddress == '') {
                    throw new rpc_code_exception_1.RpcCodeException(`ipAddress 값이 없습니다.`, constant_2.GrpcCode.InvalidArgument);
                }
                if (!(0, net_1.isIP)(request.ipAddress)) {
                    throw new rpc_code_exception_1.RpcCodeException(`ipAddress 값이 올바르지 않습니다. IP형식으로 입력해주세요. (${request.ipAddress})`, constant_2.GrpcCode.InvalidArgument);
                }
                if (request.cobotId == undefined || request.cobotId == '') {
                    throw new rpc_code_exception_1.RpcCodeException(`cobotId 값이 없습니다.`, constant_2.GrpcCode.InvalidArgument);
                }
                if (this.cobotModels.has(request.cobotId)) {
                    throw new rpc_code_exception_1.RpcCodeException(`${request.cobotId} 값을 가진 모델이 이미 존재합니다.`, constant_2.GrpcCode.InvalidArgument);
                }
                const cobotModel = new cobot_socket_domain_1.CobotModel(request.cobotId, request.ipAddress);
                this.cobotModels.set(cobotModel.id, cobotModel);
                cobotModel.commandHandler = new cobot_command_handler_1.CobotCommandHandler(cobotModel.id);
                cobotModel.commandHandler.onCobotSystemStat = this.handleCobotSystemStat.bind(this);
                cobotModel.commandHandler.onEvent = this.handleCobotEvent.bind(this);
                const commandResult = await this.tcpClientPort.connectCommand(cobotModel);
                cobotModel.commandConnected = commandResult;
                cobotModel.dataHandler = new cobot_data_handler_1.CobotDataHandler(cobotModel.id);
                cobotModel.dataHandler.onCobotSystemStat = this.handleCobotSystemStat.bind(this);
                cobotModel.dataHandler.onEvent = this.handleCobotEvent.bind(this);
                const dataResult = await this.tcpClientPort.connectData(cobotModel);
                cobotModel.dataConnected = dataResult;
                resolve({ ...request, commandConnected: commandResult, dataConnected: dataResult });
            }
            catch (error) {
                if (error instanceof microservices_1.RpcException) {
                    reject(error);
                }
                this.loggerService.error(`[Cobot] cobotConnect : ${(0, common_2.errorToJson)(error)}`);
                reject(new rpc_code_exception_1.RpcCodeException(`Cobot 연결에 실패했습니다.`, constant_2.GrpcCode.InternalError));
            }
        });
    }
    getConnectState(request) {
        return new Promise(async (resolve, reject) => {
            try {
                const cobotModel = this.cobotModels.get(request.cobotId);
                if (!cobotModel) {
                    throw new rpc_code_exception_1.RpcCodeException(`${request.cobotId}값을 가진 모델을 찾을 수 없습니다. Cobot 등록을 먼저 요청해주세요.`, constant_2.GrpcCode.NotFound);
                }
                resolve({ ...request, commandConnected: cobotModel.commandHandler.isConnect(), dataConnected: cobotModel.dataHandler.isConnect() });
            }
            catch (error) {
                if (error instanceof microservices_1.RpcException) {
                    reject(error);
                }
                this.loggerService.error(`[Cobot] getConnectState : ${(0, common_2.errorToJson)(error)}`);
                reject(new rpc_code_exception_1.RpcCodeException(`Cobot 연결 상태 조회에 실패했습니다.`, constant_2.GrpcCode.InternalError));
            }
        });
    }
    async connectCobotCommand(request) {
        try {
            if (request.cobotId == undefined || request.cobotId == '') {
                throw new rpc_code_exception_1.RpcCodeException(`cobotId 값이 없습니다.`, constant_2.GrpcCode.InvalidArgument);
            }
            const cobotModel = this.cobotModels.get(request.cobotId);
            if (!cobotModel) {
                this.loggerService.error(`[Cobot] connectCobotCommand : ${request.cobotId}값을 가진 모델을 찾을 수 없습니다.`);
                throw new rpc_code_exception_1.RpcCodeException(`${request.cobotId}값을 가진 모델을 찾을 수 없습니다. Cobot 등록을 먼저 요청해주세요.`, constant_2.GrpcCode.NotFound);
            }
            const result = await this.tcpClientPort.connectCommand(cobotModel);
            cobotModel.commandConnected = result;
            return { ...request, commandConnected: result };
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException) {
                throw error;
            }
            this.loggerService.error(`[Cobot] connectCobotCommand : ${(0, common_2.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException(`${request.cobotId} Command 서버에 접속할 수 없습니다.`, constant_2.GrpcCode.InternalError);
        }
    }
    async connectCobotData(request) {
        try {
            if (request.cobotId == undefined || request.cobotId == '') {
                throw new rpc_code_exception_1.RpcCodeException(`cobotId 값이 없습니다.`, constant_2.GrpcCode.InvalidArgument);
            }
            const cobotModel = this.cobotModels.get(request.cobotId);
            if (!cobotModel) {
                this.loggerService.error(`[Cobot] connectCobotData : ${request.cobotId}값을 가진 모델을 찾을 수 없습니다.`);
                throw new rpc_code_exception_1.RpcCodeException(`${request.cobotId}값을 가진 모델을 찾을 수 없습니다. Cobot 등록을 먼저 요청해주세요.`, constant_2.GrpcCode.NotFound);
            }
            const result = await this.tcpClientPort.connectData(cobotModel);
            cobotModel.dataConnected = result;
            return { ...request, dataConnected: result };
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException) {
                throw error;
            }
            this.loggerService.error(`[Cobot] connectCobotData : ${(0, common_2.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException(`${request.cobotId} Data 서버에 접속할 수 없습니다.`, constant_2.GrpcCode.InternalError);
        }
    }
    async cobotDisconnect(request) {
        return new Promise(async (resolve, reject) => {
            try {
                const cobotModel = this.cobotModels.get(request.cobotId);
                if (!cobotModel) {
                    this.loggerService.error(`[Cobot] cobotDisconnect : ${request.cobotId}값을 가진 모델을 찾을 수 없습니다.`);
                    throw new rpc_code_exception_1.RpcCodeException(`${request.cobotId}값을 가진 모델을 찾을 수 없습니다.`, constant_2.GrpcCode.NotFound);
                }
                this.tcpClientPort.disconnect(cobotModel);
                this.cobotModels.delete(request.cobotId);
                resolve({ ...request, commandConnected: false, dataConnected: false, ipAddress: cobotModel.ipAddress });
            }
            catch (error) {
                if (error instanceof microservices_1.RpcException) {
                    reject(error);
                }
                this.loggerService.error(`[Cobot] cobotDisconnect : ${(0, common_2.errorToJson)(error)}`);
                reject(new rpc_code_exception_1.RpcCodeException(`Cobot 연결 해제에 실패했습니다.`, constant_2.GrpcCode.InternalError));
            }
        });
    }
    async disconnectCobotCommand(request) {
        return new Promise(async (resolve, reject) => {
            try {
                const cobotModel = this.cobotModels.get(request.cobotId);
                if (!cobotModel) {
                    this.loggerService.error(`[Cobot] disconnectCobotCommand : ${request.cobotId}값을 가진 모델을 찾을 수 없습니다.`);
                    throw new rpc_code_exception_1.RpcCodeException(`${request.cobotId}값을 가진 모델을 찾을 수 없습니다.`, constant_2.GrpcCode.NotFound);
                }
                this.tcpClientPort.disconnectCommand(cobotModel);
                resolve({ ...request, commandConnected: false });
            }
            catch (error) {
                if (error instanceof microservices_1.RpcException) {
                    reject(error);
                }
                this.loggerService.error(`[Cobot] disconnectCobotCommand : ${(0, common_2.errorToJson)(error)}`);
                reject(new rpc_code_exception_1.RpcCodeException(`Cobot 연결 해제에 실패했습니다.`, constant_2.GrpcCode.InternalError));
            }
        });
    }
    async disconnectCobotData(request) {
        return new Promise(async (resolve, reject) => {
            try {
                const cobotModel = this.cobotModels.get(request.cobotId);
                if (!cobotModel) {
                    this.loggerService.error(`[Cobot] disconnectCobotCommand : ${request.cobotId}값을 가진 모델을 찾을 수 없습니다.`);
                    throw new rpc_code_exception_1.RpcCodeException(`${request.cobotId}값을 가진 모델을 찾을 수 없습니다.`, constant_2.GrpcCode.NotFound);
                }
                this.tcpClientPort.disconnectData(cobotModel);
                resolve({ ...request, dataConnected: false });
            }
            catch (error) {
                if (error instanceof microservices_1.RpcException) {
                    reject(error);
                }
                this.loggerService.error(`[Cobot] disconnectCobotData : ${(0, common_2.errorToJson)(error)}`);
                reject(new rpc_code_exception_1.RpcCodeException(`Cobot 연결 해제에 실패했습니다.`, constant_2.GrpcCode.InternalError));
            }
        });
    }
    sendCobotCommand(request) {
        return new Promise(async (resolve, reject) => {
            try {
                const cobotModel = this.cobotModels.get(request.cobotId);
                if (!cobotModel) {
                    throw new rpc_code_exception_1.RpcCodeException(`${request.cobotId}값을 가진 모델을 찾을 수 없습니다.`, constant_2.GrpcCode.NotFound);
                }
                this.tcpClientPort.sendCommand(cobotModel, request.command);
                resolve({ ...request, command: request.command });
            }
            catch (error) {
                if (error instanceof microservices_1.RpcException) {
                    reject(error);
                }
                this.loggerService.error(`[Cobot] sendCobotCommand : ${(0, common_2.errorToJson)(error)}`);
                reject(new rpc_code_exception_1.RpcCodeException(`Cobot 명령 전송에 실패했습니다.`, constant_2.GrpcCode.InternalError));
            }
        });
    }
    sendCobotProgram(request) {
        return new Promise(async (resolve, reject) => {
            try {
                if (request.cobotId == undefined || request.cobotId == '') {
                    throw new rpc_code_exception_1.RpcCodeException(`cobotId 값이 없습니다.`, constant_2.GrpcCode.InvalidArgument);
                }
                if (request.programName == undefined || request.programName == '') {
                    throw new rpc_code_exception_1.RpcCodeException(`programName 값이 없습니다.`, constant_2.GrpcCode.InvalidArgument);
                }
                if (request.command == undefined || request.command == '') {
                    throw new rpc_code_exception_1.RpcCodeException(`command 값이 없습니다.`, constant_2.GrpcCode.InvalidArgument);
                }
                const cobotModel = this.cobotModels.get(request.cobotId);
                if (!cobotModel) {
                    throw new rpc_code_exception_1.RpcCodeException(`${request.cobotId}값을 가진 모델을 찾을 수 없습니다.`, constant_2.GrpcCode.NotFound);
                }
                let command;
                if (request.command == cobot_dto_1.CobotCommand.programLoadandRun) {
                    command = `program_load_and_run("${request.programName}")`;
                }
                else if (request.command == cobot_dto_1.CobotCommand.taskLoad) {
                    command = `task load ${request.programName}`;
                }
                else if (request.command == cobot_dto_1.CobotCommand.taskStop) {
                    command = request.command;
                }
                else if (request.command == cobot_dto_1.CobotCommand.taskPlayOnce) {
                    command = request.command;
                }
                else if (request.command == cobot_dto_1.CobotCommand.taskPause) {
                    command = request.command;
                }
                else if (request.command == cobot_dto_1.CobotCommand.taskResumeA) {
                    command = request.command;
                }
                else if (request.command == cobot_dto_1.CobotCommand.taskResumeB) {
                    command = request.command;
                }
                else {
                    this.loggerService.error(`[Cobot] sendCobotProgram : ${request.command} 명령은 지원하지 않습니다.`);
                    throw new rpc_code_exception_1.RpcCodeException(`${request.command} 명령은 지원하지 않습니다.`, constant_2.GrpcCode.InvalidArgument);
                }
                this.loggerService.info(`[Cobot] sendCobotProgram : ${request.cobotId} "${command}"`);
                this.tcpClientPort.sendCommand(cobotModel, command);
                resolve({ ...request, command: command });
            }
            catch (error) {
                if (error instanceof microservices_1.RpcException) {
                    reject(error);
                }
                this.loggerService.error(`[Cobot] sendCobotProgram : ${(0, common_2.errorToJson)(error)}`);
                reject(new rpc_code_exception_1.RpcCodeException(`Cobot 프로그램 전송에 실패했습니다.`, constant_2.GrpcCode.InternalError));
            }
        });
    }
    requestCobotData(request) {
        try {
            const cobotModel = this.cobotModels.get(request.cobotId);
            if (!cobotModel) {
                throw new rpc_code_exception_1.RpcCodeException(`${request.cobotId}값을 가진 모델을 찾을 수 없습니다.`, constant_2.GrpcCode.NotFound);
            }
            this.tcpClientPort.sendData(cobotModel, cobot_dto_1.CobotDataRequestCommand);
            return this.cobotModels.get(request.cobotId).systemStat;
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException) {
                throw error;
            }
            this.loggerService.error(`[Cobot] requestCobotData : ${(0, common_2.errorToJson)(error)}`);
            throw new rpc_code_exception_1.RpcCodeException(`Cobot 데이터 요청에 실패했습니다.`, constant_2.GrpcCode.InternalError);
        }
    }
};
exports.CobotService = CobotService;
exports.CobotService = CobotService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('TcpClientPort')),
    __param(1, (0, common_1.Inject)(constant_1.MQTT_BROKER)),
    __metadata("design:paramtypes", [typeof (_a = typeof cobot_client_output_port_1.TcpClientPort !== "undefined" && cobot_client_output_port_1.TcpClientPort) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _b : Object])
], CobotService);


/***/ }),
/* 196 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CobotModel = exports.CobotSocketStatus = void 0;
var CobotSocketStatus;
(function (CobotSocketStatus) {
    CobotSocketStatus["NotReady"] = "notReady";
    CobotSocketStatus["Ready"] = "ready";
    CobotSocketStatus["Error"] = "error";
    CobotSocketStatus["Disconnected"] = "disconnected";
})(CobotSocketStatus || (exports.CobotSocketStatus = CobotSocketStatus = {}));
class CobotModel {
    constructor(id, ipAddress) {
        this.id = id;
        this.ipAddress = ipAddress;
        this.status = CobotSocketStatus.NotReady;
        this.commandPort = 5000;
        this.dataPort = 5001;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    setStatus(status) {
        this.status = status;
        this.updatedAt = new Date();
    }
}
exports.CobotModel = CobotModel;


/***/ }),
/* 197 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 198 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CobotCommandHandler = void 0;
const common_1 = __webpack_require__(8);
class CobotCommandHandler {
    constructor(id) {
        this.loggerService = common_1.LoggerService.get('cobot');
        this.isConnected = false;
        this.id = id;
    }
    isConnect() {
        return this.isConnected;
    }
    onClientConnect() {
        this.loggerService.info(`[Command] ${this.id} connected`);
        this.isConnected = true;
    }
    onClientDisconnect() {
        this.loggerService.info(`[Command] ${this.id} disconnected`);
        this.isConnected = false;
    }
    onDataEnd() {
        this.loggerService.info(`[Command] ${this.id} data end`);
    }
    onError(error) {
        this.loggerService.error(`[Command] ${this.id} Error : ${(0, common_1.errorToJson)(error)}`);
    }
    onClose() {
        this.loggerService.info(`[Command] ${this.id} closed`);
        this.isConnected = false;
    }
    onDataReceived(data) {
        this.loggerService.info(`[Command] ${this.id} data received: ${data}`);
    }
}
exports.CobotCommandHandler = CobotCommandHandler;


/***/ }),
/* 199 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CobotDataHandler = void 0;
const common_1 = __webpack_require__(8);
const cobot_system_stat_parser_1 = __webpack_require__(200);
class CobotDataHandler {
    constructor(id) {
        this.loggerService = common_1.LoggerService.get('cobot');
        this.isConnected = false;
        this.buffer = Buffer.alloc(0);
        this.id = id;
    }
    isConnect() {
        return this.isConnected;
    }
    onClientConnect() {
        this.loggerService.info(`[Data] ${this.id} onClientConnect`);
        this.isConnected = true;
    }
    onClientDisconnect() {
        this.loggerService.info(`[Data] ${this.id} onClientDisconnect`);
        this.isConnected = false;
    }
    onDataEnd() {
        this.loggerService.info(`[Data] ${this.id} onDataEnd`);
    }
    onError(error) {
        this.loggerService.error(`[Data] ${this.id} onError ${error}`);
    }
    onClose() {
        this.loggerService.info(`[Data] ${this.id} onClose`);
        this.isConnected = false;
    }
    onDataReceived(data) {
        this.loggerService.info(`[Data] ${this.id} onDataReceived ${data}`);
        this.onEvent?.({
            cobotId: this.id,
            data: data,
        });
        this.buffer = Buffer.concat([this.buffer, data]);
        console.log('buffer length : ', this.buffer.length);
        while (this.buffer.length >= 580) {
            const packet = this.buffer.subarray(0, 580);
            this.buffer = this.buffer.subarray(580);
            try {
                const stat = cobot_system_stat_parser_1.CobotSystemStatParser.parseSystemStat(packet);
                console.log(stat.header, stat.time, stat.robot_state);
                this.onCobotSystemStat?.(this.id, stat);
            }
            catch (e) {
                console.error('Parse error:', e);
            }
        }
    }
}
exports.CobotDataHandler = CobotDataHandler;


/***/ }),
/* 200 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CobotSystemStatParser = void 0;
class CobotSystemStatParser {
    static readFloatLE(buf, offset) {
        return buf.readFloatLE(offset);
    }
    static readInt32LE(buf, offset) {
        return buf.readInt32LE(offset);
    }
    static readUInt32LE(buf, offset) {
        return buf.readUInt32LE(offset);
    }
    static readFloatArray(buf, offset, count) {
        const arr = new Array(count);
        for (let i = 0; i < count; i++)
            arr[i] = this.readFloatLE(buf, offset + i * this.FLOAT_SIZE);
        return arr;
    }
    static readIntArray(buf, offset, count) {
        const arr = new Array(count);
        for (let i = 0; i < count; i++)
            arr[i] = this.readInt32LE(buf, offset + i * this.INT_SIZE);
        return arr;
    }
    static parseSystemStat(buf) {
        if (buf.length < this.PACKET_SIZE) {
            throw new Error(`systemSTAT 패킷 길이 부족: ${buf.length} < ${this.PACKET_SIZE}`);
        }
        let o = 0;
        const header = buf.subarray(o, o + 4).toString('ascii');
        o += 4;
        const time = this.readFloatLE(buf, o);
        o += 4;
        const jnt_ref = this.readFloatArray(buf, o, 6);
        o += 6 * 4;
        const jnt_ang = this.readFloatArray(buf, o, 6);
        o += 6 * 4;
        const jnt_cur = this.readFloatArray(buf, o, 6);
        o += 6 * 4;
        const tcp_ref = this.readFloatArray(buf, o, 6);
        o += 6 * 4;
        const tcp_pos = this.readFloatArray(buf, o, 6);
        o += 6 * 4;
        const analog_in = this.readFloatArray(buf, o, 4);
        o += 4 * 4;
        const analog_out = this.readFloatArray(buf, o, 4);
        o += 4 * 4;
        const digital_in = this.readIntArray(buf, o, 16);
        o += 16 * 4;
        const digital_out = this.readIntArray(buf, o, 16);
        o += 16 * 4;
        const jnt_temperature = this.readFloatArray(buf, o, 6);
        o += 6 * 4;
        const task_pc = this.readInt32LE(buf, o);
        o += 4;
        const task_repeat = this.readInt32LE(buf, o);
        o += 4;
        const task_run_id = this.readInt32LE(buf, o);
        o += 4;
        const task_run_num = this.readInt32LE(buf, o);
        o += 4;
        const task_run_time = this.readInt32LE(buf, o);
        o += 4;
        const task_state = this.readInt32LE(buf, o);
        o += 4;
        const default_speed = this.readFloatLE(buf, o);
        o += 4;
        const robot_state = this.readInt32LE(buf, o);
        o += 4;
        const information_chunk_1 = this.readInt32LE(buf, o);
        o += 4;
        const reserved_1 = this.readFloatArray(buf, o, 6);
        o += 6 * 4;
        const jnt_info = this.readIntArray(buf, o, 6);
        o += 6 * 4;
        const collision_detect_onoff = this.readInt32LE(buf, o);
        o += 4;
        const is_freedrive_mode = this.readInt32LE(buf, o);
        o += 4;
        const real_vs_simulation_mode = this.readInt32LE(buf, o);
        o += 4;
        const init_state_info = this.readInt32LE(buf, o);
        o += 4;
        const init_error = this.readInt32LE(buf, o);
        o += 4;
        const tfb_analog_in = this.readFloatArray(buf, o, 2);
        o += 2 * 4;
        const tfb_digital_in = this.readIntArray(buf, o, 2);
        o += 2 * 4;
        const tfb_digital_out = this.readIntArray(buf, o, 2);
        o += 2 * 4;
        const tfb_voltage_out = this.readFloatLE(buf, o);
        o += 4;
        const op_stat_collision_occur = this.readInt32LE(buf, o);
        o += 4;
        const op_stat_sos_flag = this.readInt32LE(buf, o);
        o += 4;
        const op_stat_self_collision = this.readInt32LE(buf, o);
        o += 4;
        const op_stat_soft_estop_occur = this.readInt32LE(buf, o);
        o += 4;
        const op_stat_ems_flag = this.readInt32LE(buf, o);
        o += 4;
        const information_chunk_2 = this.readInt32LE(buf, o);
        o += 4;
        const information_chunk_3 = this.readInt32LE(buf, o);
        o += 4;
        const inbox_trap_flag = this.readIntArray(buf, o, 2);
        o += 2 * 4;
        const inbox_check_mode = this.readIntArray(buf, o, 2);
        o += 2 * 4;
        const eft_fx = this.readFloatLE(buf, o);
        o += 4;
        const eft_fy = this.readFloatLE(buf, o);
        o += 4;
        const eft_fz = this.readFloatLE(buf, o);
        o += 4;
        const eft_mx = this.readFloatLE(buf, o);
        o += 4;
        const eft_my = this.readFloatLE(buf, o);
        o += 4;
        const eft_mz = this.readFloatLE(buf, o);
        o += 4;
        const information_chunk_4 = this.readInt32LE(buf, o);
        o += 4;
        const extend_io1_analog_in = this.readFloatArray(buf, o, 4);
        o += 4 * 4;
        const extend_io1_analog_out = this.readFloatArray(buf, o, 4);
        o += 4 * 4;
        const extend_io1_digital_info = this.readUInt32LE(buf, o);
        o += 4;
        const aa_joint_ref = this.readFloatArray(buf, o, 6);
        o += 6 * 4;
        const safety_board_stat_info = this.readUInt32LE(buf, o);
        o += 4;
        if (o !== this.PACKET_SIZE) {
            throw new Error(`오프셋 불일치: ${o} !== ${this.PACKET_SIZE}`);
        }
        return {
            header,
            time,
            jnt_ref,
            jnt_ang,
            jnt_cur,
            tcp_ref,
            tcp_pos,
            analog_in,
            analog_out,
            digital_in,
            digital_out,
            jnt_temperature,
            task_pc,
            task_repeat,
            task_run_id,
            task_run_num,
            task_run_time,
            task_state,
            default_speed,
            robot_state,
            information_chunk_1,
            reserved_1,
            jnt_info,
            collision_detect_onoff,
            is_freedrive_mode,
            real_vs_simulation_mode,
            init_state_info,
            init_error,
            tfb_analog_in,
            tfb_digital_in,
            tfb_digital_out,
            tfb_voltage_out,
            op_stat_collision_occur,
            op_stat_sos_flag,
            op_stat_self_collision,
            op_stat_soft_estop_occur,
            op_stat_ems_flag,
            information_chunk_2,
            information_chunk_3,
            inbox_trap_flag,
            inbox_check_mode,
            eft_fx,
            eft_fy,
            eft_fz,
            eft_mx,
            eft_my,
            eft_mz,
            information_chunk_4,
            extend_io1_analog_in,
            extend_io1_analog_out,
            extend_io1_digital_info,
            aa_joint_ref,
            safety_board_stat_info,
        };
    }
}
exports.CobotSystemStatParser = CobotSystemStatParser;
CobotSystemStatParser.PACKET_SIZE = 580;
CobotSystemStatParser.FLOAT_SIZE = 4;
CobotSystemStatParser.INT_SIZE = 4;


/***/ }),
/* 201 */
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
exports.CobotGrpcController = void 0;
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(5);
const cobot_service_1 = __webpack_require__(195);
let CobotGrpcController = class CobotGrpcController {
    constructor(cobotService) {
        this.cobotService = cobotService;
    }
    cobotInit(request, metadata) {
        return this.cobotService.cobotInit(request);
    }
    cobotMove(request, metadata) {
        return this.cobotService.cobotMove(request);
    }
    cobotSpeed(request, metadata) {
        return this.cobotService.cobotSpeed(request);
    }
    cobotModeChange(request, metadata) {
        return this.cobotService.cobotModeChange(request);
    }
    cobotConnect(request, metadata) {
        return this.cobotService.cobotConnect(request);
    }
    cobotDisconnect(request, metadata) {
        return this.cobotService.cobotDisconnect(request);
    }
    cobotConnectCommand(request, metadata) {
        return this.cobotService.connectCobotCommand(request);
    }
    cobotConnectData(request, metadata) {
        return this.cobotService.connectCobotData(request);
    }
    cobotDisConnectCommand(request, metadata) {
        return this.cobotService.disconnectCobotCommand(request);
    }
    cobotDisConnectData(request, metadata) {
        return this.cobotService.disconnectCobotData(request);
    }
    getConnectState(request, metadata) {
        return this.cobotService.getConnectState(request);
    }
    async cobotCommand(request) {
        return this.cobotService.sendCobotCommand(request);
    }
    cobotProgram(request, metadata) {
        return this.cobotService.sendCobotProgram(request);
    }
    getCobotData(request, metadata) {
        const data = this.cobotService.requestCobotData(request);
        return {
            cobotId: request.cobotId,
            data: JSON.stringify(data),
        };
    }
};
exports.CobotGrpcController = CobotGrpcController;
exports.CobotGrpcController = CobotGrpcController = __decorate([
    (0, common_2.Controller)(),
    common_1.CobotMicroservice.CobotGrpcServiceControllerMethods(),
    (0, common_2.UseInterceptors)(common_1.GrpcInterceptor),
    __metadata("design:paramtypes", [typeof (_a = typeof cobot_service_1.CobotService !== "undefined" && cobot_service_1.CobotService) === "function" ? _a : Object])
], CobotGrpcController);


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
const nestjs_asyncapi_1 = __webpack_require__(2);
const microservices_1 = __webpack_require__(3);
const api_module_1 = __webpack_require__(4);
const common_1 = __webpack_require__(5);
const grpc_to_http_filter_1 = __webpack_require__(147);
const swagger_1 = __webpack_require__(58);
const client_socket_module_1 = __webpack_require__(148);
const robot_socket_module_1 = __webpack_require__(162);
const frs_socket_module_1 = __webpack_require__(175);
const api_interceptor_1 = __webpack_require__(184);
const tcp_socket_module_1 = __webpack_require__(185);
const cobot_socket_module_1 = __webpack_require__(194);
const common_2 = __webpack_require__(8);
const path_1 = __webpack_require__(44);
async function bootstrap() {
    const apiModule = await core_1.NestFactory.create(api_module_1.RRSApiModule);
    apiModule.enableCors({
        origin: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
        credentials: true,
    });
    apiModule.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    apiModule.useGlobalFilters(new grpc_to_http_filter_1.GrpcToHttpFilter());
    apiModule.useGlobalInterceptors(new api_interceptor_1.APILogInterceptor());
    console.log('----------------->', process.env.RELEASE_REPO_URL);
    console.log('----------------->', process.env.CONTROL_GRPC_URL);
    const swaggerConfig = new swagger_1.DocumentBuilder().setTitle('WEB RRS API').setDescription('WEB (RRS) APIs').setVersion('1.0').build();
    console.log(process.env.RRS_API_PORT);
    const document = swagger_1.SwaggerModule.createDocument(apiModule, swaggerConfig);
    swagger_1.SwaggerModule.setup('docs/api', apiModule, document);
    apiModule.listen(process.env.RRS_API_PORT, '0.0.0.0');
    const clientSocketModule = await core_1.NestFactory.create(client_socket_module_1.ClientSocketModule);
    clientSocketModule.connectMicroservice({
        transport: microservices_1.Transport.MQTT,
        options: {
            url: process.env.MQTT_URL,
            clientId: 'gateway-rrs-socket-client',
        },
    });
    clientSocketModule.startAllMicroservices();
    const clientApiOptions = new nestjs_asyncapi_1.AsyncApiDocumentBuilder()
        .setTitle('Web Socket Document')
        .setDescription('웹 브라우저가 서버를 통해 Slamnav 데이터를 주고받는 프로토콜 문서')
        .setVersion('1.0.0')
        .setDefaultContentType('application/json')
        .addSecurity('user-password', { type: 'userPassword' })
        .addServer('web_socket', {
        url: 'ws://localhost:' + process.env.RRS_CLIENT_PORT,
        protocol: 'socket.io',
    })
        .build();
    const clientDocument = nestjs_asyncapi_1.AsyncApiModule.createDocument(clientSocketModule, clientApiOptions, { include: [client_socket_module_1.ClientSocketModule] });
    await nestjs_asyncapi_1.AsyncApiModule.setup('docs/socket', clientSocketModule, clientDocument);
    await clientSocketModule.init();
    await clientSocketModule.listen(process.env.RRS_CLIENT_PORT, '0.0.0.0');
    const robotSocketModule = await core_1.NestFactory.create(robot_socket_module_1.RobotSocketModule);
    robotSocketModule.connectMicroservice({
        transport: microservices_1.Transport.MQTT,
        options: {
            url: process.env.MQTT_URL,
            clientId: 'gateway-rrs-socket-robot',
        },
    });
    robotSocketModule.startAllMicroservices();
    const robotApiOptions = new nestjs_asyncapi_1.AsyncApiDocumentBuilder()
        .setTitle('SLAMNAV/TASKMAN Socket Document')
        .setDescription('SLAMNAV및 TASKMAN이 서버와 주고받는 프로토콜 문서')
        .setVersion('1.0.0')
        .setDefaultContentType('application/json')
        .addSecurity('user-password', { type: 'userPassword' })
        .addServer('web_socket', {
        url: 'ws://localhost:' + process.env.RRS_ROBOT_PORT,
        protocol: 'socket.io',
    })
        .build();
    const robotDocument = nestjs_asyncapi_1.AsyncApiModule.createDocument(robotSocketModule, robotApiOptions, { include: [robot_socket_module_1.RobotSocketModule] });
    await nestjs_asyncapi_1.AsyncApiModule.setup('/docs/socket', robotSocketModule, robotDocument);
    await robotSocketModule.listen(process.env.RRS_ROBOT_PORT);
    const frsModule = await core_1.NestFactory.create(frs_socket_module_1.FrsSocketModule);
    frsModule.connectMicroservice({
        transport: microservices_1.Transport.MQTT,
        options: {
            url: process.env.MQTT_URL,
            clientId: 'gateway-rrs-socket-frs',
        },
    });
    const frsApiOptions = new nestjs_asyncapi_1.AsyncApiDocumentBuilder()
        .setTitle('FRS Socket Document')
        .setDescription('FRS와 주고받는 프로토콜 문서')
        .setVersion('1.0.0')
        .setDefaultContentType('application/json')
        .addSecurity('user-password', { type: 'userPassword' })
        .addServer('frs_socket', {
        url: 'ws://{frs_url}:5002',
        protocol: 'socket.io',
    })
        .build();
    const frsapiDocument = await nestjs_asyncapi_1.AsyncApiModule.createDocument(frsModule, frsApiOptions);
    await nestjs_asyncapi_1.AsyncApiModule.setup('/docs/socket', frsModule, frsapiDocument);
    await frsModule.init();
    await frsModule.startAllMicroservices();
    await frsModule.listen(process.env.RRS_FRS_PORT, '0.0.0.0');
    const tcpModule = await core_1.NestFactory.create(tcp_socket_module_1.TCPModule);
    tcpModule.connectMicroservice({
        transport: microservices_1.Transport.GRPC,
        options: {
            package: common_2.TcpMicroservice.protobufPackage,
            protoPath: (0, path_1.join)(process.cwd(), 'proto/tcp.proto'),
            url: process.env.TCP_GRPC_URL,
        },
    });
    tcpModule.connectMicroservice({
        transport: microservices_1.Transport.MQTT,
        options: {
            url: process.env.MQTT_URL,
            clientId: 'gateway-rrs-tcp',
        },
    });
    await tcpModule.init();
    await tcpModule.startAllMicroservices();
    const cobotModule = await core_1.NestFactory.create(cobot_socket_module_1.CobotSocketModule);
    cobotModule.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    cobotModule.useGlobalFilters(new grpc_to_http_filter_1.GrpcToHttpFilter());
    cobotModule.useGlobalInterceptors(new api_interceptor_1.APILogInterceptor());
    cobotModule.connectMicroservice({
        transport: microservices_1.Transport.GRPC,
        options: {
            package: common_2.CobotMicroservice.protobufPackage,
            protoPath: (0, path_1.join)(process.cwd(), 'proto/cobot.proto'),
            url: process.env.COBOT_GRPC_URL,
        },
    });
    cobotModule.connectMicroservice({
        transport: microservices_1.Transport.MQTT,
        options: {
            url: process.env.MQTT_URL,
            clientId: 'microservice-cobot',
        },
    });
    await cobotModule.init();
    await cobotModule.startAllMicroservices();
    await cobotModule.listen(process.env.RRS_COBOT_PORT || 5005, '0.0.0.0');
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map