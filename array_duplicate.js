// ===================================================
//	Duplicate Array
// ===================================================

var duplicate = function(arr) {
	var arr2 = arr.slice();
	var arr3 = arr.concat(arr2);
	console.log(arr3);
};

duplicate([1, 2, 3, 4, 5]);

// ===================================================
//	Question 9
// ===================================================

var a = [1,2,3,4,5,6];

console.log(typeof a); // object
console.log(typeof a === 'array'); // false
console.log(typeof a === 'object'); //true
console.log(Object.prototype.toString.call(a) === '[object Array]'); // true
console.log(Object.prototype.toString.call(a));

// ===================================================
//	Question 10
// ===================================================

var o1 = {
	name: 'Sid',
	speak: function(){
    	console.log(this.name);
	}
}

var o2 = {
	name: 'Sam',
	speak: function(){
		console.log(this.name);
	}
}

o2.speak.call(o1);

// ===================================================
//	Question 12
// ===================================================

var a = document.getElementsByTagName('a')[0];

a.onclick = function(e){
	console.log(this);
}

// ===================================================
//	Question 14
// ===================================================

var name = 'Foo';
function A(name){
	console.log(name);
    this.name = name || 'Baz';
	this.speak = function(){
		console.log(this.name);
	}
}

var a = new A(0 || this.name);
a.speak();

// ===================================================
//	7. What will be the output of each statement of Foo() ?
// ===================================================

function Boo () {
	this.bar();
	console.log('this.bar: ');
	console.log(this.bar);
	var barf = this.bar;
	barf();
	$("a").click(barf);
}

Boo.prototype.bar = function () {
	alert(this);
}

var f = new Boo();
console.log(f);
// Output will be "Boo" object that contains "bar" function
