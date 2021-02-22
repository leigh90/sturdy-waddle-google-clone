import React from 'react';
import '../pages/Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';

function Search() {
    return (
        <div>
            <form className="search">
                <div className="search_input">
                    <SearchIcon></SearchIcon>
                    <MicIcon></MicIcon>
                </div>

            </form>
            
        </div>
    )
}

export default Search
