import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SignUpForm extends Component {
    constructor() {
        super();

        this.state={
            email: '',
            password: '',
            name: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e) {
        let target = e.target;
        let value = e.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({

                [name] : value

            }

        );

    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('the form was submitted with the data:');
        console.log(this.state);


    }
    render() {
        return (

            <div className= "Form_Center">
                <form onSubmit={this.handleSubmit} className= "FormFields">
                    <div className= "FormField">
                        <label className= "FormField__Label" htmlFor="name">Full Name</label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Enter Full Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                    </div>

                    <div className= "FormField">
                        <label className= "FormField__Label" htmlFor="password">password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </div>

                    <div className= "FormField">
                        <label className= "FormField__Label" htmlFor="email">email address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter Email Address" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>

                    <div className="FormField">
                        <label className= "FormField__CheckboxLabel">
                            <input className ="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange}/> I agree all statements in <a href="" className="FormField__TermsLink">Terms of Service</a>
                        </label>
                    </div>

                    <div className= "FormField">
                        <button className= "FormField__Button mr_20">Sign Up </button> <Link to="/sign-in" className="FormField__Link">already a member</Link>
                    </div>
                </form>
            </div>
        );

    }
}
 export default SignUpForm;