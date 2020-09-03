import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        return (
            <li className="" >{this.props.name}</li>
        )
    }
}

export default ListItem;