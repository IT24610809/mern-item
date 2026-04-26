const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// GET
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// POST
router.post('/', async (req, res) => {
  const item = new Item({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  });

  const newItem = await item.save();
  res.status(201).json(newItem);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;