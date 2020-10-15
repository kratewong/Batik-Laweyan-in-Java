var btmBar = document.getElementById('bottom-bar');
var soundBtn = btmBar.querySelector('.sound-btn');
var soundCtrl = btmBar.querySelector('.sound-ctrl');
var plusSound = soundCtrl.querySelector('.plus');
var minusSound = soundCtrl.querySelector('.minus');
var volumeNum = soundCtrl.querySelector('.volume');

soundBtn.addEventListener('click', function() {
    soundCtrl.style.display = 'inline-block';
    killSound();
    
})
plusSound.addEventListener('click', function() {
    // plus volume
    volumeNum.innerHTML = Number(volumeNum.innerHTML) + 1;
    clearTimeout(soundCtrlCD);
    killSound();
})
minusSound.addEventListener('click', function() {
    // plus volume
    volumeNum.innerHTML = Number(volumeNum.innerHTML) - 1;
    clearTimeout(soundCtrlCD);
    killSound();
})

var soundCtrlCD;
var killSound = function() {
    soundCtrlCD = setTimeout(function() {
        soundCtrl.style.display = 'none';
    }, 5000)
}
