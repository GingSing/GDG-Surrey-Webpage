const menu = document.getElementById("menu");
const mobile = document.getElementById("mobile-menu");

mobile.addEventListener('click', (e) => {
    mobile.classList.toggle('change');
    menu.classList.toggle('hide');
});