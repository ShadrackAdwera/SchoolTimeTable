import React from 'react';
import moment from 'moment';
import Card from '../../Components/Card/Card';

const DisplayLessons = (props) => { 
  return <div>
      <div className="card-list">
        {props.calender.map((event) => (
          <Card
            key={event.id}
            day={moment().format('LLL')}
            summary={event.summary}
            description={event.description}
            location={event.location}
            startTime={moment(event.start.dateTime).calendar()}
            endTime={moment(event.end.dateTime).format('LT')}
            status={event.status}
            hangOutsLink={event.hangoutLink || '/'}
          />
        ))}
      </div>
    </div>
};

export default DisplayLessons;
