(function () {
  var list = document.querySelector('.list');
  // 克隆列表第一项，到末尾
  function cloneFirstItem() {
    var firstItem = list.children[0];
    console.log(firstItem);
    var newItem = firstItem.cloneNode(true);
    list.appendChild(newItem);
  }
  cloneFirstItem();

  // 每隔一段时间，滚动到下一行
  var duration = 2000;
  var itemHeight = 30;
  var curIndex = 0;

  setInterval(moveNext, duration);

  function moveNext() {
    console.log('list.scrollTop', list.scrollTop);

    var from = itemHeight * curIndex; // 开始滚动位置
    curIndex++;
    var to = itemHeight * curIndex; // 结束滚动位置
    var totalDuration = 600; // 总时长
    var duration = 15; //单次变化的间隔时间
    var times = totalDuration / duration; // 变化的次数
    var distance = (to - from) / times; // 每次变化的距离
    var timerId = setInterval(() => {
      from += distance;
      list.scrollTop = from;
      if (from >= to) {
        clearInterval(timerId);
      }
    }, duration);

    if (curIndex >= list.children.length - 1) {
      curIndex = 0;
    }
  }
})();
