export interface ActionResponse<T = unknown> {
  isSuccess: boolean;
  isServerError?: boolean;
  errors?: T;
}
