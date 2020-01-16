import React from 'react'

import {Store} from 'redux'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import createStore, {history, IStore} from 'store'
import {Redirect, Route, Switch} from 'react-router'

import {SearchRepositories} from 'screens/SearchRepositories'
import {RepositoryDetails} from 'screens/RepositoryDetails'

import logo from 'images/logo.svg'

import './styles.css'

export class App extends React.Component {
    store: Store<IStore>

    constructor(props) {
        super(props)

        this.store = createStore()
    }

    render(): React.ReactNode {
        return (
            <div className="App">
                <img src={logo} alt={'logo'} className={'App-logo'}/>
                <header className="App-header">
                    <Provider store={this.store}>
                        <ConnectedRouter history={history}>
                            <Switch>
                                <Route path="/" component={SearchRepositories} />
                                <Route path="/details" component={RepositoryDetails} />

                                <Redirect to={'/'} />
                            </Switch>
                        </ConnectedRouter>
                    </Provider>
                </header>
            </div>
        )
    }
}

export default App
