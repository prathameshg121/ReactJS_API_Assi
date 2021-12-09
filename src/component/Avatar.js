import React,{useState, useEffect} from "react";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallSharpIcon from '@material-ui/icons/CallSharp';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import DeleteIcon from '@material-ui/icons/Delete';




 export default function Avatar(props){

  const [like, setlike] = useState(false)




  
   const [userData, setuserData] = useState({
     name : props.name,
     email : props.email,
     phone : props.phoneNo,
     website : props.website
   })

 function handleChange(event){
    const {name, value} = event.target;
    setuserData((prevValue)=>{
      if(name === "name"){

        return{
          name : value,
          email : prevValue.email,
          phone : prevValue.phone,
          website : prevValue.website
          
        }


      }
      else if(name === "email"){
        return{
          name : prevValue.name,
          email : value,
          phone : prevValue.phone,
          website : prevValue.website
          
        }        


      }
      else if(name === "phone"){
        return{
          name : prevValue.name,
          email : prevValue.email,
          phone : value,
          website : prevValue.website
          
        }


      }
      else if(name === "website"){
        return{
          name : prevValue.name,
          email : prevValue.email,
          phone : prevValue.phone,
          website : value
          
        }

        
      }
  
    })

    event.preventDefault();

 }

 

const name = "BoderOutlined"
   
   
      const link =  "https://avatars.dicebear.com/v2/avataaars/" + props.userName + ".svg?options[mood][]=happy"
     
  
      
    function deleteUser(){
      console.log(props.userId);
      props.onDelete(props.userId);
    }

    function dialog(event) {
      var modal = document.getElementById("myModal");
  
      var btn = document.getElementById("myBtn");
  
      var span = document.getElementsByClassName("close")[0];
  
      modal.style.display = "block";
  
     
      if ((modal.style.display = "block")) {
        span.onclick = function () {
          modal.style.display = "none";
        };
      }
  
      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      };
    }


 function showLike(){
   setlike(!like)
 }
    


    return(
        <div>
           
            <div class="card cardarea" style={{width: "18rem"}}>
            <div style={{background: "rgb(245,245,245)"}}>
  <img class="card-img-top" src={link} alt="Card image cap"></img>
  </div>
  <div class="card-body">
    <h5 class="card-title">{userData.name}</h5>
    <div>
    <p><MailOutlineIcon style={{color : "rgb(95,95,95)"}}/> {userData.email}</p>

    </div>
    <div>
    <p><CallSharpIcon style ={{color : "rgb(95,95,95)"}}/> {userData.phone}</p>
    </div>
    <div>
    <p><LanguageOutlinedIcon style ={{color : "rgb(95,95,95)"}}/> { "http://" +userData.website}</p>
    </div>
      
  </div>
   <div  > 
  <div class="bottom-icon-bar"  style={{background:"rgb(250,250,250)"}}>
  <div>
          

  {like ? (
            
              <FavoriteIcon style={{ color: "rgb(255,15,15)"  }} onClick={showLike} />
           
          ) : (
           
            <FavoriteBorderOutlinedIcon     style={{ color: "rgb(255,15,15)"  }} onClick={showLike}/>
           
          )}



          </div>
          <div>
          <BorderColorOutlinedIcon onClick={dialog}  style={{ color: "rgb(137,137,137)" }}/>
          <div id="myModal" class="modal ">
                        <div class="modalcontent col-lg-4">
                          <span class="close">&times;</span>
                          <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Name :</label>
    <input type="text" class="form-control" onChange={handleChange} name="name" value ={userData.name}   required/>
    </div>
  <div class="form-group">
  <label for="exampleInputEmail1">Email:</label>
    <input type="email" class="form-control" onChange={handleChange}  name="email" value ={userData.email} required/>
   
  </div>
  <div class="form-group form-check">
  <label for="exampleInputEmail1">Phone :</label>
    <input  class="form-control" name="phone" onChange={handleChange}  value={userData.phone}   required/>
   
  </div>
  <div class="form-group form-check">
  <label for="exampleInputEmail1">Website :</label>
    <input  class="form-control" name="website" onChange={handleChange}  value={userData.website}   required/>
   
  </div>
  <button type="submit" class="btn btn-primary">OK</button>
</form>
                          
                        </div>
                      </div>
                      </div>
                      <div>
          <DeleteIcon onClick={deleteUser}    style={{ color: "rgb(137,137,137)" }}/>
          </div>
      </div>
</div>



</div>
        </div>
    )

 }