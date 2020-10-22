import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hf0HMLmoh3omm0xlyrSfcNxiQ9EQamqQmU1QgStglORFk4pMXdUrPVgV2h5rN0tcKAiIt8LQ5mOO2u6Tz2iqTt000pDsyBmSa';

    const onToken = token => {
        console.log(token);
        alert("Payment successful")
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`$Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
