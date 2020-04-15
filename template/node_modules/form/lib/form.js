(function () {
	'use strict';

	var
		async = require('async'),
		validator = require('validator'),
		check = validator.check,
		sanitize = validator.sanitize,
		Form = function (fields) {
			this.fields = fields;
		};

	module.exports.Validator = new validator.Validator();
	module.exports.Filter = new validator.Filter();


	Form.prototype.addTask = function (tasks, data, field, handlers) {
		tasks[field] = function (callback) {
			async.concatSeries(
				handlers,
				function (task, callback) {
					task(data, field, function (result) {
						if (result !== undefined) {
							callback(result, undefined);
						} else {
							callback(undefined, result);
						}
					});
				},
				function (error, results) {
					if (error !== undefined) {
						callback(undefined, error);
					} else {
						callback(undefined, undefined);
					}
				}
			);
		};
	};

	Form.prototype.process = function (request, callback) {
		var
			data = {},
			tasks = {},
			field;

		for (field in this.fields) {
			data[field] = request[field];
			this.addTask(tasks, data, field, this.fields[field]);
		}
		async.parallel(tasks, function (error, results) {
			var
				hasErrors = false,
				field;

			for (field in results) {
				if (results[field] === null || results[field] === undefined) {
					delete (results[field]);
				} else {
					hasErrors = true;
				}
			}
			if (hasErrors) {
				callback(results, data);
			} else {
				callback(undefined, data);
			}
		});
	};

	module.exports.filter = function (filter) {
		var args = Array.prototype.slice.call(arguments, 1);
		return function (fields, field, callback) {
			var container = sanitize((fields[field] !== undefined) ? fields[field] : '');
			container.fields = fields;
			container.field = field;
			fields[field] = filter.apply(container, args);
			callback();
		};
	};

	module.exports.validator = function (validator) {
		var
			args = Array.prototype.slice.call(arguments, 1, arguments.length - 1),
			message = arguments[arguments.length - 1];

		args.push(function() {});

		return function (fields, field, callback) {
			var container = check((fields[field] !== undefined) ? fields[field] : '', message);
			container.fields = fields;
			container.field = field;
			args[args.length - 1] = function (error) {
				if (error) {
					callback(error);
				} else {
					callback();
				}
			};
			try {
				if (validator.apply(container, args)) {
					callback();
				}
			} catch (e) {
				callback(e.message);
			}
		};
	};

	module.exports.create = function (fields) {
		return new Form(fields);
	};

}());