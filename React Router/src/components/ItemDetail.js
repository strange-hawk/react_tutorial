import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
  

const shop = (props) => {

    useEffect(()=>{
        fetchItems()
    },[])
    const [item, setItems] = useState({})

    const fetchItems = () => {
        axios.get('https://reqres.in/api/users?page=2') .then(function (response) {
            const list_items = response.data.data
            // var item = {}
            list_items.forEach(item=>{
                if(item.id == props.match.params.id){
                    console.log(item)
                    const item_red = {}
                    item_red['name'] = item['first_name'] + ' ' + item['last_name']
                    item_red['email'] = item['email']
                    item_red['image'] = item['avatar']
                    console.log(item_red)
                    setItems(item_red)
                }
            })
        }).catch(function (error) {
            console.error(error);
        });
    }
    // console.log(props.match.params.id)
    return (
        <div>
        <h1>
            Item
        </h1>
        <img src={item['image']} alt="image"></img>
        <p><b>NAME : </b>{item['name']}</p>
        <p><b>EMAIL : </b>{item['email']}</p>
        </div>
    )
}

export default shop