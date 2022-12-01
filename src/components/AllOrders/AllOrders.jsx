import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


function AllOrders() {
    const [orders, setOrders] = useState([]);

    const fetchOrders = () => {
        axios.get('/api/order')
            .then(response => {
                console.log(response.data);
                setOrders(response.data);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchOrders()
    }, [] );

    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>
                
                {orders.map(order => {
                    return (
                    <tr key={order.id}>
                        <td>{order.customer_name}</td>
                        <td>{order.time}</td>
                        <td>{order.type}</td>
                        <td>{order.total}</td>
                    </tr>
                    )
                })}
            </tbody>
            
            
        </table>
    )
}
export default AllOrders;