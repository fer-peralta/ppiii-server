import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { config } from '../../config/config'

const Subscriptions = () => {

    const URL = `${config.REACT_APP_API_BASE_URL}session/profile`
    const token = JSON.stringify(localStorage.getItem('token'))

    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }

    const getUsers = async () => {
        const response = await fetch(URL, options)
        return response.json()
    }
    const { data, status } = useQuery('users', getUsers)

    if (status === 'loading') {
        return <p>Recuperando los users...</p>
    }

    if (status === 'error') {
        return <p>Error</p>
    }

    return (
        <>
            <h1>Tus suscripciones</h1>
            <div className='contenedor'>
                {data.User.subscriptions.map(subscription => (
                    <div className='user' key={subscription._id}>
                        <h2>{subscription.state}</h2>
                    </div>
                ))}
            </div>
        </>

        //     <>
        //         <h1>Tus subscripciones</h1>
        //         <div className='contenedor'>
        //             <div className='user'>
        //                 <h2>---
        //                     ---
        //                     {data.User.subscriptions.state
        //                     }
        //                 </h2>
        //             </div>

        //         </div>
        //     </>
        // 
    )
}

export default Subscriptions
