import React from 'react';

const SearchBox = ({searching}) => {
    return (
        <div className='search-box'>
            <input type='search' placeholder='Search...' onChange={searching}/>
        </div>
    );
}

export default SearchBox;