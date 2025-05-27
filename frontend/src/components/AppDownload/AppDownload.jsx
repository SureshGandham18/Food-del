import React from 'react'
import './AppDownload.css'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoIosAppstore } from "react-icons/io";
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br />TastyGo App</p>
        <div className="app-download-platforms">
            <IoLogoGooglePlaystore className='icon'/>
            <IoIosAppstore className='icon'/>
        </div>
    </div>
  )
}

export default AppDownload