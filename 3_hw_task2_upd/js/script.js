 var persons = [
    {id: 10, name: 'Vasya', age: 28},
    {id: 11, name: 'Kolya', age: 16, parentId: 14},
    {id: 12, name: 'Anna', age: 37},
    {id: 13, name: 'Zoya', age: 9, parentId: 12},
    {id: 14, name: 'Arkadiy', age: 45},
];

var adults =[];
var children =[];

for (i=0; i<persons.length; i++) {   
    if (persons [i].age >=18 ){        
        adults.push(persons [i]) ;
        persons [i].profession = prompt (`Dear ${persons [i].name}, please enter your profession`);
    }   else children.push(persons [i]);
 
};

for (i=0; i<adults.length; i++) {
    for (j=0; j<children.length; j++) {            
    if (adults [i].id == children [j].parentId ) {
            adults [i].children = children [j].name ;
        };
    };            
};
     
console.log (persons);
console.log (adults);
console.log (children);













































