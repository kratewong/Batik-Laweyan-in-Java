// forluma field
// 2. color list and radom set
var totalFreshTime = 3000;
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

var dotsMove = [['20%', '50%'], ['30%', '65%'], ['40%', '50%'], ['45%', '35%'], ['50%', '70%'], ['55%', '45%'], ['85%', '50%']];

// dots info
var dotsList = [
    {title: 'Senior High',
     boxNum: [1, 2, 3, 4, 5, 6, 7],
     boxLevel: [6, 2, 3, 4, 3, 3, 2],
     amount: 114700,
     mask: 'rgba(155, 133, 170, 0.8)'
    },
    {title: 'Private Employee',
     boxNum: [1, 2, 3, 4, 5, 6, 7],
     boxLevel: [6, 3, 3, 4, 6, 2, 2],
     amount: 12658000,
     mask: 'rgba(114, 93, 68, 0.8)'
    },
    {title: 'Kindergarten',
     boxNum: [1, 3, 5, 6, 7],
     boxLevel: [3, 6, 5, 2, 2],
     amount: 56400,
     mask: 'rgba(46, 29, 9, 0.6)'
    },
    {title: 'Junior High',
     boxNum: [1, 3, 4, 5, 6, 7],
     boxLevel: [6, 3, 4, 4, 2, 2],
     amount: 180200,
     mask: 'rgba(124, 71, 205, 0.65)'
    },
    {title: 'College Students',
     boxNum: [1, 2, 3, 5, 6, 7],
     boxLevel: [6, 2, 3, 4, 3, 5],
     amount: 120800,
     mask: 'rgba(54, 42, 29, 0.8)'
    },
    {title: 'Elementary',
     boxNum: [1, 3, 4, 5, 6, 7],
     boxLevel: [6, 3, 4, 4, 3, 3],
     amount: 226700,
     mask: 'rgba(174, 147, 152, 0.8)'
    },
    {title: 'Community',
     boxNum: [1, 2, 3, 4, 5, 6, 7],
     boxLevel: [6, 2, 3, 4, 5, 4, 6],
     amount: 155000000,
     mask: 'rgba(103, 109, 39, 0.8)'
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

var rim = function() {
    
    var boxes = [];
    cnt = count % dotsList.length;


    for (var i = 0; i < boxList.length; i++) {
        boxList[i].style.display = 'none';
        boxList[i].innerHTML = '';
        boxList[i].className = 'dot';
        boxList[i].style.left = (dotsMove[i])[0];
        boxList[i].style.top = (dotsMove[i])[1];
        numbers.innerHTML = '';
    }

    title.innerHTML = dotsList[cnt].title;
    mask.style.backgroundColor = dotsList[cnt].mask;
    for (var i = 0; i < dotsList[cnt].boxNum.length; i++) {
        var j = dotsList[cnt].boxNum[i];
        var that = boxList[j-1];
        that.style.display = 'block';
        var theTop = that.offsetTop;
        var theLeft = that.offsetLeft;
        that.style.height = 4 * dotsList[cnt].boxLevel[i] + '%';
        that.style.width = that.offsetHeight + 'px';
        // reset left and top
        that.style.top = theTop - that.offsetHeight / 2 + 'px';
        that.style.left = theLeft - that.offsetWidth / 2 + 'px';

        that.setAttribute('level', dotsList[cnt].boxLevel[i]);
        boxes.push(that);
    }

    for (var i = 0; i < boxes.length; i++) {
        hotSpot(boxes[i], totalFreshTime);
    }

    var num = 0
    var target = dotsList[cnt].amount;
    var numint = setInterval(function() {
        numbers.innerHTML = num;
        if (num < target) {
            num = num + Math.ceil(target / (totalFreshTime / 20));
        } else {
            num = target;
            numbers.innerHTML = num;
            clearInterval(numint);
        }
    }, 20)
    count++;
}

rim();
var interval = setInterval(rim, totalFreshTime + 1000);

skip.addEventListener('click', function() {
    clearInterval(interval)
    location.assign('../html/index.html');

});
