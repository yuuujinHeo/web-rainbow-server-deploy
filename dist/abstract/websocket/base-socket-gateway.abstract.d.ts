import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
export declare abstract class BaseSocketGatewayAbstract implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    private _allowedSystem;
    private _connectionType;
    abstract afterInit(server: Server): void;
    abstract handleDisconnect(socket: Socket): void;
    protected get allowedSystem(): string[];
    protected set allowedSystem(value: string[]);
    protected get connectionType(): string;
    protected set connectionType(value: string);
    handleConnection(socket: Socket): Promise<void>;
    protected onConnectionSuccess(socket: Socket, system: string): void;
}
