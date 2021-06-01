import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import QuestionsList from './QuestionsIist'

class Home extends React.Component{
    render(){

        const user = this.props.authedUser
        if(user.isLoggedIn === false){
            <Redirect to='/login' /> 
        }

        return (
            <div>
            <h3 className='center'>The questions</h3>
            <div>
                <QuestionsList Questions= {this.props.Questions} Users={this.props.Users}/>
            </div>
            </div>
        )
    }
}


function mapStateToProps ({ questions, users, authedUser  }) {
    return {
        authedUser: authedUser,
        Questions: questions,
        QuestionIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        Users:Object.values(users),
        
    }
}
  
export default connect(mapStateToProps)(Home)
