import React,{useState, useEffect} from "react";
import Avatar from "./Avatar";
import axios from "axios"
import Loading from "./Loading";


export default function Display (){
const  [userData, setuserData] = useState([]);

const [loading, setloading] = useState(false)

const gettingUserDtata = async () =>{
  try{

    const data = await axios
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
       
setloading(true);
  }
  catch(e){
      console.log(e);
  }

}


useEffect(() => {

  gettingUserDtata()
  
    
    }
, [])

      function handleDelete(id){
        console.log(id + " in the handleDelete ")
        setuserData(prevData =>{
          return (  prevData.filter((currUrser,index)=>{
           
            return id !== (index);
          })
        )})
      }


     




    return(
<div>

{loading ?   <div>
       {userData.map((data,index )=>
       <div className ="card-container">
      
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
     
: <Loading/>


}   
</div>
    )
}