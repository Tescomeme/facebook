let settingsmenu = document.querySelector('.settings-menu');

function settingsDropdown() {
    settingsmenu.classList.toggle('settings-menu-height')
}

window.addEventListener('click', function(event) {
    if (!event.target.matches('.userimage')) {
        settingsmenu.classList.remove('settings-menu-height')
    }
})
