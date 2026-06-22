import { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css'
import axios from 'axios'
export default function Deposit(){
const [dep,setDep]=useState(0)
const [userId,setUserId]=useState();
const [data,setData]=useState([])
useEffect(()=>{
   const fetchdata=async()=>{
      await axios.get('https://backend-server-1-fakg.onrender.com/data').then((item)=>{setData(item.data)})
   };fetchdata()
},[]);
let updateData;
function handleClick(e){
   e.preventDefault();
   for(let i=0;i<data.length;i++){
      if(data[i].id === Number(userId)){
         data[i].amount=Number(data[i].amount)+Number(dep);
         updateData={amount:data[i].amount};
         let url=`https://backend-server-1-fakg.onrender.com/update/${data[i]._id}`
          axios.put(url,updateData);
          alert(`Rs.${dep} Amount Credited on Your Account`)
      }
   }

}


    return(
    <>
    <img id="depositimg" src="deposit.avif"/>
   <Form  onSubmit={handleClick}  >
      <h4 >Deposit Your Amount Here</h4><hr></hr>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label id="label"  >Account No:</Form.Label>
        <Form.Control type="number"  id="input" onChange={(e)=>{setUserId(e.target.value)}}  />
        <Form.Label id="label" >Deposit Amount:</Form.Label>
        <Form.Control type="number" id="input" onChange={(e)=>{setDep(e.target.value)}}/>
        <Button type="submit" id="submitbtn" variant="danger" >Submit</Button>
        <Button type="reset" id="resetbtn" variant="primary">Reset</Button>
        </Form.Group>
        </Form>  </>
    )}








// import { useContext,useState} from "react";
// import userContext from "./context.js";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import './App.css'
// export default function Deposit(){
// const ctx=useContext(userContext);
// const [dep,setDep]=useState(0)
// const [userId,setUserId]=useState();





// function handleClick(e){
//    e.preventDefault();
//    for(let i=0;i<ctx.users.length;i++){
//       if(ctx.users[i].id === userId){
//          ctx.users[i].amount=Number(ctx.users[i].amount)+Number(dep);
//          alert(`Rs.${dep} Amount Credited on Your Account`)
//       }
//    }
// }


//     return(
//     <>
   
//    <Form  onSubmit={handleClick}  >
//       <h4 >Deposit Your Amount Here</h4><hr></hr>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label id="label"  >Account No:</Form.Label>
//         <Form.Control type="number"  id="input" onChange={(e)=>{setUserId(e.target.value)}}  />
//         <Form.Label id="label" >Deposit Amount:</Form.Label>
//         <Form.Control type="number" id="input" onChange={(e)=>{setDep(e.target.value)}}/>
//         <Button type="submit" id="submitbtn" variant="danger" >Submit</Button>
//         <Button type="reset" id="resetbtn" variant="primary">Reset</Button>
//         </Form.Group>
//         </Form>

   
   

//     </>
//     )
    
    
//     }






// // import userContext from "./context"
// // import { useContext,useState } from "react"
// // export default function Deposit(){
// //     const ctx = useContext(userContext)
// //     const [dep,setDep] = useState(0)
// //     var [total,setTotal] = useState(ctx.users[0].amount)
// //     function handleClick(e){
// //         e.preventDefault();
// //         console.log(dep)
// //         setTotal(Number(total)+Number(dep))
// //     }
// //     ctx.users[0].amount = total
// //     return(
// //         <>
// //         <h1>Deposit</h1>
// //         <input type="number" onChange={(e)=>setDep(e.target.value)}></input>
// //         <button onClick={handleClick}>Submit</button>
// //         <h1>Total:{total}</h1>
// //         </>
// //     )
// // }