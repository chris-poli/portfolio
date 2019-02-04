import React, {Component} from 'react';
import {aboutMe, photoUrl} from "../Constants/Information";
import SideNavbar from "../Components/Navbars/SideNavbar";

class Home extends Component {
    render() {
        return (
            <div>
                <SideNavbar/>
                <div className='Center'>
                    <h1>Chris Luke Poli</h1>
                    <img src={photoUrl}
                         className='Avatar'/>
                    <div className="panel-body">{aboutMe}</div>
                </div>
            </div>

        )
    }
}

export default Home;