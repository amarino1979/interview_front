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
                <h1>Client Index</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.soldiers.map(soldier => {
                            return (
                                <tr key={soldier._id} >
                                    <td onClick={() => this.renderSoldier(soldier)}>{soldier.name}</td>
                                    <td>{soldier.rank}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}
