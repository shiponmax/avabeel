//console.log("Window Location: ",window.location);

const myKeysValues = window.location.search;

//console.log("Keys & Values: ",myKeysValues);


const urlPrams = new URLSearchParams(myKeysValues);

const param1 = urlPrams.get('email');
const param2 = urlPrams.get('password');

//console.log("Name: ",param1);
//console.log("Age: ",param2);


// http://127.0.0.1:5502/index.html?name=shiponislam90@gmail.com&age=max111213


