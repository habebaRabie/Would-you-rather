import {_saveQuestion} from '../utils/_DATA'
import {showLoading , hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTIONS = 'ADD_QUESTIONS'


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
export function handleAddQuestion (text){
    return(dispatch, getState)=>{
        const {authedUser} = getState()

        dispatch(showLoading())
        return _saveQuestion({
            text,
            author: authedUser
        })
        .then((question)=>dispatch(addQuestion(question)))
        .then(()=> dispatch(hideLoading()))
    }
}
