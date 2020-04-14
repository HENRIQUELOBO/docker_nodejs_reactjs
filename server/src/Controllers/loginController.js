const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const authConfig = require('../config/auth');


const { User } = require('../models');


const router = express.Router();


function generateToken(params = {}) {
  return jwt.sign({ params }, authConfig.secret, {
    expiresIn: 86400
  });
}


router.post('/register', async (req, res) => {

  const { email } = req.body;

  try {

    if (await User.findOne({ attributes: ['id'], where: { email: email } }))
      return res.status(200).send({ error: "User already exists" });

    const user = await User.create(req.body);

    user.password = undefined;


    return res.json({
      msg: 'Usuário inserido com sucesso',
      user,
      token: generateToken({ id: user.id })
    });


  } catch (err) {
    let { message, path } = err.errors[0];
    return res.status(200).send({ error: ' Campo: ' + path + ' => ' + message });
  }
});


router.post('/auth', async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ where: { email: email } });

  if (!user)
    return res.status(200).send({ error: "User not found" });


  if (!await bcrypt.compare(password, user.password))
    return res.status(200).send({ error: 'Invalid password' });


  user.password = undefined;

  res.json({
    user,
    token: generateToken({ id: user.id })
  });
});


module.exports = app => app.use('/login', router);