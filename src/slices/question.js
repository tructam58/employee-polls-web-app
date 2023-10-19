import { createSlice, current } from "@reduxjs/toolkit";

import * as _DATA from "../_DATA";

const question = createSlice({
  name: "question",
  initialState: {
    value: {},
  },
  reducers: {
    questions: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase("GET_QUESTIONS", (state, action) => {
        state.value = action.payload;
      })
      .addCase("ADD_QUESTION", (state, action) => {
        // console.log("state", current(state))
        state.value[action.payload.id] = action.payload;
        // console.log("action", current(state))
      })
      .addCase("ANSWER_QUESTION", (state, action) => {
        const questions = {
          ...state.value,
          [action.payload.qid]: {
            ...state.value[action.payload.qid],
            [action.payload.answer]: {
              ...state.value[action.payload.qid][action.payload.answer],
              votes: state.value[action.payload.qid][
                action.payload.answer
              ].votes.concat([action.payload.authedUser]),
            },
          },
        };
        state.value = questions;
      });
  },
});

export const getQuestions = () => async (dispatch) => {
  const data = await _DATA._getQuestions();
  dispatch({ type: "GET_QUESTIONS", payload: data });
};

export const saveQuestion = (question) => async (dispatch) => {
  const data = await _DATA._saveQuestion(question);
  dispatch({ type: "ADD_QUESTION", payload: data });
};

export const saveQuestionAnswer =
  ({ authedUser, qid, answer }) =>
  async (dispatch) => {
    const data = await _DATA._saveQuestionAnswer({ authedUser, qid, answer });

    dispatch({ type: "ANSWER_QUESTION", payload: { authedUser, qid, answer } });
  };

export const { questions } = question.actions;
export default question.reducer;
