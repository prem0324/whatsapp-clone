import React from 'react'
import './sidebar.css'
import logo from '../images/image.png'
// import { IconButton,SearchIcon } from '@mui/material/Search'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { MoreVert } from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat'
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='head'>
        <div className='profile'>
        <img alt='image of somthing' src={logo}/>
        </div>
        <div className='head_r_compo'>
        <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
        <IconButton>
        <ChatIcon/>
        </IconButton>
        <IconButton>
        <MoreVert/>
        </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
