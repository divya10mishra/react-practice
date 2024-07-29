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
          },
        ],
      },
      {
        id: "4",
        comment: "hello shello",
      },
    ],
  };
  const [comment, setComment] = useState({ id: "1", comment: "", replies: [] });

  const handleReply = (newReply, newId) => {
    console.log(newReply, newId, "replies");
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
    }

    let filteredReply = currentComment.replies.map((item) =>
      deleteRecursively(item, deleteId).filter((item) => item !== null)
    );
    return {
      ...currentComment,
      replies: filteredReply,
    };
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
