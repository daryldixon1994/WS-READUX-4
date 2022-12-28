import { data } from "../../data";
const initialState = {
    books: data,
    search: "",
    rate: 0,
};

const booksReducer = (state = initialState, action) => {
    let { type, payload } = action;
    console.log(payload);
    switch (type) {
        case "SEARCH":
            return { ...state, search: payload };
            break;
        case "RATE":
            return { ...state, rate: payload };
        case "ADD_NEW_BOOK":
            return { ...state, books: [...data, payload] };
        case "EDIT_TITLE":
            return {
                ...state,
                books: state.books.map((book) => {
                    return book.id == payload.id
                        ? { ...book, title: payload.newTitle }
                        : book;
                }),
            };
        default:
            return state;
            break;
    }
};
export default booksReducer;
