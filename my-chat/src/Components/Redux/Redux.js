
import {createStore} from 'redux';
const userName = (state = {usersname: 'Dea'}, action) => {
    return state;
};
const store =  createStore(userName);

export default store;