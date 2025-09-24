/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TsdbModule = void 0;
const common_1 = __webpack_require__(3);
const influxdb_client_1 = __webpack_require__(4);
const tsdb_service_1 = __webpack_require__(5);
const config_1 = __webpack_require__(6);
let TsdbModule = class TsdbModule {
};
exports.TsdbModule = TsdbModule;
exports.TsdbModule = TsdbModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
        ],
        controllers: [],
        providers: [
            {
                provide: 'INFLUXDB',
                inject: [config_1.ConfigService],
                useFactory: (configService) => {
                    return new influxdb_client_1.InfluxDB({
                        url: configService.getOrThrow('INFLUX_URL'),
                        token: configService.getOrThrow('INFLUX_TOKEN'),
                    });
                },
            },
            tsdb_service_1.TsdbService,
        ],
    })
], TsdbModule);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@influxdata/influxdb-client");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TsdbService = void 0;
class TsdbService {
}
exports.TsdbService = TsdbService;


/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SemlogModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SemlogModule = void 0;
const config_1 = __webpack_require__(6);
const sem_log_service_1 = __webpack_require__(9);
const common_1 = __webpack_require__(3);
const sem_log_alarm_log_dto_1 = __webpack_require__(61);
const typeorm_1 = __webpack_require__(63);
const sem_log_alarm_dto_1 = __webpack_require__(64);
const pg_1 = __webpack_require__(65);
const sem_log_mqtt_controller_1 = __webpack_require__(66);
const sem_log_grpc_controller_1 = __webpack_require__(67);
const sem_log_postgres_adapter_1 = __webpack_require__(68);
let SemlogModule = SemlogModule_1 = class SemlogModule {
    constructor() {
        this.logger = new common_1.Logger(SemlogModule_1.name);
    }
    async onModuleInit() {
        this.logger.log('🧪 SemlogModule 테스트 시작 - semlog DB 자동 생성 완료');
    }
};
exports.SemlogModule = SemlogModule;
exports.SemlogModule = SemlogModule = SemlogModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forFeature([sem_log_alarm_dto_1.SemLogAlarmList, sem_log_alarm_log_dto_1.SemLogAlarmLog]),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: async (configService) => {
                    await ensureSemlogDatabase();
                    return {
                        type: 'postgres',
                        url: configService.get('POSTGRES_URL') + '/semlog',
                        autoLoadEntities: true,
                        synchronize: process.env.NODE_ENV !== 'production',
                    };
                },
            }),
        ],
        controllers: [sem_log_grpc_controller_1.SemLogGrpcController, sem_log_mqtt_controller_1.SemLogMqttInputController],
        providers: [
            sem_log_service_1.SemLogService,
            {
                provide: 'DatabaseOutputPort',
                useClass: sem_log_postgres_adapter_1.SemLogPostgresAdapter,
            },
        ],
        exports: [],
    })
], SemlogModule);
async function ensureSemlogDatabase() {
    const client = new pg_1.Client({
        host: process.env.POSTGRES_HOST || 'localhost',
        port: parseInt(process.env.POSTGRES_PORT || '7000'),
        user: process.env.POSTGRES_USER || 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'postgres',
        database: 'postgres',
    });
    try {
        await client.connect();
        const result = await client.query("SELECT 1 FROM pg_database WHERE datname = 'semlog'");
        if (result.rows.length === 0) {
            await client.query('CREATE DATABASE semlog');
            console.log('🎉 semlog 데이터베이스 생성 완료');
        }
        else {
            console.log('✅ semlog 데이터베이스 이미 존재');
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
/* 9 */
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
exports.SemLogService = void 0;
const common_1 = __webpack_require__(10);
const common_2 = __webpack_require__(3);
const sem_log_database_output_port_1 = __webpack_require__(60);
const rpc_code_exception_1 = __webpack_require__(52);
const constant_1 = __webpack_require__(53);
const date_util_1 = __webpack_require__(42);
let SemLogService = class SemLogService {
    constructor(databaseOutput) {
        this.databaseOutput = databaseOutput;
        this.loggerService = common_1.LoggerService.get('monitoring');
        this.AlarmActive = new Map();
    }
    async getSemAlarmDefine(request) {
        try {
            this.loggerService.info(`[SEM] getSemAlarmDefine : ${JSON.stringify(request)}`);
            return this.databaseOutput.getAlarmBySearch(request);
        }
        catch (error) {
            if (error instanceof rpc_code_exception_1.RpcCodeException) {
                throw error;
            }
            else {
                this.loggerService.error(`[SEM] getSemAlarmDefine : ${(0, common_1.errorToJson)(error)}`);
                throw new rpc_code_exception_1.RpcCodeException('알람을 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
            }
        }
    }
    async postSemAlarmDefine(request) {
        try {
            if (request.code === undefined || request.code === 0) {
                throw new rpc_code_exception_1.RpcCodeException('code값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            if (request.operationName === undefined || request.operationName === null || request.operationName === '') {
                throw new rpc_code_exception_1.RpcCodeException('operationName값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            if (request.detail === undefined || request.detail === null) {
                request.detail = '';
            }
            if (request.description === undefined || request.description === null) {
                request.description = '';
            }
            const alarm = await this.databaseOutput.getAlarmbyCode(request.code);
            if (alarm) {
                throw new rpc_code_exception_1.RpcCodeException('이미 존재하는 알람입니다.', constant_1.GrpcCode.AlreadyExists);
            }
            return this.databaseOutput.saveAlarm({ ...alarm, ...request });
        }
        catch (error) {
            if (error instanceof rpc_code_exception_1.RpcCodeException) {
                throw error;
            }
            else {
                this.loggerService.error(`[SEM] postSemAlarmDefine : ${(0, common_1.errorToJson)(error)}`);
                throw new rpc_code_exception_1.RpcCodeException('알람을 저장할 수 없습니다.', constant_1.GrpcCode.InternalError);
            }
        }
    }
    async deleteSemAlarmDefine(request) {
        try {
            if (request.code === undefined || request.code === 0) {
                throw new rpc_code_exception_1.RpcCodeException('code값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            const alarm = await this.databaseOutput.getAlarmbyCode(request.code);
            if (!alarm) {
                throw new rpc_code_exception_1.RpcCodeException('존재하지 않는 알람입니다.', constant_1.GrpcCode.NotFound);
            }
            await this.databaseOutput.deleteAlarm(request);
            return alarm;
        }
        catch (error) {
            if (error instanceof rpc_code_exception_1.RpcCodeException) {
                throw error;
            }
            else {
                this.loggerService.error(`[SEM] deleteSemAlarmDefine : ${(0, common_1.errorToJson)(error)}`);
                throw new rpc_code_exception_1.RpcCodeException('알람을 저장할 수 없습니다.', constant_1.GrpcCode.InternalError);
            }
        }
    }
    async deleteSemAlarmDefineAll(request) {
        try {
            await this.databaseOutput.deleteAlarmAll();
            return;
        }
        catch (error) {
            if (error instanceof rpc_code_exception_1.RpcCodeException) {
                throw error;
            }
            else {
                this.loggerService.error(`[SEM] deleteSemAlarmDefineAll : ${(0, common_1.errorToJson)(error)}`);
                throw new rpc_code_exception_1.RpcCodeException('알람을 삭제할 수 없습니다.', constant_1.GrpcCode.InternalError);
            }
        }
    }
    async getSemAlarmActive(request) {
        try {
            this.loggerService.info(`[SEM] getSemAlarmActive : ${JSON.stringify(request)}`);
            const data = [];
            this.AlarmActive.forEach(async (value, key) => {
                data.push({
                    code: key,
                    state: value,
                });
            });
            return {
                list: data,
            };
        }
        catch (error) {
            if (error instanceof rpc_code_exception_1.RpcCodeException) {
                throw error;
            }
            else {
                this.loggerService.error(`[SEM] getSemAlarmActive : ${(0, common_1.errorToJson)(error)}`);
                throw new rpc_code_exception_1.RpcCodeException('알람을 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
            }
        }
    }
    async semAlarm(request) {
        try {
            this.loggerService.info(`[SEM] semAlarm : ${JSON.stringify(request)}`);
            if (request.code === undefined || request.code === 0) {
                throw new rpc_code_exception_1.RpcCodeException('code값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            if (request.state === undefined || request.state === '') {
                throw new rpc_code_exception_1.RpcCodeException('state값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            const alarm = await this.databaseOutput.getAlarmbyCode(request.code);
            if (!alarm) {
                throw new rpc_code_exception_1.RpcCodeException('존재하지 않는 알람입니다.', constant_1.GrpcCode.NotFound);
            }
            if (request.state !== 'START' && request.state !== 'SET' && request.state !== 'END') {
                throw new rpc_code_exception_1.RpcCodeException(`state값(${request.state})이 올바르지 않습니다. (START, SET, END 중 하나의 값이어야 합니다.)`, constant_1.GrpcCode.InvalidArgument);
            }
            this.AlarmActive.set(alarm.code, request.state);
            const alarmData = {
                code: alarm.code,
                state: request.state,
            };
            const data = await this.databaseOutput.saveAlarmLog(alarmData);
            return {
                ...data,
                createAt: date_util_1.DateUtil.formatDateKST(data.createAt),
            };
        }
        catch (error) {
            if (error instanceof rpc_code_exception_1.RpcCodeException) {
                throw error;
            }
            else {
                this.loggerService.error(`[SEM] semAlarm : ${(0, common_1.errorToJson)(error)}`);
                throw new rpc_code_exception_1.RpcCodeException('알람을 저장할 수 없습니다.', constant_1.GrpcCode.InternalError);
            }
        }
    }
    async deleteSemAlarm(request) {
        try {
            this.loggerService.info(`[SEM] deleteSemAlarm : ${JSON.stringify(request)}`);
            if (request.code === undefined || request.code === 0) {
                throw new rpc_code_exception_1.RpcCodeException('code값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            if (this.AlarmActive.get(request.code) === undefined) {
                throw new rpc_code_exception_1.RpcCodeException(`삭제할 활성화된 알람이 없습니다. (${request.code})`, constant_1.GrpcCode.NotFound);
            }
            this.AlarmActive.delete(request.code);
            return {};
        }
        catch (error) {
            if (error instanceof rpc_code_exception_1.RpcCodeException) {
                throw error;
            }
            else {
                this.loggerService.error(`[SEM] deleteSemAlarm : ${(0, common_1.errorToJson)(error)}`);
                throw new rpc_code_exception_1.RpcCodeException('알람을 삭제할 수 없습니다.', constant_1.GrpcCode.InternalError);
            }
        }
    }
    async deleteSemAlarmAll(request) {
        try {
            this.loggerService.info(`[SEM] deleteSemAlarmAll : ${JSON.stringify(request)}`);
            await this.databaseOutput.deleteAlarmAll();
            return {};
        }
        catch (error) {
            if (error instanceof rpc_code_exception_1.RpcCodeException) {
                throw error;
            }
            else {
                this.loggerService.error(`[SEM] deleteSemAlarmAll : ${(0, common_1.errorToJson)(error)}`);
                throw new rpc_code_exception_1.RpcCodeException('알람을 삭제할 수 없습니다.', constant_1.GrpcCode.InternalError);
            }
        }
    }
    async getSemAlarmLog(request) {
        try {
            this.loggerService.info(`[SEM] getSemAlarmLog : ${JSON.stringify(request)}`);
            return this.databaseOutput.getAlarmLogBySearch(request);
        }
        catch (error) {
            if (error instanceof rpc_code_exception_1.RpcCodeException) {
                throw error;
            }
            else {
                this.loggerService.error(`[SEM] getSemAlarmLog : ${(0, common_1.errorToJson)(error)}`);
                throw new rpc_code_exception_1.RpcCodeException('알람 로그를 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
            }
        }
    }
    async postSemAlarm(request) {
        try {
            this.loggerService.info(`[SEM] postSemAlarm : ${JSON.stringify(request)}`);
            if (request.code === undefined || request.code === 0) {
                throw new rpc_code_exception_1.RpcCodeException('code값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            if (request.state === undefined || request.state === '') {
                throw new rpc_code_exception_1.RpcCodeException('state값이 없습니다.', constant_1.GrpcCode.InvalidArgument);
            }
            const alarm = await this.databaseOutput.getAlarmbyCode(request.code);
            if (!alarm) {
                throw new rpc_code_exception_1.RpcCodeException('존재하지 않는 알람입니다.', constant_1.GrpcCode.NotFound);
            }
            const data = await this.databaseOutput.saveAlarmLog(request);
            return {
                code: request.code,
                state: request.state,
            };
        }
        catch (error) {
            if (error instanceof rpc_code_exception_1.RpcCodeException) {
                throw error;
            }
            else {
                this.loggerService.error(`[SEM] postSemAlarm : ${(0, common_1.errorToJson)(error)}`);
                throw new rpc_code_exception_1.RpcCodeException('알람을 저장할 수 없습니다.', constant_1.GrpcCode.InternalError);
            }
        }
    }
    async deleteSemAlarmLog(request) {
        try {
            this.loggerService.info(`[SEM] deleteSemAlarmLog : ${JSON.stringify(request)}`);
            await this.databaseOutput.deleteAlarmLog(request);
            return {};
        }
        catch (error) {
            if (error instanceof rpc_code_exception_1.RpcCodeException) {
                throw error;
            }
            else {
                this.loggerService.error(`[SEM] deleteSemAlarmLog : ${(0, common_1.errorToJson)(error)}`);
                throw new rpc_code_exception_1.RpcCodeException('알람을 삭제할 수 없습니다.', constant_1.GrpcCode.InternalError);
            }
        }
    }
};
exports.SemLogService = SemLogService;
exports.SemLogService = SemLogService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, common_2.Inject)('DatabaseOutputPort')),
    __metadata("design:paramtypes", [typeof (_a = typeof sem_log_database_output_port_1.SemLogDatabaseOutputPort !== "undefined" && sem_log_database_output_port_1.SemLogDatabaseOutputPort) === "function" ? _a : Object])
], SemLogService);


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
__exportStar(__webpack_require__(32), exports);
__exportStar(__webpack_require__(35), exports);


/***/ }),
/* 11 */
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
__exportStar(__webpack_require__(12), exports);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TcpMicroservice = exports.UpdateMicroservice = exports.LogMicroservice = exports.CobotMicroservice = exports.SoundMicroservice = exports.SettingMicroservice = exports.TaskMicroservice = exports.OnvifMicroservice = exports.MapMicroservice = exports.NetworkMicroservice = exports.LocalizationMicroservice = exports.MoveMicroservice = exports.CodeMicroservice = exports.ControlMicroservice = exports.ConfigMicroservice = exports.RedisMicroservice = exports.AmrMicroservice = exports.AuthMicroservice = exports.UserMicroservice = void 0;
exports.UserMicroservice = __webpack_require__(13);
exports.AuthMicroservice = __webpack_require__(14);
exports.AmrMicroservice = __webpack_require__(15);
exports.RedisMicroservice = __webpack_require__(16);
exports.ConfigMicroservice = __webpack_require__(17);
exports.ControlMicroservice = __webpack_require__(18);
exports.CodeMicroservice = __webpack_require__(19);
exports.MoveMicroservice = __webpack_require__(20);
exports.LocalizationMicroservice = __webpack_require__(21);
exports.NetworkMicroservice = __webpack_require__(22);
exports.MapMicroservice = __webpack_require__(23);
exports.OnvifMicroservice = __webpack_require__(24);
exports.TaskMicroservice = __webpack_require__(25);
exports.SettingMicroservice = __webpack_require__(26);
exports.SoundMicroservice = __webpack_require__(27);
exports.CobotMicroservice = __webpack_require__(28);
exports.LogMicroservice = __webpack_require__(29);
exports.UpdateMicroservice = __webpack_require__(30);
exports.TcpMicroservice = __webpack_require__(31);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.USER_GRPC_SERVICE_NAME = exports.USER_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.UserGrpcServiceControllerMethods = UserGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(7);
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
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AUTH_GRPC_SERVICE_NAME = exports.AUTH_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.AuthGrpcServiceControllerMethods = AuthGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(7);
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
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AMR_GRPC_SERVICE_NAME = exports.AMR_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.AmrGrpcServiceControllerMethods = AmrGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(7);
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
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.REDIS_ROBOT_CACHE_GRPC_SERVICE_NAME = exports.REDIS_SOCKET_CACHE_GRPC_SERVICE_NAME = exports.REDIS_PACKAGE_NAME = exports.RobotType = exports.protobufPackage = void 0;
exports.RedisSocketCacheGrpcServiceControllerMethods = RedisSocketCacheGrpcServiceControllerMethods;
exports.RedisRobotCacheGrpcServiceControllerMethods = RedisRobotCacheGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(7);
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
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CONFIG_GRPC_SERVICE_NAME = exports.CONFIG_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.ConfigGrpcServiceControllerMethods = ConfigGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(7);
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
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CONTROL_GRPC_SERVICE_NAME = exports.CONTROL_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.ControlGrpcServiceControllerMethods = ControlGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(7);
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
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CODE_GRPC_SERVICE_NAME = exports.CODE_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.CodeGrpcServiceControllerMethods = CodeGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(7);
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
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MOVE_GRPC_SERVICE_NAME = exports.MOVE_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.MoveGrpcServiceControllerMethods = MoveGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(7);
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
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LOCALIZATION_GRPC_SERVICE_NAME = exports.LOCALIZATION_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.LocalizationGrpcServiceControllerMethods = LocalizationGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(7);
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
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NETWORK_GRPC_SERVICE_NAME = exports.NETWORK_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.NetworkGrpcServiceControllerMethods = NetworkGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(7);
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
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MAP_GRPC_SERVICE_NAME = exports.MAP_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.MapGrpcServiceControllerMethods = MapGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(7);
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
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ONVIF_SERVICE_NAME = exports.ONVIF_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.OnvifServiceControllerMethods = OnvifServiceControllerMethods;
const microservices_1 = __webpack_require__(7);
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
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TASK_GRPC_SERVICE_NAME = exports.TASK_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.TaskGrpcServiceControllerMethods = TaskGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(7);
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
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SETTING_GRPC_SERVICE_NAME = exports.SETTING_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.SettingGrpcServiceControllerMethods = SettingGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(7);
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
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SOUND_GRPC_SERVICE_NAME = exports.SOUND_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.SoundGrpcServiceControllerMethods = SoundGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(7);
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
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.COBOT_GRPC_SERVICE_NAME = exports.COBOT_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.CobotGrpcServiceControllerMethods = CobotGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(7);
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
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SEM_LOG_GRPC_SERVICE_NAME = exports.LOG_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.SEMLogGrpcServiceControllerMethods = SEMLogGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(7);
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
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UPDATE_GRPC_SERVICE_NAME = exports.UPDATE_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.UpdateGrpcServiceControllerMethods = UpdateGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(7);
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
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TCP_GRPC_SERVICE_NAME = exports.TCP_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.TcpGrpcServiceControllerMethods = TcpGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(7);
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
/* 32 */
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
__exportStar(__webpack_require__(33), exports);


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GrpcInterceptor = void 0;
const rxjs_1 = __webpack_require__(34);
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
/* 34 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 35 */
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
__exportStar(__webpack_require__(36), exports);
__exportStar(__webpack_require__(59), exports);


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerService = void 0;
const winston_1 = __webpack_require__(37);
const DailyRotateFile = __webpack_require__(38);
const util_1 = __webpack_require__(39);
const chalk_1 = __webpack_require__(58);
const fs_1 = __webpack_require__(45);
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
/* 37 */
/***/ ((module) => {

module.exports = require("winston");

/***/ }),
/* 38 */
/***/ ((module) => {

module.exports = require("winston-daily-rotate-file");

/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationUtil = exports.CryptoUtil = exports.ParseUtil = exports.FileUtil = exports.DateUtil = exports.UrlUtil = void 0;
var url_util_1 = __webpack_require__(40);
Object.defineProperty(exports, "UrlUtil", ({ enumerable: true, get: function () { return url_util_1.UrlUtil; } }));
var date_util_1 = __webpack_require__(42);
Object.defineProperty(exports, "DateUtil", ({ enumerable: true, get: function () { return date_util_1.DateUtil; } }));
var file_util_1 = __webpack_require__(44);
Object.defineProperty(exports, "FileUtil", ({ enumerable: true, get: function () { return file_util_1.FileUtil; } }));
var parse_util_1 = __webpack_require__(55);
Object.defineProperty(exports, "ParseUtil", ({ enumerable: true, get: function () { return parse_util_1.ParseUtil; } }));
var crypto_util_1 = __webpack_require__(56);
Object.defineProperty(exports, "CryptoUtil", ({ enumerable: true, get: function () { return crypto_util_1.CryptoUtil; } }));
var validation_util_1 = __webpack_require__(57);
Object.defineProperty(exports, "ValidationUtil", ({ enumerable: true, get: function () { return validation_util_1.ValidationUtil; } }));


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UrlUtil = void 0;
const uuid_1 = __webpack_require__(41);
class UrlUtil {
    static generateUUID() {
        return (0, uuid_1.v4)();
    }
}
exports.UrlUtil = UrlUtil;


/***/ }),
/* 41 */
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DateUtil = void 0;
const date_fns_1 = __webpack_require__(43);
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
/* 43 */
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileUtil = void 0;
const fs = __webpack_require__(45);
const path = __webpack_require__(46);
const unzipper = __webpack_require__(47);
const il = __webpack_require__(48);
const uuid_1 = __webpack_require__(41);
const archiver_1 = __webpack_require__(49);
const csv = __webpack_require__(50);
const zlib_1 = __webpack_require__(51);
const common_1 = __webpack_require__(10);
const rpc_code_exception_1 = __webpack_require__(52);
const constant_1 = __webpack_require__(53);
const microservices_1 = __webpack_require__(7);
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
/* 45 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 46 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 47 */
/***/ ((module) => {

module.exports = require("unzipper");

/***/ }),
/* 48 */
/***/ ((module) => {

module.exports = require("iconv-lite");

/***/ }),
/* 49 */
/***/ ((module) => {

module.exports = require("archiver");

/***/ }),
/* 50 */
/***/ ((module) => {

module.exports = require("csv");

/***/ }),
/* 51 */
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RpcCodeException = void 0;
const microservices_1 = __webpack_require__(7);
class RpcCodeException extends microservices_1.RpcException {
    constructor(details, statusCode) {
        super({ details: details, code: statusCode });
        this.statusCode = statusCode;
    }
}
exports.RpcCodeException = RpcCodeException;


/***/ }),
/* 53 */
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
__exportStar(__webpack_require__(54), exports);


/***/ }),
/* 54 */
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
/* 55 */
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
/* 56 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CryptoUtil = void 0;
class CryptoUtil {
}
exports.CryptoUtil = CryptoUtil;


/***/ }),
/* 57 */
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
/* 58 */
/***/ ((module) => {

module.exports = require("chalk");

/***/ }),
/* 59 */
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
/* 60 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


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
exports.SemLogAlarmLog = void 0;
const typeorm_1 = __webpack_require__(62);
let SemLogAlarmLog = class SemLogAlarmLog {
};
exports.SemLogAlarmLog = SemLogAlarmLog;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SemLogAlarmLog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], SemLogAlarmLog.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], SemLogAlarmLog.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], SemLogAlarmLog.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], SemLogAlarmLog.prototype, "detail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], SemLogAlarmLog.prototype, "operationName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], SemLogAlarmLog.prototype, "description", void 0);
exports.SemLogAlarmLog = SemLogAlarmLog = __decorate([
    (0, typeorm_1.Entity)()
], SemLogAlarmLog);


/***/ }),
/* 62 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 63 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SemLogAlarmList = void 0;
const typeorm_1 = __webpack_require__(62);
let SemLogAlarmList = class SemLogAlarmList {
};
exports.SemLogAlarmList = SemLogAlarmList;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'int', unique: true }),
    __metadata("design:type", Number)
], SemLogAlarmList.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], SemLogAlarmList.prototype, "detail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], SemLogAlarmList.prototype, "operationName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], SemLogAlarmList.prototype, "description", void 0);
exports.SemLogAlarmList = SemLogAlarmList = __decorate([
    (0, typeorm_1.Entity)()
], SemLogAlarmList);


/***/ }),
/* 65 */
/***/ ((module) => {

module.exports = require("pg");

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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SemLogMqttInputController = void 0;
const common_1 = __webpack_require__(3);
const sem_log_service_1 = __webpack_require__(9);
const microservices_1 = __webpack_require__(7);
let SemLogMqttInputController = class SemLogMqttInputController {
    constructor(semlogService) {
        this.semlogService = semlogService;
    }
    alarm() { }
    generalLog() { }
};
exports.SemLogMqttInputController = SemLogMqttInputController;
__decorate([
    (0, microservices_1.MessagePattern)('semlog:alarm'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SemLogMqttInputController.prototype, "alarm", null);
__decorate([
    (0, microservices_1.MessagePattern)('semlog:generalLog'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SemLogMqttInputController.prototype, "generalLog", null);
exports.SemLogMqttInputController = SemLogMqttInputController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof sem_log_service_1.SemLogService !== "undefined" && sem_log_service_1.SemLogService) === "function" ? _a : Object])
], SemLogMqttInputController);


/***/ }),
/* 67 */
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
exports.SemLogGrpcController = void 0;
const common_1 = __webpack_require__(10);
const common_2 = __webpack_require__(3);
const sem_log_service_1 = __webpack_require__(9);
const rpc_code_exception_1 = __webpack_require__(52);
const constant_1 = __webpack_require__(53);
let SemLogGrpcController = class SemLogGrpcController {
    constructor(semlogService) {
        this.semlogService = semlogService;
    }
    getSemAlarmDefine(request, metadata) {
        return this.semlogService.getSemAlarmDefine(request);
    }
    postSemAlarmDefine(request, metadata) {
        return this.semlogService.postSemAlarmDefine(request);
    }
    deleteSemAlarmDefine(request, metadata) {
        return this.semlogService.deleteSemAlarmDefine(request);
    }
    deleteSemAlarmDefineAll(request, metadata) {
        return this.semlogService.deleteSemAlarmDefineAll(request);
    }
    getSemAlarmActive(request, metadata) {
        return this.semlogService.getSemAlarmActive(request);
    }
    semAlarm(request, metadata) {
        return this.semlogService.semAlarm(request);
    }
    deleteSemAlarm(request, metadata) {
        return this.semlogService.deleteSemAlarm(request);
    }
    deleteSemAlarmAll(request, metadata) {
        return this.semlogService.deleteSemAlarmAll(request);
    }
    getSemAlarmLog(request) {
        return this.semlogService.getSemAlarmLog(request);
    }
    postSemAlarmLog(request, metadata) {
        return this.semlogService.postSemAlarm(request);
    }
    deleteSemAlarmLog(request, metadata) {
        return this.semlogService.deleteSemAlarmLog(request);
    }
    getSemGeneralLog(request, metadata) {
        throw new rpc_code_exception_1.RpcCodeException('현재 사용하지 않는 기능입니다.', constant_1.GrpcCode.Unimplemented);
    }
    deleteSemGeneralLog(request, metadata) {
        throw new rpc_code_exception_1.RpcCodeException('현재 사용하지 않는 기능입니다.', constant_1.GrpcCode.Unimplemented);
    }
    postSemGeneralLog(request, metadata) {
        throw new rpc_code_exception_1.RpcCodeException('현재 사용하지 않는 기능입니다.', constant_1.GrpcCode.Unimplemented);
    }
};
exports.SemLogGrpcController = SemLogGrpcController;
exports.SemLogGrpcController = SemLogGrpcController = __decorate([
    (0, common_2.Controller)(),
    common_1.LogMicroservice.SEMLogGrpcServiceControllerMethods(),
    (0, common_2.UseInterceptors)(common_1.GrpcInterceptor),
    __metadata("design:paramtypes", [typeof (_a = typeof sem_log_service_1.SemLogService !== "undefined" && sem_log_service_1.SemLogService) === "function" ? _a : Object])
], SemLogGrpcController);


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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SemLogPostgresAdapter = void 0;
const typeorm_1 = __webpack_require__(63);
const sem_log_alarm_dto_1 = __webpack_require__(64);
const sem_log_alarm_log_dto_1 = __webpack_require__(61);
const typeorm_2 = __webpack_require__(62);
const microservices_1 = __webpack_require__(7);
const common_1 = __webpack_require__(10);
const util_1 = __webpack_require__(39);
const rpc_code_exception_1 = __webpack_require__(52);
const constant_1 = __webpack_require__(53);
const pagination_1 = __webpack_require__(69);
let SemLogPostgresAdapter = class SemLogPostgresAdapter {
    constructor(alarmListRepository, alarmLogRepository) {
        this.alarmListRepository = alarmListRepository;
        this.alarmLogRepository = alarmLogRepository;
        this.loggerService = common_1.LoggerService.get('semlog');
        this.generateAlarmDB();
    }
    async getAlarmAll() {
        try {
            return await this.alarmListRepository.find();
        }
        catch (error) {
            this.loggerService.error(`[SEMLog] DB getAlarmAll: ${util_1.ParseUtil.errorToJson(error)}`);
            throw new microservices_1.RpcException('데이터를 가져올 수 없습니다.');
        }
    }
    async getAlarmbyCode(code) {
        try {
            return await this.alarmListRepository.findOneBy({ code });
        }
        catch (error) {
            this.loggerService.error(`[SEMLog] DB getAlarmbyId: ${util_1.ParseUtil.errorToJson(error)}`);
            throw new microservices_1.RpcException('데이터를 가져올 수 없습니다.');
        }
        finally {
            this.loggerService.debug(`[SEMLog] DB getAlarmbyId: ${JSON.stringify(code)}`);
        }
    }
    async saveAlarm(alarm) {
        try {
            return await this.alarmListRepository.save(alarm);
        }
        catch (error) {
            this.loggerService.error(`[SEMLog] DB saveAlarm: ${util_1.ParseUtil.errorToJson(error)}`);
            throw new microservices_1.RpcException('데이터를 저장할 수 없습니다.');
        }
        finally {
            this.loggerService.debug(`[SEMLog] DB saveAlarm: ${JSON.stringify(alarm)}`);
        }
    }
    async deleteAlarm(dto) {
        try {
            await this.alarmListRepository.delete(dto.code);
            return;
        }
        catch (error) {
            this.loggerService.error(`[SEMLog] DB deleteAlarm: ${util_1.ParseUtil.errorToJson(error)}`);
            throw new microservices_1.RpcException('데이터를 삭제할 수 없습니다.');
        }
        finally {
            this.loggerService.debug(`[SEMLog] DB deleteAlarm: ${JSON.stringify(dto)}`);
        }
    }
    async deleteAlarmAll() {
        try {
            await this.alarmListRepository.clear();
        }
        catch (error) {
            this.loggerService.error(`[SEMLog] DB deleteAlarmAll: ${util_1.ParseUtil.errorToJson(error)}`);
            throw new microservices_1.RpcException('데이터를 삭제할 수 없습니다.');
        }
    }
    async getAlarmBySearch(dto) {
        try {
            const queryBuilder = this.alarmListRepository.createQueryBuilder('alarmList');
            if (dto.searchText && dto.searchText !== '') {
                if (dto.searchType && dto.searchType !== '') {
                    if (dto.searchType === 'code') {
                        queryBuilder.andWhere('alarmList.code LIKE :searchText', { searchText: `%${dto.searchText}%` });
                    }
                    else if (dto.searchType === 'detail') {
                        queryBuilder.andWhere('alarmList.detail LIKE :searchText', { searchText: `%${dto.searchText}%` });
                    }
                    else if (dto.searchType === 'operationName') {
                        queryBuilder.andWhere('alarmList.operationName LIKE :searchText', { searchText: `%${dto.searchText}%` });
                    }
                    else if (dto.searchType === 'description') {
                        queryBuilder.andWhere('alarmList.description LIKE :searchText', { searchText: `%${dto.searchText}%` });
                    }
                    else if (dto.searchType === 'all') {
                        queryBuilder.andWhere('alarmList.code LIKE :searchText OR alarmList.detail LIKE :searchText OR alarmList.operationName LIKE :searchText OR alarmList.description LIKE :searchText', { searchText: `%${dto.searchText}%` });
                    }
                    else {
                        throw new rpc_code_exception_1.RpcCodeException('searchType 형식이 올바르지 않습니다.', constant_1.GrpcCode.InvalidArgument);
                    }
                }
                else {
                    queryBuilder.andWhere('alarmList.code LIKE :searchText OR alarmList.detail LIKE :searchText OR alarmList.operationName LIKE :searchText OR alarmList.description LIKE :searchText', { searchText: `%${dto.searchText}%` });
                }
            }
            if (dto.sortOption) {
                if (dto.sortDirection && dto.sortDirection !== '') {
                    const direction = dto.sortDirection.toLowerCase();
                    if (direction === 'asc') {
                        if (dto.sortOption === 'code') {
                            queryBuilder.orderBy(`alarmList.${dto.sortOption}`, 'ASC', 'NULLS LAST');
                        }
                        else {
                            queryBuilder.orderBy(`LOWER(alarmList.${dto.sortOption})`, 'ASC', 'NULLS LAST');
                        }
                    }
                    else if (direction === 'desc') {
                        if (dto.sortOption === 'code') {
                            queryBuilder.orderBy(`alarmList.${dto.sortOption}`, 'DESC', 'NULLS LAST');
                        }
                        else {
                            queryBuilder.orderBy(`LOWER(alarmList.${dto.sortOption})`, 'DESC', 'NULLS LAST');
                        }
                    }
                    else {
                        throw new rpc_code_exception_1.RpcCodeException('정렬 방향은 asc 또는 desc만 허용됩니다.', constant_1.GrpcCode.InvalidArgument);
                    }
                }
            }
            if (dto.pageNo && dto.pageSize) {
                queryBuilder.skip((0, pagination_1.getPaginationOffset)(dto.pageNo, dto.pageSize)).take((0, pagination_1.getPaginationLimit)(dto.pageSize));
            }
            const result = {
                list: await queryBuilder.getMany(),
                pageSize: dto.pageSize,
                totalCount: await queryBuilder.getCount(),
                totalPage: Math.ceil((await queryBuilder.getCount()) / dto.pageSize),
            };
            return result;
        }
        catch (error) {
            this.loggerService.error(`[SEMLog] DB getAlarmBySearch: ${util_1.ParseUtil.errorToJson(error)}`);
            throw new microservices_1.RpcException('데이터를 가져올 수 없습니다.');
        }
    }
    getAlarmLog(dto) {
        throw new Error('Method not implemented.');
    }
    async getAlarmLogBySearch(dto) {
        try {
            const queryBuilder = this.alarmLogRepository.createQueryBuilder('alarmLog');
            if (dto.dateFrom) {
                const regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
                if (!regex.test(dto.dateFrom)) {
                    throw new rpc_code_exception_1.RpcCodeException('날짜 형식이 올바르지 않습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                queryBuilder.andWhere('alarmLog.createAt >= :dateFrom', { dateFrom: dto.dateFrom });
            }
            if (dto.dateTo) {
                const regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
                if (!regex.test(dto.dateTo)) {
                    throw new rpc_code_exception_1.RpcCodeException('날짜 형식이 올바르지 않습니다.', constant_1.GrpcCode.InvalidArgument);
                }
                queryBuilder.andWhere('alarmLog.createAt <= :dateTo', { dateTo: dto.dateTo });
            }
            if (dto.searchText && dto.searchText !== '') {
                if (dto.searchType && dto.searchType !== '') {
                    if (dto.searchType === 'code') {
                        queryBuilder.andWhere('alarmLog.code LIKE :searchText', { searchText: `%${dto.searchText}%` });
                    }
                    else if (dto.searchType === 'name') {
                        queryBuilder.andWhere('alarmLog.name LIKE :searchText', { searchText: `%${dto.searchText}%` });
                    }
                    else if (dto.searchType === 'detail') {
                        queryBuilder.andWhere('alarmLog.detail LIKE :searchText', { searchText: `%${dto.searchText}%` });
                    }
                    else if (dto.searchType === 'description') {
                        queryBuilder.andWhere('alarmLog.description LIKE :searchText', { searchText: `%${dto.searchText}%` });
                    }
                    else if (dto.searchType === 'state') {
                        queryBuilder.andWhere('alarmLog.state LIKE :searchText', { searchText: `%${dto.searchText}%` });
                    }
                    else if (dto.searchType === 'all') {
                        queryBuilder.andWhere('alarmLog.code LIKE :searchText OR alarmLog.name LIKE :searchText OR alarmLog.description LIKE :searchText', { searchText: `%${dto.searchText}%` });
                    }
                    else {
                        throw new rpc_code_exception_1.RpcCodeException('searchType 형식이 올바르지 않습니다.', constant_1.GrpcCode.InvalidArgument);
                    }
                }
                else {
                    queryBuilder.andWhere('alarmLog.code LIKE :searchText OR alarmLog.name LIKE :searchText OR alarmLog.description LIKE :searchText', { searchText: `%${dto.searchText}%` });
                }
            }
            if (dto.sortOption) {
                if (dto.sortDirection && dto.sortDirection !== '') {
                    const direction = dto.sortDirection.toLowerCase();
                    if (direction === 'asc') {
                        if (dto.sortOption === 'code') {
                            queryBuilder.orderBy(`alarmLog.${dto.sortOption}`, 'ASC', 'NULLS LAST');
                        }
                        else {
                            queryBuilder.orderBy(`LOWER(alarmLog.${dto.sortOption})`, 'ASC', 'NULLS LAST');
                        }
                    }
                    else if (direction === 'desc') {
                        if (dto.sortOption === 'code') {
                            queryBuilder.orderBy(`alarmLog.${dto.sortOption}`, 'DESC', 'NULLS LAST');
                        }
                        else {
                            queryBuilder.orderBy(`LOWER(alarmLog.${dto.sortOption})`, 'DESC', 'NULLS LAST');
                        }
                    }
                    else {
                        throw new rpc_code_exception_1.RpcCodeException('정렬 방향은 asc 또는 desc만 허용됩니다.', constant_1.GrpcCode.InvalidArgument);
                    }
                }
            }
            if (dto.pageNo && dto.pageSize) {
                queryBuilder.skip((0, pagination_1.getPaginationOffset)(dto.pageNo, dto.pageSize)).take((0, pagination_1.getPaginationLimit)(dto.pageSize));
            }
            const data = await queryBuilder.getMany();
            const parsedData = data.map((item) => ({
                ...item,
                createAt: util_1.DateUtil.formatDateKST(item.createAt),
            }));
            const result = {
                list: parsedData,
                pageSize: dto.pageSize,
                totalCount: await queryBuilder.getCount(),
                totalPage: Math.ceil((await queryBuilder.getCount()) / dto.pageSize),
            };
            return result;
        }
        catch (error) {
            this.loggerService.error(`[SEMLog] DB getAlarmLogBySearch: ${util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async getAlarmLogLast() {
        try {
            return await this.alarmLogRepository.query(`
                SELECT DISTINCT ON (code) *
                FROM alarmLog
                ORDER BY code, "createAt" DESC
              `);
        }
        catch (error) {
            this.loggerService.error(`[SEMLog] DB getAlarmLogbyId: ${util_1.ParseUtil.errorToJson(error)}`);
            throw new microservices_1.RpcException('데이터를 가져올 수 없습니다.');
        }
    }
    async getAlarmLogAll() {
        try {
            return await this.alarmLogRepository.find();
        }
        catch (error) {
            this.loggerService.error(`[SEMLog] DB getAlarmLogAll: ${util_1.ParseUtil.errorToJson(error)}`);
            throw new microservices_1.RpcException('데이터를 가져올 수 없습니다.');
        }
    }
    async saveAlarmLog(alarmLog) {
        try {
            return await this.alarmLogRepository.save(alarmLog);
        }
        catch (error) {
            this.loggerService.error(`[SEMLog] DB saveAlarmLog: ${util_1.ParseUtil.errorToJson(error)}`);
            throw new microservices_1.RpcException('데이터를 저장할 수 없습니다.');
        }
        finally {
            this.loggerService.debug(`[SEMLog] DB saveAlarmLog: ${JSON.stringify(alarmLog)}`);
        }
    }
    async deleteAlarmLog(dto) {
        try {
            let deleteResult;
            if (dto.code !== undefined && dto.code !== 0 && !dto.dateFrom && !dto.dateTo) {
                console.log(`단순 삭제: code=${dto.code}`);
                const alarmLogs = await this.alarmLogRepository.find({ where: { code: dto.code } });
                console.log(`삭제 대상 조회: code=${dto.code}, 찾은 개수=${alarmLogs.length}`);
                if (alarmLogs.length === 0) {
                    throw new rpc_code_exception_1.RpcCodeException(`삭제할 알람 로그가 없습니다. (${dto.code})`, constant_1.GrpcCode.NotFound);
                }
                deleteResult = await this.alarmLogRepository.delete({ code: dto.code });
                console.log('삭제 결과:', deleteResult);
                this.loggerService.info(`[SEMLog] DB deleteAlarmLog: ${deleteResult.affected}개 삭제됨`);
                return;
            }
            const queryBuilder = this.alarmLogRepository.createQueryBuilder().delete().from(sem_log_alarm_log_dto_1.SemLogAlarmLog);
            let hasCondition = false;
            if (dto.code !== undefined && dto.code !== 0) {
                console.log(`복잡한 조건에서 code 추가: ${dto.code}`);
                queryBuilder.where('code = :code', { code: dto.code });
                hasCondition = true;
            }
            if (dto.dateFrom) {
                const regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
                if (!regex.test(dto.dateFrom)) {
                    throw new rpc_code_exception_1.RpcCodeException('dateFrom 날짜 형식이 올바르지 않습니다. (yyyy-mm-dd hh:mm:ss)', constant_1.GrpcCode.InvalidArgument);
                }
                const kstDate = new Date(dto.dateFrom + '+09:00');
                const utcDate = kstDate.toISOString().replace('T', ' ').substring(0, 19);
                console.log(`dateFrom 변환: ${dto.dateFrom} (KST) → ${utcDate} (UTC)`);
                if (hasCondition) {
                    queryBuilder.andWhere('createAt >= :dateFrom', { dateFrom: utcDate });
                }
                else {
                    queryBuilder.where('createAt >= :dateFrom', { dateFrom: utcDate });
                }
                hasCondition = true;
            }
            if (dto.dateTo) {
                const regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
                if (!regex.test(dto.dateTo)) {
                    throw new rpc_code_exception_1.RpcCodeException('dateTo 날짜 형식이 올바르지 않습니다. (yyyy-mm-dd hh:mm:ss)', constant_1.GrpcCode.InvalidArgument);
                }
                const kstDate = new Date(dto.dateTo + '+09:00');
                const utcDate = kstDate.toISOString().replace('T', ' ').substring(0, 19);
                console.log(`dateTo 변환: ${dto.dateTo} (KST) → ${utcDate} (UTC)`);
                queryBuilder.andWhere('createAt <= :dateTo', { dateTo: utcDate });
                hasCondition = true;
            }
            if (!hasCondition) {
                throw new rpc_code_exception_1.RpcCodeException('삭제 조건(code 또는 날짜 범위)이 필요합니다.', constant_1.GrpcCode.InvalidArgument);
            }
            console.log('복잡한 조건 쿼리:', queryBuilder.getSql());
            console.log('쿼리 파라미터:', queryBuilder.getParameters());
            deleteResult = await queryBuilder.execute();
            console.log('복잡한 조건 삭제 결과:', deleteResult);
            this.loggerService.info(`[SEMLog] DB deleteAlarmLog: ${deleteResult.affected}개 삭제됨`);
            return;
        }
        catch (error) {
            if (error instanceof rpc_code_exception_1.RpcCodeException) {
                throw error;
            }
            else {
                this.loggerService.error(`[SEMLog] DB deleteAlarmLog: ${util_1.ParseUtil.errorToJson(error)}`);
                throw new rpc_code_exception_1.RpcCodeException('데이터를 삭제할 수 없습니다.', constant_1.GrpcCode.InternalError);
            }
        }
    }
    async deleteAlarmLogAll() {
        try {
            await this.alarmLogRepository.clear();
        }
        catch (error) {
            this.loggerService.error(`[SEMLog] DB deleteAlarmLogAll: ${util_1.ParseUtil.errorToJson(error)}`);
            throw new microservices_1.RpcException('데이터를 삭제할 수 없습니다.');
        }
    }
    async generateAlarmDB() {
        let entity;
        entity = {
            code: 2000,
            operationName: 'PROGRAM_START_FAIL',
            detail: '',
            description: '프로그램 시작을 실패했습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 2001,
            operationName: 'LOCALIZATION_FAIL',
            detail: '',
            description: '초기 위치를 찾지 못했습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 2002,
            operationName: 'MAP_LOAD_FAIL',
            detail: '',
            description: '지도 가져오기를 실패했습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 2003,
            operationName: 'MAP_NOT_LOAD',
            detail: '',
            description: '지도 데이터가 없습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 2004,
            operationName: 'MAP_TYPE_FAIL',
            detail: '',
            description: '지도 데이터의 형식이 불일치합니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 2005,
            operationName: 'MOVE_PATH_FAIL',
            detail: '',
            description: '경로를 이탈했습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 2006,
            operationName: 'MOVE_LOCAL_FAIL',
            detail: '',
            description: '이동 중 위치를 잃었습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 2007,
            operationName: 'DOCK_FAIL',
            detail: '',
            description: '도킹에 실패했습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 2016,
            operationName: 'ACS_CONNECT_FAIL',
            detail: '',
            description: 'ACS와 연결이 끊어졌습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 2018,
            operationName: 'MOVE_PATH_EMPTY',
            detail: '',
            description: '경로가 생성되지 않았습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 2019,
            operationName: 'MOVE_DRIVE_FAIL',
            detail: '',
            description: '드라이버가 시작되지 않았습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 2020,
            operationName: 'LOCALIZATION_NOT_START',
            detail: '',
            description: '위치추정 모듈이 시작되지 않았습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 2021,
            operationName: 'MOVE_FAIL',
            detail: '',
            description: '도착 실패했습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 2024,
            operationName: 'ACS_DOCK_COMMAND_UNKNOWN',
            detail: '',
            description: 'ACS 도킹 명령이 잘못되었습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 2215,
            operationName: 'CHARGE_FAIL',
            detail: '',
            description: 'CHARGE명령을 받았지만 수행하지 못했습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 3000,
            operationName: 'EMS',
            detail: '',
            description: 'EMS 버튼이 눌렸습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 3001,
            operationName: 'FRONT_BUMPER_CRASH',
            detail: '',
            description: '전면 범퍼에 충돌이 발생했습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 3002,
            operationName: 'BACK_BUMPER_CRASH',
            detail: '',
            description: '후면 범퍼에 충돌이 발생했습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 3004,
            operationName: 'FRONT_OBSTACLE_DETECT',
            detail: '',
            description: '전방에 물체가 감지되었습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 3005,
            operationName: 'MOVE_STOP_OBSTACLE',
            detail: '',
            description: '전방 물체 감지로 이동 불가합니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 3006,
            operationName: 'BACK_OBSTACLE_DETECT',
            detail: '',
            description: '후방에 물체가 감지되었습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 3007,
            operationName: 'MOVE_STOP_OBSTACLE',
            detail: '',
            description: '후방 물체 감지로 이동 불가합니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 4000,
            operationName: 'BATTERY_EMPTY',
            detail: '',
            description: '배터리 저전압 이상입니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 4001,
            operationName: 'CHARGE_ERROR',
            detail: '',
            description: '배터리 충전 이상입니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 4002,
            operationName: 'BATTERY_LOW',
            detail: '',
            description: '배터리 부족으로 충전이 필요합니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 4003,
            operationName: 'BATTERY_VERY_LOW',
            detail: '',
            description: '배터리 방전으로 충전이 필요합니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 4500,
            operationName: 'MOTOR_CURRENT_HIGH',
            detail: '',
            description: '모터 전류가 너무 높습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 4505,
            operationName: 'TEMPERATURE_HIGH',
            detail: '',
            description: '내부 온도가 높습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 4512,
            operationName: 'MOTOR_BIG_ERROR',
            detail: '',
            description: 'Encoder 위치 편차가 큽니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 4514,
            operationName: 'LEFT_MOTOR_ERROR',
            detail: '',
            description: '왼쪽 모터에 이상이 발생했습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 4515,
            operationName: 'RIGHT_MOTOR_ERROR',
            detail: '',
            description: '오른쪽 모터에 이상이 발생했습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 4517,
            operationName: 'MOTOR_CONNECT_FAIL',
            detail: '',
            description: '모터가 연결되지 않았습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 5100,
            operationName: 'FRONT_LIDAR_CONNECT_FAIL',
            detail: '',
            description: '전방 LiDAR 통신에 문제가 발생했습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 5101,
            operationName: 'BACK_LIDAR_CONNECT_FAIL',
            detail: '',
            description: '후방 LiDAR 통신에 문제가 발생했습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 5103,
            operationName: 'LIDAR_CLEAN',
            detail: '',
            description: '라이다 센서에 오염이 감지되었습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 10000,
            operationName: 'SERVER_ERROR',
            detail: '',
            description: '서버에 에러가 발생했습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 10001,
            operationName: 'SLAMNAV_CONNECT_FAIL',
            detail: '',
            description: 'SLAMNAV가 연결되지 않았습니다.',
        };
        await this.alarmListRepository.save(entity);
        entity = {
            code: 10002,
            operationName: 'PAYLOAD_EMPTY',
            detail: '',
            description: '명령이 비어있습니다.',
        };
        await this.alarmListRepository.save(entity);
    }
};
exports.SemLogPostgresAdapter = SemLogPostgresAdapter;
exports.SemLogPostgresAdapter = SemLogPostgresAdapter = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(sem_log_alarm_dto_1.SemLogAlarmList)),
    __param(1, (0, typeorm_1.InjectRepository)(sem_log_alarm_log_dto_1.SemLogAlarmLog)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], SemLogPostgresAdapter);


/***/ }),
/* 69 */
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
__exportStar(__webpack_require__(70), exports);
__exportStar(__webpack_require__(74), exports);


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginationRequest = void 0;
exports.getPaginationOffset = getPaginationOffset;
exports.getPaginationLimit = getPaginationLimit;
const class_validator_1 = __webpack_require__(71);
const swagger_1 = __webpack_require__(72);
const class_transformer_1 = __webpack_require__(73);
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
/* 71 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 72 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 73 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 74 */
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
const swagger_1 = __webpack_require__(72);
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
const tsdb_module_1 = __webpack_require__(2);
const config_1 = __webpack_require__(6);
const microservices_1 = __webpack_require__(7);
const semlog_module_1 = __webpack_require__(8);
const path_1 = __webpack_require__(46);
const proto_1 = __webpack_require__(12);
async function bootstrap() {
    const tsdbModule = await core_1.NestFactory.create(tsdb_module_1.TsdbModule);
    const config = tsdbModule.get(config_1.ConfigService);
    tsdbModule.connectMicroservice({
        transport: microservices_1.Transport.MQTT,
        options: {
            url: config.get('MQTT_URL'),
            clientId: 'microservice-tsdb',
        },
    });
    await tsdbModule.init();
    await tsdbModule.startAllMicroservices();
    const semLogModule = await core_1.NestFactory.create(semlog_module_1.SemlogModule);
    semLogModule.connectMicroservice({
        transport: microservices_1.Transport.MQTT,
        options: {
            url: config.get('MQTT_URL'),
            clientId: 'microservice-semlog',
        },
    });
    semLogModule.connectMicroservice({
        transport: microservices_1.Transport.GRPC,
        options: {
            package: proto_1.LogMicroservice.protobufPackage,
            protoPath: (0, path_1.join)(process.cwd(), 'proto/log.proto'),
            url: config.get('LOG_GRPC_URL'),
        },
    });
    await semLogModule.init();
    await semLogModule.startAllMicroservices();
    console.log('----------------->', process.env.RELEASE_REPO_URL);
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map