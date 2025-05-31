import React, { useState } from 'react';

const Task12 = () => {
  const [articles, setArticles] = useState([]);

  const fetchNews = async () => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_NEWSAPI_KEY`
      );
      const data = await res.json();
      setArticles(data.articles.slice(0, 5));
    } catch (error) {
      alert('Failed to load news');
    }
  };

  return (
    <div className="task">
      <h2>Task12: News Headlines</h2>
      <button onClick={fetchNews}>Load News</button>
      {articles.map((article, index) => (
        <div key={index}>
          <h4>{article.title}</h4>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noreferrer">Read More</a>
        </div>
      ))}
    </div>
  );
};

export default Task12;
