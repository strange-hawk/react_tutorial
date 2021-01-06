import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
  

const shop = () => {

    useEffect(()=>{
        fetchItems()
    },[])
    const [items, setItems] = useState([])

    const fetchItems = () => {
        axios.get('https://reqres.in/api/users?page=2') .then(function (response) {
            const items = response.data.data
            setItems(response.data.data)
            console.log(items);
        }).catch(function (error) {
            console.error(error);
        });
    }
    return (
        <div>
        <h1>
            ShopPage
        </h1>
        {items.map(item => (
            <p key={item.id}><b>Name</b> : <Link to={`/shop/${item.id}`}>{item.first_name}</Link></p>
        ))}
        </div>
    )
}

export default shop