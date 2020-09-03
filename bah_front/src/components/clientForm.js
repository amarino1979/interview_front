import React, { Component } from 'react'

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

    handleSelectClick = (eL) => {
        console.log('value', eL.target.value)
        const value = eL.target.value
        this.setState({state: value ? value : ''})
    }
    render() {
        // console.log(this.state);
        return (

            
                <div className="grid2">
                <form>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationDefault01">First name</label>
                            <input type="text" className="form-control" id="validationDefault01" required/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="validationDefault02">Last name</label>
                                <input type="text" className="form-control" id="validationDefault02"  required/>
                            </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="validationDefault03">City</label>
                                    <input type="text" className="form-control" id="validationDefault03" required/>
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
                                        <select className="custom-select">
                                            <option defaultValue>Select Rank</option>
                                            <option value="1">Private</option>
                                            <option value="2">Private First Class</option>
                                            <option value="3">Specialist</option>
                                            <option value="4">Corporal</option>
                                            <option value="5">Sergeant</option>
                                            <option value="6">Staff Sergeant</option>
                                            <option value="7">Sergeant First Class</option>
                                            <option value="8">Master Sergeant</option>
                                            <option value="9">First Sergeant</option>
                                            <option value="10">Sergeant Major</option>
                                            <option value="11">Command Sergeant Major</option>
                                            <option value="12">Sergeant Major of the Army</option>
                                        </select>
                                       </div>
                                       <div className="form-row1">
                                            <div className="col-md-6 mb-3"></div> 
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input" id="customFile" />
                                                <label className="custom-file-label" htmlFor="customFile">Select Image</label>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary" type="submit">Submit form</button>
                                </form>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-md-6" type="search" placeholder="Search by Name" aria-label="Search"/>
                                    <button className="btn btn-primary" type="submit">Search</button>
                                </form>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-md-6" type="search" placeholder="Search by Rank" aria-label="Search"/>
                                    <button className="btn btn-primary" type="submit">Search</button>
                                </form>
                            </div>
        )
    }
}
