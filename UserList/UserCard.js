import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserCard({ user }) {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate(`/user/${user.id}`);
  };

  return (
    <div className="card" onClick={handleUserClick}>
      <img src={user.profilepicture} alt={user.username} width='10%' height='10%' />
      <h3>{user.name}</h3>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </div>
  );
}

export default UserCard;
