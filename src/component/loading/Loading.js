import React from "react";

import loading from "../../loading.gif";
import "./Loading.css";

const Loading = () => (
  <div data-testid="loading"  className="loading">
    <img data-testid="image" src={loading} alt="loading" />
  </div>
);

export default Loading;