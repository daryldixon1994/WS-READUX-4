export const searching = (payload) => {
    return {
        type: "SEARCH",
        payload,
    };
};
export const rating = (payload) => {
    return {
        type: "RATE",
        payload,
    };
};
export const addNewBook = (payload) => {
    return {
        type: "ADD_NEW_BOOK",
        payload,
    };
};
export const editTitle = (payload) => {
    return {
        type: "EDIT_TITLE",
        payload,
    };
};
