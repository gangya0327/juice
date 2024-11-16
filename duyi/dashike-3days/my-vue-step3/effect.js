import { TrackOpTypes } from './operations.js';

// 依赖收集
export function track(target, type, key) {
  if (type === TrackOpTypes.ITERATE) {
    console.log(`%c依赖收集：【${type}】`, 'color: #f00');
    return;
  }
  console.log(`%c依赖收集：【${type}】-> ${key}`, 'color: #f00');
}

// 派发更新
export function trigger(target, type, key) {
  console.log(`%c派发更新：【${type}】-> ${key}`, 'color: #00f');
}
