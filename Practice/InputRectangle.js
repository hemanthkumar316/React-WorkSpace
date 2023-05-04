import { useState } from 'react';

const InputRectangle=()=> {
  const [width, setWidth] = useState('');
  const [color, setColor] = useState('');

  const handleWidthChange=(e)=> {
    setWidth(e.target.value);
  }

  const handleColorChange=(e)=> {
    setColor(e.target.value);
  }

  return (
    <div className="container mt-5 mb-2">
    <form>
      <div className='row'>
<div className='col col-md-6'>
<label className='form-label'>Width: </label>
        <input type="text" value={width} onChange={handleWidthChange} className='form-control-lg' placeholder='Enter Width of Rectangle'/>
  </div>
  <div className='col col-md-6'>
     
  <label className='form-label'>Color: </label>
        <input type="text" value={color} onChange={handleColorChange} className='form-control-lg'placeholder='Enter Rectangle Color' />
  </div>
      </div>
    </form><br/>
<div style={{ height: '200px', width: width, backgroundColor: color }}></div>
    </div>
  );
}

export default InputRectangle;
