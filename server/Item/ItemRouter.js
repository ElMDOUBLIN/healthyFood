var ItemRouter = require('express').Router();
var ItemController = require('./ItemController');

ItemRouter.route('/api/admin').get(ItemController.retrieve)
ItemRouter.route('/api/admin').post(ItemController.createOne)
ItemRouter.route('/api/admin').delete(ItemController.deleteAll)

ItemRouter.route('/api/admin/:number').put(ItemController.updateOne)
ItemRouter.route('/api/admin/:number').delete(ItemController.deleteOne)
ItemRouter.route('/api/admin/:number').get(ItemController.retrieveOne)



module.exports = ItemRouter;
