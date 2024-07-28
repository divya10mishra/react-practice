import React, { useState } from "react";
import Comments from "./Comments";

function CommentIndex() {
  let ds = {
    id: "1",
    comment: "hello",
    replies: [
      {
        id: "9",
        comment: "hello world",
        replies: [
          {
            id: "5",
            comment: "hello india",
            replies: [
              {
                id: "6",
                comment: "hello raebareli",
                replies: [],
              },
            ],
          },
          {
            id: "3",
            comment: "hello prabhu town",
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
  const [comment, setComment] = useState(ds);

  const handleReply = (newReply, newId) => {
    console.log(newReply, newId, "replies");
    let newComment = replyRecursively(comment, newReply, newId);
    setComment(newComment);
  };

  function replyRecursively(currentComment, newReply, newId) {
    if (currentComment.id === newId) {
      return {
        ...currentComment,
        replies: [...currentComment.replies, newReply],
      };
    } else {
      return {
        ...currentComment,
        replies: [
          ...currentComment.replies.map((item) =>
            replyRecursively(item, newReply, newId)
          ),
        ],
      };
    }
  }
  console.log(comment, "comment");
  return (
    <>
      {comment && (
        <Comments
          comment={comment}
          handleReply={handleReply}
          key={comment.id}
        />
      )}
    </>
  );
}

export default CommentIndex;
