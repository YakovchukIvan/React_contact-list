import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// css
import './App.css';

//import pages
import ContactList from "./Pages/ContactList/ContactList"
import NewContact from "./Pages/NewContact/NewContact"
import UpdateContact from "./Pages/UpdateContact/UpdateContact"
import NotFound from "./Pages/NotFound/NotFound"
import Header from "./Componets/Header/Header" 

//import hooks
import { useState } from 'react'
 
function App() {

  const [stor, setStor] = useState([{avatar: "40", email: "gh@cg.df", favorite: true, gender: "men", id: "5b590c20-239d-4bb8-aec5-9ae4ad33e567", name: "Test", phone:  "+38 0354908689",status: "Family"}])
  const handleNewContact = (newContact) =>{
    setStor(prevStor => [...prevStor, newContact])
    console.log(stor);
  }

  const deleteContact = (id) => {
    setStor(prevStor => prevStor.filter(contact => contact.id !== id))
  }


  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<ContactList stor={stor} onDeleteContact={deleteContact}/>}/>
        <Route path="/new-contact" element={<NewContact onNewContact={handleNewContact}/>}/>
        <Route path="/update-contact" element={<UpdateContact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App;
