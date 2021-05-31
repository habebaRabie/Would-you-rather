import React from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router'
import {addAnswerToQues} from '../actions/questions'

class QuestionPage extends React.Component{

    state= {
        choice: 'optionOne'
    }

    handleChange = (e) =>{
        this.setState({
            choice: e.target.value
        })
    }

    handleSubmit =(e)=>{
        e.preventDefault()
        const {dispatch} =this.props
        const id = this.props.id
        const {choice} =this.state
        const authedUser = this.props.authedUser
        dispatch(addAnswerToQues(authedUser, id, choice))
    }    

    render(){
        
        if(this.props.QuestionNotFound === true){
            return <Redirect to='/notFound' />
        }

        const user = this.props.authedUser
        const question = this.props.question
        const QuestionIsAnswered = this.props.QuestionIsAnswered
        const optionOne = question.optionOne
        const optionTwo = question.optionTwo
        const author = this.props.users

        const optionOneNumberOfVotes = optionOne.votes.length
        const optionTwoNumberOfVotes = optionTwo.votes.length
        const totalNumberOfVotes = optionOneNumberOfVotes + optionTwoNumberOfVotes

        const optionOnePercentage =   optionOneNumberOfVotes / totalNumberOfVotes*100
        const optionTwoPercentage =   optionTwoNumberOfVotes / totalNumberOfVotes*100

        
        return(
            <div>
                {
                    QuestionIsAnswered ? (
                        <div className='poll'>
                            <img src={author[question.author].avatarURL} alt={`Avatar of ${author[question.author].name}`} className='avatar' />
                            <span className='title'>{author[question.author].name} asks Would you rather</span>
                            <div className={optionOne.votes.includes(user.user.id) ? 'answeredpoll' : 'poll'}>
                                <p>{optionOne.text}</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width: `${optionOnePercentage}%` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"> ({optionOneNumberOfVotes} out of {totalNumberOfVotes} votes) {optionOnePercentage}%</div>
                                </div>
                            </div>
                            <div className={optionTwo.votes.includes(user.user.id) ? 'answeredpoll' : 'poll'}>
                                <p>{optionTwo.text}</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width: `${optionTwoPercentage}%` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">({optionTwoNumberOfVotes} out of {totalNumberOfVotes} votes) {optionTwoPercentage}%</div>
                                </div>
                            </div>
                        </div>
                    ):(
                        <div className='poll'>
                            <img src={author[question.author].avatarURL} alt={`Avatar of ${author[question.author].name}`} className='avatar' />
                            <span className='title'>{author[question.author].name} asks Would you rather</span>
                            <div className='choice'>
                                <input type="radio" id="optionOne" name="option" value="optionOne" checked={this.state.choice === 'optionOne'} onChange={this.handleChange}/>
                                <label htmlFor="optionOne">{optionOne.text}</label>
                            </div>
                            <div className='choice'>
                                <input type="radio" id="optionTwo" name="option" value="optionTwo" checked={this.state.choice === 'optionTwo'} onChange={this.handleChange}/>
                                <label htmlFor="optionTwo">{optionTwo.text}</label>
                            </div>
                            <button onClick={this.handleSubmit} className='btn'>Submit Answer</button>
                            
                        </div>
                    )
                }
            </div>
            
        )
    }
}

function mapStateToProps ({ authedUser, users, questions}, {match }) {
    const question = questions[match.params.id];
  
    const id = match.params.id
    let QuestionIsAnswered = false;
    const QuestionNotFound = true;
    if(question === undefined){
        return {
            QuestionNotFound
        }
    }else{
        if(question.optionOne.votes.includes(authedUser.user.id) || question.optionTwo.votes.includes(authedUser.user.id)){
            QuestionIsAnswered = true;
        }
    }

     return {
        authedUser,
        id,
        question,
        QuestionIsAnswered,
        users
    }
}
      
export default connect(mapStateToProps)(QuestionPage)