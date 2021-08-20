import React from 'react';

export const StateActionsContext = React.createContext();

const StateActionsContextTag = ({ children }) => {
  const [ notification, setNotification ] = React.useState();
  const [ errorData, setErrorData ] = React.useState();

  return (
    <StateActionsContext.Provider value={{ notification, setNotification, errorData, setErrorData }}>
      {children}
    </StateActionsContext.Provider>
  );
};

export default StateActionsContextTag;
