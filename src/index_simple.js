import React from 'react'
import ReactDOM from 'react-dom'

class Contador extends React.Component{

    constructor(props){
        super(props);

        this.state = {contador: 0, nome : "Andre"};

    }

    Incrementar()
    {
        this.setState({ contador : this.state.contador + 1 });

    }

    AlteraTexto(event)
    {
        this.setState({nome : event.target.value});
    }
    render()
    {
        const Msg = "Ola Mundo 2";
        const desc = "Live From SEIUM :)"
        const style = {color: "red", backgroundColor : "Black"};


        return (
        <div>

           <h1>{Msg} {this.state.nome}</h1>
           <h4 style={style}>{desc} {this.state.nome}</h4>


           <h2>Contador : {this.state.contador}</h2>
           <button onClick={this.Incrementar.bind(this)}  > +1</button>

            <h3> Olá {this.state.nome}</h3>
            <input type="text"
             onChange={this.AlteraTexto.bind(this)}
             value={this.state.nome}
              ></input>
        </div>
        );

    }
} 


ReactDOM.render(
<Contador />,
document.querySelector("#root")
);