const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/Committe")
    .then(() => {
        console.log('Db Connected')
    })
    .catch((err) => {
        console.log("Db Error", err)
    })


