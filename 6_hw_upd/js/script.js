//1
let userArrayFirst = [
  {name: 'Borya', age: 15},
  {name: 'Tolya', age: 54},
  {name: 'Anjela', age: 45},
  {name: 'Snejana', age: 14},
   {name: 'Gavriil', age: 24}
  ];

userArrayFirst.forEach(function(item){if(item.age>=18) { console.log(item)}
});

let adultArrayMap = userArrayFirst.map(function(item){if(item.age>=18){return item}});
console.log(adultArrayMap);
  
let adultArrayFilter = userArrayFirst.filter(item =>item.age>=18);
console.log(adultArrayFilter);

//2

let userArray = [
  {name: 'Borya', age: 15, salary: 500},
  {name: 'Tolya', age: 54, salary: 800},
  {name: 'Anjela', age: 45, salary: 0},
  {name: 'Snejana', age: 14, salary: 700},
  {name: 'Gavriil', age: 24, salary: 300}
];

let adultArray=[];
let childrenArray=[];
function createArray(type){
  if (type==='adult'){
    adultArray = userArray.filter(item =>item.age>=18);

} else{
    childrenArray = userArray.filter(item =>item.age<18);
  }};


createArray("adult");
console.log(adultArray);
createArray("children");
console.log(childrenArray);


let sumAdultSalary =0;
let sumChildrenSalary =0;
function sumSalary(){
  adultArray.forEach(function (item){
    sumAdultSalary = sumAdultSalary + item.salary;
  
  });
  childrenArray.forEach(function (item){
    sumChildrenSalary = sumChildrenSalary + item.salary;
  
  })
  
}
sumSalary();
console.log(sumAdultSalary);
console.log(sumChildrenSalary);



let maxAdultSalary = adultArray[0].salary ;
let minAdultSalary = adultArray[0].salary ;
let maxChildrenSalary = childrenArray[0].salary ;
let minChildrenSalary = childrenArray[0].salary ;


function maxMinSalary(){
  adultArray.forEach(function (item){
    while (item.salary>maxAdultSalary){
    maxAdultSalary=item.salary};
    while (item.salary<minAdultSalary){
      minAdultSalary=item.salary};
  
  });
  childrenArray.forEach(function (item){
    while (item.salary>maxChildrenSalary){
      maxChildrenSalary=item.salary};
    while (item.salary<minChildrenSalary){
        minChildrenSalary=item.salary};
  
  });
 
  
}
maxMinSalary();
console.log(maxAdultSalary);
console.log(minAdultSalary);
console.log(maxChildrenSalary);
console.log(minChildrenSalary);

//3
let text ="dfjgdodfodoss";
let array = text.split('');
console.log(array);


function calculateNumberOfLettersForEach(letter){
  let numberOfLettersForEach=0;
  array.forEach(function(item){
      if (item===letter){
      numberOfLettersForEach= numberOfLettersForEach + 1;
     } });
 console.log(numberOfLettersForEach);
  };
  
  calculateNumberOfLettersForEach("o");



function calculateNumberOfLettersMap(letter){
  let numberOfLettersMap = 0;
  let newArray = array.map(function(item){
       if (item===letter){
     numberOfLettersMap= numberOfLettersMap + 1;
    } })
console.log(numberOfLettersMap);
 };
  
 calculateNumberOfLettersMap("o");



function calculateNumberOfLettersFilter(letter){
let newArray = array.filter(item => item===letter)
let numberOfLettersFilter = newArray.length;
console.log (numberOfLettersFilter)
};

calculateNumberOfLettersFilter("o");

//4 kaif

let  user = {
 set obgectGenerator (value) {
  this.name=value.split(" ")[0];
  this.age=value.split(" ")[1];
  this.hobbies=[value.split(" ")[2],value.split(" ")[3]];
 }
};
user.obgectGenerator = 'Sasha 17 reading PS4'
console.log(user)

//5 kaif
let clone ={};
let objectUser = {
   name: "Pete",
   age:15,
   createNewObjetUser (){ 
     if (confirm ('Do you want to change the  objectUser')){
     Object.assign( objectUser,{name: "John"});}
     else{
     clone = Object.assign({}, objectUser);}
   },
   
};
Object.defineProperty(objectUser,'createNewObjetUser',{
enumerable:false
})
objectUser.createNewObjetUser();
console.log(clone)
console.log(objectUser)

