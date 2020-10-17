import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {auth, signInWithGoogle} from "../../firebase/firebase.utlis";

import './sing-in.styles.scss';

class SingIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''})
        } catch (error) {
            console.error(error)
        }

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
