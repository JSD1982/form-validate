import React, { useState } from 'react';
import Form from '../components/Form';
import FormSuccess from '../components/FormSuccess';
import { StateActionsContext } from '../context/stateContext';

const Layout = () =>
{
  const ctx = React.useContext( StateActionsContext );
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className="form-container">
      { !isSubmitted || ctx.errorData ? <Form submitForm={submitForm} /> : <FormSuccess /> }
    </div>
  );
};

export default Layout;
