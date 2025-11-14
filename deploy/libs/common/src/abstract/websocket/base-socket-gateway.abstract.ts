import { ConnectedSocket, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

export abstract class BaseSocketGatewayAbstract implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  private _allowedSystem: string[];
  private _connectionType: string;

  abstract afterInit(server: Server): void;
  abstract handleDisconnect(socket: Socket): void;

  protected get allowedSystem(): string[] {
    return this._allowedSystem;
  }

  protected set allowedSystem(value: string[]) {
    this._allowedSystem = value;
  }

  protected get connectionType(): string {
    return this._connectionType;
  }

  protected set connectionType(value: string) {
    this._connectionType = value;
  }

  async handleConnection(@ConnectedSocket() socket: Socket) {
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

  protected onConnectionSuccess(socket: Socket, system: string): void {
    console.log(`${this.connectionType} connected : ${socket.id} (system: ${system})`);
  }
}
