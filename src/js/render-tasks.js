import { getFromLocalStorage } from '/js/local-storage-api';
import { addItem } from '/js/markup-tasks.js';
// delete

export function destroyButton(event) {
  if (event.target.classList.contains('task-list-item-btn')) {
    // removeFromLocaleStorage
    const idToRemove = event.target.getAttribute('data-id');
    const savedCards = getFromLocalStorage('cards');
    const updatedCards = savedCards.filter(item => item.id != idToRemove);
    localStorage.setItem('cards', JSON.stringify(updatedCards));
    // removeFromHtml
    const listItem = event.target.closest('.task-list-item');
    listItem.remove();
  }
}
// addCards

export function populationDataBlock() {
  const savedCards = getFromLocalStorage('cards');
  if (savedCards) {
    for (let i = 0; i < savedCards.length; i++) {
      addItem(savedCards[i]);
    }
  }
}
