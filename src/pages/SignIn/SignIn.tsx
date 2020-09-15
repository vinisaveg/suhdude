import React, { FunctionComponent } from 'react';

import { auth, googleAuthProvider } from '../../environment/firebase';

import Page, { SignInButton } from './styles';

const SignIn: FunctionComponent = () => {
    const signInWithGoogle = () => {
        auth.signInWithPopup(googleAuthProvider)
            .then((result) => console.log(result))
            .catch((error) => console.log(error.message));
    };

    return (
        <Page>
            <h1 style={{ color: '#ffffff' }}>Sign in</h1>

            <SignInButton onClick={() => signInWithGoogle()} method="google">
                Sign in with Google
            </SignInButton>

            <SignInButton method="github">Sign in with Github</SignInButton>
        </Page>
    );
};

export default SignIn;
