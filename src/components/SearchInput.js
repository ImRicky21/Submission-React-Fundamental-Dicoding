import React from "react";
import PropTypes from 'prop-types'
import {BsSearch} from 'react-icons/bs'
import LocaleContext from "../context/LocaleContext";


function SearchInput({ searchNotes, activeQuery }) {
    const [search, setSearch] = React.useState(activeQuery);
    const { locale } = React.useContext(LocaleContext);
  
    function searchChangeHandler(event) {
      setSearch(event.target.value);
      searchNotes(event.target.value);
    }
    
        return(
            <div className="search-bar">
                <BsSearch className="search-icon"/>
                <input
                type="text"
                className="search-input"
                placeholder={locale === 'en' ? 'Search' : 'pencarian'}
                value={search}
                onChange={searchChangeHandler}
                />
            </div>
        )
    }

SearchInput.propTypes = {
    searchNotes : PropTypes.func.isRequired,
    activeQuery: PropTypes.string.isRequired,

}

export default SearchInput