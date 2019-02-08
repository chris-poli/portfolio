import React from 'react';
import {books} from "../../Constants/Information";

const ImageList = ({images}) => {
    return (
        <div>
            <div className='row'>
                <ul className="thumbnails">
                    {images.map(image=>(
                        <li class="col-sm-2">
                            <img
                                src={image.thumbnail}
                                alt="Logo"/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ImageList;