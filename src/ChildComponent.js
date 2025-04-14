// ChildComponent.js
import React from "react";
import PropTypes from "prop-types";

function ChildComponent({ message }) {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Message: {message}</p>
    </div>
  );
}

ChildComponent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ChildComponent;
