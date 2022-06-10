const mongoose = require("mongoose");

function setup(uri) {
	mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

	mongoose.connection.on("connected", () => {
		console.log("Conectado em " + uri);
	});

	mongoose.connection.on("disconnected", () => {
		console.log("Desconectado de " + uri);
	});
	mongoose.connection.on("error", (erro) => {
		console.log("Erro na conexão: " + erro);
	});

	mongoose.set("debug", true);
}

module.exports = { setup };
