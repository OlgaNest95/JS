let personList = [
  {id: 10, name: 'Vasya', age: 28, child: {name: 'Valera'}},
  {id: 11, name: 'Kolya', age: 78, child: {}},
  {id: 12, name: 'Anna', age: 37, child: {name: 'Sveta'}},
  {id: 13, name: 'Zoya', age: 22, child: {name: 'Sergey'}},
  {id: 14, name: 'Arkadiy', age: 45, child: {}},
];

function isPersonHasNoChild (id) {
  for (let i=0; i < personList.length; i++)  { 
      if (personList[i].id === id) { 
      for (let key in personList[i].child) { 
      
      return false;}      
      return true;}        
      };
};


function getChild (id) {
  for (let i=0; i < personList.length; i++)  { 
    if (personList[i].id === id) {
       if (!isPersonHasNoChild(id)) continue;
              personList[i].child.name = prompt ('Please, enter name of you children'); 
      
      } ;  };
};


for (let i=0; i < personList.length; i++)  {
  let id =personList[i].id;
  console.log (isPersonHasNoChild(id));
  console.log (getChild(id));
 
};

console.log (personList);




















































