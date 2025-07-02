import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import data from './data'; 

const SchoolRow = ({ school, events, isExpanded, onToggle }) => {
  return (
    <>
      <tr onClick={onToggle} style={{ cursor: 'pointer' }}>
        <td>{school.position}</td>
        <td className='School'>
          <span className="arrow" style={{ marginRight: '10px' }}>
            {isExpanded ? '▼' : '►'}
          </span>
          {school.name}
        </td>
        <td className='School'>{school.points}</td>
      </tr>
      <CSSTransition in={isExpanded} timeout={300} classNames="expand" unmountOnExit>
        <tr>
          <td colSpan="3">
            <div className="events-container">
              {events.map((event, index) => (
                <div key={index} className="event-item">
                  <span className="event-name">{event.name}</span>
                  <span className="event-points">{event.points}</span>
                </div>
              ))}
            </div>
          </td>
        </tr>
      </CSSTransition>
    </>
  );
};

const Table = ({ data }) => {
  const [expandedRows, setExpandedRows] = useState({});

  const toggleRow = (index) => {
    setExpandedRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th style={{ width: '10%' }}>Position</th>
          <th style={{ width: '70%' }}>School name</th>
          <th style={{ width: '20%' }}>Points</th>
        </tr>
      </thead>
      <tbody>
        {data.map((school, index) => (
          <SchoolRow
            key={index}
            school={school}
            events={school.events}
            isExpanded={!!expandedRows[index]}
            onToggle={() => toggleRow(index)}
          />
        ))}
      </tbody>
    </table>
  );
};

function Leaderboard() {
  return (
    <div className="tabledata">
      <h1 className="Leaderboard">Leaderboard</h1>
      <Table data={data} />
    </div>
  );
}

export default Leaderboard;
