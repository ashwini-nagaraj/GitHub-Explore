import React from "react";
import ReactDOM from "react-dom";
import Loading from "../Loading";
import { render , cleanup} from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup)

it("renders without crashig", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Loading></Loading>, div);
});

it("renders loading correctly", () => {
  const { getByTestId } = render(
    <Loading>
    </Loading>
  );
  const div = getByTestId("loading");
  const image = getByTestId("image");
  expect(div).toContainElement(image);
});


it("matches snapshot",()=>{
   const tree=  renderer.create(<Loading></Loading>).toJSON();
    expect(tree).toMatchSnapshot();
})