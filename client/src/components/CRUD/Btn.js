//import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import './Btn.css'
import UserCard from './UserCard'
import { config } from '../config/config'
const Btn = (props) => {

    const URL = `${config.REACT_APP_API_BASE_URL}users`

    const { data, status } = useQuery('users', getUsers)

    if (status === 'loading') {
        return <p>Recuperando los users...</p>;
    }

    if (status === 'error') {
        return <p>Error</p>;
    }


    return (
        <>

            <div className="products">
                {data.data.map(user => (
                    <UserCard user={user} key={user._id} />
                ))}
            </div>

        </>
    )
}
export default Btn