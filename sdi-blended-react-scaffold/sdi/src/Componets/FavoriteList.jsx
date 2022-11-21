import React from "react";
import RemoveButton from "./RemoveButton";

const FavortieList = ({ favoriteDrink, setFavoriteDrink }) => {
  const favoriteDrinkList = favoriteDrink.map((favoriteDrinkName, index) => {
    return (
      <li key={index}>
        {favoriteDrinkName}
        <RemoveButton
          favoriteDrinkName={favoriteDrinkName}
          favoriteDrink={favoriteDrink}
          setFavoriteDrink={setFavoriteDrink}
        />
      </li>
    );
  });
  return <ul>{favoriteDrinkList}</ul>;
};

export default FavortieList;
