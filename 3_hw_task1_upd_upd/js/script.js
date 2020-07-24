let registration = {};
alert ('We are glad to see you on our website. If you want to register please click ok.')
registration.name = prompt ('Please, write you name');
while (registration.name === '' || registration.name === null ) {
    registration.name = prompt ('Please, write you name.');
} ;
registration.surname = prompt ('Please, write you surname');
while (registration.surname === '' || registration.surname === null ) {
    registration.surname = prompt ('Please, write you surname.');
} ;
registration.login = prompt ('Please, write you login');

while (registration.login.length>10) {
    registration.login = prompt ('Please, write you login again. It can consist of only 10 chars or less.');
} ;

registration.password = +prompt ('Please, write you password');

while (registration.password === NaN ) {
    registration.password = +prompt ('Please, write you password again. It can only consist of numbers');
} ;  /// не знаю как проверить, чтобы ьыли введеты только числа

alert ('Thank you for registering. Check your email and confirm registration.');

let login = prompt ('Please, write you login');
let password = +prompt ('Please, write you password');


if ( login===registration.login && password===registration.password ) {     
    alert ('Access is allowed');}

else {
    while (login!=registration.login) {
    login = prompt ('There is no such user. Please enter your login again.');
}   while (password!=registration.password) {
    password = +prompt ('There is no such password. Please enter your password again.');
    alert ('Access is allowed');
};


}


    

console.log (registration);