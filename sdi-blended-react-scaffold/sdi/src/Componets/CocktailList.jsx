import React from "react";
import FavoriteButton from "./FavoriteButton";


const CocktailList = ({ drinks, setFavoriteDrink, favoriteDrink, search }) => {
    
    const drinkList = drinks.map(drinks => {
        return (<li key={drinks.idDrink}> <h2>{drinks.strDrink}</h2>
       <img src={drinks.strDrinkThumb} style={{width: 200, height: 200}} alt="" />
       <FavoriteButton drinkName={drinks.strDrink} favoriteDrink={favoriteDrink} setFavoriteDrink={setFavoriteDrink}/>
        </li>
        
        )
       })

       const searchList = search.map(drinks => {
        return (<li key={drinks.idDrink}> <h2>{drinks.strDrink}</h2>
       <img src={drinks.strDrinkThumb} style={{width: 200, height: 200}} alt="" />
       <FavoriteButton drinkName={drinks.strDrink} favoriteDrink={favoriteDrink} setFavoriteDrink={setFavoriteDrink}/>
        </li>
        )
       })
       
    
    return (
        <ul>
            {search.length === 0 ? drinkList : searchList}
            
        </ul>
    )

}

export default CocktailList;