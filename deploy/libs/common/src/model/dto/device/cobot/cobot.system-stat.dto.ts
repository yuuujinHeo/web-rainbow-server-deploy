export interface SystemStat {
  header: string; // 4 chars
  time: number;

  jnt_ref: number[]; // 6
  jnt_ang: number[]; // 6
  jnt_cur: number[]; // 6

  tcp_ref: number[]; // 6
  tcp_pos: number[]; // 6

  analog_in: number[]; // 4 (float)
  analog_out: number[]; // 4 (float)
  digital_in: number[]; // 16 (int32)
  digital_out: number[]; // 16 (int32)

  jnt_temperature: number[]; // 6 (float)

  task_pc: number;
  task_repeat: number;
  task_run_id: number;
  task_run_num: number;
  task_run_time: number;
  task_state: number;

  default_speed: number; // float
  robot_state: number; // int32
  information_chunk_1: number;

  reserved_1: number[]; // 6 (float)
  jnt_info: number[]; // 6 (int32)

  collision_detect_onoff: number;
  is_freedrive_mode: number;
  real_vs_simulation_mode: number;

  init_state_info: number;
  init_error: number;

  tfb_analog_in: number[]; // 2 (float)
  tfb_digital_in: number[]; // 2 (int32)
  tfb_digital_out: number[]; // 2 (int32)
  tfb_voltage_out: number; // float

  op_stat_collision_occur: number;
  op_stat_sos_flag: number;
  op_stat_self_collision: number;
  op_stat_soft_estop_occur: number;
  op_stat_ems_flag: number;

  information_chunk_2: number;
  information_chunk_3: number;

  inbox_trap_flag: number[]; // 2 (int32)
  inbox_check_mode: number[]; // 2 (int32)

  eft_fx: number;
  eft_fy: number;
  eft_fz: number;
  eft_mx: number;
  eft_my: number;
  eft_mz: number;

  information_chunk_4: number;

  extend_io1_analog_in: number[]; // 4 (float)
  extend_io1_analog_out: number[]; // 4 (float)
  extend_io1_digital_info: number; // uint32

  aa_joint_ref: number[]; // 6 (float)

  safety_board_stat_info: number; // uint32
}
