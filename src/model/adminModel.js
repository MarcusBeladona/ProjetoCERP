const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
	id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	nome: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	senha: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("admin", adminSchema);
