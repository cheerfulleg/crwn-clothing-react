import React from "react";
import SingIn from "../../components/sing-in/sing-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUp = () => (
    <div className="sign-in-and-sign-up">
        <SingIn />
        <SignUp />
    </div>
)

export default SignInAndSignUp;
