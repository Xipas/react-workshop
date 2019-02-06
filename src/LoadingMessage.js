
import React from 'react'
import ReactDOM from 'react-dom'



const LoadingMessage = props =>
{
    return (<div className="ui icon message">
    <i className="notched circle loading icon"></i>
    <div className="content">
        <div className="header">
        {props.title}
        </div>
        <p>{props.message}</p>
    </div>
    </div>

);


};

export default LoadingMessage;




