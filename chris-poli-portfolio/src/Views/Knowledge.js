import React from 'react';
import SideNavbar from "./Home";
import BookList from "../Components/Common/BookList";
import {books, languages, technologies} from "../Constants/Information";
import ImageList from "../Components/Common/ImageList";

const Knowledge = () => {
    return (
        <div className='Center'>
            <h1>Knowledge</h1>
            <div id='left-knowledge' >
                <h2><code>Languages</code></h2>
                <ImageList images={languages}/>
            </div>
            <div id='center-knowledge'>
                <h2><code>Technologies</code></h2>
                <ImageList images={technologies}/>
            </div>
            <div id ='right-knowledge'>
                <h2><code>Books</code></h2>
                <ImageList images={books}/>
            </div>
        </div>
    );
};

export default Knowledge;