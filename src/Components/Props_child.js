// ChildComponent.jsx

import React from 'react';

const ChildComponent = (props) => {
  // Accessing the data sent by the parent through props
  const receivedMessage = props.message;

  return <div>{receivedMessage}</div>;
};

export default ChildComponent;
