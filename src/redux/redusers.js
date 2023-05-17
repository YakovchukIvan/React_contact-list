import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, SEARCH_CONTACT } from "./type";

const intialState = {
    contacts: [{avatar: "40", email: "gh@cg.df", favorite: true, gender: "men", id: "5b590c20-239d-4bb8-aec5-9ae4ad33e567", name: "Test", phone:  "+38 0354908689",status: "Family"}],
    searchTerm: ''
    // states: []
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

        case EDIT_CONTACT:
            return{
                ...state,
                contacts: state.contacts.map(contact => {
                    if (contact.id === action.payload.id) {
                        return {
                            ...contact,
                            ...action.payload.updateContact
                        }
                    } 
                    return contact
                }) 
            }

        case SEARCH_CONTACT:
            return{
                ...state,
                searchTerm: action.payload
            }

        default:
            return state
    }
}

export default reducer
