import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import '../../styles/keywordsearch.scss'


//Está hecha para los usuarios, cuando tengamos los Hotspot lo adaptaremos.

const Keywordsearch= ()=>{

    const seachIcon = <i className="fas fa-search"></i>
    const { store, actions } = useContext(Context);
	const [filterdata, setFilterdata] = useState([]);
    const [searchword,setSearchword]=useState('')
    

    console.log(store.users)

    const handlefilter = event => {
		const SearchWord = event.target.value;
		const newFilter = store.users.filter(item => {
			return item.username.toLowerCase().includes(SearchWord.toLowerCase());
		});

        console.log(SearchWord)
        console.log(filterdata)

		if (SearchWord == "") {
			setFilterdata([]);
		} else {
			setFilterdata(newFilter);
		}
	};

   

    return(
        <div className="SearchBar__wrapper">
        <div className="searchBar__Box">
            <input type="text" placeholder="What are you looking for?" className="seachBar__input" onChange={handlefilter} />
           
            <div className="searchBar-container__button">
                <button as="input" type="submit" value="" className="seachBar__button">{seachIcon}</button>
            </div>
            
        </div>
        <br></br>
        {filterdata.length > 0 && (
            <div className="dataresult">
                {filterdata.map((value, key) => {
                    return (
                        <div className="filterlink" key={value.id} onClick={()=>location.replace(store.fronturl.concat(`hotspot/${value.id}`))}> 
                            {value.username}
                        </div>
                    );
                })}
            </div>
        )}
        </div>
       
    )

}


export default Keywordsearch