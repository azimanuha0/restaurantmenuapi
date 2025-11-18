# SpicePlate — Restaurant Menu Display API

1.## About the Restaurant
SpicePlate is a cozy modern-Indian bistro serving flavorful, comfort meals with a contemporary twist. We offer appetizers, mains, desserts and refreshing beverages.

2.## Project Description
This project provides a simple Node.js + Express API that serves a restaurant menu and a small frontend to browse it.
Technologies: Node.js, Express.js, HTML, CSS, JavaScript (fetch API).

3.## Menu Categories Available
- Appetizer
- Main Course
- Dessert
- Beverages

4.## Project Structure
restaurant-menu-api/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── server.js
├── package.json
├── README.md

5. API Documentation
GET /api/recipes

Description: Fetch all recipes.
Sample Response:

[
  {
    "id": 1,
    "name": "Pancakes",
    "ingredients": ["flour", "milk", "egg"],
    "cookTime": 15,
    "difficulty": "easy"
  }
]

POST /api/recipes

Description: Create a new recipe.
Sample Request:

{
  "name": "Chocolate Cake",
  "ingredients": ["cocoa", "flour"],
  "cookTime": 50,
  "difficulty": "hard"
}


Sample Response:

{ "message": "Recipe created successfully" }

PUT /api/recipes/:id

Description: Update an existing recipe by ID.
Sample Request:

{
  "name": "Updated Pancakes",
  "ingredients": ["flour","milk","eggs","vanilla"]
}


Sample Response:

{ "message": "Recipe updated successfully" }


6. Installation & Setup Instructions

Follow these steps to run the Restaurant Menu API on your local system:

1. Clone the Repository
git clone 
https://github.com/azimanuha0/restaurantmenu.git

2. Navigate to the Project Directory
cd restaurant


3. Install Dependencies
npm install

4. Start the Server
node server.js


You should see:

Server running on  http://localhost:3000


5. Access the API Endpoints

Open your browser and visit:

Full Menu:
http://localhost:3000/menu

Vegetarian Menu:
http://localhost:3000/menu/vegetarian

Categories:
http://localhost:3000/menu/categories

6. Access the Frontend Page
 http://localhost:3000

✅ 7. Features 
Features

✔ Fully functional REST API built with Node.js and Express.js

✔ Three API endpoints: Full Menu, Vegetarian Menu, and Categories

✔ In-memory data storage (no database required)

✔ Frontend page built using HTML, CSS, and JavaScript

✔ Uses fetch() to get data from API

✔ Dynamic display of menu items and categories

✔ Vegetarian items marked clearly using badges/labels

✔ Clean project structure with static file serving

✔ Error handling included for network failures

✔ Fully documented in README.md

✔ No node_modules included in submission (using .gitignore)

✅ 8. GitHub Repository Link 

GitHub Repository

🔗 Repository Link:
https://github.com/azimanuha0/restaurantmenu.git


✅ 9. Author Information
Author:
Name: Azima Nuha
Project: Restaurant Menu Display API