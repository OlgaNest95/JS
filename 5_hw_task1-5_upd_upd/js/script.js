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

function createArray (){
  data.filter(function(item){
  if  (typeof item === "boolean") {
    arrayBoolean.push(item);
   };    
  if  (typeof item === "string") {
    arrayString.push(item);
   }; 
  if  (typeof item === "number") {
    arrayNumber.push(item);
   };  
   });
  };
createArray();
console.log(arrayBoolean);
console.log(arrayString);
console.log(arrayNumber);

let newArrayBoolean=[];
let newArrayNumber=[];
let newArrayString=[];

function createNewArrayBoolean (){
 return arrayBoolean.map(function(item) {return item=!item});
};

newArrayBoolean=createNewArrayBoolean();
console.log(newArrayBoolean);

function createNewArrayNumber (){
  return arrayNumber.map(function(item) {return item*2}   );
};
newArrayNumber=createNewArrayNumber ();
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
  maxage=this.familyMembers[i].age; 
  this.theOldestFamilyMember = this.familyMembers[i];
};
};
let theOldestFamilyMemberReturn = {};
return theOldestFamilyMemberReturn = this.theOldestFamilyMember;
};
family.findTheOldestFamilyMember = findTheOldestFamilyMember ;
let theOldestFamilyMemberReturn = family.findTheOldestFamilyMember();
console.log(family);
console.log(theOldestFamilyMemberReturn);

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
let stringOne =`невероятно`;
let stringTwo =`аплодисменты артисту`;

function changeStringOne(){
  return stringOne.slice(2);
}
let newStringOne = (changeStringOne());
console.log(newStringOne);

function changeStringTwo(){
  return stringTwo.substring(19,13);
};
let newStringTwo = (changeStringTwo());
console.log(newStringTwo);