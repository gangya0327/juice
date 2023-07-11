import { Dictionaries } from '../enum';

export type Key = string;
export type Expire = Dictionaries.permanent | number;

export interface Result<T> {
  message: string;
  value: T | null;
}

export interface Data<T> {
  value: T;
  expire: Expire;
}

export interface StorageClass {
  get: (key: Key) => void;
  set: <T>(key: Key, value: T, expire: Expire) => void;
  remove: (key: Key) => void;
}
