import { render } from "@testing-library/react"
import { Home } from "./Home";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../store";
import { LeaderBoard } from "./LeaderBoard";
import transform from "./transform";

describe('leaderboard component', () => {
  it('will match to snapshot', () => {
    const component = render(<MemoryRouter><Provider store={store}><LeaderBoard/></Provider></MemoryRouter>);
    expect(component).toMatchSnapshot();
  })
})