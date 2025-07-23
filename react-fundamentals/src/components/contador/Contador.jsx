import React from "react";
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

export default class Contador extends React.Component {
    
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.numeroInicial || 5,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Display numero={this.state.numero} />
                <Botoes incrementar={this.inc} decrementar={this.dec} passo={this.state.passo}/>
            </div>
        )
    }
}