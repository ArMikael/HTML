$(function (EMS) {

	// var EMS

	/**
	 * Update the HTML based on the employees data
	 */

	function renderView() {
		EMS.renderView('tmpl-employees', 'employeesList');
	}

	/**
	 * Dummy data that should be added on load
	 */

	function addInitialData() {
		EMS.addEmployee({
			name: 'Alex Ilyaev',
			skill: 'Brainwashing',
			title: 'Teacher'
		});

		EMS.addEmployee({
			name: 'Da Boss',
			skill: 'Being da Boss',
			title: 'Manager'
		});

		EMS.addEmployee({
			name: 'Da Big Boss',
			skill: 'Being da Big Boss',
			title: 'CEO'
		});
	}

	/**
	 * Call the appropriate action handler based on the clicked button
	 */

	function employeeActionsHandler(e) {
		var $target = $(e.target),
			inx = $target.attr('data-inx'),
			action = $target.attr('data-action');

		EMS.runAction(inx, action);
		renderView();
	}

	/**
	 * Init app
	 */

	(function () {

		addInitialData();

		/**
		 * Event handlers
		 */

		// Employee action buttons click
		$('#employeesList').on('click',
			'[data-action="checkIn"],' +
			'[data-action="sayYo"],' +
			'[data-action="proto"],' +
			'[data-action="fireEveryone"]',
			employeeActionsHandler);

		// Handle new employee form `submit`
		$('#newEmployeeForm').on('submit', function (e) {
			e.preventDefault();

			var formData = $('#newEmployeeForm').serializeArray(),
				employee = {};

			// Get key=value pairs from the form
			$.each(formData, function (inx, propObj) {
				employee[propObj.name] = propObj.value;
			});

			EMS.addEmployee(employee);
			renderView();
		});

		renderView();
	}());
}(EMS));
