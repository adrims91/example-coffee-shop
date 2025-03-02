const Menu = require("../models/menuItemsModel");

const getMenu = async (req, res) => {
  try {
    const menu = await Menu.find();
    if (menu.length === 0) {
      return res.status(400).json({ error: "No hay nada en el menú" });
    }
    res.json({ menu });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMenuItem = async (req, res) => {
    try {
        const {id} = req.params;
        const item = await Menu.findById(id)
        if (!item) {
            return res.status(404).json({error: 'Ese elemento no existe'})
        }
        res.json(item)
    }catch(error) {
        res.status(500).json({error: error.message})
    }
}

const createItem = async (req, res) => {
  try {
    const { name, description, price, imageUrl, category } = req.body;
    if (!name || !price || !category) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }
    const newItem = new Menu(req.body);
    await newItem.save();
    res.status(201).json({ message: "Elemento creado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Menu.findByIdAndUpdate(id, req.body, {
      new: true,
      omitUndefined: true,
    });
    res
      .status(200)
      .json({ message: "Elemento modificado correctamente", item: item });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteItem = async (req, res) => {
    try {
        const {id} = req.params;
        const item = await Menu.findByIdAndDelete(id)
        res.status(200).json({message: `${item.name} borrado correctamente`})
    }catch(error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = { getMenu, createItem, updateItem, deleteItem, getMenuItem };
