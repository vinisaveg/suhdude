import React, { FunctionComponent, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { actionTypes } from '../../context/userReducer';

import { auth, googleAuthProvider } from '../../environment/firebase';

import Page, { SignInButton } from './styles';

const SignIn: FunctionComponent = () => {
    const { dispatch } = useContext(AppContext);

    const signInWithGoogle = () => {
        auth.signInWithPopup(googleAuthProvider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
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
