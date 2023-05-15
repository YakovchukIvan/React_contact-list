import { ADD_CONTACT, DELETE_CONTACT } from "./type";

const intialState = {
    contacts: [],
    // search: ''
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return{
                ...state, 
                contacts: [...state,contacts, action.payload]
            }
        case DELETE_CONTACT:
            return{
                ...state,

            }
    
        default:
            break;
    }
}
