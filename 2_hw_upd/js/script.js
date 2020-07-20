let firstRangeNumber = +prompt (`Please, fill in the first number of range `);
let lastRangeNumber = +prompt (`Please, fill in the last number of range`);
if (lastRangeNumber <=firstRangeNumber ) {
    lastRangeNumber = +prompt (`You can not fill in the number less than the first or equal. Please, fill in the last number of range again`);
};

for (i=firstRangeNumber; i <= lastRangeNumber; i++) {
    if (i%5 ===0 || i%2 ===0) {
        console.log (i);
    }
};




let answerName = prompt (`Привет! Как тебя зовут?`);
let answerAffairs = prompt (`Как ${name} Ваши дела?`);
let answerFood = prompt (`Чем потчевал сегодня барин?`);
let answerGoodbye = prompt (`К сожалению я робот и не кушаю, поэтому ваши человечьи вкусы мне не близки. Прощайте....`);
console.log(`a. - Привет! Как тебя зовут?`);
console.log(`b. - ${answerName}`);
console.log(`c. - Как ${name} Ваши дела?`);
console.log(`d. - ${answerAffairs}`);
console.log(`e. - Чем потчевал сегодня барин?`);
console.log(`f. - ${answerFood}`);
console.log(`g. - К сожалению я робот и не кушаю, поэтому ваши человечьи вкусы мне не близки. Прощайте....`);
console.log(`h. - ${answerGoodbye}`);








