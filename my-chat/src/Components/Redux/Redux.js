
import {createStore} from 'redux';
const userName = (state = {username: '', isActive: 0, gender: 'chest', hairColor: 'brown'} , action) => {
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
            }
        }
        if(action.type==='hairColor') {
            return {
                hairColor: action.hairColor,
            }
        }
        return state
    };
const store =  createStore(userName);

export default store;