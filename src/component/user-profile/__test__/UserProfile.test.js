import React from "react";
import ReactDOM from "react-dom";
import UserProfile from "../UserProfile";
import { render , cleanup} from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashig", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UserProfile></UserProfile>, div);
});

it("renders loading correctly", () => {
  const { getByTestId } = render(
    <UserProfile>
    </UserProfile>
  );
  const user = getByTestId("user");
  const avatar = getByTestId("avatar");
  expect(user).toContainElement(avatar);
});

it("matches snapshot",()=>{
    const tree=  renderer.create(<UserProfile></UserProfile>).toJSON();
     expect(tree).toMatchSnapshot();
 })