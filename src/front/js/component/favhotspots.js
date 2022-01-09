import React , { useState, useContext, useEffect, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/profile.scss";

const FavHotspots = () => {
    const { store, actions } = useContext(Context);
    const user = {...store.currentUser.user};


    const favourites = user.favourite_spot.map((favourite, index) => {
        return (
            <li key={index.toString()}>
                {favourite.name}
                <button className="btnfavourite-profile"
                    onClick={event => {
                        event.preventDefault;
                        actions.deleteFavourites(favourite);
                    }}>
                    <i className="fas fa-heart unclicked active iconfavourite-profile" />
                </button>
            </li>
        );
    });


    return (
        <ul className="fav-list-profile">{favourites}</ul>
    );
}

export default FavHotspots;