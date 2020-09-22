import React from 'react';
import { Button } from '@material-ui/core';
import LockIcon from '@material-ui/icons/LockOpen';
import logo from '../../ta.jpg';
import './Header.css';

const Header = (props) => {
  return (
    <div className="centered">
      <img src={logo} alt="logo" style={{ width: '60%', height: '60%' }} />
      <h2>MyTimetableApp</h2>
      <p>Sign in to continue ...</p>
      <br />
      <br />
      <Button
        style={{
          background: 'green',
          color: 'white',
          width: '60%',
          fontWeight: 'bold',
        }}
        className='signin-button'
        ref={props.cref}
        onClick={props.clicked}
        startIcon={<LockIcon />}
      >
        Sign In
      </Button>
    </div>
  );
};

export default Header;
