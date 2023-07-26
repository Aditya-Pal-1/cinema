import React, { useEffect, useState } from 'react';
import pic1 from './Image/pic1.png'
import {AiFillHome}from 'react-icons/ai';
import {FaCommentDots} from 'react-icons/fa'
import {FaUserCircle} from 'react-icons/fa'
import {Button,Card} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  Slider  from 'react-slick';
import Fetch from './Fetch';
import { useNavigate } from 'react-router-dom';


const image_api='https://image.tmdb.org/t/p/w500/';


export default function Home() {
    const  settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 8,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const [nowplaying ,setNowplaying] = useState([]);
    const [popularmovies,setPopularmovies]=useState([]);
    const [toprated,setToprated]=useState([]);
    const [upcomingmovies,setUpcominmovies]=useState([]);
    const navigate = useNavigate();


    useEffect(()=>{
        const movie_api='https://api.themoviedb.org/3/movie/now_playing?api_key=10b31efc55017d339c319848bdaac1da';
        axios.get(movie_api).then((response)=>{
            const movies = response.data.results;
            console.log(movies);
            setNowplaying(movies);
        })
    },[])

    useEffect(()=>{
        const popularmovies_api='https://api.themoviedb.org/3/movie/popular?api_key=10b31efc55017d339c319848bdaac1da';
        axios.get(popularmovies_api).then((response)=>{
            const movies= response.data.results;
            setPopularmovies(movies);
        })
    },[])

    useEffect(()=>{
        const topratedmovies_api ='https://api.themoviedb.org/3/movie/top_rated?api_key=10b31efc55017d339c319848bdaac1da';
        axios.get(topratedmovies_api).then((response)=>{
            const movies = response.data.results;
            setToprated(movies)
        })
    },[])

    useEffect(()=>{
        const upcomingmovies_api = 'https://api.themoviedb.org/3/movie/upcoming?api_key=10b31efc55017d339c319848bdaac1da';
        axios.get(upcomingmovies_api).then((response)=>{
            const  movies = response.data.results;
            setUpcominmovies(movies);
        })
    },[])
    

  return (
    <div>
       <div style={{padding:25}}>
        <Navbar expand="lg" className=''>
            <Container fluid>
            <Navbar.Brand> <img  src={pic1} height={40} width={50} alt="" />
                 <span style={{marginLeft:10}}>Cinema Elk</span> 
             </Navbar.Brand>
            <Button onClick={()=>navigate('/')} variant="primary">Logout</Button>
            </Container>
        </Navbar>
        <div><hr style={{border:'3px solid grey',width:'93rem'}} /></div>
        
       </div>
       <div style={{display:'flex'}}>
            <div style={{display:'flex' , flexDirection:'row'}}>
                <div style={{padding:25,display:'flex',flexDirection:'column' }}>
                    <AiFillHome onClick={()=>navigate('/home')}   style={{color:'blue',fontSize:50}} />
                    <FaCommentDots onClick={()=>navigate('/comment')}  style={{color:'orange',cursor:'pointer',marginTop:35,fontSize:50}} />    
                    <FaUserCircle onClick={()=>navigate('/home')}  style={{color:'blue',cursor:'pointer',marginTop:35,fontSize:50}} />
                </div>
                <div>
                    <hr style={{borderLeft:'5px solid grey',height:'73rem',marginTop:-15,position:'absolute'}} />
                </div>
            </div>
            <div>
        
            <div className="now-playing"   >
                <h6 style={{marginLeft:15,fontSize:'1.5rem'}}>Now Playing</h6>

                <div style={{borderRadius:'10px',marginLeft:8,backgroundColor:'#32a88c',width:'90vw'}}>
                    <Slider {...settings} style={{width:'85vw',marginLeft:'2rem',marginTop:'1rem'}}>
                {
                    nowplaying.map((movie,index)=>{
                        return(
                            <div key={index} style={{marginLeft:'1rem'}} >
                            <Card onClick={()=>navigate('/moviedetails',{state:movie})} style={{border:'none',outline:'none',width:'8rem',backgroundColor:'#32a88c',marginTop:'3rem' }}>
                                <Card.Img style={{height:'8rem'}} src={image_api+movie.poster_path}></Card.Img>
                                <Card.Title style={{color:'white',fontSize:'1rem',fontWeight:'lighter'}}>{movie.title}</Card.Title>
                            </Card>
                            </div>
                        )
                    })
                }
                </Slider>
                </div>
                
            </div>

            <div className="popular-movies">
                <h6 style={{marginLeft:15,fontSize:'1.5rem'}}>Popular Movies</h6>
                <div style={{borderRadius:'10px',marginLeft:8,backgroundColor:'#32a88c',width:'90vw'}}>
                    <Slider {...settings} style={{width:'85vw',marginLeft:'2rem',marginTop:'1rem'}}>
                {
                    popularmovies.map((movie,index)=>{
                        return(
                            <div key={index} style={{marginLeft:'1rem',width:'90vw'}} >
                            <Card onClick={()=>navigate('/moviedetails',{state:movie})} style={{border:'none',outline:'none',width:'8rem',backgroundColor:'#32a88c',marginTop:'3rem' }}>
                                <Card.Img style={{height:'8rem'}} src={image_api+movie.poster_path}></Card.Img>
                                <Card.Title style={{color:'white',fontSize:'1rem',fontWeight:'lighter'}}>{movie.title}</Card.Title>
                            </Card>
                            </div>
                        )
                    })
                }
                </Slider>
                </div>
                
            </div>

            <div className="top-rated">
                <h6 style={{marginLeft:15,fontSize:'1.5rem'}}>Top Rated</h6>
                <div style={{borderRadius:'10px',marginLeft:8,backgroundColor:'#32a88c',width:'90vw'}}>
                    <Slider {...settings} style={{width:'85vw',marginLeft:'2rem',marginTop:'1rem'}}>
                {
                    toprated.map((movie,index)=>{
                        return(
                            <div key={index} style={{marginLeft:'1rem',width:'90vw'}} >
                            <Card  onClick={()=>navigate('/moviedetails',{state:movie})} style={{border:'none',outline:'none',width:'8rem',backgroundColor:'#32a88c',marginTop:'3rem' }}>
                                <Card.Img style={{height:'8rem'}} src={image_api+movie.poster_path}></Card.Img>
                                <Card.Title style={{color:'white',fontSize:'1rem',fontWeight:'lighter'}}>{movie.title}</Card.Title>
                            </Card>
                            </div>
                        )
                    })
                }
                </Slider>
                </div>
                
            </div>

            <div className="upcoming-movies">
                <h6 style={{marginLeft:15,fontSize:'1.5rem'}}>upcoming Movies</h6>
                <div style={{borderRadius:'10px',marginLeft:8,backgroundColor:'#32a88c',width:'90vw'}}>
                    <Slider {...settings} style={{width:'85vw',marginLeft:'2rem',marginTop:'1rem'}}>
                {
                    upcomingmovies.map((movie,index)=>{
                        return(
                            <div key={index} style={{marginLeft:'1rem',width:'90vw'}} >
                            <Card onClick={()=>navigate('/moviedetails',{state:movie})}  style={{border:'none',outline:'none',width:'8rem',backgroundColor:'#32a88c',marginTop:'3rem' }}>
                                <Card.Img style={{height:'8rem'}} src={image_api+movie.poster_path}></Card.Img>
                                <Card.Title style={{color:'white',fontSize:'1rem',fontWeight:'lighter'}}>{movie.title}</Card.Title>
                            </Card>
                            </div>
                        )
                    })
                }
                </Slider>
                </div>
            </div>

        </div>
        </div>
    </div>
  )
}
