import { Rejecter, Resolver } from '@app/common/constant';
export declare class PendingResponseUtil<T = unknown> {
    pendingResponses: Map<string, {
        resolve: Resolver<T>;
        reject: Rejecter;
        received: T[];
    }>;
}
