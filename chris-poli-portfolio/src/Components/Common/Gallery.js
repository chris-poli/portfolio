import React from 'react';
import GalleryPhoto from "./GalleryPhoto";

const Gallery = ({images,padding=10}) => {

    const imageNodes = images.map((arr,index) => {
        return (
            <GalleryPhoto key={index} url={arr.thumbnail} columns={[1,2,3]} padding={padding} uri={arr.uri}/>
        )
    });

    const cssBreakpoints = `
    .imageGridItem { width: ${Math.floor(100 / 1)}%; }

    @media only screen and (min-width : 480px) {
      .imageGridItem { width: ${Math.floor(100 / 2)}%; }
    }
    @media only screen and (min-width : 992px) {
      .imageGridItem { width: ${Math.floor(100 / 3)}%; }
    }`;

    return (
        <div className="imageGrid">
            <style dangerouslySetInnerHTML={{ __html: cssBreakpoints }} />
            {imageNodes}
        </div>
    );
};

export default Gallery;