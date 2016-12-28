/** @implements {ObservableModel} */
class UserModel {
  constructor() {
    this._observeable = new Observable(observer => {
      this._observer = observer;
    });
  }

  /** @override */
  get observable() {
    return this._observeable;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    if (this._observer) {
      this._observer.next({
        path: 'name',
        value: value
      });
    }
  }
}
