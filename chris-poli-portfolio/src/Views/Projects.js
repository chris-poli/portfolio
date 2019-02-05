import React, {Component} from 'react';
import Gallery from "../Components/Common/Gallery";
import {withRouter} from "react-router-dom";




class Projects extends Component {

    images = [
        {
            url: "https://s3-ap-southeast-2.amazonaws.com/chris-poli-files/lc1.jpg",
            clickHandler: (url, obj) => { console.log(url) }
        },
        {
            url: "https://s3-ap-southeast-2.amazonaws.com/chris-poli-files/lf1.jpg",
            clickHandler: (url, obj) => { this.props.history.push('/projects/lootclicker') }
        },
        {
            url: "https://s3-ap-southeast-2.amazonaws.com/chris-poli-files/lfw.jpg",
            clickHandler: (url, obj) => { this.props.history.push('/projects/lootclicker') }
        },
    ];

    render() {
        return (
            <div className='Center'>
                <h1> Projects </h1>
                <h4> Click on a photo to see more information </h4>
                <Gallery images={this.images}/>
            </div>
        );
    }
}

export default withRouter(Projects);