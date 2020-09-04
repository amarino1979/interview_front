import React, { Component } from 'react'
import {buildRanks} from '../configs/configs'
let baseUrl = 'http://localhost:3003'
const UsaStates = require('usa-states').UsaStates;

const usStates = new UsaStates({includeNames: true, includeTerritories: true});
const statesNames = usStates.arrayOf('names')


export default class clientForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        city: '',
        state: '',
        rank: '',
        image: '',
    }

    handleChange = (event) => {
        this.setState({ [event.currentTarget.id]: event.currentTarget.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        console.log(this.state)
        await fetch(baseUrl + '/clients/', {
            method: 'POST',
            json: true,
            headers: new Headers({
                'content-type': 'application/json'
            }),
            mode: 'cors',
            body: JSON.stringify(this.state),
        })
        .then(res => {
            return res.json();
        }).then((data) => {
            this.props.updateSoldiers(data)
            console.log(data)
        })
        this.setState({
            firstName: '',
            lastName: '',
            city: '',
            state: '',
            rank: '',
            image: '',
        })
        }
    

    handleSelectClick = (eL) => {
        // console.log('value', eL.target.value)
        const value = eL.target.value
        this.setState({state: value ? value : ''})
    }
    render() {
        // console.log(this.state);
        return (

            
        <div className="grid2">
            <h3 className="CI">Create Client</h3>
                <form>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="validationDefault01">First name</label>
                        <input type="text" className="form-control" value={this.state.firstName} onChange={this.handleChange} id="firstName" required/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="validationDefault02">Last name</label>
                        <input type="text" className="form-control" value={this.state.lastName} onChange={this.handleChange}id="lastName" required/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="validationDefault03">City</label>
                        <input type="text" className="form-control" value={this.state.city} onChange={this.handleChange}id="city" required/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="validationDefault04">State</label>
                        <select className="custom-select" value={this.state.state} id="validationDefault04" onChange={(el) => this.handleSelectClick(el)}>
                            <option value=''>Select...</option>
                            {statesNames.map((stateName) => {
                                return <option value={stateName}>{stateName}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3"></div>
                        <select className="custom-select" value={this.state.rank} onChange={this.handleChange} id="rank">
                        <option defaultValue>Select Rank</option>
                        {buildRanks.map(rank => {
                            return (
                            <option value={rank}>{rank}</option>
                            )
                            })
                        }
                        </select>
                    </div>
                    <div className="form-row1">
                        <div className="col-md-6 mb-3"></div> 
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" value={this.state.image} onChange={this.handleChange} id="image" />
                                <label className="custom-file-label" htmlFor="customFile">Select Image</label>
                            </div>
                        </div>
                        <button onClick={this.handleSubmit} className="btn btn-primary" type="submit">Submit form</button>
                    </form>                                
                </div>
        )
    }
}
