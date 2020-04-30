import React from 'react';
import './sig-in-and-sign-up.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUP from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () =>(
    <div className='sign-in-and-sign-up'>
        <SignIn></SignIn>
        <SignUP></SignUP>
    </div>
)

export default SignInAndSignUpPage;