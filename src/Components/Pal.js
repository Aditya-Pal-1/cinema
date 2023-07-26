import React from 'react'
import pic1 from './Image/pic1.png'
import {AiFillHome}from 'react-icons/ai';
import {FaCommentDots} from 'react-icons/fa'
import {FaUserCircle} from 'react-icons/fa'
import {Button,Card} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import {auth} from '../firebase';
import { signOut } from 'firebase/auth';

export default function Pal() {
    const navigate = useNavigate();

    function handleLogout (){
        signOut(auth).then((response)=>{
            navigate('/');
        })
    }

  return (
    <div>
      <div style={{padding:25}}>
        <Navbar expand="lg" className=''>
            <Container fluid>
            <Navbar.Brand href="#"> <img src={pic1} style={{borderRadius:'10px'}} height={40} width={50} alt="" />
                 <span style={{marginLeft:10}}>Cinema Elk</span> 
             </Navbar.Brand>
            <Button onClick={handleLogout} variant="primary">Logout</Button>
            </Container>
        </Navbar>
        <div> <hr style={{border:'5px solid grey',width:'93rem'}} /></div>
       </div>
       <div style={{display:'flex' , flexDirection:'row'}}>
                <div style={{padding:25,display:'flex',flexDirection:'column' }}>
                    <AiFillHome onClick={()=>navigate('/home')} style={{color:'blue',cursor:'pointer' ,fontSize:50}} />
                    <FaCommentDots onClick={()=>navigate('/comment')} style={{color:'orange',cursor:'pointer',marginTop:35,fontSize:50}} />    
                    <FaUserCircle  onClick={()=>navigate('/home')} style={{color:'blue',cursor:'pointer',marginTop:35,fontSize:50}} />
                </div>
                <div>
                    <hr style={{borderLeft:'5px solid grey',height:'127rem',marginTop:-10,position:'absolute'}} />
                </div>
            </div>
    </div>
  )
}
