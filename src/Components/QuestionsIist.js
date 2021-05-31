import React from 'react'
import {connect} from 'react-redux'
import {NavLink, withRouter} from 'react-router-dom'

class QuestionsList extends React.Component{
    
    state= {
        showType: 'unAnswered'
    }

    render(){
        const users = this.props.users

        const answeredQuestions = this.props.answeredQuestions;
        const unAnsweredQuestion = this.props.unAnsweredQuestions;
        const handleUnAnsweredQuestions = () =>{
            return unAnsweredQuestion.map((question, i)=>{
                return (
                    <div key={i} className='poll'>
                        <img src={users[question.author].avatarURL} alt={`Avatar of ${users[question.author].name}`} className='avatar' />
                        <span className='title'> {users[question.author].name} says Would you rather </span>
                        <div >
                            <p className='content'>{question.optionOne.text}</p>
                            <p >OR</p>
                            <p className='content'>{question.optionTwo.text}</p>
                        </div>
                        <NavLink to={`/questions/${question.id}`} className='btn' >View Question</NavLink>
                    </div>
                )
            })
        }
        const handleAnsweredQuestions = () =>{
            return answeredQuestions.map((question, i)=>{
                return (
                    <div key={i} className='poll'>
                        <img src={users[question.author].avatarURL} alt={`Avatar of ${users[question.author].name}`} className='avatar' />
                        <span className='title'> {users[question.author].name} says Would you rather </span>
                        <div>
                            <p className='content'>{question.optionOne.text}</p>
                            <p >OR</p>
                            <p className='content'>{question.optionTwo.text}</p>
                        </div>
                        <NavLink to={`/questions/${question.id}`} className='btn' >View Question</NavLink>

                    </div>
                )
            })
        }

        return(
            <div>
                    <button className="btn" onClick={ ()=>{
                        this.setState({showType: 'unAnswered'})
                    }}>
                        unAnswered Questions  {unAnsweredQuestion.length}
                    </button>
                    <button className="btn" onClick={ ()=>{
                        this.setState({showType: 'answered'})
                    }}>
                        Answered Questions  {answeredQuestions.length}
                    </button>
                
                    {this.state.showType === 'answered' ? handleAnsweredQuestions() : handleUnAnsweredQuestions()}
                
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, users, questions }) {
    const answeredQuestions = Object.values(questions).filter((question) =>question.optionOne.votes
    .includes(authedUser.user.id) || question.optionTwo.votes.includes(authedUser.user.id)).sort((a, b) => b.timestamp - a.timestamp)

    const unAnsweredQuestions = Object.values(questions).filter((question) =>!question.optionOne.votes
    .includes(authedUser.user.id) && !question.optionTwo.votes.includes(authedUser.user.id)).sort((a, b) => b.timestamp - a.timestamp)
    return {
        authedUser,
        questions,
        users,
        id: Object.keys(questions),
        answeredQuestions,
        unAnsweredQuestions
    }
}
      
export default withRouter(connect(mapStateToProps)(QuestionsList))
