/*///array of  five colors
let colors=["blue","orange","green","red","yellow"]
//access of first color in array and third one
console.log(colors[0]);
console.log(colors[2]);
colors[4]='ultraviolet';
console.log(colors);
let fourthColor='red';
colors.unshift("purple");
colors.push("aliceblue");
console.log(colors);
console.log(colors.length);
colors.pop()
console.log(colors.length);
for(let i=0; colors.length>i; i++){
	console.log(colors[i]);
}
for(let i=0;colors.length>i;i++){
	console.log(i,colors[i]);
}
let lastcolor=colors[colors.length-1];
console.log(lastcolor);*/
/*function function1(srtr){
let vowel_list=
let count=0;
}*/
function function2(arr){
	arr=[];
	for(let i=1; i<=100;i++){
if (i%2===0) {
	arr.push(i);
	console.log(i)
}
	}
}
(function2());
function add(num1,num2){
	let sum=num1+num2;
	console.log('sum=' ,sum);
	mult(num1,num2);
}
function mult(num1,num2){
	let multp=num1*num2;
	console.log('product=',multp);
}
add(1,2);

function evens()
evens.filter()