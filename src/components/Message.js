import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Message extends Component {

    preRender = (isUser) => {
        if (isUser) {
            return (
                <p className="user-message">
                    { this.props.details.message }
                </p>
            )
        } else {
            return (
                <p className="not-user-message">
                <strong>{ this.props.details.pseudo }</strong> :
                { this.props.details.message }
                </p>
            )
        }
    }

    render() {
        return(
            this.preRender(this.props.isUser(this.props.details.pseudo))
        )
    }

    // Permet d'indiquer les erreurs en cas de suppresion de props ou d'appel de fonction
    static propTypes = {
        details: PropTypes.object.isRequired
    }
}

export default Message;