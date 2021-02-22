import React from 'react';
import '../pages/Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {Button} from '@material-ui/core';

function Search() {
    return (
            <form className="search">
                    
                <div className="search_input">
                    <SearchIcon className="search_inputIcon"/>
                        <input/>
                    <MicIcon/>
                </div>
                <div className="search_buttons">
                    <Button variant="outlined" type="submit">Google Search</Button>
                    <Button variant="outlined">I am feeling sorted</Button>
                </div>
            </form>
            
    )
}

export default Search
