import { createContext, useState } from 'react';

const MyContext = createContext({ value: 'Default Context Value', setValue: () => {} });

export const MyProvider = ({ children }) => {
  const [value, setValue] = useState('Hello from Context');
  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
