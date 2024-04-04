import React from 'react'
import './main.css'
import Header from './Header'
import Body from './Body'


const Main = () => {
  return (
    <>
    <div className='main-box'>
        <Header/>
        <div className="spacer"></div> 
        <div className="body-wrapper">
            <Body/>
        </div>
        
    </div>
    
    </>
  )
}

export default Main