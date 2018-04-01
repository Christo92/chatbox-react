import React from 'react';
import ReactDOM from 'react-dom';

// Import components
import Connexion from './components/Connexion';
import App from './components/App';
import NotFound from './components/NotFound';

// Rooter
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import css
import './index.css';

const Root = () => {
    return (
        <Router>
            <div>
            <Switch>
                <Route exact path="/" component={ Connexion }/>
                <Route path="/pseudo/:pseudo" component={ App }/>
                <Route component={ NotFound }/>
            </Switch>
            </div>
        </Router>
    )
}

ReactDOM.render(
    <Root/>, document.getElementById('root')
);