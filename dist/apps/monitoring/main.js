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
const tsdb_mqtt_controller_1 = __webpack_require__(7);
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
        controllers: [tsdb_mqtt_controller_1.TsdbMqttInputController],
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TsdbService = void 0;
const common_1 = __webpack_require__(8);
const influxdb_client_1 = __webpack_require__(4);
const influxdb_client_apis_1 = __webpack_require__(79);
class TsdbService {
    constructor() {
        this.loggerService = common_1.LoggerService.get('influxdb');
        this.token = 'rNmqH_gyV0mrjCZoAra8M17tDYMU5AHoWhvk_cilEoJ2_NDKA4jSew1roVr-e6qfMwGv94BhBtU9jC58VpzHrQ==';
        this.url = 'http://localhost:7002';
        this.orgName = 'rainbow';
        this.bucketName = 'slamnav';
    }
    async onModuleInit() {
        this.dbClient = new influxdb_client_1.InfluxDB({
            url: this.url,
            token: this.token,
        });
        await this.initBuckets('slamnav');
        await this.initBuckets('externalAccessory');
    }
    async initBuckets(name) {
        const orgsAPI = new influxdb_client_apis_1.OrgsAPI(this.dbClient);
        const bucketsAPI = new influxdb_client_apis_1.BucketsAPI(this.dbClient);
        const orgs = await orgsAPI.getOrgs({ org: this.orgName });
        const org = orgs.orgs?.[0];
        if (!org?.id)
            throw new Error(`Org '${this.orgName}' not found`);
        const existing = await bucketsAPI.getBuckets({ orgID: org.id });
        const found = existing.buckets?.find((b) => b.name === name);
        if (found)
            return;
        await bucketsAPI.postBuckets({
            body: {
                orgID: org.id,
                name: name,
                retentionRules: [{ type: 'expire', everySeconds: 60 * 60 * 24 * 30 }],
            },
        });
        this.loggerService.info(`✅ Created bucket '${name}'`);
    }
    writeStatus(status) {
        try {
            const imuPoint = new influxdb_client_1.Point('imu').tag('type', 'imu');
            if (status.imu.acc_x !== undefined) {
                imuPoint.floatField('acc_x', status.imu.acc_x);
            }
            if (status.imu.acc_y !== undefined) {
                imuPoint.floatField('acc_y', status.imu.acc_y);
            }
            if (status.imu.acc_z !== undefined) {
                imuPoint.floatField('acc_z', status.imu.acc_z);
            }
            if (status.imu.gyr_x !== undefined) {
                imuPoint.floatField('gyr_x', status.imu.gyr_x);
            }
            if (status.imu.gyr_y !== undefined) {
                imuPoint.floatField('gyr_y', status.imu.gyr_y);
            }
            if (status.imu.gyr_z !== undefined) {
                imuPoint.floatField('gyr_z', status.imu.gyr_z);
            }
            if (status.imu.imu_rx !== undefined) {
                imuPoint.floatField('imu_rx', status.imu.imu_rx);
            }
            if (status.imu.imu_ry !== undefined) {
                imuPoint.floatField('imu_ry', status.imu.imu_ry);
            }
            if (status.imu.imu_rz !== undefined) {
                imuPoint.floatField('imu_rz', status.imu.imu_rz);
            }
            const mapPoint = new influxdb_client_1.Point('map').tag('type', 'map');
            if (status.map.map_name !== undefined) {
                mapPoint.stringField('map_name', status.map.map_name);
            }
            if (status.map.map_status !== undefined) {
                mapPoint.stringField('map_status', status.map.map_status);
            }
            const motor1Point = new influxdb_client_1.Point('motor1').tag('type', 'motor1');
            if (status.motor[0].connection !== undefined) {
                motor1Point.booleanField('connection', status.motor[0].connection);
            }
            if (status.motor[0].current !== undefined) {
                motor1Point.floatField('current', status.motor[0].current);
            }
            if (status.motor[0].temp !== undefined) {
                motor1Point.floatField('temp', status.motor[0].temp);
            }
            if (status.motor[0].status !== undefined) {
                motor1Point.intField('status', status.motor[0].status);
            }
            const motor2Point = new influxdb_client_1.Point('motor2').tag('type', 'motor2');
            if (status.motor[1].connection !== undefined) {
                motor2Point.booleanField('connection', status.motor[1].connection);
            }
            if (status.motor[1].current !== undefined) {
                motor2Point.floatField('current', status.motor[1].current);
            }
            if (status.motor[1].temp !== undefined) {
                motor2Point.floatField('temp', status.motor[1].temp);
            }
            if (status.motor[1].status !== undefined) {
                motor2Point.intField('status', status.motor[1].status);
            }
            const robotStatePoint = new influxdb_client_1.Point('robot_state').tag('type', 'robot_state');
            if (status.robot_state.charge !== undefined) {
                robotStatePoint.stringField('charge', status.robot_state.charge);
            }
            if (status.robot_state.dock !== undefined) {
                robotStatePoint.booleanField('dock', status.robot_state.dock);
            }
            if (status.robot_state.emo !== undefined) {
                robotStatePoint.booleanField('emo', status.robot_state.emo);
            }
            if (status.robot_state.power !== undefined) {
                robotStatePoint.booleanField('power', status.robot_state.power);
            }
            if (status.robot_state.localization !== undefined) {
                robotStatePoint.stringField('localization', status.robot_state.localization);
            }
            const conditionPoint = new influxdb_client_1.Point('condition').tag('type', 'condition');
            if (status.condition.inlier_error !== undefined) {
                conditionPoint.floatField('inlier_error', status.condition.inlier_error);
            }
            if (status.condition.inlier_ratio !== undefined) {
                conditionPoint.floatField('inlier_ratio', status.condition.inlier_ratio);
            }
            if (status.condition.mapping_error !== undefined) {
                conditionPoint.floatField('mapping_error', status.condition.mapping_error);
            }
            if (status.condition.mapping_ratio !== undefined) {
                conditionPoint.floatField('mapping_ratio', status.condition.mapping_ratio);
            }
            const batteryPoint = new influxdb_client_1.Point('power').tag('type', 'power');
            if (status.power.bat_in !== undefined) {
                batteryPoint.floatField('battery_in', status.power.bat_in);
            }
            if (status.power.bat_out !== undefined) {
                batteryPoint.floatField('battery_out', status.power.bat_out);
            }
            if (status.power.bat_current !== undefined) {
                batteryPoint.floatField('battery_current', status.power.bat_current);
            }
            if (status.power.bat_percent !== undefined) {
                batteryPoint.floatField('battery_percent', status.power.bat_percent);
            }
            if (status.power.charge_current !== undefined) {
                batteryPoint.floatField('charge_current', status.power.charge_current);
            }
            if (status.power.contact_voltage !== undefined) {
                batteryPoint.floatField('contact_voltage', status.power.contact_voltage);
            }
            if (status.power.power !== undefined) {
                batteryPoint.floatField('power', status.power.power);
            }
            if (status.power.total_power !== undefined) {
                batteryPoint.floatField('total_power', status.power.total_power);
            }
            if (status.power.tabos_ae !== undefined) {
                batteryPoint.floatField('tabos_ae', status.power.tabos_ae);
            }
            if (status.power.tabos_status !== undefined) {
                batteryPoint.floatField('tabos_status', status.power.tabos_status);
            }
            if (status.power.tabos_current !== undefined) {
                batteryPoint.floatField('tabos_current', status.power.tabos_current);
            }
            if (status.power.tabos_rc !== undefined) {
                batteryPoint.floatField('tabos_rc', status.power.tabos_rc);
            }
            if (status.power.tabos_soc !== undefined) {
                batteryPoint.floatField('tabos_soc', status.power.tabos_soc);
            }
            if (status.power.tabos_soh !== undefined) {
                batteryPoint.floatField('tabos_soh', status.power.tabos_soh);
            }
            if (status.power.tabos_temp !== undefined) {
                batteryPoint.floatField('tabos_temp', status.power.tabos_temp);
            }
            if (status.power.tabos_tte !== undefined) {
                batteryPoint.floatField('tabos_tte', status.power.tabos_tte);
            }
            if (status.power.tabos_ttf !== undefined) {
                batteryPoint.floatField('tabos_ttf', status.power.tabos_ttf);
            }
            if (status.power.tabos_voltage !== undefined) {
                batteryPoint.floatField('tabos_voltage', status.power.tabos_voltage);
            }
            const timePoint = new influxdb_client_1.Point('time3').tag('type', 't2ime').intField('time3', status.time);
            this.dbClient
                .getWriteApi(this.orgName, this.bucketName, 'ns')
                .writePoints([batteryPoint, timePoint, imuPoint, mapPoint, motor1Point, motor2Point, robotStatePoint, conditionPoint]);
        }
        catch (error) {
            this.loggerService.error(`[Tsdb] writeStatus : ${(0, common_1.errorToJson)(error)}`);
        }
    }
    writeMoveStatus(status) {
        try {
            const curNodePoint = new influxdb_client_1.Point('curNode').tag('type', 'curNode');
            if (status.cur_node.id !== undefined) {
                curNodePoint.stringField('id', status.cur_node.id);
            }
            if (status.cur_node.name !== undefined) {
                curNodePoint.stringField('name', status.cur_node.name);
            }
            if (status.cur_node.x !== undefined) {
                curNodePoint.floatField('x', status.cur_node.x);
            }
            if (status.cur_node.y !== undefined) {
                curNodePoint.floatField('y', status.cur_node.y);
            }
            if (status.cur_node.rz !== undefined) {
                curNodePoint.floatField('rz', status.cur_node.rz);
            }
            const goalNodePoint = new influxdb_client_1.Point('goalNode').tag('type', 'goalNode');
            if (status.goal_node.id !== undefined) {
                goalNodePoint.stringField('id', status.goal_node.id);
            }
            if (status.goal_node.name !== undefined) {
                goalNodePoint.stringField('name', status.goal_node.name);
            }
            if (status.goal_node.state !== undefined) {
                goalNodePoint.stringField('state', status.goal_node.state);
            }
            if (status.goal_node.x !== undefined) {
                goalNodePoint.floatField('x', status.goal_node.x);
            }
            if (status.goal_node.y !== undefined) {
                goalNodePoint.floatField('y', status.goal_node.y);
            }
            if (status.goal_node.rz !== undefined) {
                goalNodePoint.floatField('rz', status.goal_node.rz);
            }
            const moveStatePoint = new influxdb_client_1.Point('moveState').tag('type', 'moveState');
            if (status.move_state.auto_move !== undefined) {
                moveStatePoint.stringField('auto_move', status.move_state.auto_move);
            }
            if (status.move_state.dock_move !== undefined) {
                moveStatePoint.stringField('dock_move', status.move_state.dock_move);
            }
            if (status.move_state.jog_move !== undefined) {
                moveStatePoint.stringField('jog_move', status.move_state.jog_move);
            }
            if (status.move_state.obs !== undefined) {
                moveStatePoint.stringField('obs', status.move_state.obs);
            }
            if (status.move_state.path !== undefined) {
                moveStatePoint.stringField('path', status.move_state.path);
            }
            const posePoint = new influxdb_client_1.Point('pose').tag('type', 'pose');
            if (status.pose.x !== undefined) {
                posePoint.floatField('x', status.pose.x);
            }
            if (status.pose.y !== undefined) {
                posePoint.floatField('y', status.pose.y);
            }
            if (status.pose.rz !== undefined) {
                posePoint.floatField('rz', status.pose.rz);
            }
            const velPoint = new influxdb_client_1.Point('vel').tag('type', 'vel');
            if (status.vel.vx !== undefined) {
                velPoint.floatField('vx', status.vel.vx);
            }
            if (status.vel.vy !== undefined) {
                velPoint.floatField('vy', status.vel.vy);
            }
            if (status.vel.wz !== undefined) {
                velPoint.floatField('wz', status.vel.wz);
            }
            this.dbClient
                .getWriteApi(this.orgName, this.bucketName, 'ns')
                .writePoints([curNodePoint, goalNodePoint, moveStatePoint, posePoint, velPoint]);
        }
        catch (error) {
            this.loggerService.error(`[Tsdb] writeMoveStatus : ${(0, common_1.errorToJson)(error)}`);
        }
    }
    writeExternalStatus(status) {
        try {
            const footPoint = new influxdb_client_1.Point('foot').tag('type', 'foot');
            if (status.foot.connection !== undefined) {
                footPoint.booleanField('connection', status.foot.connection);
            }
            if (status.foot.position !== undefined) {
                footPoint.floatField('position', status.foot.position);
            }
            if (status.foot.is_down !== undefined) {
                footPoint.booleanField('is_down', status.foot.is_down);
            }
            if (status.foot.foot_status !== undefined) {
                footPoint.intField('foot_status', status.foot.foot_status);
            }
            const temperatureSensorPoint = new influxdb_client_1.Point('temperatureSensor').tag('type', 'temperatureSensor');
            if (status.temperature_sensor.connection !== undefined) {
                temperatureSensorPoint.booleanField('connection', status.temperature_sensor.connection);
            }
            if (status.temperature_sensor.temperature_value !== undefined) {
                temperatureSensorPoint.floatField('temperature_value', status.temperature_sensor.temperature_value);
            }
            this.dbClient.getWriteApi(this.orgName, 'externalAccessory', 'ns').writePoints([footPoint, temperatureSensorPoint]);
        }
        catch (error) {
            this.loggerService.error(`[Tsdb] writeExternalStatus : ${(0, common_1.errorToJson)(error)}`);
        }
    }
}
exports.TsdbService = TsdbService;


/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TsdbMqttInputController = void 0;
const common_1 = __webpack_require__(3);
const tsdb_service_1 = __webpack_require__(5);
const common_2 = __webpack_require__(8);
const microservices_1 = __webpack_require__(12);
const status_type_1 = __webpack_require__(59);
const movestatus_type_1 = __webpack_require__(78);
const exAccessory_dto_1 = __webpack_require__(80);
let TsdbMqttInputController = class TsdbMqttInputController {
    constructor(tsdbService) {
        this.tsdbService = tsdbService;
        this.loggerService = common_2.LoggerService.get('tsdb');
    }
    getCobotCommandResponse(data) {
        this.tsdbService.writeStatus(data);
    }
    getMoveStatus(data) {
        this.tsdbService.writeMoveStatus(data);
    }
    getExternalStatus(data) {
        this.tsdbService.writeExternalStatus(data);
    }
};
exports.TsdbMqttInputController = TsdbMqttInputController;
__decorate([
    (0, microservices_1.MessagePattern)('status'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof status_type_1.StatusSlamnav !== "undefined" && status_type_1.StatusSlamnav) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], TsdbMqttInputController.prototype, "getCobotCommandResponse", null);
__decorate([
    (0, microservices_1.MessagePattern)('moveStatus'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof movestatus_type_1.MoveStatusSlamnav !== "undefined" && movestatus_type_1.MoveStatusSlamnav) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], TsdbMqttInputController.prototype, "getMoveStatus", null);
__decorate([
    (0, microservices_1.MessagePattern)('exAccessoryStatus'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof exAccessory_dto_1.ExAccessoryStatusDto !== "undefined" && exAccessory_dto_1.ExAccessoryStatusDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], TsdbMqttInputController.prototype, "getExternalStatus", null);
exports.TsdbMqttInputController = TsdbMqttInputController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof tsdb_service_1.TsdbService !== "undefined" && tsdb_service_1.TsdbService) === "function" ? _a : Object])
], TsdbMqttInputController);


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
__exportStar(__webpack_require__(31), exports);
__exportStar(__webpack_require__(34), exports);


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
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.USER_GRPC_SERVICE_NAME = exports.USER_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.UserGrpcServiceControllerMethods = UserGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(12);
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
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AUTH_GRPC_SERVICE_NAME = exports.AUTH_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.AuthGrpcServiceControllerMethods = AuthGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(12);
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
const microservices_1 = __webpack_require__(12);
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
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.REDIS_ROBOT_CACHE_GRPC_SERVICE_NAME = exports.REDIS_SOCKET_CACHE_GRPC_SERVICE_NAME = exports.REDIS_PACKAGE_NAME = exports.RobotType = exports.protobufPackage = void 0;
exports.RedisSocketCacheGrpcServiceControllerMethods = RedisSocketCacheGrpcServiceControllerMethods;
exports.RedisRobotCacheGrpcServiceControllerMethods = RedisRobotCacheGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(12);
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
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CONFIG_GRPC_SERVICE_NAME = exports.CONFIG_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.ConfigGrpcServiceControllerMethods = ConfigGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(12);
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
const microservices_1 = __webpack_require__(12);
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
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CODE_GRPC_SERVICE_NAME = exports.CODE_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.CodeGrpcServiceControllerMethods = CodeGrpcServiceControllerMethods;
const microservices_1 = __webpack_require__(12);
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
const microservices_1 = __webpack_require__(12);
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
const microservices_1 = __webpack_require__(12);
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
const microservices_1 = __webpack_require__(12);
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
const microservices_1 = __webpack_require__(12);
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
const microservices_1 = __webpack_require__(12);
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
const microservices_1 = __webpack_require__(12);
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
const microservices_1 = __webpack_require__(12);
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
const microservices_1 = __webpack_require__(12);
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
const microservices_1 = __webpack_require__(12);
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
const microservices_1 = __webpack_require__(12);
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
const microservices_1 = __webpack_require__(12);
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
const microservices_1 = __webpack_require__(12);
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
__exportStar(__webpack_require__(58), exports);


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerService = void 0;
const winston_1 = __webpack_require__(36);
const DailyRotateFile = __webpack_require__(37);
const util_1 = __webpack_require__(38);
const chalk_1 = __webpack_require__(57);
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
var parse_util_1 = __webpack_require__(54);
Object.defineProperty(exports, "ParseUtil", ({ enumerable: true, get: function () { return parse_util_1.ParseUtil; } }));
var crypto_util_1 = __webpack_require__(55);
Object.defineProperty(exports, "CryptoUtil", ({ enumerable: true, get: function () { return crypto_util_1.CryptoUtil; } }));
var validation_util_1 = __webpack_require__(56);
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
const path = __webpack_require__(45);
const unzipper = __webpack_require__(46);
const il = __webpack_require__(47);
const uuid_1 = __webpack_require__(40);
const archiver_1 = __webpack_require__(48);
const csv = __webpack_require__(49);
const zlib_1 = __webpack_require__(50);
const common_1 = __webpack_require__(8);
const rpc_code_exception_1 = __webpack_require__(51);
const constant_1 = __webpack_require__(52);
const microservices_1 = __webpack_require__(12);
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
/* 44 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 45 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 46 */
/***/ ((module) => {

module.exports = require("unzipper");

/***/ }),
/* 47 */
/***/ ((module) => {

module.exports = require("iconv-lite");

/***/ }),
/* 48 */
/***/ ((module) => {

module.exports = require("archiver");

/***/ }),
/* 49 */
/***/ ((module) => {

module.exports = require("csv");

/***/ }),
/* 50 */
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RpcCodeException = void 0;
const microservices_1 = __webpack_require__(12);
class RpcCodeException extends microservices_1.RpcException {
    constructor(details, statusCode) {
        super({ details: details, code: statusCode });
        this.statusCode = statusCode;
    }
}
exports.RpcCodeException = RpcCodeException;


/***/ }),
/* 52 */
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
__exportStar(__webpack_require__(53), exports);


/***/ }),
/* 53 */
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
/* 54 */
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
/* 55 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CryptoUtil = void 0;
class CryptoUtil {
}
exports.CryptoUtil = CryptoUtil;


/***/ }),
/* 56 */
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
/* 57 */
/***/ ((module) => {

module.exports = require("chalk");

/***/ }),
/* 58 */
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
exports.StatusSlamnav = exports.StatusMapDto = exports.StatusSettingDto = exports.StatusPowerDto = exports.StatusStateDto = exports.StatusConditionDto = exports.StatuMotorDto = exports.StatusLidarDto = exports.StatusIMUDto = void 0;
const date_util_1 = __webpack_require__(41);
const swagger_1 = __webpack_require__(60);
const class_validator_1 = __webpack_require__(61);
const state_type_1 = __webpack_require__(62);
const class_transformer_1 = __webpack_require__(63);
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
/* 60 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 61 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 62 */
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
/* 63 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 64 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SemlogModule = void 0;
const config_1 = __webpack_require__(6);
const sem_log_service_1 = __webpack_require__(65);
const common_1 = __webpack_require__(3);
const sem_log_alarm_log_dto_1 = __webpack_require__(67);
const typeorm_1 = __webpack_require__(69);
const sem_log_alarm_dto_1 = __webpack_require__(70);
const pg_1 = __webpack_require__(71);
const sem_log_mqtt_controller_1 = __webpack_require__(72);
const sem_log_grpc_controller_1 = __webpack_require__(73);
const sem_log_postgres_adapter_1 = __webpack_require__(74);
let SemlogModule = class SemlogModule {
};
exports.SemlogModule = SemlogModule;
exports.SemlogModule = SemlogModule = __decorate([
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SemLogService = void 0;
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(3);
const sem_log_database_output_port_1 = __webpack_require__(66);
const rpc_code_exception_1 = __webpack_require__(51);
const constant_1 = __webpack_require__(52);
const date_util_1 = __webpack_require__(41);
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
/* 66 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


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
exports.SemLogAlarmLog = void 0;
const typeorm_1 = __webpack_require__(68);
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
/* 68 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 69 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

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
exports.SemLogAlarmList = void 0;
const typeorm_1 = __webpack_require__(68);
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
/* 71 */
/***/ ((module) => {

module.exports = require("pg");

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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SemLogMqttInputController = void 0;
const common_1 = __webpack_require__(3);
const sem_log_service_1 = __webpack_require__(65);
const microservices_1 = __webpack_require__(12);
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SemLogGrpcController = void 0;
const common_1 = __webpack_require__(8);
const common_2 = __webpack_require__(3);
const sem_log_service_1 = __webpack_require__(65);
const rpc_code_exception_1 = __webpack_require__(51);
const constant_1 = __webpack_require__(52);
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SemLogPostgresAdapter = void 0;
const typeorm_1 = __webpack_require__(69);
const sem_log_alarm_dto_1 = __webpack_require__(70);
const sem_log_alarm_log_dto_1 = __webpack_require__(67);
const typeorm_2 = __webpack_require__(68);
const common_1 = __webpack_require__(8);
const util_1 = __webpack_require__(38);
const rpc_code_exception_1 = __webpack_require__(51);
const constant_1 = __webpack_require__(52);
const pagination_1 = __webpack_require__(75);
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
            throw new rpc_code_exception_1.RpcCodeException('데이터를 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async getAlarmbyCode(code) {
        try {
            return await this.alarmListRepository.findOneBy({ code });
        }
        catch (error) {
            this.loggerService.error(`[SEMLog] DB getAlarmbyId: ${util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
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
            throw new rpc_code_exception_1.RpcCodeException('데이터를 저장할 수 없습니다.', constant_1.GrpcCode.InternalError);
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
            throw new rpc_code_exception_1.RpcCodeException('데이터를 삭제할 수 없습니다.', constant_1.GrpcCode.InternalError);
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
            throw new rpc_code_exception_1.RpcCodeException('데이터를 삭제할 수 없습니다.', constant_1.GrpcCode.InternalError);
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
            throw new rpc_code_exception_1.RpcCodeException('데이터를 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
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
            throw new rpc_code_exception_1.RpcCodeException('데이터를 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async getAlarmLogAll() {
        try {
            return await this.alarmLogRepository.find();
        }
        catch (error) {
            this.loggerService.error(`[SEMLog] DB getAlarmLogAll: ${util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 가져올 수 없습니다.', constant_1.GrpcCode.InternalError);
        }
    }
    async saveAlarmLog(alarmLog) {
        try {
            return await this.alarmLogRepository.save(alarmLog);
        }
        catch (error) {
            this.loggerService.error(`[SEMLog] DB saveAlarmLog: ${util_1.ParseUtil.errorToJson(error)}`);
            throw new rpc_code_exception_1.RpcCodeException('데이터를 저장할 수 없습니다.', constant_1.GrpcCode.InternalError);
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
            throw new rpc_code_exception_1.RpcCodeException('데이터를 삭제할 수 없습니다.', constant_1.GrpcCode.InternalError);
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
__exportStar(__webpack_require__(77), exports);


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginationRequest = void 0;
exports.getPaginationOffset = getPaginationOffset;
exports.getPaginationLimit = getPaginationLimit;
const class_validator_1 = __webpack_require__(61);
const swagger_1 = __webpack_require__(60);
const class_transformer_1 = __webpack_require__(63);
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
exports.PaginationResponse = void 0;
const swagger_1 = __webpack_require__(60);
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
exports.MoveStatusSlamnav = exports.CurNodeDto = exports.GoalNodeDto = exports.VelocityStatusDto = exports.PoseStatusDto = exports.MoveStateDto = void 0;
const swagger_1 = __webpack_require__(60);
const class_validator_1 = __webpack_require__(61);
const util_1 = __webpack_require__(38);
const state_type_1 = __webpack_require__(62);
const state_type_2 = __webpack_require__(62);
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
/* 79 */
/***/ ((module) => {

var p=Object.defineProperty;var X=Object.getOwnPropertyDescriptor;var Y=Object.getOwnPropertyNames;var Z=Object.prototype.hasOwnProperty;var ee=(r,e)=>{for(var s in e)p(r,s,{get:e[s],enumerable:!0})},se=(r,e,s,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Y(e))!Z.call(r,o)&&o!==s&&p(r,o,{get:()=>e[o],enumerable:!(i=X(e,o))||i.enumerable});return r};var te=r=>se(p({},"__esModule",{value:!0}),r);var ie={};ee(ie,{AuthorizationsAPI:()=>D,BackupAPI:()=>l,BucketsAPI:()=>R,ChecksAPI:()=>b,ConfigAPI:()=>I,DashboardsAPI:()=>g,DbrpsAPI:()=>q,DebugAPI:()=>m,DeleteAPI:()=>f,FlagsAPI:()=>d,FluxScriptInvocationAPI:()=>W,HealthAPI:()=>h,LabelsAPI:()=>P,MeAPI:()=>O,MetricsAPI:()=>x,NotificationEndpointsAPI:()=>T,NotificationRulesAPI:()=>k,OrgsAPI:()=>v,PingAPI:()=>B,QueryAPI:()=>S,ReadyAPI:()=>G,RemotesAPI:()=>E,ReplicationsAPI:()=>y,ResourcesAPI:()=>$,RestoreAPI:()=>L,RootAPI:()=>c,ScrapersAPI:()=>w,ScriptsAPI:()=>C,SetupAPI:()=>M,SigninAPI:()=>A,SignoutAPI:()=>N,SourcesAPI:()=>j,StacksAPI:()=>V,TasksAPI:()=>U,TelegrafAPI:()=>z,TelegrafsAPI:()=>H,TemplatesAPI:()=>Q,UsersAPI:()=>F,VariablesAPI:()=>K,WriteAPI:()=>_});module.exports=te(ie);function re(r){return typeof btoa=="function"?btoa(r):Buffer.from(r,"binary").toString("base64")}var t=class{constructor(e){if(!e)throw new Error("No influxDB supplied!");if(!e.transport)throw new Error("No transport supplied!");this.transport=e.transport}queryString(e,s){return e&&s?s.reduce((i,o)=>{let a=e[o];return a!=null&&(i+=i?"&":"?",i+=encodeURIComponent(o)+"="+encodeURIComponent(String(a))),i},""):""}request(e,s,i={},o,a){let n={...o,method:e};if(a&&((n.headers||(n.headers={}))["content-type"]=a),i.auth){let u=`${i.auth.user}:${i.auth.password}`;(n.headers||(n.headers={})).authorization=`Basic ${re(u)}`}return this.transport.request(s,i.body?i.body:"",n,o==null?void 0:o.responseStarted)}};var c=class{constructor(e){this.base=new t(e)}getRoutes(e,s){return this.base.request("GET","/api/v2/",e,s)}};var D=class{constructor(e){this.base=new t(e)}getAuthorizations(e,s){return this.base.request("GET",`/api/v2/authorizations${this.base.queryString(e,["userID","user","orgID","org"])}`,e,s)}postAuthorizations(e,s){return this.base.request("POST","/api/v2/authorizations",e,s,"application/json")}getAuthorizationsID(e,s){return this.base.request("GET",`/api/v2/authorizations/${e.authID}`,e,s)}patchAuthorizationsID(e,s){return this.base.request("PATCH",`/api/v2/authorizations/${e.authID}`,e,s,"application/json")}deleteAuthorizationsID(e,s){return this.base.request("DELETE",`/api/v2/authorizations/${e.authID}`,e,s)}};var l=class{constructor(e){this.base=new t(e)}getBackupKV(e,s){return this.base.request("GET","/api/v2/backup/kv",e,s)}getBackupMetadata(e,s){return this.base.request("GET","/api/v2/backup/metadata",e,s)}getBackupShardId(e,s){return this.base.request("GET",`/api/v2/backup/shards/${e.shardID}${this.base.queryString(e,["since"])}`,e,s)}};var R=class{constructor(e){this.base=new t(e)}getBuckets(e,s){return this.base.request("GET",`/api/v2/buckets${this.base.queryString(e,["offset","limit","after","org","orgID","name","id"])}`,e,s)}postBuckets(e,s){return this.base.request("POST","/api/v2/buckets",e,s,"application/json")}getBucketsID(e,s){return this.base.request("GET",`/api/v2/buckets/${e.bucketID}`,e,s)}patchBucketsID(e,s){return this.base.request("PATCH",`/api/v2/buckets/${e.bucketID}`,e,s,"application/json")}deleteBucketsID(e,s){return this.base.request("DELETE",`/api/v2/buckets/${e.bucketID}`,e,s)}getBucketsIDLabels(e,s){return this.base.request("GET",`/api/v2/buckets/${e.bucketID}/labels`,e,s)}postBucketsIDLabels(e,s){return this.base.request("POST",`/api/v2/buckets/${e.bucketID}/labels`,e,s,"application/json")}deleteBucketsIDLabelsID(e,s){return this.base.request("DELETE",`/api/v2/buckets/${e.bucketID}/labels/${e.labelID}`,e,s)}getBucketsIDMembers(e,s){return this.base.request("GET",`/api/v2/buckets/${e.bucketID}/members`,e,s)}postBucketsIDMembers(e,s){return this.base.request("POST",`/api/v2/buckets/${e.bucketID}/members`,e,s,"application/json")}deleteBucketsIDMembersID(e,s){return this.base.request("DELETE",`/api/v2/buckets/${e.bucketID}/members/${e.userID}`,e,s)}getBucketsIDOwners(e,s){return this.base.request("GET",`/api/v2/buckets/${e.bucketID}/owners`,e,s)}postBucketsIDOwners(e,s){return this.base.request("POST",`/api/v2/buckets/${e.bucketID}/owners`,e,s,"application/json")}deleteBucketsIDOwnersID(e,s){return this.base.request("DELETE",`/api/v2/buckets/${e.bucketID}/owners/${e.userID}`,e,s)}};var b=class{constructor(e){this.base=new t(e)}getChecks(e,s){return this.base.request("GET",`/api/v2/checks${this.base.queryString(e,["offset","limit","orgID"])}`,e,s)}createCheck(e,s){return this.base.request("POST","/api/v2/checks",e,s,"application/json")}getChecksID(e,s){return this.base.request("GET",`/api/v2/checks/${e.checkID}`,e,s)}putChecksID(e,s){return this.base.request("PUT",`/api/v2/checks/${e.checkID}`,e,s,"application/json")}patchChecksID(e,s){return this.base.request("PATCH",`/api/v2/checks/${e.checkID}`,e,s,"application/json")}deleteChecksID(e,s){return this.base.request("DELETE",`/api/v2/checks/${e.checkID}`,e,s)}getChecksIDLabels(e,s){return this.base.request("GET",`/api/v2/checks/${e.checkID}/labels`,e,s)}postChecksIDLabels(e,s){return this.base.request("POST",`/api/v2/checks/${e.checkID}/labels`,e,s,"application/json")}deleteChecksIDLabelsID(e,s){return this.base.request("DELETE",`/api/v2/checks/${e.checkID}/labels/${e.labelID}`,e,s)}getChecksIDQuery(e,s){return this.base.request("GET",`/api/v2/checks/${e.checkID}/query`,e,s)}};var I=class{constructor(e){this.base=new t(e)}getConfig(e,s){return this.base.request("GET","/api/v2/config",e,s)}};var g=class{constructor(e){this.base=new t(e)}getDashboardsID(e,s){return this.base.request("GET",`/api/v2/dashboards/${e.dashboardID}${this.base.queryString(e,["include"])}`,e,s)}patchDashboardsID(e,s){return this.base.request("PATCH",`/api/v2/dashboards/${e.dashboardID}`,e,s,"application/json")}deleteDashboardsID(e,s){return this.base.request("DELETE",`/api/v2/dashboards/${e.dashboardID}`,e,s)}postDashboardsIDCells(e,s){return this.base.request("POST",`/api/v2/dashboards/${e.dashboardID}/cells`,e,s,"application/json")}putDashboardsIDCells(e,s){return this.base.request("PUT",`/api/v2/dashboards/${e.dashboardID}/cells`,e,s,"application/json")}patchDashboardsIDCellsID(e,s){return this.base.request("PATCH",`/api/v2/dashboards/${e.dashboardID}/cells/${e.cellID}`,e,s,"application/json")}deleteDashboardsIDCellsID(e,s){return this.base.request("DELETE",`/api/v2/dashboards/${e.dashboardID}/cells/${e.cellID}`,e,s)}getDashboardsIDCellsIDView(e,s){return this.base.request("GET",`/api/v2/dashboards/${e.dashboardID}/cells/${e.cellID}/view`,e,s)}patchDashboardsIDCellsIDView(e,s){return this.base.request("PATCH",`/api/v2/dashboards/${e.dashboardID}/cells/${e.cellID}/view`,e,s,"application/json")}getDashboardsIDLabels(e,s){return this.base.request("GET",`/api/v2/dashboards/${e.dashboardID}/labels`,e,s)}postDashboardsIDLabels(e,s){return this.base.request("POST",`/api/v2/dashboards/${e.dashboardID}/labels`,e,s,"application/json")}deleteDashboardsIDLabelsID(e,s){return this.base.request("DELETE",`/api/v2/dashboards/${e.dashboardID}/labels/${e.labelID}`,e,s)}getDashboardsIDMembers(e,s){return this.base.request("GET",`/api/v2/dashboards/${e.dashboardID}/members`,e,s)}postDashboardsIDMembers(e,s){return this.base.request("POST",`/api/v2/dashboards/${e.dashboardID}/members`,e,s,"application/json")}deleteDashboardsIDMembersID(e,s){return this.base.request("DELETE",`/api/v2/dashboards/${e.dashboardID}/members/${e.userID}`,e,s)}getDashboardsIDOwners(e,s){return this.base.request("GET",`/api/v2/dashboards/${e.dashboardID}/owners`,e,s)}postDashboardsIDOwners(e,s){return this.base.request("POST",`/api/v2/dashboards/${e.dashboardID}/owners`,e,s,"application/json")}deleteDashboardsIDOwnersID(e,s){return this.base.request("DELETE",`/api/v2/dashboards/${e.dashboardID}/owners/${e.userID}`,e,s)}getDashboards(e,s){return this.base.request("GET",`/api/v2/dashboards${this.base.queryString(e,["offset","limit","descending","owner","sortBy","id","orgID","org"])}`,e,s)}postDashboards(e,s){return this.base.request("POST","/api/v2/dashboards",e,s,"application/json")}};var q=class{constructor(e){this.base=new t(e)}getDBRPs(e,s){return this.base.request("GET",`/api/v2/dbrps${this.base.queryString(e,["orgID","org","id","bucketID","default","db","rp"])}`,e,s)}postDBRP(e,s){return this.base.request("POST","/api/v2/dbrps",e,s,"application/json")}getDBRPsID(e,s){return this.base.request("GET",`/api/v2/dbrps/${e.dbrpID}${this.base.queryString(e,["orgID","org"])}`,e,s)}patchDBRPID(e,s){return this.base.request("PATCH",`/api/v2/dbrps/${e.dbrpID}${this.base.queryString(e,["orgID","org"])}`,e,s,"application/json")}deleteDBRPID(e,s){return this.base.request("DELETE",`/api/v2/dbrps/${e.dbrpID}${this.base.queryString(e,["orgID","org"])}`,e,s)}};var m=class{constructor(e){this.base=new t(e)}getDebugPprofAllProfiles(e,s){return this.base.request("GET",`/api/v2/debug/pprof/all${this.base.queryString(e,["cpu"])}`,e,s)}getDebugPprofAllocs(e,s){return this.base.request("GET",`/api/v2/debug/pprof/allocs${this.base.queryString(e,["debug","seconds"])}`,e,s)}getDebugPprofBlock(e,s){return this.base.request("GET",`/api/v2/debug/pprof/block${this.base.queryString(e,["debug","seconds"])}`,e,s)}getDebugPprofCmdline(e,s){return this.base.request("GET","/api/v2/debug/pprof/cmdline",e,s)}getDebugPprofGoroutine(e,s){return this.base.request("GET",`/api/v2/debug/pprof/goroutine${this.base.queryString(e,["debug","seconds"])}`,e,s)}getDebugPprofHeap(e,s){return this.base.request("GET",`/api/v2/debug/pprof/heap${this.base.queryString(e,["debug","seconds","gc"])}`,e,s)}getDebugPprofMutex(e,s){return this.base.request("GET",`/api/v2/debug/pprof/mutex${this.base.queryString(e,["debug","seconds"])}`,e,s)}getDebugPprofProfile(e,s){return this.base.request("GET",`/api/v2/debug/pprof/profile${this.base.queryString(e,["seconds"])}`,e,s)}getDebugPprofThreadCreate(e,s){return this.base.request("GET",`/api/v2/debug/pprof/threadcreate${this.base.queryString(e,["debug","seconds"])}`,e,s)}getDebugPprofTrace(e,s){return this.base.request("GET",`/api/v2/debug/pprof/trace${this.base.queryString(e,["seconds"])}`,e,s)}};var f=class{constructor(e){this.base=new t(e)}postDelete(e,s){return this.base.request("POST",`/api/v2/delete${this.base.queryString(e,["org","bucket","orgID","bucketID"])}`,e,s,"application/json")}};var d=class{constructor(e){this.base=new t(e)}getFlags(e,s){return this.base.request("GET","/api/v2/flags",e,s)}};var h=class{constructor(e){this.base=new t(e)}getHealth(e,s){return this.base.request("GET","/health",e,s)}};var P=class{constructor(e){this.base=new t(e)}getLabels(e,s){return this.base.request("GET",`/api/v2/labels${this.base.queryString(e,["orgID"])}`,e,s)}postLabels(e,s){return this.base.request("POST","/api/v2/labels",e,s,"application/json")}getLabelsID(e,s){return this.base.request("GET",`/api/v2/labels/${e.labelID}`,e,s)}patchLabelsID(e,s){return this.base.request("PATCH",`/api/v2/labels/${e.labelID}`,e,s,"application/json")}deleteLabelsID(e,s){return this.base.request("DELETE",`/api/v2/labels/${e.labelID}`,e,s)}};var O=class{constructor(e){this.base=new t(e)}getMe(e,s){return this.base.request("GET","/api/v2/me",e,s)}putMePassword(e,s){return this.base.request("PUT","/api/v2/me/password",e,s,"application/json")}};var x=class{constructor(e){this.base=new t(e)}getMetrics(e,s){return this.base.request("GET","/api/v2/metrics",e,s)}};var T=class{constructor(e){this.base=new t(e)}getNotificationEndpoints(e,s){return this.base.request("GET",`/api/v2/notificationEndpoints${this.base.queryString(e,["offset","limit","orgID"])}`,e,s)}createNotificationEndpoint(e,s){return this.base.request("POST","/api/v2/notificationEndpoints",e,s,"application/json")}getNotificationEndpointsID(e,s){return this.base.request("GET",`/api/v2/notificationEndpoints/${e.endpointID}`,e,s)}putNotificationEndpointsID(e,s){return this.base.request("PUT",`/api/v2/notificationEndpoints/${e.endpointID}`,e,s,"application/json")}patchNotificationEndpointsID(e,s){return this.base.request("PATCH",`/api/v2/notificationEndpoints/${e.endpointID}`,e,s,"application/json")}deleteNotificationEndpointsID(e,s){return this.base.request("DELETE",`/api/v2/notificationEndpoints/${e.endpointID}`,e,s)}getNotificationEndpointsIDLabels(e,s){return this.base.request("GET",`/api/v2/notificationEndpoints/${e.endpointID}/labels`,e,s)}postNotificationEndpointIDLabels(e,s){return this.base.request("POST",`/api/v2/notificationEndpoints/${e.endpointID}/labels`,e,s,"application/json")}deleteNotificationEndpointsIDLabelsID(e,s){return this.base.request("DELETE",`/api/v2/notificationEndpoints/${e.endpointID}/labels/${e.labelID}`,e,s)}};var k=class{constructor(e){this.base=new t(e)}getNotificationRules(e,s){return this.base.request("GET",`/api/v2/notificationRules${this.base.queryString(e,["offset","limit","orgID","checkID","tag"])}`,e,s)}createNotificationRule(e,s){return this.base.request("POST","/api/v2/notificationRules",e,s,"application/json")}getNotificationRulesID(e,s){return this.base.request("GET",`/api/v2/notificationRules/${e.ruleID}`,e,s)}putNotificationRulesID(e,s){return this.base.request("PUT",`/api/v2/notificationRules/${e.ruleID}`,e,s,"application/json")}patchNotificationRulesID(e,s){return this.base.request("PATCH",`/api/v2/notificationRules/${e.ruleID}`,e,s,"application/json")}deleteNotificationRulesID(e,s){return this.base.request("DELETE",`/api/v2/notificationRules/${e.ruleID}`,e,s)}getNotificationRulesIDLabels(e,s){return this.base.request("GET",`/api/v2/notificationRules/${e.ruleID}/labels`,e,s)}postNotificationRuleIDLabels(e,s){return this.base.request("POST",`/api/v2/notificationRules/${e.ruleID}/labels`,e,s,"application/json")}deleteNotificationRulesIDLabelsID(e,s){return this.base.request("DELETE",`/api/v2/notificationRules/${e.ruleID}/labels/${e.labelID}`,e,s)}getNotificationRulesIDQuery(e,s){return this.base.request("GET",`/api/v2/notificationRules/${e.ruleID}/query`,e,s)}};var v=class{constructor(e){this.base=new t(e)}getOrgs(e,s){return this.base.request("GET",`/api/v2/orgs${this.base.queryString(e,["offset","limit","descending","org","orgID","userID"])}`,e,s)}postOrgs(e,s){return this.base.request("POST","/api/v2/orgs",e,s,"application/json")}getOrgsID(e,s){return this.base.request("GET",`/api/v2/orgs/${e.orgID}`,e,s)}patchOrgsID(e,s){return this.base.request("PATCH",`/api/v2/orgs/${e.orgID}`,e,s,"application/json")}deleteOrgsID(e,s){return this.base.request("DELETE",`/api/v2/orgs/${e.orgID}`,e,s)}getOrgsIDSecrets(e,s){return this.base.request("GET",`/api/v2/orgs/${e.orgID}/secrets`,e,s)}patchOrgsIDSecrets(e,s){return this.base.request("PATCH",`/api/v2/orgs/${e.orgID}/secrets`,e,s,"application/json")}getOrgsIDMembers(e,s){return this.base.request("GET",`/api/v2/orgs/${e.orgID}/members`,e,s)}postOrgsIDMembers(e,s){return this.base.request("POST",`/api/v2/orgs/${e.orgID}/members`,e,s,"application/json")}deleteOrgsIDMembersID(e,s){return this.base.request("DELETE",`/api/v2/orgs/${e.orgID}/members/${e.userID}`,e,s)}getOrgsIDOwners(e,s){return this.base.request("GET",`/api/v2/orgs/${e.orgID}/owners`,e,s)}postOrgsIDOwners(e,s){return this.base.request("POST",`/api/v2/orgs/${e.orgID}/owners`,e,s,"application/json")}deleteOrgsIDOwnersID(e,s){return this.base.request("DELETE",`/api/v2/orgs/${e.orgID}/owners/${e.userID}`,e,s)}postOrgsIDSecrets(e,s){return this.base.request("POST",`/api/v2/orgs/${e.orgID}/secrets/delete`,e,s,"application/json")}deleteOrgsIDSecretsID(e,s){return this.base.request("DELETE",`/api/v2/orgs/${e.orgID}/secrets/${e.secretID}`,e,s)}};var B=class{constructor(e){this.base=new t(e)}getPing(e,s){return this.base.request("GET","/ping",e,s)}};var S=class{constructor(e){this.base=new t(e)}postQueryAst(e,s){return this.base.request("POST","/api/v2/query/ast",e,s,"application/json")}getQuerySuggestions(e,s){return this.base.request("GET","/api/v2/query/suggestions",e,s)}getQuerySuggestionsName(e,s){return this.base.request("GET",`/api/v2/query/suggestions/${e.name}`,e,s)}postQueryAnalyze(e,s){return this.base.request("POST","/api/v2/query/analyze",e,s,"application/json")}postQuery(e,s){return this.base.request("POST",`/api/v2/query${this.base.queryString(e,["org","orgID"])}`,e,s,"application/json")}};var G=class{constructor(e){this.base=new t(e)}getReady(e,s){return this.base.request("GET","/ready",e,s)}};var E=class{constructor(e){this.base=new t(e)}getRemoteConnections(e,s){return this.base.request("GET",`/api/v2/remotes${this.base.queryString(e,["orgID","name","remoteURL"])}`,e,s)}postRemoteConnection(e,s){return this.base.request("POST","/api/v2/remotes",e,s,"application/json")}getRemoteConnectionByID(e,s){return this.base.request("GET",`/api/v2/remotes/${e.remoteID}`,e,s)}patchRemoteConnectionByID(e,s){return this.base.request("PATCH",`/api/v2/remotes/${e.remoteID}`,e,s,"application/json")}deleteRemoteConnectionByID(e,s){return this.base.request("DELETE",`/api/v2/remotes/${e.remoteID}`,e,s)}};var y=class{constructor(e){this.base=new t(e)}getReplications(e,s){return this.base.request("GET",`/api/v2/replications${this.base.queryString(e,["orgID","name","remoteID","localBucketID"])}`,e,s)}postReplication(e,s){return this.base.request("POST",`/api/v2/replications${this.base.queryString(e,["validate"])}`,e,s,"application/json")}getReplicationByID(e,s){return this.base.request("GET",`/api/v2/replications/${e.replicationID}`,e,s)}patchReplicationByID(e,s){return this.base.request("PATCH",`/api/v2/replications/${e.replicationID}${this.base.queryString(e,["validate"])}`,e,s,"application/json")}deleteReplicationByID(e,s){return this.base.request("DELETE",`/api/v2/replications/${e.replicationID}`,e,s)}postValidateReplicationByID(e,s){return this.base.request("POST",`/api/v2/replications/${e.replicationID}/validate`,e,s)}};var $=class{constructor(e){this.base=new t(e)}getResources(e,s){return this.base.request("GET","/api/v2/resources",e,s)}};var L=class{constructor(e){this.base=new t(e)}postRestoreKV(e,s){return this.base.request("POST","/api/v2/restore/kv",e,s,"text/plain")}postRestoreSQL(e,s){return this.base.request("POST","/api/v2/restore/sql",e,s,"text/plain")}postRestoreBucketID(e,s){return this.base.request("POST",`/api/v2/restore/bucket/${e.bucketID}`,e,s,"text/plain")}postRestoreBucketMetadata(e,s){return this.base.request("POST","/api/v2/restore/bucketMetadata",e,s,"application/json")}postRestoreShardId(e,s){return this.base.request("POST",`/api/v2/restore/shards/${e.shardID}`,e,s,"text/plain")}};var w=class{constructor(e){this.base=new t(e)}getScrapers(e,s){return this.base.request("GET",`/api/v2/scrapers${this.base.queryString(e,["name","id","orgID","org"])}`,e,s)}postScrapers(e,s){return this.base.request("POST","/api/v2/scrapers",e,s,"application/json")}getScrapersID(e,s){return this.base.request("GET",`/api/v2/scrapers/${e.scraperTargetID}`,e,s)}patchScrapersID(e,s){return this.base.request("PATCH",`/api/v2/scrapers/${e.scraperTargetID}`,e,s,"application/json")}deleteScrapersID(e,s){return this.base.request("DELETE",`/api/v2/scrapers/${e.scraperTargetID}`,e,s)}getScrapersIDLabels(e,s){return this.base.request("GET",`/api/v2/scrapers/${e.scraperTargetID}/labels`,e,s)}postScrapersIDLabels(e,s){return this.base.request("POST",`/api/v2/scrapers/${e.scraperTargetID}/labels`,e,s,"application/json")}deleteScrapersIDLabelsID(e,s){return this.base.request("DELETE",`/api/v2/scrapers/${e.scraperTargetID}/labels/${e.labelID}`,e,s)}getScrapersIDMembers(e,s){return this.base.request("GET",`/api/v2/scrapers/${e.scraperTargetID}/members`,e,s)}postScrapersIDMembers(e,s){return this.base.request("POST",`/api/v2/scrapers/${e.scraperTargetID}/members`,e,s,"application/json")}deleteScrapersIDMembersID(e,s){return this.base.request("DELETE",`/api/v2/scrapers/${e.scraperTargetID}/members/${e.userID}`,e,s)}getScrapersIDOwners(e,s){return this.base.request("GET",`/api/v2/scrapers/${e.scraperTargetID}/owners`,e,s)}postScrapersIDOwners(e,s){return this.base.request("POST",`/api/v2/scrapers/${e.scraperTargetID}/owners`,e,s,"application/json")}deleteScrapersIDOwnersID(e,s){return this.base.request("DELETE",`/api/v2/scrapers/${e.scraperTargetID}/owners/${e.userID}`,e,s)}};var C=class{constructor(e){this.base=new t(e)}getScripts(e,s){return this.base.request("GET",`/api/v2/scripts${this.base.queryString(e,["limit","offset","name","labelNames","labelContains"])}`,e,s)}postScripts(e,s){return this.base.request("POST","/api/v2/scripts",e,s,"application/json")}getScriptsID(e,s){return this.base.request("GET",`/api/v2/scripts/${e.scriptID}`,e,s)}patchScriptsID(e,s){return this.base.request("PATCH",`/api/v2/scripts/${e.scriptID}`,e,s,"application/json")}deleteScriptsID(e,s){return this.base.request("DELETE",`/api/v2/scripts/${e.scriptID}`,e,s)}postScriptsIDInvoke(e,s){return this.base.request("POST",`/api/v2/scripts/${e.scriptID}/invoke`,e,s,"application/json")}patchScriptsIDAddLabels(e,s){return this.base.request("PATCH",`/api/v2/scripts/${e.scriptID}/labels/add`,e,s,"application/json")}patchScriptsIDRemoveLabels(e,s){return this.base.request("PATCH",`/api/v2/scripts/${e.scriptID}/labels/remove`,e,s,"application/json")}};var M=class{constructor(e){this.base=new t(e)}getSetup(e,s){return this.base.request("GET","/api/v2/setup",e,s)}postSetup(e,s){return this.base.request("POST","/api/v2/setup",e,s,"application/json")}};var A=class{constructor(e){this.base=new t(e)}postSignin(e,s){return this.base.request("POST","/api/v2/signin",e,s)}};var N=class{constructor(e){this.base=new t(e)}postSignout(e,s){return this.base.request("POST","/api/v2/signout",e,s)}};var j=class{constructor(e){this.base=new t(e)}getSources(e,s){return this.base.request("GET",`/api/v2/sources${this.base.queryString(e,["org"])}`,e,s)}postSources(e,s){return this.base.request("POST","/api/v2/sources",e,s,"application/json")}getSourcesID(e,s){return this.base.request("GET",`/api/v2/sources/${e.sourceID}`,e,s)}patchSourcesID(e,s){return this.base.request("PATCH",`/api/v2/sources/${e.sourceID}`,e,s,"application/json")}deleteSourcesID(e,s){return this.base.request("DELETE",`/api/v2/sources/${e.sourceID}`,e,s)}getSourcesIDHealth(e,s){return this.base.request("GET",`/api/v2/sources/${e.sourceID}/health`,e,s)}getSourcesIDBuckets(e,s){return this.base.request("GET",`/api/v2/sources/${e.sourceID}/buckets${this.base.queryString(e,["org"])}`,e,s)}};var V=class{constructor(e){this.base=new t(e)}listStacks(e,s){return this.base.request("GET",`/api/v2/stacks${this.base.queryString(e,["orgID","name","stackID"])}`,e,s)}createStack(e,s){return this.base.request("POST","/api/v2/stacks",e,s,"application/json")}readStack(e,s){return this.base.request("GET",`/api/v2/stacks/${e.stack_id}`,e,s)}updateStack(e,s){return this.base.request("PATCH",`/api/v2/stacks/${e.stack_id}`,e,s,"application/json")}deleteStack(e,s){return this.base.request("DELETE",`/api/v2/stacks/${e.stack_id}${this.base.queryString(e,["orgID"])}`,e,s)}uninstallStack(e,s){return this.base.request("POST",`/api/v2/stacks/${e.stack_id}/uninstall`,e,s)}};var U=class{constructor(e){this.base=new t(e)}getTasksIDRuns(e,s){return this.base.request("GET",`/api/v2/tasks/${e.taskID}/runs${this.base.queryString(e,["after","limit","afterTime","beforeTime"])}`,e,s)}postTasksIDRuns(e,s){return this.base.request("POST",`/api/v2/tasks/${e.taskID}/runs`,e,s,"application/json")}getTasksIDRunsID(e,s){return this.base.request("GET",`/api/v2/tasks/${e.taskID}/runs/${e.runID}`,e,s)}deleteTasksIDRunsID(e,s){return this.base.request("DELETE",`/api/v2/tasks/${e.taskID}/runs/${e.runID}`,e,s)}postTasksIDRunsIDRetry(e,s){return this.base.request("POST",`/api/v2/tasks/${e.taskID}/runs/${e.runID}/retry`,e,s,"application/json; charset=utf-8")}getTasksIDLogs(e,s){return this.base.request("GET",`/api/v2/tasks/${e.taskID}/logs`,e,s)}getTasksIDRunsIDLogs(e,s){return this.base.request("GET",`/api/v2/tasks/${e.taskID}/runs/${e.runID}/logs`,e,s)}getTasksIDLabels(e,s){return this.base.request("GET",`/api/v2/tasks/${e.taskID}/labels`,e,s)}postTasksIDLabels(e,s){return this.base.request("POST",`/api/v2/tasks/${e.taskID}/labels`,e,s,"application/json")}deleteTasksIDLabelsID(e,s){return this.base.request("DELETE",`/api/v2/tasks/${e.taskID}/labels/${e.labelID}`,e,s)}getTasksIDMembers(e,s){return this.base.request("GET",`/api/v2/tasks/${e.taskID}/members`,e,s)}postTasksIDMembers(e,s){return this.base.request("POST",`/api/v2/tasks/${e.taskID}/members`,e,s,"application/json")}deleteTasksIDMembersID(e,s){return this.base.request("DELETE",`/api/v2/tasks/${e.taskID}/members/${e.userID}`,e,s)}getTasksIDOwners(e,s){return this.base.request("GET",`/api/v2/tasks/${e.taskID}/owners`,e,s)}postTasksIDOwners(e,s){return this.base.request("POST",`/api/v2/tasks/${e.taskID}/owners`,e,s,"application/json")}deleteTasksIDOwnersID(e,s){return this.base.request("DELETE",`/api/v2/tasks/${e.taskID}/owners/${e.userID}`,e,s)}getTasks(e,s){return this.base.request("GET",`/api/v2/tasks${this.base.queryString(e,["name","after","user","org","orgID","status","limit","type"])}`,e,s)}postTasks(e,s){return this.base.request("POST","/api/v2/tasks",e,s,"application/json")}getTasksID(e,s){return this.base.request("GET",`/api/v2/tasks/${e.taskID}`,e,s)}patchTasksID(e,s){return this.base.request("PATCH",`/api/v2/tasks/${e.taskID}`,e,s,"application/json")}deleteTasksID(e,s){return this.base.request("DELETE",`/api/v2/tasks/${e.taskID}`,e,s)}};var z=class{constructor(e){this.base=new t(e)}getTelegrafPlugins(e,s){return this.base.request("GET",`/api/v2/telegraf/plugins${this.base.queryString(e,["type"])}`,e,s)}};var H=class{constructor(e){this.base=new t(e)}getTelegrafs(e,s){return this.base.request("GET",`/api/v2/telegrafs${this.base.queryString(e,["orgID"])}`,e,s)}postTelegrafs(e,s){return this.base.request("POST","/api/v2/telegrafs",e,s,"application/json")}getTelegrafsID(e,s){return this.base.request("GET",`/api/v2/telegrafs/${e.telegrafID}`,e,s)}putTelegrafsID(e,s){return this.base.request("PUT",`/api/v2/telegrafs/${e.telegrafID}`,e,s,"application/json")}deleteTelegrafsID(e,s){return this.base.request("DELETE",`/api/v2/telegrafs/${e.telegrafID}`,e,s)}getTelegrafsIDLabels(e,s){return this.base.request("GET",`/api/v2/telegrafs/${e.telegrafID}/labels`,e,s)}postTelegrafsIDLabels(e,s){return this.base.request("POST",`/api/v2/telegrafs/${e.telegrafID}/labels`,e,s,"application/json")}deleteTelegrafsIDLabelsID(e,s){return this.base.request("DELETE",`/api/v2/telegrafs/${e.telegrafID}/labels/${e.labelID}`,e,s)}getTelegrafsIDMembers(e,s){return this.base.request("GET",`/api/v2/telegrafs/${e.telegrafID}/members`,e,s)}postTelegrafsIDMembers(e,s){return this.base.request("POST",`/api/v2/telegrafs/${e.telegrafID}/members`,e,s,"application/json")}deleteTelegrafsIDMembersID(e,s){return this.base.request("DELETE",`/api/v2/telegrafs/${e.telegrafID}/members/${e.userID}`,e,s)}getTelegrafsIDOwners(e,s){return this.base.request("GET",`/api/v2/telegrafs/${e.telegrafID}/owners`,e,s)}postTelegrafsIDOwners(e,s){return this.base.request("POST",`/api/v2/telegrafs/${e.telegrafID}/owners`,e,s,"application/json")}deleteTelegrafsIDOwnersID(e,s){return this.base.request("DELETE",`/api/v2/telegrafs/${e.telegrafID}/owners/${e.userID}`,e,s)}};var Q=class{constructor(e){this.base=new t(e)}applyTemplate(e,s){return this.base.request("POST","/api/v2/templates/apply",e,s,"application/json")}exportTemplate(e,s){return this.base.request("POST","/api/v2/templates/export",e,s,"application/json")}};var F=class{constructor(e){this.base=new t(e)}postUsersIDPassword(e,s){return this.base.request("POST",`/api/v2/users/${e.userID}/password`,e,s,"application/json")}getUsers(e,s){return this.base.request("GET",`/api/v2/users${this.base.queryString(e,["offset","limit","after","name","id"])}`,e,s)}postUsers(e,s){return this.base.request("POST","/api/v2/users",e,s,"application/json")}getUsersID(e,s){return this.base.request("GET",`/api/v2/users/${e.userID}`,e,s)}patchUsersID(e,s){return this.base.request("PATCH",`/api/v2/users/${e.userID}`,e,s,"application/json")}deleteUsersID(e,s){return this.base.request("DELETE",`/api/v2/users/${e.userID}`,e,s)}};var K=class{constructor(e){this.base=new t(e)}getVariablesIDLabels(e,s){return this.base.request("GET",`/api/v2/variables/${e.variableID}/labels`,e,s)}postVariablesIDLabels(e,s){return this.base.request("POST",`/api/v2/variables/${e.variableID}/labels`,e,s,"application/json")}deleteVariablesIDLabelsID(e,s){return this.base.request("DELETE",`/api/v2/variables/${e.variableID}/labels/${e.labelID}`,e,s)}getVariables(e,s){return this.base.request("GET",`/api/v2/variables${this.base.queryString(e,["org","orgID"])}`,e,s)}postVariables(e,s){return this.base.request("POST","/api/v2/variables",e,s,"application/json")}getVariablesID(e,s){return this.base.request("GET",`/api/v2/variables/${e.variableID}`,e,s)}putVariablesID(e,s){return this.base.request("PUT",`/api/v2/variables/${e.variableID}`,e,s,"application/json")}patchVariablesID(e,s){return this.base.request("PATCH",`/api/v2/variables/${e.variableID}`,e,s,"application/json")}deleteVariablesID(e,s){return this.base.request("DELETE",`/api/v2/variables/${e.variableID}`,e,s)}};var _=class{constructor(e){this.base=new t(e)}postWrite(e,s){return this.base.request("POST",`/api/v2/write${this.base.queryString(e,["org","orgID","bucket","precision"])}`,e,s,"text/plain")}};var W=class{constructor(e,s){this.transport=e.transport,this.processCSVResponse=e.processCSVResponse,this.options={...s}}invoke(e,s){let{gzip:i,headers:o}=this.options,a=`/api/v2/scripts/${e}/invoke`,n=JSON.stringify({params:{...s}}),u={method:"POST",headers:{"content-type":"application/json; encoding=utf-8","accept-encoding":i?"gzip":"identity",...o}};return this.processCSVResponse(J=>this.transport.send(a,n,u,J),()=>this.transport.iterate(a,n,u))}};0&&(0);
//# sourceMappingURL=index.js.map

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
exports.ExAccessoryStatusDto = exports.TemperatureSensorStatusDto = exports.FootStatusDto = exports.ExAccessoryResponseExAccessory = exports.ExAccessoryRequestExAccessory = exports.ExAccessoryResponseDto = exports.ExAccessoryRequestDto = void 0;
const swagger_1 = __webpack_require__(60);
const control_type_1 = __webpack_require__(81);
const class_transformer_1 = __webpack_require__(63);
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
/* 81 */
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
    ControlCommand["getDigitalIO"] = "getDigitalIO";
    ControlCommand["setDigitalIO"] = "setDigitalIO";
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
const microservices_1 = __webpack_require__(12);
const semlog_module_1 = __webpack_require__(64);
const path_1 = __webpack_require__(45);
const proto_1 = __webpack_require__(10);
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
            url: config.get('SEMLOG_GRPC_URL'),
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