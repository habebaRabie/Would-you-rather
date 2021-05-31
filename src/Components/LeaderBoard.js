import React from 'react'
import { connect } from 'react-redux'


class LeaderBoard extends React.Component{
    render(){
        const users = this.props.Users;
        let sortedArray = [...users].sort((a, b) => {
            let userAScore = a.questions.length + Object.keys(a.answers).length;
            let userBScore = b.questions.length + Object.keys(b.answers).length;
            return userBScore - userAScore;
        });
        return(
            <div>
                <h3 className='center'>Leader Board</h3>
                {
                    sortedArray.map((user)=>{
                        return(
                            <div key={user.id} className='poll'>
                                <img src={user.avatarURL} alt={`Avatar of ${user.name}`} className='avatar' />
                                <span className='title'>{user.name}</span>
                                <p>Number of answeredQuestions is: {Object.keys(user.answers).length}</p>
                                <p>Number of created questions is: {Object.keys(user.questions).length}</p>
                                <p>Score: {Object.keys(user.answers).length + Object.keys(user.questions).length}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps ({ users, questions }) {
    return {
        Users:Object.values(users), 
        questions       
    }
}

export default connect(mapStateToProps)(LeaderBoard)