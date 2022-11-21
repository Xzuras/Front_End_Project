import React from "react";

const FavoriteButton = ({ drinkName, favoriteDrink, setFavoriteDrink }) => {
    
    
    const clickHandler = () => {
        

       if(!favoriteDrink.includes(drinkName)) { 
        setFavoriteDrink([...favoriteDrink, drinkName])
    };
        
    }
return (
    <div>
        <button onClick={clickHandler}>Add to Favorites</button>
       
    </div>
)

}

export default FavoriteButton;