const adminModel = require("../model/adminModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

sign = (req, res) => {
	adminModel
		.findOne({
			email: req.body.email,
		})
		.then(admin => {
			if (bcrypt.compareSync(req.body.senha, admin.senha)) {
				let token = jwt.sign({ adminId: admin._id, nome: admin.nome, email: admin.email }, "piw2022");
				res.status(200).json({ token: token, nome: admin.nome, id: admin._id });
			} else res.status(401).send("NOT OK");
		})
		.catch(e => res.status(404).send("Not Found: " + e));
};

check = (req, res, next) => {
	let token = req.headers.token;
	jwt.verify(token, "piw2022", (err, decoded) => {
		if (!err) {
			next();
		} else {
			res.status(401).json("Não autorizado.");
		}
	});
};

decode = token => {
	return jwt.decode(token);
};

module.exports = {
	sign,
	check,
	decode,
};
