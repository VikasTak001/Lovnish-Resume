const body = document.querySelector('body');
const icons = document.querySelectorAll('.icon');
const topright = document.querySelector('.top-right');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
    body.classList.toggle('unscroll');
    topright.classList.toggle('top-right-show');
  });
});