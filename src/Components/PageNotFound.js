import React from 'react'

//antthing except the routes in the app component will be directed to this route

class PageNotFound extends React.Component{
    render(){
        return(
            <p className='pageNotFound'>ERROR 404: Page Not Found</p>
        )
    }
}

export default PageNotFound;