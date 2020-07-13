let clientNumber = prompt ('Please, fill in your lucky number!');
let plusNumber = prompt ('Please, fill in number which we will add to your lucky number!');
let subtractNumber = prompt ('Please, fill in number which we will subtract from the previous result!');
let multiplyNumber = prompt ('Please, fill in number which we will multiply by the previous result!');
let divideNumber = prompt ('Please, fill in number for which we will divide our previous result!');
let result = ((((+clientNumber + +plusNumber) - +subtractNumber) * +multiplyNumber) / +divideNumber);
alert( '((('+ clientNumber + ' + ' +  plusNumber + ')' + ' - ' + subtractNumber +')'+ ' * '+ multiplyNumber +')'+ ' / ' + divideNumber + ' = ' + result +')' );



let name = 'Olga';
let age = 25;
let myresult = false;
console.log('Variable ' + 'name' + ' has type ' + typeof(name));
console.log('Variable ' + 'age' + ' has type ' + typeof(age));
console.log('Variable ' + 'myresult'  + ' has type ' + typeof(myresult));



let namber1 = 2;
let namber2 = 4;
namber1 = String (namber1);
console.log( namber1 + namber2);



