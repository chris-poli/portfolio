import React from 'react';
import {books} from "../../Constants/Information";

const ImageList = ({images}) => {
    return (
        <div>
            <div className='row'>
                {images.map(image=>(
                    <div className='col-sm-3' >
                        <img className='img' src={image.thumbnail}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageList;