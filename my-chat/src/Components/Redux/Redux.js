
import {createStore} from 'redux';
const userName = (state = {username: ''} , action) => {
    if (action.type==='user'){
        return {
            username: action.username,
        };
    }
   
};
const store =  createStore(userName);

export default store;