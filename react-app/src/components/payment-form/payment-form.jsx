import './payment-form.scss'
import { useSelector } from 'react-redux';
import { selectCheckoutDetails } from '../../store/checkout/checkout.selector';

export const PaymentForm = () => {
    const {checkoutData} = useSelector(selectCheckoutDetails)
    return (
        <div className="payment-form_container">
            <h1>{checkoutData}</h1>
        </div>
    )
}