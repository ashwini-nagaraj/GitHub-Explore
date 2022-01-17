import React from "react";
import ReactDOM from "react-dom";
import Index from "../index";
import { render , cleanup} from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashig", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Index></Index>, div);
});

it("renders loading correctly", () => {
  const { getByTestId } = render(
    <Index>
    </Index>
  );
  const homepage = getByTestId("homepage");
  const img = getByTestId("img");
  expect(homepage).toContainElement(img);
});

it("matches snapshot",()=>{
    const tree=  renderer.create(<Index></Index>).toJSON();
     expect(tree).toMatchSnapshot();
 })