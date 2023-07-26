import React, { useState } from 'react';
import { Input,Button } from 'antd';
import { Row,Col } from 'react-bootstrap';
import cin from './Image/cin.png'
import './Css/Login.css'
import { useNavigate } from 'react-router-dom';
import {auth} from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password,setPassword] = useState();

    const handleLogin=()=>{
        signInWithEmailAndPassword(auth,email,password).then((userCred)=>{
            console.log(userCred.user);
            navigate('/home')
        })
    }



  return (
    <div className='log-in' >
     <div style={{backgroundColor:'#FF3D00',display:'flex',alignItems:'center',justifyContent:'center',height:'100vh'}}>
        <Row >
            <Col style={{padding:60}}>
                <img src={cin} alt="" />
            </Col>
            <Col style={{padding:60,marginTop:50}}>
                <div>
                    <h1 style={{color:'white'}}>CINEMA ELK</h1>
                </div>
                <div style={{display:'flex'}}>
                <Input onChange={(e)=>setEmail(e.currentTarget.value)} style={{width:250,height:40,margin:10}} placeholder='Enter your email'></Input>
                <Input onChange={(e)=>setPassword(e.currentTarget.value)}  type='password' style={{width:250,height:40,margin:10}}  placeholder='Enter your password'></Input>
                
                </div>     
                <Button onClick={handleLogin} style={{width:500,margin:20,backgroundColor:'#FF3D00',fontSize:20,height:40,color:'white',border:'2px solid white'}}>Login</Button>   
                <h6 style={{ display:'flex',marginRight:60,justifyContent:'center', color:'white'}}>Join the club, <span onClick={()=>navigate('/signup')} style={{textDecoration:'underline'}}> Click here</span></h6>       
            </Col>
        </Row>
     </div>
    </div>
  )
}
