require('../sass/main.scss');

function init() {

    document.querySelector('.menu-toggle').addEventListener('click', function () {
        document.body.classList.toggle('menu-open');
    });
    document.querySelector('main').addEventListener('click', function () {
        document.body.classList.toggle('menu-open');
    });
}

window.onload = init;