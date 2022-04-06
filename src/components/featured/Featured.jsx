import React from 'react'
import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className='title' >Total Revenue</h1>
            <MoreVertOutlinedIcon fontSize='small'/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgress variant="determinate" size={100} value={70} />
            </div>
            <p className='title'>Total sales made today!</p>
            <p className='amount'>$420</p>
            <p className='desc'>Previus transactions processing. Last payments may not be included.</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative" >
                        <KeyboardArrowDownOutlinedIcon fontSize='small' />
                        <div className="resultAmount">$55.4k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive" >
                        <KeyboardArrowUpOutlinedIcon fontSize='small' />
                        <div className="resultAmount">$55.4k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize='small' />
                        <div className="resultAmount">$55.4k</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Featured