import React, { createContext, useState } from 'react';

export const CounterContext = createContext({
  count: 0,
  increment: () => {}
});

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
};
