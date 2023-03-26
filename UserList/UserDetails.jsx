import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UserDetails() {
const navigate=useNavigate()

  const [user, setUser] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://panorbit.in/api/users.json`)
      .then(response => response.json())
      .then(data => {
        const userData = data.users.find(user => user.id === parseInt(id));
        setUser(userData);
      });
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }
const handleSignOut=()=>{
  navigate('/')
}
  return (
    <div className="user-details">
      <h2>{user.name}</h2>
      <img src={user.profilepicture} alt={user.username} width='10%' height='10%' />
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <button onClick={handleSignOut}>Sign Out</button>

    </div>
  );
}

export default UserDetails;
