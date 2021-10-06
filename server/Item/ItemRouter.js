var ItemRouter = require('express').Router();
var ItemController = require('./ItemController');

ItemRouter.route('/api/admin').get(ItemController.retrieve)
ItemRouter.route('/api/admin').post(ItemController.createOne)
ItemRouter.route('/api/admin').delete(ItemController.deleteAll)

ItemRouter.route('/api/admin/:id').put(ItemController.updateOne)
ItemRouter.route('/api/admin/:id').delete(ItemController.deleteOne)
ItemRouter.route('/api/admin/:id').get(ItemController.retrieveOne)



module.exports = ItemRouter;
