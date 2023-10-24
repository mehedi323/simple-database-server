/* eslint-disable no-unused-vars */ 
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const User = () => {
  const user = useLoaderData()
  return (
    <div>
      <h2>Database Server Users: {user.length}</h2>
      <div>
        {
          user.map(users=> <p key={users._id}> {users.name} : {users.email}</p>)
        }
      </div>
    </div>
  );
};

export default User;