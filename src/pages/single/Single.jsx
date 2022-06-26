import React from 'react'
import Avatar from '../../img/Girl3.jpg'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'
import './signle.scss'
const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className='title'>Student Information</h1>
            <div className="item">
              <img src={Avatar} alt="" className="itemImg" />
              <div className="details">
                <h3 className="itemTitle">Marry Angel</h3>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValie">marryangel@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValie">+1 555 55 55</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValie">920 Yonge Street</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValie">Canada</span>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <Chart aspect={3 / 1} title="User Speding (Last 6 Monts)"/>
          </div>
        </div>




        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single