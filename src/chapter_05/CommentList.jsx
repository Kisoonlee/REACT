import React from "react";
import Comment from "./Comment";

function CommentList(props){
    return(
        /*
        <div>
            <Comment name={comment.name} Comment={comment.comment}/>
        </div>
        */
       <div>
            {comments.map((com)=>{
                return(
                    <Comment name={com.name} comment={com.comment} />
                );
            }
            )}
       </div>
    );
}
export default CommentList;

const comments = [
    {
        name: "이인재",
        comment: "안녕하세요, ",
    },
    {
        name: "유재석",
        comment: "얼추",
    },
    {
        name: "김겅주",
        comment: "테두리",
    },
];
