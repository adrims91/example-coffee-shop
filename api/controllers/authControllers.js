const User = require("../models/userModel");

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

module.exports = {
  register,
};
