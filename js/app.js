/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

function UrlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!==404;
}

if(UrlExists('../particles.json')) {
    particlesJS.load('particles-js', '../particles.json')
}else{
    particlesJS.load('particles-js', 'particles.json')
}