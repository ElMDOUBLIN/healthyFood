const db  = require('./index.js');
const Item = require('../Item/Item.js');

const allItems= require('../../data/Item.json')

const insertallItems= function() {
  Item.create(allItems)
    .then(() => db.close());
};

insertallItems();