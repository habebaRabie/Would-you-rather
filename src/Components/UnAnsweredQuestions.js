import React from 'react'
import { connect } from 'react-redux'

class UnAnsweredQuestion extends React.Component{

    showUnanswered=()=>{
        
    }

    render(){
        return(
            <div>UnAnswered Question</div>
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
  
export default connect(mapStateToProps)(UnAnsweredQuestion)