  import React from 'react'
  import Header from './Header';
  import Footer from './Footer'


  const Main = () => {
    return (
      <>
      
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div>
hi
            </div>
            <div>
hi
            </div>
          </div>
        </div>
        <div className='grid-container'>
        <div className='main-leftside'>
          <span>Dmitri Morozov</span>
          <span>Lead Engineer at Upstatement</span>
          <span>I build pixel-perfect, engaging, and accessible digital experiences.</span>
          <div className='main-leftside-links'>
            <a className='main-link-about' href='#about'>---About</a>
            <a className='main-link-experience' href='#experience'>---Experience</a>
            <a className='main-link-projects' href='#projects'>---Projects</a>
            


            
          </div>
        </div>

        <div className='main-rightside-about' if='about'>
        
          </div>
        </div>
      </div>
      

</>      

    )
  }

  export default Main