import React, { createContext, useEffect, useState } from 'react';

export const UserDataContext = createContext(null);

export const UserDataProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setUser({ id: 1, name: "John Doe", email: "john@example.com" });
    }, 1000);
  }, []);

  return (
    <UserDataContext.Provider value={user}>
      {children}
    </UserDataContext.Provider>
  );
};
