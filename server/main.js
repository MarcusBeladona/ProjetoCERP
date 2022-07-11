const app = require("./config/express");
const db = require("./config/mongoose");

// Express
app.listen(process.env.PORT || 3010, function () {
	console.log("Express online: %d -> %s.", this.address().port, app.settings.env);
});

// MongoDB
db.setup("mongodb+srv://projetoCERP:Utw8ufjB6l8Kp1SU@projetocerp.1pv8p.mongodb.net" + "/ProjetoCERP?retryWrites=true&w=majority");
