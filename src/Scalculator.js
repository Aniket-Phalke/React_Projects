import React from 'react'
import { useState } from 'react'
export  function Scalculator() {
    const [n1,setn1]=useState('')
    const [n2,setn2]=useState('')
    const[result,setresult]=useState()
    const[operator,setoperator]=useState('')
    const[element,setelement]=useState()
  
    
 
    const getvalue=(ele)=>{
       
        setelement(ele)
        if(operator==""){
            setn1(ele.target.value)
        }
        else
        {
           setn2(ele.target.value)
          
        }
        
    }


    const getbtnval=(e)=>{
      element.target.value=element.target.value+e.target.value
    
      if(operator==""){
          setn1(element.target.value)
      }
      else
      {
         setn2(element.target.value)
        
      }
       
    }

    const getoperator=(op)=>{
         setoperator(op)
         element.target.value=""
    }
    const calculateresult=()=>{
        if(operator=="+"){
            setresult(parseInt(n1)+parseInt(n2))
            element.target.value=parseInt(n1)+parseInt(n2);
        }
        else if(operator=="-"){
            setresult(parseInt(n1)-parseInt(n2))
            element.target.value=parseInt(n1)-parseInt(n2);
        }
        else if(operator=="*"){
            setresult(parseInt(n1)*parseInt(n2))
            element.target.value=parseInt(n1)*parseInt(n2);
        }
        else{
            setresult(parseFloat(n1)/parseFloat(n2))
            element.target.value=parseFloat(n1)/parseFloat(n2);
        }
       
    }
    
    const clear=()=>{
        setoperator("");
        setn1("");
        setn2("");
        setresult("");
        element.target.value="";
        
        
    }
  return (
    <div style={{textAlign:"center"}}>
    
    <h2>Simple Calculator</h2><br/><br/>
    <input type="text" name="value1" onBlur={(e)=>{getvalue(e)} } onChange={(e)=>{getvalue(e)}  }  autoFocus></input>
    <br/><br/>
    <button value="1" onClick={(e)=>{getbtnval(e)}}>1</button>
    <button value="2" onClick={(e)=>{getbtnval(e)}}>2</button>
    <button value="3" onClick={(e)=>{getbtnval(e)}}>3</button>
    <button value="4" onClick={(e)=>{getbtnval(e)}}>4</button>
    <button value="5" onClick={(e)=>{getbtnval(e)}}>5</button>
    <button value="6" onClick={(e)=>{getbtnval(e)}}>6</button>
    <button value="7" onClick={(e)=>{getbtnval(e)}}>7</button>
    <button value="8" onClick={(e)=>{getbtnval(e)}}>8</button>
    <button value="9" onClick={(e)=>{getbtnval(e)}}>9</button>
    <button value="0" onClick={(e)=>{getbtnval(e)}}>0</button>
    <br/>
    <button onClick={()=>{getoperator("+")}}>add</button>
    <button onClick={()=>{getoperator("-")}}>sub</button>
    <button onClick={()=>{getoperator("*")}}>mul</button>
    <button onClick={()=>{getoperator("/")}}>div</button>
    <button onClick={calculateresult}>result</button>
    <button onClick={clear}>clear</button>
    
    <span style={{display:"flex", textAlign:"center", marginLeft:"35rem"}}>
    <h1>{n1}</h1>
    <h1>{operator}</h1>
    <h1>{n2}</h1>
    &nbsp; &nbsp;
    <h1>{result}</h1>
    </span>
    </div>
  )
}
