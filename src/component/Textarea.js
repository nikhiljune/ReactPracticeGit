import React,{ useState} from 'react'
import PropTypes from 'prop-types'
export default function Textarea(props) {
    const[text,setText]=useState("")

   const upperCaseHandler=()=>{
        let upperText=text.toUpperCase();
        // console.log(upperText);
        setText(upperText)
        props.alertHandler('success','Changed to uppercase')
    }

    const textChangeHandler=(event)=>{
        setText(event.target.value)
    }
    const lowerCaseHandler=()=>{
        let lowerText=text.toLowerCase();
        props.alertHandler('success','Changed to lowercase')


        setText(lowerText)
    }
    const clearText=()=>{
        setText("")
    }

    function WordCount(str) {
        return str.split(' ')
               .filter(function(n) { return n !== '' })
               .length;
   }


  return (
    <>
    <div>
<div className="mb-3 my-3" style={props.mode==='dark' ? {color:'white'}:{color:'black'}}>
    <h3>{props.title}</h3>
  <textarea className="form-control" id="text" rows="12" value={text} onChange={textChangeHandler} style={props.mode==='dark'? {backgroundColor:'#0a1529', color:'white'} : {backgroundColor:'white',color:'black'}}></textarea>
  <button className='btn btn-primary my-3' onClick={upperCaseHandler}>UpperCase</button>
  <button className='btn btn-primary my-3 mx-2' onClick={lowerCaseHandler}>LowerCase</button>
  <button className='btn btn-primary my-3 mx-1' onClick={clearText}>Clear</button>



</div>
    </div>

    <div className='container' style={props.mode==='dark' ? {color:'white'}:{color:'black'}}>
    <h3> Your Text Summary: </h3>
    <p className='my-2'> Total Words : {WordCount(text)} and Total Characters : {text.length}</p>

    <h3 className='my-3'>Summary :</h3>
    <p id='summary'>{text}</p>
    </div>
    </>
  )
}

Textarea.propTypes={
    title:PropTypes.string,

}

Textarea.defaultProps={
    title:"Enter text"
}