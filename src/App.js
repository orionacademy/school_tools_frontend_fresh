import React from 'react'

import ParentClient from './components/ParentClient.js'
import AdminClient from './components/AdminClient.js'

import AdminView from "./components/AdminView.js";

import ParentView from "./components/ParentView.js";

import { AwesomeButton } from 'react-awesome-button';


// React libraries
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <div>

            <Router>
                <Switch>
                    <Route path="/parentClient" >
                        <ParentClient />
                    </Route>

                    <Route path="/adminClient" >
                        <AdminClient />
                    </Route>


                    <ul>
                        <ul>
                            <Link to="/parentClient">
                                <AwesomeButton 
                                    size={'large'}
                                    type="primary"
                                    style={{marginLeft: "auto", marginRight: "auto", marginTop: "100px"}}
                                >
                                    Parent Side Client</AwesomeButton>
                            </Link>
                        </ul>
                        <ul>
                            <Link to="/adminClient">
                            <AwesomeButton 
                                    size={'large'}
                                    type="secondary"
                                    style={{marginLeft: "auto", marginRight: "auto", marginTop: "100px"}}
                                >
                                    Admin/Teacher Side Client</AwesomeButton>
                            </Link>
                        </ul>
                    </ul>

                </Switch>
            </Router>

        </div>
    )
}

export default App