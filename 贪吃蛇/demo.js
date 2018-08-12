var content = document.getElementById('content');
var start = document.getElementById("start");
var num = document.getElementById("num1");
var lose = document.getElementById('img2');
var loseNum = document.getElementById('endNum');
var close = document.getElementById('close');
var Img3 = document.getElementById('img3');
var Img4 = document.getElementById('img4');
var startPage = document.getElementById('img1');
var pauseGameBool = true;
var startGameBool = true;
var snakeMove;
var speed = 200;
init();

function init() {
    this.mapW = parseInt(getComputedStyle(content).width);
    this.mapH = parseInt(getComputedStyle(content).height);
    this.mapDiv = content;
    this.foodW = 15;
    this.foodH = 15;
    this.foodX = 0;
    this.foodY = 0;
    this.snakeW = 15;
    this.snakeH = 15;
    this.snakeBody = [
        [3, 1, 'head'],
        [2, 1, 'body'],
        [1, 1, 'body']
    ];
    this.direct = 'right';
    this.left = false;
    this.right = false;
    this.up = true;
    this.down = true;
    this.num1 = 0;
    // startGame();
}

function startGame() {

    startPage.style.display = 'none';
    Img4.style.display = 'block';
    food();
    snake();
    // snakeMove = setInterval(function () {
    //     move();
    // }, speed);
    bindEvent();

}

function food() {
    var food = document.createElement('div');
    food.style.width = this.foodW + 'px';
    food.style.height = this.foodH + 'px';
    food.style.position = 'absolute';
    this.foodX = Math.floor(Math.random() * (this.mapW / 15));
    this.foodY = Math.floor(Math.random() * (this.mapH / 15));
    food.style.left = this.foodX * 15 + 'px';
    food.style.top = this.foodY * 15 + 'px';
    this.mapDiv.appendChild(food).setAttribute('class', 'food');
}

function snake() {
    for (var i = 0; i < this.snakeBody.length; i++) {
        var snake = document.createElement('div');
        snake.style.width = this.snakeW + 'px';
        snake.style.height = this.snakeH + 'px';
        snake.style.position = 'absolute';
        snake.style.left = this.snakeBody[i][0] * 15 + 'px';
        snake.style.top = this.snakeBody[i][1] * 15 + 'px';
        snake.classList.add(this.snakeBody[i][2]);
        this.mapDiv.appendChild(snake).classList.add('snake');
        switch (this.direct) {
            case 'right':
                break;
            case 'up':
                snake.style.transform = 'rotate(270deg)';
                break;
            case 'left':
                snake.style.transform = 'rotate(180deg)';
                break;
            case 'down':
                snake.style.transform = 'rotate(90deg)';
                break;

        }
    }
}

function move() {
    for (i = this.snakeBody.length - 1; i > 0; i--) { //错1  不能从蛇头循环 
        this.snakeBody[i][0] = this.snakeBody[i - 1][0];
        this.snakeBody[i][1] = this.snakeBody[i - 1][1];
    }
    switch (this.direct) {
        case 'right':
            this.snakeBody[0][0] += 1; //第一个0是蛇头 第二个是X值
            break;
        case 'up':
            this.snakeBody[0][1] -= 1;
            break;
        case 'left':
            this.snakeBody[0][0] -= 1;
            break;
        case 'down':
            this.snakeBody[0][1] += 1;
            break;
        default:
            break;
    }
    removeClass('snake');
    snake();
    if (this.snakeBody[0][0] == this.foodX && this.snakeBody[0][1] == this.foodY) {
        var snakeEndX = this.snakeBody[this.snakeBody.length - 1][0];
        var snakeEndY = this.snakeBody[this.snakeBody.length - 1][1];
        switch (this.direct) {
            case 'right':
                this.snakeBody.push([snakeEndX + 1, snakeEndY, 'body']);
                break;
            case 'up':
                this.snakeBody.push([snakeEndX, snakeEndY - 1, 'body']);
                break;
            case 'left':
                this.snakeBody.push([snakeEndX - 1, snakeEndY, 'body']);
                break;
            case 'down':
                this.snakeBody.push([snakeEndX, snakeEndY + 1, 'body']);
                break;
            default:
                break;
        }
        this.num1 += 1;
        num.innerHTML = this.num1;
        removeClass('food');
        food();
    }
    if (this.snakeBody[0][0] < 0 || this.snakeBody[0][0] >= this.mapW / 15) {
        relodGame();
    }
    if (this.snakeBody[0][1] < 0 || this.snakeBody[0][1] >= this.mapH / 15) {
        relodGame();
    }
    var snakeHX = this.snakeBody[0][0];
    var snakeHY = this.snakeBody[0][1];
    for (var i = 1; i < this.snakeBody.length; i++) {
        if (snakeHX == snakeBody[i][0] && snakeHY == snakeBody[i][1]) {
            relodGame();
        } //蛇头的横纵坐标等于body的
    }

}

function removeClass(className) {
    var ele = document.getElementsByClassName(className);
    while (ele.length > 0) {
        ele[0].parentNode.removeChild(ele[0]);
    }
}

function setDerict(code) {
    switch (code) {
        case 37:
            if (this.left) {
                this.direct = 'left';
                this.left = false;
                this.right = false;
                this.up = true;
                this.down = true;
            }
            break;
        case 38:
            if (this.up) {
                this.direct = 'up';
                this.left = true;
                this.right = true;
                this.up = false;
                this.down = false;
            }
            break;
        case 39:
            if (this.right) {
                this.direct = 'right';
                this.left = false;
                this.right = false;
                this.up = true;
                this.down = true;
            }
            break;
        case 40:
            if (this.down) {
                this.direct = 'down';
                this.left = true;
                this.right = true;
                this.up = false;
                this.down = false;
            }
            break;
        default:
            break;
    }
}
bindEvent();
function bindEvent() {
    // document.onkeydown = function (e) {
    //     var code = e.keyCode;
    //     setDerict(code);
    // }
    close.onclick = function () {
        lose.style.display = 'none';
        Img3.style.display='block';
        

    }
    startPage.onclick = function () {
        console.log('hahaha')
        startAndPause();
    }
    Img4.onclick = function () { //点击暂停
        startAndPause();
    }
    Img3.onclick=function(){
        startAndPause();
        
    }
}
    function startAndPause() {
        if (pauseGameBool) {
            if (startGameBool) {
                startGame();
                startGameBool = false;
            }
            document.onkeydown = function (e) {
                var code = e.keyCode;
                setDerict(code);
            }
            snakeMove = setInterval(function () {
                move();
            }, speed);
            pauseGameBool=false;
        }else{
            Img3.style.display='block';
            Img4.style.display='none';
            clearInterval(snakeMove);
            document.onkeydown=function(e){
                e.returnValue=false;
                return false;
            };
            pauseGameBool=true;
        }
    }

    function relodGame() {
        removeClass('snake');
        removeClass('food');
        clearInterval(snakeMove);
        this.snakeBody = [
            [3, 1, 'head'],
            [2, 1, 'body'],
            [1, 1, 'body']
        ];
        this.left = false;
        this.right = false;
        this.up = true;
        this.down = true;
        lose.style.display = 'block';
        loseNum.innerHTML = this.num1;//num1  得分
        this.num1 = 0;
        num.innerHTML = this.num1;
        pauseGameBool = true;
        startGameBool = true;
        Img3.style.display='bolck';
        Img4.style.display='none';
        
    }