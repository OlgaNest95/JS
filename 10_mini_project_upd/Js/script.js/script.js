function createListElement(tag,content){
  let element = document.createElement(tag)
  element.className = 'task'
  let text = document.createTextNode(content)
  let linkTransfer=document.createElement('a')
  let linkDelete=document.createElement('a')
  linkTransfer.className='linkTransfer fa fa-arrow-right'
  linkDelete.className='linkDelete fa fa-times '
  element.append(text);
  element.append(linkTransfer);
  element.append(linkDelete);
  return element;    
};

function createToDoList(){
  let task = document.form.elements.task.value
  let date = document.form.elements.date.value
  let ul = document.querySelector('.to_do')
  let content = `${task} ${date}`
  ul.append(createListElement('li',content)) 
  deleteTask()  
  moveTaskFromToDoList()               
};

let addButtun = document.querySelector('button');
addButtun.addEventListener('click', createToDoList);

function activateButtonsClearAll(){
  let clearButtuns = document.querySelectorAll('button');
  clearButtuns[1].addEventListener('click', function(){
    let ulToDo = document.querySelector('.to_do')
    while (ulToDo.firstChild) {
    ulToDo.removeChild(ulToDo.firstChild);
    }
    });
  clearButtuns[2].addEventListener('click', function(){
    let ulProgress = document.querySelector('.in_progress')
    while (ulProgress.firstChild) {
      ulProgress.removeChild(ulProgress.firstChild);
    }  
    });
  clearButtuns[3].addEventListener('click', function(){
    let ulDone = document.querySelector('.done')
    while (ulDone.firstChild) {
      ulDone.removeChild(ulDone.firstChild);
    }  
    });
};
activateButtonsClearAll()

function deleteTask (){
  let deleteButtons=document.querySelectorAll('.linkDelete')
  for (let elem of deleteButtons){
    elem.addEventListener('click',function (event) {
    if (elem.parentElement.parentElement.classList.value ==="in_progress list") {
      confirm (`Are you sure you want to delete the task from the Progress list?`);
      event.target.parentElement.remove()
  } else {
    event.target.parentElement.remove()}
    })
  }
}

function moveTaskFromToDoList(){    
  let ulToDo = document.querySelector('.to_do')
  let moveButtons=ulToDo.querySelectorAll('.linkTransfer')
  let ulProgress = document.querySelector('.in_progress')
  console.log(ulToDo)
  for (let elem of moveButtons){
    elem.onclick = function moveTask(event){        
    if (ulProgress.children.length < 5){              
    let li= event.target.parentElement
    ulProgress.append(li);    
    moveTaskFromProgress()                                   
    }else { 
    alert ('Please complete any task and move it to the Done List before adding 6th task to the InProgress List.')       
    } 
    }
  } 
}

function moveTaskFromProgress(){
  let ulProgress = document.querySelector('.in_progress')
  let moveButtons=ulProgress.querySelectorAll('.linkTransfer')
  let ulDone = document.querySelector('.done') 
  for (let elem of moveButtons){ 
      elem.onclick = function moveTask(event){              
      let li= event.target.parentElement
      ulDone.append(li);    
      moveTaskFromDone()                        
      }
  }
}

function moveTaskFromDone(){
  let ulDone = document.querySelector('.done')
  let moveButtons=ulDone.querySelectorAll('.linkTransfer')
  let ulToDo = document.querySelector('.to_do')
  for (let elem of moveButtons){  
      elem.onclick = function moveTask(event){              
      let li= event.target.parentElement
      ulToDo.append(li);    
      moveTaskFromToDoList()                         
      }
  }
}
