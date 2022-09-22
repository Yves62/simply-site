const buttonMenu = document.querySelector('.burger-menu');
const containerLinks = document.querySelector('.container-li');

buttonMenu.addEventListener('click', () => {
    containerLinks.classList.toggle('active')
})

