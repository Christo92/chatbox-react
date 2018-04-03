import React, { Component } from 'react';

// Import Components
import Formulaire from './Formulaire';
import Message from './Message';

// Import base
import base from '../base'

//Import Css
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import '../animation.css';


class App extends Component {

    state = {
        messages: {},
    }

    componentWillMount() {
        this.ref = base.syncState('/', {
            context: this,
            state: 'messages'
        });
    }

    componentDidUpdate(prevProps, prevState) {
        // Mettre le scroll en bas
        this.messages.scrollTop = this.messages.scrollHeight;
    }
    

    addMessage = message => {
        // Copier le state
        const messages = {...this.state.messages};

        // On ajoute le message avec une clé timestamp
        const timestamp = Date.now();
        messages[`message-${timestamp}`] = message;

        // On supprime si plus de 10 messages [marche pas]
       // Object.keys(messages).splice(0, -10).map(key => messages[key] = null);

        // Mettre à jour notre State
        this.setState({ messages });
    }

    isUser = (pseudo) => {
        return pseudo === this.props.match.params.pseudo
    }

    render() {

        const messages = Object
            .keys(this.state.messages)
            .map(key => <Message key={key} details={this.state.messages[key]} isUser={this.isUser}/>)
        ;
        

        return(
            <div className="box">
                <div>
                    <div className="messages"
                    ref={ input => this.messages = input }>
                    <CSSTransitionGroup 
                    component="div" 
                    className="message"
                    transitionName="message"
                    transtionEnterTimeout={200}
                    transitionLeaveTimeOut={200}>
                        {messages}
                    </CSSTransitionGroup>
                    </div>

                    <Formulaire 
                        addMessage={ this.addMessage } 
                        pseudo={ this.props.match.params.pseudo }
                        length="140"
                    />
                </div>
                <div>
                </div>
            </div>
        )
    }
}

export default App;