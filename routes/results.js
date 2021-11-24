const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('checklist')
})


router.put('/', (req, res) => {
    res.send('update')
})

module.exports = router
