import React, {Component} from 'react';

class Experience extends Component {
    render() {
        return (
            <div className='Center'>
                <h1>Experience</h1>
                <ul className="list-group">
                    <br/>
                    <li className="list-group-item">
                        <b>UQ Blockchain Club</b>
                        <hr/>
                        <code><b>Secretary</b></code><br/>
                        <code> (October 2018 - Present)</code><hr/>
                        <ul type="A">
                            <li> > Help run and organise club events. </li>
                        </ul>
                    </li>
                    <br/>
                    <li className="list-group-item">
                        <b>Warped Gaming LLC.</b>
                        <hr/>
                        <code><b>Software Engineer</b></code><br/>
                        <code> (November 2017 - January 2019)</code><hr/>
                        <ul style={{display:'list-item'}}>
                            <li>> Built a published game with Unity.</li>
                            <li>> Developed web applications with React and Redux.</li>
                            <li>> Built multiple RESTful APIs.</li>
                            <li>> Built a desktop wallet that interacts with the NEO blockchain.</li>
                            <li>> Gained a deep understanding of blockchains such as Ethereum and NEO.</li>
                            <li>> Built an authoritative server with custom logic using photon on-premises.</li>
                            <li>> Managed NoSQL databases such as MongoDB and Cassandra.</li>
                            <li>> Managed SQL databases such as MySQL.</li>
                        </ul>
                    </li>
                    <br/>
                    <li className="list-group-item">
                        <b>Townsville Grammer School</b>
                        <hr/>
                        <code><b>Secondary Education</b></code><br/>
                        <code> (January 2008 - November 2015)</code><hr/>
                        <ul type="A">
                            <li> > Achieved an OP of 3. </li>
                        </ul>
                    </li>
                    <br/>
                    <li className="list-group-item">
                        <b>The Reject Shop</b>
                        <hr/>
                        <code><b>Sales Assistant</b></code><br/>
                        <code> (March 2015 - April 2016)</code><hr/>
                        <ul type="A">
                        </ul>
                    </li>
                    <br/>
                </ul>
            </div>
        );
    }
}

export default Experience;