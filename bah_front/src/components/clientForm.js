import React, { Component } from 'react'
import {buildRanks} from '../configs/configs'

const UsaStates = require('usa-states').UsaStates;

const usStates = new UsaStates({includeNames: true, includeTerritories: true});
const statesNames = usStates.arrayOf('names')


export default class clientForm extends Component {
    state = {
        // clients: clients,
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

    handleSubmit = (event) => {
        event.preventDefault()
        // console.log('you did it!')
        const newClient = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            city: this.state.city,
            state: this.state.state,
            rank: this.state.rank,
            image: this.state.image,
        }
        this.setState({
            client: [ ...this.state.client, newClient],
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
                <form onSubmit={this.handleSubmit}>
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
                                        
                                        <select className="custom-select" id="validationDefault04" onChange={(el) => this.handleSelectClick(el)}>
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
                                        <select className="custom-select" onChange={this.handleChange} id="rank">
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
                                        <button className="btn btn-primary" type="submit">Submit form</button>
                                </form>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-md-6"  value={this.state.lastName} onChange={this.handleChange} type="search" placeholder="Search by Last Name" aria-label="Search"/>
                                    <button className="btn btn-primary" type="submit">Search</button>
                                </form>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-md-6" value={this.state.rank} onChange={this.handleChange} type="search" placeholder="Search by Rank" aria-label="Search"/>
                                    <button className="btn btn-primary" type="submit">Search</button>
                                </form>
                            </div>
        )
    }
}
