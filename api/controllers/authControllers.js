const User = require("../models/userModel");
const bcrypt = require('bcrypt')

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username)
      return res
        .status(400)
        .json({ error: "El nombre de usuario es obligatorio" });
    if (!password)
      return res.status(400).json({ error: "La contraseña es obligatoria" });
    const existingUsername = await User.findOne({ username });
    if (existingUsername)
      return res.status(400).json({ error: "El usuario ya existe" });
    const newUser = new User({
        username,
        password
    })
    await newUser.save()
    res.status(201).json({message: 'Usuario creado correctamente'})
  } catch (error) {
    res.status(500).json({error: 'Error en la creación del usuario', details: error.message})
  }
};

const login = async (req, res) => {
  try {
    const {username, password} = req.body
    if (!username || !password) {
      return res.status(400).json({error: 'Faltan datos obligatorios'})
    }
    const existingUsername = await User.findOne({username})
    if (!existingUsername) {
      return res.status(404).json({error: 'Usuario no encontrado'})
    }
    if (!bcrypt.compare(password, existingUsername.password)) {
      return res.status(401).json({error: 'Contraseña incorrecta'})
    }

    res.status(200).json({message: 'Usuario autenticado'})
  }catch(error) {
    res.status(500).json({error: error.message})
  }
}

module.exports = {
  login
};
