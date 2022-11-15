const User = require("../models/User");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { SECRET } = require("../config");

const signUp = async (req, res) => {
  if (
    _.isNil(req.body.name) ||
    _.isNil(req.body.lastName) ||
    _.isNil(req.body.mail) ||
    _.isNil(req.body.password)
  ) {
    return res.status(404).send({ msg: "Faltan datos" });
  }
  if (req.body.password.length < 6) {
    return res
      .status(404)
      .send({ msg: "La contrasena debe contener al menos 6 caracteres" });
  }
  const { name, lastName, mail, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      lastName,
      password: hashPassword,
      mail,
    });
    newUser
      .save()
      .then((u) => {
        res.send({
          name: u.name,
          lastName: u.lastName,
        });
      })
      .catch((e) => {
        res.send({ error: e.message });
      });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

const signIn = async (req, res) => {
  if (_.isNil(req.body.mail) || _.isNil(req.body.password)) {
    return res.send({ msg: "Faltan datos" });
  }
  const { mail, password } = req.body;
  const user = await User.findOne({ mail });
  if (user) {
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      const token = jwt.sign({ id: user._id, mail: user.mail }, SECRET, {
        expiresIn: 60 * 60 * 24,
      });
      return res.send({ auth: true, token });
    } else {
      return res.status(404).send({
        auth: false,
        error: "Correo electronico o contrasena incorrectos",
      });
    }
  } else {
    return res.status(404).send({
      auth: false,
      error: "Correo electronico o contrasena incorrectos",
    });
  }
};
module.exports = { signUp, signIn };
