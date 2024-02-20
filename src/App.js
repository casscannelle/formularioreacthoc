import React from 'react';
import FormComponent1 from './components/FormComponent1/FormComponent1';
import FormComponent2 from './components/FormComponent2/FormComponent2';

const App = () => {
  return (
    <div>
      <h2>Form 1</h2>
      <FormComponent1 />

      <h2>Form 2</h2>
      <FormComponent2 />
    </div>
  );
};

export default App;