import React from 'react'
import './footer.css'
import appleApp from '../../../assets/images/button-App store (1).png'
import googleApp from '../../../assets/images/button-Play store (1).png'
import logo_icons from "../../../assets/images/f-logo-icons.png"
import location from "../../../assets/images/location (2).png"

const Footer = () => {
  return (
    <>
      <footer className='footer '>
        <div className="footer_wrapper ">
        <div className='about_us'>
          <h2 className='py-1'>about us</h2>
          <ul className=' py-1'>
            <li>Our History</li>
            <li>How We Work</li>
            <li>Resources</li>
          </ul>
          <div className='stores pt-4  pb-2'>
            <img src={appleApp} alt='' className='' />
            <img src={googleApp} alt='' className='' />
          </div>
        </div>
        <div className="middle_logo">
        <img src={logo_icons} alt="" />
        </div>
        <div className="location_address ">
            <h3><img src={location} alt=""  className='p-0 m-0'/>  saudi arabia</h3>
            <p className='p-0 m-0'>Jeddah, Sultan St., Lilyan Tower 2, 11th Floor</p>
             <p className='p-0 m-0 d-inline'><span className='fw-bold'>Email:</span> hello@forall.com</p>
             <p className='d-inline '> <span className='fw-bold'>Office:</span> +00 123 456 789</p>
        </div>
        </div>

       
      </footer>
    </>
  )
}

export default Footer
