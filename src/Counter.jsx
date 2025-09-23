import React ,{useState} from 'react' 
export default function Counter(props){
    
    const handleUpClick =()=>{
        // console.log('Uppercase was clicked');
        setText(text.toUpperCase())
       
    }
    const handleLoClick =()=>{
        setText(text.toLowerCase())
       
    }
    
    const handleOnChange =(event)=>{
        // console.log('On change');
        setText(event.target.value);
    }
    const [text , setText] = useState("Enter text....");
    // setText("new Enter text.....");
    
    return (
        <>
        <div>
            <h1>{props.heading}-</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-4" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        <div className='container my-3'>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008* text.split(" ").length }</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>

</>
    )
}