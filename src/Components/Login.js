import React from 'react'
// import Home from './Home'
// import {receiveUsers} from '../actions/users'
import {setAuthedUser} from '../actions/authedUser'
import { connect } from 'react-redux'
// import {Redirect} from 'react-router-dom'

class Login extends React.Component{
    render(){

        const users = this.props.Users

        console.log(this.props.authedUser)

        const handelFilter=(e)=>{
            const {dispatch} = this.props
            dispatch(setAuthedUser(e.target.value))
        }

        // if(this.props.authedUser !== ''){
        //     return <Redirect to='/'/>
        // }

        return(
            <div>
                <h3 className='center'>Login</h3>
                <p>Please select a user to login as</p>
                <div className="label">
                    <label>Users: </label>
                    <select name="users" onChange={handelFilter}>
                        <option value="sarahedo">{users[0].id}</option>
                        <option value="tylermcginnis">{users[1].id}</option>
                        <option value="johndoe">{users[2].id}</option>
                    </select>
                </div>
            </div>
        )
    }
}
function mapStateToProps ({ users, authedUser }) {
    return {
        authedUser,
        Users:Object.values(users),
    }
}

export default connect(mapStateToProps)(Login)
