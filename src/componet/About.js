import React ,{useState} from 'react'


export default function About() {
    const [btntext,setbtntext]= useState('Dark Mode')
    const [mystyle, setmystyle] = useState(
        {
            color:'black',
            backgroundColor:'white',
            
        }
    ); 

     const togglestyle=()=>{
        if(mystyle.color==='black')
        {
            setmystyle({

             color:'white',
            backgroundColor:'black',
            border:'2px solid white',
            borderRadius:'3px'
            })
            setbtntext('Dark Mode')
        }
        else{
            setmystyle({
                
                color:'black',
            backgroundColor:'white',
            
                })
                setbtntext('Light Mode')
        }
        }
    


  return (
    <div className='container py-4 ' style={mystyle}>
      <div className="accordion" id="accordionExample" >
        <h3 style={mystyle}>About</h3>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button style={mystyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={togglestyle}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btntext}</label>
</div>
    </div>
  )
}