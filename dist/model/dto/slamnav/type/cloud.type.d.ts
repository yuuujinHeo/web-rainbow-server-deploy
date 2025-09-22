import { PoseStatusDto } from './movestatus.type';
export declare class CloudDto {
    x: string;
    y: string;
    z: string;
    intensity?: string;
}
export declare class LidarCloudDto {
    data: Array<Array<string>>;
    pose: PoseStatusDto;
    time?: string;
}
export declare class MappingCloudDto {
    data: Array<CloudDto>;
    time: string;
}
