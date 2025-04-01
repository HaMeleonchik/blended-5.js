/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/

import { ThemeChange, setThemeFromLocalStorage } from './js/theme-switcher.js';
import { refs } from './js/refs.js';
import { destroyButton, populationDataBlock } from './js/render-tasks.js';
import { boxCreate } from './js/tasks.js';
// refs
const { form, list } = refs();

// add

form.addEventListener('submit', boxCreate);

populationDataBlock();
setThemeFromLocalStorage();

// delete
list.addEventListener('click', destroyButton);

// // Change Theme
const changeBtn = document.querySelector('.theme-toggle-button');
changeBtn.addEventListener('click', ThemeChange);
