import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'

import { Layout } from 'antd'
import { useRootStore } from './index'
import { HeaderLayout } from './Layouts/HeaderLayout'
import { ContentLayout } from './Layouts/ContentLayout'

function App() {

    const rootStore = useRootStore()

    useEffect(() => {
        rootStore.setInitialStorageContents()
    }, [])

    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={login}/>
                <Route
                    exact
                    path="/profile"
                    component={() => <Profile authorized="true"/>}>

                </Route>
            </Switch>
        </Router>
    )
}

export default App
