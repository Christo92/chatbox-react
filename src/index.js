import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Import css
import './index.css';

class Connexion extends Component {
    render() {
        return (
            <div className="connexionBox">
                <form className="connexion">
                    <input type="text" placeholder="Pseudo" required/>
                    <button type="sumbit">Valider</button>
                </form>
            </div>
        )
    };
}

ReactDOM.render(
    <Connexion/>, document.getElementById('root')
);