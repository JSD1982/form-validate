import React from 'react';

export const StateActionsContext = React.createContext();

const StateActionsContextTag = ({ children }) => {
  const [notification, setNotification] = React.useState();
  return (
    <StateActionsContext.Provider value={{ notification, setNotification }}>
      {children}
    </StateActionsContext.Provider>
  );
};

export default StateActionsContextTag;
