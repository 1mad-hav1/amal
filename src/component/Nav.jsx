import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography color={"White"} variant='h3' align='left'>Blog Dashboard</Typography>
                <Button variant='contained' color='secondary'><Link to={'/'}>Home</Link></Button>
                <Button variant='contained' color='secondary'><Link to={'/Blg'}>Add Blog</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Nav