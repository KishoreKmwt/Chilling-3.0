import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {  AddTeachersListReducers, GetTeachersListReducer, TeachersDeleteReducers } from './Redux/Reducers/TeachersReducers';
import { StudentGetListReducers } from './Redux/Reducers/StudentReducers';

const Reducer = combineReducers({
     GetTeachersListState:  GetTeachersListReducer,
     AddTeachersListState: AddTeachersListReducers,
     TeachersDeleteState: TeachersDeleteReducers,

     StudentGetListState: StudentGetListReducers,

})

let initialState = {}
const middleware = [thunk]
const store = createStore(Reducer , initialState, composeWithDevTools(applyMiddleware( ...middleware)));

export default store;