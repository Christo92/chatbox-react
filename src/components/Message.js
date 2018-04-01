import React, { Component } from 'react';

class Message extends Component {
    render() {
        return(
            <p className="user-message">
                {this.props.pseudo}: Mon super message !
            </p>
        )
    }
}

export default Message;