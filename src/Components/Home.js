import React from 'react'
import { connect } from 'react-redux'
import QuestionsList from './QuestionsIist'

class Home extends React.Component{
    render(){
        console.log(this.props)

        return (
            <div>
            <h3 className='center'>The questions</h3>
            <ul className='dashboard-list'>
                {this.props.QuestionIds.map((id, author) => (
                <li key={id}>
                    <QuestionsList id={id} Questions= {this.props.Questions[id]} Users={this.props.Users}/>
                </li>
                ))}
            </ul>
            </div>
        )
    }
}


function mapStateToProps ({ questions, users, authedUser }) {
    return {
        authedUser: authedUser,
        Questions: questions,
        QuestionIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        Users:Object.values(users)
    }
}
  
export default connect(mapStateToProps)(Home)
