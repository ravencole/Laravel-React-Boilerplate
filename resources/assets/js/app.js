import React, { Component } from 'react'
import Heading from './components/Heading'
import Links from './components/Links'

export default class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="main--container">
                <Heading />
                <Links links={this.props.links} />
            </div>
        )
    }
}
