const mongooseDeclaration = require("mongoose");
const Schema = mongooseDeclaration.Schema;

const TodoSchema = Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	todo: {
		type: Boolean,
		default: true,
	},
	inProgress: {
		type: Boolean,
		default: false,
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
