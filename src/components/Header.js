// Here, For "Creating The Header", we are using "FUNCTION-BASED-COMPONENTS".
import React from "react";


// Defining an another Functional Component
const Header = () => {
  return (
    // Using some Semantic UI Classes
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2 id="cm">Contact Manager</h2>
      </div>
    </div>
    // The MAJOR DIFFERENCE between the SYNTAX of HTML and REACTJS is the "USAGE OF CLASS & CLASSNAME" while writing inside the "div" in the Respective Languages.
  );
};


// Exporting the Header to App.js 
export default Header;