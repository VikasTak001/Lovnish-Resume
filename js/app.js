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
document.querySelectorAll('.new-tab').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default behavior
        window.open(link.href, '_blank'); // Open in a new tab
    });
});