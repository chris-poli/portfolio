import React from 'react';
import SideNavbar from "./Home";
import BookList from "../Components/Common/BookList";
import {books, languages, technologies, courses} from "../Constants/Information";
import ImageList from "../Components/Common/ImageList";

const Knowledge = () => {
    return (
        <div className='Center'>
            <h1>Knowledge</h1>
            <div id='left-knowledge' className='panel-body' >
                <h2><code>Languages</code></h2>
                <ImageList images={languages}/>
            </div>
            <div id='center-knowledge' className='panel-body'>
                <h2><code>Technologies</code></h2>
                <ImageList images={technologies}/>
            </div>
            <div id ='right-knowledge' className='panel-body'>
                <h2><code>Courses</code></h2>
                <ul>
                    {courses.map(course=>(
                        <li>
                            {`> ${course}`}
                        </li>
                    ))}
                </ul>
            </div>
            <div id ='right-knowledge' className='panel-body'>
                <h2><code>Books</code></h2>
                <ImageList images={books}/>
            </div>
        </div>
    );
};

export default Knowledge;