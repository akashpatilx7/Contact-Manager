// Here, For "Creating The Contact Form", we are using "CLASS-BASED COMPONENTS".

import React from "react";

class AddContact extends React.Component {
  // While writing the Components in the CLASS-BASED Format, we cannot simply write a "return" statement. We need to use a "RENDER METHOD" & then write a return statement.

  // Here, we are creating a Class-Based State instead of using any React Hooks.
  state = {
    name: "",
    email: "",
  };

  // Creating an "ADD Function" to add a particular Contact into the Contact Manager Application.
  add = (e) => {
    e.preventDefault();
    // Preventing the whole page from being refreshed after clicking on the Add Button

    if (this.state.name === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }

    // Here, we are adding the addContactHandler so as to get a particular contact entry in the "App.js" as well.
    this.props.addContactHandler(this.state);

    // To clear the fields once a particular contact entry is added to the Contact Manager
    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            {/* For updating a particular state, setState Function is used. */}
          </div>
          
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;