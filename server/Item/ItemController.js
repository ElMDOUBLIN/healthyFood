var Item = require('./Item');


// create new item
exports.createOne = function (req, res) {
    const newitem = new Item(req.body)
    newitem.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        res.send(err)
    })
};
// get all items
exports.retrieve = function (req, res) {
    Item.find({}).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    })
};
// get one item
exports.retrieveOne = function (req, res) {
    Item.findOne({ number: req.params.number }).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    })
};
// update one item
exports.updateOne = function (req, res) {

    const id = req.params.id
    // console.log(req.params.id)
    Item.findByIdAndUpdate(id, req.body).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.send(err)
    })

};
// delete one item
exports.deleteOne = function (req, res) {
    Item.deleteOne({ number: req.params.number }).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    })
};

// delete all items
exports.deleteAll = function (req, res) {
    Item.deleteMany({}).then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    })
}