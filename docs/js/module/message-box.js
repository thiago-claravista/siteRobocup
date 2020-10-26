export default (message, type = 'error') => {
  const container = document.querySelector('.errors-container');
  const messageBox = document.createElement('div');
  messageBox.classList.add('message-item',
    (type === 'error' ? 'error-message' : 'success-message'));
  messageBox.textContent = message;

  setTimeout(() => {
    messageBox.classList.add('hide');
    messageBox.addEventListener('animationend', () => messageBox.remove());
  }, 4000);
  container.appendChild(messageBox);
}
