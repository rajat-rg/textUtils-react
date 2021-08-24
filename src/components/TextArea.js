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
    const [text, setText] = useState("");
    return (
        <>
        <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" value={text} onChange={handleOnClick} id="textArea" rows="6" style={{backgroundColor: props.color, color:props.mode==='light'?'black':'white'}}></textarea>
            </div>
            <button className={`btn btn-${props.mode==='light'?'primary':props.mode} mx-2`} onClick={handleUpClick}>Upper case</button>
            <button className={`btn btn-${props.mode==='light'?'primary':props.mode} mx-2`} onClick={handleLowerClick}>Lower case</button>
            <button className={`btn btn-${props.mode==='light'?'primary':props.mode} mx-2`} onClick={handleClear}>clear text</button>
        </div>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}} >
            <h2>Text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>Normal reading time : {text.split(" ").length * 0.008}</p>

        </div>
        </>
    )
}
