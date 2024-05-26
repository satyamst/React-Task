// src/components/ItemDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setItem(data))
      .catch(error => console.error('Error fetching item details:', error));
  }, [id]);

  if (!item) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  return (
    <div className="container mt-5">
      <motion.h1
        className="mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {item.title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {item.body}
      </motion.p>
    </div>
  );
}

export default ItemDetails;
