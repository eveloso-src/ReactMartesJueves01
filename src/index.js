import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

ReactDom.render(
                <div>
                    <App nombre="Julieta" />
                    <App nombre="Ramon" />
                    <App nombre="Carolina" />
                </div>, 
        document.getElementById('root'));

