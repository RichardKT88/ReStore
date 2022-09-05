import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "./CheckoutPage";

const stripePromise = loadStripe('pk_test_51LeijzH7rh0WHTnTcpSXkI2LLU1MT4IIylEcbUDNfflmpWSENzSMQKWpBu3v6GSFlcRkan4gNOiAO9TEPEnDGJRd00RrVND8My')

export default function CheckoutWrapper() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutPage />
        </Elements>
    )
}