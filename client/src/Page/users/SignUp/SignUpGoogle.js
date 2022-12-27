import React from "react";
import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';

const SignUpGoogle = () => {
    const clientId = '628056502513-mesmd0329gdg0edab7uabf32qldo0riu.apps.googleusercontent.com';

    return (
        <GoogleOAuthProvider clientId={`${clientId}`}>
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </GoogleOAuthProvider>
    );
};

export default SignUpGoogle;