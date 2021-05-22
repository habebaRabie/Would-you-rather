import React from 'react'
import { connect } from 'react-redux'


// function to loop on the questions and the users.questions to see the questions that are not in the users.questions
//we will map to go to the QuestionPage to view the users who voted in each question

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