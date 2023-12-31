/**
 * @description Changes the website favicon dynamically by replacing the existing favicon with a new one.
 *
 * @param {string} src - The source URL of the new favicon.
 */
function changeFavicon(src) {
    const head = document.head || document.getElementsByTagName('head')[0];
    var link  = document.createElement('link'),
    oldLink   = document.getElementById('dynamic-favicon');
    link.id   = 'dynamic-favicon';
    link.rel  = 'icon';
    link.href = src;
    if (oldLink) {
        head.removeChild(oldLink);
    }
    head.appendChild(link);
}

/**
 * @description Animates the website favicon by toggling between two frames.
 *                The frames are two different favicon images encoded in base64.
 */
function animateIcon() {
    if (typeof animateIcon.i === 'undefined') {
        animateIcon.i = 0;
    }
    if (animateIcon.i === 0) {
        //frame 1
        changeFavicon(" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAADFBMVEUAAADZ3unZ3umBocEb6ctKAAAABHRSTlMA////sy1AiAAAAERJREFUOI1jYKAXYGZmxi9AuQJUISyylCtgxgKoqQDOR5JCUUOhAmy2o7iEGAW4fUFlBdhihjoKMAIc7gDsMU6JgqEMACyOBFfUK478AAAAAElFTkSuQmCC");
    } else { //could be a switch if I had more frames
        //frame 2
        changeFavicon(" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAADFBMVEUAAADZ3unZ3umBocEb6ctKAAAABHRSTlMA////sy1AiAAAAEBJREFUOI1jYKAXYGZmxi9AiQI4C0kNihi1FDBjAdRUgMxHZ1JVAQ5AWAEOLyBkqaKAwvRAjAIMWXRhyhUMfQAAcEwEjYn6LD0AAAAASUVORK5CYII=");
    }
    animateIcon.i++;
    if (animateIcon.i === 2) {
        animateIcon.i = 0;
    }
}

