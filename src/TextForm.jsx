import React ,{useState} from 'react' 
export default function TextForm(props){
    
    const handleUpClick =()=>{
        // console.log('Uppercase was clicked');
        setText(text.toUpperCase())
        props.showAlert("Converted to Uppercase!", "success " )
       
    }
    const handleLoClick =()=>{
        setText(text.toLowerCase())
        props.showAlert("Converted to Lowercase!", "success " )
    }
    
    const handleClear =()=>{
        let newtext = " ";
        setText(newtext)
         props.showAlert("Text cleared!", "success " )
       
    }
    const handleRemovSpace =()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
         props.showAlert("Extra Sspaces removed!", "success " )
       
    }
    
    const handleOnChange =(event)=>{
        // console.log('On change');
        setText(event.target.value);
    }
    const [text , setText] = useState("Enter text....");
    // setText("new Enter text.....");
    
    return (
        <>
        <div style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}-</h1>
            <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-4" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary " onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-4" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary mx-4" onClick={handleRemovSpace}>Remove Extra Space</button>
        </div>
        <div className='container my-3'  style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008* text.split(" ").length }</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>

</>
    )
}