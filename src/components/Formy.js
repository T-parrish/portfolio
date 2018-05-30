import React from 'react';
import { FormItem } from '../components/FormItem';
import { LoginForm } from '../components/LoginForm';

export class Formy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText:'',
            todos: []
        }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        // sets the state based off of the input's name and value
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        // object spreading returns a new array, tacks on the input text
        // this way you're not directly mutating the state.
        const todos = [...this.state.todos, this.state.inputText]
        this.setState({inputText:'', todos})
    }

    initLogin = (e) => {
        e.preventDefault();
        const creds = this.state
        console.log(this.props)
        this.props.startUserLogin(creds)
	};

    render () {
        // always remember to implicitly return the components 
        // with the map function... curly braces are a no-no.
        const todos = this.state.todos.map((todo, i) => (
            <FormItem key={i} content={todo} />
        ));

        return (
            <div className="content-container"> 
                <h1> Simple Todo App</h1>
                <LoginForm />
                <form className="form" onSubmit={this.handleSubmit}>
                    <input 
                        type='text' 
                        name='inputText'
                        autoComplete= 'off'
                        value={this.state.inputText} 
                        onChange={this.handleChange}
                    />
                    <button className="button_two" type='submit'>SUBMIT</button>
                </form>
                <div>
                    <ol>
                        {todos}
                    </ol>
                </div>
            </div>
        )
    }
}