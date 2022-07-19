

export const SET_AUTH = 'SET_AUTH';
export const SET_USER = 'SET_USER';


export const authState = {
  isLoggedIn: false,
  user: {},
};

export const authReducer = (state=authState, action) => {
    if(action.type === SET_AUTH){
        return {
           ...authState,
           isLoggedIn: action.payload
        }
    }
    if(action.type ===  SET_USER){
        return {
            ...authState,
            user: action.payload
         }
    }
    return state;
};

