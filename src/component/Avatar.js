import React,{useState, useEffect} from "react";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallSharpIcon from '@material-ui/icons/CallSharp';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import DeleteIcon from '@material-ui/icons/Delete';




 export default function Avatar(props){

 

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


    return(
        <div>
           
            <div class="card" style={{width: "18rem"}}>
            <div style={{background: "rgb(245,245,245)"}}>
  <img class="card-img-top" src={link} alt="Card image cap"></img>
  </div>
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <div>
    <p><MailOutlineIcon style={{color : "rgb(95,95,95)"}}/> {props.email}</p>

    </div>
    <div>
    <p><CallSharpIcon style ={{color : "rgb(95,95,95)"}}/> {props.phoneNo}</p>
    </div>
    <div>
    <p><LanguageOutlinedIcon style ={{color : "rgb(95,95,95)"}}/> { "http://" +props.website}</p>
    </div>
      
  </div>
  <div  style={{background:"rgb(250,250,250)"}}>
          <FavoriteIcon    style={{ color: "rgb(255,15,15)"  }}/>
          <BorderColorOutlinedIcon onClick={dialog}  style={{ color: "rgb(137,137,137)" }}/>
          <div id="myModal" class="modal ">
                        <div class="modalcontent col-lg-4">
                          <span class="close">&times;</span>
                          <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Name :</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    </div>
  <div class="form-group">
  <label for="exampleInputEmail1">Email:</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
   
  </div>
  <div class="form-group form-check">
  <label for="exampleInputEmail1">Phone :</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
   
  </div>
  <div class="form-group form-check">
  <label for="exampleInputEmail1">Website :</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
   
  </div>
  <button type="submit" class="btn btn-primary">OK</button>
</form>
                          
                        </div>
                      </div>
          <DeleteIcon onClick={deleteUser}    style={{ color: "rgb(137,137,137)" }}/>
      </div>
</div>
        </div>
    )

 }