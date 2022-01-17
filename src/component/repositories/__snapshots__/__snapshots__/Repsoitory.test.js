import React from "react";
import ReactDOM from "react-dom";
import Repository from "../../Repository";
import { render , cleanup} from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashig", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Repository></Repository>, div);
});

it("renders loading correctly", () => {
  const { getByTestId } = render(
    <Repository>
    </Repository>
  );
  const repo = getByTestId("repo");
  const title = getByTestId("title");
  expect(repo).toContainElement(title);
});
