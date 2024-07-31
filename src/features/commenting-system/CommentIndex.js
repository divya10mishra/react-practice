import React, { useState } from "react";
import Comments from "./Comments";
import { mockData } from "./data";

function CommentIndex() {
  const [comment, setComment] = useState({ id: "1", comment: "", replies: [] });

  const handleReply = (newReply, newId) => {
    let newComment = replyRecursively(comment, newReply, newId);
    setComment(newComment);
  };

  function replyRecursively(currentComment, newReply, newId) {
    if (currentComment.id === newId) {
      return {
        ...currentComment,
        replies: [...currentComment?.replies, newReply],
      };
    } else {
      return {
        ...currentComment,
        replies: [
          ...currentComment?.replies?.map((item) =>
            replyRecursively(item, newReply, newId)
          ),
        ],
      };
    }
  }

  function handleDelete(deleteId) {
    console.log(deleteId, "delete id");
    let filterDelete = deleteRecursively(comment, deleteId);
    setComment(filterDelete);
  }

  function deleteRecursively(currentComment, deleteId) {
    if (currentComment.id === deleteId) {
      return null;
    } else {
      return {
        ...currentComment,
        replies: currentComment.replies
          .map((item) => deleteRecursively(item, deleteId))
          .filter((item) => item != null),
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
          handleDelete={handleDelete}
        />
      )}
    </>
  );
}

export default CommentIndex;
