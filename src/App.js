import './App.css';
import About from './components/AboutUs'
import Game1 from './components/Game1'
import Game2 from './components/Game2'
import Game3 from './components/Game3'
import Puzzle from './components/Puzzle.js'
// import Login from './components/Login'
import {Route,Routes} from 'react-router-dom'
import Map from './components/Map'
function App() {
  return (
    <div className="App">
      {/* <About></About> */}
      {/* <Game3 ></Game3> */}
      {/* <Puzzle></Puzzle> */}
      {/* <Map></Map> */}
    <Routes>
    <Route path='game1' element={<Game1/>}></Route>

    <Route path='' element={<About/>}></Route>

      <Route path='about' element={<About/>}></Route>

      <Route path='game2' element={<Game2/>}></Route>

      <Route path='game3' element={<Puzzle/>}></Route>

      {/* <Route path='login' element={<Login/>}></Route> */}


      {/* <Route path='game3' element={<Game3/>}></Route> */}



    </Routes>
    </div>
  );
}

export default App;
