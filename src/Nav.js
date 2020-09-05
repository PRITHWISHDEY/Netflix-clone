import React,{useEffect,useState} from "react";
import "./Nav.css";




function Nav(){

    const[show,handleShow]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true)
            }
            else{
                handleShow(false);
            } 
        })
        return ()=>{
            window.removeEventListener("scroll");
        }
    },[]);

    return(
        <div className={`Nav ${show && "Nav-black"}`}>
        <img className="Nav-logo" src="https://assets.brand.microsites.netflix.io/assets/1ed15bca-b389-11e7-9274-06c476b5c346_cm_800w.png?v=6" alt="Netflix Logo"/>
        <img className="Nav-avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" 
        alt="Netflix-logo"/>

    
        </div>
    )




}


export default Nav;