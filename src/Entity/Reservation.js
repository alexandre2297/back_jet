module.exports = class {
    constructor() {
        this._id = null;
        this._start = null;
        this._end = null;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get start() {
        return this._start;
    }

    set start(value) {
        this._start = value;
    }

    get end() {
        return this._end;
    }

    set end(value) {
        this._end = value;
    }

    toJson() {
        return {
            id : this.id,
            start: this.start,
            end: this.end
        }
    }
};