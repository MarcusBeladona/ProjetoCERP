const app = require("./config/express");
const db = require("./config/mongoose");

// Express
app.listen(3000, function () {
	console.log("Express online: localhost:3000");
});

// MongoDB
db.setup(
	"mongodb+srv://projetoCERP:Utw8ufjB6l8Kp1SU@projetocerp.1pv8p.mongodb.net/ProjetoCERP?retryWrites=true&w=majority"
);
