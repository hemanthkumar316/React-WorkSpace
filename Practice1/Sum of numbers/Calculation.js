import React,{useState} from 'react'

const Calculation = () => {
    const [number1,setNumber1]=useState()
    const [number2,setNumber2]=useState()
    const [total,setTOtal]=useState(0)
    let calculatetotal=()=>{
        setTOtal(number1+number2)






        
    }
  return (
    <div>
        <h2>Adding of twoo numbers</h2>
        <input type='number' placeholder='first number'value={number1} onChange={(e)=>setNumber1(+e.target.value)}/>
        <input type='number' placeholder='second number'value={number2} onChange={(e)=>setNumber2(+e.target.value)}/>
        <button onClick={calculatetotal}>Add Two Numbers</button>
        <p>Total :{total || ""}</p>
    </div>
  )
}

export default Calculation