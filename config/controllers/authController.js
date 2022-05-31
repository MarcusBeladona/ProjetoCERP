// let Admin = require('../models/adminModel.js'); DESCOMENTA QUANDO FIZER O MODEL
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

module.exports.sign = function (req, res) {
    let usuario = req.body.usuario;
    let senha_secreta = req.body.senha;
    let promise = Admin.findOne({ usuario:usuario });
  
    promise.then(function (usuario) {
        if (!bcrypt.compareSync(senha_secreta, admin.senha)) {
            res.status(401).send("Credenciais inválidas");
            
        } else {
            let token = jwt.sign({usuario: admin.usuario, senha:admin.senha},"CERP");
            res.status(200).json({ token: token });
        }
      })
      .catch(function (error) {
        res.status(401).send("Credenciais inválidas!");
      });
  };
  
  module.exports.check = function (req, res, next) {
    let token = req.headers.token;
  
    jwt.verify(token, "CERP", function (err, decoded) {
      if (err) {
        res.status(401).json({ mensagem: "Credencial inválida!" });
      } else {
        next();
      }
    });
  };
  