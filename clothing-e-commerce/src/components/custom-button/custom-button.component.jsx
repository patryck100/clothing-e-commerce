import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) =>(
    //Renders "google-sign-in" if "isGoogleSignIn" is true, otherwise null. Always render "custom-button"
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;