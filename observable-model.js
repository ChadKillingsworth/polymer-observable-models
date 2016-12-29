class ObservableModel {
  constructor() {
    this._observables = new Set();
  }

  /** @type {!Observable} */
  observable() {
    return new Observable(observer => {
      this._observables.add(observer);
      return () => {
        this._observables.delete(observer);
      }
    });
  }

  emit(data) {
    this._observables.forEach(value => {
      value.next(data);
    });
  }
}
