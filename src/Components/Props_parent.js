// ParentComponent.jsx

import React from 'react';
import ChildComponent from './Props_child';

const ParentComponent = () => {
  // Data to be sent to the child component
  const dataForChild = 'Hello from Parent!';

  // Passing data to the child component using props
  return <ChildComponent message={dataForChild} />;
};
export default ParentComponent;
