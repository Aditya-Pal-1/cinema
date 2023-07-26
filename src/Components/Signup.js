import React, { useState } from 'react';
import { Input,Button } from 'antd';
import { Row,Col } from 'react-bootstrap';
import cin from './Image/cin.png'
import './Css/Login.css'
import { useNavigate } from 'react-router-dom';
import {auth} from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Modal from './Modal';
import NoteContext from './NoteContext';


export default function Signup(props) {
    const navigate = useNavigate();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();


    // const [username, setUserName] =useState('');
    // const s={
    //     user:username,
    // }  
   
  
    function handleSubmit(e){
        e.preveDefault();
          
    }

    const handleSignup=()=>{
        
        createUserWithEmailAndPassword(auth,email,password).then((userCred)=>{
            console.log(userCred.user);
            navigate('/');
            
            
        })
    }
  



  return (
    <div>
        {/* <NoteContext.Provider value={s}>
            {props.children}
        </NoteContext.Provider> */}
        <div style={{backgroundColor:'#FF3D00',display:'flex',alignItems:'center',justifyContent:'center',height:'100vh'}}>
            <Row >
                <Col style={{padding:60}}>
                    <img src={cin} alt="" />
                </Col>
                <Col style={{padding:60,marginTop:50}}>
                    <div>
                        <h1 style={{color:'white'}}>CINEMA ELK</h1>
                    </div>
                    <form onSubmit={handleSubmit} >
                    <Input id='username' style={{width:500,height:40,margin:10}} type='text' placeholder='Enter your full name'></Input>
                    
                    <div style={{display:'flex'}}>
                    
                    <Input onChange={(e)=>setEmail(e.currentTarget.value)} style={{width:250,height:40,margin:10}} placeholder='Enter your email'></Input>
                    <Input  onChange={(e)=>setPassword(e.currentTarget.value)}  style={{width:250,height:40,margin:10}} type='password' placeholder='Enter your password'></Input>
                    
                    </div>     
                    <Button onClick={handleSignup} style={{width:500,margin:20,backgroundColor:'#FF3D00',fontSize:20,height:40,color:'white',border:'2px solid white'}}>Join the club</Button>   
                    <h6 style={{ display:'flex',marginRight:60,justifyContent:'center', color:'white'}}>Already a mamber?<span onClick={()=>navigate('/')} style={{textDecoration:'underline'}}> Click here</span></h6>     
                    </form>  
                </Col>
            </Row>
        </div>
    </div>
  )
}
