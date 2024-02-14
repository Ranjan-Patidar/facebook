import React from 'react'
import './HeaderArea.css'
import{AiOutlineSearch, AiOutlineWallet,AiFillHome} from 'react-icons/ai'
import{MdOndemandVideo} from 'react-icons/md'
import{FaRegFlag,FaUsers,FaPlusCircle,FaBell,FaFacebookMessenger} from'react-icons/fa'
import MainArea from './MainArea.js'
function HeaderArea() {
  return (
    <div className="Homepage">
    <div className="header">
      <div className='first-header'>
       <div className='logo'>
        <img src="/logo.png" alt="logo" style={{height:"50px",padding:"2rem"}}/>
       </div>
       <div className='Search'>
         <AiOutlineSearch style={{height:"4rem"}}/>
         <input placeholder='Search ' type="search"/> 
       </div>
      </div>
      <div className='middle-header'>
       <div className='Icon'>
         <AiFillHome fontsize="2.3rem" color="#1877F2"/>
       </div>
       <div className='Icon'>
         <FaRegFlag fontsize="2.3rem" />
       </div>
       <div className='Icon'>
         <MdOndemandVideo fontsize="2.3rem" />
      </div>
      <div className='Icon'>
        <FaUsers fontsize="2.3rem"/>
      </div>
      <div className='Icon'>
        <AiOutlineWallet fontsize="2.3rem"/>
      </div>
    </div>
    <div className='third-header'>
      <div className='plus'>
         <FaPlusCircle fontsize="2.3rem"/>
      </div>
      <div className='plus'>
      <FaFacebookMessenger fontsize="2.3rem"/>
      </div>
      <div className='plus'>
         <FaBell fontsize="2.3rem"/>
      </div>
      <div className='pluss'>
        <img src="/homeimage.jpg" alt='dp' style={{height:"40px"}}/>
      </div>
    </div>
    </div>
     <MainArea/>
    </div>
  )
}

export default HeaderArea