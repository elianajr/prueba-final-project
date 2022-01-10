import React, { useContext, useState,useEffect } from "react";
import Button from 'react-bootstrap/Button'
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import "../../styles/searchBar.scss"
import Rate from './rating.jsx'


export const SearchBar = () =>{
    const seachIcon = <i className="fas fa-search"></i>
    const { store, actions } = useContext(Context);
    const [search,setSearch]=useState(null)
	const [searchedspots,setSearchedspots]=useState('')

	const handlefilter = event => {
		setSearch(event.target.value) 
	};

	

	useEffect(()=>{
		if (search!=null) {
			setSearchedspots(store.hotspots.map((element,index)=>{
				return <div className="searchBar__resultitems">
					<div className="searchBar__resultname" key={index.toString()}>
						<Link className="searcBar__resultlink" to={'/hotspotID/'.concat(element.id)}>{element.name}</Link>
				          <Rate />
						</div>
						{element.photo && <img className="searchBar__resultimg" src={element.photo}></img>}
					</div>
			}))
		}
	},[store.hotspots])

	console.log(window.location)

    return(
		<div>
			 <div className="searchBar__Box">
                  <input type="text" placeholder="What are you looking for?" className="seachBar__input" onChange={handlefilter} />
          
                  <div className="searchBar-container__button">
                     <button as="input" type="submit" value="" className="seachBar__button" onClick={()=>{
                         actions.searchHotspot(search)
                     }}>{seachIcon}</button>
                  </div>
				 {window.location.pathname=="/hotspot" && 
				 <div className="searchBar__dataresult" >
				 {searchedspots}
			   </div>	
				 }
            </div>
			    

		</div>
        
            
            
        
    )
}