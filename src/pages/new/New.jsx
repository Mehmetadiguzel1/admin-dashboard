import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import './New.scss'
const New = () => {
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add New User</h1>
        </div>




        <div className="bottom">
          <div className="left">
            <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" />
          </div>




          <div className="right">
            <form >
              <div className="fromInput">
                <label htmlFor='file'>
                  Image: <DriveFolderUploadOutlinedIcon className='icon'/>
                </label>
                <input type="file" id='file' style={{display:"none"}}/>
              </div>
              <div className="fromInput">
                <label> Username </label>
                <input type="text" placeholder='Yukonnz' />
              </div>
              <div className="fromInput">
                <label> Name and Surename </label>
                <input type="text" placeholder='Mehmet Adiguzel' />
              </div>
              <div className="fromInput">
                <label> Email </label>
                <input type="email" placeholder='mehmet.fadiguzel@gmail.com' />
              </div>
              <div className="fromInput">
                <label> Phone </label>
                <input type="text" placeholder='+123' />
              </div>
              <div className="fromInput">
                <label> Password </label>
                <input type="password" />
              </div>
              <div className="fromInput">
                <label> Address </label>
                <input type="text" placeholder='Yonge Street' />
              </div>
              <div className="fromInput">
                <label> Country </label>
                <input type="text" placeholder='Canada' />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New