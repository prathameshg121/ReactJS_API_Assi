import React,{useState, useEffect} from "react";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallSharpIcon from '@material-ui/icons/CallSharp';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
 export default function Avatar(props){

    const  [imgData, setImgData] = useState([]);

const name = "BoderOutlined"
   
      console.log(props.userName +  " thsi is user name")
      const link =  "https://avatars.dicebear.com/v2/avataaars/" + props.userName + ".svg?options[mood][]=happy"
     
    
        
 


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
          <BorderColorOutlinedIcon   style={{ color: "rgb(137,137,137)" }}/>
          <DeleteIcon    style={{ color: "rgb(137,137,137)" }}/>
      </div>
</div>
        </div>
    )

 }