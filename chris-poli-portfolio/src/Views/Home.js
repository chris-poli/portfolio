import React, {Component} from 'react';
import {aboutMe, photoUrl} from "../Constants/Information";
import SideNavbar, {NavIcon} from "../Components/Navbars/SideNavbar";
import Footer from "../Components/Common/Footer";
import facebook_logo from '../Assets/Images/facebook_logo.png'

class Home extends Component {
    render() {
        return (
            <div>
                <div className='Center' style={{textAlign:'center'}}>
                    <h1>Christopher Luke Poli</h1>
                    <hr/>
                    <h3>Email: chris.luke.poli@gmail.com</h3>
                    <h3><a href='https://www.facebook.com/98poli' target='_blank'>
                        <img className='icon-small' src={facebook_logo}/></a></h3>
                    <img src={photoUrl}
                         className='Avatar'/>
                    <div className="panel-body">{aboutMe}</div>
                </div>
            </div>

        )
    }
}

export default Home;