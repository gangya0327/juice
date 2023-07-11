import { StorageClass, Key, Expire, Data, Result } from './types';
import { Dictionaries } from './enum';

export class Storage implements StorageClass {
  set<T>(key: Key, value: T, expire: Expire = Dictionaries.permanent) {
    const data = {
      value,
      [Dictionaries.expire]: expire,
    };
    localStorage.setItem(key, JSON.stringify(data));
  }
  get<T>(key: Key): Result<T | null> {
    const value = localStorage.getItem(key);
    if (value) {
      const data: Data<T> = JSON.parse(value);
      const now = new Date().getTime();
      if (typeof data[Dictionaries.expire] === 'number' && data[Dictionaries.expire] > now) {
        return { message: '值存在', value: data.value };
      } else {
        this.remove(key);
        return { message: '值已过期', value: null };
      }
    } else {
      return { message: '值不存在', value: null };
    }
  }
  remove(key: Key) {
    localStorage.removeItem(key);
  }
  clear() {
    localStorage.clear();
  }
}
