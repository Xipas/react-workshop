
    import React from 'react'
    import faker from 'faker'
    import CommentDetail from './CommentDetail'

    const CommentList = props =>
    {
        return (
            <div class="ui  cards">
            <div className="card"> 
            <div className="content">
            <div class="header"> Lista de Mensagens</div>

            {

                props.commentList.map(msg =>             
                        <CommentDetail author= {msg.author} 
                        time = {msg.timeAgo}
                        text ={msg.content}
                        src = {faker.image.avatar()} />

            )
            }
    </div>
        </div> </div>
        );


    };

    export default CommentList;




