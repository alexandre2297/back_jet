module.exports = class {
  constructor() {
    this._jetpackId = null;
    this._startDate = null;
    this._endDate = null;
  }

  get jetpackId() {
    return this._jetpackId;
  }

  set jetpackId(value) {
    if (value) {
      this._jetpackId = value;
    }
  }

  get startDate() {
    return this._startDate;
  }

  set startDate(value) {
    if (value) {
      this._startDate = new Date(value).toISOString().substring(0, 10);
    } else {
      this._startDate = null;
    }
  }

  get endDate() {
    return this._endDate;
  }

  set endDate(value) {
    if (value) {
      this._endDate = new Date(value).toISOString().substring(0, 10);
    } else {
      this._endDate = null;
    }
  }

  toJson() {
    return {
      jetpack_id: this.jetpackId,
      start_date: this.startDate,
      end_date: this.endDate
    };
  }
};
