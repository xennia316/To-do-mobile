const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const connect = require("./mongodb");

connect();

app.listen(5000, () => {
	console.log("Server is running on port 5000");
});
