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
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleFirstName} value={this.state.firstName} name="message" id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
