import axios from "axios";
export const getUsers = (payload) => (dispatch) => {
    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            dispatch({ type: "GET_USERS", payload: response.data });
        })
        .catch((error) => console.dir(error));
};
