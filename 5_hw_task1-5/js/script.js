//4
var data= [
  'молоко', 
  34, 
  717, 
  false, 
  'копы', 
  true, 
  74, 
  108, 
  'погроммист', 
  'котик', 
  'мемчик', 
  true, 
  true, 
  666, 
  false
];
arrayBoolean=[];
arrayString=[];
arrayNumber=[];
data.forEach(function(item){
  if(typeof item === "boolean" ){
    arrayBoolean.push (item);
  }
  if(typeof item === "string" ){
    arrayString.push (item);
  }
  if(typeof item === 'number' ){
    arrayNumber.push (item);
  }
});

let newArrayBoolean=arrayBoolean.map(function(item) {return item=!item});
let newArrayNumber=arrayNumber.map(function(item) {return item*2}   );
let string = arrayString.join(',');
for (let char of string) {
if (char==='о'){
 string = string.replace('о','Л');
}};
let newArrayString = string.split(',');


console.log(arrayBoolean);
console.log(newArrayBoolean);
console.log(arrayString);
console.log(newArrayString);
console.log(arrayNumber);
console.log(newArrayNumber);



//3
person = {};

function createObjPerson (){
person.name = prompt('Please, enter you name.');
person.surname = prompt('Please, enter you surname.');
person.age = +prompt('Please, enter you age.');

if (confirm ('Do you have spouse?')===true){
  person.spouse = {};
  person.spouse.name = prompt('Please, enter you spouse name.');
  person.spouse.age = +prompt('Please, enter you spouse age.');
} else {};
person.profession = prompt('Please, enter you profession.');
};

function arrayChildren (){
  if (confirm ('Do you have children?')===true){
  person.children = [];
  numberOfGhilgern=+prompt('How many children do you have?');
  for(i=0;i<numberOfGhilgern;i++){
    person.children[i]= {};       
    person.children[i].name = prompt('Please, enter you children name.');
    person.children[i].age = +prompt('Please, enter you children age.')
} ;
}else {};

};
  

createObjPerson();
arrayChildren();
console.log (person);



//5

let family = {
  amount: 5,
  familyMembers: [
      {name: 'Borya', age: 15},
      {name: 'Tolya', age: 54},
      {name: 'Anjela', age: 45},
      {name: 'Snejana', age: 14},
      {name: 'Gavriil', age: 24},
],
};

 function findTheOldestFamilyMember(){
  let maxage=0;
  for (let i=0; i < this.familyMembers.length; i++)  { 
  if (this.familyMembers[i].age >maxage) { 
  maxage=this.familyMembers[i].age };
  } 
  for (let i=0; i < this.familyMembers.length; i++)  { 
  if (this.familyMembers[i].age === maxage){
    this.theOldestFamilyMember =`${this.familyMembers[i].name}`
  }};
};
family.f = findTheOldestFamilyMember ;
family.f();
console.log(family);


//1
let arrayBeforeChange= [];
let arrayAfterChange= [];

function createArray (number, rate){
  for (i=1; i<=number;i++) {
  arrayBeforeChange.push (+prompt(`Please, enter the element into array`));
  };

  switch (prompt ('Do you want to increase or decrease the elements in the array? Please, put in the word: increase or decrease')) {
    case 'increase':
    arrayBeforeChange.forEach( function(item){
    arrayAfterChange.push (item+rate);
  
  } );  break;
    case 'decrease':
    arrayBeforeChange.forEach( function(item){
    arrayAfterChange.push (item-rate);
  } );  break;
  default:
    alert( 'There are no such opportunities' );
    };
};

createArray(3,2);
console.log(arrayBeforeChange);
console.log(arrayAfterChange);


//2
let strOne =`невероятно`;
let strTwo =`аплодисменты артисту`;

function changeStrOne(){
  return (strOne.slice(2));
}
let newStrOne = (changeStrOne());
console.log(newStrOne);

function changeStrTwo(){
  return (strTwo.substring(19,13));
};
let newStrTwo = (changeStrTwo());
console.log(newStrTwo);
