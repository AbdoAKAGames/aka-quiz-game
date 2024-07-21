let title = document.querySelector('.title');
let turn = 'x';
let squares = [];
let xwins = 0;
let owins = 0;
if(localStorage.xwins !== undefined){
    xwins = localStorage.xwins;
}
else if(localStorage.xwins == undefined){
    localStorage.xwins = 0;
}
if(localStorage.owins !== undefined){
    owins = localStorage.owins;
}
else if(localStorage.owins == undefined){
    localStorage.owins = 0;
}
function end(num1, num2, num3){
    title.innerHTML = `${squares[num1]} <span class="won">won</span>`;
    document.getElementById('item'+num1).style.background = '#000';
    document.getElementById('item'+num2).style.background = '#000';
    document.getElementById('item'+num3).style.background = '#000';
    setInterval(() => {
        title.innerHTML += '<span class="won">.</span>';
    }, 1000);
    setTimeout(() => {
        location.reload();
    }, 4000);
    document.getElementsByClassName('sq')[0].remove();
}
function winner(){
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != ''){
        end(1, 2, 3);
    }
    if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != ''){
        end(4, 5, 6);
    }
    if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != ''){
        end(7, 8, 9);
    }
    if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != ''){
        end(1, 4, 7);
    }
    if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != ''){
        end(2, 5, 8);
    }
    if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != ''){
        end(3, 6, 9);
    }
    if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != ''){
        end(1, 5, 9);
    }
    if(squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != ''){
        end(3, 5, 7);
    }
}
function game(id){
    let element = document.getElementById(id);
    if(turn === 'x' && element.innerHTML === ''){
        element.innerHTML = 'X';
        turn = 'o';
        title.innerHTML = 'O';
        title.style.color = 'red';
        element.style.color = 'blue';
    }
    else if(turn === 'o' && element.innerHTML === ''){
        element.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X';
        title.style.color = 'blue';
        element.style.color = 'red';
    }
    winner();
        if(document.getElementById('item1').innerHTML !== '' && document.getElementById('item2').innerHTML !== '' && document.getElementById('item3').innerHTML !== '' && document.getElementById('item4').innerHTML !== '' && document.getElementById('item5').innerHTML !== '' && document.getElementById('item6').innerHTML !== '' && document.getElementById('item7').innerHTML !== '' && document.getElementById('item8').innerHTML !== '' && document.getElementById('item9').innerHTML !== ''){
            console.log('draw');
            let draw = document.createElement('h1');
            draw.classList.add('draw');
            draw.innerHTML = `DRAW<br><button class="restart" onclick="location.reload();">Restart</button>`;
            document.getElementsByClassName('sq')[0].append(draw);
        }
}
let int = setInterval(() => {
    if(title.innerHTML.includes('w')){
        let winer = title.innerHTML[0];
        if(winer === 'X'){
            title.innerHTML = `<span class="x">X</span> <span class="won">won</span>`;
            xwins++;
            localStorage.setItem('xwins', xwins);
            clearInterval(int);
        }
        else if(winer == 'O'){
            title.innerHTML = `<span class="o">O</span> <span class="won">won</span>`;
            owins++;
            localStorage.setItem('owins', owins);
            clearInterval(int);
        }
    }
}, 15);
setInterval(() => {
    document.getElementsByClassName('XScore')[0].innerHTML = `<h1>X Score: ${localStorage.xwins}</h1>`;
    document.getElementsByClassName('OScore')[0].innerHTML = `<h1>O Score: ${localStorage.owins}</h1>`;
}, 15);