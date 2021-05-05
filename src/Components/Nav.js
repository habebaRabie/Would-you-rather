import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends React.Component{
    render(){

        const user = this.props.authedUser
        const users = this.props.Users
        const {logOut} = this.props
        console.log('ijuhjhbh', users)

        // const check = user !== '' ? true : false
       
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
                    <li id="tab-user">
                        {/* Hello {logOut ? "Login" : users.name} */}
                        {/* <img alt="avatar" src={logOut ? null : users.avatarURL} /> */}
                    </li>
                    
                </ul>
    
            </nav>
        )
    }
    
}

{/* <NavLink to='/login' activeClassName='active'>
    Login
    <div>
        { === true?
        <div>
            <p>{user.name}</p>
            <img src={users.avatarURL} alt={`Avatar of${users.name}`} className='avatarNav'/>
        </div>
        : null
        }
    </div>
</NavLink> */}

function mapStateToProps ({ authedUser, users, questions}) {

    let logOut = false;
    if (authedUser === "LoggedOut") {
        logOut = true;
    }

    return {
        authedUser: authedUser,
        Users:Object.values(users).find((u)=> u.id === authedUser),
        Questions: questions,
        logOut
    }
}
  
export default connect(mapStateToProps)(Nav)