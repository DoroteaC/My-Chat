
import {createStore} from 'redux';
const userName = (state = {username: '', isActive: 0, gender: 'chest', hairColor: 'brown',hairStyle: 'long'} , action) => {
    if (action.type==='user'){
        return {
            username: action.username,
            isActive: action.isActive,
        }}
     if (action.type==='active') {
            return {
                isActive: action.isActive,
            }
        }
        if (action.type==='gender') {
            return {
                gender: action.gender,
                hairColor: state.hairColor,
                hairStyle: state.hairStyle,
            }
        }
        if(action.type==='hairColor') {
            return {
                hairColor: action.hairColor,
                gender: state.gender,
                hairStyle: state.hairStyle,
            }
        }
        if(action.type==='hairStyle') {
            return {
                hairStyle: action.hairStyle,
                gender: state.gender,
                hairColor: state.hairColor,
            }
        }
        return state
    };

const store =  createStore(userName);

export default store;