import React, { Component, Fragment } from 'react'

export default class NavigationBar extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="ui inverted huge borderless fixed fluid menu">
      <a className="header item">Queimada</a>
      <div className="right menu">

        {this.props.currentUser ?
          <Fragment>
            <a className="item" href={`/users/${this.props.currentUser.user.id}`}>Home</a>
            <a className="item">Settings</a>
            <a className="item">Messages</a>
            <a className="item">Help</a>
            <a className="item" onClick={this.props.logout}>Logout</a>
            <a className="item">Logged In: {this.props.currentUser.user.full_name}</a>
          </Fragment>
          :
          <Fragment>
            <a className="item">Help</a>
            <a className="item" href="/signup">Sign Up</a>
            <a className="item" href="/login">Log In</a>
            <a className="item">Not Logged In</a>
          </Fragment>
        }
      </div>
    </div>
    )
  }
}

// RIGHT ABOUT THE TERNARY
// <div className="item">
//   <div className="ui small input">
//     <input placeholder="Search..." />
//   </div>
// </div>