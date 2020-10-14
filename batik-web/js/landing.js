// forluma field
// 2. color list and radom set
var orangeList = ['rgba(250, 225, 105, 0.5)',
    'rgba(243, 205, 85, 0.5)',
    'rgba(250, 185, 65, 0.5)',
    'rgba(250, 165, 45, 0.5)',
    'rgba(250, 145, 25, 0.5)',
    'rgba(250, 125, 5, 0.5)',
 ];

// 1. hot-spot circle
function hotSpot(box, duration) {
    // reset box style
    box.className += ' hotSpot-box';
    box.style.width = box.offsetHeight + 'px';

    // set dot into box
    var dot = document.createElement('span');
    box.appendChild(dot);

    // reset dot
    dot.className += ' hotSpot';
    dot.style.animation = 'hotSpot ' + duration + 'ms ' + 'linear forwards';

    // get dot info
    var boxHeight = box.offsetHeight;
    var dotHeight = dot.offsetHeight;
    var level = box.getAttribute('level');
    var colorNum;
    var per;

    var grow = setInterval(function() {
        dotHeight = dot.offsetHeight;
        per = Math.ceil((dotHeight / boxHeight) * 100);
        colorNum = Math.ceil(per * level / 100)-1 < 0 ? 0 : Math.ceil(per * level / 100)-1;
        dot.style.backgroundColor = orangeList[colorNum];
        if (per == 100) {
            clearInterval(grow);
        }
    },100)
}

// dots info
var dotsList = [
    {title: 'Government Employee',
     boxNum: [1, 4, 6, 7],
     boxLevel: [3, 5, 6, 3],
     amount: 20000,
     mask: 'rgba(255, 0, 0, 0.3)'
    },
    {title: 'Senior High',
     boxNum: [2, 4, 5, 6, 3],
     boxLevel: [1, 2, 6, 3, 4],
     amount: 2123123,
     mask: 'rgba(255, 150, 0, 0.3)'
    },
    {title: 'Private Employee',
     boxNum: [4, 6, 7],
     boxLevel: [7, 3, 5],
     amount: 234234,
     mask: 'rgba(255, 250, 0, 0.3)'
    },
    {title: 'Junior High',
     boxNum: [1, 4, 6],
     boxLevel: [3, 5, 6],
     amount: 345345345,
     mask: 'rgba(50, 255, 0, 0.3)'
    },
    {title: 'College Student',
     boxNum: [1,3,4,5,6,7],
     boxLevel: [2,4,3,5,3,6],
     amount: 234234324,
     mask: 'rgba(150, 255, 0, 0.3)'
    }
]

var dotLevel = document.querySelector('#dots');
var boxList = document.querySelectorAll('.dot');
var count = 0;
var cnt;
var numbers = document.querySelector('.numbers');
var mask = document.querySelector('.mask');
var title = document.querySelector('.cls-title');
var skip = document.querySelector('.skip-btn');

var rim = setInterval(function() {
    
    var boxes = [];
    cnt = count % dotsList.length;


    for (var i = 0; i < boxList.length; i++) {
        boxList[i].style.display = 'none';
        boxList[i].innerHTML = '';

    }
    title.innerHTML = dotsList[cnt].title;
    mask.style.backgroundColor = dotsList[cnt].mask;
    for (var i = 0; i < dotsList[cnt].boxNum.length; i++) {
        var j = dotsList[cnt].boxNum[i];
        var that = boxList[j-1];
        that.style.display = 'block';
        that.style.height = 4 * dotsList[cnt].boxLevel[i] + '%';
        that.style.width = that.offsetHeight + 'px';
        that.setAttribute('level', dotsList[cnt].boxLevel[i]);
        boxes.push(that);
    }

    for (var i = 0; i < boxes.length; i++) {
        hotSpot(boxes[i], 2000);
    }

    var num = 0
    var target = dotsList[cnt].amount;
    var numint = setInterval(function() {
        numbers.innerHTML = num;
        if (num < target) {
            num += Math.ceil(target / 100);
        } else {
            num = target;
            numbers.innerHTML = num;
            clearInterval(numint);
        }
    }, 20)
    count++;

    
}, 5000)
skip.addEventListener('click', function() {
    clearInterval(rim)
    location.assign('../html/index.html');

});
