export declare enum GoalState {
    none = "none",
    move = "move",
    complete = "complete",
    fail = "fail",
    obstacle = "obstacle",
    cancel = "cancel"
}
export declare enum MoveState {
    move = "move",
    error = "error",
    pause = "pause",
    stop = "stop",
    notReady = "not ready",
    vir = "vir"
}
export declare enum ObsState {
    none = "none",
    far = "far",
    near = "near",
    vir = "vir"
}
export declare enum PathState {
    none = "none",
    reqPath = "req_path",
    recevPath = "recv_path"
}
export declare enum MapState {
    none = "none",
    loading = "loading",
    loaded = "loaded"
}
export declare enum LocalizationState {
    none = "none",
    good = "good",
    fail = "fail"
}
export declare enum ChargeState {
    none = "none",
    ready = "ready",
    battery_on = "battery_on",
    charging = "charging",
    finish = "finish",
    fail = "fail"
}
