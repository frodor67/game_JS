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

  let counter = 10;

  let userNum;
  
  console.log('это случайное число ' + randomNum);

  let getUserNum = function () {
   userNum = +prompt('Введи число!');
   if (!isNumber(userNum)){
     getUserNum();
   } return userNum;
  };

  
  function spareNum (){
    
    userNum = +prompt('Угадай число от 1 до 100');    

    
    console.log('Попыток осталось ' + counter);
    
    if (!isNumber(userNum) || userNum === '') {
      //userNum = +prompt('Введи число!');
      getUserNum();
      //spareNum();
    } else if (userNum ===0 ||isNaN(userNum)) {
      return alert('Игра окончена');
    }
    
    counter--;

    if (counter === 0) {
      if (confirm('Попытки закончились, хотите сыграть еще?')){
        startGame();
      }
    }

    console.log('это пользовательское число ' + userNum);

    if (userNum < randomNum) {
      alert('Загаданное число больше ' + userNum + ' остлось попыток ' + counter);
      spareNum();
      } else if (userNum > randomNum) {
        alert('Загаданное число меньше ' + userNum  + ' остлось попыток ' + counter);
        spareNum(); 
       } else if (userNum === randomNum) {      
        if (confirm('Вы выиграли! хотите сыграть еще?')){
          startGame();
        } alert('Игра закончилась!');
        }      
  }
  
  return spareNum();
};

startGame();
