import logo from './logo.svg';
// import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Images from './pages/Images';
import Store from './pages/Store';
import About from './pages/About';
import Gmail from './pages/Gmail';
import {Routes, Route} from 'react-router-dom'
import GlobalStyle from './globalStyle'

function App() {
  return (
    <>
     <GlobalStyle/>
      <Navbar/>
      <Home/>
     <Routes>
      {/* <Home/> */}
      
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/store' exact component={Store}/>
        <Route path='/gmail' exact component={Gmail}/>
        <Route path='/images' exact component={Images}/>

      
      </Routes>
      
      </>
  );
}
  
     { /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header> */}
    


export default App;
