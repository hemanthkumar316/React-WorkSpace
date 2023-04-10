import React, { useState, useEffect } from 'react'

const SearchBar = () => {
  const [input, setInput] = useState('')
  const [results, setResults] = useState([])
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = (value) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        const results = json.filter((user) => {
          return (
            value && user && user.name && user.name.toLowerCase().includes(value)
          )
        })
        setResults(results)
      })
  }
  const handleSearch = (value) => {
    setInput(value)
    fetchData(value)
  }
  return (
    <div className='mt-5'>
      <div class="input-group col-md-6">
        <input type='search' className='form-control-lg ' value={input} onChange={(e) => handleSearch(e.target.value)} placeholder='Search...' />
        <span class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">
            <i class="fa fa-search"></i>
          </button>
        </span>
      </div>

      <div className='card  ml-3' style={{ maxWidth: '310px' }}>
        {
          results.map((user) => {
            return (
              <div key={user.id} onClick={() => alert(`you selected ${user.name} !`)}>{user.name}</div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SearchBar