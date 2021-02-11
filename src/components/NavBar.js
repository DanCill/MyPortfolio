import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="headerBgColor">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-white-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest "
          >
            Daniel
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white-200 hover:text-green-800"
            activeClassName="text-white selectedHeaderColor"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white-200 hover:text-green-800"
            activeClassName="text-white selectedHeaderColor"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white-200 hover:text-green-800"
            activeClassName="text-white selectedHeaderColor"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.linkedin.com/in/daniel-cilliers-91ba1516a/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/DanCill"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          {/* <SocialIcon url="" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }}/> */}
        </div>
      </div>
    </header>
  );
}
