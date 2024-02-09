const exp = require("express");

const router = express.Router();

const {
	getTodos,
	createTodo,
	deleteTodo,
	moveTodo,
} = require("../controllers/todoController");

router.get("/todos", getTodos);

router.post("/todo/new", createTodo);

router.delete("/todo/delete/:id", deleteTodo);

router.get("/todo/toggleStatus/:id", moveTodo);

module.exports = router;
