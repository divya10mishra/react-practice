import React, { useState } from "react";

function Comments({ comment, handleReply, handleDelete }) {
  const [reply, setReply] = useState("");
  const [flag, setFlag] = useState(false);

  const addPost = (id) => {
    if (reply.trim() === "") {
      return; // Prevent empty replies
    }
    const newReply = {
      id: Date.now().toString(),
      comment: reply,
      replies: [],
    };
    handleReply(newReply, id);
    setFlag(false);
    setReply("");
  };

  const deleteComment = (id) => {
    handleDelete(id);
  };
  return (
    <>
      {comment && (
        <div key={comment.id} style={{ margin: "3%" }}>
          <div style={{ border: "1px solid black", width: "10%" }}>
            {comment.comment}
          </div>
          <div style={{ border: "1px solid black", width: "10%" }}>
            {flag && (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input
                  placeholder="comment"
                  type="text"
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                />
                <button onClick={() => addPost(comment.id)}>Post</button>
              </div>
            )}
          </div>
          <button onClick={() => setFlag(true)}>Reply</button>
          <button onClick={() => deleteComment(comment.id)}>Delete</button>
          {comment?.replies?.map((item) => (
            <Comments
              comment={item}
              handleReply={handleReply}
              key={item.id}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Comments;
