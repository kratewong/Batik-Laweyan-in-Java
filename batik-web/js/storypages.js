var backBtn = document.querySelector('.back');
backBtn.addEventListener('click', function() {
    history.back();
})


var model3d = document.querySelector('.model-3d');
console.log(model3d);
var startBtn = document.querySelector('.start-btn');
model3d.addEventListener('mouseover', function() {
    startBtn.style.display = 'block';
})
model3d.addEventListener('mouseout', function() {
    startBtn.style.display = 'none';
})


var iframe3dwindow = document.querySelector('.iframe-3d-window');
startBtn.addEventListener('click', function() {
    
    iframe3dwindow.style.display = 'block';
})



var closeBtns = document.querySelectorAll('.close-btn');
for (var i = 0; i < closeBtns.length; i++) {
    var that = closeBtns[i];
    that.addEventListener('click', function() {
        this.parentNode.style.display = 'none';
        var ifr = this.parentNode.querySelector('iframe');
        var ifrLink = ifr.getAttribute('src');
        ifr.setAttribute('src', ifrLink);
    })
}

for (var i = 1; i > 0; i++) {
    var btnClassName = '.video-' + i + '-btn';
    var videoClassName = '.video-' + i;
    var videoBtn = document.querySelector(btnClassName);
    var videoWindow = document.querySelector(videoClassName);

    if (videoBtn == null || videoWindow == null) {
        break;
    }
    (function(videoWindow) {
        videoBtn.addEventListener('click', function() {
            videoWindow.style.display = 'block';
        })
    })(videoWindow); 
}

var contentWindowBtn = document.querySelector('.content-window-btn');
var contentDisplayWindow = document.querySelector('.content-display-window');
contentWindowBtn.addEventListener('click', function() {
    contentDisplayWindow.style.display = 'block';
})