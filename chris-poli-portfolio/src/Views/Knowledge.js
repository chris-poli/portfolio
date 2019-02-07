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
                <h2>Languages</h2>
                <ImageList images={languages}/>
            </div>
            <div className='knowledge-div'>
                <h2>Technologies</h2>/
                <h5>I have experience in these technologies:</h5>
                <ImageList images={technologies}/>
            </div>
            <div className='knowledge-div'>
                <h2>Books</h2>/
                <h5>I have read these books:</h5>

                <ImageList images={books}/>
            </div>
        </div>
    );
};

export default Knowledge;