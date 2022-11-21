import React, { useEffect, useState } from 'react';
import './App.css'
import CocktailList from './Componets/CocktailList';
import FavortieList from './Componets/FavoriteList';
import SearchBar from './Componets/SearchBar';



function App() {
const [drinks, setDrinks] = useState([])
const [favoriteDrink, setFavoriteDrink] = useState([])
const [boolean, setBoolean] = useState(false)
const [search, setSearch] = useState([])

useEffect(() => {
  fetch('http://localhost:3001')
  .then(res => res.json())
  .then(data => setDrinks(data.drinks))
}, [boolean]);




  return (
    <div className="parent">
      <SearchBar boolean={boolean} setBoolean={setBoolean} search={search} setSearch={setSearch}/>
      <FavortieList favoriteDrink={favoriteDrink} setFavoriteDrink={setFavoriteDrink} />
      <CocktailList drinks={drinks} favoriteDrink={favoriteDrink} setFavoriteDrink={setFavoriteDrink} search={search}/>
    

    
    
    </div>
  
  );
}

export default App;
