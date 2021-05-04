import React from 'react'
import {_getQuestions, _getUsers} from '../utils/_DATA'
// import {connect} from 'react-redux'
import {formatDate} from '../utils/helpers'
import {Link, withRouter} from 'react-router-dom'

class QuestionsList extends React.Component{

    // toParent =(e, id) =>{ //redirect to the parent question
    //     e.preventDefault()
    //     this.props.history.push(`/question/${id}`)
    // }
    render(){
        // const {questionID} = this.props

        // if (questionID === null){
        //     return <p>This question doesn't exist</p>
        // }
        // const id = Object.values(this.props)
        // console.log(this.props)
        // console.log(Object.entries(id))
        // const questionID = this.props
        // console.log(_getQuestions())
        const {id, author, timestamp, optionOne, optionTwo} = this.props
        console.log(author)
        // const {UserId, name, avatarURL, answers, questions} = _getUsers()

        return(
            <Link to={`/questions/${id}`} className='tweet'>
                {/* <img src={avatarURL} alt={`Avatar of ${author}`} className='avatar' /> */}
                <div className='tweet-info'>
                    <div>
                        <span>{author}</span>
                        <div>{formatDate(timestamp)}</div>
                        {/* <p>{text}</p> */}
                    </div>
                    
                </div>
            </Link>
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