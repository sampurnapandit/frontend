import React from 'react';
import "./sidebar.css";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import { IconButton } from '@mui/material';
import logo from './logo.png';
import Bodyleft from './Bodyleft';
console.log(logo);
function sidebar(){
  return (
    <div className="sidebar">
        <div className='sidebar__header'>
       <img src={logo} alt='logo'/>
          <h2>Eagle Eye</h2>
        <div className='sidebar__right'>
        <IconButton><AddAlertOutlinedIcon/></IconButton>
        <IconButton><AccountCircleOutlinedIcon/></IconButton>
        <IconButton><SettingsApplicationsRoundedIcon/> </IconButton>
          </div>
          </div>
          <div className='sidebar__section'>
        <div className='dash'> <h3 > Dashboard</h3></div> 
          <div><h3>Attacks</h3></div>
      <div className='report'> <h3> Reports</h3></div>
      </div>
      <div>
      </div>   
      <Bodyleft/>   
</div>

 
  );
}

export default sidebar;