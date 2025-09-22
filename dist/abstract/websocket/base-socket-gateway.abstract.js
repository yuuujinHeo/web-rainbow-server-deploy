"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSocketGatewayAbstract = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
class BaseSocketGatewayAbstract {
    get allowedSystem() {
        return this._allowedSystem;
    }
    set allowedSystem(value) {
        this._allowedSystem = value;
    }
    get connectionType() {
        return this._connectionType;
    }
    set connectionType(value) {
        this._connectionType = value;
    }
    async handleConnection(socket) {
        const system = socket.handshake.query.system;
        if (!system) {
            socket.emit('error', { message: '연결시도한 시스템 타입은 필수입니다.' });
            socket.disconnect();
            return;
        }
        if (typeof system !== 'string') {
            socket.emit('error', { message: 'system must be string' });
            socket.disconnect();
            return;
        }
        console.log('>> this.allowedSystem : ', this.allowedSystem);
        if (!this.allowedSystem.includes(system)) {
            console.log('>> not allowed system : ', system);
            socket.disconnect();
            return;
        }
        this.onConnectionSuccess(socket, system);
    }
    onConnectionSuccess(socket, system) {
        console.log(`${this.connectionType} connected : ${socket.id} (system: ${system})`);
    }
}
exports.BaseSocketGatewayAbstract = BaseSocketGatewayAbstract;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], BaseSocketGatewayAbstract.prototype, "server", void 0);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], BaseSocketGatewayAbstract.prototype, "handleConnection", null);
