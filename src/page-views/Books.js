import React from 'react';

import { bookMap } from './constants/Books'
import PinnedBook from '../components/PinnedBook';


import '../styles/PinnedBook.css'



function Books () {

    const yearlyBooks = (bookMap, year) => {
        return (
            <div className="book-year-container">
                <h1 className="book-year"> <u>{year}</u> </h1>
                <div>
                    {
                        bookMap[year].map ( 
                            b => <PinnedBook 
                                cover = { b.link }
                                total = { b.total }
                                read = { b.read }
                            /> 
                        )
                    }
                </div>
            </div>
        );
        
    }

    return (
        <div className="books-home">
            {
                Object.keys(bookMap).reverse().map((year) => {
                    return yearlyBooks(bookMap, year)
                })
            }
        </div>
    );

}

export default Books;
