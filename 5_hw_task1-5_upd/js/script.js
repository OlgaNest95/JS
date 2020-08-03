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
let arrayBoolean =[];
let arrayString=[];
let arrayNumber =[];
function createArray (type){
  
  if (type ===  "boolean"){
   arrayBoolean=data.filter(function(item){
   return typeof item === "boolean";  
      
   });
   };
  if (type ===  "string"){
    arrayString = data.filter(function(item){
    return typeof item === "string"; 
    }    );
   };
  if (type ===  "number"){
    arrayNumber= data.filter(function(item){
    return typeof item === 'number' ;     
    }   
    );
    }; 
};
createArray('boolean');
createArray('string');
createArray('number');
console.log(arrayBoolean);
console.log(arrayString);
console.log(arrayNumber);

let newArrayBoolean=[];
let newArrayNumber=[];
let newArrayString=[];

function createNewArrayBoolean (){
  newArrayBoolean=arrayBoolean.map(function(item) {return item=!item});
};

createNewArrayBoolean();
console.log(newArrayBoolean);

function createNewArrayNumber (){
  newArrayNumber=arrayNumber.map(function(item) {return item*2}   );
};

createNewArrayNumber ();
console.log(newArrayNumber);

function createNewArrayString (a,b){
let string = arrayString.join(',');
console.log(string);
for (let char of string) {
if (char===a){
 string = string.replace(a,b);
 }
 };
console.log(string);
 newArrayString = string.split(',');}

createNewArrayString('о','Л');
console.log(newArrayString);

//3
person = {};

function createObjPerson (){
person.name = prompt('Please, enter you name.');
person.surname = prompt('Please, enter you surname.');
person.age = +prompt('Please, enter you age.');

// Также напрямую вставлять в условие функцию пользовательского ввода, такое себе. Запиши результат отдельно куда-нибудь и потом передай ?????????????
if (confirm ('Do you have spouse?')){
  person.spouse = {};
  person.spouse.name = prompt('Please, enter you spouse name.');
  person.spouse.age = +prompt('Please, enter you spouse age.');
};

person.profession = prompt('Please, enter you profession.');
};

function arrayChildren (){
  if (confirm ('Do you have children?')){
  person.children = [];
  numberOfGhilgern=+prompt('How many children do you have?');
  for(i=0;i<numberOfGhilgern;i++){
    person.children[i]= {};       
    person.children[i].name = prompt('Please, enter you children name.');
    person.children[i].age = +prompt('Please, enter you children age.')
} ;
};

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
  maxage=this.familyMembers[i].age 
};
  if (this.familyMembers[i].age === maxage){
    this.theOldestFamilyMember = this.familyMembers[i];
    } 
 };
console.log(this.theOldestFamilyMember);;
};
family.findTheOldestFamilyMember = findTheOldestFamilyMember ;
family.findTheOldestFamilyMember();
console.log(family);


//1
let arrayBeforeChange= [];
let arrayAfterChange= [];

function createNewArray (number, rate){
  for (i=1; i<=number;i++) {
  arrayBeforeChange.push (+prompt(`Please, enter the element into array`));
  };
  let answer = prompt ('Do you want to increase or decrease the elements in the array? Please, put in the word: increase or decrease').toLowerCase();

   switch (answer) {
   
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

createNewArray(3,2);
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
