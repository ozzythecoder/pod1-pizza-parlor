import axios from "axios";


function AllOrders() {
    axios.get('/api/order')
        .then(response => {
            console.log(response.data);
        })
        .catch(err => console.log(err));



    return (
        <table>
            <tr>
                <th>##TODO insert table here</th>
            </tr>
            
            
        </table>
    )
}
export default AllOrders;