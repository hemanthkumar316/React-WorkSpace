import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://panorbit.in/api/users.json')
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleUserNameClick = (userName) => {
    alert(`You clicked on ${userName}`);
  };

  return (
    <div className="row">
      {users.map((user) => (
        <div className="col-md-4 mb-4" key={user.id}>
          <UserCard user={user} onUserNameClick={handleUserNameClick} />
        </div>
      ))}
    </div>
  );
};

export default UserList;
