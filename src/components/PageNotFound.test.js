import { render } from "@testing-library/react"
import { PageNotFound } from "./PageNotFound"

describe('render 404', () => {
  it('will render page not found', () => {
    const component = render(<PageNotFound/>);
    expect(component).toMatchSnapshot();
  })
})