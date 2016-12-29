class UserModel extends ObservableModel {
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this.emit({
      path: 'name',
      value: value
    });
  }
}
