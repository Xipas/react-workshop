import React from 'react'
import ReactDOM from 'react-dom'
import LoadingMessage from './LoadingMessage'
import CommentList from './CommentList'
class App  extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {Messages : [], loading : true};


        fetch('https://api.mocklets.com/mock67793/GetMessages')
        .then(Response => Response.json())
        .then(data => this.setState(
            {Messages : data, loading:false}

        ));

    }

    render(){


        if(this.state.loading)
            {
                return (<LoadingMessage 
                    title="A Procurar Informação" 
                     message = "Popr Favor Aguarde, enquanto obtemos a informação!"/>
                         );
            }else
            {
                return (<div className="ui  comments">
                     <CommentList commentList={this.state.Messages}/>
                 </div>
             );
            }


    }


}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)
