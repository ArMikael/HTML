var EventsManager = function(emEvent, handler) {
	this.emEvent = emEvent;
	this.handler = handler;

	console.log(this.emEvent);
	console.log(this.handler);
};

// EventsManager.prototype


/*
CHALLENGE1: Please write the source code of “EventsManager” Object
*/


var MyEventsManager = new EventsManager();

/*
NOTICE: After you add your code of EventsManager you should run
all the code and test your success with the code below.
Meaning, the code below should work without any errors
*/

var Person = function (name, eventManager) {
	this.name = name;
	this.foods = [];
	this.em = eventManager;
}

Person.prototype.waitToEat = function() {
	this.em.on('breakfast:ready', this.eat, this);
}

Person.prototype.eat = function(foods) {
	console.log("i'm", this.name, "and i'm eating", foods.join(","));
	this.foods.length = 0;
	this.foods = foods;
	this.em.trigger('eat:done', this);
};

Person.prototype.finishEat = function(time) {
	console.log("i'm",this.name, "andifinishedeatingat", time);
	this.em.off("breakfast:ready", this.finishEat);
}

Person.prototype.logFood = function(){
	this.foods.forEach(function(item){
		console.log("I'm" + this.name + "andIate" + item);
	});
};

//start the app
MyEventsManager.on('eat:done', function(person){
	console.log(person.name, "finished eating");
});

MyEventsManager.on('breakfast:ready', function(menu){
	console.log("breakfast is ready with:", menu);
});

var john = newPerson('john', MyEventsManager);

john.waitToEat();

MyEventsManager.on('eat:done', function(person){
	person.finishEat(newDate());
});

var breakfast = ["scrambled eggs", "tomatoes", "bread", "butter"];

MyEventsManager.trigger('breakfast:ready', breakfast);

/*

CHALLENGE2: Please FIX the source code of “logFood” according to the instructions:

this “logFood” method throws an error.

"this.name" doesn't print the Person's name

Please suggest 2 different solutions (by adding the relevant fix code)

so "this.name" will print the relevant name

*/

john.logFood();
