import React, { useState, useEffect } from 'react';

function Showevent() {
    const [event, setEvent] = useState([]);

    useEffect(() => {
        async function fetchEventdetail() {
            const res = await fetch('/api/eventscreated', {
                method: "GET"
            });
            const data = await res.json()
            console.log(data);
            if (res.ok) {
                setEvent(data.data);
            } else {
                alert(data.error)
            }
        };
        fetchEventdetail();
    }, []);

    return (
        <div>
            <h1>Event List</h1>
            {event && event.map((event) => (
                <div key={event._id}>
                    <h2>title: {event.title}</h2>
                    <p>description: {event.description}</p>
                    <p>Date and Time: {event.datetime}</p>
                    <p>Location: {event.location}</p>
                </div>
            ))}
        </div>
    )
}

export default Showevent;
