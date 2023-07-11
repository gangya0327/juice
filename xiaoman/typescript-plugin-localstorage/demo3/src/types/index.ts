import { Dictionaries } from '../enum';

export type Key = string;
export type Expire = Dictionaries.permanent | number; // 永久或时间戳

export interface Data<T> {
  value: T;
  [Dictionaries.expire]: Expire;
}

export interface Result<T> {
  message: string;
  value: T | null;
}

export interface StorageClass {
  set: <T>(key: Key, value: T, expire: Expire) => void;
  get: <T>(key: Key) => Result<T | null>;
  remove: (key: Key) => void;
  clear: () => void;
}
