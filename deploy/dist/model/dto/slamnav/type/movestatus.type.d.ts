export declare class MoveStateDto {
    auto_move: string;
    dock_move: string;
    jog_move: string;
    obs: string;
    path: string;
}
export declare class PoseStatusDto {
    x: string;
    y: string;
    rz: string;
}
export declare class VelocityStatusDto {
    vx: string;
    vy: string;
    wz: string;
}
export declare class GoalNodeDto {
    id: string;
    name: string;
    state: string;
    x: string;
    y: string;
    rz: string;
}
export declare class CurNodeDto {
    id: string;
    name: string;
    x: string;
    y: string;
    rz: string;
}
export declare class MoveStatusSlamnav {
    move_state: MoveStateDto;
    pose: PoseStatusDto;
    vel: VelocityStatusDto;
    goal_node: GoalNodeDto;
    cur_node: CurNodeDto;
    time?: string;
}
