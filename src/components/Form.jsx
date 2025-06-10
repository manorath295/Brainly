import React, { useRef, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleForm } from '../utils/formSlice';

const Form = ({setRefresh}) => {
  const titleRef = useRef();
  const urlRef = useRef();
  const typeRef = useRef();

  const [contentId, setContentId] = useState(null);
  const [tagTitle, setTagTitle] = useState("");
  const dispatch=useDispatch()
  const backform=()=>{
    dispatch(toggleForm())
  }
  const handleAddContent = async (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const link = urlRef.current.value;
    const type = typeRef.current.value;

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/content",
        { title, link, type },
        { withCredentials: true }
      );

      setContentId(res.data.message._id);
      setRefresh(p=>!p)
      alert("Content created! Now you can add tags.");
    } catch (err) {
      alert("Error creating content: " + err?.response?.data);
    }
  };

  const handleAddTag = async () => {
    if (!contentId || !tagTitle) {
      alert("Both tag and content must be present.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/tags",
        { title: tagTitle, contentId },
        { withCredentials: true }
      );

      alert("Tag added successfully.");
      console.log(res.data);
    } catch (err) {
      alert("Error adding tag: " + err?.response?.data);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-xl mb-2">Add New Link</h1>
      <form className="p-4 border-2 w-80" onSubmit={handleAddContent}>
        <div className="mb-3">
          <label htmlFor="title">Title</label>
          <input ref={titleRef} id="title" type="text" className="w-full border p-1" />
        </div>
        <div className="mb-3">
          <label htmlFor="link">Link</label>
          <input ref={urlRef} id="link" type="text" className="w-full border p-1" />
        </div>
        <div className="mb-3">
          <label htmlFor="type">Type</label>
          <select ref={typeRef} className="w-full border p-1">
            <option value="image">Image</option>
            <option value="video">Video</option>
            <option value="article">Article</option>
            <option value="audio">Audio</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">Create</button>
        
        <div  onClick={backform} className="bg-blue-500 text-white px-4 py-1 rounded">Back</div>
       
      </form>

      {contentId && (
        <div className="mt-6">
          <h2 className="text-lg mb-2">Add Tag</h2>
          <input
            value={tagTitle}
            onChange={(e) => setTagTitle(e.target.value)}
            placeholder="Enter tag"
            className="border p-1 mr-2"
          />
          <button onClick={handleAddTag} className="bg-green-500 text-white px-3 py-1 rounded">Add Tag</button>
        </div>
      )}
    </div>
  );
};

export default Form;
