import React, { Component } from 'react';

// Import Components
import Formulaire from './Formulaire';
import Message from './Message';


class App extends Component {

    state = {
        messages: {},
    }

    addMessage = message => {
        // Copier le state
        const messages = {...this.state.messages};

        // On ajoute le message avec une clé timestamp
        const timestamp = Date.now();
        messages[`message-${timestamp}`] = message;

        // Mettre à jour notre State
        this.setState({ messages });
    }

    render() {
        return(
            <div className="box">
                <div>
                    <div className="messages">
                        <Message 
                            pseudo={ this.props.match.params.pseudo }
                        />
                    </div>

                    <Formulaire 
                        addMessage={ this.addMessage } 
                        pseudo={ this.props.match.params.pseudo }
                        length="140"
                    />
                </div>
            </div>
        )
    }
}

export default App;