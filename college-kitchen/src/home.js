import React, { useState } from 'react';

const Home = () => {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodeURIComponent(ingredients)}&number=10&apiKey=19d968e0a6084103addc8057885c3dfc`);
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleRecipeClick = async (recipeId) => {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=19d968e0a6084103addc8057885c3dfc`);
      const data = await response.json();
      setSelectedRecipe(data);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
  };

  const handleGoBack = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Home Page</h1>
        <div className="profile-favorites">
          <button className="profile-button">
            <i className="ri-shopping-basket-line"></i>
          </button>
          <button className="favorites-button">
            <i className="ri-heart-line"></i>
          </button>
        </div>
      </header>
      <div className="content">
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter ingredients separated by commas..."
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
          <button>
            <i className="ri-mic-line"></i>
          </button>
        </div>
        <div className='recipes'>
          {selectedRecipe ? (
            <div>
              <h2>{selectedRecipe.title}</h2>
              <p>{selectedRecipe.instructions}</p>
              <button onClick={handleGoBack}>Go Back</button>
            </div>
          ) : (
            <div>
              <h2>Recipes</h2>
              <ul>
                {recipes.map(recipe => (
                  <li key={recipe.id} onClick={() => handleRecipeClick(recipe.id)}>
                    {recipe.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
