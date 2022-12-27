import React from 'react'
import './details.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../ui/loader/Loader'

const CompanyDetails = () => {
  const params = useParams()
  const pageId = params.id
  const [companyInfo, setCompanyInfo] = useState('')
  const companyDB = pageId => {
    return axios.create({
      baseURL: 'https://forall.sa/services/api/ads/companies',
      headers: { accept: 'application/json' },
      params: {
        page_count: 1,
        page: pageId
      }
    })
  }
  const getData = async pageId => {
    setCompanyInfo(null)
    const { data } = await companyDB(pageId).get()
    const response = data.data
    setCompanyInfo(response[0])
  }
  useEffect(() => {
    return () => {
      getData(pageId)
    }
  }, [])
  return (
    <>
      <div className='details_wrapper py-4'>
        {companyInfo ? (
          <div className='text-center'>
            <div className='details_card'>
              <div className='img_Card_wrapper'>
                <img src={companyInfo.logo['256px']} alt='' />
              </div>
              <p>{companyInfo.owner.mobile}</p>
            </div>
            <p>{companyInfo.owner.email}</p>
            <p></p>
          </div>
        ) : (
          <Loader />
        )}
        <div className='container'>
          <div className='row d-flex justify-content-between'>
            <div className='col-md-4'>
              <h3 className='section-title'>Overview</h3>
              <p>
                Our Leadership Principles aren't just a pretty inspirational
                wall hanging. These Principles work hard, just like we do.
                Amazonians use them, every day, whether they're discussing ideas
                for new projects, deciding on the best solution for a customer's
                proble
              </p>
            </div>
            <div className='col-md-4'>
              <h3 className='section-title'>Features and Benefits </h3>
              <p>
                We aim to be Earth’s most customer centric company. Our mission
                is to continually raise the bar of the customer experience by
                using the internet and technology to help consumers find,
                discover and buy anything, and empower businesses and content
                creators t
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CompanyDetails
