const express = require("express");
const cors = require("cors");

const app = express();
console.log(app, "app");

app.use(express.json());
app.use(cors());

app.listen(5000, () => {
	console.log("Server is running on port 5000");
});
