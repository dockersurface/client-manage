

import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import { main } from './routes/index'
import { RenderRoutes } from './routes/utils'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <RenderRoutes routes={main}></RenderRoutes>
                </div>
            </Router>
        );
    }
}

export default App
