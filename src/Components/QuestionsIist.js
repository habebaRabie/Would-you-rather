import React from 'react'
// import {_getQuestions, _getUsers} from '../utils/_DATA'
import {connect} from 'react-redux'
import {formatDate} from '../utils/helpers'
import {Link, withRouter, Redirect} from 'react-router-dom'
import {_saveQuestion} from '../utils/_DATA'

// add two functions the answered and unanswered questions

//unanswered questions
//filter the questions in the user
//if it's not found : true => the question will be dispalyed as unanswered
//if it's found : false => the question will be dispalyed as answered

class QuestionsList extends React.Component{

    // toParent =(id) =>{ //redirect to the parent question
    //     // this.props.history.push(`/question/${id}`)
        
    // }

    

    render(){

        const questionID = this.props.id

        // if (questionID === null){
        //     return <p>This question doesn't exist</p>
        // }
 
        const questions = this.props.questions
        const user = this.props.authedUser
        const users = this.props.users

        console.log('questionID: ', questionID)
        console.log('USER :  ', user)
        console.log('USERS :  ',users)
        console.log('QUESTION :  ',questions)
        console.log('SARAH: ', user.user.questions)

        // const handleSubmit=(event, optionNumber)=>{
        //     event.preventDefault()
        //     let option = document.querySelector('input[name = "choice"]:checked').value;
        //     console.log(option)
        //     if(option === 'firstChoice'){
        //         questions.optionOne.votes.concat(user.id)
        //         // console.log(question)
        //         // this.toParent(questionID)
        //         // <Redirect to=`/question/${questionID}` />
                
        //     }
        //     else if(option === 'secondChoice'){
        //         questions.optionTwo.votes.concat(user.id)
        //         // this.toParent(questionID)
        //     }
            
        // }
        const answeredQuestions = [];
        const unAnsweredQuestion = [];
        const handleQuestions=() =>{
            
            if(user.user.questions !== undefined){
                const search = user.user.questions
                console.log('SEARCH  :  ',search)
                Object.keys(questions).forEach((QID)=>{
                    // const questionObject = questions[questionID];
                    console.log('QUESTIONID',QID)
                    if(search.find((questionid) => questionid === QID)){
                        answeredQuestions.push(questions[QID]);
                    }
                    else{
                        unAnsweredQuestion.push(questions[QID]);
                    }
                })
            }
            console.log('answeredQuestions:  ', answeredQuestions)
            console.log('unAnsweredQuestion:  ', unAnsweredQuestion)
        }

        const handleAnsweredQuestions = () =>{
            answeredQuestions.map((question) => 
                    <div className='tweet'>
                        {console.log(question)}
                        <span className='name'>{users[question.author].name}</span>
                    </div>
            )}

        const handleUnAnsweredQuestions = () =>{
            unAnsweredQuestion.map((question) => 
                console.log('question:  ', question)
            )
        }
        

        return(
            <div>
                    {handleQuestions()}
                    <button onClick={()=> 
                        handleUnAnsweredQuestions
                    }>
                        unAnswered Question
                    </button>
                    <button onClick={()=> handleAnsweredQuestions()}>
                        Answered Question
                    </button>
                
                {/* <div >
                    <Link to={`/questions/${questionID}`} >
                        <img src={users[questions[questionID].author].avatarURL} alt={`Avatar of ${users[questions[questionID].author].name}`} className='avatar' />
                        <span className='name'>{users[questions[questionID].author].name}</span>
                    </Link>
                    <div className='tweet-info'>
                            
                            <h3 className='center'>Would you rather</h3>
                            <form>
                                <div className='labelChoose'>
                                    <input type="radio" name="choice" value="firstChoice"/>
                                    <label >{questions[questionID].optionOne.text}</label>
                                </div>
                                <div  className='label'>
                                    <input type="radio" name="choice" value="secondChoice"/>
                                    <label>{questions[questionID].optionTwo.text}</label>
                                </div>
                                
                                <button className='formbtn' onClick={handleSubmit}>Submit</button>
                            </form>
                        
                    </div>
                    {handleQuestions()}
                    {handleAnsweredQuestions()}
                    {console.log('answeredQuestions2222:  ', answeredQuestions)}
                </div> */}
                 {/* Hello */}
                
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, users, questions }) {
    // const questions = questions[id]
    return {
        authedUser,
        questions,
        //: Object.keys(questions),
        users,
        id: Object.keys(questions),
    }
}
      
export default withRouter(connect(mapStateToProps)(QuestionsList))
// export default QuestionsList;