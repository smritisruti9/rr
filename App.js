import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter,Route,Link,Routes} from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Loginscreen from './screens/Loginscreen';
import Registerscreen from './screens/Registerscreen';
import Landingscreen from './screens/Landingscreen';
import Adminscreen from './screens/Adminscreen';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <BrowserRouter>
     <Routes>
     
     <Route path="/home" element={<Homescreen/>}/>
   
     <Route path="/book/:roomid"element={<Bookingscreen/>}/>
     <Route path="/register" element={<Registerscreen/>}/>
     <Route path="/login" element={<Loginscreen/>}/>
     <Route path='/'element={<Landingscreen/>}/>
     <Route path='/admin'element={<Adminscreen/>}/>
     </Routes>
     
     </BrowserRouter> 
        
    </div>
  );
}

export default App;
//<Route path="/book/:roomid"element={<Bookingscreen/>}/>
//<Route path="/book/:roomid" render={props => <Bookingscreen {...props} />} />
