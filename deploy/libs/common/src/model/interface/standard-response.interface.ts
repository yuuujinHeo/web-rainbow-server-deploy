/**
 * ┌─────────────────────────────────────────────────┐
 * │  Project: web-rainbow-server
 * │  File: standard-response.interface.ts
 * │  Developer: kjlee
 * │  Created: 25. 9. 9.
 * │  Description: standard-response.interface 모듈
 * └─────────────────────────────────────────────────┘
 */

export interface StandardResponse<T = any> {
  data: T;
  message: string;
  status: number;
  timestamp: string;
}

export interface StandardErrorResponse {
  data: null;
  message: string;
  status: number;
  error?: string;
  timestamp: string;
}
