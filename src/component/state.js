import React, { Component } from 'react'

export default class Prop extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"this is a constructor in child class",
             button:"save"
        };
    }
    styles={
        fontStyle:"Italic",
        color:"Purple"
      };
      Buttonchange=()=>{
          this.setState({
              message:"thank you for clicking",
              button:"saved"  
            });
      };
    render() {
        return (
            <div className="App" >
                <h4 style={this.styles}>{this.state.message} </h4>
                <button onClick={this.Buttonchange}>{this.state.button}</button>
            </div>
        );
    }
}
