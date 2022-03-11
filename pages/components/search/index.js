import React, { useState } from "react";


const Search = ({value, onChange}) => {
    const[displayValue, setDisplayValue] = useState(value);    

    function handleChange(event){
        setDisplayValue(event.target.value);        
    }

    return(
        <input 
        className="boxtext"
        placeholder="Search"       
        type="search"
        value={displayValue}
        onChange={handleChange}
        />
    )
}

export default Search;