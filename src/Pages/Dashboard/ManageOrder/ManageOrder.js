import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';
import { Container, Grid } from '@mui/material';
import Navigation from '../../Shared/Navigation/Navigation';

const ManageOrder = () => {
    const [orders,setOrders]=React.useState([]);
    const [status, setStatus] = React.useState("");
    // const [deleOrders,setOrders]=React.useState([]);
    const {user} =useAuth();
    const shipped ='shipped';
    React.useEffect(()=>{
        fetch('https://frightening-coffin-00318.herokuapp.com/orders/')
        .then(res=>res.json())
        .then(data=>{
            setOrders(data)
        })
    },[orders]);

    const handleonChange=e=>{
        setStatus(e.target.value);
    }
    
        //Delect Order
        const handleUpdate = (id)=>{
            // const status={status}
            console.log(id)
            fetch(`https://frightening-coffin-00318.herokuapp.com/orders/${id}`, {
               
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({status})
            })
            alert("status updated")
        }


//Delete Order
const handleDeleteOrders = id=>{
  const url =`https://frightening-coffin-00318.herokuapp.com/orders/${id}`;
  fetch(url,{
      method: 'DELETE'
  })
  .then()
  .then(data =>{
      if(data.deletedCount>0){
          
          const remainigOrders = orders.filter(orders=>orders._id !==id)
          setOrders(remainigOrders);
          alert('Cancel Order');
      }
  })
}

    return (
        <>
        <Navigation></Navigation>
        <Container>
        <Grid item xs={12} md={10}>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
           <TableHead>
             <TableRow>
               <TableCell>Customer Name</TableCell>
               <TableCell align="right">Product Name</TableCell>
               <TableCell align="right">Product Price</TableCell>
               <TableCell align="right">Phone Number</TableCell>
               <TableCell align="right">Address</TableCell>
               <TableCell align="right">Status</TableCell>
               <TableCell align="right">Action</TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
             {orders.map((order) => (
           //  console.log(orderrs)
               <TableRow
                 key={order._id}
                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
               >
                 <TableCell component="th" scope="row">
                   {order.customerName}
                 </TableCell>
                 <TableCell align="right">{order.serviceName}</TableCell>
                 <TableCell align="right">{order.price}</TableCell>
                 <TableCell align="right">{order.phone}</TableCell>
                 <TableCell align="right">{order.address}</TableCell>
                 <TableCell align="right">
                <input type="text" onChange={handleonChange} defaultValue={order.status}/>
                 </TableCell>
                 <TableCell align="right"><button onClick={()=>handleUpdate(order._id)}>Update Status</button></TableCell>
                 <TableCell align="right"><button onClick={()=>{
                      if(window.confirm('Are you sure you want to Delete it?')){
                        handleDeleteOrders(order._id)
                      }
                }
                }>Cancel Order</button></TableCell>
               </TableRow>
             ))}
           </TableBody>
         </Table>
       </TableContainer>
 
      </Grid>
        </Container>
        </>
    );
};

export default ManageOrder;