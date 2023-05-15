import './Sidebar.css'

import { useSelector } from 'react-redux'
// import { useSelector, useDispatch } from 'react-redux'
// import { deleteContact } from '../../redux/action'

const Sidebar = () => {

    const statusContact = {
      Work:0,
      Family:0,
      Private:0,
      Friends:0
    }

    const contacts = useSelector((state) => state.contacts)

    contacts.forEach(contact => {
      statusContact[contact.status] += 1
    });

    const allContacts = contacts.length

    return(
      <aside className='container border-end'>
        <div className='row'>
          <div className='col-12'>
          
            <div className="contacts-labels">
              <div className="title">
                All contacts<span>{allContacts}</span>
              </div>
              <div className="list">
                <div className="unit">
                  <div className="lab lab-success">Work</div>
                  <span>{statusContact.Work}</span>
                </div>
                <div className="unit">
                  <div className="lab lab-primary">Family</div>
                  <span>{statusContact.Family}</span>
                </div>
                <div className="unit">
                  <div className="lab lab-danger">Private</div>
                  <span>{statusContact.Private}</span>
                </div>
                <div className="unit">
                  <div className="lab lab-warning">Friends</div>
                  <span>{statusContact.Friends}</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </aside>
    )
}

export default Sidebar