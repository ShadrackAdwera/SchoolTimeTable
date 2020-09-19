import React, { useReducer, useState } from 'react';
import { gapi } from 'gapi-script';
import {
  CircularProgress,
  Grid,
  Button,
  Snackbar,
  makeStyles,
  Modal,
  Backdrop,
  InputLabel,
  Fade,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: '100%',
    },
  }));

  const initialState = {
    unitTitle: '',
    unitName: '',
    unitLocation: '',
    unitLecturer: '',
    unitStartTime: '',
    unitEndTime: '',
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_UNIT_TITLE':
        return { ...state, unitTitle: action.value };
      case 'SET_UNIT_NAME':
        return { ...state, unitName: action.value };
      case 'SET_UNIT_LOCATION':
        return { ...state, unitLocation: action.value };
      case 'SET_UNIT_LECTURER':
        return { ...state, unitLecturer: action.value };
      case 'SET_UNIT_START_TIME':
        return { ...state, unitStartTime: action.value };
      case 'SET_UNIT_END_TIME':
        return { ...state, unitEndTime: action.value };
      default:
        return state;
    }
  };

const AddLesson = () => {

};

export default AddLesson;
