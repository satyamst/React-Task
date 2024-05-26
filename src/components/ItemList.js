import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Item List</h1>
      <ul className="list-group">
        {items.map(item => (
          <li key={item.id} className="list-group-item">
            <Link to={`/item/${item.id}`} className="text-decoration-none">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
