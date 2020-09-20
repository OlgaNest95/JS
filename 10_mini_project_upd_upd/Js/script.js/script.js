let addButtun = document.querySelector('button');
addButtun.addEventListener('click', function createToDoList(){
  if (form.elements.task.value==''|| form.elements.date.value=='' ){ 
  alert ('Please fill in task and date')}
  else{addTaskInToDoList();
       moveTaskFromToDoList();
       deleteTask ()
       clearInputArea()
       renewToDoArray()
  }
});

function addTaskInToDoList(){
  let task = form.elements.task.value
  let date = form.elements.date.value
  let ul = document.querySelector('.to_do') 
  let content = `${task} ${date}` 
  ul.append(createListElement('li',content))   
};

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

function moveTaskFromToDoList(){    
  let toDoList = document.querySelector('.to_do')
  let moveButtons=toDoList.querySelectorAll('.linkTransfer')
  let inProgressList = document.querySelector('.in_progress')
  for (let elem of moveButtons){
  elem.onclick = function moveTask(event){        
  if (inProgressList.children.length < 5){              
  let li= event.target.parentElement
  inProgressList.append(li);    
  moveTaskFromProgress() 
  renewToDoArray()
  renewInProgressArray ()
  }else { 
  modalWarningForMoving()       
  }}
  } 
}

function modalWarningForMoving (){
  let modal = document.querySelector('.modal')
  let span = document.querySelector('.close')
  modal.style.display="block"
  span.onclick=function(){
  modal.style.display="none"
  }    
}

function moveTaskFromProgress(){
  let inProgressList = document.querySelector('.in_progress')
  let moveButtons=inProgressList.querySelectorAll('.linkTransfer')
  let doneList = document.querySelector('.done') 
  for (let elem of moveButtons){ 
      elem.onclick = function moveTask(event){              
      let li= event.target.parentElement
      doneList.append(li);   
      moveTaskFromDone() 
      renewInProgressArray()
      renewDoneArray()   
      }
  }
}

function moveTaskFromDone(){
  let doneList = document.querySelector('.done')
  let moveButtons=doneList.querySelectorAll('.linkTransfer')
  let toDoList = document.querySelector('.to_do')
  for (let elem of moveButtons){  
      elem.onclick = function moveTask(event){              
      let li= event.target.parentElement
      toDoList.append(li);    
      moveTaskFromToDoList()   
      renewDoneArray()
      renewToDoArray()                      
      }
  }
}

function deleteTask (){
  let deleteButtons=document.querySelectorAll('.linkDelete')
  for (let elem of deleteButtons){
  elem.addEventListener('click',function (event) {
    if (elem.parentElement.parentElement.classList.value ==="in_progress list") {
      modalWarningForDelete(event.target.parentElement)      
    } else {      
      if (event.target.parentElement.parentElement.classList.value ==="to_do list" ){
      event.target.parentElement.remove()
      renewToDoArray()
      }
      if (event.target.parentElement.parentElement.classList.value ==="done list" ){
      event.target.parentElement.remove()
      renewDoneArray()
      }} 
  })
  }
}

function modalWarningForDelete (elememtForDelete){
  let modal = document.querySelectorAll('.modal')
  let span = document.querySelectorAll('.close')
  let buttonsModal = modal[1].querySelectorAll('button')
  modal[1].style.display="block"
  span[1].onclick=function(){
  modal[1].style.display="none"
  } 
  buttonsModal[0].onclick=function(){
  modal[1].style.display="none"
  elememtForDelete.remove()
  renewInProgressArray ()       
  }
  buttonsModal[1].onclick=function(){
  modal[1].style.display="none"  
  } 
}

function clearInputArea(){
  let task = document.form.elements.task
  let date = document.form.elements.date
  task.value='';
  date.value='';  
}

function activateButtonsClearAllList(){
  let containers = document.querySelectorAll('.container')
  let clearButtuns = containers[1].querySelectorAll('button');
  for (let elem of clearButtuns){ 
    if (elem.name = 'clearAll'){
    elem.addEventListener("click", function(){
    clearAllList(elem.previousElementSibling)
    renewToDoArray()
    renewInProgressArray()
    renewDoneArray()
  })
  }}
};
activateButtonsClearAllList() 

function clearAllList(ulList){
  if (ulList.className !== "in_progress list"){
    ulList.innerHTML = ''
  } else {
    if (confirm (`Are you sure you want to delete all the tasks from the Progress list?`)){
    ulList.innerHTML = '';
    }
  } 
}

function focusBlurInputArea(){
  let task = document.form.elements.task
  let date = document.form.elements.date
  task.onfocus=function(){
    this.style.borderColor='#80a6c8'
    this.value='';
  }
  date.onfocus=function(){
    this.style.borderColor='#80a6c8'
    this.value='';
  }
  task.onblur=function(){
    this.style.borderColor=''
  }
  date.onblur=function(){
    this.style.borderColor=''
  }
}
focusBlurInputArea()

let toDoListArray = []
let inProgressListArray =[]
let doneListArray =[]

function takeInformationFromLocalStarage(){
    if (localStorage.getItem('toDoList')!=undefined){
    toDoListArray= JSON.parse(localStorage.getItem('toDoList'))
    let toDoListForLocalStorage = document.querySelector('.to_do')
    toDoListForLocalStorage.innerHTML= toDoListArray.join(" ")
    moveTaskFromToDoList();
    deleteTask ()
    clearInputArea()
    }

    if (localStorage.getItem('inProgressList')!=undefined){
    inProgressListArray= JSON.parse(localStorage.getItem('inProgressList'))
    let inProgressListForLocalStorage = document.querySelector('.in_progress')
    inProgressListForLocalStorage.innerHTML= inProgressListArray.join(" ")
    moveTaskFromProgress()
    deleteTask ()
    clearInputArea()
    }

    if (localStorage.getItem('doneList')!=undefined){
    doneListArray= JSON.parse(localStorage.getItem('doneList'))
    let doneListForLocalStorage =  document.querySelector('.done')
    doneListForLocalStorage.innerHTML=  doneListArray.join(" ")
    moveTaskFromDone()
    deleteTask ()
    clearInputArea()
    }
}
takeInformationFromLocalStarage()

function renewToDoArray(){
  let toDoList = document.querySelector('.to_do')
  let tasksForLocalStorageToDo = toDoList.children
  let tasksForLocalStorageToDoArray = Array.from(tasksForLocalStorageToDo)
  let toDoListArray = []
  if (tasksForLocalStorageToDoArray.length !=0){
    for (let i = 0; i < tasksForLocalStorageToDoArray.length ; i++){
    toDoListArray[i]=tasksForLocalStorageToDoArray[i].outerHTML
    localStorage.setItem("toDoList", JSON.stringify(toDoListArray))
  }} else{localStorage.removeItem("toDoList")
  }
}

function renewInProgressArray (){
  let inProgressList = document.querySelector('.in_progress')
  let tasksForLocalStorageinProgress = inProgressList.children
  let tasksForLocalStorageinProgressArray = Array.from(tasksForLocalStorageinProgress)
  let inProgressListArray =[]
  if (tasksForLocalStorageinProgressArray.length !=0){
    for (let i = 0; i < tasksForLocalStorageinProgressArray.length ; i++){
    inProgressListArray[i]=tasksForLocalStorageinProgressArray[i].outerHTML
    localStorage.setItem("inProgressList", JSON.stringify(inProgressListArray))
  }} else{localStorage.removeItem("inProgressList");
  }
}

function renewDoneArray(){
  let doneList = document.querySelector('.done')
  let tasksForLocalStorageDone = doneList.children
  let tasksForLocalStorageDoneArray = Array.from(tasksForLocalStorageDone)
  let doneListArray =[]
  if (tasksForLocalStorageDoneArray.length !=0){
    for (let i = 0; i < tasksForLocalStorageDoneArray.length ; i++){
    doneListArray[i]=tasksForLocalStorageDoneArray[i].outerHTML
    localStorage.setItem("doneList", JSON.stringify(doneListArray))
  }} else{localStorage.removeItem("doneList");
  }
}
