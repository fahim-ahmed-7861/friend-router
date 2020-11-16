import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AboutMe = () => {

   

    const {id}=useParams();

   
    const [user,setUser]= useState([]);
    

    useEffect(() => {

        const url=`https://jsonplaceholder.typicode.com/users/`+id;

        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data));
    },[])
    return (
        <div>
            <h1>Name: {user.name}</h1>
            <p>id : {user.id}</p>
        </div>
    );
};

export default AboutMe;