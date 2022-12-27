import React from 'react'
import { Link } from 'react-router-dom'
import './company_card.css'

const CompanyCard = ({ data }) => {
  return (
    <div className='company_card_wrapper'>
      <Link to={`/companyDetails/${data.page}`} className='go_To_details'>
        <div className='company_card'>
          <div className='img_Card_wrapper'>
            <img src={data.logo['256px']} alt='' />
          </div>
          <p>{data.description.value}</p>
        </div>
      </Link>
    </div>
  )
}

export default CompanyCard
