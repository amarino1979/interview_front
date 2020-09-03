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

            <div>
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
                                    {/* <div class="col-md-3 mb-3">
                                        <label for="validationDefault05">Zip</label>
                                        <input type="text" class="form-control" id="validationDefault05" required/>
                                    </div> */}
                                    </div>
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
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="customFile" />
                                        <label className="custom-file-label" htmlFor="customFile">Select Image</label>
                                    </div>
                                    <button className="btn btn-primary" type="submit">Submit form</button>
                                </form>
                            </div>
        )
    }
}
