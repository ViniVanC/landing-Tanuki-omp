import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const navigationITemList = [
  { text: "hi", link: "hi" },
  { text: "about us", link: "aboutUs" },
  { text: "works", link: "works" },
  { text: "contacts", link: "contacts" },
];

const NavigationItem = ({ text, link }) => {
  return (
    <Link
      activeClass="active"
      to={link}
      spy={true}
      smooth={true}
      duration={500}
    >
      {text}
    </Link>
  );
};

export const Navigation = () => {
  return (
    <nav>
      {navigationITemList.map(({ text, link }) => (
        <NavigationItem text={text} link={link} />
      ))}
    </nav>
  );
};
