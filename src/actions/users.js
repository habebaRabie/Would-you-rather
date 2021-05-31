export const RECEIVE_USERS = 'RECEIVE_USERS'
export const AddAnswer_User = 'AddAnswer_User'

export function receiveUsers(users){
    return{
        type: RECEIVE_USERS,
        users
    }
}

export function addAnswerToUser (authedUser , QID, answer){
    return{
        type: AddAnswer_User,
        authedUser,
        QID,
        answer
    }
}






