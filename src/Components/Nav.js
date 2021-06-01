import React from 'react'
import {NavLink, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import {logoutAction} from '../actions/authedUser'


class Nav extends React.Component{


    render(){

        const handleLogOut =() =>{
            const {dispatch} = this.props
            dispatch(logoutAction());
        }

        const user = this.props.authedUser.user
        const isLoggedIn = this.props.authedUser.isLoggedIn

        return(
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                            
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' activeClassName='active'>
                            New Question
                            
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' activeClassName='active'>
                            LeaderBoard
                            
                        </NavLink>
                    </li>
                    <li>
                        {/* <NavLink to='/login' activeClassName='active'> */}
                            {
                                !isLoggedIn ? //if isLoggedIn === true -> display the user's info in the nav
                                    <p> login </p>
                                    : <div>
                                        Hello {user.name}
                                        <img alt="avatar" src={user.avatarURL} className='avatarNav'/>
                                        <button onClick={handleLogOut}>Log out</button>
                                    </div>
                                    //else remove the user's info from the nav
                            } 
                        {/* </NavLink> */}
                    </li>
                </ul>
            </nav>
        )
    }
}

function mapStateToProps ({ authedUser, users, questions}) {
    return {
        authedUser: authedUser,
        Questions: questions,
    }
}
  
export default connect(mapStateToProps)(Nav)