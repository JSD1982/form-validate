import React, { useState } from 'react';
import Form from '../components/Form';
import FormSuccess from '../components/FormSuccess';

const Layout = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className="form-container">
      {!isSubmitted ? <Form submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
};

export default Layout;
