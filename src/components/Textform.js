import React, {useState}  from 'react'

export default function Textform(props) {
  //arrow function
    const handleUpClick = () =>{
    //console.log("btn was clicked" + text)
    let newtext = text.toUpperCase();
    settext(newtext)
    props.showAlert('Converted to uppercase!','success')
  }

  const handleLoClick = () =>{
    //console.log("btn was clicked" + text)
    let newtext = text.toLowerCase();
    settext(newtext)
    props.showAlert('Converted to lowercase!','success')
  }

  const handleClClick = () =>{
    //console.log("btn was clicked" + text)
    let newtext = "";
    settext(newtext)
    props.showAlert('cleared all text !','success')
  }

  const handleCopy =() =>{
    navigator.clipboard.writeText(text); 
    props.showAlert("copied to clipboard","success");
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/); // if more than one line --> remove spaces but stayed with their original line
    // let newText = text.split(/\s+/); // if more than one line --> remove spaces but brings all words in one line
    settext(newText.join(" "));
    props.showAlert("Extra spaces removed",'success')
  }
    // event handler
  const handleOnChange = (event) =>{
    // console.log("on change") this will show in the console 
    settext(event.target.value)
  }
    const [text, settext ] = useState(""); 
    // for default text  const [text, settext ] = useState("enter text here");
    //text = "new text" // wrong way to change default text
    //settext("newtext")// correct  way to change default text
  return (
    <>
    <div className="container my-3 " style={{color: props.mode === 'dark'?'white':'#272c3f'}}>
    {/* <div className={`container my-3 text-${props.mode === 'light'?'dark':'light'} `}>  above line is also same  */}
        <h3 className='mb-3'>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#272c3f':'white',color: props.mode === 'dark'?'white':'#272c3f'}}></textarea>
        </div>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClClick}>Clear Text</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>  
    <div className="container my-3 " style={{color: props.mode === 'dark'?'white':'#272c3f'}}>
    {/* <div className={`container my-3 text-${props.mode === 'light'?'dark':'light'} `}> */}
        <h3>your text summary</h3>
        {/* <p>{text.split(/\s+/).length} words and {text.length} characters</p> // if empty words it is count as one hence to eliminate it we use filters
        if new line word is placed it isnot counted hence we used here regularexpression (/\s/) more than one spaces including next line*/}
        <p>{text.split(/\s+/).filter((element)=>{return element.length!== 0}).length} words and {text.length} characters</p>
        <p>{0.08 * text.split(" ").filter((element)=>{return element.length!== 0}).length} minutes to read</p>
        <h3>preview</h3>
        <p>{text.length>0 ?text:'Nothing to preview'}</p>
    </div>
    </>
  )
}

// container -- brings in center
// my-3 -- y axis margin
// mx-1 -- x axis margin

/* to change the text color when dark mode enabled we can write in any 2 ways
1. using style
<div className="container my-3 " style={{color: props.mode === 'dark'?'white':'#272c3f'}}>
2.using bootsrap and templete literate string {`${javacsript}`}
{/<div className={`container my-3 text-${props.mode === 'light'?'dark':'light'} `}> }
*/

/*
style={{backgroundColor: props.mode === 'dark'?'grey':'white'}}
we have used to curly bracket 1 for javavscript 2nd for writing object inside it

*/
/*
  <p>{text.split(/\s+/).length} words and {text.length} characters</p> 
 // if empty words it is count as one hence to eliminate it we use filters
 //<p>{text.split(/\s+/).filter((element)=>{return element.length!== 0}).length} words and {text.length} characters</p>
 if new line word is placed it isnot counted hence we used here regularexpression (/\s/) more than one spaces including next line
 ok
 my 
 nmae
 if regular exp use --> itwill show 3 words
 else --> 1 word
 */
