import { track, trigger } from './effect.js';
import { TrackOpTypes, TriggerOpTypes } from './operations.js';
import { reactive } from './reactive.js';
import { hasChanged, isObject } from './utils.js';

function get(target, key, receiver) {
  // 依赖收集
  track(target, TrackOpTypes.GET, key);
  const result = Reflect.get(target, key, receiver);
  if (isObject(result)) {
    return reactive(result);
  }
  return result; // 返回对象的相应属性值
}

function set(target, key, value, receiver) {
  const type = target.hasOwnProperty(key) ? TriggerOpTypes.SET : TriggerOpTypes.ADD;
  const oldValue = target[key];
  const result = Reflect.set(target, key, value, receiver);
  if (!result) {
    return;
  }
  // 派发更新
  if (hasChanged(oldValue, value) || type === TriggerOpTypes.ADD) {
    trigger(target, type, key);
  }
  return result; // 设置对象的相应属性值
}

function has(target, key) {
  track(target, TrackOpTypes.HAS, key);
  return Reflect.has(target, key); // 判断对象中是否有相应属性
}

function ownKeys(target) {
  track(target, TrackOpTypes.ITERATE);
  return Reflect.ownKeys(target); // 返回对象自身可枚举的属性
}

function deleteProperty(target, key) {
  const hasKey = target.hasOwnProperty(key); // 判断对象中是否有相应属性
  const result = Reflect.deleteProperty(target, key);
  if (hasKey && result) {
    trigger(target, TriggerOpTypes.DELETE, key);
  }
  return result;
}

export const handlers = { get, set, has, ownKeys, deleteProperty };
