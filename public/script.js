let light_mode = false

function toggleLightMode() {
    const toggle_button = document.getElementById('toggle');
    if (light_mode) {
       light_mode = false;
       document.body.className = 'light';

        toggle_button.src = '/images/icon-moon.svg';
    } else {
        light_mode = true;
        document.body.className = 'dark';
        toggle_button.src = '/images/icon-sun.svg';
    }
}