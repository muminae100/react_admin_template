import React from 'react';
import Images from '../../assets/images';

const Logo = () => {
  return (
    <div className="nav-header">

    <a href="#" className="brand-logo">
    <img className="logo-abbr" src={Images.Logo} alt="Logo" />
    <img className="logo-compact" src={Images.LogoText} alt="Logo" />
    <img className="brand-title" src={Images.LogoText} alt="Logo" />
    </a>

    <div className="nav-control">
    <div className="hamburger">
    <span className="line"></span><span className="line"></span><span className="line"></span>
    </div>
    </div>

    </div>
  )
}

export default Logo;