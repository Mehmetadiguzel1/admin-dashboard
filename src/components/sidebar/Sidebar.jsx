import React from 'react'
import './sidebar.scss'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="top"><span className='logo'>Kekoadmin</span></div>
    <hr />
    <div className="center">
      <ul>
        <li>
          <DashboardOutlinedIcon/>
          <span>Dashboard</span>
        </li>
        <li>
          <PersonOutlineOutlinedIcon/>
          <span>Users</span>
        </li>
        <li>
          <Inventory2OutlinedIcon/>
          <span>Products</span>
        </li>
        <li>
          <CreditCardOutlinedIcon/>
          <span>Orders</span>
        </li>
        <li>
          <LocalShippingOutlinedIcon/>
          <span>Delivery</span>
        </li>
        <li>
          <AssessmentIcon/>
          <span>Stats</span>
        </li>
        <li>
          <NotificationsNoneOutlinedIcon/>
          <span>Notifications</span>
        </li>
        <li>
          <SettingsSystemDaydreamOutlinedIcon/>
          <span>System Health</span>
        </li>
        <li>
          <AdminPanelSettingsOutlinedIcon/>
          <span>Logs</span>
        </li>
        <li>
          <SettingsOutlinedIcon/>
          <span>Settings</span>
        </li>
        <li>
          <AccountCircleOutlinedIcon/>
          <span>Profile</span>
        </li>
        <li>
          <ExitToAppOutlinedIcon/>
          <span>Logout</span>
        </li>
      </ul>
    </div>
    <div className="bottom">Theme</div>
    </div>
  )
}

export default Sidebar