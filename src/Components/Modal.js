import React, { useEffect,useContext} from 'react';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import {db} from '../firebase';
import { collection, addDoc } from "firebase/firestore";  
import Signup from './Signup';
import NoteContext from './NoteContext';
import { useNavigate } from 'react-router-dom';

export default function Modal({Close}) {
    const [comment,setComment] = useState('');
    const [rate ,setRate] =useState('');
    const [name,setName]=useState();

    const navigate = useNavigate();

    // const a = useContext(NoteContext);
    // useEffect(()=>{
    //     setName(a.user)
    //     console.log(name);
    // })

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const docRef = await addDoc(collection(db, "Users"), {
            name: name,
            comment:comment,
            rate:rate,
        })
        .then(()=>{
            alert('message is added');
        })
        .catch((err)=>{
            alert('data is not added');
        })
        setComment('');
        setName('');
        setRate('');

    }
   

  return (
    <div>
        <div className='wrap' onClick={Close}></div>
        
        <div className="modal-conatiner"  >
        <form className='form' onSubmit={handleSubmit} >
         <h6>Enter Your Review Here</h6>
         <input type="text" onChange={(e)=>setName(e.currentTarget.value)} value={name}  placeholder='Enter Your Name' style={{width:'15rem',marginTop:'1.5rem',border:'none',outline:'none',borderBottom:'1px solid gray'}} />
        <input onChange={(e)=>setComment(e.target.value)} value={comment} type="text" style={{width:'15rem',marginTop:'1.5rem',border:'none',outline:'none',borderBottom:'1px solid gray'}}  />
        <div style={{marginTop:'1.5rem'}}>
            Rate <input type="text" onChange={(e)=>setRate(e.target.value)} value={rate} style={{width:'2rem',border:'none',outline:'none',borderBottom:'1px solid gray'}} /> Out 5
        </div>
            <Button type='submit'   style={{marginTop:'1.5rem'}} >Submit</Button>
        </form>
        
        </div>
        <div>
        </div>
    </div>
  )
}
