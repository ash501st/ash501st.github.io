let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.classList.add('dark');
        logo.src = "/images/byui-logo-white.png";
    } else {
        // code for changes to colors and logo
        document.body.classList.remove('dark');
        logo.src = "/images/byui-logo-blue.webp";
    }
}