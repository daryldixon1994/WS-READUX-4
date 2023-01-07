const initialState = {
    users: [],
};

const appReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case "GET_USERS":
            return { ...state, users: payload };
            break;
        default:
            return state;
            break;
    }
};
export default appReducer;
