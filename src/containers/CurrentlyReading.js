import React from 'react';
import { Link } from 'react-router-dom';

import Quote from '../components/Quote'
import PinnedBook from '../components/PinnedBook'

import '../styles/CurrentlyReading.css'



function CurrentlyReading () {

    return (
        <div>
            <h3><Quote quote="A reader lives a thousand lives before he dies..." /></h3>
            <div className="currently-reading-desc">
                This is something that has stuck with me for some time now. I strongly believe that one never stops learning. And the best way to learn is not by learning the hard way but by simply learning from the mistakes and rich experiences of others. <br/>
                This world is full of such a lovely thing called a Book. A book takes you to places you can never go and lets you be the person you never imagined! <br/><br/>        
                Here I share the books I'm currently reading.
            </div>
            <div className="currently-reading-books" >
                <PinnedBook cover="https://images-na.ssl-images-amazon.com/images/I/516b9EbjBOL._SX332_BO1,204,203,200_.jpg" />
                <PinnedBook cover="https://images-na.ssl-images-amazon.com/images/I/41bgiGplMlL._SX301_BO1,204,203,200_.jpg" />
                <Link className="previous-read" to="/blogs/books"/>
            </div>
        </div>
    );

}

export default CurrentlyReading;
