export default (links) => {
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const section = document.querySelector(event.target.hash);
      window.scroll({
        top: section?.offsetTop,
        behavior: 'smooth'
      });
    })
  })
}