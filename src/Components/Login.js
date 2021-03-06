import React from 'react'
import {setAuthedUser} from '../actions/authedUser'
import {setRedirection} from '../actions/redirect'
import { connect } from 'react-redux'

class Login extends React.Component{
    componentDidMount() {
        const {dispatch} = this.props            
        dispatch(setRedirection(this.props.path));
    }
    render(){


        const users = this.props.Users
        const chooseUser=(e)=>{
            const {dispatch} = this.props            
            const user = users.filter((user)=> user.id === e.target.value ) 
            dispatch(setAuthedUser(user[0]))
        }
        return(
            <div>
                <h3 className='center'>Login</h3>
                <p>Please select a user to login as</p>
                <div className="label">
                    <label>Users: </label>
                    <select name="users" onChange={chooseUser}>
                        <option value={"none"}></option>
                        {
                            users.map((user)=>
                                <option key={user.id} value={user.id}>{user.name}</option>
                            )
                        }
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