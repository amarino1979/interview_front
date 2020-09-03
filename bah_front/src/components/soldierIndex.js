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
                <p>Click on the clients name.</p>
                <table className="table">
                    <thead className="thead">
                        <tr>
                            <th>Name</th>
                            <th>Rank</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        {this.props.soldiers.map(soldier => {
                            return (
                                <tr key={soldier._id} >
                                    <td className="tableData" onClick={() => this.renderSoldier(soldier)}><a>{soldier.name}</a></td>
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
