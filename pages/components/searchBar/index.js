
const SearchInput = ({value, onChange}) => {

    function handleChange(event){
        onChange(event.target.value)
    }

    return(
        <input 
        className="boxtext"
        placeholder="Search"       
        type="search"
        value={value}
        onChange={handleChange}        
        />
    )}

export default SearchInput;