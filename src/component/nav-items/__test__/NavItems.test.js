import React from "react";
import ReactDOM from "react-dom";
import NavItems from "../NavItems";
import { render , cleanup} from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashig", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NavItems></NavItems>, div);
});

it("renders loading correctly", () => {
  const { getByTestId } = render(
    <NavItems>
    </NavItems>
  );
  const nav = getByTestId("nav");
  const wrapper = getByTestId("wrapper");
  expect(nav).toContainElement(wrapper);
});

it("matches snapshot",()=>{
    const tree=  renderer.create(<NavItems></NavItems>).toJSON();
     expect(tree).toMatchSnapshot();
 })