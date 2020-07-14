let valueClient = +prompt ('Please, fill in your lucky number!');
let valueToAdd = +prompt ('Please, fill in number which we will add to your lucky number!');
let valueToSubtract = +prompt ('Please, fill in number which we will subtract from the previous result!');
let valueToMultiply = +prompt ('Please, fill in number which we will multiply by the previous result!');
let valueToDivide = +prompt ('Please, fill in number for which we will divide our previous result!');
let result = ((((+valueClient + +valueToAdd) - +valueToSubtract) * +valueToMultiply) / +valueToDivide);
alert( '((('+ valueClient + ' + ' +  valueToAdd + ')' + ' - ' + valueToSubtract +')'+ ' * '+ valueToMultiply +')'+ ' / ' + valueToDivide + ' = ' + result +')' );



let name = 'Olga';
let age = 25;
let myresult = false;
console.log('Variable name has type ' + typeof(name));
console.log('Variable age has type ' + typeof(age));
console.log('Variable myresult has type ' + typeof(myresult));



let namber1 = 2;
let namber2 = 4;
namber1 = String (namber1);
console.log( namber1 + namber2);

// OR

let namber3 = 2;
let namber4 = 4;
namber3 = toString ();
namber4 = toString ();
console.log( namber1 + namber2);



