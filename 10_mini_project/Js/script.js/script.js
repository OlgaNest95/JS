function createListElement(tag,content){
    let element = document.createElement(tag)
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

function fillInToDoList(){
    let task = document.form.elements.task.value
    let date = document.form.elements.date.value
    let ul = document.querySelector('.to_do')
    let content = `${task} ${date}`
    ul.append(createListElement('li',content)) 
   
    deleteTask ()  
    moveTask ()
    
               
}

let addButtun = document.querySelector('button');
addButtun.addEventListener('click', fillInToDoList);


function deleteTask (){
  let deleteButtons=document.querySelectorAll('.linkDelete')
  
  for (let elem of deleteButtons){
    elem.addEventListener('click',function (event) {
     if (elem.parentElement.parentElement.classList.value ==="in_progress") {
      confirm (`Are you sure you want to delete the task from the Progress list?`);
      event.target.parentElement.remove()
   }else {event.target.parentElement.remove()}
    })
  }}
  

function moveTask (){
    let moveButtons=document.querySelectorAll('.linkTransfer')
    for (let elem of moveButtons){
       
      elem.addEventListener('click',function (event){             
            
      if (event.target.parentElement.parentElement.classList.value  === "to_do") {   
        let li1= event.target.parentElement
        let ulInProgress = document.querySelector('.in_progress')
        ulInProgress.append(li1);        
       
        alert(`1`) 
        }
                
      else if (event.target.parentElement.parentElement.classList.value ==="in_progress") {
        let li2= event.target.parentElement 
          let ulDone = document.querySelector('.done')
        ulDone.append(li2);
       alert(`2`) 
   }
               
      else if (event.target.parentElement.parentElement.classList.value  ==="done") {       
        let li3= event.target.parentElement                                
        let ulToDo = document.querySelector('.to_do')
        ulToDo.append(li3);
        alert(`3`) 
                      
              }    

        } )
        }
  
      } 


 


  

  
    /*
  function moveTask (){
    let moveButtons=document.querySelectorAll('.linkTransfer')
    for (let elem of moveButtons){
      let className =elem.parentElement.parentElement.classList.value
      console.log(className)
      if (className = `done`) {
        elem.addEventListener('click',function (event) {
              let li= event.target.parentElement
              let ulToDo = document.querySelector('.to_do')
             return ulToDo.append(li);
               })
      } 
      
      
      if (className = `in_progress`) {
        elem.addEventListener('click',function (event) {
              let li= event.target.parentElement
              let ulDone = document.querySelector('.done')
              ulDone.append(li);
               })
      }
    
    
     if (className = `to_do`) {
        elem.addEventListener('click',function (event) {
              let li= event.target.parentElement
              let ulInProgress = document.querySelector('.in_progress')
              ulInProgress.append(li);
               })
      } 
   
           

 
    }
  }
  
    
function moveTask (){
    let ulToDo = document.querySelector('.to_do')
    let moveButtonsInToDoList=ulToDo.querySelectorAll('.linkTransfer')
    for (let elem of moveButtonsInToDoList){
        elem.addEventListener('click',function (event){
        let li= event.target.parentElement                  
        let ulInProgress = document.querySelector('.in_progress')
        ulInProgress.append(li);   
        
        let ulProgress = document.querySelector('.in_progress')
        let moveButtonsInProgressList=ulProgress.querySelectorAll('.linkTransfer')
        console.log(ulProgress)
        for (let elem of moveButtonsInProgressList){
            elem.addEventListener('click',function (event){
            let li= event.target.parentElement                  
            let ulInDone = document.querySelector('.done')
            ulInDone.append(li); 
            let ulDone = document.querySelector('.done')
            let moveButtonsInDone=ulDone.querySelectorAll('.linkTransfer')
            console.log(ulDone)
            for (let elem of moveButtonsInDone){
                elem.addEventListener('click',function (event){
                let li= event.target.parentElement                  
                let ulInToDo = document.querySelector('.to_do')
                ulInToDo.append(li);   
        
              } )
    
            }
        } )
   
        
        }
      })
    
    } 

    }   
    moveTask ()


      
    elem.addEventListener('click',function (event) {
        let className = event.target.parentElement.parentElement.classList.value
          console.log(className)
          while(className= `.to_do`){
            let li= event.target.parentElement
            let ulInProgress = document.querySelector('.in_progress')
            ulInProgress.append(li);
            break; 
          } 
         while (className= `.in_progress`){
            let li= event.target.parentElement
            let ulDone = document.querySelector('.done')
            ulDone.append(li);
            break;     
          } 
          function moveTaskFromToDO (){
        let ulProgressList = document.querySelector('.in_progress')
        let moveButtonsInProgressList=ulProgressList.querySelectorAll('.linkTransfer')
     
        for (let elem of moveButtonsInProgressList){
            elem.addEventListener('click',function (event) {    
            let li= event.target.parentElement
            let ulDone = document.querySelector('.done')
            ulDone.append(li)
          
        })
        }}
      }
    

     let li= event.target.parentElement
          let ulDone = document.querySelector('.done')
          ulDone.append(li)

  let ul = document.querySelector('.to_do')
      console.log(ul)
      else {
          let lii= event.target.parentElement
          let ulTOdo = document.querySelector('.to_do')
          ulTOdo.append(lii)}
        


moveTask ()
let ulProgressList = document.querySelector('.in_progress')
if (ulProgressList.children.length>=0){moveTask2 ()}





function moveTask2 (){
let ulProgressList = document.querySelector('.in_progress')
let=ulProgressList.querySelectorAll('.linkTransfer')
console.log(moveButtonsInProgressList)
for (let elem of moveButtonsInProgressList){
    elem.addEventListener('click',function (event) {    
    let li= event.target.parentElement
    let ulDone = document.querySelector('.done')
    ulDone.append(li)
  
})
}}



        
  


/*
function fillInProgressList(){
    let ulInProgress = document.querySelector('.in_progress')
    if (ulInProgress.children.length>5){
       
          alert(`You need to complete any task and move it in Done List, before add the 6th task in Progress List.`)

        }}

if (event.target.className != 'linkTransfer') return;

    let pane = event.target.closest('li');
    pane.remove();
let a = document.querySelectorAll('a')
for (i=0;i<=a.length;i++){ 


a[i].addEventListener('click', deleteTask(event));}

for (i=0;i<=li.length;i++){
)
}
for (i=0;i<=li.length;i++){ 
    let linkDelete=li[i].querySelector('.linkDelete')
    console.log(linkDelete)
    linkDelete.addEventListener('click', function(){
    li[i].remove() } )

}








function numberOfTask(){
let li = document.querySelectorAll('.to_do')
let numberOfTask=li.length
return numberOfTask;


let p = document.querySelectorAll('p')
p[0].innerHTML=`:${numberOfTask}`
}
let  numberOfTaskToDo = numberOfTask() 
        alert(numberOfTaskToDo)

 */      




