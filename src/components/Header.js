import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
      <h1><img src={"https://uploads-ssl.webflow.com/609d7412a4798830075bd434/609d753096e40026be896650_logo_minimal_text_final-p-500.png"}
      style={{width:"120px"}}/> - Coding Assignment (Hacker News Clone)</h1>
      <div className="nav-link">
        <NavLink to="/top" activeClassName="active">
          Top Stories
        </NavLink>
        <NavLink to="/new" activeClassName="active">
          Latest Stories
        </NavLink>
        <NavLink to="/best" activeClassName="active">
          Best Stories
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default Header;