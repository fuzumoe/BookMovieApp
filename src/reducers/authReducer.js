export const SET_AUTH = 'SET_AUTH';
export const SET_USER = 'SET_USER';
export const OPEN_MODAL = 'OPEN_MODAL';
export  const getIsLoggedInStatus = () => {
    if (sessionStorage.getItem("access-token") !== null) {
        return true;
    }
    return false;
};

export const getSessionUserDetails = () => {
    const userDetails = sessionStorage.getItem("user-details");
    if (userDetails !== null) {
        return userDetails;
    }

    return {};
}
export const authState = {
    openModal: false,
    isLoggedIn: getIsLoggedInStatus(),
    user: getSessionUserDetails(),
};

export const authReducer = (state = authState, action) => {
    if (action.type === SET_AUTH) {
        return {
            ...authState,
            isLoggedIn: action.payload
        }
    }
    if (action.type === SET_USER) {
        return {
            user: action.payload
        }
    }
    if(action.type === OPEN_MODAL){
        return {
            ...authState,
            openModal: action.payload
        }
    }
    return state;
};

