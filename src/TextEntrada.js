import React from 'react';

class TextoEntrada extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valorText : ''
        }
    }

    manejarClick(e) {
        console.log(e.target.value);
        this.setState({
            valorText : e.target.value
        });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={ (e) => this.manejarClick(e) } value={this.state.valorText}></input>
            </div>
        );
    }
}

export default TextoEntrada;