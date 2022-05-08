const authController = require("./authController");
const adminModel = require("../model/adminModel");
const adminView = require("../view/adminView");
const bcrypt = require("bcrypt");

getAdmin = (req, res) => {
	adminModel
		.find()
		.exec()
		.then(a => res.status(200).json(adminView.renderAll(a)))
		.catch(e => res.status(500).send(e));
};

getAdminById = (req, res) => {
	adminModel
		.findById(req.params.id)
		.exec()
		.then(a => res.status(200).json(adminView.render(a)))
		.catch(e => res.status(404).send(e));
};

postAdmin = (req, res) => {
	adminModel
		.create({
			nome: req.body.nome,
			email: req.body.email,
			senha: bcrypt.hashSync(req.body.senha, 10),
		})
		.then(a => res.json(adminView.render(a)))
		.catch(e => res.status(500).send(e));
};

deleteAdmin = (req, res) => {
	const token = authController.decode(req.headers.token);

	adminModel
		.findById(req.params.id)
		.exec()
		.then(admin => {
			if (token.adminId == admin._id) {
				adminModel
					.findByIdAndDelete(req.params.id)
					.exec()
					.then(a => res.status(200).json("Deleted"))
					.catch(e => res.status(400).send(e));
			} else res.status(400).send("Usuário Inválido.");
		})
		.catch(e => res.status(404).send(e));
};

module.exports = {
	getAdmin,
	getAdminById,
	postAdmin,
	deleteAdmin,
};
