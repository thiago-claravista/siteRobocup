export default () => {
  const carousel = document.querySelector('.images');
  carousel.addEventListener('wheel', scrollCarousel);

  const miniatures = document.querySelectorAll('.miniature');
  miniatures.forEach((min) => min.addEventListener('click', scrollCarousel));

  const buttons = document.querySelectorAll('.next, .back');
  buttons.forEach((btn) => btn.addEventListener('click', scrollCarousel));

  function scrollCarousel(event) {
    event.preventDefault();
    const { deltaY, target: { className, dataset } } = event;
    const index = +dataset.index;
    const multiplier = deltaY > 0 || className === 'next' ? 1 : -1;
    carousel[isNaN(index) ? 'scrollBy' : 'scrollTo']({
      left: carousel.clientWidth * (isNaN(index) ? multiplier : index),
      behavior: 'smooth'
    });
  }
}
