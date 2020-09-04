import React, { Component } from 'react'
//import {useHistory} from 'react-router-dom'

export default class soldierIndex extends Component {
    renderSoldier = (soldier) => {
        console.log(soldier)
        this.props.history.push('/soldiers', soldier)
    }

    render() {
        return (
            <React.Fragment>
                <div className="grid3">
                <h3 className="CI">Client Index</h3>
                <p>Click on the clients name or search by rank or last name.</p>
                <div className="search-container">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-md-6"  value={this.props.soldiers.lastName} onChange={this.handleChange} type="search" placeholder="Search by Last Name" aria-label="Search"/>
                    <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-md-6" value={this.props.soldiers.rank} onChange={this.handleChange} type="search" placeholder="Search by Rank" aria-label="Search"/>
                    <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>
                <table className="table">
                    <thead className="thead">
                        <tr>
                            <th>Last Name</th>
                            <th>First</th>
                            <th>Rank</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        {this.props.soldiers.map(soldier => {
                            return (
                                <tr key={soldier._id} >
                                    <td className="tableData" onClick={() => this.renderSoldier(soldier)}><a>{soldier.lastName}</a></td>
                                    <td className="tableData" onClick={() => this.renderSoldier(soldier)}><a>{soldier.firstName}</a></td>
                                    <td className="tableData">{soldier.rank}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
                </div>
            </React.Fragment>
        )
    }
}
