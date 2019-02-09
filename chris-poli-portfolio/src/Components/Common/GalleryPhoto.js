import React from 'react';
import {withRouter} from "react-router-dom";


class GalleryPhoto extends React.Component {

    clickHandler = () => {
        this.props.history.push(`projects/${this.props.uri}`)
    };


    render() {

        const {url,title} = this.props;

        return (
            <div style={{display:'block',textAlign:'center'}} className="panel-body" >
                <code>{title}</code>
                <br/>
                <a onClick={ this.clickHandler }><img className='formatted-photo' src={url}/></a>
            </div>
        );
    }
}


export default withRouter(GalleryPhoto);