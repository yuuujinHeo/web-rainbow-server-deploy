export type Resolver<T = unknown> = (response: T) => void;
export type Rejecter = (reason?: any) => void;
