let name=prompt('Please enter your name')
let surname=prompt('Please enter your surname')
let age=+prompt('Please enter your age')
let mood=prompt('Please enter your mood')




function getInformationAboutVisitor (){
    let div = document.createElement ('div');
    div.className = 'visitor'
   
    div.insertAdjacentHTML('afterbegin',  '<p> Name:  '+ name + '</p> <p> Surname:  '+ surname + '</p> <p> Age:  '+ age + '</p> <p> Mood:  '+ mood + '</p>')
    div.style.cssText=`color:#808080 ;
    text-align: center ;
    font-weight:bold;
    font-style: italic;
    font-size: 16px;
    background-color: #7FFFD4;
    width:150px;
    flex-direction: column;
    justify-content: space-between; `;
    document.body.append (div);
    let collectionP = document.body.querySelectorAll('p');
    for (i=0; i< collectionP.length;i++ ){
        collectionP[i].className='block'
    }
    
     
}
getInformationAboutVisitor ()

function showConsol (){
let quantityOfDiv = document.body.querySelectorAll('div').length
let quantityOfP = document.body.querySelectorAll('p').length
let quantityOfScript = document.body.querySelectorAll('script').length
let div = document.body.querySelector('div')
let p = document.body.querySelectorAll('p')
let script = document.body.querySelector('script')
let arrayAttr=[ script.getAttribute('type'),
                script.getAttribute('src'),
                div.getAttribute('class'),
                p[0].getAttribute('class'),
                p[1].getAttribute('class'),
                p[2].getAttribute('class'),
                p[3].getAttribute('class'),
                div.getAttribute('style'),]


let informObj = {
    div: quantityOfDiv,
    p: quantityOfP,
    script: quantityOfScript,
    classes:  arrayAttr,
}
return console.log(informObj)



}
showConsol ()

