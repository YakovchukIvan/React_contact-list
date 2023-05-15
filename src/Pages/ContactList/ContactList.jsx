// css
import './ContactList.css'

//import components
import Sidebar from '../../Componets/Sidebar/Sidebar'
import ContactItem from '../../Componets/ContactItem/ContactItem'


const ContactList = ({ stor, onDeleteContact }) => {
    return(
      <main className='container rounded'>
      <div className='row'>
        <div className='col-3'>
          <Sidebar stor={stor}/>
        </div>
        <div className='col-9'>
          <ContactItem stor={stor} onDeleteContact={onDeleteContact}/>
        </div>
      </div>
    </main>
    )
}

export default ContactList