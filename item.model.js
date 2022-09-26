const items = require('./fakeDb')

const item = {
    name: 'popsicle',
    price: 1.45
}

global.items.push(item)

function getAllItems() {
    return Array.from(items.values())
}

function postNewItem(item) {
    const name = item.name
    const price = item.price
    global.items.push({name, price})
    return {name, price}
}

function getItemByName(name) {

}

module.exports = {
    getAllItems,
    postNewItem,
    getItemByName,
    // updateItem,
    // deleteItem
}