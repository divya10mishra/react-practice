import { useState } from "react";
import SubComment from "./CommentList";

const Comments = () => {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [flag, setFlag] = useState(false);

  const postComment = () => {
    setFlag(true);
  };
  const addReply = () => {};
  const deleteComment = () => {};
  return (
    <>
      <input
        placeholder="comment"
        onChange={(e) => setComment(e.target.value)}
      />
      <input placeholder="name" onChange={(e) => setName(e.target.value)} />
      <button onClick={postComment}>Post</button>
      <div>
        <button onClick={addReply}>Reply</button>
        <button onClick={deleteComment}>Delete</button>
      </div>
    </>
  );
};

export default Comments;
