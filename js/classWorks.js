// 1. Write a JavaScript program to list the properties of a JavaScript object.
var getKeys= function(obj){
  let keys=[];
  for( var key in obj){
    keys.push(key);
  }
  return keys;
}
console.log(getKeys());
/*for(let key of Object.keys(student)){
  console.log(key);*/
//}
// Sample object:
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};
// Sample Output: name,sclass,rollno
// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
console.log(student);
delete student.rollno;
console.log(student);
// Sample object:
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

// 3. Write a JavaScript program to get the length of an JavaScript object.
Object.objsize=function(myobj){
  var osize=0,key;
  for(key in myobj){
    if(myobj.hasOwnProperty(key)) 
      osize++;
  }
  return osize;
};
// Sample object :
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};
var objsize=Object.objsize(student);
console.log("size of object is:"+objsize);

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. Go to the editor

var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
  }
];
for( let i=0;i<library.length;i++){
  var book="'"+library[i].title +"'"+ 'by' +library[i].author+".";
  if (library[i].readingStatus) {
    console.log("read " +book);
  }else{
    console.log("you still need to read"  +book);
  }
}