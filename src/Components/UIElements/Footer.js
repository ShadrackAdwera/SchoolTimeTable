import React from 'react'
import { Grid, Button } from '@material-ui/core'
import LockIcon from '@material-ui/icons/LockSharp'
import AddIcon from '@material-ui/icons/Add'

const Footer = (props) => {
return <div style={{ textAlign: 'center', marginTop: '5%' }}>
<Grid>
  <Button
    style={{
      background: 'red',
      color: 'white',
      marginLeft: '2%',
      fontWeight: 'bold',
    }}
    ref={props.cref}
    onClick={props.clicked}
    startIcon={<LockIcon />}
  >
    Sign Out
  </Button>
  <Button
    style={{
      background: 'green',
      color: 'white',
      marginLeft: '2%',
      fontWeight: 'bold',
    }}
    onClick={props.openModal}
    startIcon={<AddIcon />}
  >
    Add Lesson
  </Button>
</Grid>
<br />
<h3>Copyright 2020, TimetableApp</h3>
</div>
}

export default Footer