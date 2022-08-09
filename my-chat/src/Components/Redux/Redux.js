
import {createStore} from 'redux';
const userName = (state = {username: '', isActive: 0} , action) => {
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
        return state
    };
const store =  createStore(userName);

export default store;