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
