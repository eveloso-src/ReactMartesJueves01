import React from 'react';
import BotonIncremental from './BotonIncremental';
import TextoEntrada from './TextEntrada';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<div>
            <BotonIncremental estadoInicial="0" evento={z => alert(z)} /> 
            <br /><br />
            <TextoEntrada />
        </div>);
    }
}

export default App;