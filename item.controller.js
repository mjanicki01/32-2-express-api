const {
    getAllItems,
    postNewItem,
    getItemByName,
    updateItem,
    deleteItem
} = require('./item.model')


function httpGetAllItems(req, res) {
    return res.status(200).json(getAllItems())
}

function httpPostItems(req, res) {
    const newItem = req.body
    postNewItem(newItem)

    if (newItem.name && newItem.price) {
        return res.status(201).json({added: newItem})
    } else {
        return res.status(400).json({error: 'Missing item name and/or price'})
    }
}

function httpGetItemByName(req, res) {
    return res.status(200).json(Array.from(items.values()))
}

function httpUpdateItem(req, res) {
    return res.status(200).json(Array.from(items.values()))
}

function httpDeleteItem(req, res) {
    return res.status(200).json(Array.from(items.values()))
}


module.exports = {
    httpGetAllItems,
    httpPostItems,
    httpGetItemByName,
    httpUpdateItem,
    httpDeleteItem
}