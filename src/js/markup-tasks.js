export function addItem(item) {
  const list = document.querySelector('.tasks-list');
  const html = `
  <li class="task-list-item">
      <button class="task-list-item-btn" data-id="${item.id}">Delete</button>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
  </li>
  `;

  list.insertAdjacentHTML('afterbegin', html);
}
