import { useRouter } from 'next/router'
import { useGetPaymentByIdQuery } from '../../services/payment'

const Account = () => {
    const router = useRouter()
    const { pid } = router.query

    // const { data, error, isLoading } = useGetPaymentByIdQuery( pid.toString() );

    // console.log(data);

    // use pid paymentId to getPaymentById (Web API Call)
    // see src/services for more 
    return <p>PaymentId: {pid}</p>
}

export default Account
