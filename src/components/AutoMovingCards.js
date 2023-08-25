import React from 'react';
import '../styles.css';

const AutoMovingCards = () => {
  // Sample event data
  const events = [
    { id: 1, name: 'Event 1', description: 'Description of Event 1' },
    { id: 2, name: 'Event 2', description: 'Description of Event 2' },
    // Add more events here
  ];

  return (
    <div className="auto-moving-cards">
      {events.map(event => (
        <div className="card" key={event.id}>
          <img src={`event-${event.id}.jpg`} alt={event.name} />
          <div className="card-content">
            <h3>{event.name}</h3>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AutoMovingCards;
