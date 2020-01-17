import React from 'react'

import {Store} from 'redux'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import createStore, {history, IStore} from 'store'
import {Redirect, Route, Switch} from 'react-router'

import {SearchRepositories} from 'screens/SearchRepositories'
import {Brunches} from 'screens/Brunches'

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
        <header className="App-header">
          <Provider store={this.store}>
            <ConnectedRouter history={history}>
              <div onClick={() => history.push('/')} className={'logoContainer'}>
                <img src={logo} alt={'logo'} className={'App-logo'} />
              </div>
              <Switch>
                <Route path="/brunches/:author/:repo" component={Brunches} />
                <Route path="/" component={SearchRepositories} />

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
