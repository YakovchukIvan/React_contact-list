import './Header.css'

import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { searchContact } from '../../redux/action'

const Header = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(searchContact(searchTerm.toLowerCase()))
  },[dispatch, searchTerm])
  
  const handleChange = (e) => {
    const value = e.target.value 
    setSearchTerm(value)
  }


    return(
        <nav className='container rounded shadow-lg'>
          <div className='row'>
            <div className='col-4'>
              <Link className='navbar-brand fs-3 bg-primary-subtle' to='/'>
              Contact List
              </Link>
              <Link className='navbar-brand fs-5 ms-4' to='/new-contact'>
              Add Contact
              </Link>
            </div>
            <div className='col-4'></div>
            <div className='col-4'>
              <input type='text' value={searchTerm} onChange={handleChange} className='form-control fs-6' placeholder='Search' />
            </div>
          </div>
        </nav>
        
    )
}

export default Header