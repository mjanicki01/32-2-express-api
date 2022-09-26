const express = require('express')
const router = express.Router()

const {
    httpGetAllItems,
    httpPostItems,
    httpGetItemByName,
    httpUpdateItem,
    httpDeleteItem} = require('./item.controller')

router.get('/', httpGetAllItems)

router.post('/', httpPostItems)

router.get('/:name', httpGetItemByName)
// {“name”: “popsicle”, “price”: 1.45}

router.patch('/:name', httpUpdateItem)
// {“name”:”new popsicle”, “price”: 2.45} => {“updated”: {“name”: “new popsicle”, “price”: 2.45}}

router.delete('/:name', httpDeleteItem)
// {message: “Deleted”}

module.exports = router