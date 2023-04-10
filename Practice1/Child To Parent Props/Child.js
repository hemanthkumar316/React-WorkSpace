import React from 'react'
//  Destructuring props
const Child = ({increment}) => {
  return (
    <div>
    {/* it call the parent callback fucntion using props */}
     <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Child