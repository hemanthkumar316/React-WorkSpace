import React from 'react'

const htmlForm = () => {
  return (
    <div>
     <label htmlFor="input-example">First name</label>
<input type="text" id="input-example" value="Luca" />

<label htmlFor="textarea-example">Description</label>
<textarea id="textarea-example">An example description here.</textarea>

<label htmlFor="single-select-example">Fruit</label>
<select id="single-select-example">
  <option value="">Select a fruit...</option>
  <option value="banana">Banana</option>
  <option value="ananas">Ananas</option>
  <option value="avocado">Avocado</option>
</select>

<label htmlFor="multiple-select-example">Fruits</label>
<select id="multiple-select-example" multiple>
  <option value="">Select a fruit...</option>
  <option value="banana" selected>Banana</option>
  <option value="ananas">Ananas</option>
  <option value="avocado" selected>Avocado</option>
</select>
    </div>
  )
}

export default htmlForm