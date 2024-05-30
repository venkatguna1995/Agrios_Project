// hamburger

function toggleNav() {
    const contact = document.querySelector('.navbar-TM');
    contact.classList.toggle('hidden');
    contact.classList.toggle('open');
    
    const icon = document.querySelector('.menu-icon');
    if (icon.getAttribute('data-icon') === 'hamburger') {
        icon.innerHTML = "&#9776;";
        icon.setAttribute('data-icon', 'close');
    } else {
        icon.innerHTML = "X";
        icon.setAttribute('data-icon', 'hamburger');
    }
}