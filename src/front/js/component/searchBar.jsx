import React from "react";
import Button from 'react-bootstrap/Button'

import "../../styles/searchBar.scss"

export const SearchBar = () =>{
    const seachIcon = <i className="fas fa-search"></i>
    return(
        <div className="searchBar__Box">
            <input type="text" placeholder="What are you looking for?" className="seachBar__input" />
            <div className="searchBar-container__button">
                <button as="input" type="submit" value="" className="seachBar__button">{seachIcon}</button>
            </div>
            
        </div>
    )
}