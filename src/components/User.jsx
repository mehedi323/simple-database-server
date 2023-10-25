/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const User = () => {
  const loadedUser = useLoaderData()
  const [user, setUsers]= useState(loadedUser)
  

  const handleDelet = _id => {
    console.log('delete', _id); 
    fetch(`http://localhost:5000/user/${_id}`,{
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount>0){
          alert('deleted successfully');
          const remainig = user.filter(users => users._id !== _id);
          setUsers(remainig)
        }
      })
  }
  return (
    <div>
      <h2>Database Server Users: {user.length}</h2>
      <div>
        {
          user.map(users =>
            <p key={users._id}>
              {users.name} : {users.email}
              {users._id}
                <Link to={`/update/${users._id}`}>
                  <button>Update</button>
                </Link>
               <button 
              onClick={ () => handleDelet(users._id)}
              >X</button></p>)
        }
      </div>
    </div>
  );
};

export default User;