import { useRouter } from 'next/router'
import { useGetPaymentByIdQuery } from '../../services/payment'

const PaymentPendingPage = () => {
    const router = useRouter()
    const { pid } = router.query

    // const { data, error, isLoading } = useGetPaymentByIdQuery( pid.toString() );

    // console.log(data);

    // use pid paymentId to getPaymentById (Web API Call)
    // see src/services for more 
    if (true) {
        return <p>PaymentId: {pid}</p>
    } else {
        return <p>PaymentId: {pid} and not loading mothafucka</p>
    }
}

export default PaymentPendingPage
