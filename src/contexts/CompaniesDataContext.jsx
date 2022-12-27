import { createContext } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
export const CompaniesContext = createContext()

export const CompaniesContextProvider = ({ children }) => {
  const [company, setCompany] = useState([])
  const [paginate, setPaginate] = useState(1)
  const [isDispledNext, setIsDisapledNext] = useState(false)
  const [isDisapledPrev, setIsDisapledPrev] = useState(true)
  const [page, setPage] = useState(1)

  //call api to bring data first time
  const companyDB = paginate => {
    return axios.create({
      baseURL: 'https://forall.sa/services/api/ads/companies',
      headers: { accept: 'application/json' },
      params: {
        page_count: 3,
        page: paginate
      }
    })
  }
  const getData = async paginate => {
    setCompany(null)
    const { data } = await companyDB(paginate).get()
    //assign a special id to companies objects to help to bring it later from the api 
    const results = data.data.map((comp, i) => {
      comp.page = page + i
      return comp
    })
    setCompany(results)
    console.log(company)
  }
   
  //bring  the next  3  companies  to pagination every click
  function handelNext () {
    if (paginate < 30) {
      setPaginate(prev => {
        return prev + 1
      })
      setIsDisapledPrev(false)
      setPage(prev => {
        return prev + 3
      })
    } else {
      setIsDisapledNext(true)
    }
  }

  //bring  the prev  3  companies  to pagination every click
  function handelPrev () {
    if (paginate > 1) {
      setPaginate(prev => {
        return prev - 1
      })
      setPage(prev => {
        return prev - 3
      })
      setIsDisapledPrev(false)
      setIsDisapledNext(false)
    } else {
      {
        setIsDisapledPrev(true)
      }
    }
  }
  useEffect(() => {
    getData(paginate)
  }, [paginate])

  return (
    <CompaniesContext.Provider
      value={{
        Data: company,
        nextHandler: handelNext,
        prevHandler: handelPrev,
        isNextDisabled: isDispledNext,
        isPrevDisabled: isDisapledPrev
      }}
    >
      {children}
    </CompaniesContext.Provider>
  )
}
