import React from 'react';
import MyButton from "./ UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div className="post">
            <strong>{props.post.id}. {props.post.title}</strong>
            <div>
                {props.post.body}
            </div>
            <div className="post_bttns">
                <MyButton onClick={()=> props.remove(props.post)}>Удалить пост</MyButton>
            </div>
        </div>
    );
};

export default PostItem;