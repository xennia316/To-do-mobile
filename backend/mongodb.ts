const mongoose = require("mongoose");

const connectdb = () => {
	mongoose
		.connect("mongodb://127.0.0.1:27017/todo_app", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log("Connected");
		})
		.catch((error: any) => {
			console.log(error);
		});
};

module.exports = connectdb;
