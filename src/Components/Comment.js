import React ,{useState,useEffect}from 'react'
import Fetch from './Fetch'
import Pal from './Pal'
import {db} from '../firebase'
import {collection, onSnapshot,query} from 'firebase/firestore';

export default function Comment() {
  const [notes, setnotes] = useState([]);

    const fetchAllNotes = async () =>{
        try{
         const qry = await query(collection(db,"Users"));
   
          await onSnapshot(qry, (querySnapshot)=>{
           setnotes(querySnapshot.docs.map((doc)=>({
               id: doc.id,
               data: doc.data(),
            }))
             )
           })
         } catch(error) {
           console.log(error)
         }
       }
   
       useEffect(()=>{
         fetchAllNotes();
       },[]);
  return (
    <div>
      <div>
        <Pal/>
      </div>
      <div className='com'  style={{marginLeft:'8rem',marginTop:'-15rem'}}> 
      {
            notes.map((note)=>{
                return(
                    <div style={{marginTop:40,marginRight:10 ,border:'1px solid gray',borderRadius:'10px'}}>
                        <p style={{padding:10}}>{note.data.comment}</p>
                        <span style={{marginLeft:10,padding:10,color:'blue'}}>{note.data.name}</span>
                        <span style={{marginLeft:'17rem',marginBottom:20,padding:10,color:'blue'}}>{note.data.rate}  stars</span>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}
