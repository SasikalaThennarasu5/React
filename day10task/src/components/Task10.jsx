import React, { useState, useEffect } from 'react';

const Task10 = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
      const data = await res.json();
      setCoins(data.slice(0, 10)); // Top 10 coins
    };

    fetchPrices();
  }, []);

  return (
    <div className="task">
      <h2>Task10: Crypto Price Tracker</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price (USD)</th>
            <th>Symbol</th>
          </tr>
        </thead>
        <tbody>
          {coins.map(coin => (
            <tr key={coin.id}>
              <td>{coin.name}</td>
              <td>${coin.current_price}</td>
              <td>{coin.symbol.toUpperCase()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task10;
