import './App.css';
// import DarkMode from './component/DarkMode';

import Navbar from './component/Navbar'
import Textarea from './component/Textarea';
import React,{useState} from 'react'
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './component/About';

function App() {

  const[mode,setMode]=useState('light')
  const [alert, setAlert] = useState(null)

  const modeHandler=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#0a1529'
      alertHandler('success','Dark mode activated')
    
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      alertHandler('success','Light mode activated')

    }
  }

  const alertHandler=(type,msg)=>{

    setAlert({
      type:type,
      msg:msg
    })

    setTimeout(() => {
      setAlert(null)
        
      }, 2000);


  }

  return (
    <>
      <Router>
      <Navbar title={"FirstReactApp"} about={"About Website"} mode={mode} modeHandler={modeHandler}  />
      {/* <Navbar/> */}
      <Alert alert={alert}/>

      <div className="container">
      {/* <DarkMode/> */}
      {/* <About/> */}
      <Routes>
          <Route path="/about" element={<About/>}>
          
          </Route>
          <Route path="/" element={<Textarea title="Enter Your Text Here" mode={mode} alertHandler={alertHandler}/>}>
          </Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
