import React from 'react';

class BotonIncremental extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valor : parseInt(props.estadoInicial)
        }

        this.incrementar = this.incrementar.bind(this);    
    }

    incrementar() {
        this.setState(estadoAnterior => {
            return {
                valor : estadoAnterior.valor + 1
            }
        });
        this.props.evento('Ocurrio un evento lo estoy notificando');
    }

    render() {
        return (
            <input type="button" onClick={this.incrementar} value={this.state.valor}></input>
        );
    }
}

export default BotonIncremental;