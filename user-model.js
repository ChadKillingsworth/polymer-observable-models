class UserModel extends ObservableModel {
  /** @return {string} */
  get name() {
    return this._name;
  }
  
  /** @param {string} value */
  set name(value) {
    this._name = value;
    this.emit({
      path: 'name',
      value: value
    });
  }
}
