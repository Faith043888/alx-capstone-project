# Recipe Finder App

A fully functional **Recipe Finder** web application built as part of the ALX Fullstack Capstone Project. Users can search meals, explore categories, and view detailed recipes from the [TheMealDB API](https://www.themealdb.com/api.php).

---

## Live Demo

[I am still to add the live demo]

---

## Features

- Search recipes by name (e.g., “creamy tomato soup”)  
- View full recipe details including ingredients & instructions  
- Browse meals by category (Starters, Main Course, Desserts)  
- Dynamic navigation between pages using React Router  
- Responsive UI built with Tailwind CSS (mobile, tablet, desktop)  
- Form validation and user-friendly error handling (“no results” cases)  
- Fetch data dynamically from [TheMealDB API](https://www.themealdb.com/api.php)  
- Components created:  
  - `Navbar.jsx` – navigation bar  
  - `SearchBar.jsx` – handles recipe search input  
  - `AddRecipe.jsx` – form to add new recipes  
  - `RecipeDetails.jsx` – shows detailed recipe information  
  - `Header.jsx` – currently a placeholder for future header design  
  - `RecipeCard.jsx` – currently a placeholder for displaying recipe summaries  
- Pages structure:  
  - `Home.jsx` – landing page & search bar  
  - `Welcome.jsx` – welcome/landing section  
  - `Starters.jsx` – starter meals category  
  - `MainCourse.jsx` – main course meals category  
  - `Desserts.jsx` – desserts category  
- State management with React Hooks (`useState`, `useEffect`)  
- Smooth user experience with error handling and API loading states  

---

## Tech Stack

- **React (Vite)**  
- **Tailwind CSS**  
- **React Router**  
- **JavaScript (ES6+)**  
- **TheMealDB API**  

---

## Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/Faith043888/alx-capstone-project.git
Go to project directory

bash
Copy code
cd myrecipefinder
Install dependencies

bash
Copy code
npm install
Run the development server

bash
Copy code
npm run dev
Open http://localhost:5173/ in your browser.

API Reference
Base URL: https://www.themealdb.com/api/json/v1/1/

Example endpoints:

/search.php?s=Arrabiata → Search by meal name

/filter.php?c=Dessert → Filter by category

/lookup.php?i=52772 → Get full recipe details

 Future Improvements
Add Favorites feature to save meals

Implement Dark/Light mode toggle

Embed YouTube videos for recipes

Add multi-ingredient search

Improve loading indicators for better user experience

Project Structure
pgsql
Copy code
myrecipefinder/
├─ public/
│  └─ index.html
├─ src/
│  ├─ api/             
│  ├─ assets/           
│  ├─ components/
│  │  ├─ Header.jsx        # Placeholder
│  │  ├─ Navbar.jsx
│  │  ├─ RecipeCard.jsx    # Placeholder
│  │  ├─ SearchBar.jsx
│  │  ├─ AddRecipe.jsx
│  │  └─ RecipeDetails.jsx
│  ├─ pages/
│  │  ├─ Welcome.jsx
│  │  ├─ Home.jsx
│  │  ├─ Starters.jsx
│  │  ├─ MainCourse.jsx
│  │  └─ Desserts.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ index.css
│  └─ App.css
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.js
├─ eslint.config.js
├─ README.md
└─ node_modules/

Author
Name: Faith Kalamshe
Field: Aspiring Frontend Developer
GitHub: https://github.com/Faith043888
Repo: https://github.com/Faith043888/alx-capstone-project