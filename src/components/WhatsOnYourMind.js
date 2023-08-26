import React, { useState } from 'react';
import '../styles.css';

const WhatsOnYourMind = () => {
  const [postText, setPostText] = useState(''); // State to hold the post text
  const [posts, setPosts] = useState([]); // State to hold the list of posts

  const handlePostClick = () => {
    if (postText.trim() !== '') {
      // Create a new post object
      const newPost = {
        id: new Date().getTime(),
        text: postText,
      };

      // Add the new post to the list of posts
      setPosts([...posts, newPost]);

      // Clear the post text input
      setPostText('');
    }
  };

  return (
    <div className="whats-on-your-mind">
      <textarea
        placeholder="What's on your mind?"
        rows="3"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      ></textarea>
      <button className="post-button" onClick={handlePostClick}>
        Post
      </button>

      {/* Display the list of posts */}
      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            {post.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatsOnYourMind;
