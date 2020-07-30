import React from 'react'

import ParentClient from './components/ParentClient.js'
import AdminClient from './components/AdminClient.js'

import AdminView from "./components/AdminView.js";

import ParentView from "./components/ParentView.js";


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
                                <div class="uk-card uk-card-primary uk-card-small uk-card-body"
                                    style={{
                                        marginTop: 50,
                                        marginRight: 120,
                                        marginLeft: 100
                                    }}
                                >
                                    <h3 class="uk-card-title" style={{textAlign: "center"}}>Teachers</h3>
                                    <span uk-icon="icon: user; ratio: 5" style={{textAlign: "center"}}></span>
                                </div>
                            </Link>
                        </ul>
                        <ul>
                            <Link to="/adminClient">
                                <div class="uk-card uk-card-secondary uk-card-small uk-card-body"
                                    style={{
                                        marginTop: 50,
                                        marginRight: 120,
                                        marginLeft: 100
                                    }}
                                >
                                    <h3 class="uk-card-title">Parents</h3>
                                    <span uk-icon="icon: users; ratio: 5"></span>
                                </div>
                            </Link>
                        </ul>
                    </ul>

                </Switch>
            </Router>

        </div>
    )
}

export default App