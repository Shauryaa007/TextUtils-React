import React, { useState } from 'react' // hooks in react
import PropTypes from 'prop-types'


export default function Textarea(props) {
    const [Text, setText] = useState('write here !!!');  // hooks concept lets us use state feature with out using class
    const [Titlecolor, setTitlecolor] = useState('text-dark'); 
    const ToUpperCase = () => {
        //console.log("button clicked")
        let newtext = Text.toUpperCase();
        setText(newtext);
        props.showalert("text coverted to uppercase","success");
    }

    const ToLowerCase = () => {
        //console.log("button clicked")
        let newtext = Text.toLowerCase();
        setText(newtext);
        props.showalert("text coverted to lowercase","success");
    }

    const cleartext = () => 
    {
        setText('');
        props.showalert("text is cleared","success");
        
    }

    const handlecopy = () => {
      var text=document.getElementById("mybox");
      //text.select();
      navigator.clipboard.writeText(text.value);
      props.showalert("text is copied !!","success");

    }

    const removeextraspace=()=>{
        var newtext=Text.split(/[ ]+/);
        setText(newtext.join(" "));

        props.showalert("Extra spaces are removed!!","success");

    }

    const handleChange = (event) => {
        
        
        //console.log("change")
        setText(event.target.value)  // ye is liye hai taki hm click krne ke baad value update kr pAYE verna onchange text area func execute hoga bt hm edit nhi kr payenge
 }

setInterval(() => {
    setTitlecolor('text-danger');
},1000);

    setInterval(() => {
        setTitlecolor('text-dark');
    },2000);

    

    return (
        <>
            <div>

               <h2 className={`d-flex justify-content-center ${Titlecolor}`}>{props.prompt}</h2>
                <div className={`mb-3 mt-4   text-${props.text}`} >
                    <textarea  className={`form-control text-${props.text}`} style={{backgroundColor: props.textarea}} id="mybox" onChange={handleChange}  rows="9" value={Text}></textarea>
                </div>

                <div >
                    <button type="button" className="btn btn-dark mx-2 my-1" onClick={ToUpperCase}>UPPERCASE</button>
                    <button type="button" className="btn btn-warning mx-2 my-1" onClick={ToLowerCase}>LOWERCASE</button>
                    <button type="button" className="btn btn-success mx-2 my-1" onClick={cleartext}>CLEAR TEXT</button>
                    <button type="button" className="btn btn-primary mx-2 my-1" onClick={handlecopy}>COPY TEXT</button>
                    <button type="button" className="btn btn-info mx-2 my-1" onClick={removeextraspace}>REMOVE EXTRA SPACE</button>
                </div>

            </div>

          <div className={`container my-2 text-${props.text}`}>
            <h3>Your text Summary</h3>
            <p> Words: {Text.split(" ").filter((element)=>{return element.length!==0}).length} Characters: {Text.length}</p>
          </div>
          <div className={`container my-2 text-${props.text}`}>
            <h6><i><b>According to many studies Most people read at an average rate of 250 words per minute (wpm), though we take this rate as calculation.</b></i></h6>
            <p> {Text.split(" ").filter((element)=>{return element.length!==0}).length/250} Minutes read</p>
          </div>
          <div className={`container my-2 text-${props.text}`}>
            <h3>Preview</h3>
            <p>{Text}</p>
          </div>



        </>



    )
}

Textarea.propTypes = {
    prompt: PropTypes.string.isRequired
};

Textarea.defaultProps = {
    prompt: "default promt"
};