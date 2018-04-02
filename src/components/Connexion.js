import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Connexion extends Component {

    goToChat = (event) => {
        event.preventDefault();
        const pseudo = this.pseudoInput.value;

        // Changer l'url
        this.props.history.push(`/pseudo/${pseudo}`)
    };

    render() {
        return (
            <div className="connexionBox" onSubmit={e => this.goToChat(e)}>
                <form className="connexion">
                    <input 
                        type="text" 
                        placeholder="Pseudo" 
                        required 
                        ref={input => this.pseudoInput = input}
                    />
                    <button type="sumbit">Valider</button>
                </form>
            </div>
        )
    };

    static contextTypes = {
        router: PropTypes.object
    }
}

export default Connexion;