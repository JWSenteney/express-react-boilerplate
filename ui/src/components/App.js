import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const Landing = () => <div>Express/React App Boilerplate</div>;

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
