import React from 'react';
import {withRouter} from "react-router-dom";


class GalleryPhoto extends React.Component {

    clickHandler = () => {
        this.props.history.push(`projects/${this.props.uri}`)
    };


    render() {

        const {padding,url} = this.props;

        const styles = {
            imageGridItem: {
                display: 'inline-block',
                boxSizing: 'border-box',
                float: 'left',
                padding ,
            },
            imageWrapper: {
                position: 'relative',
                width: '100%',
                paddingBottom: '100%',
                backgroundImage: `url(${url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                cursor: 'pointer',
            },
        };



        return (
            <div className="imageGridItem" style={styles.imageGridItem}>
                <a onClick={ this.clickHandler }>
                    <div className="imageWrapper" style={styles.imageWrapper}></div>
                </a>
            </div>
        );
    }
}


export default withRouter(GalleryPhoto);