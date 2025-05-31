import React, { useState, useEffect } from 'react';

const Task8 = () => {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');
  const [converted, setConverted] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
      const data = await res.json();
      setRates(data.rates);
    };

    fetchRates();
  }, [from]);

  const convert = () => {
    if (rates[to]) {
      setConverted((amount * rates[to]).toFixed(2));
    }
  };

  return (
    <div className="task">
      <h2>Task8: Currency Converter</h2>
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <select value={from} onChange={e => setFrom(e.target.value)}>
        {Object.keys(rates).map(currency => (
          <option key={currency}>{currency}</option>
        ))}
      </select>
      <select value={to} onChange={e => setTo(e.target.value)}>
        {Object.keys(rates).map(currency => (
          <option key={currency}>{currency}</option>
        ))}
      </select>
      <button onClick={convert}>Convert</button>
      {converted && <p>{amount} {from} = {converted} {to}</p>}
    </div>
  );
};

export default Task8;
