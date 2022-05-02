import React from 'react';

const Search = (props) => {
    const {handleSearch, handleOnBlur} = props;

    return (
        
            <div className="form-group">
                <label htmlFor="Search" className="control-label">Search </label>
                <input id= "Search" placeholder="Enter City Name to Search and Tab"  
                    onChange = {(event) => handleSearch(event)} 
                    onBlur = {(event) => handleOnBlur(event)}
                    className="form-control"
                ></input>
            </div>
            
            
        
            
      );
    
}

export default Search