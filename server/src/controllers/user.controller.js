const User = require("../models/User");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { SECRET } = require("../config");
const UserRole = require("../models/UserRole");


const signUp = async (req, res) => {
  if (
    _.isNil(req.body.name) ||
    _.isNil(req.body.lastName) ||
    _.isNil(req.body.mail) ||
    _.isNil(req.body.password) ||
    _.isNil(req.body.userType) ||
    _.isNil(req.body.profileImage) ||
    _.isNil(req.body.role)
  ) {
    return res.status(404).send({ msg: "Faltan datos" });
  }
  if (req.body.password.length < 6) {
    return res
      .status(404)
      .send({ msg: "La contrasena debe contener al menos 6 caracteres" });
  }
  const { name, lastName, mail, password, userType, profileImage } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      lastName,
      password: hashPassword,
      mail,
      profileImage,
    });
    const role = new UserRole({
      userType: userType,
      role: req.body.role,
    });
    newUser.userRole = role._id;
    await role.save();

    newUser
      .save()
      .then((u) => {
        res.send({
          name: u.name,
          lastName: u.lastName,
          roleInfo: { userType: role.userType, role: role.role },
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
  console.log("----------user----------");
  if (_.isNil(req.body.mail) || _.isNil(req.body.password)) {
    return res.send({ msg: "Faltan datos" });
  }
  const { mail, password } = req.body;
  const user = await User.findOne({ mail });
  console.log(user);
  if (user) {
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      const token = jwt.sign({ id: user._id, mail: user.mail }, SECRET, {
        expiresIn: 60 * 60 * 24,
      });
      return res.send({
        auth: true,
        token,
        user: {
          name: user.name,
          lastName: user.lastName,
          mail: user.mail,
        },
      });
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

const tokenInfo = async (req, res) => {
  try {
    if (!req.get("Authorization")) {
      return res
        .status(404)
        .send({ auth: false, error: "A token is required for authentication" });
    }
    const token = req.get("Authorization").substring(7);
    const verifyToken = jwt.verify(token, SECRET);
    const user = await User.findById(verifyToken.id);
    if (!user) {
      return res
        .status(404)
        .send({ auth: false, msg: "Authentication failed" });
    }
    return res.send({
      auth: true,
      user: {
        name: user.name,
        lastName: user.lastName,
        id: user._id,
        userRole: user.userRole,
        profileImage: user.profileImage,
      },
    });
  } catch (e) {
    return res.status(404).send({ auth: false, error: e.message });
  }
};

const userInfo = async (req, res) => {

  const user = await User.findById(req.params.id,"name lastName profileImage description profileBanner saved mail")
    .lean()
    .populate({
      path: "posts",
      select: {
        userId: 1,
        comments: 1,
        likes: 1,
        text: 1,
        userId: 1,
      },
      populate: [
        {
          path: "userId",
          select: {
            name: 1,
            lastName: 1,
            profileImage: 1,
          },
        },

        {
          path: "comments",
          select: {
            userId: 1,
            likes: 1,
            text: 1,
            replies: 1,
          },
          populate: [
            {
              path: "userId",
              select: { name: 1, lastName: 1 , profileImage: 1},
            },
            {
              path: "replies",
              select: {
                text: 1,
                userId: 1,
              },
              populate: {
                path: "userId",
                select: { name: 1, lastName: 1, profileImage: 1 },
              },
            },
          ],
        },
      ],
    })
    .lean()
    .populate("userRole")
    .lean()
    .populate("following", { name: 1, lastName: 1, profileImage: 1 })
    .lean()
    .populate("followers", { name: 1, lastName: 1, profileImage: 1 });
  if (!user) {
    return res.status(404).send({
      error: "User does not exists",
    });
  }
  
  const obj = user;
  if(req.params.id == req.userId){
    return res.send({auth: true, userData:obj, profileOwner: true})
  }
  
 return res.send({auth: true, userData: obj, profileOwner: false});
};
module.exports = { signUp, signIn, tokenInfo, userInfo };
