//1
let divFirstVariant = document.body.querySelectorAll('div');
console.log(divFirstVariant)

let divSecondVariant = document.body.getElementsByTagName('div')
console.log(divSecondVariant)
    
let divByClass = document.body.getElementsByClassName('happy')
divByClass[0].style.backgroundColor = "lightblue";
console.log(divByClass);
    
let divById = document.getElementById ('clock')
divById.setAttribute('class', 'time')
console.log(divById);

