import React from "react";
import ReactDOM from "react-dom";
import SearchRepo from "../container/SearchRepo";
import { render , cleanup} from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashig", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SearchRepo></SearchRepo>, div);
});

it("renders loading correctly", () => {
  const { getByTestId } = render(
    <SearchRepo>
    </SearchRepo>
  );
  const navbar = getByTestId("nav-bar");
  const conatiner = getByTestId("conatiner");
  expect(navbar).toContainElement(conatiner);
});

it("matches snapshot",()=>{
    const tree=  renderer.create(<SearchRepo></SearchRepo>).toJSON();
     expect(tree).toMatchSnapshot();
 })