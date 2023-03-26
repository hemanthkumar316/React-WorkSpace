import React,{useState} from 'react'

const Calculator = () => {
 const[input,setInput]=useState("")
 const [result,setResult]=useState(0)
  return (
    <div className='container mt-5 text-center'>
   
     <div className='row'>
<div className='col col'>
<h1 className='text-white bg-info mb-3 '>Calculator</h1>
<input type='text' className='form-control-lg' value={input} onChange={(e)=>setInput(e.target.value)}/>
<br/>
<button onClick={()=>setResult(eval(input))} className='btn btn-primary mt-3 mb-2'>Result</button><br/>
<h4>Result is : {result}</h4><br/>
<button onClick={()=>setInput(input+'1')} className='btn btn-warning mr-2'>1</button>
<button onClick={()=>setInput(input+'2')}  className='btn btn-warning mr-2'>2</button>
<button onClick={()=>setInput(input+'3')}  className='btn btn-warning mr-2'>3</button>
<button onClick={()=>setInput(input+'4')}  className='btn btn-warning mr-2'>4</button>
<button onClick={()=>setInput(input+'5')}  className='btn btn-warning mr-2'>5</button><br/><br/>
<button onClick={()=>setInput(input+'6')}  className='btn btn-warning mr-2'>6</button>
<button onClick={()=>setInput(input+'7')}  className='btn btn-warning mr-2'>7</button>
<button onClick={()=>setInput(input+'8')}  className='btn btn-warning mr-2'>8</button>
<button onClick={()=>setInput(input+'9')}  className='btn btn-warning mr-2'>9</button>
<button onClick={()=>setInput(input+'0')}  className='btn btn-warning mr-2'>0</button><br/><br/>
<button onClick={()=>setInput(input+'+')}  className='btn btn-primary mr-2'>+</button>
<button onClick={()=>setInput(input+'-')}  className='btn btn-primary mr-2'>-</button>
<button onClick={()=>setInput(input+'*')}  className='btn btn-primary mr-2'>*</button>
<button onClick={()=>setInput(input+'/')}  className='btn btn-primary mr-2'>/</button>
<button onClick={()=>setInput('')}  className='btn btn-danger mr-2'>clr</button>
</div>
     </div>
    </div>
  )
}

export default Calculator