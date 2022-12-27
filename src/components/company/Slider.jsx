import React from 'react'
import { useContext } from 'react'
import CompanyCard from '../company card/CompanyCard'
import { CompaniesContext } from '../../contexts/CompaniesDataContext'
import next from '../../assets/images/next.png'
import prev from '../../assets/images/prev.svg'
import './silder.css'
import Loader from '../ui/loader/Loader'
import HomeSection from './../homeSection/HomeSection';

const Slider = () => {
  const ctx = useContext(CompaniesContext)
  return (
    <>
    <HomeSection />
      <div className='slider_header text-center'>
        <h3>our providers</h3>
      </div>

      <div className='slider_container '>
        <div className='container py-4'>
          <div className='row d-flex justify-content-around align-items-center'>
            <div className='col-md-1'>
              <img
                src={prev}
                alt=''
                onClick={ctx.prevHandler}
                disabled={ctx.isPrevDisabled}
                className='slid-btn'
              />
            </div>
            {ctx.Data ? (
              ctx.Data.map(c => {
                return (
                  <div className='col-md-2' key={c.id}>
                    <CompanyCard data={c} />
                  </div>
                )
              })
            ) : (
              <div className='col-md-8 text-center'>
                <Loader />
              </div>
            )}
            <div className='col-md-1 '>
              <img
                src={next}
                alt=''
                onClick={ctx.nextHandler}
                disabled={ctx.isNextDisabled}
                className='slid-btn'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider
