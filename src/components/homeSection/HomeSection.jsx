import React from 'react'
import mainSection from '../../assets/images/image section.svg'
import secondSection from '../../assets/images/Group 22.svg'
import './homesection.css'

const HomeSection = () => {
  return (
    <>
      <div className='container'>
        <div className='row d-flex justify-content-between pb-5 mb-5 align-items-center'>
          <div className='col-md-4'>
            <h4 className='section-title'> We Fill Your Gap</h4>
            <p>
              We are ready to bring you all your needs anywhere at any time
              through our useful mobile application. No need to waste time you
              are one click away.
            </p>
            <button className='special-btn'>install now</button>
          </div>
          <div className='col-md-4'>
            <div className='img_wrapper'>
              <img src={mainSection} alt='' className='w-100' />
            </div>
          </div>
        </div>
        <div className='row d-flex justify-content-between align-items-center mt-5 '>
          <div className='col-md-4'>
            <div className='img_wrapper'>
              <img src={secondSection} alt='' className='w-100' />
            </div>
          </div>
          <div className='col-md-4'>
            <h4 className='section-title'> What We Offer</h4>
            <p>
              We Offer you different kinds of services that will help you save
              your time and be more comfortable.
            </p>
            <button className='special-btn'>our services</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeSection
