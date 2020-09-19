import React, { useEffect, useRef, useState } from 'react';
import { gapi } from 'gapi-script';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import LockIcon from '@material-ui/icons/Lock';
import { Grid } from '@material-ui/core';
import Header from '../Header';
import Home from '../../Pages/Home/Home';
import AddLesson from '../../Pages/AddEvent/AddEvent'
import './Login.css';

const Home = (props) => {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const [userCalender, setUserCalender] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const signUpRef = useRef();
  const signOutRef = useRef();

}

export default Home