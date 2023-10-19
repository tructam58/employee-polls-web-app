import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import * as React from 'react';
import { AnswerQuestion } from "./AnswerQuestion";
describe('answer question', () => {
  it('will match snapshot', () => {
    const component = render(<MemoryRouter><Provider store={store}><AnswerQuestion/></Provider></MemoryRouter>);
    expect(component).toMatchSnapshot();
  })
})