import React from "react";
import ReactDOM from "react-dom";
import ListRepositories from "../ListRepositories";
import { render , cleanup} from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashig", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ListRepositories></ListRepositories>, div);
});

it("renders loading correctly", () => {
  const { getByTestId } = render(
    <ListRepositories>
    </ListRepositories>
  );
});
