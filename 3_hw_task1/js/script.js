let registration = {};
alert ('We are glad to see you on our website. If you want to register please click ok.')
registration.name = prompt ('Please, write you name');
registration.surname = prompt ('Please, write you surname');
registration.email = prompt ('Please, write you e-mail');
registration.login = prompt ('Please, write you login');
registration.password = +prompt ('Please, write you password');
while (typeof registration.password != 'number') {
    registration.password = prompt ('Please, write you password again. It can only consist of numbers');
} ;  //НЕ РАБОТАет
alert ('Thank you for registering. Check your email and confirm registration.');

let login = prompt ('Please, write you login');
while (login!=registration.login || login===null  || login==='') {
    login = prompt ('There is no such user. Please enter your login again.');
}

let password = prompt ('Please, write you password');
while (password!=registration.password || password===null  || password==='') {
    login = prompt ('There is no such user. Please enter your password again.');
}

if (login===registration.login && password===registration.password) {
    alert ('Access is allowed');
   
}
1
console.log (registration);








































