

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSelect = (event) => {
    setSelectedUser(event.target.value);
  };
  const selected=selectedUser ? data.find((user) => user.id === parseInt(selectedUser)).name : 'None'
 console.log()
  return (
    <div>
      <select onChange={handleSelect} className="form-control-lg" >
        <option value="">Select</option>
        {data.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <h1>You selected {selected}</h1>
    </div>
  );
};

export default App;
