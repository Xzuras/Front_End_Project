import React, { useState } from "react";


const SearchBar = ({boolean, setBoolean, search, setSearch }) => {
const [ingredient, setIngredient] = useState('')

const searchHandler = (e) => {
    e.preventDefault()
    if (ingredient !== '') {
    searchIngredient()
    } else {
        e.preventDefault()
        setBoolean(!boolean)
        setSearch([])
    }
}

const searchIngredient = () => {
    
    fetch (`http://localhost:3001/search/${ingredient}`)
    .then(res => res.json())
    .then(data => setSearch(data.drinks))

}
    
    return (
        <div>
            <input type='text' placeholder="Search..." onChange={(e) => {setIngredient(e.target.value)}}/>
            <button onClick={searchHandler}>Search</button>
        </div>
    );
}

export default SearchBar;