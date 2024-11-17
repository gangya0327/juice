import { TrackOpTypes } from './operations.js';

let shouldTrack = true;
export function pauseTracking() {
  shouldTrack = false;
}

export function resumeTracking() {
  shouldTrack = true;
}

// 依赖收集
export function track(target, type, key) {
  if (!shouldTrack) {
    return;
  }
  if (type === TrackOpTypes.ITERATE) {
    console.log(`%c依赖收集：【${type}】`, 'color: #f00');
    return;
  }
  console.log(`%c依赖收集：【${type}】`, 'color: #f00', key);
}

// 派发更新
export function trigger(target, type, key) {
  console.log(`%c派发更新：【${type}】`, 'color: #00f', key);
}
