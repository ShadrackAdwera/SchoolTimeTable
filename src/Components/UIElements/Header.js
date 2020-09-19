import React from 'react'
import logo from '../../ta.jpg'

const Header = () => {
return <div style={{marginBottom:'5%'}}>
<img src={logo} alt='logo' style={{width:'60%', height:'60%'}}/>
<h2>MyTimetableApp</h2>
<p>Sign in to continue ...</p>
</div>
}

export default Header