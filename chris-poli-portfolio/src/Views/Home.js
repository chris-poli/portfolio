import React, {Component} from 'react';
import {aboutMe, photoUrl} from "../Constants/Information";
import SideNavbar, {NavIcon} from "../Components/Navbars/SideNavbar";
import Footer from "../Components/Common/Footer";
import facebook_logo from '../Assets/Images/facebook_logo.png'
import email_logo from '../Assets/Images/email.png'
import github_logo from '../Assets/Images/github_logo.png'
class Home extends Component {

    alertEmail() {
        alert('chris.luke.poli@gmail.com')
    }
    render() {
        return (
            <div>
                <div className='Center' style={{textAlign:'center'}}>
                    <h1>Christopher Luke Poli</h1>
                    <hr/>
                    <div className='flex-container'>
                        <img src={photoUrl} className='Avatar'/>
                        <div className="panel-body">{aboutMe}</div>
                    </div>
                    <div className='row'>
                        <a onClick={this.alertEmail} target='_blank'><img className='formatted-photo-small' src={email_logo}/></a>
                        <a href='https://www.facebook.com/98poli' target='_blank'><img className='formatted-photo-small'  src={facebook_logo}/></a>
                        <a href='https://github.com/chris-poli' target='_blank'><img className='formatted-photo-small' src={github_logo}/></a>

                    </div>
                </div>
            </div>

        )
    }
}

export default Home;