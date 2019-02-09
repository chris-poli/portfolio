import React, {Component} from 'react';
import Gallery from "../Components/Common/Gallery";
import {withRouter} from "react-router-dom";
import {projects} from "../Constants/Information";

class Projects extends Component {

    render() {
        return (
            <div className='Center' >
                <h1> Projects </h1>
                <div>
                    <hr/>
                    <Gallery images={projects}/>
                </div>

            </div>
        );
    }
}

export default withRouter(Projects);