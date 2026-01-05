import React from 'react'

const FavoriteList = ({ favitem, deletefav }) => {
    return (
        <div>
            <h1>My Favorites</h1>
            {favitem.map((item, idx) => (
                <div className="fav-card" key={idx}>
                    <h2>{item.strMeal}</h2>
                    <button onClick={() => deletefav(idx)}>Delete</button>
                </div>

            ))}
        </div>
    )
}

export default FavoriteList