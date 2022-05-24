let  Administrador = require('..models/adm.model.js');

module.exports.inserir_adm = function (req, res) {
    let adm = new Administrador(
        user: req.body.user,
        senha: req.body.senha
    );
    let promise = Adm.create(adm);
    promise.then(
        function(adm) {
            res.status(201).json(adm);
        }
    ).catch(
        function(error) {
            res.status(500).json(error);
        }
    )
}

module.exports.listar_adm = function (req, res) {
    let promise = Adm.find();
    promise.then(
        function(adm){
            res.json(adm);
        }
    ).catch(
        function(error){
            res.status(404).json(error)
        }
    )
}