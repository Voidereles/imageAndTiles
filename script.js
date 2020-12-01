var sec = -1;
let timeout;



function getId(strId) {
    arr = new Array(2);
    arr[0] = strId.substring(3, strId.indexOf('_'));
    arr[1] = strId.substring(strId.indexOf('_') + 1, strId.length);
    return arr
}

function Picture(accept) {
    this.val;
    do {
        rand = Math.floor(Math.random() * accept.length);
    } while (accept[rand] == 2);
    accept[rand]++;
    this.val = rand;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function GameBoard(n, m) {
    this.n = n;
    this.m = m;

    score = 0;

    //n*m%2==0

    picBoard = new Array(n);
    last = -1;

    accepTab = new Array(n * m / 2);
    for (var i = 0; i < accepTab.length; i++) {
        accepTab[i] = 0;
    }

    for (var i = 0; i < picBoard.length; i++) {
        picBoard[i] = new Array(m);
        for (var j = 0; j < picBoard[i].length; j++) {
            picBoard[i][j] = new Picture(accepTab);
        }
    }

    // n -row; m -column 
    for (var i = 0; i < n; i++) {
        $("#board").append("<div class=row id=row" + i + "> ");
        for (var j = 0; j < m; j++) {
            $("#board #row" + i).append("<span class=col id=col" + i + "_" + j + ">");
            $('#roll').addClass("show");
            $('#showAll').addClass("show");
            $('#start').html('Restart');
            // $("#col" + i + "_" + j).bind("click", function () {

            //     show(this);
            //     this.classList.add('transparent');
            //     $('#score').html(document.querySelectorAll('#board .transparent').length);
            // });
        }
    }
}


function roll() {
    rolledEl = $("#col" + getRandomInt(0, rowNumber) + "_" + getRandomInt(0, columNumber));
    rolledEl.addClass('transparent');
    $('#score').html(document.querySelectorAll('#board .transparent').length);
}

function showAll() {
    $('#board span').addClass('transparent');
    $('#score').html(document.querySelectorAll('#board .transparent').length);
}


let rowNumber, columNumber;

function start() {
    $('#score').html('0').css('color', 'inherit'); //czyszczenie koloru i wartosci
    document.getElementById("board").innerHTML = '<img class="img" src="img.PNG" alt="">'; //czyszczenie obecnej planszy
    //bez tego po każdym kliknięciu przyspieszałoby czas

    rowNumber = 30;
    columNumber = 50;

    board = new GameBoard(rowNumber, columNumber);
    // var img = document.querySelector('img');

    // $('.col').css("width", Math.round($('.row').width() / columNumber) + "px");
}

$().ready(function () {
    $("#start").bind("click", function () {
        start();
    });

    $("#roll").bind("click", function () {
        roll();
    });
    $("#showAll").bind("click", function () {
        showAll();
    });
});