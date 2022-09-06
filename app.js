restart = document.getElementById('restart');
startGame(document.querySelector('#game'));

let round = document.querySelector('.round');

let timer; 
var x = 20; 
let wrapper = document.querySelector('.wrapper');
let loser = document.querySelector('.loser');

restart.addEventListener('click', startGame)


// nextGame();

function startGame(game) {

    document.querySelector('#game').style.display = 'flex';
    let h2 = document.querySelector('h2');
    let size = 2;
    let field = document.querySelector('.field');
    let round = document.querySelector('.round');
    
    round.innerHTML = `Уровень 1`;
    h2.innerHTML = `Найди числа по возрастанию от 1 до 4`;
    // 
   

    nextGame();

        function nextGame () {
            clearGame(field); //очищаем игровое поле
            var cells = drawGameField(size, field); //рисуем игровое поле
            paintClick(cells); //активируем игровое поле
            // 

        }

        function paintClick(cells) {
            let counter = 1;
            
            
            
            for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', function(){
                if (this.innerHTML == counter) {
                    this.classList.add('active');
                    
                    // console.log(counter);
                    // console.log(size * size);
                    if(counter == size * size) {
                        
                        size++;
                        
                        
                        nextGame()
                        x = 40 + Number(size * size);
                        
                        round.innerHTML = `Уровень ${Math.sqrt(counter)}`;
                        
                    }
                    // nextGame();
                    
                    counter++
                    h2.innerHTML = `Найди числа по возрастанию от 1 до ${size * size}`
                    

                }
                

            })
            }
        }
}



countdown(); 
function countdown(){  
    var timer = document.getElementById('timer');
  timer.innerHTML = `Осталось ${x} секунд`;
  x--; 

console.log(x)
  if (x <= 0){
    wrapper.style.display = 'none';
    loser.style.display = 'block';
   
  
  } else {
    timer = setTimeout(countdown, 1000);
}
//   else {
//     timer = setTimeout(countdown, 1000);
//     timer.style.color = 'green';
//   }
}

function clearGame(field) {
    field.innerHTML = '';
}

function drawGameField(size, field) {
    let from = 1;
    let to = size * size;
    let arr = [];
    arr = createArr(from, to);
    arr = randomArr(arr); 
    arr = partArr(size, arr); 
    
    return createCells(arr, field);
}







function createCells(arr, item) {
    var cells = [];
    

    for (var i = 0; i < arr.length; i++) {
        var tr = document.createElement('tr');
        for (var a = 0; a < arr[i].length; a++) {
            var td = document.createElement('td');
            td.innerHTML = arr[i][a];
            tr.appendChild(td);
            td.style.color = 'rgb(' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ')'
            td.style.fontSize = `${getRandomInt(12, 45)}px`
            cells.push(td)
        }
        item.appendChild(tr);
        
        
    }
    
return cells;
}

function createArr(from, to) {
var arr = [];

    for (let i = from; i <= to; i++) {
    arr.push(i);
    
}

    return arr;
}

function randomArr(arr) {
    var result = [];
    var length = arr.length;


    for (let i = 0; i < length; i++) {
        var random = getRandomInt(0, arr.length - 1);
        
        var item = arr.splice(random, 1)[0];
        result.push(item);
}
    return result;

}
function partArr(n, arr) {
    var result = [];
    var length = arr.length;
   
    var itemCount = Math.ceil(length / n);
    for (let i = 0; i < itemCount; i++ ) {
        var items = arr.splice(0, n);
        result.push(items); 
        
    }
    return result;

}




// функция генерирует случайное число
function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
