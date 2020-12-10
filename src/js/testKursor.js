// let draggedEl = null;
// let ghostEl = null;
// const itemsEl = document.querySelector('.items');
// itemsEl.addEventListener('mousedown', (evt) => {
//   evt.preventDefault();
//   console.log(evt);
//   if (!evt.target.classList.contains('items-item')) {
//     return;
//   }
//   console.log(evt.target);
//   draggedEl = evt.target;
//   console.log(draggedEl);
//   ghostEl = evt.target.cloneNode(true);
//   ghostEl.classList.add('dragged');
//   console.log(ghostEl);
//   document.body.appendChild(ghostEl);
//   ghostEl.style.left = `${evt.pageX - ghostEl.offsetWidth / 2}px`;
//   ghostEl.style.top = `${evt.pageY - ghostEl.offsetHeight / 2}px`;
//   console.log('vsyali')
// });

// itemsEl.addEventListener('mousemove', (evt) => {
//   evt.preventDefault(); // не даём выделять элементы
//   if (!draggedEl) {
//     return;
//   }
//   ghostEl.style.left = `${evt.pageX - ghostEl.offsetWidth / 2}px`;
//   ghostEl.style.top = `${evt.pageY - ghostEl.offsetHeight / 2}px`;
//   console.log('taskaem')
// });

// itemsEl.addEventListener('mouseleave', (evt) => {
//   // при уходе курсора за границы контейнера - отменяем перенос
//   if (!draggedEl) {
//     return;
//   }
//   document.body.removeChild(ghostEl);
//   ghostEl = null;
//   draggedEl = null;
// });

// itemsEl.addEventListener('mouseup', (evt) => {
//   if (!draggedEl) {
//     return;
//   }
//   const closest = document.elementFromPoint(evt.clientX, evt.clientY);
//   evt.currentTarget.insertBefore(draggedEl, closest);
//   document.body.removeChild(ghostEl);
//   ghostEl = null;
//   draggedEl = null;
// });