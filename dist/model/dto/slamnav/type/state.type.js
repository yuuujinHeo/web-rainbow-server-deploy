"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
