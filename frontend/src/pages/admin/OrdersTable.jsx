import { useEffect, useState } from "react"
import useAxiosPrivate from "../../hooks/useAxiosPrivate"
import { TiTick } from "react-icons/ti"
import { BiX } from "react-icons/bi"

const OrdersTable = () => {
    const [data, setData] = useState([])

    const axiosPrivate = useAxiosPrivate()

    const getOrders = async () => {
        const { data } = await axiosPrivate.get('/admin/orders')
        setData(data.data)
    }

    useEffect(() => {
        getOrders()
    }, [])
    return (
        <div>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Order ID</th>
                        <th scope="col">Items</th>
                        <th scope="col">price(KSH)</th>
                        <th scope="col">Pay Method</th>
                        <th scope="col">Paid</th>
                        <th scope="col">Delivered</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((order, i) => {
                            return (
                                <tr key={i + 1}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{order._id}</td>
                                    <td>{order.orderItems.length}</td>
                                    <td>{order.totalPrice}</td>
                                    <td>{order.paymentMethod}</td>
                                    <td>{order.isPaid ? <TiTick size={20} color="green" /> : <BiX size={20} color="red" />}</td>
                                    <td>{order.isDelivered ? <TiTick size={20} color="green" /> : <BiX size={20} color="red" />}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default OrdersTable