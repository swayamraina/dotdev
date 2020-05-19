import React from 'react';

import '../styles/Event.css'



function Event (props) {
    return (
        <div className="event">
            <div className="event-time col-1">{props.date}</div>
            <div className="event-logo">
                <div className="event-circle"/>
                <div className="event-vertical-bar"/>
            </div>
            <div className="event-text col-2">
                <div className="event-title">~ {props.title}</div>
                <div className="event-location">{props.location}</div>
                <div className="event-content">{props.content}</div>
                <ul className="event-items">
                    { props.items.map( i => <li>{i}</li>) }
                </ul>
            </div>
        </div>
    )
}

export default Event;