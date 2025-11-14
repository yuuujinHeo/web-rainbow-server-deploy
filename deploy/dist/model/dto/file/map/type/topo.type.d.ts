export declare enum NodeType {
    route = "ROUTE",
    goal = "GOAL",
    init = "INIT"
}
export declare class PoseDto {
    x: number;
    y: number;
    z: number;
    rx: number;
    ry: number;
    rz: number;
}
export declare class NodeDto {
    id: string;
    name: string;
    pose: PoseDto;
    info: string;
    links: string[];
    type: string;
}
