import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-dark text-light py-5 mt-5'>

      <div className="container text-md-left">

        <div className="row text-md-left">

          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Dmitri Morozov</h5>
                <p>I am a front-end developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Products</h5>
                <p>
                  <a href='#' className='text-white' style={{textDecoration: 'none'}}>TheProviders</a>
                </p>
                <p>
                  <a href='#' className='text-white ' style={{textDecoration: 'none'}}>Creativity</a>
                </p>
                <p>
                  <a href='#' className='text-white' style={{textDecoration: 'none'}}>SourceFiles</a>
                </p>
                <p>
                  <a href='#' className='text-white' style={{textDecoration: 'none'}}>bootstrap 5 alpha</a>
                </p>
          </div>
          <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
                <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Useful Links</h5>
                <p>
                  <a href='#' className='text-white' style={{textDecoration: 'none'}}>Your account</a>
                </p>
                <p>
                  <a href='#' className='text-white' style={{textDecoration: 'none'}}>Become an Affiliates</a>
                </p>
                <p>
                  <a href='#' className='text-white' style={{textDecoration: 'none'}}>Shipping Rates</a>
                </p>
                <p>
                  <a href='#' className='text-white' style={{textDecoration: 'none'}}>Help</a>
                </p>
                </div>
                <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
                  <h5 className='text-uppercase mb-4 font-weight-bold text-warning'> Contact</h5>
                  <p>
                    <i className="fas fa-home mr-3"></i> PA,NJ,NY
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> dmitri.m80@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> phone-number
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i>
                  </p>

                </div>
                
                <hr className="mb-4"/>
                <div className="col-md-7 col-lg-8">
                  <p className='text-white-50'> Copyright @2024 All rights reserved by:
                    <a href='#'>
                      <strong className='text-warning'>Dmitri Morozov</strong>
                    </a></p>

                </div>
                <div className='col-md-5 col-lg-4'>
                  <div className="text-center text-md-right">

                    <ul className='list-unstyled list-inline'>
                      <li className='list-inline-item'>
                        <a href='#' className='btn-floating btn-sm text-light' style={{ fontSize: '23px' }}>
                          <i className='fab fa-facebook'></i>
                          </a>
                      </li>
                      <li className='list-inline-item'>
                        <a href='#' className='btn-floating btn-sm text-light' style={{ fontSize: '23px' }}>
                          <i className='fab fa-twitter'></i></a>
                      </li>
                      <li className='list-inline-item'>
                        <a href='#' className='btn-floating btn-sm text-light' style={{ fontSize: '23px' }}>
                          <i className='fab fa-google-plus'></i></a>
                      </li>
                      <li className='list-inline-item'>
                        <a href='#' className='btn-floating btn-sm text-light' style={{ fontSize: '23px' }}>
                          <i className='fab fa-linkedin-in'></i></a>
                      </li>
                      <li className='list-inline-item'>
                        <a href='#' className='btn-floating btn-sm text-light' style={{ fontSize: '23px' }}>
                          <i className='fab fa-youtube'></i></a>
                      </li>

                    </ul>

                  </div>
                </div>
            </div>
        </div>
    </footer>
    
  )
}

export default Footer