var styNavWebs = ['../html/story1.html',
    '../html/story2.html',
    '#',
    '#'];
var centerNav = document.querySelector('.center-nav');
var styNavs = centerNav.querySelectorAll('.sty');
// console.dir(styNavs);
for (var i = 0; i < styNavs.length; i++) {
    (function() {
        var theURL = styNavWebs[i]
        styNavs[i].addEventListener('click', function() {
            location.assign(theURL);
        })
    })()
}


