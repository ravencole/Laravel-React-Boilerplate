import React from 'react'
import { render } from 'react-dom'
import Heading from './components/Heading'
import TodosContainer from './components/TodosContainer'
import request from 'superagent'

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }

        this.getCount = this.getCount.bind(this)
    }
    componentDidMount() {
        window.setInterval(() => {
            this.getCount()
        }, 5000)
    }
    getCount() {
        request
            .get(`/count?count=${this.state.count}`)
            .end((err, res) => {
                if (err)
                    console.log(err)
                else
                    this.setState({count: res.text})
            })
    }
    render() {
        return (
            <div className="container">
                <Heading />
                <TodosContainer count={this.state.count} />
            </div>
        )
    }
}
