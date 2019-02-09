import React, {Component} from 'react';
import {awards} from "../Constants/Information";

class Awards extends Component {
    render() {
        return (
            <div className='container'>
                <h1>Awards & Honours</h1>
                <ul className="list-group">
                    {awards.map(award=> (
                        <div>
                            <li className="list-group-item">
                                <b>{award.title}</b>
                                <hr/>
                                <code> {award.date}</code><hr/>
                                <ul type="A">
                                    {award.imgUrl && <img className='formatted-photo' src={award.imgUrl}/>}

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

export default Awards;