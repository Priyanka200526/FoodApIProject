import React from 'react'
import { useNavigate } from 'react-router-dom'

const RecipeList = ({ recipedata, loading, error, Favoritefood }) => {
    const navigate = useNavigate()
    return (
        <div className='cardconatiner'>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {recipedata.length === 0 && !loading && <p>No recipes found</p>}
            {recipedata.map((item, idx) => (
                <div key={idx} className='cardrecipe'>
                    <img src={item.strMealThumb} alt="image" />
                    <h2>{item.strMeal}</h2>
                    <p><span><strong>Ingredient:</strong></span> 1.{item.strIngredient1} 2.{item.strIngredient2} 3.{item.strIngredient3} 4.{item.strIngredient4} 5.{item.strIngredient5}</p>
                    <h3>Category: {item.strCategory}</h3>
                    <h3>Area: {item.strArea}</h3>
                    <button onClick={() => {
                        Favoritefood(item)
                        navigate('./FavoriteList')
                    }}>Add to Favorite
                    </button>
                </div>
            ))}
        </div>
    )
}

export default RecipeList