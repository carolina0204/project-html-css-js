const menut = document.querySelector('.menu'); //selecciona la primera clase que se nombre 'menu'
const menuNav = document.querySelector('.menu-navegador');

console.log(menut)
console.log(menuNav)

menut.addEventListener('click', () => {
    menuNav.classList.toggle('spread')
})