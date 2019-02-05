import React, {Component} from 'react';
import {books} from "../../Constants/Information";

class BookList extends Component {
    render() {
        return (
            <div className='Container-Flex'>
                {books.map(book=>(
                    <div className='Container-Flex-Element'>
                        <li>{book.title}</li>
                        <img src={book.thumbnail}/>
                    </div>
                ))}
            </div>
        );
    }
}

export default BookList;