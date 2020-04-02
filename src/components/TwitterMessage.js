import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: 'John'
    };
  }
  
  handleFirstName = event => {
    this.setState ({
      firstName : event.target.value 
      maxChar : event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleFirstName(event)} value={this.state.firstName} name="message" id="message" />
        {this.props.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
