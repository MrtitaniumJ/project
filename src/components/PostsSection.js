import React from 'react';
import { FaThumbsUp, FaCommentAlt, FaShare, FaUser } from 'react-icons/fa';
import '../styles.css';
import mobiscroll from '@mobiscroll/react';

const PostsSection = () => {
  // Sample posts data
  const posts = [
    { id: 1, username: 'User 1', text: 'Post text 1' },
    { id: 2, username: 'User 2', text: 'Post text 2' },
    // Add more posts here
  ];

  return (
    <div className="posts-section">
      {posts.map(post => (
        <div className="post" key={post.id}>
          <div className="post-header">
            <div className="user-icon">
              <FaUser />
            </div>
            <div className="username">{post.username}</div>
          </div>
          <div className="post-text">{post.text}</div>
          <div className="interaction-icons">
            <FaThumbsUp className="icon" />
            <FaCommentAlt className="icon" />
            <FaShare className="icon" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostsSection;
