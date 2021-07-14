import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

//Usually passes the token to the backend to complete the charge, but this is just a test so won't charge anything
const onToken = token => {
    console.log(token);
    alert('Payment sucessful')
}

const StripeCheckoutButton = ({price}) => {
    //price must be in cents, so must be converted
    const priceForStripe = price * 100;
    //use the publishable key provided by stripe when you create your account
    const publishableKey = 'pk_test_51JCq6GB2I4vGwwiULHlDNawteuS8UNaMn7Bth8ZOYjeRuKDNHNb1BswNGJyphaDa7vZ3FlCZ6GDGD8M99uBgjvw0007i3bJYkh'

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Clothing E-Commerce ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}` /*This is the price to be displayed to the user*/}
            amount={priceForStripe /*Converted price to cents that stripe requires */}
            panelLabel='Pay Now'
            token={onToken/*submission is handled by this component*/}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;