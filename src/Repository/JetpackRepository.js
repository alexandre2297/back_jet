module.exports = class {
    constructor(db) {
        this.db = db;
    }

    create(jetpack) {
        if (!jetpack) {
            throw 'Jetpack object is undefined';
        }

        if (!jetpack.id || !jetpack.name || !jetpack.image) {
            throw 'Jetpack object is missing information';
        }

        this.db
            .get('jetpacks')
            .push(jetpack.toJson())
            .write()
    }

    update(jetpack) {
        if (!jetpack) {
            throw 'Jetpack object is undefined';
        }

        if (!jetpack.id || !jetpack.name || !jetpack.image) {
            throw 'Jetpack object is missing information';
        }
        var found = this.db
                          .get('jetpacks')
                          .find({id : jetpack.id})
                          .value()
        if(found) {
            return this.db
                    .get('jetpacks')
                    .find({id : jetpack.id})
                    .assign({name : jetpack.name, image : jetpack.image})
                    .write() 
        }
        throw 'Jetpack object not found';

       
            
    }

    findAll() {
        return this.db
                   .get('jetpacks')
                   .value()
    }
};