import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import {handleAddQuestion} from '../actions/questions'

class NewQuestion extends React.Component{

    state= {
        firstQuestion: "",
        secondQuestion: ""
    }

    AddingChoice =(e)=>{
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    AddingQuestion =(e) =>{
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(handleAddQuestion(this.state.firstQuestion, this.state.secondQuestion));
    }

    render(){
        return(
            <form onSubmit={this.AddingQuestion}>
                <h2>Would You Rather</h2>
                <p>Option One</p>
                <input className="inputField" type= "text" placeholder="Enter the first choice" id="firstQuestion" onChange={this.AddingChoice}/>
                <hr/>
                <p>Option One</p>
                <input className="inputField" type= "text" placeholder="Enter the first choice" id="secondQuestion" onChange={this.AddingChoice}/>
                <button className="btn">Add Question</button>
                
            </form>
        )
    }
}


function mapStateToProps ({ questions, authedUser }) {
    return {
        authedUser: authedUser,
        Questions: questions
    }
}
  
export default connect(mapStateToProps)(NewQuestion)
