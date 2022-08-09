
import {createStore} from 'redux';
const userName = (state = {username: '', isActive: false} , action) => {
    if (action.type==='user'){
        return {
            username: action.username,
            isActive: action.isActive,
        };
    }
   
};
const store =  createStore(userName);

export default store;