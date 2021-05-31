import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import QuestionPage from './QuestionPage'
import Nav from './Nav'
import Home from './Home'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import Login from './Login'
import PageNotFound from './PageNotFound'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            {this.props.loading ? null : (
              <div>
                {!this.props.authedUser.isLoggedIn ? (
                  <Login />
                ) : (
                  <div>
                    <Nav />
                    <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/new" component={NewQuestion} />
                      <Route path="/LeaderBoard" component={LeaderBoard} />
                      <Route path="/question/:id" component={QuestionPage} />
                      
                    </Switch>
                  </div>
                )}
                <Route path="/notFound" component={PageNotFound} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null,
    authedUser: authedUser,
  }
}

export default connect(mapStateToProps)(App)


