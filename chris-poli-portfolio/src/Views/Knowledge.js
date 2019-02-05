import React from 'react';
import SideNavbar from "./Home";
import BookList from "../Components/Common/BookList";
import {books, languages, technologies} from "../Constants/Information";
import ImageList from "../Components/Common/ImageList";

const Knowledge = () => {
    return (
        <div className='Center'>
            <h1>Knowledge</h1>

            <div className='knowledge-div'>
                <h2>Programming Languages</h2>
                <ImageList images={languages}/>
            </div>
            <div className='knowledge-div'>
                <h2>Technologies</h2>
                <h4>I have adequate experience in these technologies.</h4>
                <ImageList images={technologies}/>
            </div>
            <div className='knowledge-div'>
                <h2>Books Read</h2>
                <ImageList images={books}/>
            </div>
        </div>
    );
};

export default Knowledge;