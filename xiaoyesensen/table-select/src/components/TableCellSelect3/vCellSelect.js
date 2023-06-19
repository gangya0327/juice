function mounted(el) {
  el.targetNodes = new Set([]);
  bindEvent(el);
}

// 添加绑定事件
function bindEvent(el) {
  el.addEventListener('mousedown', handleMouseDown);
}

function handleMouseDown(e) {
  const el = this;
  clearTargetNode(el);
  const target = e.target;
  const tagName = target.tagName.toLowerCase();
  if (tagName === 'td') {
    el.startTarget = e.target;
    addTargetNode(el, target);
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseup', handleMouseUp);
  }
}

function handleMouseMove(e) {
  const el = this;
  clearTargetNode(el);
  const x1 = el.startTarget.parentNode.dataset.weekday;
  const y1 = el.startTarget.dataset.time;
  const x2 = e.target.parentNode.dataset.weekday;
  const y2 = e.target.dataset.time;
  getTargetNodes(el, x1, y1, x2, y2);
}

function handleMouseUp() {
  const el = this;
  el.removeEventListener('mousemove', handleMouseMove);
  el.removeEventListener('mouseup', handleMouseUp);
}

// 获取起始点到结束点范围内的所有点
function getTargetNodes(el, x1, y1, x2, y2) {
  const startR = Math.min(x1, x2);
  const startC = Math.min(y1, y2);
  const endR = Math.max(x1, x2);
  const endC = Math.max(y1, y2);
  const currentNodes = [];
  el.querySelectorAll('th.weekday-title').forEach((th, trIndex) => {
    currentNodes[trIndex] = new Set([]);
    const tr = th.parentNode;
    tr.querySelectorAll('td').forEach((td, tdIndex) => {
      if (startR <= trIndex && trIndex <= endR && startC <= tdIndex && tdIndex <= endC) {
        if (currentNodes[trIndex]) {
          currentNodes[trIndex].add(tdIndex);
        } else {
          currentNodes[trIndex] = new Set([tdIndex]);
        }
        addTargetNode(el, td);
      }
    });
  });
  el.currentNodes = currentNodes;
}

// 添加选中状态
function addTargetNode(el, target) {
  el.targetNodes.add(target);
  target.classList.add('selected');
}

// 清除选中状态
function clearTargetNode(el) {
  el.targetNodes.forEach((target) => {
    target.classList.remove('selected');
  });
  el.targetNodes = new Set([]);
}

export default { mounted };
