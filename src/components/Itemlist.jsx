import ItemCard from './ItemCard';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Itemlist = ({val,setnum,refresh}) => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetchContent();
    // @ts-ignore 
  }, [val,refresh]);

  const fetchContent = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/content', {
        withCredentials: true,
      });
        console.log(response.data.contents);
      setContents(response.data.contents); // contains an array of content
        const counts = {
      All: contents.length,
      Twitter: 0,
      Youtube: 0,
      Website: 0,
      Github: 0,
      Linkedin: 0,
      Instagram: 0,
      Other: 0
    };
        contents.forEach(item => {
      const link = item.link.toLowerCase();
      if (link.includes("twitter")) counts.Twitter++;
      else if (link.includes("youtube")) counts.Youtube++;
      else if (link.includes("linkedin")) counts.Linkedin++;
      else if (link.includes("instagram")) counts.Instagram++;
      else if (link.includes("github")) counts.Github++;
      else if (link.includes("http")) counts.Website++;
      else counts.Other++;
    });

    setnum(counts);
    } catch (err) {
      console.error("Error fetching content:", err);
    }
  };

  if (contents.length === 0) return <h1>Loading or no content</h1>;

  return (
    <div className="grid grid-cols-3 gap-7">
      { val.toLowerCase()!= 'all'? contents.filter(mu=>mu.link.includes(val.toLowerCase())).map((item, index) => {
   console.log(item.link.includes(val.toLowerCase()));

        return(
        
        <ItemCard key={index} item={item} />
      )}):

       contents.map((item, index) => {
   console.log(item.link.includes(val.toLowerCase()));

        return(
        
        <ItemCard key={index} item={item} />
      )})
      }
    </div>
  );
};

export default Itemlist;
