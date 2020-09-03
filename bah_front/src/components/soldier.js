import React, { Component } from 'react'
import Photo1 from '../assets/DavidClient.jpg'
import moment from 'moment'

export default class soldier extends Component {
    state = {
        soldier: {},
        showInput: false
    }

    componentDidMount = () => {
        this.setState({ soldier: this.props.location.state })
    }

    handleUpdateRank = () => {
        this.setState({showInput: true})
    }

    render() {
        const formattedDate = moment(this.state.soldier.timeStamp).format("MMMM Do YYYY");
        console.log(this.state)
        return (
            <div className="card" style={{ width: "18rem" }}>
                <img src={Photo1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Client: {this.state.soldier.name}</h5>
                    <p className="card-text">Rank: {this.state.soldier.rank}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Granted Rank Date: {formattedDate}</li>
                    <li className="list-group-item">
                        {
                            this.state.showInput &&
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button">Action</button>
                                <button class="dropdown-item" type="button">Another action</button>
                                <button class="dropdown-item" type="button">Something else here</button>
                            </div>
                        </div>
                        }
                    </li>
                    {/* <li>
                        <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-danger" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li> */}
                </ul>
                <div className="card-body">
                    <a href="#" onClick={this.handleUpdateRank} class="card-link">Update Client Record</a>
                    <a href="#" class="card-link">Save Record</a>
                </div>
            </div>
        )
    }
}
