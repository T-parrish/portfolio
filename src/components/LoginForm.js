import React from 'react';

// Redux for state and dispatch mapping
import { connect } from 'react-redux';

// actions
import { startUserLogin } from '../actions/auth';
// need to dispatch the startLogin action object


export class LoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const creds = this.state
        startUserLogin(creds)
    } 

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        name='email'
                        onChange={this.handleChange}
                        autoComplete= 'off'
                        placeholder="email"
                    />
                    <input 
                        type='text'
                        name='password'
                        onChange={this.handleChange}
                        autoComplete= 'off'
                        placeholder="password"
                    />
                    <button> Login </button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
	startUserLogin: (creds) => dispatch(startEditExpense(creds)),
});

export default connect(undefined, mapDispatchToProps)(LoginForm);
