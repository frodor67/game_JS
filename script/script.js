'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


let getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let startGame = function () {
  
  let randomNum = getRandomNumber(1, 100);
  
  console.log('это случайное число ' + randomNum);

  
  function spareNum (){
    
    let userNum = +prompt('Угадай число от 1 до 100');
    
    if (!isNumber(userNum)) {
      alert('Введи число!');
      spareNum();
    } else if (userNum === 0 || isNaN(userNum)) {
      return alert('Игра окончена');
    }

    console.log('это пользовательское число ' + userNum);


    



    if (userNum < randomNum) {
      alert('Загаданное число больше ' + userNum);
      spareNum();
      } else if (userNum > randomNum) {
        alert('Загаданное число меньше ' + userNum);
        spareNum(); 
       } else if (userNum === randomNum) {      
         return alert('Вы выиграли!');  
        } 
     
  }
  
  return spareNum();
};




startGame();
