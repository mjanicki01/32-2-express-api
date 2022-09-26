const express = require('express')
const router = express.Router()

const {
    httpGetAllItems,
    httpPostItems,
    httpGetItemByName,
    httpUpdateItem,
    httpDeleteItem} = require('./item.controller')

router.get('/', httpGetAllItems)
// [{“name”: “popsicle”, “price”: 1.45}, {“name”:”cheerios”, “price”: 3.40}]

router.post('/', httpPostItems)
// {“name”:”popsicle”, “price”: 1.45} => {“added”: {“name”: “popsicle”, “price”: 1.45}}

router.get('/:name', httpGetItemByName)
// {“name”: “popsicle”, “price”: 1.45}

router.patch('/:name', httpUpdateItem)
// {“name”:”new popsicle”, “price”: 2.45} => {“updated”: {“name”: “new popsicle”, “price”: 2.45}}

router.delete('/:name', httpDeleteItem)
// {message: “Deleted”}

module.exports = router