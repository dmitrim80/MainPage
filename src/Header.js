import React from 'react'

const Header = () => {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-md'>
        <div className='container'>
            <h5 className='text-light'>DM</h5>
            <button className="navbar-toggler" data-bs-toggle="collapse"
                data-bs-target="#nav" aria-controls="nav" aria-label="Expand Navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="nav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link active" aria-current="page">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link ">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Work</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link disabled">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header