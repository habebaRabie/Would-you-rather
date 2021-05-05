import React from 'react'
import {_getQuestions, _getUsers} from '../utils/_DATA'
// import {connect} from 'react-redux'
// import {formatDate} from '../utils/helpers'
import {Link, withRouter, Redirect} from 'react-router-dom'


class QuestionsList extends React.Component{

    toParent =(e, id) =>{ //redirect to the parent question
        e.preventDefault()
        this.props.history.push(`/question/${id}`)
    }

    render(){

        
        

        const questionID = this.props.id

        if (questionID === null){
            return <p>This question doesn't exist</p>
        }
 
        const question = this.props.Questions
        const user = this.props.Users.find((user)=> user.id === question.author)

        const handleSubmit=(event, optionNumber)=>{
            event.preventDefault()
            let option = document.querySelector('input[name = "choice"]:checked').value;
            console.log(option)
            if(option === 'firstChoice'){
                question.optionOne.votes.concat(user.id)
                console.log(question)
                this.toParent(questionID)
                
            }
            else if(option === 'firstChoice'){
                question.optionTwo.votes.concat(user.id)
                this.toParent(questionID)
            }
            
        }
        

        return(
            <div className='tweet'>
                <div >
                    <Link to={`/questions/${questionID}`} >
                        <img src={user.avatarURL} alt={`Avatar of ${user.name}`} className='avatar' />
                        <span className='name'>{user.name}</span>
                    </Link>
                    <div className='tweet-info'>
                            
                            <h3 className='center'>Would you rather</h3>
                            <form>
                                <div className='labelChoose'>
                                    <input type="radio" name="choice" value="firstChoice"/>
                                    <label >{question.optionOne.text}</label>
                                </div>
                                <div  className='label'>
                                    <input type="radio" name="choice" value="secondChoice"/>
                                    <label>{question.optionTwo.text}</label>
                                </div>
                                
                                <button className='formbtn' onClick={handleSubmit}>Submit</button>
                            </form>
                        
                    </div>
                </div>
                 
                
            </div>
           
            // <div>Hello</div>
        )
    }
}

// function mapStateToProps ({ authedUser, users, question }, {id}) {
//     const questions = questions[id]
//     return {
//         authedUser,
//         question: question
//         ? formatQuestion(question, users[question.author])
//         : null
//     }
// }
      
// export default withRouter(connect(mapStateToProps)(QuestionsList))
export default QuestionsList;