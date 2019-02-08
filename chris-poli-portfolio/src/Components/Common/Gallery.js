import React from 'react';
import GalleryPhoto from "./GalleryPhoto";

const Gallery = ({images,padding=10}) => {

    const imageNodes = images.map((arr,index) => {
        return (
            <GalleryPhoto title={arr.title} key={index} url={arr.thumbnail} columns={[1,2,3]} padding={padding} uri={arr.uri}/>
        )
    });

    return (
        <div className='row'>
            {imageNodes}
        </div>
    );
};

export default Gallery;