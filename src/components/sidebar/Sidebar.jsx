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
        <p className="title">MAIN</p>
        <li>
          <DashboardOutlinedIcon className='icon' />
          <span>Dashboard</span>
        </li>
        <p className="title">LISTS</p>
        <li>
          <PersonOutlineOutlinedIcon className='icon'/>
          <span>Users</span>
        </li>
        <li>
          <Inventory2OutlinedIcon className='icon'/>
          <span>Products</span>
        </li>
        <li>
          <CreditCardOutlinedIcon className='icon'/>
          <span>Orders</span>
        </li>
        <li>
          <LocalShippingOutlinedIcon className='icon'/>
          <span>Delivery</span>
        </li>
        <p className="title">USEFUL</p>
        <li>
          <AssessmentIcon className='icon'/>
          <span>Stats</span>
        </li>
        <li>
          <NotificationsNoneOutlinedIcon className='icon'/>
          <span>Notifications</span>
        </li>
        <p className="title">SERVICE</p>
        <li>
          <SettingsSystemDaydreamOutlinedIcon className='icon'/>
          <span>System Health</span>
        </li>
        <li>
          <AdminPanelSettingsOutlinedIcon className='icon'/>
          <span>Logs</span>
        </li>
        <li>
          <SettingsOutlinedIcon className='icon'/>
          <span>Settings</span>
        </li>
        <p className="title">USER</p>
        <li>
          <AccountCircleOutlinedIcon className='icon'/>
          <span>Profile</span>
        </li>
        <li>
          <ExitToAppOutlinedIcon className='icon'/>
          <span>Logout</span>
        </li>
      </ul>
    </div>
    <div className="bottom">
      <div className="colorOption"></div>
      <div className="colorOption"></div>
    </div>
    </div>
  )
}

export default Sidebar