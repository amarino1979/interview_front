import React, { Component } from 'react'
import SoldierIndex from '../components/soldierIndex'
import ClientForm from '../components/clientForm'
let baseUrl = 'http://localhost:3003'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            soldiers: []
        }
    }

    componentDidMount = () => {
        const savedUrl = baseUrl + '/clients/'
        fetch(savedUrl, {
            method: 'GET',
            json: true,
            headers: new Headers({
            'content-type': 'application/json'
            }),
            mode: 'cors',
            })
        .then(res => {
            return res.json();
        }).then((data) => {
            this.setState({
            soldiers: data,
            })
        })
    }

    render() {
        // console.log(this.state.soldiers)
        return (
            <div className="grid-container">
                <div className="grid1"><h1>Client Specs</h1></div>
                <ClientForm />
                <SoldierIndex 
                    soldiers = {this.state.soldiers}
                    history={this.props.history}
                />
            </div>
        )
    }
}
