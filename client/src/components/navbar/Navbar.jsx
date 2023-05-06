import React, { useState } from 'react';
import './navbar.scss'
import {Search,Notifications,ArrowDropDown} from '@mui/icons-material';

function Navbar() {

const [scrol,setScroll]  = useState(false)

window.onscroll = () => {
  setScroll(window.pageYOffset === 0 ? false : true)
  return () => (window.onscroll = null);
}


  return (
        <React.Fragment>
          <div className= { scrol ? 'navbar scrolled' : 'navbar'} >
            <div className="container">
              <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" alt="netflix-icon " />
                <span  >Home page</span>
                <span  >series</span>
                <span  >Movies</span>
                <span  >New and popular</span>
                <span  >My List</span>
                
              </div>
              <div className="right">
                <Search className='icon' />
                <span>Kid</span>
                <Notifications className='icon'/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdgoJvlK-8ghkZXFUpkLe-DtFJ_Xxnkr5Muw&usqp=CAU" alt="" />
                
                <div className="profile">

                <ArrowDropDown className='icon'/>
                <div className="options">
                  <span>settings</span>
                  <span>Logout</span>
                </div>
                </div>
                
              </div>
            </div>
          </div>
        </React.Fragment>
  )
}

export default Navbar