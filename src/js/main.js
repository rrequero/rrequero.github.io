require('../sass/main.scss');

function init() {

    document.querySelector('.menu-toggle').addEventListener('click', function (event) {
        document.body.classList.toggle('menu-open');
    });
    document.querySelector('main').addEventListener('click', function (event) {
        document.body.classList.remove('menu-open');
    });
    document.getElementById('talks').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('article').classList.add('active');
    })
}

window.onload = init;