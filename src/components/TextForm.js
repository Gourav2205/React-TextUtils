import React, { useState } from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('');
    // text = "new text" wrong way to chnage state
    // setText("new text"); correct way to chnage state

    const handleOnChange = (event) => {
        // console.log("On chnage")
        setText(event.target.value);
    }
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
        // console.log("clicked on uppercase")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")
        // console.log("clicked on lowercase")
    }


    const handleClearClick = () => {
        let newtext = ('')
        setText(newtext);
        props.showAlert("Text Cleared", "success")
        // console.log("clicked on clear")
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success")
    }

    // const [color, setColor] = useState('dark')
    // 
    // const toggleColor = () => {
    //     if (props.mode==='light') {
    //         setColor('')
    //     }
    // }

    let character = text.replace(/ /g,"");

    let time = (0.008 * text.split(" ").filter((element) => {return element.length!==0}).length);
    let newTime = time.toFixed(2);

    return (
        <>
        <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
            <h2 className='mb-2'>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#545454', color: props.mode==='light'?'black':'white'}} id="myBox" rows="5" placeholder='Enter Text Here'></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} disabled={text.length===0} style={{margin: 10}}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2"onClick={handleLowClick} style={{margin: 10}} disabled={text.length===0}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2"onClick={handleClearClick} style={{margin: 10}} disabled={text.length===0}>Clear Text</button>
            <button className="btn btn-primary mx-2"onClick={handleCopy} style={{margin: 10}} disabled={text.length===0}>Copy Text</button>
            <button className="btn btn-primary mx-2"onClick={handleExtraSpaces} style={{margin: 10}} disabled={text.length===0}>Remove Extra Spaces</button>
        </div>
        
        <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <h3><i>Your text summary</i></h3>
            <p className='mx-3'>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words & {character.length} charecters</p>
            <p className='mx-3'>{newTime} Minutes to Read</p>
            <h3><i>Preview</i></h3>
            <p className='mx-3'>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
        </>
    )
}
