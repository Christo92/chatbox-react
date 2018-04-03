import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulaire extends Component {

    state = {
        length: this.props.length,
    };

    createMessage = event => {
        event.preventDefault();
        
        const message = {
            message : this.message.value,
            pseudo : this.props.pseudo
        };

        this.props.addMessage(message);

        //Reset
        this.messageForm.reset();
        const length = this.props.length;
        this.setState({ length })
    };

    compteur = event => {
        const length = this.props.length - this.message.value.length;
        this.setState({ length });
    };

    render() {
        return (
            <form 
                className="form" 
                onSubmit={e => this.createMessage(e)}
                ref={input => this.messageForm = input }
            >
                <textarea 
                    required 
                    maxLength={ this.props.length }
                    ref={ input => this.message = input }
                    onChange={e => this.compteur(e) }
                    >
                </textarea>

                <div className="info">
                { this.state.length}
                </div>

                <button type="submit">Envoyer!</button>
            </form>
        )
    }

    // Permet d'indiquer les erreurs en cas de suppresion de props ou d'appel de fonction
    static propTypes = {
        addMessage: PropTypes.func.isRequired,
        pseudo: PropTypes.string.isRequired,
        length: PropTypes.number.isRequired,
    };
}

export default Formulaire;
