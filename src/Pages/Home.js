import React, { useEffect, useRef, useState } from 'react';
import { gapi } from 'gapi-script';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import LockIcon from '@material-ui/icons/Lock';
import { Grid } from '@material-ui/core';
import Header from '../Header';
import Home from '../../Pages/Home/Home';
import AddLesson from '../../Pages/AddEvent/AddEvent';
import './Login.css';

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
          apiKey: API_KEY,
          clientId: CLIENT_ID,
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
          console.log(response.result.items);
        })
        .catch((error) => console.log(error));
    };
  }, []);

  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn();
  }

  const handleSignoutClick = () => {
    gapi.auth2.getAuthInstance().signOut();
  }


};

export default Home;
