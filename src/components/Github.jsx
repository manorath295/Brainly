import ItemCard from './ItemCard';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Itemlist = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/content', {
        withCredentials: true,
      });
      setContents(response.data.contents); // contains an array of content
    } catch (err) {
      console.error("Error fetching content:", err);
    }
  };

  if (contents.length === 0) return <h1>Loading or no content</h1>;

  return (
  <div className="grid grid-cols-3 gap-7">
    {contents
      .filter(item => item.link && item.link.includes("github"))
      .map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
  </div>
);

};

export default Itemlist;
