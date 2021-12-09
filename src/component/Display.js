import React,{useState, useEffect} from "react";
import Avatar from "./Avatar";
import axios from "axios"



export default function Display (){
const  [userData, setuserData] = useState([]);


useEffect(() => {
    axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => {
          
          setuserData(res.data);
        //   console.log(userData);
          console.log("Data found -: ")
          console.log(JSON.stringify(userData) + "let's see ");
        //   console.log(AppliData);
        })
        .catch((error) => {
           console.log("Data not found")
        });
    }


    
// }
, [])

      function handleDelete(id){
        console.log(id + " in the handleDelete ")
        setuserData(prevData =>{
          return (  prevData.filter((currUrser,index)=>{
            // console.log(index+1);
            return id !== (index);
          })
        )})
      }


      function updateData(udatedData){
          
      }




    return(
<div>
       {userData.map((data,index )=>
       <div className ="card-container">
       {/* <div className="card-container"> */}
      <Avatar
            userName = {data.username}
            name ={data.name}
            email ={data.email}
            phoneNo ={data.phone}
            website = {data.website}
            onDelete = {handleDelete}
            userId = {index}
            key ={index}
      />

      </div>
       
        
        )}





        
</div>
    )
}