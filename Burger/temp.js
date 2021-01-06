const axios = require('axios')

axios.get('https://react-my-burger-902c0.firebaseio.com/orders.json').then(req=> {console.log(req.data)})