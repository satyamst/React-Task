// src/components/ItemList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
      <motion.ul
        className="list-group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {items.map(item => (
          <motion.li
            key={item.id}
            className="list-group-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={`/item/${item.id}`} className="text-decoration-none">
              {item.title}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default ItemList;
