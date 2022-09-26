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
    const item = req.params.name

    if (item) {
        return res.status(200).json(getItemByName(item))
    } else {
        return res.status(404).json({error: "Item not found"})
    }
}

function httpUpdateItem(req, res) {
    const item = req.params.name

    if (item) {
        const newName = req.body.name
        const newPrice = req.body.price

        if (newName && newPrice) {
            updateItem(item, newName, newPrice)
            return res.status(204).json({updated: item})
        } else {
            return res.status(400).json({error: "Missing new name and/or price"})
        }
    } else {
        return res.status(404).json({error: "Item not found"})
    }
}

function httpDeleteItem(req, res) {
    const item = req.params.name
    
    if (item) {
        deleteItem(item)
        return res.status(200).json({deleted: item})
    } else {
        return res.status(404).json({error: "Item not found"})
    }}


module.exports = {
    httpGetAllItems,
    httpPostItems,
    httpGetItemByName,
    httpUpdateItem,
    httpDeleteItem
}