

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Login, Register, Index } from './routes/toComponent';
import { PrivateRoute } from './routes/utils';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <PrivateRoute path="/" component={Index} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App
