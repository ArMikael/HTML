	// ===================================================
//	Inheritance Pattern
// ===================================================

var Constr = function(name, age) {
	this.name = name;
	this.age = age;
};

Constr.prototype.construct = function() {
	console.log('Constructing ' + this.name + " ...");
};

var Lego = function(category, color) {
	this.category = category;
	this.color = color;
	Constr.apply(this, ['Lego Creative Suite', 12]);
};

Lego.prototype = Object.create(Constr.prototype);

var kubiki = new Constr('Kubiki', '12');
var mechanic = new Lego('Mechanic', 'Green');


// ===================================================
//	Another Practice in Inheritance Pattern
// ===================================================

function WebDesigner(name, lang) {
	this.name = name;
	this.lang = lang;
};

WebDesigner.prototype.code = function() {
	console.log("My name is " + this.name + ", and I'm coding in " + this.lang + ".");
};

var michael = new WebDesigner('Michael', 'JavaScript, AngularJS and Node.js');

function Programmer(exp, spec) {
	this.exp = exp;
	this.spec = spec;

	// WebDesigner.call(this, "Dmitry", "C, C++, TCP/IP");
};

Programmer.prototype = Object.create(WebDesigner.prototype);

Programmer.prototype.supercode = function() {
	console.log("I have " + this.exp + " of experience. I know Visual Studio and " + this.spec + ".");
};

var dmitry = new Programmer('10 years', 'debugging');

function WebArchitect(name, lang, exp, spec) {
	WebDesigner.call(this, name, lang);
	Programmer.call(this, exp, spec)
};

WebArchitect.prototype = Object.create(Programmer.prototype);

var serge = new WebArchitect('Serg', 'Angular, Backbone, NodeJS', '7 years', 'team leading');


// ===================================================
//	Mixins Pattern
// ===================================================

function Human(name) {
	this.name = name;
}

function Hero(name, special) {
	this.name = name;
	this.special = special;
}

var warrior ={
	figth: function() {
		return this.name + " is great warrior, he is fighting with evil!";
	},
	run: function() {
		return this.name + ", We have to reatreat! Run... Faaast!"
	}
}

var bard = {
	sing: function() {
		return "I know a ballad about great warrior " + this.name;
	}
};

$.extend(Human.prototype, warrior);
var conan = new Human('Conan');

$.extend(Hero.prototype, warrior, bard);
var lutik = new Hero('Lutik', 'Sing in Hebrew');


// ===================================================
//	Decorator Pattern
// ===================================================
