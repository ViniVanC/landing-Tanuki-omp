import React from "react";
import { Navigation } from "../Navigation/Navigation";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="inner">
          <div className="box">
            <h2 className="title">TanukiComp</h2>
            <hr />
            <Navigation />
          </div>

          <div className="box">
            <p className="mini-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque possimus architecto ea obcaecati praesentium asperiores
              tempora, modi accusamus tempore deleniti voluptates esse animi
              quidem aperiam est nesciunt dolorum, nisi a.
            </p>
          </div>

          <div className="box">
            <h3 className="subtitle">
              Powered by
              <a
                href="https://github.com/ViniVanC"
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                Vincent Van
              </a>
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
};
