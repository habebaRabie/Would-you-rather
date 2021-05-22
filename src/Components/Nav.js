import React from 'react'
import {NavLink, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends React.Component{
    render(){

        const user = this.props.authedUser.user
        const users = this.props.Users
        // console.log('USER :  ', user.isLoggedIn)
        console.log('USERS :  ',users)

        return(
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/new' activeClassName='active'>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' activeClassName='active'>
                            LeaderBoard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/login' activeClassName='active'>
                            {
                                user.isLoggedIn === false ?
                                <p>Login</p>
                                :  <div>
                                        Hello {user.name}
                                        <img alt="avatar" src={user.avatarURL} className='avatarNav'/>
                                        <Redirect to='/' />
                                    </div>
                            }      
                        </NavLink>
                        
                    </li>
                    
                </ul>
    
            </nav>
        )
    }
}

function mapStateToProps ({ authedUser, users, questions}) {


    return {
        authedUser: authedUser,
        Users:Object.values(users),
        Questions: questions,
    }
}
  
export default connect(mapStateToProps)(Nav)