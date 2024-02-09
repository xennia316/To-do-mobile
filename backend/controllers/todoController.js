const TodoDeclaration = require("../models/todoModel");

const getTodos = async (req, res) => {
	const todos = await TodoDeclaration.find();

	res.json(todos);
};

const createTodo = (req, res) => {
	const todo = new TodoDeclaration({
		title: req.body.title,
	});

	todo.save();

	res.json(todo);
};

const deleteTodo = async (req, res) => {
	const deleteTodo = await TodoDeclaration.findByIdAndDelete(req.params.id);
	res.json(deleteTodo);
};

const moveTodo = async (req, res) => {
	const Todo = await TodoDeclaration.findById(req.params.id);

	let status;
	if (Todo.todo) {
		status = "todo";
	} else if (Todo.inProgress) {
		status = "inProgress";
	} else if (Todo.complete) {
		status = "complete";
	}

	if (status.includes("todo")) {
		Todo.todo = false;
		Todo.inProgress = true;
		Todo.complete = false;
	} else if (status.includes("inProgress")) {
		Todo.todo = false;
		Todo.inProgress = false;
		Todo.complete = true;
	} else if (status.includes("complete")) {
		Todo.todo = true;
		Todo.inProgress = false;
		Todo.complete = false;
	} else {
		Todo.todo = true;
		Todo.inProgress = false;
		Todo.complete = false;
	}
};

exports.getTodos = getTodos;
exports.createTodo = createTodo;
exports.deleteTodo = deleteTodo;
exports.moveTodo = moveTodo;
