import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import '../../styles/keywordsearch.scss'




const Keywordsearch= ()=>{

    const seachIcon = <i className="fas fa-search"></i>
    const { store, actions } = useContext(Context);
	const [filterdata, setFilterdata] = useState([]);

    console.log(store.users)

    const handlefilter = event => {
		const SearchWord = event.target.value;
		const newFilter = store.users.filter(item => {
			return item.username.toLowerCase().includes(SearchWord.toLowerCase());
		});

		if (SearchWord == "") {
			setFilterdata([]);
		} else {
			setFilterdata(newFilter);
		}
	};



    return(
        <div className="searchBar__Box">
            <input type="text" placeholder="What are you looking for?" className="seachBar__input" onChange={handlefilter} />
            <div className="searchBar-container__button">
                <button as="input" type="submit" value="" className="seachBar__button">{seachIcon}</button>
            </div>
            
        </div>
    )

}


export default Keywordsearch