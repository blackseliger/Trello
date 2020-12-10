const windowNewCard = [...document.querySelectorAll('.add-card')];
const formInputNewCard = [...document.querySelectorAll('.form-input')];
const columns = document.querySelector('.columns');

console.log(columns);

windowNewCard.forEach((element) => {
  element.addEventListener('click', (e) => {
    const btnElement = e.currentTarget;
    if (btnElement.classList.contains('add-card-hidden') === false) {
      btnElement.classList.add('add-card-hidden');
      const formInput = btnElement.closest('.column-option-add-card').querySelector('.form-input');
      formInput.classList.remove('form-input-hidden');
    }
  });
});

formInputNewCard.forEach((element) => {
  element.addEventListener('submit', (e) => {
    e.preventDefault();
    const { target } = e;
    const fieldInputForm = target.querySelector('.field');
    if (fieldInputForm !== '') {
      const columnOptionAddCard = element.closest('.column-option-add-card');
      const addCard = columnOptionAddCard.querySelector('.add-card');
      columnOptionAddCard.insertAdjacentHTML('beforebegin', `<div class="column-card">
            <div class="column-card-info">
                ${fieldInputForm.value}
            </div>
            <div class="column-card-options">
                like, ???
            </div>
        </div>`);
      element.classList.add('form-input-hidden');
      addCard.classList.remove('add-card-hidden');
      element.reset();
    } return null;
  });
});

let draggedEl = null;
let ghostEl = null;

columns.addEventListener('mousedown', (e) => {
  e.preventDefault();
  if (!e.target.classList.contains('cardDnD') || !!e.target.classList.contains('column-card')) {
    return;
  }
  const needEl = e.target.closest('.column-card');
  draggedEl = needEl;
  ghostEl = needEl.cloneNode(true);
  ghostEl.classList.add('dragged');
  document.body.appendChild(ghostEl);
  ghostEl.style.left = `${e.pageX - ghostEl.offsetWidth / 2}px}`;
  ghostEl.style.top = `${e.pageY - ghostEl.offsetHeight / 2}px`;
});

columns.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if (!draggedEl) {
    return;
  }
  ghostEl.style.left = `${e.pageX - ghostEl.offsetWidth / 2}px`;
  ghostEl.style.top = `${e.pageY - ghostEl.offsetHeight / 2}px`;
});

columns.addEventListener('mouseleave', (e) => {
  if (!draggedEl) {
    return;
  }
  document.body.removeChild(ghostEl);
  ghostEl = null;
  draggedEl = null;
});

columns.addEventListener('mouseup', (e) => {
  if (!draggedEl) {
    return;
  }
  const element = document.elementFromPoint(e.clientX, e.clientY);
  console.log(`${element} + 10`);
  if (element.closest('.column-card')){
    console.log('work?')
    e.currentTarget.insertBefore(draggedEl, element);
    console.log(e.currentTarget);
    document.body.removeChild(ghostEl);
    ghostEl = null;
    draggedEl = null;  
  }
});
