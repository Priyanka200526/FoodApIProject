import React, { useState } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'

import SearhBox from './Components/SearhBox'
import RecipeList from './Components/RecipeList'
import FavoriteList from './Components/FavoriteList'

const App = () => {
  const localitem = JSON.parse(localStorage.getItem("all-item")) || []
  const localFav = JSON.parse(localStorage.getItem("fav-items")) || []

  const [recipeName, setrecipeName] = useState('')
  const [recipedata, setrecipedata] = useState(localitem)
  const [favitem, setfavitem] = useState(localFav)
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState('')

  async function fetchdata() {
    if (!recipeName) return
    setloading(true)

    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`
    )

    setrecipedata(res.data.meals || [])
    localStorage.setItem("all-item", JSON.stringify(res.data.meals || []))
    setloading(false)
    setrecipeName('')
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      fetchdata()
    }
  }
  function Favoritefood(item) {
    const exists = favitem.some(f => f.strMeal === item.strMeal)
    if (!exists) {
      const updated = [...favitem, item]
      setfavitem(updated)
      localStorage.setItem("fav-items", JSON.stringify(updated))
    }
  }

  function deletefav(idx) {
    const updated = favitem.filter((_, i) => i !== idx)
    setfavitem(updated)
    localStorage.setItem("fav-items", JSON.stringify(updated))
  }

  return (
    <div className='big-container'>
      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
                <SearhBox
                  recipeName={recipeName}
                  setrecipeName={setrecipeName}
                  fetchdata={fetchdata}
                  loading={loading}
                  handleKeyDown={handleKeyDown}
                />

              <RecipeList
                recipedata={recipedata}
                loading={loading}
                error={error}
                Favoritefood={Favoritefood}
              />
            </>
          }
        />

        {/* FAVORITES PAGE */}
        <Route
          path="/FavoriteList"
          element={
            <FavoriteList
              favitem={favitem}
              deletefav={deletefav}
            />
          }
        />

      </Routes>
    </div>
  )
}

export default App
