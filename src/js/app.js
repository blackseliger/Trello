const windowNewCard = document.querySelector('.add-card');
const formInputNewCard = document.querySelector('.form-input');
const fieldInput = document.querySelector('.field');
const columnOptionAddCard = document.querySelector('.column-option-add-card');

windowNewCard.addEventListener('click', (e) => {
  const element = e.currentTarget;
  if (element.classList.contains('add-card-hidden') === false) {
    element.classList.add('add-card-hidden');
    formInputNewCard.classList.remove('form-input-hidden');
  }
});

formInputNewCard.addEventListener('submit', (e) => {
  e.preventDefault();
  if (fieldInput !== '') {
    columnOptionAddCard.insertAdjacentHTML('beforebegin', `                    <div class="column-card">
    <div class="column-card-info">
        ${fieldInput.value}
    </div>
    <div class="column-card-options">
        like, ???
    </div>
</div>`);
    formInputNewCard.classList.add('form-input-hidden');
    windowNewCard.classList.remove('add-card-hidden');
    formInputNewCard.reset()
  } return null;
});
