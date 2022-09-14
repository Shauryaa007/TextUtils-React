// use reactjs.org as source


import './App.css';
import About from './componet/About';
import Navbar from './componet/Navbar';
import Textarea from './componet/Textarea';
import React, {useState } from 'react'
import Alert from './componet/Alert';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  const [mode,setmode] = useState('light');
  const [text,settext]=useState('dark');
  const [textarea,settextarea]=useState('yellowgreen');
  const [alert,setalert]=useState(null)

  const showalert=(message,type)=>{
    setalert({
      type:type,
      msg:message
    })
    
    setTimeout(()=>{
      setalert(null);
    },2000)
  }

  const defaultmode=()=>{

      setmode('light');
      settext('dark');
      settextarea('yellowgreen');
      document.body.style.backgroundColor='white';
      showalert("light mode activated","success");
      document.title="TextUtils-Home";
    }

    const darkmode=()=>{

      setmode('dark');
      settext('light');
      settextarea('gray');
      document.body.style.backgroundColor='black';
      showalert("dark mode activated","success");
      document.title="TextUtils- Dark Mode";
    }

    const greenmode=()=>{

      setmode('dark');
      settext('light');
      settextarea('white');
      document.body.style.backgroundColor='green';
      showalert("green mode activated","success");
      document.title="TextUtils- Green Mode";
    }

    const bluemode=()=>{

      setmode('dark');
      settext('light');
      settextarea('Slateblue');
      document.body.style.backgroundColor='Blue';
      showalert("blue mode activated","success");
      document.title="TextUtils- Blue Mode";
    }

    const yellowmode=()=>{

      setmode('light');
      settext('dark');
      settextarea('white');
      document.body.style.backgroundColor='yellow';
      showalert("yellow mode activated","success");
      document.title="TextUtils- Yellow Mode";
    }
   

  
  return (
    <BrowserRouter>
   <Navbar  mode={mode} defaultmode={defaultmode} darkmode={darkmode} greenmode={greenmode} bluemode={bluemode}  yellowmode={yellowmode} text={text}/>
    <Alert alert={alert}></Alert>
   {/* <div className="container">
    
        <Textarea mode={mode} prompt='ENTER YOUR TEXT HERE!'text={text}  showalert={showalert} textarea={textarea}/>
        <About text={text}/>
      </div>  */}
<div className="container">
      <Routes>
        <Route path="/" element={ <Textarea mode={mode} prompt='ENTER YOUR TEXT HERE!'text={text}  showalert={showalert} textarea={textarea}/>} />
        <Route path="/about" element={<About text={text}/>} />
      </Routes>
</div>
      
    </BrowserRouter>
   
  );
}

export default App;
