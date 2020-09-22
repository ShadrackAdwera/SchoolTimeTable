import React, { useEffect, useRef, useState } from 'react';
import { gapi } from 'gapi-script';
import Header from '../../Components/UIElements/Header';
import AddLesson from '../AddLessons/AddLesson';
import DisplayLessons from '../DisplayLessons/DisplayLessons';
import './Home.css';
import Footer from '../../Components/UIElements/Footer';

const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
];
const SCOPES = 'https://www.googleapis.com/auth/calendar';

const Home = (props) => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const [userCalender, setUserCalender] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const signUpRef = useRef();
  const signOutRef = useRef();

  //API Response from OAuth and Google calender
  useEffect(() => {
    const updateSigninStatus = (isSignedIn) => {
      if (isSignedIn) {
        setIsUserSignedIn(true);
        listUpcomingEvents();
      } else {
        setIsUserSignedIn(false);
      }
    };
    updateSigninStatus();
    const initClient = () => {
      gapi.client
        .init({
          apiKey: process.env.REACT_APP_API_KEY,
          clientId: process.env.REACT_APP_CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        })
        .then(
          function () {
            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
            updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          },
          function (error) {
            console.log(JSON.stringify(error, null, 2));
            console.log(' ===> ', error);
          }
        );
    };
    gapi.load('client:auth2', initClient);
    const listUpcomingEvents = () => {
      gapi.client.calendar.events
        .list({
          calendarId: 'primary',
          timeMin: new Date().toISOString(),
          timeMax: new Date(
            new Date().setDate(new Date().getDate() + 7)
          ).toISOString(),
          showDeleted: false,
          singleEvents: true,
          maxResults: 10,
          orderBy: 'startTime',
        })
        .then(function (response) {
          setUserCalender(response.result.items);
        })
        .catch((error) => console.log(error));
    };
  }, []);

  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignoutClick = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  return !isUserSignedIn ? (
    <Header cref={signUpRef} clicked={handleAuthClick} />
  ) : (
    <div data-testid="homepage">
        <DisplayLessons calender={userCalender} />
      <AddLesson
        open={openModal}
        close={() => setOpenModal(false)}
      />
      <Footer cref={signOutRef} clicked={handleSignoutClick} openModal={() => setOpenModal(true)}/>
    </div>
  );
};

export default Home;
