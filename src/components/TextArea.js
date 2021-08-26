import React, {useState} from 'react'

export default function TextArea(props) {

    const handleOnClick=(event)=>{
        setText(event.target.value)
        
    }
    const handleUpClick= ()=> {
        let newText= text.toUpperCase()
        setText(newText)
        props.showAlert("Changed to upperCase","success")
    }
    const handleLowerClick= ()=> {
        let newText= text.toLowerCase()
        setText(newText)
        props.showAlert("Changed to lowerCase","success")
    }
    const handleClear= ()=> {
        setText('')
        props.showAlert("Cleared text","info")
    }

    const handleCopy= ()=>{

        var text = document.getElementById("textArea");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied","success")
    }
    const handleExtraSpaces = ()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" ")); 
    }



    const [text, setText] = useState("");
    return (
        <>
        <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" value={text} onChange={handleOnClick} id="textArea" rows="6" style={{backgroundColor: props.color, color:props.mode==='light'?'black':'white'}}></textarea>
            </div>
            <button className={`btn btn-${props.mode==='light'?'primary':props.mode} mx-2`} disabled={text.length===0} onClick={handleUpClick}>Upper case</button>
            <button className={`btn btn-${props.mode==='light'?'primary':props.mode} mx-2`} disabled={text.length===0} onClick={handleLowerClick}>Lower case</button>
            <button className={`btn btn-${props.mode==='light'?'primary':props.mode} mx-2`} disabled={text.length===0} onClick={handleClear}>clear text</button>
            <button className={`btn btn-${props.mode==='light'?'primary':props.mode} mx-2`} disabled={text.length===0} onClick={handleCopy}>copy text</button>
            <button className={`btn btn-${props.mode==='light'?'primary':props.mode} mx-2`} disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}} >
            <h2>Text summary</h2>
            <p>{text.split(/\s+/).filter((element =>{return element.length !== 0})).length} words and {text.length} characters</p>
            <p>Normal reading time : {text.split(" ").filter((element =>{return element.length !== 0})).length * 0.008}</p>
            <hr />
            <h2 className="my-3"> Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>

        </>
    )
}
