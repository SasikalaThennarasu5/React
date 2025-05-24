import React from 'react';
function Task13() {
  const categories = [
    { name: 'Fruits', items: ['Apple', 'Banana'] },
    { name: 'Vegetables', items: ['Carrot', 'Broccoli'] }
  ];
  return (
    <div>
      {categories.map((category, i) => (
        <div key={i}>
          <h3>{category.name}</h3>
          <ul>
            {category.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
export default Task13;