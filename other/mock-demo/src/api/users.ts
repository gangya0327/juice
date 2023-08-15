import { useAxios } from '.';
import { Response } from '.';

interface UserResponse {
  readonly id: number;
  name: string;
  age: number;
  address: string;
}

export function getUsersApi(): Promise<Response<UserResponse>> {
  return useAxios.get('users');
}
