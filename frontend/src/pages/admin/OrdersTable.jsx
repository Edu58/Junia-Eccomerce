import { useEffect, useState } from "react"
import useAxiosPrivate from "../../hooks/useAxiosPrivate"
import moment from 'moment'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { TiTick } from "react-icons/ti"
import { BiX } from "react-icons/bi"
import { BsTable } from "react-icons/bs"
import { BsGraphUp } from "react-icons/bs"

const OrdersTable = () => {
    const [data, setData] = useState([])
    const [display, setDisplay] = useState('table')

    const axiosPrivate = useAxiosPrivate()

    const getOrders = async () => {
        const { data } = await axiosPrivate.get('/admin/orders')
        const formattedData = []
        data.data.map((item) => {
            item.createdAt = item.createdAt.slice(0,10)
            formattedData.push(item)
        })
        setData(formattedData)
    }

    useEffect(() => {
        getOrders()
    }, [])
    return (
        <div>
            <div className="d-flex choices pt-4">
                <p className="me-4" role="button" onClick={() => setDisplay('table')}><BsTable size={20} color="orange" /></p>
                <p role="button" onClick={() => setDisplay('graph')}><BsGraphUp size={20} color="green" /></p>
            </div>
            {
                display === 'table'
                    ?
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Order ID</th>
                                <th scope="col">Items</th>
                                <th scope="col">price(KSH)</th>
                                <th scope="col">Pay Method</th>
                                <th scope="col">Paid</th>
                                <th scope="col">Transaction ID</th>
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
                                            <td>{order?.paymentResult ? order.paymentResult.id : ''}</td>
                                            <td>{order.isDelivered ? <TiTick size={20} color="green" /> : <BiX size={20} color="red" />}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    :
                    display === 'graph'
                        ?
                        <LineChart width={900} height={350} data={data} isAnimationActive={false} margin={{ top: 5, right: 20, bottom: 25, left: 10 }}>
                            <Line type="monotone" dataKey="totalPrice" stroke="#f09116" />
                            <CartesianGrid stroke="#bababa" strokeDasharray="5 5" />
                            <XAxis dataKey="createdAt" label={{ value: 'Date', position: 'bottom' }} />
                            <YAxis label={{value: 'Total Price', angle: -90, position: 'insideLeft', offset: -2}}/>
                            <Tooltip />
                        </LineChart>
                        :
                        ''
            }
        </div>
    )
}

export default OrdersTable