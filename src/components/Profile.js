import React, { Component } from 'react'
import axios from '../config/axios';
import { Jumbotron} from 'reactstrap';
import {connect} from 'react-redux'

class Profile extends Component {
    state = {
        data: undefined
    }


    componentDidMount() {
        // Get Profile
        axios.get('/users/' + this.props.data_id)
            .then(res => {
                this.setState({data: res.data});
                
            })
    }

    
    render() {
        if(this.state.data){
            return (
                <div className="container mt-5">
                    <Jumbotron >
                        <img src= {'https://jc9mongoose.herokuapp.com/users/' + this.props.data_id + '/avatar'}  alt="Please choose your avatar" key={new Date()} />
                        <h1 className="display-3">Hello, {this.state.data.name}!</h1>
                        <p className="lead"></p>
                    </Jumbotron>
                </div>
            )
        }

        return <h1>Loading</h1>
    }
}

const mapToProps = state => {
    return {
        data_id: state.auth.id
    }
}

export default connect(mapToProps)(Profile)