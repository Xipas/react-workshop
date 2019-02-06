import React from 'react'
import ReactDOM from 'react-dom'



const CommentDetail = props =>
{
    return (<div className="comment ">
             <a href="/" className="avatar">
                 <img tag="avatar" src={props.src} />
             </a>
            <div className="content">
            <a href="/">
                {props.author}
            </a>    
            <div className="metadata">
                <span className="data">{props.time}</span>

            </div>
            <div className="text"> {props.text}</div>
        </div>

            </div>
    );


};

export default CommentDetail;
