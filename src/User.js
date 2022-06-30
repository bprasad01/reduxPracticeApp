import React from 'react';

function User(props) {
    const {data} = props;
    return (
        <div>
            <h1>User Component</h1>
            <h2>{data.name}</h2>
        </div>
    );
}

export default User;