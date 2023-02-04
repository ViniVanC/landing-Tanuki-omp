import React from "react";
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="inner">
          <Navigation />
        </div>
      </div>
    </header>
  );
};
