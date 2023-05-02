import React, { useState, useEffect } from 'react';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    //const url1 = "https://lime-excited-dugong.cyclic.app/api/users"
    const url1 = "http://localhost:8080/api/users"

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(url1);
            const data = await response.json();
            console.log(data)
            setUsers(data.array);

        };
        fetchUsers();
    }, []);
    // const options = {
    //     method: 'POST', // O 'PATCH' si corresponde
    //     body: JSON.stringify(Post),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }


    const handleAddUser = async (newUser) => {
        const response = await fetch(url1, {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-type': 'application/json'
            },
        });
        const data = await response.json();
        setUsers([...users, data]);
        console.warn(data)
    };

    return (
        <div>
            <AddUserForm onAddUser={handleAddUser} />
        </div>
    );
};

const AddUserForm = ({ onAddUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [adress, setAdress] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [avatar, setAvatar] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            username: username,
            password: password,
            name: name,
            adress: adress,
            age: age,
            phone: phone,
            avatar: avatar
        };
        onAddUser(newUser);
        setUsername('');
        setPassword('');
        setName('');
        setAdress('');
        setAge('');
        setPhone('');
        setAvatar('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add User</h3>
            <div>
                <label>USERNAME:</label>
                <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>PASSWORD:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>NAME:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>ADRESS:</label>
                <input type="adress" value={adress} onChange={(e) => setAdress(e.target.value)} />
            </div>
            <div>
                <label>AGE:</label>
                <input type="age" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>

            <div>
                <label>PHONE:</label>
                <input type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label>AVATAR:</label>
                <input type="avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
            </div>
            <button type="submit">Add</button>
        </form>
    );
};

export default UserTable;
