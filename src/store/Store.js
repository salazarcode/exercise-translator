import { createStore } from 'redux'
import Reducer from './Reducer'

const INITIAL_STATE = {
}

const store = createStore(Reducer, INITIAL_STATE);

export default store