import React, { useState } from "react";

function CommentIndex() {
  let ds = {
    id: "1",
    comment: "hello",
    replies: [
      {
        id: "1",
        comment: "hello",
        replies: [
          {
            id: "5",
            comment: "hello",
            replies: [
              {
                id: "6",
                comment: "hello",
                replies: [],
              },
            ],
          },
          {
            id: "3",
            comment: "hello",
            replies: [],
          },
        ],
      },
      {
        id: "4",
        replies: [],
      },
    ],
  };
  const [comment, setComment] = useState(null);
  const postComment = () => {
    setComment(ds);
  };
  return (
    <div>
      <input placeholder="comment" />
      <button onClick={postComment}>Post</button>
      <div>
        <button>Reply</button>
        <button>Delete</button>
      </div>
      <div>
        {comment &&
          Object.entries(comment).map(([key, value]) => {
            if (key == "comment") {
              return <div style={{ border: "1px solid black" }}>value</div>;
            }
          })}
      </div>
    </div>
  );
}

export default CommentIndex;
