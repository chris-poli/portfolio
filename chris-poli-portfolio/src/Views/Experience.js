import React, {Component} from 'react';
import {experience} from '../Constants/Information';

class Experience extends Component {

    render() {
        return (
            <div className='Center'>
                <h1>Experience</h1>
                <ul className="list-styled">
                    {experience.map(xp=> (
                        <div>
                            <li className="list-group-item">
                                <b>{xp.title}</b>
                                <hr/>
                                <code><b>{xp.subtitle}</b></code><br/>
                                <code> {xp.date} </code><hr/>
                                <ul>
                                    {xp.content.map(ele => (<li>{ele}</li>))}
                                </ul>
                            </li>
                            <br/>
                        </div>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Experience;