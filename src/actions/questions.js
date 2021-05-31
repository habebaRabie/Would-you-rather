import {_saveQuestion} from '../utils/_DATA'
import {showLoading , hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTIONS = 'ADD_QUESTIONS'
export const AssignQuestion_ToUser = 'AssignQuestion_ToUser'
export const AddAnswer_Question = 'AddAnswer_Question'

export function receiveQuestion(questions){
    return{
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function addQuestion(question){
    return{
        type: ADD_QUESTIONS,
        question
    }
}

export function assignToUser(question, users){
    console.log('question: ', question);
    console.log('users', users)
        return{
            type: AssignQuestion_ToUser,
            question,
            users
        }
}

export function handleAddQuestion (optionOneText, optionTwoText){
    return(dispatch, getState)=>{
        const {authedUser, users} = getState()
        dispatch(showLoading())
        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser.user.id,
        })
        .then((question)=>{
            dispatch(addQuestion(question))
            dispatch(assignToUser(question, users))
        })
            
        .then(()=> dispatch(hideLoading()))
    }
}


export function addAnswerToQues( authedUser , QID, answer){
    return{
        type: AddAnswer_Question,
        authedUser,
        QID,
        answer
    }
}