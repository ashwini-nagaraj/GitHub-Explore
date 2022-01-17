import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../Navbar";
import { render , cleanup} from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashig", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Navbar></Navbar>, div);
});

it("renders loading correctly", () => {
  const { getByTestId } = render(
    <Navbar>
    </Navbar>
  );
  const navbar = getByTestId("navbar");
  const listUl = getByTestId("list-ul");
  expect(navbar).toContainElement(listUl);
});


it("matches snapshot",()=>{
   const tree=  renderer.create(<Navbar></Navbar>).toJSON();
    expect(tree).toMatchSnapshot();
})