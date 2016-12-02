import React, { Component } from 'react';

export default class TodosContainer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container--todos">
                {this.props.count}
            </div>
        );
    }
}
