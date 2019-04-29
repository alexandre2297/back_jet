const Jetpack = require("../../src/Entity/Jetpack");
const uuidv4 = require('uuid/v4');
const db = require('../../src/Db');
const JetpackRepository = require('../../src/Repository/JetpackRepository');

module.exports = (req, res) => {

    let jetpack = new Jetpack();
    jetpack.id = req.body.id;
    jetpack.name = req.body.name;
    jetpack.image = req.body.image;

    const repository = new JetpackRepository(db);
    var response = repository.update(jetpack);
    res.header("Access-Control-Allow-Origin", "*");
    res.status(201).send(response);

};