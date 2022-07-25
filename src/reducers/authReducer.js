

export const SET_AUTH = 'SET_AUTH';
export const SET_USER = 'SET_USER';


export const authState = {
  isLoggedIn: false,
  user: {
      "email_address": "string",
      "first_name": "string",
      "id": "string",
      "last_login_time": {},
      "last_name": "string",
      "mobile_phone": "string",
      "role": {
          "id": 0,
          "name": "string",
          "permissions": [
              {
                  "id": 0,
                  "name": "string"
              }
          ]
      },
      "status": "string"
  },
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

