var expNavWebs = ['../html/featuredarticles.html',
    '../html/gallery.html',
    '#',
    '#'];
var centerNav = document.querySelector('.center-nav');
var expNavs = centerNav.querySelectorAll('.exp');
console.dir(expNavs);
for (var i = 0; i < expNavs.length; i++) {
    (function() {
        var theURL = expNavWebs[i]
        expNavs[i].addEventListener('click', function() {
            location.assign(theURL);
        })
    })()
}