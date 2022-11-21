import React from "react";

const RemoveButton = ({ favoriteDrink, setFavoriteDrink, favoriteDrinkName }) => {
    const removeHandler = () => {
        setFavoriteDrink(favoriteDrink.filter(drink => drink !== favoriteDrinkName))
        console.log(favoriteDrink)
       }
return (
<button onClick={removeHandler}>Remove</button>
)
}

export default RemoveButton;