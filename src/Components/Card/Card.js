import React from 'react';
import ta from '../../taf.png';
import './Home.css';

const Card = (props) => {
  return (
    <div>
      <article className="card">
        <header className="card-header">
          <p>{props.day}</p>
          <h2>{props.summary}</h2>
          <h4>{props.description}</h4>
          <p>Location: {props.location}</p>
        </header>

        <div className="card-author">
          <a className="author-avatar" href="/">
            <img src={ta} alt="ta" />
          </a>
          <svg className="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>

          <div className="author-name">
            <div className="author-name-prefix">Lesson Day</div>
            {`${props.startTime} to ${props.endTime}`}
          </div>
        </div>
        <div className="tags">
          <a href="/">{props.status}</a>
          <a href={props.hangOutsLink}>HangOuts Link</a>
        </div>
      </article>
    </div>
  );
};

export default Card;
