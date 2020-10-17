import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {signInWithGoogle} from "../../firebase/firebase.utlis";

import './sing-in.styles.scss';

class SingIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        handleChange={this.handleChange}
                        value={this.state.email}/>
                    <FormInput
                        name='password'
                        type='password'
                        label='Password'
                        handleChange={this.handleChange}
                        value={this.state.password}/>

                    <div className="buttons">
                        <CustomButton type="submit" value='Submit Form'>SING IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn value='Submit Form'>
                            SING IN WITH GOOGLE
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SingIn;
