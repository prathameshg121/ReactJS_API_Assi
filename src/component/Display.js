import React,{useState, useEffect} from "react";
import Avatar from "./Avatar";
import axios from "axios"


// id: "",
// name: "",
// username: "",
// email: "",
// address: {
//   street: "",
//   suite: "",
//   city: "",
//   zipcode: "",
//   geo: {
//     lat: "",
//     lng: ""
//   }
// },
// phone: "",
// website: "",
// company: {
//   name: "",
//   catchPhrase: "",
//   bs: ""
// }
export default function Display (){
const  [userData, setuserData] = useState([]);


useEffect(() => {
    // const loggedInUser = localStorage.getItem("userData");
    // console.log(loggedInUser);
    // if(loggedInUser){
    //     const foundUser = JSON.parse(loggedInUser);
        
  
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







    return(
<div>
       {userData.map(data =>
       <div className ="card-container">
       {/* <div className="card-container"> */}
      <Avatar
            userName = {data.username}
            name ={data.name}
            email ={data.email}
            phoneNo ={data.phone}
            website = {data.website}
      />
      </div>
       
        
        )}





        
</div>
    )
}