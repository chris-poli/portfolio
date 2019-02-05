import React from 'react';
import SideNavbar from "./Home";
import BookList from "../Components/Common/BookList";

const Knowledge = () => {
    return (
        <div className='Center'>
            <h3>Books read:</h3>
            <BookList/>
        </div>
    );
};

export default Knowledge;