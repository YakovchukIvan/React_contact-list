import { createStore } from 'redux'
import reducer from './redux/redusers'

const store = createStore(reducer)
export default store