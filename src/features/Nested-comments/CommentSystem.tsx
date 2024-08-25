import { useState } from "react";

import ChildComment from "./ChildComment";

interface Comment {
  id: number;
  content: string;
  replies: Comment[];
}

const CommentSystem = () => {
  const [commentData, setCommentData] = useState<Comment>({
    id: 1,
    content: "Comment here",
    replies: [],
  });

  const handleReply = (newReply: Comment, currentId: number) => {
    console.log(newReply);
    let newComment = recursiveReply(commentData, newReply, currentId);
    setCommentData(newComment);
  };

  const recursiveReply = (
    tree: Comment,
    newReply: Comment,
    currentId: number
  ): Comment => {
    if (tree.id === currentId) {
      return {
        ...tree,
        replies: [...tree.replies, newReply],
      };
    } else {
      console.log(commentData, "comment data");
      return {
        ...tree,
        replies: [
          ...tree?.replies?.map((item) =>
            recursiveReply(item, newReply, currentId)
          ),
        ],
      };
    }
  };

  const handleDelete = (currentId: number) => {
    //const filteredDelete = recursiveDelete(commentData, currentId);
  };

  // const recursiveDelete = (tree: Comment, currentId: number): Comment => {
  //   if (tree.id !== currentId) {
  //     tree.replies.filter((item) => item.id !== currentId).map((curr)=>{
  //       if(curr.replies.length>0){
  //         return{
  //           ...curr,replies: recursiveDelete(curr, currentId)
  //         }
  //       }
  //       else{
  //         return curr
  //       }
  //     })
     
  //   }
  // };

  return (
    <>
      <ChildComment
        commentData={commentData}
        handleReply={handleReply}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default CommentSystem;
