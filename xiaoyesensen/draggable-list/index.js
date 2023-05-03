const listData = [1111111, 2222222, 3333333, 4444444];

(() => {
  console.log('ok');
  const oWrap = document.querySelector('.draggable-list-wrap');
  const init = () => {
    render();
    bindEvent();
  };

  function render() {
    const oList = createList();
    oWrap?.appendChild(oList);
  }
  function bindEvent() {
    const oDraggableList = oWrap?.querySelector('.draggable-list');
    const oDraggableItems = oDraggableList?.querySelectorAll('.draggable-item');

    oDraggableList?.addEventListener('dragover', handleDragOver, false);
    window?.addEventListener('dragover', (e) => e.preventDefault(), false);

    // oDraggableList?.addEventListener('dragenter', (e) => e.preventDefault(), false);
    window?.addEventListener('dragenter', (e) => e.preventDefault(), false);

    oDraggableItems?.forEach((item) => {
      item.addEventListener('dragstart', handleDragStart, false);
      item.addEventListener('dragend', handleDragEnd, false);
    });
  }

  function handleDragStart() {
    const item = this;
    setTimeout(() => {
      item.classList.add('dragging');
    }, 0);
  }
  function handleDragEnd() {
    const item = this;
    item.classList.remove('dragging');
  }

  function handleDragOver(e) {
    e.preventDefault();

    const oDraggableList = this;
    const oDraggingItem = oDraggableList.querySelector('.dragging');
    const oSibItems = oDraggableList.querySelectorAll('.draggable-item:not(.dragging)');
    const oSibItem = [...oSibItems].find((item) => e.clientY <= item.offsetTop + item.offsetHeight / 2);

    oDraggableList.insertBefore(oDraggingItem, oSibItem);
  }

  function createList() {
    const oDraggableList = document.createElement('ul');
    oDraggableList.className = 'draggable-list';

    listData.forEach((item) => {
      const oItem = document.createElement('li');
      oItem.className = 'draggable-item';
      oItem.draggable = true;
      oItem.innerHTML = `<p>${item}</p>`;
      oDraggableList.appendChild(oItem);
    });

    return oDraggableList;
  }

  init();
})();
