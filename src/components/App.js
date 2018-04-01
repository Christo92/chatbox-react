import React, { Component } from 'react';

// Import Components
import Formulaire from './Formulaire';
import Message from './Message';


class App extends Component {
    render() {
        return(
            <div className="box">
                <div>
                    <div className="messages">
                        <Message pseudo="Chris"/>
                    </div>

                    <Formulaire/>
                </div>
            </div>
        )
    }
}

export default App;