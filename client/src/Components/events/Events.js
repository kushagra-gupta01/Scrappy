import React, {useState} from 'react'
import './StyleEvent.css';
import { useNavigate } from 'react-router-dom';

export default function App () {

  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  async function registerEvent(event) {
    event.preventDefault();

    const response = await fetch('/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        date,
        time,
        location
      }),
    });

    const data = await response.json();

    if (data.success) {
      alert('Event added successfully');
      navigate('/');
      console.log(data.data)
    }
    else {
      alert('Event already exist');
    }
  }

  return (
    <div className="containers">
      <div className=" w-full pl-8 pt-6">
        <div class="mb-[-30px]">
          <button
            onClick={() => {
              navigate("/");
            }}
            data-text="Awesome"
            class="button"
          >
            <span class="actual-text">&nbsp;Scrappy&nbsp;</span>
            <span class="hover-text" aria-hidden="true">
              &nbsp;Scrappy&nbsp;
            </span>
          </button>
        </div>
      </div>
      <div className="heading">Host an Event!</div>
      <div id="cards">
        <div id="cards__content">
          <form onSubmit={registerEvent}>
            <div className="ipDiv" id="nameIp">
              <label for="ename">Event Name</label>
              <br />
              <input
                type="text"
                name="ename"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="ipDiv">
              <label for="desc">Event Description</label>
              <br />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
                cols={5}
                name="desc"
                required
              />
            </div>
            <div className="ipDiv">
              <label for="locality">Locality</label>
              <br />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                name="locality"
                required
              />
            </div>
            <div className="ipDiv">
              <label for="date">Date</label>
              <br />
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                name="date"
                required
              ></input>
            </div>
            <div className="ipDiv">
              <label for="time">Time</label>
              <br />
              <input
                value={time}
                onChange={(e) => setTime(e.target.value)}
                type="time"
                name="time"
                required
              />
            </div>
            <div className="submitBtn">
              <button type="submit" class="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}