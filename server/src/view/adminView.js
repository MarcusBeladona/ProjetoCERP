function render(admin) {
	return {
		id: admin._id,
		nome: admin.nome,
		email: admin.email,
	};
}

function renderAll(admin) {
	return admin.map(render);
}

module.exports = { render, renderAll };
