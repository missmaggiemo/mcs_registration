// @flow
// src/components/ReturningStudentForm/index.js
import React, { PureComponent } from "react";
import ReturningStudentForm from "./form.js"

type Props = {};

class ReturningStudentPage extends PureComponent<Props, State> {

  render() {

    return (
      <div className="App">
        <h1>Returning Student</h1>
        <p>Welcome back! Please select today's date and enter your email to sign in!</p>
        <ReturningStudentForm></ReturningStudentForm>

      </div>
    );
  }
}

export default ReturningStudentPage;
