import React, {Component} from 'react';
import {aboutMe, photoUrl} from "../Constants/Information";
import SideNavbar, {NavIcon} from "../Components/Navbars/SideNavbar";
import Footer from "../Components/Common/Footer";


class Home extends Component {
    render() {
        return (
            <div>
                <div className='Center'>
                    <h1 className='logo'>Christopher Luke Poli</h1>
                    <h3>Email: chris.luke.poli@gmail.com</h3>
                    <h3><a href='https://www.facebook.com/98poli'>Facebook</a></h3>
                    <img src={photoUrl}
                         className='Avatar'/>
                    <div className="panel-body">{aboutMe}</div>
                </div>
            </div>

        )
    }
}

export default Home;