export default (links) => {
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const section = document.querySelector(event.target.hash);
      window.scrollTo({
        top: section?.getBoundingClientRect().top,
        behavior: 'smooth'
      });
    })
  })
}