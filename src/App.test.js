import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";
import { render , cleanup} from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashig", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App></App>, div);
});

it("renders loading correctly", () => {
  const { getByTestId } = render(
    <App>
    </App>
  );
});
