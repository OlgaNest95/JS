//3
let div = document.body.querySelector('div');
div.insertAdjacentHTML('afterend','<div><span>15</span></div>')
console.log(document.body.querySelectorAll('div')[1]);

//3
let newdiv = document.createElement('div') 
let li = document.createElement('li')
let text = document.createTextNode('123456')

document.body.append(newdiv)
newdiv.append(li)
li.append(text)



