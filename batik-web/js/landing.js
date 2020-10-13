// forluma field
// 1. hot-spot circle
function hotSpot(box, duration = 5000, fresh = 10) {
    var dot = document.createElement('div');
    box.appendChild(dot);
    
    dot.style.borderRadius = '50%';
    dot.style.height = '0px';
    dot.style.width = '0px';
    dot.style.left = '50%';     dot.style.top = '50%';
    dot.style.transform = 'translate(-50%, -50%)';
    var step = Math.round(duration / fresh);
    var speed = Math.round(1 / step) * 100;
    
    var sprDot = setInterval(function() {
        var currD = dot.offsetHeight;
        
        if ((box.offsetHeight - currD) <= 10) {
            box.style.height = '100%';
            box.style.width = box.style.height;
            clearInterval(sprDot);
        } else {
            box.style.height = (currD / box.offsetHeight) * 100 + speed + '%';
        }
        box.style.width = box.style.height;
    }, fresh)

}

// 2. color list
var orangeList = [rgba(250, 125, 5, 0.5),
               rgba(250, 145, 25, 0.5),
               rgba(250, 165, 45, 0.5),
               rgba(250, 185, 65, 0.5),
               rgba(243, 205, 85, 0.5),
               rgba(250, 225, 105, 0.5)
            ];

// 3. set circle color
function setColor (boxObj, colorList = orangeList) {
    box.getAttribute
    
    
}

// 4. box objects
