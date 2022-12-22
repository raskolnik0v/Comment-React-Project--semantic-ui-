import React from "react";

Comment = ({ name, timeago, star, comment, avatar }) => {
  return (
    <div className="comment">
      <a className="avatar" href="/">
        <img alt="" src={avatar} />
      </a>
      <div className="content">
        <a className="author" href="/">
          {name}
        </a>
        <div className="metadata">
          <div className="date">{timeago} days ago</div>
          <div className="rating">
            <i className="star icon"></i>
            {star} Star
          </div>
        </div>
        <div className="text">{comment}</div>
      </div>
    </div>
  );
};
export default Comment;
