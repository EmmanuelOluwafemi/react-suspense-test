import React from 'react';

import {User} from './User';

import { fetchData } from '../Api'

const resource = fetchData()

const UserList = () => {

    const users = resource.users.read()

    return (
        <>
            {
                users.map(({ email, name, id, username}) => (
                    <User 
                        key={id}
                        email={email}
                        name={name}
                        imgUrl={`https://via.placeholder.com/32/${username}`}
                    />
                ))
            }
        </>
    )
}

export default UserList
