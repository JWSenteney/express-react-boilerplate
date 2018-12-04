import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div>Express/React App Boilerplate</div>
      <a href="/api/test-proxy">Test Proxy</a>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" component={Landing} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
