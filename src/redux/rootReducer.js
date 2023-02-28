import todoreducer from './todo/Reducer';
import filterreducer from './filter/Reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todos: todoreducer,
    filters: filterreducer
})

export default rootReducer;