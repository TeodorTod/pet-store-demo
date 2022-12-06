import React, { useEffect } from 'react'
import { apiKey } from '../../apiKey'

function DataInsertion() {
    const headersAll = {
        "Content-Type": "application/json",
        "api_key": apiKey
    }

    const petBody = {
        "id": 11,
        "category": {
            "id": 1,
            "name": "Test"
        },
        "name": "doggie2",
        "photoUrls": [
            "https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2018/06/dog-breeds-of-famous-dogs-1600x1065.jpg"
        ],
        "tags": [
            {
                "id": 1,
                "name": "Test"
            }
        ],
        "status": "available"
    };

    const userBody = {
        "id": 10,
        "username": "arthur",
        "firstName": "Peter",
        "lastName": "Petrov",
        "email": "p@abv.bg",
        "password": "123",
        "phone": "0888123456",
        "userStatus": 1
    };

    function petInsertion() {
        fetch('https://petstore.swagger.io/v2/pet', {
            method: 'POST',
            body: JSON.stringify(petBody),
            headers: headersAll
        })
            .then((response) => response.json())
            .then((data) => {
                return data;
            })
    }

    function userInsertion() {
        fetch('https://petstore.swagger.io/v2/user', {
            method: 'POST',
            body: JSON.stringify(userBody),
            headers: headersAll
        })
            .then((response) => response.json())
            .then((data) => {
                return data;
            })
    }


    useEffect(() => {
        petInsertion()
        userInsertion()
    }, [])
    return
}

export default DataInsertion