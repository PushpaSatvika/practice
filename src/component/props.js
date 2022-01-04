import React, { Component } from 'react'

 class props extends Component {
    render() {
        return (
            <div>
                <h4>Hello {this.props.name} from {this.props.place} welcome to react JS</h4>
                <p>{this.props.children}</p>
            </div>
        )
    }
}
export default props;