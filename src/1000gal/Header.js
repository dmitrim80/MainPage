import React from 'react'

const Header = () => {
  return (
    
    <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
        <span className="fs-4">Aquarium - 1000 Gallons Project</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
        
        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
      </ul>
    </header>
  </div>
  )
}

export default Header