import React, { useState } from 'react';

import { _2020 } from '../constants/books/2020';
import { _2019 } from '../constants/books/2019';
import { _2018 } from '../constants/books/2018';
import PinnedBook from '../components/PinnedBook';


import '../styles/PinnedBook.css'
import '../styles/Book.css'



function Books () {

    const [ toggle2018, setToggle2018 ] = useState(false)
    const [ toggle2019, setToggle2019 ] = useState(false)
    const [ toggle2020, setToggle2020 ] = useState(true)

    const bookMap = {
        "2018": _2018,
        "2019": _2019,
        "2020": _2020,
    }

    const getState  = (year) => {
        let display = false;
        switch (year) {
            case "2018": display = toggle2018; break;
            case "2019": display = toggle2019; break;
            case "2020": display = toggle2020; break;
        }
        return display;
    }

    const toggle = (year) => {
        switch (year) {
            case "2018": setToggle2018(!toggle2018); return;
            case "2019": setToggle2019(!toggle2019); return;
            case "2020": setToggle2020(!toggle2020); return;
        }
    }

    const displayBooks = (year) => {
        let display = getState(year);
        if (display) {
            return (
                <div>
                    <div className="book-list">
                        {
                            bookMap[year].map ( 
                                b => <PinnedBook 
                                    title = { b.name }
                                    cover = { b.image }
                                    link  = { b.link } 
                                /> 
                            )
                        }
                    </div>
                    <div className="book-year-divider"/>
                </div>
            )
        }
    }

    const displayIcon = (year) => {
        let display = getState(year);
        return display ? <b> 📖 </b> : <b> 📕 </b>
    }

    const yearlyBooks = (bookMap, year) => {
        return (
            <div className="book-year-container">
                <div className="book-year-bar" onClick={ () => toggle(year) }>
                    <div className="book-icon"> { displayIcon(year) } </div>
                    <h1 className="book-year"> {year} </h1>
                </div>
                <div>
                    { displayBooks(year) }
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
