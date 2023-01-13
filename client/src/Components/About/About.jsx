import React from 'react'
import Box from '@mui/material/Box'
import './index.css'
import {FcNews} from 'react-icons/fc'
import {FaTelegram} from 'react-icons/fa'
import {FiFacebook,FiInstagram,FiPhoneCall,FiYoutube} from 'react-icons/fi'
import aboutimg from "../../images/img11.jpg"

const About = () => {
    return(
        <>
         <div className="about" id='about'>
            <div className="aboutUpperPart">
                <div className="aboutUs">
                    <h1>About</h1>
                    <h1 className='redColor'>Us</h1>
                    <hr className='horizontalLine'/><br />
                    
                    <p style={{paddingBottom:"15px" , paddingTop:"10px"}}>Sign up for newsletter <FcNews style={{fontSize:"30px"}}/> </p>
                </div>
                <div className="aboutInfo">
                    <h1 style={{textAlign:"center"}}><b>Travel</b> Company</h1> <br />
                    <span className="verticalLine" style={{marginLeft:"90px"}}></span>
                    <span style={{textIndent:"70px", padding:"20px" , marginTop:"120px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quod alias porro quisquam perferendis deleniti? Dolorum quisquam nulla non placeat, dignissimos, repudiandae distinctio hic in rem aliquam quaerat? Quia recusandae hic facere aliquam fuga a eligendi ad architecto voluptates.</span>
                    <br /><br /><br />
                    <span className="verticalLine" ></span>
                    <span style={{textIndent:"60px", padding:"20px" , marginTop:"120px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quod alias porro quisquam perferendis deleniti? Dolorum quisquam nulla non placeat, dignissimos, repudiandae distinctio hic in rem aliquam quaerat? Quia recusandae hic facere aliquam fuga a eligendi ad architecto voluptates.</span>  
                </div>
            </div>
            <div className="aboutLower">
                <div className="lowerinfo">
                <span className="verticalLine"></span>
                    <span style={{textIndent:"60px", padding:"20px" , marginTop:"90px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias temporibus eius aperiam! Magnam iusto tenetur adipisci vero qui, non porro eveniet</span> <br /> <br />
                    <span className="verticalLine"></span>
                    <span style={{textIndent:"60px", padding:"20px" , marginTop:"90px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias temporibus eius aperiam! Magnam iusto tenetur adipisci vero qui, non porro eveniet</span> <br />
                  <br />
                    <span className='socialHandles'>   <FiFacebook color="#EE685F"/>   </span>
                    <span className='socialHandles'>   <FiInstagram color="#EE685F"/>   </span>
                    <span className='socialHandles'>   <FiPhoneCall color="#EE685F"/>   </span>
                    <span className='socialHandles'>   <FiYoutube color="#EE685F"/>   </span>
                    <span className='socialHandles'>   <FaTelegram color="#EE685F"/>   </span>
                    </div>
               
                <div className="aboutimg">
                </div>
            </div>
         </div>
        </>
    )
}

export default About ;