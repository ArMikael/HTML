/**
 * AMD Pattern
 */

define('ems', ['jquery', 'Handlebars', 'handlebarsHelpers'], function(jquery, Handlebars){

// window.EMS = (function () {
	var data = {
			employees: []
		};

	/**
	 * Employee actions
	 */

	function checkIn() {
		this.lastCheckIn = (new Date()).toString();
	}

	function sayYo() {
		console.log(this.name + ': Yo, I\'m the Boss!!!');
	}

	function fireEveryone() {
		var keepInx = data.employees.indexOf(this);
		var currEmployee = data.employees.splice(keepInx, 1);

		data.employees = [];
		data.employees.push(currEmployee[0]);
	}

	//-------------------------------------------------

	/**
	 * Run a specific action for a specific employee (if exists)
	 */

	function runAction(employeeInx, action) {
		var employee = data.employees[employeeInx];

		if (employee && employee[action]) {
			employee[action]();
		}
	}

	/**
	 * Create the appropriate employee object
	 */

	function createEmployee(details) {
		var title = details.title.toLowerCase();

		// Add an action to all employee types
		details.checkIn = checkIn;

		// Privileged actions
		if (title === 'manager' || title === 'ceo') {
			details.sayYo = sayYo;
		}
		if (title === 'ceo') {
			details.fireEveryone = fireEveryone;
		}

		return details;
	}

	/**
	 * Add a new employee to the employees data (Model)
	 */

	function addEmployee(employee) {
		if (!employee.name || !employee.skill || !employee.title) {
			console.error('Employee Name, Title and Skill are mandatory.');
			return false;
		}

		employee = createEmployee(employee);
		data.employees.push(employee);
	}

	/**
	 * Update the HTML (View)
	 */

	function renderView(sourceId, targetId) {
			// Get the template HTML
		var source = $('#' + sourceId).html(),
			// Compile that HTML to prepare for processing
			template = Handlebars.compile(source),
			// Process the template, return resulting HTML string
			html = template(data);

		$('#' + targetId).html(html);
	}

	return {
		addEmployee: addEmployee,
		renderView: renderView,
		runAction: runAction
	};
// }());
});
