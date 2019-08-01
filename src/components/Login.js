import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

import {onLogin} from '../actions'

class Login extends Component {
    onButtonClick = () => {
        const data_email = this.email.value
        const data_password = this.password.value
        this.props.onLogin(data_email, data_password)
    }

    render() {
        // Jika Belum Login
        if (!this.props.id) {
            return (
                <div className="mt-5 row">
                        <div className="col-sm-3 mx-auto card">
                            <div className="card-body">
                                <div className="border-bottom border-secondary card-title">
                                    <h1>Login</h1>
                                </div>
                                <div className="card-title mt-1">
                                    <h4>Email</h4>
                                </div>
                                <form className="input-group"><input ref={input => this.email = input} className="form-control" type="email"/></form>
                                <div className="card-title mt-1">
                                    <h4>Password</h4>
                                </div>
                                <form className="input-group"><input ref={input => this.password = input} className="form-control" type="password"/></form>
                                <div className="d-flex justify-content-center my-3">
                                    <button className="btn btn-success btn-block" onClick={this.onButtonClick}>Login</button>
                                </div>
                                <p className="lead">Don't have account? <Link to="/register">Sign Up!</Link></p>
                            </div>
                        </div>
                    </div>
            )
        }

        return <Redirect to='/' />
    }
}

const mapStateToProps = state => {
    return {
        id : state.auth.id
    }
}

export default connect(mapStateToProps, {onLogin}) (Login)



// import axios from '../config/axios'
// import cookies from 'universal-cookie'

// const cookie = new cookies()

// export const onLogin = (da_email, da_password) => {

//     return (dispatch) => {
//         axios.post(
//             '/users/login',
//             {
//                 email: da_email,
//                 password: da_password
//             }
//         ).then(res => {
//             // Jika data salah, res.data berisi string
//             if(typeof(res.data) == 'string'){
//                 // Print errornya
//                 console.log('Eror: ' + res.data)
//             } else {

//                 // Simpan id dan name di cookie
//                 cookie.set(
//                     'dataUser',
//                     {
//                         id: res.data._id,
//                         name: res.data.name
//                     }
//                 )

//                 // Kirim id dan name ke redux
                
//                 // dispatch({
//                 //     type: 'LOGIN_SUCCESS',
//                 //     payload: {
//                 //         id: res.data._id,
//                 //         name: res.data.name
//                 //     }
//                 // })
//             }
//         })
//     }

// }