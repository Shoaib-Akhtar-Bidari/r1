
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';   //imrs+ent
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState("light"); // to enable dark/light mode
  const [alert, setAlert] = useState(null); // to set alert when using functionality

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
   
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark'); // navbar
      document.body.style.backgroundColor = '#272c3f'; // body #272c3f
      showAlert("dark mode has been enabled",'success'); // alert message
      // document.title = 'TextUtils- Dark mode enabled'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled",'success');
      // document.title = 'TextUtils- light mode enabled'
    }
  }

  return (
    <>

      <Navbar title="TextUtils" about="About"  mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <Textform showAlert={showAlert} heading="Try Textutils - Word Counter, Character Counter, Remove extra spaces" 
      mode={mode} />
     
   </> 
  );
  }

export default App;

   

  
