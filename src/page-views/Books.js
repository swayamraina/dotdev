import React from 'react';

import { _2020 } from '../constants/books/2020';
import { _2019 } from '../constants/books/2019';
import { _2018 } from '../constants/books/2018';
import PinnedBook from '../components/PinnedBook';


import '../styles/PinnedBook.css'



function Books () {

    const bookMap = {
        "2018": _2018,
        "2019": _2019,
        "2020": _2020,
    }

    const yearlyBooks = (bookMap, year) => {
        return (
            <div className="book-year-container">
                <h1 className="book-year"> <u>{year}</u> </h1>
                <div>
                    {
                        bookMap[year].map ( 
                            b => <PinnedBook 
                                title = { b.name }
                                cover = { b.image }
                                total = { b.total }
                                read  = { b.read }
                                link  = { b.link } 
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
