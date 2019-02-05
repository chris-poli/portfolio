import React, {Component} from 'react';
import {aboutMe, photoUrl} from "../Constants/Information";
import SideNavbar, {NavIcon} from "../Components/Navbars/SideNavbar";
import Footer from "../Components/Common/Footer";


class Home extends Component {
    render() {
        return (
            <div>
                <div className='Center'>
                    <h1>Christopher Luke Poli</h1>
                    <img src={photoUrl}
                         className='Avatar'/>
                    <div className="panel-body">{aboutMe}</div>
                </div>
                <Footer/>
            </div>

        )
    }
}

export default Home;