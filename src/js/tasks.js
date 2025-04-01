import { getFromLocalStorage } from '/js/local-storage-api';
import { addItem } from '/js/markup-tasks';
import { refs } from '/js/refs';

const { titleInput, descriptionInput } = refs();

export function boxCreate(event) {
  event.preventDefault();
  const savedCards = getFromLocalStorage('cards');

  if (savedCards && savedCards.length) {
    const maxIdObject = savedCards.reduce(
      (max, item) => (item.id > max.id ? item : max),
      savedCards[0]
    );

    const maxId = maxIdObject.id;

    const info = {
      id: maxId + 1,
      title: titleInput.value,
      description: descriptionInput.value,
    };

    savedCards.push(info);

    localStorage.setItem('cards', JSON.stringify(savedCards));
    addItem(info);
  } else {
    const cards = [];

    const info = {
      id: 0,
      title: titleInput.value,
      description: descriptionInput.value,
    };

    cards.push(info);

    localStorage.setItem('cards', JSON.stringify(cards));
    addItem(info);
  }

  titleInput.value = '';
  descriptionInput.value = '';
}
