import React from 'react'
import { connect } from 'react-redux'
import QuestionsList from './Questionslist'

class Home extends React.Component{
    render(){
        console.log(this.props)
        // const data = this.props
        console.log(this.props)
        return (
            <div>
            <h3 className='center'>The questions</h3>
            <ul className='dashboard-list'>
                {this.props.QuestionIds.map((id) => (
                <li key={id}>
                    <QuestionsList id={id}/>
                </li>
                ))}
            </ul>
            </div>
        )
    }
}


function mapStateToProps ({ questions }) {
    return {
      QuestionIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}
  
export default connect(mapStateToProps)(Home)
