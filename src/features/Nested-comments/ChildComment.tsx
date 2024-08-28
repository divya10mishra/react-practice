import React, { useState } from "react";

interface Comment {
  id: number;
  content: string;
  replies: Comment[];
}
type props = {
  commentData: Comment;
  handleReply: (newReply: Comment, currentId: number) => void;
  handleDelete: (currentId: number) => void;
};

function ChildComment({ handleReply, handleDelete, commentData }: props) {
  const [showInput, setShowInput] = useState<number | null>(null);
  const [input, setInput] = useState("");

  const onInputShow = (e: React.MouseEvent, activeId: number) => {
    e.stopPropagation();
    setShowInput((prev) => (prev === activeId ? null : activeId));
  };

  const onAdd = (id: number) => {
    const newNode = {
      id: Date.now(),
      content: input,
      replies: [],
    };

    handleReply(newNode, id);
    setInput("");
    setShowInput(null);
  };

  const onDeleteComment = (id: number) => {
    handleDelete(id);
  };

  return (
    <>
      <>
        <div style={{ margin: "1%" }} key={commentData.id}>
          <div style={{ border: "1px solid black", width: "30%" }}>
            <div style={{ padding: "10px" }}>{commentData.content}</div>
            <button onClick={(e) => onInputShow(e, commentData.id)}>
              Reply🔺
            </button>
            <button onClick={() => onDeleteComment(commentData.id)}>
              Delete❌
            </button>
          </div>

          {showInput === commentData.id && (
            <div>
              <input
                type="text"
                placeholder="comment"
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={() => onAdd(commentData.id)}>Add</button>
            </div>
          )}

          <div style={{ padding: "10px" }}>
            {commentData.replies.map((item) => (
              <ChildComment
                commentData={item}
                handleReply={handleReply}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </>
    </>
  );
}

export default ChildComment;
