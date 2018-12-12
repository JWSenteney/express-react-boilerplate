import React from "react";

import strings from "../translations";

const Header = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">{strings.boilerplate}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
