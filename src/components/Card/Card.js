import React, { useEffect, useState } from 'react';
import { apiKey } from '../../apiKey';
import './Card.css'

function Card() {
    const [pets, setPets] = useState();
    const [user, setUser] = useState();

    const headers = {
        "Content-Type": "application/json",
        "api_key": apiKey
    }

    function petsHandler() {
        fetch('https://petstore.swagger.io/v2/pet/11', { headers })
            .then((response) => response.json())
            .then((data) => {
                setPets(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    function userHandler() {
        fetch('https://petstore.swagger.io/v2/user/arthur', { headers })
            .then((response) => response.json())
            .then((data) => {
                setUser(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    useEffect(() => {
        petsHandler();
        userHandler();
    }, []);

    console.log(user);
    return (
        <>
            {pets !== undefined &&
                <section className='mainSection'>
                    <div className='pet'>
                        <img className='mainImg' src={pets.photoUrls[0]} alt={pets.name} />
                    </div>

                    <div className='email'>
                        <h4>Email: {user.email}</h4>
                    </div>

                    <div className='username'>
                        <h3>Hello {user.username}</h3>
                    </div>

                    <div className='user'>
                        <h5>{user.firstName} {user.lastName}</h5>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbjdEAA_iKW6KLEBOB_01XOdQjvnBqdUslNPycIanwQqvji_15mW5kfPQsziLLhdGwvA&usqp=CAU' alt={user.firstName} />
                    </div>

                </section>}
        </>
    )
}

export default Card