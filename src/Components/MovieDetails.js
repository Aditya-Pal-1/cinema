import React, { useEffect, useState } from 'react'
import { Row,Col,Button,Card } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import pic1 from '../Components/Image/pic1.png';
import Pal from './Pal';
import axios from 'axios';
import Modal from './Modal';
import Fetch from './Fetch';



const image_api='https://image.tmdb.org/t/p/w500/';

export default function MovieDetails() {
    const location = useLocation();
    const {title,poster_path,overview,id} = location.state;
    const [similarmovies ,setSimilarmovies]=useState([]);
    const [modal,setModal] = useState(false);
    const navigate = useNavigate();


    useEffect(()=>{
        const Movies_api =`https://api.themoviedb.org/3/movie/${id}/similar?api_key=10b31efc55017d339c319848bdaac1da`;
        axios.get(Movies_api).then((response)=>{
            const movies = response.data.results;
            console.log(movies);
            setSimilarmovies(movies);
        })
        .catch((err)=>{
            console.log(err);
        })
    })

    const Close =()=>setModal(false);
     
  return (
    <div>
        <div>
            <Pal />  
        </div>
        <div style={{marginLeft:'8rem',marginTop:'-23rem'}}>
            <Row style={{marginTop:'8rem',display:'flex'}}>
                <Col style={{padding:20}}>
                    <div>
                    <img style={{height:'25rem',borderRadius:'10px'}} src={image_api+poster_path} alt="" />
                    <h6 style={{marginTop:'2rem'}}>{title}</h6>
                    <div style={{marginTop:'2rem'}}>
                        <h6>Movie Overview:</h6>
                        <span>{overview}</span>
                    </div>
                    <Button onClick={()=>setModal(true)} style={{marginTop:'2rem'}}>Post Review</Button>
                    {modal && < Modal Close={Close}/>}

                    <div>
                        <h6 style={{marginTop:'3rem'}}>Similar movies:</h6>
                        < div style={{display:'flex',flexWrap:'wrap'}}>
                        {
                            similarmovies.map((movie)=>{
                                return(
                                    <div style={{marginLeft:'2rem'}} >
                                    <Card onClick={()=>navigate('/moviedetails',{state:movie})} style={{border:'none',outline:'none',height:'13rem',width:'8rem',marginTop:'3rem',backgroundColor:'#32a88c'}}>
                                        <Card.Img style={{height:'8rem'}} src={image_api+movie.poster_path} alt='image not vailable'></Card.Img>
                                        <Card.Title style={{color:'white',fontSize:'1rem',marginTop:'1rem',fontWeight:'lighter'}}>{movie.title}</Card.Title>
                                    </Card>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                    </div>
                    <hr style={{borderLeft:'5px solid grey',marginLeft:'42.5rem',height:'127rem',marginTop:'-126rem',position:'absolute'}} />
                </Col>
                <Col>
                    <h6>Reviews by Elk Users:</h6>
                    <div>
                        <Fetch/>
                    </div>
                </Col>
        </Row>
      </div>

    </div>
  )
}
