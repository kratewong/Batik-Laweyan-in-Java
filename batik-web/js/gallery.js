var backBtn = document.querySelector('.back');
backBtn.addEventListener('click', function() {
    history.back();
})
var freshBtn = document.querySelector('.fresh-btn');
freshBtn.addEventListener('click', function() {
    location.reload();
})