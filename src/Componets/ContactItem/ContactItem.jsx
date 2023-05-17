import './ContactItem.css'

import { useSelector, useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/action'

import { Link } from "react-router-dom"

const ContactItem = () => {

  const contacts = useSelector((state) => state.contacts)
  const searchTerm = useSelector((state) => state.searchTerm)
  const dispatch = useDispatch()

  const handleDeleteContact = (id) => {
    console.log(id);
    dispatch(deleteContact(id))
  }

  const filteredContacts = searchTerm
  ? contacts.filter((contact) => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  :contacts


    return(
        <div>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-4'><h4 className='text-end text-primary m-3'>Name</h4></div>
              <div className='col-4'><h4 className='text-center text-primary m-3'>Phone</h4></div>
              <div className='col-4'><h4 className=' text-primary m-3'>Email</h4></div>
            </div>
          </div>
          <hr className='m-0' />
            {filteredContacts && filteredContacts.map((contact) => (
                <div className='row p-4' key={contact.id}>
                  <div className='col-2'>
                    <img className='rounded-circle' src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`} alt="avatar" />
                  </div>
                    <div className='col-10 row'>
                      <div className='col-3'>
                        <h3>{contact.name}</h3>
                        <p>{contact.status}</p>
                      </div>
                      <div className='col-3'>
                        <p>{contact.phone}</p>
                      </div>
                      <div className='col-3'>
                        <p>{contact.email}</p>
                      </div>
                      <div className='col-3'>
                        <Link to={`/update-contact/${contact.id}`}><button>edit</button></Link>
                        <button onClick={() => handleDeleteContact(contact.id)}>delete</button>
                      </div>    
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ContactItem