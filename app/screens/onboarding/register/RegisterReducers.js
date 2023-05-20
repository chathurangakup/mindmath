import { GET_LOGIN_OK} from './RegisterActionTypes';
const initialState = {
    loginStatus: undefined,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_LOGIN_OK:
        return {...state, loginStatus: action.payload};
      default:
        return state;
    }
  };