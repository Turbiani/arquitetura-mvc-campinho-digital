const express = require('express');
const router = express.Router();

// IMPORTANDO NOSSA ENTIDADE
const Participante = require('../models/participante');

// INSERINDO DADOS NO NOSSO PARTICIPANTE
const participante = new Participante('Vivo', 'suporte@vivo.com.br');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('participantes', { ...participante });
});

router.get('/cadastro', function(req, res, next) {
  res.render('cadastroParticipantes');
});


router.post('/cadastro', function(req, res, next) {
  participante.nome = req.body.nome;
  participante.email = req.body.email;
  return res.redirect('/participantes');
});

module.exports = router;
