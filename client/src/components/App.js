import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Landing from "./Landing";

const App = () => {
  return (
    <div>
      <Header />
      <div className="grid-container">
        <BrowserRouter>
          <div>
            <Route path="/" component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
