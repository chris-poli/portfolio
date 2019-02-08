import React, {Component} from 'react';

class Awards extends Component {
    render() {
        return (
            <div className='container'>
                <h1>Awards & Honours</h1>
                <ul className="list-group">
                    <li className="list-group-item">
                        <b>Dean's Commendation for Academic Excellence</b>
                        <hr/>
                        <code> Semester 2 2018</code><hr/>
                        <ul type="A">
                            <img className='formatted-photo' src='https://s3-ap-southeast-2.amazonaws.com/chris-poli-files/deans-commendation-2018.jpg'/>
                        </ul>
                    </li>
                    <br/>
                    <li className="list-group-item">
                        <b>NEO-Microsoft Dev Competition - 3rd place</b>
                        <hr/>
                        <code> May 2018 </code><hr/>
                    </li>
                    <br/>
                    <li className="list-group-item">
                        <b>NEO Game Competition - Excellence Award</b>
                        <hr/>
                        <code> May 2018 </code><hr/>
                    </li>
                    <br/>
                    <li className="list-group-item">
                        <b>Project selected for 2018 UQ ITEE Innovation Showcase</b>
                        <hr/>
                        <code> May 2018 </code><hr/>
                    </li>
                    <li className="list-group-item">
                    </li>
                    <br/>
                    <li className="list-group-item">
                        <b>Overall Position Year 12 - 3</b>
                        <hr/>
                        <code> December 2015 </code><hr/>
                        In Year 12 I achieved an OP of 3.
                    </li>
                    <br/>
                    <li className="list-group-item">
                        <b>Academic Award</b>
                        <hr/>
                        <code> December 2015 </code><hr/>
                        Awarded for outstanding academic efforts in year 12.
                    </li>
                    <br/>
                    <li className="list-group-item">
                        <b>L.S Daniels Award for Earth Science</b>
                        <hr/>
                        <code> December 2015 </code><hr/>
                        Awarded for placing first in Earth Science in Year 12.
                    </li>
                </ul>
            </div>
        );
    }
}

export default Awards;