import React, {Component} from 'react'

export default class FriendInfo extends Component {
  render() {

    return (
      <div className="ui row" style={{"paddingBottom":"30px"}}>

        <div className="ui link cards float left">

        {Object.keys(this.props.currentFriend).length !== 0 ?
        <div className="card">
            <div className="image">
              <img src={this.props.currentFriend.avatar} alt={this.props.currentFriend.full_name}/>
            </div>
            <div className="content">
              <div className="header">{this.props.currentFriend.full_name}</div>
              <div className="meta">
                <a>New York, NY</a>
              </div>
              <div className="description">
                {this.props.currentFriend.full_name} is a user living in New York.
              </div>
            </div>
            <div className="extra content">
              <span className="right floated">
                Joined in 2013
              </span>
              <span>
                <i className="user icon"></i>
                75 Friends
              </span>
            </div>
          </div>
          :
          <div className="card">
            <div className="content">
              Please choose a user to get started
            </div>
          </div>}


          <div className="card">
            <div className="image">
              <img src="http://iconshow.me/media/images/ui/ios7-icons/png/512/cloud-upload-outline.png" alt="transmit file"/>
            </div>
          </div>


          <div className="card">
            <div className="image">
              <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/16186-200.png" alt="video chat"/>
            </div>
          </div>
        </div>


      </div>
    )
  }
}
