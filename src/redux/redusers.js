import { ADD_CONTACT, DELETE_CONTACT } from "./type";

const intialState = {
    contacts: [{avatar: "40", email: "gh@cg.df", favorite: true, gender: "men", id: "5b590c20-239d-4bb8-aec5-9ae4ad33e567", name: "Test", phone:  "+38 0354908689",status: "Family"}],
    // search: ''
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return{
                ...state, 
                contacts: [...state.contacts, action.payload]
            }
        case DELETE_CONTACT:
            return{
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
    
        default:
            return state
    }
}

export default reducer
