import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: 'John';
      maxChars : this.props.value;
    };
  }
  
  handleFirstName = event => {
    this.setState ({
      firstName : event.target.value 
      maxChars : firstName.length
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
