/* eslint-disable no-unused-vars */

/* ********* NOTES ********* 

Q. WHAT IS A COMPONENT ? 
A. A Component is a "REUSABLE PIECE OF CODE" that can further be used in the project to add some another Functionality without taking too much efforts. A Component is an INDEPENDENT UNIT OF CODE which has its own Inputs, Outputs & Functionalities.

*/


// Importing the REACT Library from react (beacuse all the functionalities possible here would be due to the REACT LIBRARY)
import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  // While using Functional Components in ReactJs, we can use React Hooks. A React Hook called as "USESTATE" is used in our Functional Components in order to use hooks on states.
  

  /* 
  
  ****** RENDERING A LIST IN REACT ******

  To render a list in React, first create it in the form of an array.

  After creating a list, in order to pass the elements of the created list to the targeted element/ area (PARENT ELEMENT), we use "PROPS". 

  These Contacts from the contacts array can be asccessed in the ContactList via "PROPS". For this accessment, we have a default parameter "props".

  */


  // The syntax written belows seems to be of HTML but it's of "JSX : JAVASCRIPT SYNTAX EXTENSION" which is a combination of JAVASCRIPT & HTML.

  // If we want to return more than 1 Div or Element, then we will have to use the PARENTHESIS ()


  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    console.log(contact);

    
    // We can never directly update the state of contacts. For that purpose, we have to use setContacts.
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContacts) setContacts(retriveContacts);
  // }, []);

  // To persist data on the web page, we will be using the Local Storage through the useEffect React Hook. The UseEffect React Hook helps to render a component again after we change its value.
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      {/* The below defined are CUSTOM HTML ELEMENTS. If we want to add some data in these CUSTOM HTML ELEMENT, then we can use the OPENING & CLOSING TAGS. Otherwise, SELF CLOSING TAGS are used. */}
      <Header />

      {/* To pass data from Child to the Parent, we use "HANDLERS (FUNCTIONS AS PROPS)". */}
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
      {/* Here, SYNTAX : PROPERTY_NAME = {PROP} */}
    </div>
  );
}

export default App;