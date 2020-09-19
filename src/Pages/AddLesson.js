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

const AddLesson = () => {

};

export default AddLesson;
