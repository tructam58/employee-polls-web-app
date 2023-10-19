import { configureStore } from "@reduxjs/toolkit";
import authen from "./slices/authen";
import user from "./slices/currentUser";
import question from "./slices/question";
 

const store = configureStore({
    reducer: {
        allUser: authen,
        createQuestion: authen,
        logout: user,
        currentUser: user,
        questions: question
    },
});

export default store;