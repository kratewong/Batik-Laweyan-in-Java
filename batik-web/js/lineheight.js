(function(){
    function setLineHeight(FBL) {
    for (var i = 0; i < FBL.length; i++) {
        console.dir(FBL[i]);
        FBL[i].style.lineHeight = FBL[i].clientHeight + 'px';
        // that.style.lineHeight = that.style.height + '!important';
    }
}
var FBL = document.querySelectorAll('.line-height');
setLineHeight(FBL);
window.onresize = function() {
    setLineHeight(FBL);
}
})()
// console.dir(FBL);
// FBL[4].style.lineHeight = FBL[4].clientHeight + 'px';