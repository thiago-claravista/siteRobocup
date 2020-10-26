import imageSlider from './module/image-slider.js';
import validationForm from './module/validation-form.js';
import smoothLink from './module/smooth-link.js';

imageSlider();
validationForm('contact-us');
smoothLink(document.querySelectorAll('[data-link]'));

const modal = document.querySelector('.about-robot');

const closeModal = ({ target }) => {
  const closeButton = target.classList.contains('close-modal');
  if (target === modal || closeButton) {
    modal.classList.remove('active');
    modal.removeEventListener('click', closeModal);
  }
}

const characters = document.querySelectorAll('[data-character]');
characters.forEach(character => {
  character.addEventListener('click', async ({ target }) => {
    const dataset = target.dataset.character;
    const text = await (await fetch(`../txt/${dataset}.txt`)).text();
    const container = modal.querySelector('.content-modal');
    container.innerHTML = '<p>' + text.split('\n').join('<p>');
    modal.classList.add('active');
    modal.addEventListener('click', closeModal);
  });
});