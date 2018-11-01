function check(num1,num2,num3){
	if (num1==num2 && num2==num3) {
		return 30;
	}
	if (num1==num2 || num2==num3 || num3==num1) {
		return 20;
	}else{
		return 40;
	}
}
console.log(check(40,40,40));
console.log(check(45,46,7));
console.log(check(48,7,18));
//question
function t_convert(number){
	let hours=Math.floor(number/60);
	let minutes=number%60;
	return hours+":"+minutes;
}
console.log(t_convert(450));
/*var a=Math.ceil(5.2);
console.log(a);*/
/*var student={
	name:'claire',
	age:'22years old',
	skills:['hardware','software','network administator']
};
student.bio='am just student';
//console.log(student["name"]);
//console.log(student.message='hello')*/
let triangle={
	a:2,
	b:5,
	c:7,
	area:function(){
		return "area of triangle"+(this.a*this.b)/2;
	}
};
console.log(triangle);
