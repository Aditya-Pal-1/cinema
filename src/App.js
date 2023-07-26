
import './App.css';
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Components/Signup';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import MovieDetails from './Components/MovieDetails';
import Comment from './Components/Comment';
import Fetch from './Components/Fetch';



function App() {
  return (
    <div>
      {/* <Signup> */}
      <Routes>
        <Route path='/' element={< Login/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/home' element={< Home />} />
        <Route path='/moviedetails' element={<MovieDetails/>}/>
        <Route  path='/comment' element={< Comment/>}/>
        </Routes>
        {/* </Signup> */}
        {/* <Fetch /> */}
    </div>
  );
}

export default App;
