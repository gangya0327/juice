import { reactive } from 'vue';

function mounted(el, bindings) {
  console.log(el, bindings);
  bindEvent(el);
  el.allRows = getAllRows(el);
  el.targetNodes = new Set();
  el.weekdayTimeData = bindings.value;
}

function bindEvent(el) {
  el.addEventListener('mousedown', handleMouseDown, false);
}

function handleMouseDown(e) {
  const target = e.target;
  const targetName = target.tagName.toLowerCase();

  const el = this;
  clearTargetNodes(el);

  if (targetName === 'td') {
    el.start = target;

    const rowIndex = Number(el.start.parentNode.dataset.weekday);
    const columnIndex = Number(el.start.dataset.time);

    addTargetNode(el, target);
    setWeekdayTimeData(el, rowIndex, columnIndex);
    console.log(el.weekdayTimeData);

    el.addEventListener('mousemove', handleMouseMove, false);
    el.addEventListener('mouseup', handleMouseUp, false);
  }
}

function handleMouseMove(e) {
  const target = e.target;
  const tagName = target.tagName.toLowerCase();
  if (tagName === 'td') {
    const el = this;
    const startTarget = el.start; // 起始点
    const endTarget = target; // 结束点
    const startRow = startTarget.parentNode.dataset.weekday;
    const startColumn = startTarget.dataset.time;
    const endRow = endTarget.parentNode.dataset.weekday;
    const endColumn = endTarget.dataset.time;

    const currentTargetNodes = getTargetNodes(el, startRow, startColumn, endRow, endColumn);

    getTargetNodeDiff(el, el.targetNodes, currentTargetNodes);
  }
}

function handleMouseUp() {
  const el = this;
  el.removeEventListener('mousemove', handleMouseMove, false);
  el.removeEventListener('mouseup', handleMouseUp, false);
}

// 获取选择范围的所有点
function getTargetNodes(el, startRow, startColumn, endRow, endColumn) {
  const allRows = el.allRows;

  const startR = startRow > endRow ? endRow : startRow;
  const startC = startColumn > endColumn ? endColumn : startColumn;
  const endR = startRow > endRow ? startRow : endRow;
  const endC = startColumn > endColumn ? startColumn : endColumn;

  const targetNodes = new Set();

  allRows.forEach((tr, rowIndex) => {
    if (rowIndex >= startR && rowIndex <= endR) {
      [...tr.querySelectorAll('td')].forEach((td, columnIndex) => {
        if (columnIndex >= startC && columnIndex <= endC) {
          targetNodes.add(td);
          setWeekdayTimeData(el, rowIndex, columnIndex);
          console.log(el.weekdayTimeData);
        }
      });
    }
  });
  return targetNodes;
}

function setWeekdayTimeData(el, weekday, time) {
  el.weekdayTimeData[weekday] ? el.weekdayTimeData[weekday].add(time) : (el.weekdayTimeData[weekday] = new Set([time]));
}

// 获取所有的行
function getAllRows(el) {
  const oAllRows = el.querySelectorAll('tr');
  return [...oAllRows].reduce((prev, tr) => {
    if (tr.dataset.weekday) {
      prev.push(tr);
    }
    return prev;
  }, []);
}

function getTargetNodeDiff(el, targetNodes, currentTargetNodes) {
  currentTargetNodes.forEach((td) => {
    !targetNodes.has(td) && addTargetNode(el, td);
  });
  targetNodes.forEach((td) => {
    !currentTargetNodes.has(td) && removeTargetNode(el, td);
  });
}

function addTargetNode(el, target) {
  el.targetNodes.add(target);
  target.classList.add('target');
}

function removeTargetNode(el, target) {
  el.targetNodes.delete(target);
  target.classList.remove('target');
}

function clearTargetNodes(el) {
  el.targetNodes.forEach((target) => {
    target.classList.remove('target');
  });
  el.targetNodes = new Set();
  el.weekdayTimeData = reactive([]);
}

export default { mounted };
