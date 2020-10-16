var btmBar = document.getElementById('bottom-bar');
var soundBtn = btmBar.querySelector('.sound-btn');
var soundCtrl = btmBar.querySelector('.sound-ctrl');
var plusSound = soundCtrl.querySelector('.plus');
var minusSound = soundCtrl.querySelector('.minus');
var volumeNum = soundCtrl.querySelector('.volume');
var bgm = document.querySelector('#bgm');
bgm.volume = Number(volumeNum.innerHTML) / 10;
bgm.play();

soundBtn.addEventListener('click', function() {
    soundCtrl.style.display = 'inline-block';
    volumeNum.innerHTML = volumeNum.innerHTML < 10 ? '0' + volumeNum.innerHTML : volumeNum.innerHTML; 
    killSound();
    
})
plusSound.addEventListener('click', function() {
    // plus volume
    var theVolume = Number(volumeNum.innerHTML);
    if (theVolume < 10) {
        theVolume += 1;
        bgm.volume = theVolume / 10;
        volumeNum.innerHTML = theVolume < 10 ? '0' + theVolume : theVolume; 
    }
    clearTimeout(soundCtrlCD);
    killSound();
})
minusSound.addEventListener('click', function() {
    // minus volume
    var theVolume = Number(volumeNum.innerHTML);
    if (theVolume > 0) {
        theVolume -= 1;
        bgm.volume = theVolume / 10;
        volumeNum.innerHTML = theVolume < 10 ? '0' + theVolume : theVolume; 
    }
    clearTimeout(soundCtrlCD);
    killSound();
})

var soundCtrlCD;
var killSound = function() {
    soundCtrlCD = setTimeout(function() {
        soundCtrl.style.display = 'none';
    }, 5000)
}

var toolIcons = btmBar.querySelectorAll('.icon');
toolIcons[0].addEventListener('click', function() {
    location.assign('../html/index.html')
})



