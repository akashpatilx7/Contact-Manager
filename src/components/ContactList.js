import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  // Creating a function to render the Contact List
  const renderContactList = props.contacts.map((contact) => {
    // passing the ContactCard
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });

  // To actually render the Contact List, we will have to pass the renderContactList function to the below return statement. Here, we are passing the renderContactList function as a "Reference Variable in JSX".
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;