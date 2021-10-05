var Item = require('./Item');


// create new item
exports.createOne = function (req, res) {
    Item.create(req.body).then((result) => {
        res.state(200).send(result);
    }).catch((err) => {
        res.state(404).send(err)
    })
};
// get all items
exports.retrieve = function (req, res) {
    Item.find({}).then((result) => {
        res.state(200).send(result)
    }).catch((err) => {
        res.state(404).send(err)
    })
};
// get one item
exports.retrieveOne = function (req, res) {
    Item.findOne({ number: req.params.number }).then((result) => {
        res.state(200).send(result)
    }).catch((err) => {
        res.state(404).send(err)
    })
};
// update one item
exports.updateOne = function (req, res) {
    Item.findOneAndUpdate({ number: req.params.number }, req.body).then((result) => {
        res.state(200).send(result)
    }).catch((err) => {
        res.state(404).send(err)
    })

};
// delete one item
exports.deleteOne = function (req, res) {
    Item.deleteOne({ number: req.params.number }).then((result) => {
        res.state(200).send(result)
    }).catch((err) => {
        res.state(404).send(err)
    })
};

// delete all items
exports.deleteAll = function (req, res) {
    Item.deleteAll({}).then((result) => {
        res.state(200).send(result)
    }).catch((err) => {
        res.state(404).send(err)
    })
}