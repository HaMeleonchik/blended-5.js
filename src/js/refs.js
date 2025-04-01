export function refs() {
  const form = document.querySelector('.header-form');
  const titleInput = form?.querySelector('input[name=taskName]');
  const descriptionInput = form?.querySelector('input[name=taskDescription]');
  const list = document.querySelector('.tasks-list');
  return { form, titleInput, descriptionInput, list };
}
