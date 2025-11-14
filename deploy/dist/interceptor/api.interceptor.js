"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APILogInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const logger_1 = require("../logger");
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
            this.loggerService.debug(`[${method}] ${url} (${ip}) : ${JSON.stringify(body)}`);
        }
        else {
            this.loggerService.debug(`[${method}] ${url} (${ip})`);
        }
        return next.handle().pipe((0, rxjs_1.tap)((data) => {
            const responseTimestamp = new Date();
            const responseTime = `${+responseTimestamp - +requestTimestamp}ms`;
            if (data) {
                this.loggerService.debug(`[${method} RESPONSE] ${url} (${ip}) : ${JSON.stringify(data)} -> ${responseTime}`);
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
