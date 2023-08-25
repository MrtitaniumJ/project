import React from 'react';
import { FaThumbsUp, FaCommentAlt, FaShare } from 'react-icons/fa'; // Import icons
import '../styles.css';

const WhatsOnYourMind = () => {
  return (
    <div className="whats-on-your-mind">
      <textarea placeholder="What's on your mind?" rows="3"></textarea>
      <div className="interaction-icons">
        <FaThumbsUp className="icon" />
        <FaCommentAlt className="icon" />
        <FaShare className="icon" />
      </div>
    </div>
  );
}

export default WhatsOnYourMind;
