// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// In-memory menu data (6+ items, 3+ categories, veg & non-veg)
const menu = [
  { id: 1, name: "Margherita Pizza", category: "Main Course", price: 350, isVegetarian: true, description: "Classic pizza with tomato, basil and mozzarella." },
  { id: 2, name: "Butter Chicken", category: "Main Course", price: 420, isVegetarian: false, description: "Creamy tomato-based chicken curry served with naan." },
  { id: 3, name: "Paneer Tikka", category: "Appetizer", price: 220, isVegetarian: true, description: "Smoky grilled paneer cubes marinated in spices." },
  { id: 4, name: "Chocolate Brownie", category: "Dessert", price: 150, isVegetarian: true, description: "Warm fudgy brownie with a scoop of vanilla ice cream." },
  { id: 5, name: "Fish Fry", category: "Appetizer", price: 260, isVegetarian: false, description: "Crispy spiced fish fillet served with lemon wedges." },
  { id: 6, name: "Lemon Iced Tea", category: "Beverage", price: 80, isVegetarian: true, description: "Refreshing lemon iced tea with a hint of mint." },
  // optional extra items
  { id: 7, name: "Veg Biryani", category: "Main Course", price: 310, isVegetarian: true, description: "Aromatic basmati rice with vegetables and spices." }
];

// Middleware to serve static files from 'public'
app.use(express.static(path.join(__dirname, 'public')));

// --- API endpoints ---

// 1) GET /menu -> return all menu items
app.get('/menu', (req, res) => {
  res.json(menu);
});

// 2) GET /menu/vegetarian -> return only vegetarian items
app.get('/menu/vegetarian', (req, res) => {
  const vegItems = menu.filter(item => item.isVegetarian === true);
  res.json(vegItems);
});

// 3) GET /menu/categories -> unique categories with count
app.get('/menu/categories', (req, res) => {
  // group by category
  const counts = menu.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});
  const categories = Object.keys(counts).map(name => ({ name, itemCount: counts[name] }));
  res.json({ categories });
});

// simple health route
app.get('/health', (req, res) => res.send({ status: 'ok' }));

// Start server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
