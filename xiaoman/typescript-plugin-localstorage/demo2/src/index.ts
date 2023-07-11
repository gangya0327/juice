import { Dictionaries } from './enum';
import { Key, Result, Expire, Data, StorageClass } from './types';

export class Storage implements StorageClass {
  set<T>(key: Key, value: T, expire: Expire = Dictionaries.permanent) {
    const data = {
      value: value,
      expire: expire,
    };
    localStorage.setItem(key, JSON.stringify(data));
  }
  get<T>(key: Key): Result<T> {
    const value = localStorage.getItem(key);
    if (value) {
      const data: Data<T> = JSON.parse(value);
      const now = Date.now();
      if (typeof data.expire === 'number' && data.expire > now) {
        return { message: '有效', value: data.value };
      } else {
        this.remove(key);
        return { message: key + '的值已过期', value: null };
      }
    } else {
      return { message: '值不存在', value: null };
    }
  }
  remove(key: Key) {
    localStorage.removeItem(key);
  }
}
