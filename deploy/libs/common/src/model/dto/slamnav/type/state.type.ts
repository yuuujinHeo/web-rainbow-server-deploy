export enum GoalState {
  none = 'none',
  move = 'move',
  complete = 'complete',
  fail = 'fail',
  obstacle = 'obstacle',
  cancel = 'cancel',
}

export enum MoveState {
  move = 'move',
  error = 'error',
  pause = 'pause',
  stop = 'stop',
  notReady = 'not ready',
  vir = 'vir',
}
export enum ObsState {
  none = 'none',
  far = 'far',
  near = 'near',
  vir = 'vir',
}
export enum PathState {
  none = 'none',
  reqPath = 'req_path',
  recevPath = 'recv_path',
}

export enum MapState {
  none = 'none',
  loading = 'loading',
  loaded = 'loaded',
}

export enum LocalizationState {
  none = 'none',
  good = 'good',
  fail = 'fail',
}

export enum ChargeState {
  none = 'none',
  ready = 'ready',
  battery_on = 'battery_on',
  charging = 'charging',
  finish = 'finish',
  fail = 'fail',
}
