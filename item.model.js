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
    const item = items.filter(el => el.name === name)
    return item[0]
}

function updateItem(name, newName, newPrice) {
    const item = items.filter(el => el.name === name)
    item[0].name = newName
    item[0].price = newPrice
    return item[0]
}

function deleteItem(name) {
    const deletedItem = items.filter(el => el.name === name)
    for( var i = 0; i < items.length; i++){     
        if ( items[i] === deletedItem) { 
            items.splice(i, 1); 
        }
        return items
    }
    return deleteItem
}

module.exports = {
    getAllItems,
    postNewItem,
    getItemByName,
    updateItem,
    deleteItem
}