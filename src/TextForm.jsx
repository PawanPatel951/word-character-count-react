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
        let newtext = "";
        setText(newtext)
         props.showAlert("Text cleared!", "success " )
       
    }
    const handleRemovSpace =()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
         props.showAlert("Extra Sspaces removed!", "success " )
       
    }
    const handleCopy=()=>{
        console.log("I am copy");
        props.showAlert("Copied to Clipboard!", "success " )
        var text=document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeRanges();
       
    }
    
    const handleOnChange =(event)=>{
        // console.log('On change');
        setText(event.target.value);
    }
    const [text , setText] = useState("Enter text....");
    // setText("new Enter text.....");
    
    return (
        <>
        <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
  <h1 className='mb-4'>{props.heading}-</h1>
  <div className="mb-3">
    <textarea
      className="form-control"
      style={{
        backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
        color: props.mode === 'dark' ? 'white' : 'black',
      }}
      value={text}
      onChange={handleOnChange}
      id="myBox"
      rows="8"
    ></textarea>
  </div>

  <div className="d-flex flex-wrap gap-2">
    <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>
      Convert to Uppercase
    </button>
    <button disabled={text.length===0} className="btn btn-primary" onClick={handleLoClick}>
      Convert to Lowercase
    </button>
    <button disabled={text.length===0} className="btn btn-primary" onClick={handleCopy}>
      Text Copy
    </button>
    <button disabled={text.length===0} className="btn btn-primary" onClick={handleClear}>
      Clear Text
    </button>
    <button disabled={text.length===0} className="btn btn-primary" onClick={handleRemovSpace}>
      Remove Extra Space
    </button>
  </div>
</div>

        <div className='container my-3'  style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words and {text.length} characters</p>
            <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length }</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>

</>
    )
}