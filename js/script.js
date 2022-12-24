function blinktext() {
    let f = document.getElementById('blink');
    setInterval(function() {
        f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
    }, 1000);
}