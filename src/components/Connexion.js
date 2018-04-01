import React, { Component } from 'react';

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

export default Connexion;