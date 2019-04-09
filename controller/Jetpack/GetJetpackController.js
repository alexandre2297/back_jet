const Jetpack = require("../../src/Entity/Jetpack");
const db = require('../../src/Db');
const JetpackRepository = require('../../src/Repository/JetpackRepository');

module.exports = (req, res) => {
    var id = req.params.id ;

    const repository = new JetpackRepository(db);  
    res.header("Access-Control-Allow-Origin", "*");
    
    var infos = repository.findAll();         
    
    res.status(201).send(infos);    
};