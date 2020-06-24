import React from "react";

class Welcomecls extends React.Component {
    render() {
      return <h1>Hello {this.props.name}, this is a class component.</h1>;
    }
}
  
export default Welcomecls;