//4
let collectionLi = document.querySelectorAll('li')

function getRandomLi(){
    var randomLi = Math.floor(Math.random() * document.querySelectorAll('li').length);
    return randomLi;
}

function getRandomColor(){
    collectionColor=[
        'red','blue','green','lime','yellow'
    ]
    var randomColor = Math.floor(Math.random() * collectionColor.length);
    return collectionColor[randomColor];
    
}

function changeColorRundomLi(){
let colorForLi=getRandomColor()
let item = getRandomLi(collectionLi)
collectionLi[item].style.color= colorForLi
function returnBlackColor (){
collectionLi[item].style.color= 'black'}
setInterval (() => returnBlackColor(),999);

}

let timerId=setInterval (() => changeColorRundomLi(),1000);
