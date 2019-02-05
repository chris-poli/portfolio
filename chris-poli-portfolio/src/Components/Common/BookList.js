import React, {Component} from 'react';
import {books} from "../../Constants/Information";

class BookList extends Component {
    render() {
        return (
            <div className='row'>
                {books.map(book=>(
                    <div className='col-sm-3' >
                        <img className='img' src={book.thumbnail}/>
                    </div>
                ))}
            </div>
        );
    }
}

export default BookList;