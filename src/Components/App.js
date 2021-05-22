import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
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
import AnsweredQuestion from './AnsweredQuestions'

//the first page will be login if the authedUser === Loggedout else it will be redirected to the home page
//user will choose user so the authedUser will not be equal Loggedout
// the home page will be directed to the unanswered questions first
//if the user entered any URL that is not expected it will be directed to the login and after that pageNotFound

//authedUser === LoggedOut --> '/login'
//authedUser !== LoggedOut --> '/'
//redirect from '/' to the '/unansweredQuestion' first until the user choose answeredQuestions
//else --> '/pageNotFound'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {

    return (
      <Router>
        
        <Fragment >
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true
              ? null
              : <div>
                    {this.props.authedUser === 'LoggedOut'
                      ? <Route path='/login' component={Login} />
                      // ? <Redirect from="/" to="/login" />

                      : <Switch>
                          <Route path='/' exact component = {Home} />
                          <Route path='/new' component={NewQuestion} />
                          <Route path='/LeaderBoard' component={LeaderBoard}/>
                          <Route path='/login' component={Login} />
                          <Route path='/question/:id' component={QuestionPage} />
                          <Route path='/notFound' component={PageNotFound} />
                          <Redirect to="/login" />
                      </Switch>
                    }
                </div>
              }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App)