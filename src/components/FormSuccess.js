import React from 'react';
import { StateActionsContext } from '../context/stateContext';
import check from '../assets/images/check.svg';

const FormSuccess = () => {
  const ctx = React.useContext(StateActionsContext);
  return (
    <>
      {ctx.notification ? (
        <div className="form-content-success">
          <h2 className="form-success">{ctx.notification}</h2>
          <img src={check} alt="icon-check" />
        </div>
      ) : (
        <>loading...</>
      )}
    </>
  );
};

export default FormSuccess;
