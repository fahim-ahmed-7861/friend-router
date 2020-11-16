import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {

    const {id,name,email}=props.friend;

    let history=useHistory();

    const details=props.friend;
    console.log(details);

    const handleClick = (url) => {

        history.push(url);

    }

    const friendStyle={

        border:'1px solid purple',
        margin:'20px',
        padding:'20px',
        borderRadius:'20px'
    }
    return (
        <div style={friendStyle}>
            <h2>ID : {id}</h2>
            <h1>Name : {name}</h1>
             <p>Email : {email}</p>
             <Link to={'/about/'+id} details={details} params={{ details:details }
            }>About ME</Link>

            <br/>
            <button onClick={()=>handleClick('/about/'+id)}>about me</button>
    
        </div>
    );
};

export default Friend;