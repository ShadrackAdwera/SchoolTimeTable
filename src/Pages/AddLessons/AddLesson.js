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
  TextField,
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

const AddLesson = (props) => {
  const classes = useStyles();
  const [formState, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [message, setMessage] = useState('');

  const addEvent = () => {
    setIsLoading(true);
    const event = {
      summary: formState.unitTitle,
      location: formState.unitLocation,
      description: formState.unitName,
      start: {
        dateTime: formState.unitStartTime + ':00+03:00',
        timeZone: 'Africa/Nairobi',
      },
      end: {
        dateTime: formState.unitEndTime + ':00+03:00',
        timeZone: 'Africa/Nairobi',
      },
      recurrence: ['RRULE:FREQ=WEEKLY;UNTIL=20201210T000000Z'],
      attendees: [{ email: formState.unitLecturer }],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 },
          { method: 'popup', minutes: 10 },
        ],
      },
    };

    const request = gapi.client.calendar.events.insert({
      calendarId: 'primary',
      resource: event,
    });
    request.execute((event) => {
      if (event.code === 400) {
        setIsLoading(false);
        setOpenSnackBar(true);
        setMessage('Lesson Schedule failed! Try again');
      } else {
        setOpenSnackBar(true);
        setIsLoading(false);
        setMessage('Lesson scheduled!');
      }
    });
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Schedule Lesson</h2>
            <Grid item xs={12} sm={12} className='add-lesson'>
              <FormControl className={classes.formControl}>
                <InputLabel id="select-label">Unit Title</InputLabel>
                <Select
                  labelId="select-label"
                  id="simple-select"
                  fullWidth
                  value={formState.unitTitle}
                  onChange={(e) =>
                    dispatch({
                      type: 'SET_UNIT_TITLE',
                      value: e.target.value,
                    })
                  }
                >
                  <MenuItem value={'SMA 2305'}>SMA 2305</MenuItem>
                  <MenuItem value={'ICS 2405'}>ICS 2405</MenuItem>
                  <MenuItem value={'ICS 2411'}>ICS 2411</MenuItem>
                  <MenuItem value={'ICS 2105'}>ICS 2105</MenuItem>
                  <MenuItem value={'ICS 2307'}>ICS 2307</MenuItem>
                  <MenuItem value={'SMA 2304'}>SMA 2304</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id="select-label">Unit Name</InputLabel>
                <Select
                  labelId="select-label"
                  id="simple-select"
                  fullWidth
                  value={formState.unitName}
                  onChange={(e) =>
                    dispatch({
                      type: 'SET_UNIT_NAME',
                      value: e.target.value,
                    })
                  }
                >
                  <MenuItem value={'Complex Analysis 1'}>
                    Complex Analysis 1
                  </MenuItem>
                  <MenuItem value={'Knowledge Based Systems'}>
                    Knowledge Based Systems
                  </MenuItem>
                  <MenuItem value={'Cryptography'}>Cryptography</MenuItem>
                  <MenuItem value={'Data Structures and Algorithms'}>
                    Data Structures and Algorithms
                  </MenuItem>
                  <MenuItem value={'Simulation and Modelling'}>
                    Simulation and Modelling
                  </MenuItem>
                  <MenuItem value={'Ordinary Differential Equations 1'}>Ordinary Differential Equations 1</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id="select-label">Location</InputLabel>
                <Select
                  labelId="select-label"
                  id="simple-select"
                  fullWidth
                  value={formState.unitLocation}
                  onChange={(e) =>
                    dispatch({
                      type: 'SET_UNIT_LOCATION',
                      value: e.target.value,
                    })
                  }
                >
                  <MenuItem value={'SCC Park, Juja'}>SCC 101 Lab</MenuItem>
                  <MenuItem value={'Technology House, JKUAT'}>
                    Technology House Room 1
                  </MenuItem>
                  <MenuItem value={'Hall 7 Lecture Hall, Juja'}>
                    Hall 7 Room 002
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                name="email"
                type="email"
                label="Lecturer Email"
                fullWidth
                value={formState.unitLecturer}
                onChange={(e) =>
                  dispatch({
                    type: 'SET_UNIT_LECTURER',
                    value: e.target.value,
                  })
                }
              />
            </Grid>
            <br />
            <Grid item xs={12} sm={12}>
              <label htmlFor="start-date">Start Date | Time:</label>
              <br />
              <br />
              <input
                type="datetime-local"
                style={{ width: '100%' }}
                id="start-date"
                value={formState.unitStartTime}
                onChange={(e) =>
                  dispatch({
                    type: 'SET_UNIT_START_TIME',
                    value: e.target.value,
                  })
                }
              />
            </Grid>
            <br />
            <Grid item xs={12} sm={12}>
              <label htmlFor="end-date">End Date | Time:</label>
              <br />
              <br />
              <input
                type="datetime-local"
                style={{ width: '100%' }}
                id="end-date"
                value={formState.unitEndTime}
                onChange={(e) =>
                  dispatch({
                    type: 'SET_UNIT_END_TIME',
                    value: e.target.value,
                  })
                }
              />
            </Grid>
            <br />
            <Grid item xs={12} sm={12}>
              {isLoading ? (
                <CircularProgress color="inherit" />
              ) : (
                <Button
                  style={{
                    background: '#ff8a00',
                    color: 'white',
                    width: '100%',
                    fontWeight: 'bold',
                  }}
                  onClick={addEvent}
                >
                  SUBMIT
                </Button>
              )}
            </Grid>
          </div>
        </Fade>
      </Modal>
      <Snackbar
        open={openSnackBar}
        onClose={() => setOpenSnackBar(false)}
        autoHideDuration={6000}
        message={message}
      />
    </div>
  );
};

export default AddLesson;
