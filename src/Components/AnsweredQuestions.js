import React from 'react'
import { connect } from 'react-redux'

// function to loop on the questions and the users.questions to see the match ones
// represent the questions and a button to submit
//after submission we will go to the QuestionPage to view the users who voted

class AnsweredQuestion extends React.Component{
    render(){
        const question = this.props.Questions
        const user = this.props.Users
        const questionIds = this.props.QuestionIds

        console.log(question)
        console.log(user)
        console.log(questionIds)
        // console.log(question[questionIds].optionOne.text)
        return(
            <div className='tweet-info'>            
                <h3 className='center'>Would you rather</h3>
                <form>
                    <div className='labelChoose'>
                        <input type="radio" name="choice" value="firstChoice"/>
                        {/* <label >{question.optionOne.text}</label> */}
                    </div>
                    <div  className='label'>
                        <input type="radio" name="choice" value="secondChoice"/>
                        {/* <label>{question.optionTwo.text}</label> */}
                    </div>
                    
                    {/* <button className='formbtn' onClick={handleSubmit}>Submit</button> */}
                </form>
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
  
export default connect(mapStateToProps)(AnsweredQuestion)
