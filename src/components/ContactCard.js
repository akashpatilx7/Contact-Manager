import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  // To avoid the rewriting of props.contact.name, props.contact.email & other parameters, we defined a CONSTANT.

  // eslint-disable-next-line
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
    
    // We can style the elements in our React Components by using the "style" tag. In the style tag, we do not use "-" while spectifying the CSS Properties in JSX.

    // To add the contact.name and the contact.email to the ContactCard section, we will again have to use "PROPS".

  );
};

export default ContactCard;