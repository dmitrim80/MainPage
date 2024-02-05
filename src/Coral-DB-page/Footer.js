import React from 'react'

const Footer = ({isLoginPage, darkMode }) => {
  const footerClass = isLoginPage ? 'footer-login' : 'footer';
  return (
    <div className={footerClass}>
      {/* Footer content */}
    </div>
  )
}

export default Footer