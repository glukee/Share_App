import React, { Component } from "react";
import axios from "axios";

export default class ApiTest extends Component {
  handleClick() {
    fetch("http://localhost:8080/update-details", {
      method: "POST",

      body: JSON.stringify({ name: "reyansh", phone: "1234567890" }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkeXN1MTM1QGdtYWlsLmNvbSIsImV4cCI6MTYzNDY2Njk2NiwiaWF0IjoxNjM0NjMwOTY2fQ.mdUroiEx-Nu5Ea1EOvGz_iKf2IO_C_z59z0yWTKlHIE",
      },
    })
      .then((response) => response.json())
      .then((jsondata) => console.log(jsondata))
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
